import { useContext } from "react";
import BarGraphContext from "./BarGraphContext";
import { numberRange } from "~/utils";
import BarGraphYears from "./BarGraphYears";

export default function BarGraph() {
  const { currentCentury } = useContext(BarGraphContext);

  return (
    <div className="flex w-full md:w-11/12">
      {[...numberRange(1, 100)].map((i) => {
        return (
          <BarGraphYears key={i} year={currentCentury + i} />
        )
      })}
    </div>
  )
}