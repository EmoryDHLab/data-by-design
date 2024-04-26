import { useEffect, useState, useRef, useMemo } from "react";
import { useResizeObserver } from "~/hooks";
import p5 from "p5";
import Voyage from "./Voyage";
import Axis from "./Axis";
import Slider from "./Slider";
import voyageData from "~/data/description/voyages.json";
import type { TVoyage } from "~/types/voyage";

const INITIAL_YEAR_RANGE = [1565, 1575];

interface Props {
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
  isSample?: boolean;
  interactive?: boolean;
}

function VoyagesVis({
  startYear = INITIAL_YEAR_RANGE[0],
  endYear = INITIAL_YEAR_RANGE[1],
  background = [253, 249, 246],
  showAxis = true,
  showSlider = true,
  allVoyages = true,
  fullColor = true,
  isSample = false,
  widthAdjust = 0.9,
  heightAdjust = 0.45,
  interactive = false,
  id = "allVoyageContainer",
}: Props) {
  const { windowSize } = useResizeObserver();
  const p5Ref = useRef<p5 | undefined>();
  const yearRangeRef = useRef<number[]>([startYear, endYear]);
  const backgroundRef = useRef<number[]>(background);
  const idRef = useRef<string>(id);
  const allVoyagesRef = useRef<boolean>(allVoyages);
  const fullColorRef = useRef<boolean>(fullColor);
  const isSampleRef = useRef<boolean>(isSample);
  const voyages = useRef<Array<Voyage>>([]);
  const filteredVoyages = useRef<Array<Voyage>>([]);
  const [yearRange, setYearRange] = useState<number[]>([startYear, endYear]);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [widthDiff, setWidthDiff] = useState<number>(0);

  // We make a bunch of refs so we can use properties in the initial setup.
  // We don't want the initial setup to run each time one of these is updated,
  // but we do need to keep them current.
  useEffect(() => {
    yearRangeRef.current = [startYear, endYear];
  }, [startYear, endYear]);

  useEffect(() => {
    backgroundRef.current = background;
  }, [background]);

  useEffect(() => {
    idRef.current = id;
  }, [id]);

  useEffect(() => {
    allVoyagesRef.current = allVoyages;
  }, [allVoyages]);

  useEffect(() => {
    fullColorRef.current = fullColor;
  }, [fullColor]);

  useEffect(() => {
    isSampleRef.current = isSample;
  }, [isSample]);

  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      setWidth(windowSize.width * widthAdjust);
      setHeight(windowSize.height * heightAdjust);
      setWidthDiff(
        isSample ? 40 : windowSize.width - windowSize.width * widthAdjust
      );
    }
  }, [windowSize, widthAdjust, heightAdjust, isSample]);

  useMemo(() => {
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

  useMemo(() => {
    setYearRange([startYear, endYear]);
  }, [startYear, endYear]);

  useEffect(() => {
    const initP5 = (p5: p5) => {
      voyages.current = []; // The array containing all the voyages
      filteredVoyages.current = [];

      p5.setup = () => {
        p5.createCanvas(width + widthDiff, height).parent(idRef.current);

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
        if (isSampleRef.current) {
          filteredVoyages.current = voyages.current.filter(
            (obj) => obj.year === yearRangeRef.current[0] + 1
          );
        } else {
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

  if (isSample) {
    if (windowSize.width) {
      return (
        <div
          id={id}
          className="fixed"
          style={{ marginLeft: `${windowSize.width / 6}px` }}
        ></div>
      );
    }

    return <></>;
  }

  return (
    <div className="w-screen">
      <div className="flex flex-col items-center text-white">
        {showSlider && (
          <div className={`bg-black ${interactive ? "" : "w-screen"}`}>
            <Slider
              width={width}
              yearRange={yearRange}
              setYearRange={setYearRange}
              interactive={interactive}
            />
          </div>
        )}
        <div id={id}></div>
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
              color="black"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default VoyagesVis;
