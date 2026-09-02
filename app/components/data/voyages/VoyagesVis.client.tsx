import { useEffect, useState, useRef } from "react";
import { useDeviceContext, useResizeObserver } from "~/hooks";
import p5 from "p5";
import Voyage from "./Voyage";
import Axis from "./Axis";
import Slider from "./Slider";
import voyageData from "~/data/description/voyages.json";
import type { TVoyage } from "~/types/voyage";

const INITIAL_YEAR_RANGE = [1565, 1575];

interface Props {
  axisBg?: string;
  axisColor?: string;
  border?: boolean;
  startYear?: number;
  endYear?: number;
  background?: number[];
  showSlider?: boolean;
  showAxis?: boolean;
  id?: string;
  allVoyages?: boolean;
  fullColor?: boolean;
  widthAdjust?: number;
  heightAdjust?: number;
  interactive?: boolean;
  className?: string;
}

function VoyagesVis({
  axisBg,
  axisColor,
  border = true,
  startYear = INITIAL_YEAR_RANGE[0],
  endYear = INITIAL_YEAR_RANGE[1],
  background = [253, 249, 246],
  showAxis = true,
  showSlider = true,
  allVoyages = true,
  fullColor = true,
  widthAdjust = 0.9,
  heightAdjust = 0.45,
  interactive = false,
  id = "allVoyageContainer",
  className,
}: Props) {
  const { windowSize } = useResizeObserver();
  const { isDesktop } = useDeviceContext();
  const p5Ref = useRef<p5 | undefined>();
  const yearRangeRef = useRef<number[]>([startYear, endYear]);
  const backgroundRef = useRef<number[]>(background);
  const idRef = useRef<string>(id);
  const allVoyagesRef = useRef<boolean>(allVoyages);
  const fullColorRef = useRef<boolean>(fullColor);
  const voyages = useRef<Array<Voyage>>([]);
  const filteredVoyages = useRef<Array<Voyage>>([]);
  const [yearRange, setYearRange] = useState<number[]>([startYear, endYear]);
  const [prevYearProps, setPrevYearProps] = useState<number[]>([
    startYear,
    endYear,
  ]);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [widthDiff, setWidthDiff] = useState<number>(0);
  const borderRef = useRef<boolean>(border);

  // Sync yearRange to the startYear/endYear props when they change, computed
  // directly in the render body (React's documented pattern for this) rather
  // than an effect - this preserves the pre-paint timing ScrollingVoyageVis
  // relies on when it drives startYear/endYear continuously during scroll.
  // An effect would paint once with stale yearRange, then correct it a frame
  // later on every scroll tick.
  if (prevYearProps[0] !== startYear || prevYearProps[1] !== endYear) {
    setPrevYearProps([startYear, endYear]);
    setYearRange([startYear, endYear]);
  }

  // We keep these props in refs so the p5 setup callback (below) can read
  // current values without re-running the whole canvas setup each time one
  // of them changes.
  useEffect(() => {
    yearRangeRef.current = [startYear, endYear];
    backgroundRef.current = background;
    idRef.current = id;
    allVoyagesRef.current = allVoyages;
    fullColorRef.current = fullColor;
  }, [startYear, endYear, background, id, allVoyages, fullColor]);

  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      setWidth(windowSize.width * widthAdjust);
      setHeight(windowSize.height * heightAdjust);
      setWidthDiff(windowSize.width - windowSize.width * widthAdjust);
    }
  }, [windowSize, widthAdjust, heightAdjust]);

  useEffect(() => {
    if (!p5Ref.current) return;
    filteredVoyages.current = voyages.current.filter(
      (obj) => obj.year >= yearRange[0] && obj.year <= yearRange[1]
    );
    if (!allVoyagesRef.current) {
      filteredVoyages.current = filteredVoyages.current.filter(
        (obj) => obj.resistanceReported
      );
    }
    filteredVoyages.current.forEach((filteredVoyage) => {
      filteredVoyage.updateMinMax(yearRange[0], yearRange[1]);
    });
    p5Ref.current.redraw();
  }, [yearRange]);

  useEffect(() => {
    const initP5 = (p5: p5) => {
      voyages.current = []; // The array containing all the voyages
      filteredVoyages.current = [];

      p5.setup = () => {
        const canvas = p5
          .createCanvas(width + widthDiff, height)
          .parent(idRef.current);
        if (borderRef.current) {
          canvas.addClass("border-2 border-offblack");
        }
        (voyageData as TVoyage[]).forEach((voyage: TVoyage) => {
          voyages.current.push(
            new Voyage(
              p5,
              voyage,
              yearRangeRef.current[0],
              yearRangeRef.current[1],
              height,
              width,
              widthDiff,
              fullColorRef.current
            )
          );
        });

        //filter the voyages out based on the values on the slider.
        filteredVoyages.current = voyages.current.filter(
          (obj) =>
            obj.year >= yearRangeRef.current[0] &&
            obj.year <= yearRangeRef.current[1]
        );

        if (!allVoyagesRef.current) {
          filteredVoyages.current = filteredVoyages.current.filter(
            (obj) => obj.resistanceReported
          );
        }
      };

      //The  main visualization
      p5.draw = () => {
        p5.background(backgroundRef.current);

        for (const index in filteredVoyages.current) {
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
  }, [width, height, widthDiff]);

  return (
    <div
      className={`w-screen relative z-10 overflow-x-hidden transition-opacity duration-1000 ${className}`}
    >
      <div className="flex flex-col items-center text-white">
        {showSlider && (
          <div className={`bg-black ${interactive ? "" : "w-screen"}`}>
            <Slider
              width={isDesktop ? width : width}
              yearRange={yearRange}
              setYearRange={setYearRange}
              interactive={interactive}
            />
          </div>
        )}
        <div className="" id={id}></div>
        {width && (
          <div
            className={`opacity-${
              showAxis ? 100 : 0
            } transition-opacity duration-1000`}
          >
            <Axis
              width={width - widthDiff}
              yearRange={yearRange}
              widthAdjustment={45}
              color={axisColor ?? "black"}
              background={axisBg ?? undefined}
              interactive={interactive}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default VoyagesVis;
