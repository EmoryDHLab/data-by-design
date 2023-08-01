import { useEffect, useState, useRef } from "react";
import { useWindowSize } from "~/hooks";
import p5 from "p5";
import VoyageYear from "./VoyageYear";
import Axis from "./Axis";
import Toggle from "~/components/Toggle";

const MIN_YEAR = 1565;
const MAX_YEAR = 1858;

function Voyages() {
  const windowSize = useWindowSize();
  const voyageTable = useRef();
  const colorTable = useRef();
  const sliderLower = useRef();
  const sliderUpper = useRef();
  const sliderTextLower = useRef();
  const sliderTextUpper = useRef();
  const p5Ref = useRef();
  const voyages = useRef([]);
  const filteredVoyages = useRef([]);
  const showAllRef = useRef<boolean>(false);
  const [showAllState, setShowAllState] = useState<boolean>(false);

  const [startYear, setStartYear] = useState<number>(MIN_YEAR);
  const [width, setWidth] = useState<number | undefined>(window.outerWidth - 100);
  const [height, setHeight] = useState<number | undefined>(window.outerHeight / 3);

  useEffect(() => {
    setWidth(windowSize.width - 100);
    setHeight(windowSize.height / 3);
  }, [windowSize]);

  const toggleFunction = () => {
    showAllRef.current = !showAllRef.current;
    setShowAllState(showAll => !showAll);
    p5Ref.current.redraw();
  }

  useEffect(() => {
    const initP5 = (p5: p5) => {
      voyages.current.current = []; // The array containing all the voyages
      let t = 0;  // Transition parameter
      let nonResistanceStrokeWidth = 0; //the stroke width of non-resistance voyages curves

      filteredVoyages.current = [];

      const slideText = () => {
        const progress = Math.floor(
          ((sliderLower.current.value() - MIN_YEAR) * 100) / ((MAX_YEAR - 10) - MIN_YEAR)
        );
        sliderTextLower.current.style('left', `${(sliderLower.current.width - sliderTextLower.current.elt.clientWidth) * (progress / 100)}px`);
        sliderTextUpper.current.style('left', `${(sliderUpper.current.width - sliderTextUpper.current.elt.clientWidth) * (progress / 100) + ((sliderUpper.current.width * 0.1) - 26)}px`);
      }

      const triggerTransformLower = () => {
        slideText();
        sliderUpper.current.value(sliderLower.current.value() + 10);
        setStartYear(sliderLower.current.value());
        filteredVoyages.current = voyages.current.filter(obj => obj.year >= sliderLower.current.value() && obj.year <= sliderUpper.current.value());
        filteredVoyages.current.forEach((filteredVoyage) => {
          filteredVoyage.updateMinMax(
            filteredVoyages.current.reduce((min, obj) => (obj.dur < min ? obj.dur : min), filteredVoyages.current[0].dur),
            filteredVoyages.current.reduce((max, obj) => (obj.dur > max ? obj.dur : max), filteredVoyages.current[0].dur),
            filteredVoyages.current.reduce((min, obj) => (obj.totalEmbarked < min ? obj.totalEmbarked : min), filteredVoyages.current[0].totalEmbarked),
            filteredVoyages.current.reduce((max, obj) => (obj.totalEmbarked > max ? obj.totalEmbarked : max), filteredVoyages.current[0].totalEmbarked),
          );
        });
        p5.redraw();
      }

      const triggerTransformUpper = () => {
        slideText();
        sliderLower.current.value(sliderUpper.current.value() - 10);
        setStartYear(sliderLower.current.value());
        filteredVoyages.current = voyages.current.filter(obj => obj.year >= sliderLower.current.value() && obj.year <= sliderUpper.current.value());
        filteredVoyages.current.forEach((filteredVoyage) => {
          filteredVoyage.updateMinMax(
            filteredVoyages.current.reduce((min, obj) => (obj.dur < min ? obj.dur : min), filteredVoyages.current[0].dur),
            filteredVoyages.current.reduce((max, obj) => (obj.dur > max ? obj.dur : max), filteredVoyages.current[0].dur),
            filteredVoyages.current.reduce((min, obj) => (obj.totalEmbarked < min ? obj.totalEmbarked : min), filteredVoyages.current[0].totalEmbarked),
            filteredVoyages.current.reduce((max, obj) => (obj.totalEmbarked > max ? obj.totalEmbarked : max), filteredVoyages.current[0].totalEmbarked),
          );
        });

        p5.redraw();
      }

      //preload the voyage data and color data
      p5.preload = () => {
        voyageTable.current = p5.loadTable("/data/p5_vis_4_all.csv","csv","header");
        colorTable.current = p5.loadTable("/data/colors.csv", "csv", "header");
      };

      p5.setup = () => {
        p5.createCanvas(
          width,
          height
        ).parent("voyageContainer");

        //define the double slider
        sliderLower.current = p5.createSlider(MIN_YEAR, MAX_YEAR - 10, MIN_YEAR, 1).parent("voyageControls");
        sliderUpper.current = p5.createSlider(MIN_YEAR + 10, MAX_YEAR, MIN_YEAR + 10, 1).parent("voyageControls");

        //set the width of the slider
        sliderLower.current.style('width', (width - (width * 0.1)) + 'px');
        sliderUpper.current.style('width', (width - (width * 0.1)) + 'px');
        sliderUpper.current.style('left', (width * 0.1) + 'px');

        //add dragging events to both sides of the slider
        sliderLower.current.input(triggerTransformLower)
        sliderUpper.current.input(triggerTransformUpper)

        sliderTextLower.current = p5.createSpan().parent("#slider-labels");
        sliderTextUpper.current = p5.createSpan().parent("#slider-labels");

        sliderTextLower.current.style('font-size', '1rem');
        sliderTextLower.current.style('margin-left', "0%")
        sliderTextLower.current.style('color', 'white');
        sliderTextLower.current.style('position', "relative");
        sliderTextUpper.current.style('font-size', '1rem');
        sliderTextUpper.current.style('color', 'white');
        sliderTextUpper.current.style('color', 'white');
        sliderTextUpper.current.style('position', "relative");
        sliderTextUpper.current.style('left', `${(sliderUpper.current.width * 0.1) - 26}px`);


        let voyageRows = voyageTable.current.rows.filter((r) =>
          r.getNum("year_of_arrival_at_port_of_disembarkation") >= MIN_YEAR &&
          r.getNum("year_of_arrival_at_port_of_disembarkation") <= MAX_YEAR
        );
        let avgEmbarks = voyageRows.map((row) => row.getNum("total_embarked_18"));
        let durations = voyageRows.map((row) => row.getNum("derived_duration"));
        const minEmbark = p5.min(...avgEmbarks);
        const maxEmbark = p5.max(...avgEmbarks);
        const minDuration = p5.min(...durations);
        const maxDuration = p5.max(...durations);
        voyageRows.forEach((row) => {
          voyages.current.push(
            new VoyageYear(
              p5,
              row.getString("voyage_id"),
              row.getNum("total_embarked_18"),
              row.getNum("mortality_rate"),
              225,
              0, // placeholder for "r"
              row.getNum("year_of_arrival_at_port_of_disembarkation"),
              row.getNum("if_res"),
              row.getNum("derived_duration"),
              colorTable.current,
              Math.floor(Math.random() * (MAX_YEAR - MIN_YEAR) + MIN_YEAR),
              sliderLower.current,
              sliderUpper.current,
              minEmbark,
              maxEmbark,
              height,
              width,
              minDuration,
              maxDuration,
              nonResistanceStrokeWidth,
              t
            )
          )
        });

        //filter the voyages out based on the values on the slider.
        filteredVoyages.current = voyages.current.filter(obj => obj.year >= sliderLower.current.value() && obj.year <= sliderUpper.current.value());
      };

      //The  main visualization
      p5.draw = () => {
        p5.background(28, 24, 23);
        if(t < 1 && showAllRef.current){
          t += 0.01;
          nonResistanceStrokeWidth += 0.005;
        }

        for (const index in filteredVoyages.current) {
          if (showAllRef.current || filteredVoyages.current[index].isResistance) {
            filteredVoyages.current[index].updateTransition(
              t,
              nonResistanceStrokeWidth,
              filteredVoyages.current[index].year
            );
            filteredVoyages.current[index].show();
          }
        }

        sliderTextLower.current.html(`${sliderLower.current.value()}`);
        sliderTextUpper.current.html(`${sliderUpper.current.value()}`);

        if (!showAllRef.current || t >= 1) {
          p5.noLoop();
        } else {
          p5.loop();
        }
      }
    };

    if (width && height) {
      p5Ref.current = new p5(initP5);
    }

    const p5Copy = p5Ref.current;

    return () => {
      p5Copy.remove();
    }
  }, [width, height]);

  return (
    <section className="bg-black w-screen">
      <div className="flex flex-col items-center mt-6 text-white">
        <section className="flex items-start w-11/12 mb-6">
          <Toggle
            checked={showAllState}
            onChange={toggleFunction}
          >
            Show non-resistance voyages
          </Toggle>
        </section>
        <section id="voyageContainer"></section>
        { width &&
          <Axis width={width} height={height} start={startYear} end={startYear + 10} />
        }
        <section id="slider-labels" className="flex items-start w-11/12">
        </section>
        <section id="voyageControls" className="w-11/12 h-8 multi-range"></section>
        <section className="flex w-11/12">
          <p className="flex-none mt-0 mb-4">{MIN_YEAR}</p>
          <p className="grow mt-0 mb-4"></p>
          <p className="flex-none mt-0 mb-4">{MAX_YEAR}</p>
        </section>
      </div>
    </section>
  );
}

export default Voyages;