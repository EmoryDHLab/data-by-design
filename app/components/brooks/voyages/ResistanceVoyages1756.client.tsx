import { useEffect, useState, useRef } from "react";
import { useResizeObserver } from "~/hooks";
import p5 from "p5";
import VoyageYear from "./VoyageYear";
import Axis from "./Axis";
import voyageData from "~/data/brooks/voyages.json";
import { randomColor, voyageConstants } from "./utils";
import type { TVoyage } from "~/types/voyage";

const INITIAL_YEAR_RANGE = [1756, 1766];

function ResistanceVoyages1756() {
  const { windowSize } = useResizeObserver();
  const p5Ref = useRef<p5 | undefined>();
  const voyages = useRef<Array<VoyageYear>>([]);
  const filteredVoyages = useRef<Array<VoyageYear>>([]);
  const showAllRef = useRef<boolean>(false);
  const [width, setWidth] = useState<number>(window.outerWidth * 0.75);
  const [height, setHeight] = useState<number>(window.outerHeight * 0.45);

  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      setWidth(windowSize.width * 0.75);
      setHeight(windowSize.height * 0.45);
    }
  }, [windowSize]);

  useEffect(() => {
    const initP5 = (p5: p5) => {
      voyages.current = [];
      filteredVoyages.current = [];
      let lerpAmount = 0;
      let nonResistanceStrokeWidth = 0;

      p5.setup = () => {
        p5.createCanvas(width, height).parent("resistanceVoyageContainer1756");

        const currentVoyages = (voyageData as TVoyage[]).filter(
          (obj) =>
            obj.year >= INITIAL_YEAR_RANGE[0] &&
            obj.year <= INITIAL_YEAR_RANGE[1] &&
            obj.resistanceReported
        );

        currentVoyages.forEach((voyage: TVoyage) => {
          voyages.current.push(
            new VoyageYear(
              p5,
              voyage,
              INITIAL_YEAR_RANGE[0],
              INITIAL_YEAR_RANGE[1],
              height,
              width,
              nonResistanceStrokeWidth,
              lerpAmount
            )
          );
        });
      };

      //The  main visualization
      p5.draw = () => {
        // p5.background(250, 241, 233);
        p5.background(250, 241, 233);
        if (lerpAmount < 1 && showAllRef.current) {
          lerpAmount += 0.01;
          nonResistanceStrokeWidth += 0.005;
        }

        voyages.current.forEach((voyage) => voyage.show());

        p5.noLoop();
      };
    };

    if (width && height) {
      p5Ref.current = new p5(initP5);
    }

    const p5Copy = p5Ref.current;

    return () => {
      p5Copy?.remove();
    };
  }, [width, height]);

  return (
    <section className="w-screen">
      <div className="flex flex-col items-center mt-6 text-white">
        <div id="resistanceVoyageContainer1756" className=""></div>
        {width && (
          <Axis width={width} color="black" yearRange={INITIAL_YEAR_RANGE} />
        )}
      </div>
    </section>
  );
}

export default ResistanceVoyages1756;
