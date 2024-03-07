import { useEffect, useRef, useState } from "react";
import {
  peopleData,
  visWidth,
  visHeight,
  versionData,
  versionHeight,
  versionWidth,
} from "./peopleVersions/data";
import PersonBox from "./peopleVersions/PersonBox";
import FilterOptions from "./peopleVersions/FilterOptions";
import FilterGroups from "./peopleVersions/FilterGroups";
import { useResizeObserver } from "~/hooks";
import type {
  TPerson,
  TFilterOption,
  TSelectedFilter,
} from "./peopleVersions/data";
import Version from "./peopleVersions/Version";
import Connections from "./peopleVersions/Connections";

const PeopleVersions = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeVersions, setActiveVersions] = useState<string[]>(
    Object.keys(versionData)
  );
  const [people, setPeople] = useState<TPerson[]>(peopleData);
  const [activePerson, setActivePerson] = useState<TPerson | undefined>(
    undefined
  );
  const [activeFilterGroup, setActiveFilterGroup] = useState<
    TFilterOption | undefined
  >(undefined);
  const [activeFilterOption, setActiveFilterOption] = useState<
    TSelectedFilter | undefined
  >(undefined);

  const { windowSize } = useResizeObserver();
  const visWidthRef = useRef<number>(visWidth(windowSize.width));
  const visHeightRef = useRef<number>(visHeight(windowSize.height));
  const versionHeightRef = useRef<number>(versionHeight(windowSize.height));

  useEffect(() => {
    visWidthRef.current = visWidth(windowSize.width);
    visHeightRef.current = visHeight(windowSize.height);
    versionHeightRef.current = versionHeight(windowSize.height);
  }, [windowSize]);

  useEffect(() => {
    if (activeFilterOption) {
      setActiveVersions([]);
    } else if (!activeFilterGroup) {
      setActiveVersions(Object.keys(versionData));
    }
  }, [activeFilterOption, activeFilterGroup]);

  useEffect(() => {
    if (!activeFilterOption) return;
    if (
      activeFilterOption &&
      activeFilterGroup?.options.includes(activeFilterOption)
    ) {
      setPeople(
        peopleData.map((person) => {
          if (
            person[activeFilterGroup.key].includes(activeFilterOption?.label)
          ) {
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
  }, [activeFilterOption, activeFilterGroup]);

  useEffect(() => {
    if (!activeFilterOption) {
      setPeople(
        peopleData.map((person) => {
          if (
            person.versions.some((personVersion) =>
              activeVersions.includes(personVersion.label)
            )
          ) {
            person.opacity = 1;
          } else {
            person.opacity = 0.25;
          }
          return person;
        })
      );
    }
  }, [activeVersions, activeFilterOption]);

  useEffect(() => {
    if (activeVersions.length > 0) {
      setActiveFilterOption(undefined);
      setActiveFilterGroup(undefined);
    }
  }, [activeVersions]);

  const updatedPerson = (index: number, x: number, y: number) => {
    if (x < visWidthRef.current && x > 0) {
      people[index].x = x;
      people[index].xOffset = x / (visWidth(windowSize.width) || 1);
    }
    if (y > versionHeightRef.current * 2 && y < visHeightRef.current) {
      people[index].y = y;
      people[index].yOffset = y / (visHeight(windowSize.height) || 1);
    }
    setPeople([...people]);
  };

  const handleVersionSelect = (
    selectedVersion: string,
    key: string | undefined
  ) => {
    if (key && key !== "Enter") return;

    let indexOfSelected = activeVersions.indexOf(selectedVersion);
    if (indexOfSelected >= 0) {
      setActiveVersions(activeVersions.toSpliced(indexOfSelected, 1));
    } else {
      setActiveVersions([...activeVersions, selectedVersion]);
    }
  };

  return (
    <div className="bg-black w-screen grid grid-cols-3 grid-rows-6 h-screen text-white">
      <div className="col-span-2 row-span-5">
        {windowSize && (
          <svg
            ref={svgRef}
            viewBox={`0 0 ${
              ((windowSize?.width || visWidth(windowSize.width)) / 3) * 2
            } ${((windowSize?.height || window.innerHeight) / 6) * 5}`}
          >
            {/* <rect
              id="debug-helper"
              width={visWidthRef.current}
              height={visHeightRef.current}
              strokeWidth={1}
              fill="lightblue"
              stroke="red"
            /> */}
            <Connections
              activeFilterGroup={activeFilterGroup}
              activeOption={activeFilterOption}
            />
            {activeVersions.length > 0 && (
              <>
                {people.map((person) => {
                  return (
                    <g key={`links-${person.firstName}`}>
                      {person.versions.map((version) => {
                        return (
                          <line
                            key={`version-link-${person.id}-${version.id}`}
                            x1={person.getX(
                              person.xOffset,
                              windowSize.width || 0
                            )}
                            x2={version.getMidX(
                              Object.keys(versionData).indexOf(version.id),
                              windowSize.width ?? 0
                            )}
                            y1={person.getY(
                              person.yOffset,
                              windowSize.height || 0
                            )}
                            y2={version.getBottomY(windowSize.height || 0)}
                            stroke="#D9D9D9"
                            strokeOpacity={
                              activeVersions.includes(version.label) ? 1 : 0
                            }
                            strokeWidth={activePerson === person ? 1.75 : 1.5}
                            strokeDasharray={visWidth(windowSize.width) * 0.01}
                            className="transition-all duration-1000"
                          />
                        );
                      })}
                    </g>
                  );
                })}
              </>
            )}
            <g id="versions">
              {Object.keys(versionData).map((version, index) => {
                return (
                  <Version
                    key={version}
                    versionName={version}
                    x={versionData[version].getX(index, windowSize.width ?? 0)}
                    y={versionData[version].getY(windowSize.height ?? 0)}
                    width={versionWidth(windowSize.width)}
                    height={versionHeight(windowSize.height)}
                    active={activeVersions.includes(version)}
                    handleVersionSelect={handleVersionSelect}
                  >
                    {version}
                  </Version>
                );
              })}
            </g>
            <g id="people">
              {people.map((person, index) => {
                return (
                  <PersonBox
                    key={`box-${person.firstName}`}
                    person={person}
                    updatePerson={updatedPerson}
                    index={index}
                    activePerson={activePerson}
                    setActivePerson={setActivePerson}
                    boxHeight={visHeight(windowSize.height) / 20}
                  />
                );
              })}
            </g>
          </svg>
        )}
      </div>
      <div className="border-l-2 row-span-5 grid grid-cols-1 grid-rows-2">
        <div className="border-b-2 flex flex-col">
          <div className="text-2xl p-2 border border-b-1 uppercase">
            Filter by:
          </div>
          <div className="flex">
            <div>
              <FilterGroups
                activeFilter={activeFilterGroup}
                setSelectedFilter={setActiveFilterGroup}
              />
            </div>
            <div>
              <FilterOptions
                activeFilterGroup={activeFilterGroup}
                activeOption={activeFilterOption}
                setSelectedOption={setActiveFilterOption}
              />
            </div>
          </div>
        </div>
        <div>
          {activePerson && (
            <p className="p-2">
              {activePerson.firstName} {activePerson.lastName}
            </p>
          )}
          {!activePerson && (
            <div className="p-2">
              <p>Maybe some instructions?</p>
              <p>For example, click a name and see it here.</p>
            </div>
          )}
        </div>
      </div>
      <div className="border-t-2 col-span-3 p-4">
        <h3 className="text-4xl font-duboisWide">People across versions</h3>
        <h4 className="text-2xl mt-2 font-duboisLightWide">Tag line?</h4>
      </div>
    </div>
  );
};

export default PeopleVersions;
