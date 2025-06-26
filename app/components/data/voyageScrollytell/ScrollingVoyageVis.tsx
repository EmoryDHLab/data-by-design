import * as d3 from "d3";
import { useEffect, useState } from "react";
import ClientOnly from "~/components/ClientOnly";
import VoyagesVis from "../voyages/VoyagesVis.client";

const startProgress = 27;
const endProgress = 29;

const ScrollingVoyageVis = ({
  scrollProgress,
  slideIndex,
}: {
  scrollProgress: number;
  slideIndex: number;
}) => {
  const [startYear, setStartYear] = useState<number>(1565);
  const [endYear, setEndYear] = useState<number>(1858);

  useEffect(() => {
    if (scrollProgress >= startProgress && scrollProgress < endProgress) {
      const startScale = d3
        .scaleLinear()
        .domain([startProgress, endProgress])
        .range([1565, 1756]);
      const endScale = d3
        .scaleLinear()
        .domain([startProgress, endProgress])
        .range([1858, 1766]);
      setStartYear(Math.ceil(startScale(scrollProgress)));
      setEndYear(Math.ceil(endScale(scrollProgress)));
    }

    if (scrollProgress < startProgress) {
      setStartYear(1565);
      setEndYear(1858);
    }

    if (scrollProgress >= endProgress) {
      setStartYear(1708);
      setEndYear(1719);
    }
    console.log("🚀 ~ ScrollingVoyageVis ~ scrollProgress:", scrollProgress);
  }, [scrollProgress]);

  return (
    <div className="absolute top-4 md:top-18 mt-8 scale-90">
      <ClientOnly>
        <VoyagesVis
          id="scrolling-voyage"
          className={`${
            slideIndex >= 12 && slideIndex <= 16 ? "opacity-100" : "opacity-0"
          }`}
          allVoyages={false}
          fullColor={false}
          startYear={startYear}
          endYear={endYear}
          showSlider={false}
        />
      </ClientOnly>
    </div>
  );
};

export default ScrollingVoyageVis;
