import { useEffect, useState, useRef } from "react";
import { useWindowSize } from "~/hooks";
import p5 from "p5";
import VoyageYear from "./VoyageYear";
import Axis from "./Axis";
import voyageData from "~/data/brooks/voyages.json";
import { randomColor, voyageConstants } from "./utils";

const INITIAL_YEAR_RANGE = [1756, 1766];

function AllVoyages1756() {
  const windowSize = useWindowSize();
  const p5Ref = useRef<p5 | undefined>();
  const voyages = useRef<Array<VoyageYear>>([]);
  const filteredVoyages = useRef<Array<VoyageYear>>([]);
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
        p5.createCanvas(width, height).parent("allVoyageContainer1756");

        const currentVoyages = voyageData.filter(
          (obj) =>
            obj.year >= INITIAL_YEAR_RANGE[0] &&
            obj.year <= INITIAL_YEAR_RANGE[1]
        );

        currentVoyages.forEach((voyage) => {
          const rgb = randomColor(voyage.resistanceReported);

          const upper =
            10 +
            p5.map(
              voyage.duration,
              voyageConstants.minDuration,
              voyageConstants.maxDuration,
              0,
              voyageConstants.maxOverlap
            );

          const curveSeeds = {
            c1: p5.random(upper * -1, upper),
            c2: p5.random(upper * -1, upper),
            c3: p5.random(upper * -1, upper),
            c4: p5.random(upper * -1, upper),
            c5: p5.random(upper * -1, upper),
            c6: p5.random(upper * -1, upper),
            c7: p5.random(upper * -1, upper),
          };

          const vertexLower = p5.map(
            voyage.totalPeople * (1 - voyage.mortalityRate),
            voyageConstants.minEmbark,
            voyageConstants.maxEmbark,
            0,
            voyageConstants.maxWidth
          );
          const vertexUpper = p5.map(
            voyage.totalPeople,
            voyageConstants.minEmbark,
            voyageConstants.maxEmbark,
            0,
            voyageConstants.maxWidth
          );

          const vertexSeeds = {
            c1: p5.random(vertexLower, vertexUpper),
            c2: p5.random(vertexLower, vertexUpper),
            c3: p5.random(vertexLower, vertexUpper),
            c4: p5.random(vertexLower, vertexUpper),
            c5: p5.random(vertexLower, vertexUpper),
            c6: p5.random(vertexLower, vertexUpper),
            c7: p5.random(vertexLower, vertexUpper),
          };

          voyages.current.push(
            new VoyageYear(
              p5,
              voyage,
              rgb,
              INITIAL_YEAR_RANGE[0],
              INITIAL_YEAR_RANGE[1],
              height,
              width,
              nonResistanceStrokeWidth,
              lerpAmount,
              curveSeeds,
              vertexSeeds
            )
          );
        });
      };

      //The  main visualization
      p5.draw = () => {
        // p5.background(250, 241, 233);
        p5.background(250, 241, 233);

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
        <div id="allVoyageContainer1756"></div>
        {width && (
          <Axis width={width} color="black" yearRange={INITIAL_YEAR_RANGE} />
        )}
      </div>
    </section>
  );
}

export default AllVoyages1756;
