import { useEffect, useState, useRef } from "react";
import { useWindowSize } from "~/hooks";
import p5 from "p5";
import VoyageYear from "./VoyageYear";
import Axis from "./Axis";
import Slider from "./Slider";
import voyageData from "~/data/brooks/voyages.json";
import { randomColor, voyageConstants } from "./utils";

const INITIAL_YEAR_RANGE = [1565, 1575];

function AllVoyages() {
  const windowSize = useWindowSize();
  const p5Ref = useRef<p5 | undefined>();
  const voyages = useRef<Array<VoyageYear>>([]);
  const filteredVoyages = useRef<Array<VoyageYear>>([]);
  const [yearRange, setYearRange] = useState<number[]>(INITIAL_YEAR_RANGE);
  const [width, setWidth] = useState<number>(window.outerWidth - 100);
  const [height, setHeight] = useState<number>(window.outerHeight * 0.45);

  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      setWidth(windowSize.width - 100);
      setHeight(windowSize.height * 0.45);
    }
  }, [windowSize]);

  useEffect(() => {
    if (!p5Ref.current) return;
    filteredVoyages.current = voyages.current.filter(obj => obj.year >= yearRange[0] && obj.year <= yearRange[1]);
    filteredVoyages.current.forEach((filteredVoyage) => {
      filteredVoyage.updateMinMax(
        filteredVoyages.current.reduce((min, obj) => (obj.duration < min ? obj.duration : min), filteredVoyages.current[0].duration),
        filteredVoyages.current.reduce((max, obj) => (obj.duration > max ? obj.duration : max), filteredVoyages.current[0].duration),
        filteredVoyages.current.reduce((min, obj) => (obj.totalPeople < min ? obj.totalPeople : min), filteredVoyages.current[0].totalPeople),
        filteredVoyages.current.reduce((max, obj) => (obj.totalPeople > max ? obj.totalPeople : max), filteredVoyages.current[0].totalPeople),
        yearRange[0],
        yearRange[1]
      );
    });
    p5Ref.current.redraw();
  }, [yearRange]);

  useEffect(() => {
    const initP5 = (p5: p5) => {
      voyages.current = []; // The array containing all the voyages
      filteredVoyages.current = [];
      let lerpAmount = 0;  // Transition parameter
      let nonResistanceStrokeWidth = 0; //the stroke width of non-resistance voyages curves

      p5.setup = () => {
        p5.createCanvas(
          width + 20000,
          height
        ).parent("allVoyageContainer");

        voyageData.forEach((voyage) => {
          const rgb = randomColor(true);

          const upper = 10 + p5.map(
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
            c7: p5.random(upper * -1, upper)
          };

          const vertexLower = p5.map(voyage.totalPeople * (1 - voyage.mortalityRate), voyageConstants.minEmbark, voyageConstants.maxEmbark, 0, voyageConstants.maxWidth);
          const vertexUpper = p5.map(voyage.totalPeople, voyageConstants.minEmbark, voyageConstants.maxEmbark, 0, voyageConstants.maxWidth);

          const vertexSeeds = {
            c1: p5.random(vertexLower, vertexUpper),
            c2: p5.random(vertexLower, vertexUpper),
            c3: p5.random(vertexLower, vertexUpper),
            c4: p5.random(vertexLower, vertexUpper),
            c5: p5.random(vertexLower, vertexUpper),
            c6: p5.random(vertexLower, vertexUpper),
            c7: p5.random(vertexLower, vertexUpper)
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
          )
        });

        //filter the voyages out based on the values on the slider.
        filteredVoyages.current = voyages.current.filter(obj => obj.year >= INITIAL_YEAR_RANGE[0] && obj.year <= INITIAL_YEAR_RANGE[1]);
      };

      //The  main visualization
      p5.draw = () => {
        // p5.background(250, 241, 233);
        p5.background(28, 24, 23);

        for (const index in filteredVoyages.current) {
          filteredVoyages.current[index].updateTransition(
            lerpAmount,
            nonResistanceStrokeWidth,
            filteredVoyages.current[index].year
          );
          filteredVoyages.current[index].show();
        }

        p5.noLoop();
      }
    };

    if (width && height) {
      p5Ref.current = new p5(initP5);
    }

    const p5Copy = p5Ref.current;

    return () => {
      p5Copy?.remove();
    }
  }, [width, height]);

  return (
    <section className="bg-black w-screen">
      <div className="flex flex-col items-center mt-6 text-white">
        <div>
          <Slider width={width} yearRange={yearRange} setYearRange={setYearRange} />
        </div>
        <div id="allVoyageContainer" className="w-screen"></div>
        { width &&
          <Axis width={width} yearRange={yearRange} />
        }
      </div>
    </section>
  );
}

export default AllVoyages;