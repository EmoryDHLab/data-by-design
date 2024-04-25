import * as d3 from "d3";
import { useEffect, useState } from "react";
import { ClientOnly } from "remix-utils/client-only";
import VoyagesVis from "../voyages/VoyagesVis.client";

const ScrollingVoyageVis = ({ scrollProgress }: { scrollProgress: number }) => {
  const [startYear, setStartYear] = useState<number>(1565);
  const [endYear, setEndYear] = useState<number>(1858);

  useEffect(() => {
    if (scrollProgress >= 25 && scrollProgress < 26.5) {
      const startScale = d3
        .scaleLinear()
        .domain([25, 26.5])
        .range([1565, 1756]);
      const endScale = d3.scaleLinear().domain([25, 26.5]).range([1858, 1766]);
      setStartYear(Math.ceil(startScale(scrollProgress)));
      setEndYear(Math.ceil(endScale(scrollProgress)));
    }

    if (scrollProgress < 25) {
      setStartYear(1565);
      setEndYear(1858);
    }

    if (scrollProgress >= 26.5) {
      setStartYear(1756);
      setEndYear(1766);
    }
  }, [scrollProgress]);

  return (
    <>
      <div>
        <ClientOnly>
          {() => (
            <VoyagesVis
              id="scrolling-voyage"
              allVoyages={false}
              fullColor={false}
              startYear={startYear}
              endYear={endYear}
            />
          )}
        </ClientOnly>
      </div>
    </>
  );
};

export default ScrollingVoyageVis;
