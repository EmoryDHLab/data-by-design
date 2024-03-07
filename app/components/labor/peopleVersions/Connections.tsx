import { useEffect, useState } from "react";
import { peopleData, visWidth } from "./data";
import { useResizeObserver } from "~/hooks";
import type { TFilterOption, TSelectedFilter, TPerson } from "./data";

interface Props {
  activeFilterGroup: TFilterOption | undefined;
  activeOption: TSelectedFilter | undefined;
}

const Connections = ({ activeOption, activeFilterGroup }: Props) => {
  const [filteredPeople, setFilteredPeople] = useState<TPerson[] | undefined>(
    undefined
  );
  const { windowSize } = useResizeObserver();

  useEffect(() => {
    if (activeFilterGroup && activeOption) {
      setFilteredPeople(
        peopleData.filter((person) =>
          person[activeFilterGroup.key].includes(activeOption.label)
        )
      );
    } else {
      setFilteredPeople(undefined);
    }
  }, [activeFilterGroup, activeOption]);

  if (filteredPeople) {
    return (
      <g id="connections">
        {filteredPeople.map((person, index) => {
          if (index + 1 < filteredPeople.length) {
            return (
              <line
                key={`filtered-link-${person.id}-${activeFilterGroup?.key}`}
                x1={person.getX(person.xOffset, windowSize.width || 0)}
                x2={filteredPeople[index + 1].getX(
                  filteredPeople[index + 1].xOffset,
                  windowSize.width || 0
                )}
                y1={person.getY(person.yOffset, windowSize.height || 0)}
                y2={filteredPeople[index + 1].getY(
                  filteredPeople[index + 1].yOffset,
                  windowSize.height || 0
                )}
                stroke="#D9D9D9"
                strokeOpacity={1}
                strokeWidth={1.5}
                strokeDasharray={visWidth(windowSize.width) * 0.01}
                className="transition-all duration-1000"
              />
            );
          }
          return null;
        })}
      </g>
    );
  }
  return null;
};

export default Connections;
