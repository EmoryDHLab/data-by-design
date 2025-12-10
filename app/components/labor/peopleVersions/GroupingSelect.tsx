import { groupingData } from "../data/versions";
import type { Groupings } from "../data/types";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  setSelectedGrouping: Dispatch<SetStateAction<Groupings | undefined>>;
  activeGrouping: Groupings | undefined;
}

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
      {Object.keys(groupingData).map((grouping) => {
        return (
          <li key={grouping}>
            <button
              onClick={() => handleSelect(grouping as Groupings)}
              onMouseLeave={({ target }) =>
                (target as HTMLButtonElement).blur()
              }
              className={`w-full py-4 text-center border-b border-black border-1.5 hover:opacity-100 focus:opacity-100 uppercase ${
                grouping === activeGrouping
                  ? "opacity-100 bg-changePrimary text-white"
                  : "opacity-100"
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
