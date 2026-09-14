import { useContext, useMemo } from "react";
import TimelineContext from "./TimelineContext";
import RecreatedEventSquare from "./RecreatedEventSquare";
import { numberRange } from "~/utils";

interface Props {
  year: number;
}

const BarGraphYears = ({ year }: Props) => {
  const { currentCenturyEvents } = useContext(TimelineContext);

  const yearEvents = useMemo(
    () => currentCenturyEvents.filter((event) => event?.year === year),
    [currentCenturyEvents, year],
  );

  const isFull = useMemo(() => {
    const squares = yearEvents.flatMap((event) => event?.squares);
    return Boolean(squares.length === 9 || squares.includes("full"));
  }, [yearEvents]);

  return (
    <div className="w-6 h-full flex flex-col-reverse border border-transparent">
      {yearEvents?.length > 0 && (
        <>
          {[...numberRange(0, 8)].map((eventIndex) => {
            return (
              <RecreatedEventSquare
                key={eventIndex}
                year={year}
                index={eventIndex}
                yearEvents={yearEvents}
                isFull={isFull}
                isVertical={true}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default BarGraphYears;
