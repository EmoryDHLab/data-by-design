import { useEffect, useRef, useState } from "react";
import { peopleData, filterOptions } from "./peopleVersions/data";
// import { useWindowSize } from "~/hooks";
import PersonBox from "./peopleVersions/PersonBox";
import FilterGroups from "./peopleVersions/FilterGroups";
import type {
  TPerson,
  TFilterOption,
  TSelectedFilter,
} from "./peopleVersions/data";
import FilterOptions from "./peopleVersions/FilterOptions";

const VIS_SIZE = { width: 360, height: 300 };
const VERSION_SIZE = VIS_SIZE.width * 0.25;

const PeopleVersions = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  // const { width } = useWindowSize();
  const [people, setPeople] = useState<TPerson[]>(peopleData);
  const [activePerson, setActivePerson] = useState<TPerson | undefined>(
    undefined
  );
  const [selectedFilterGroup, setSelectedFilterGroup] = useState<TFilterOption>(
    filterOptions[0]
  );
  const [selectedOption, setSelectedOption] = useState<TSelectedFilter>(
    filterOptions[0].options[0]
  );

  const updatedPerson = (index: number, x: number, y: number) => {
    people[index].x = x;
    people[index].y = y;
    setPeople([...people]);
  };

  useEffect(() => {
    setSelectedOption(filterOptions[0].options[0]);
  }, [selectedFilterGroup]);

  useEffect(() => {
    if (
      selectedOption?.id !== "none" &&
      selectedFilterGroup?.options.includes(selectedOption)
    ) {
      setPeople(
        peopleData.map((person) => {
          if (person[selectedFilterGroup.key].includes(selectedOption.label)) {
            person.opacity = 1;
          } else {
            person.opacity = 0.25;
          }
          return person;
        })
      );
    } else {
      setPeople(
        peopleData.map((person) => {
          person.opacity = 1;
          return person;
        })
      );
    }
  }, [selectedOption, selectedFilterGroup]);

  useEffect(() => {
    if (selectedOption?.id === "none") {
      setSelectedFilterGroup(filterOptions[0]);
    }
  }, [selectedOption]);

  return (
    <div className="bg-black w-screen">
      <div className="flex flex-row justify-around text-white mt-12 h-20">
        <div className="ml-16">
          <h3 className="font-duboisWide text-4xl">People Across Versions</h3>
        </div>
        <div className="grid grid-cols-1 w-1/3 justify-self-end">
          <div className="z-10">
            <FilterGroups
              selectedFilter={selectedFilterGroup}
              setSelectedFilter={setSelectedFilterGroup}
            />
          </div>
          <div className="z-5">
            {selectedFilterGroup.id !== 1 && (
              <FilterOptions
                selectedFilterGroup={selectedFilterGroup}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            )}
          </div>
        </div>
      </div>
      <svg ref={svgRef} viewBox={`0 0 ${VIS_SIZE.width} ${VIS_SIZE.height}`}>
        {people.map((person) => {
          return (
            <g key={`links-${person.firstName}`}>
              {person.versions.map((version) => {
                return (
                  <line
                    key={`version-link-${person.id}-${version.id}`}
                    x1={person.x}
                    x2={version.x}
                    y1={person.y}
                    y2={version.y}
                    stroke="#D9D9D9"
                    strokeOpacity={activePerson === person ? 1 : person.opacity * 0.6}
                    strokeWidth={activePerson === person ? 1.5 : 1}
                    strokeDasharray={2}
                  />
                );
              })}
            </g>
          );
        })}

        <g id="versions">
          <rect
            y={10}
            x={VIS_SIZE.width / 3 - VERSION_SIZE}
            rx={2}
            width={VERSION_SIZE}
            height={VERSION_SIZE}
            fill="#CFDEFF"
            fillOpacity={1}
            stroke="#FAF1E9"
          />
          <rect
            y={10}
            x={VIS_SIZE.width / 2 - VERSION_SIZE / 2}
            rx={2}
            width={VERSION_SIZE}
            height={VERSION_SIZE}
            fill="#CFDEFF"
            fillOpacity={1}
            stroke="#FAF1E9"
          />
          <rect
            y={10}
            x={VIS_SIZE.width - VIS_SIZE.width / 3}
            rx={2}
            width={VERSION_SIZE}
            height={VERSION_SIZE}
            fill="#CFDEFF"
            fillOpacity={1}
            stroke="#FAF1E9"
          />
          <text
            x={VIS_SIZE.width / 3 - VERSION_SIZE / 2}
            y={VERSION_SIZE / 2 + 10}
            textAnchor="middle"
            dominantBaseline={"middle"}
            fill="#1C1817"
            fontSize={20}
            className="font-duboisNarrow"
          >
            prototype
          </text>
          <text
            x={VIS_SIZE.width / 2}
            y={VERSION_SIZE / 2 + 10}
            textAnchor="middle"
            dominantBaseline={"middle"}
            fill="#1C1817"
            fontSize={20}
            className="font-duboisNarrow"
          >
            alpha
          </text>
          <text
            x={VIS_SIZE.width - VIS_SIZE.width / 3 + VERSION_SIZE / 2}
            y={VERSION_SIZE / 2 + 10}
            textAnchor="middle"
            dominantBaseline={"middle"}
            fill="#1C1817"
            fontSize={20}
            className="font-duboisNarrow"
          >
            final
          </text>
        </g>
        <>
          {people.map((person, index) => {
            return (
              <PersonBox
                key={`box-${person.firstName}`}
                person={person}
                updatePerson={updatedPerson}
                index={index}
                setActivePerson={setActivePerson}
              />
            );
          })}
        </>
      </svg>
    </div>
  );
};

export default PeopleVersions;
