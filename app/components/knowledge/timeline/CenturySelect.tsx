import { useContext } from "react";
import TimelineContext from "./TimelineContext";
import FancyButton from "~/components/FancyButton";

export default function CenturySelect() {
  const { centuries, currentCentury, setCurrentCentury } =
    useContext(TimelineContext);

  return (
    <div className="flex justify-start mb-6">
      {centuries.map((century, index) => {
        return (
          <svg viewBox="0 0 100 32" key={`button-${index}`} className="w-1/6">
            <FancyButton
              outlineColor={currentCentury === century ? "gold" : "white"}
              textColor={currentCentury === century ? "yellow-500" : "white"}
              shadowColor="white"
              action={() => setCurrentCentury(century)}
            >
              {century}s
            </FancyButton>
          </svg>
        );
      })}
    </div>
  );
}
