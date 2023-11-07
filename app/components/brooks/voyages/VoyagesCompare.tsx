import { useEffect, useState } from "react";
import { useResizeObserver } from "~/hooks";
import { ClientOnly } from "remix-utils";
import Slider from "./Slider";
import ResistanceVoyages from "./ResistanceVoyages.client";
import Voyages from "./Voyages.client";

const INITIAL_YEAR_RANGE = [1565, 1575];

function VoyagesCompare() {
  const { windowSize } = useResizeObserver();
  const [yearRange, setYearRange] = useState<number[]>(INITIAL_YEAR_RANGE);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      setWidth(windowSize.width - 100);
    }
  }, [windowSize]);

  return (
    <section className=" w-screen">
      <div className="flex flex-col items-center mt-6 text-white">
        <div className="bg-black sticky top-20 md:top-[7.5rem]">
          <Slider
            width={width}
            yearRange={yearRange}
            setYearRange={setYearRange}
          />
        </div>
        <div>
          <ClientOnly>
            {() => (
              <ResistanceVoyages
                yearRange={yearRange}
              />
            )}
          </ClientOnly>
          <ClientOnly>
            {() => (
              <Voyages
                yearRange={yearRange}
              />
            )}
          </ClientOnly>
        </div>
      </div>
    </section>
  );
}

export default VoyagesCompare;
