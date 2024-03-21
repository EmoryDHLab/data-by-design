import { useEffect, useState, useRef } from "react";
import { useResizeObserver } from "~/hooks";
import p5 from "p5";
import VoyageYear from "../voyages/VoyageYear";
import voyageData from "~/data/brooks/voyages.json";
import type { TVoyage } from "~/types/voyage";

const INITIAL_YEAR_RANGE = [1586, 1588];
// const INITIAL_YEAR_RANGE = [1714, 1716];

function SampleVoyages() {
  const { windowSize } = useResizeObserver();
  const p5Ref = useRef<p5 | undefined>();
  const voyages = useRef<Array<VoyageYear>>([]);
  const filteredVoyages = useRef<Array<VoyageYear>>([]);
  const [width, setWidth] = useState<number>(window.outerWidth * 0.5);
  const [height, setHeight] = useState<number>(window.outerHeight);

  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      setWidth(windowSize.width * 0.5);
      setHeight(windowSize.height);
    }
  }, [windowSize]);

  useEffect(() => {
    const initP5 = (p5: p5) => {
      voyages.current = [];
      filteredVoyages.current = [];
      let lerpAmount = 0;
      let nonResistanceStrokeWidth = 0;

      p5.setup = () => {
        p5.createCanvas(width, height).parent("sample-voyages");

        const currentVoyages = (voyageData as TVoyage[]).filter(
          (obj) =>
            obj.year >= INITIAL_YEAR_RANGE[0] &&
            obj.year <= INITIAL_YEAR_RANGE[1]
        );

        currentVoyages.forEach((voyage: TVoyage) => {
          if (voyage.year === 1587) {
            voyages.current.push(
              new VoyageYear(
                p5,
                voyage,
                INITIAL_YEAR_RANGE[0],
                INITIAL_YEAR_RANGE[1],
                height,
                width,
                nonResistanceStrokeWidth,
                lerpAmount,
                true
              )
            );
          }
        });
      };

      //The  main visualization
      p5.draw = () => {
        // if (lerpAmount < 1 && showAllRef.current) {
        //   lerpAmount += 0.01;
        //   nonResistanceStrokeWidth += 0.005;
        // }

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

  return <div id="sample-voyages" className="fixed top-12"></div>;
}

export default SampleVoyages;
