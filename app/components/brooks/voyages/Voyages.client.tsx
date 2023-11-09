import { useEffect, useState, useRef, useMemo } from "react";
import { useResizeObserver } from "~/hooks";
import p5 from "p5";
// import { ChapterContext } from "~/chapterContext";
import VoyageYear from "./VoyageYear";
import Axis from "./Axis";
// import Toggle from "~/components/Toggle";
// import Slider from "./Slider";
import voyageData from "~/data/brooks/voyages.json";
import { randomColor, voyageConstants } from "./utils";
import type { TVoyage } from "~/types/voyage";

const INITIAL_YEAR_RANGE = [1565, 1575];

function Voyages({ yearRange }: { yearRange: Array<number> }) {
  const { windowSize } = useResizeObserver();
  // const { backgroundColor } = useContext(ChapterContext);
  const p5Ref = useRef<p5 | undefined>();
  const voyages = useRef<Array<VoyageYear>>([]);
  const filteredVoyages = useRef<Array<VoyageYear>>([]);
  const showAllRef = useRef<boolean>(true);
  // const [showAllState, setShowAllState] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.outerWidth * 0.95);
  const [height, setHeight] = useState<number>(window.outerHeight * 0.45);

  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      setWidth(windowSize.width * 0.95);
      setHeight(windowSize.height * 0.45);
    }
  }, [windowSize]);

  useMemo(() => {
    if (!p5Ref.current) return;
    filteredVoyages.current = voyages.current.filter(
      (obj) => obj.year >= yearRange[0] && obj.year <= yearRange[1]
    );
    filteredVoyages.current.forEach((filteredVoyage) => {
      filteredVoyage.updateMinMax(
        yearRange[0],
        yearRange[1]
      );
    });
    p5Ref.current.redraw();
  }, [yearRange]);

  // const toggleFunction = () => {
  //   setShowAllState(showAll => !showAll);
  //   showAllRef.current = !showAllRef.current;
  //   p5Ref.current?.redraw();
  // }

  useEffect(() => {
    const initP5 = (p5: p5) => {
      voyages.current = []; // The array containing all the voyages
      filteredVoyages.current = [];
      let lerpAmount = 0; // Transition parameter
      let nonResistanceStrokeWidth = 0; //the stroke width of non-resistance voyages curves

      p5.setup = () => {
        p5.createCanvas(width, height).parent("voyageContainer");

        (voyageData as TVoyage[]).forEach((voyage: TVoyage) => {
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
            )
          );
        });

        //filter the voyages out based on the values on the slider.
        filteredVoyages.current = voyages.current.filter(
          (obj) =>
            obj.year >= INITIAL_YEAR_RANGE[0] &&
            obj.year <= INITIAL_YEAR_RANGE[1]
        );
      };

      //The  main visualization
      p5.draw = () => {
        p5.background(250, 241, 233);
        // p5.background(28, 24, 23);
        if (lerpAmount < 1 && showAllRef.current) {
          lerpAmount += 0.01;
          nonResistanceStrokeWidth += 0.005;
        }

        for (const index in filteredVoyages.current) {
          if (
            showAllRef.current ||
            filteredVoyages.current[index].resistanceReported
          ) {
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
        <div className="flex items-start w-11/12 mb-6">
          {/* <Toggle
            checked={showAllState}
            onChange={toggleFunction}
            colorOn={backgroundColor}
          >
            Show non-resistance voyages
          </Toggle> */}
        </div>
        <div id="voyageContainer"></div>
        {width && (
          <Axis
            width={width}
            color="black"
            yearRange={yearRange}
            widthAdjustment={45}
          />
        )}
      </div>
    </section>
  );
}

export default Voyages;
