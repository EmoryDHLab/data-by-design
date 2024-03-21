import { useEffect, useState, useRef, useMemo } from "react";
import { useResizeObserver } from "~/hooks";
import p5 from "p5";
import VoyageYear from "./VoyageYear";
import Axis from "./Axis";
import Slider from "./Slider";
import voyageData from "~/data/brooks/voyages.json";
import type { TVoyage } from "~/types/voyage";

const INITIAL_YEAR_RANGE = [1565, 1575];

interface Props {
  startYear?: number;
  endYear?: number;
  background?: number[];
  showSlider?: boolean;
  showAxis?: boolean;
  id?: string;
}

function AllVoyages({
  startYear = INITIAL_YEAR_RANGE[0],
  endYear = INITIAL_YEAR_RANGE[1],
  background = [250, 241, 233],
  showAxis = true,
  showSlider = true,
  id = "allVoyageContainer",
}: Props) {
  const { windowSize } = useResizeObserver();
  const p5Ref = useRef<p5 | undefined>();
  const yearRangeRef = useRef<number[]>([startYear, endYear]);
  const backgroundRef = useRef<number[]>(background);
  const idRef = useRef<string>(id);
  const voyages = useRef<Array<VoyageYear>>([]);
  const filteredVoyages = useRef<Array<VoyageYear>>([]);
  const [yearRange, setYearRange] = useState<number[]>([startYear, endYear]);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      setWidth(windowSize.width - 100);
      setHeight(windowSize.height * 0.45);
    }
  }, [windowSize]);

  useMemo(() => {
    if (!p5Ref.current) return;
    filteredVoyages.current = voyages.current.filter(
      (obj) => obj.year >= yearRange[0] && obj.year <= yearRange[1]
    );
    filteredVoyages.current.forEach((filteredVoyage) => {
      filteredVoyage.updateMinMax(yearRange[0], yearRange[1]);
    });
    p5Ref.current.redraw();
  }, [yearRange]);

  useMemo(() => {
    setYearRange([startYear, endYear]);
  }, [startYear, endYear]);

  useEffect(() => {
    const initP5 = (p5: p5) => {
      voyages.current = []; // The array containing all the voyages
      filteredVoyages.current = [];
      let lerpAmount = 0; // Transition parameter
      let nonResistanceStrokeWidth = 0; //the stroke width of non-resistance voyages curves

      p5.setup = () => {
        p5.createCanvas(width, height).parent(idRef.current);

        (voyageData as TVoyage[]).forEach((voyage: TVoyage) => {
          voyages.current.push(
            new VoyageYear(
              p5,
              voyage,
              yearRangeRef.current[0],
              yearRangeRef.current[1],
              height,
              width,
              nonResistanceStrokeWidth,
              lerpAmount,
              true
            )
          );
        });

        //filter the voyages out based on the values on the slider.
        filteredVoyages.current = voyages.current.filter(
          (obj) =>
            obj.year >= yearRangeRef.current[0] &&
            obj.year <= yearRangeRef.current[1]
        );
      };

      //The  main visualization
      p5.draw = () => {
        p5.background(backgroundRef.current);

        for (const index in filteredVoyages.current) {
          // filteredVoyages.current[index].updateTransition(
          //   lerpAmount,
          //   nonResistanceStrokeWidth,
          //   filteredVoyages.current[index].year
          // );
          filteredVoyages.current[index].show();
        }

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
    <div className="w-screen">
      <div className="flex flex-col items-center mt-6 text-white">
        <div
          className={`bg-black mb-3 transition-opacity duration-1000 opacity-${
            showSlider ? 100 : 0
          }`}
        >
          <Slider
            width={width}
            yearRange={yearRange}
            setYearRange={setYearRange}
          />
        </div>
        <div id={id}></div>
        {width && (
          <div
            className={`opacity-${
              showAxis ? 100 : 0
            } transition-opacity duration-1000`}
          >
            <Axis
              width={width}
              yearRange={[startYear, endYear]}
              widthAdjustment={45}
              color="black"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default AllVoyages;
