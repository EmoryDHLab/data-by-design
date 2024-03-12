import { groupingData } from "./data/data";
import type { Groupings } from "./data/types";
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
    <ul>
      {Object.keys(groupingData).map((grouping) => {
        return (
          <li key={grouping}>
            <button
              onClick={() => handleSelect(grouping as Groupings)}
              onMouseLeave={({ target }) =>
                (target as HTMLButtonElement).blur()
              }
              className={`p-1 m-1 hover:opacity-100 focus:opacity-100 uppercase ${
                grouping === activeGrouping
                  ? "underline underline-offset-8 opacity-100"
                  : "opacity-60"
              }`}
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
