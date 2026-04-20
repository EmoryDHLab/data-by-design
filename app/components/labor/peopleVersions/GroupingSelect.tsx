import type { Groupings } from "../data/types";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  setSelectedGrouping: Dispatch<SetStateAction<Groupings | undefined>>;
  activeGrouping: Groupings | undefined;
}

const groupingOrder = [
  "location",
  "institution",
  "department",
  "position",
  "role",
];

const GroupingSelect = ({ setSelectedGrouping, activeGrouping }: Props) => {
  const handleSelect = (selectedGrouping: Groupings) => {
    if (selectedGrouping === activeGrouping) {
      setSelectedGrouping(undefined);
    } else {
      setSelectedGrouping(selectedGrouping);
    }
  };

  return (
    <ul className="w-full">
      {groupingOrder.map((grouping) => {
        return (
          <li key={grouping}>
            <button
              onClick={() => handleSelect(`${grouping}s` as Groupings)}
              onMouseLeave={({ target }) =>
                (target as HTMLButtonElement).blur()
              }
              className={`w-full py-4 text-center border-b border-black border-1.5 uppercase transition-colors ${
                `${grouping}s` === activeGrouping
                  ? "bg-changePrimary text-white"
                  : "hover:bg-changePrimary/20"
              }`}
              aria-label={`Sort people by ${grouping}`}
            >
              {grouping}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default GroupingSelect;
