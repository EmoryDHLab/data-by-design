import { useEffect, useState, useRef } from "react";
import { useWindowSize } from "~/hooks";
import p5 from "p5";
import VoyageYear from "./VoyageYear";
import Axis from "./Axis";
import Toggle from "~/components/Toggle";
import Slider from "./Slider";
import voyageData from "~/data/brooks/voyages.json";
import colors from "~/data/brooks/colors.json";

const MIN_YEAR = 1565;
const MAX_YEAR = 1858;

function Voyages() {
  const windowSize = useWindowSize();
  const p5Ref = useRef();
  const voyages = useRef([]);
  const filteredVoyages = useRef([]);
  const showAllRef = useRef<boolean>(false);
  const [showAllState, setShowAllState] = useState<boolean>(false);
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
        filteredVoyages.current.reduce((min, obj) => (obj.duration < min ? obj.duration : min), filteredVoyages.current[0].duration),
        filteredVoyages.current.reduce((max, obj) => (obj.duration > max ? obj.duration : max), filteredVoyages.current[0].duration),
        filteredVoyages.current.reduce((min, obj) => (obj.totalEmbarked < min ? obj.totalEmbarked : min), filteredVoyages.current[0].totalEmbarked),
        filteredVoyages.current.reduce((max, obj) => (obj.totalEmbarked > max ? obj.totalEmbarked : max), filteredVoyages.current[0].totalEmbarked),
        yearRange[0],
        yearRange[1]
      );
    });
    p5Ref.current.redraw();
  }, [yearRange]);

  const toggleFunction = () => {
    setShowAllState(showAll => !showAll);
    showAllRef.current = !showAllRef.current;
    p5Ref.current.redraw();
  }

  useEffect(() => {
    const initP5 = (p5: p5) => {
      voyages.current = []; // The array containing all the voyages
      filteredVoyages.current = [];
      let lerpAmount = 0;  // Transition parameter
      let nonResistanceStrokeWidth = 0; //the stroke width of non-resistance voyages curves

      p5.setup = () => {
        p5.createCanvas(
          width,
          height
        ).parent("voyageContainer");

        voyageData.forEach((voyage) => {
          const rgb = [
            colors.reds[Math.floor(Math.random() * colors.reds.length)],
            colors.greens[Math.floor(Math.random() * colors.greens.length)],
            colors.blues[Math.floor(Math.random() * colors.blues.length)],
          ];

          voyages.current.push(
            new VoyageYear(
              p5,
              voyage.id,
              voyage.totalPeople,
              voyage.mortalityRate,
              voyage.year,
              voyage.resistanceReported,
              voyage.duration,
              rgb,
              yearRange[0],
              yearRange[1],
              height,
              width,
              nonResistanceStrokeWidth,
              lerpAmount
            )
          )
        });

        //filter the voyages out based on the values on the slider.
        filteredVoyages.current = voyages.current.filter(obj => obj.year >= yearRange[0] && obj.year <= yearRange[1]);
      };

      //The  main visualization
      p5.draw = () => {
        p5.background(28, 24, 23);
        if(lerpAmount < 1 && showAllRef.current){
          lerpAmount += 0.01;
          nonResistanceStrokeWidth += 0.005;
        }

        for (const index in filteredVoyages.current) {
          if (showAllRef.current || filteredVoyages.current[index].isResistance) {
            filteredVoyages.current[index].updateTransition(
              lerpAmount,
              nonResistanceStrokeWidth,
              filteredVoyages.current[index].year
            );
            filteredVoyages.current[index].show();
          }
        }

        if (!showAllRef.current || lerpAmount >= 1) {
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