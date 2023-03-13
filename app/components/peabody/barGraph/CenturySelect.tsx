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
    <div className="h-auto flex justify-start">
      {centuries.map((century, index) => {
        return (
          <svg viewBox="0 0 100 32" key={`button-${index}`} className="w-1/6">
            <FancyButton outlineColor={currentCentury === century ? "gold" : "white" } action={() => setCurrentCentury(century)}>
              {century}s
            </FancyButton>
          </svg>
        )
      })}
    </div>
  );
};