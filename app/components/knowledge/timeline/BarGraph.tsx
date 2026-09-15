import { useContext } from "react";
import TimelineContext from "../timeline/TimelineContext";
import { numberRange } from "~/utils";
import BarGraphYears from "../timeline/TimelineYears";

const BarGraph = () => {
  const { currentCentury } = useContext(TimelineContext);

  return (
    <div className="flex w-full md:w-11/12">
      {[...numberRange(1, 100)].map((i) => {
        return <BarGraphYears key={i} year={currentCentury + i} />;
      })}
    </div>
  );
};

export default BarGraph;
