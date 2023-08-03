import { useEffect, useState, useRef } from "react";
import { useWindowSize } from "~/hooks";
import p5 from "p5";
import VoyageYear from "./VoyageYear";
import Axis from "./Axis";
import Toggle from "~/components/Toggle";
import Slider from "./Slider";

const MIN_YEAR = 1565;
const MAX_YEAR = 1858;

function Voyages() {
  const windowSize = useWindowSize();
  const voyageTable = useRef();
  const colorTable = useRef();
  const p5Ref = useRef();
  const voyages = useRef([]);
  const filteredVoyages = useRef([]);
  const showAllRef = useRef<boolean>(false);
  const [showAllState, setShowAllState] = useState<boolean>(false);
  const [startYear, setStartYear] = useState<number>(MIN_YEAR);
  const [endYear, setEndYear] = useState<number>(MIN_YEAR + 20);
  const [yearRange, setYearRange] = useState<array>([MIN_YEAR, MIN_YEAR + 20]);
  const [width, setWidth] = useState<number | undefined>(window.outerWidth - 100);
  const [height, setHeight] = useState<number | undefined>(window.outerHeight / 3);

  useEffect(() => {
    setWidth(windowSize.width - 100);
    setHeight(windowSize.height / 3);
  }, [windowSize]);

  useEffect(() => {
    if (!p5Ref.current) return;
    filteredVoyages.current = voyages.current.filter(obj => obj.year >= yearRange[0] && obj.year <= yearRange[1]);
    filteredVoyages.current.forEach((filteredVoyage) => {
      filteredVoyage.updateMinMax(
        filteredVoyages.current.reduce((min, obj) => (obj.dur < min ? obj.dur : min), filteredVoyages.current[0].dur),
        filteredVoyages.current.reduce((max, obj) => (obj.dur > max ? obj.dur : max), filteredVoyages.current[0].dur),
        filteredVoyages.current.reduce((min, obj) => (obj.totalEmbarked < min ? obj.totalEmbarked : min), filteredVoyages.current[0].totalEmbarked),
        filteredVoyages.current.reduce((max, obj) => (obj.totalEmbarked > max ? obj.totalEmbarked : max), filteredVoyages.current[0].totalEmbarked),
        yearRange[0],
        yearRange[1]
      );
    });
    p5Ref.current.redraw();
    // play();
  }, [yearRange]);

  const toggleFunction = () => {
    showAllRef.current = !showAllRef.current;
    setShowAllState(showAll => !showAll);
    p5Ref.current.redraw();
  }

  useEffect(() => {
    const initP5 = (p5: p5) => {
      voyages.current = []; // The array containing all the voyages
      filteredVoyages.current = [];
      let t = 0;  // Transition parameter
      let nonResistanceStrokeWidth = 0; //the stroke width of non-resistance voyages curves

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
              yearRange[0],
              yearRange[1],
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
        filteredVoyages.current = voyages.current.filter(obj => obj.year >= yearRange[0] && obj.year <= yearRange[1]);
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
          <Axis width={width} height={height} yearRange={yearRange} />
        }
        <section id="voyageControls" className="w-11/12 h-8 multi-range"></section>
        <section>
          <Slider width={width} yearRange={yearRange} setYearRange={setYearRange} />
        </section>
      </div>
    </section>
  );
}

export default Voyages;