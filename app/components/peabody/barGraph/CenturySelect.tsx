import { useContext } from "react";
import BarGraphContext from "./BarGraphContext";
import FancyButton from "~/components/FancyButton";

export default function CenturySelect() {
  const {
    centuries,
    currentCentury,
    setCurrentCentury,
  } = useContext(BarGraphContext);

  return (
    <div className="h-auto grid grid-cols-4 gap-y-2">
      {centuries.map((century, index) => {
        return (
          <svg viewBox="0 0 100 32" key={`button-${index}`} className="w-full">
            <FancyButton outlineColor={currentCentury === century ? "gold" : "white" } action={() => setCurrentCentury(century)}>
              {century}s
            </FancyButton>
          </svg>
        )
      })}
    </div>
  );
};