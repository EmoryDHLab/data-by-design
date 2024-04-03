import { useEffect, useRef, useState } from "react";
import { peopleData, versionData, groupingData } from "./data/data";
import {
  visWidth,
  visHeight,
  versionHeight,
  versionWidth,
} from "./data/functions";
import PersonBox from "./PersonBox";
import GroupingSelect from "./GroupingSelect";
import { useResizeObserver } from "~/hooks";
import type {
  TPerson,
  Groupings,
  TGroupingData,
  TGroupingNode,
} from "./data/types";
import Version from "./Version";
import GroupingBox from "./GroupingBox";
import Connection from "./Connection";
import PersonGroupingList from "./PersonGroupingList";

const PeopleVersions = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeVersions, setActiveVersions] = useState<string[]>(
    Object.keys(versionData)
  );
  const [people, setPeople] = useState<TPerson[]>(peopleData);
  const [activeNode, setActiveNode] = useState<
    TPerson | TGroupingNode | undefined
  >(undefined);
  const [activeGrouping, setActiveGrouping] = useState<Groupings | undefined>(
    undefined
  );
  const [dragging, setDragging] = useState<boolean>(false);

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
    if (activeVersions.length > 0) {
      setActiveGrouping(undefined);
    }
  }, [activeVersions]);

  useEffect(() => {
    for (const person of peopleData) {
      if (activeGrouping) {
        setActiveVersions([]);
        person.x = person.groupingsXY[activeGrouping].x;
        person.y = person.groupingsXY[activeGrouping].y;
      } else {
        person.x = person.defaultX;
        person.y = person.defaultY;
      }
    }
    setPeople([...peopleData]);
  }, [activeGrouping]);

  useEffect(() => {
    if (!activeGrouping) {
      setActiveVersions(Object.keys(versionData));
    }
  }, [activeGrouping]);

  useEffect(() => {
    console.log("🚀 ~ PeopleVersions ~ activeNode:", activeNode);
  }, [activeNode]);

  const updatedPerson = (index: number, x: number, y: number) => {
    if (x < visWidthRef.current && x > 0) {
      people[index].x = x / (visWidth(windowSize.width) || 1);
    }
    if (y > versionHeightRef.current * 1.5 && y < visHeightRef.current) {
      people[index].y = y / (visHeight(windowSize.height) || 1);
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
    <div className="bg-offblack w-screen grid grid-cols-1 md:grid-cols-3 md:grid-rows-6 md:h-screen text-white">
      <div className="col-span-1 md:col-span-2 md:row-span-5">
        {windowSize && (
          <svg
            ref={svgRef}
            className="font-dubois font-bold"
            viewBox={`0 0 ${
              ((windowSize?.width || visWidth(windowSize.width)) / 3) * 2
            } ${((windowSize?.height || window.innerHeight) / 6) * 5}`}
          >
            {activeGrouping && (
              <>
                {people.map((person) => {
                  return (
                    <g key={`connection-line-${person.id}`} id="connections">
                      {person[activeGrouping].map((grouping) => {
                        return (
                          <Connection
                            key={`connection-line-${person.id}-${grouping.id}`}
                            person={person}
                            x2={grouping.getX(
                              grouping.x,
                              windowSize.width || 0
                            )}
                            y2={
                              grouping.getY(
                                grouping.y,
                                windowSize.height || 0
                              ) +
                              visHeight(windowSize.height) / 40
                            }
                            dragging={dragging}
                          />
                        );
                      })}
                    </g>
                  );
                })}
              </>
            )}
            {activeVersions.length > 0 && (
              <>
                {people.map((person) => {
                  return (
                    <g key={`links-${person.firstName}`}>
                      {person.versions.map((version) => {
                        return (
                          <Connection
                            key={`version-link-${person.id}-${version.id}`}
                            person={person}
                            x2={version.getMidX(
                              Object.keys(versionData).indexOf(version.id),
                              windowSize.width ?? 0
                            )}
                            y2={version.getBottomY(windowSize.height || 0)}
                            dragging={dragging}
                            opacity={
                              activeVersions.includes(version.id) ? 100 : 0
                            }
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
            <g id="groupings">
              {Object.keys(groupingData).map((grouping) => {
                return (
                  <g key={`${grouping}-group`} id={`${grouping}-group`}>
                    {Object.keys(
                      groupingData[grouping as keyof TGroupingData]
                    ).map((group, index) => {
                      return (
                        <g
                          key={`${grouping}-group-${group}`}
                          id={`${grouping}-group-${group}`}
                        >
                          <GroupingBox
                            key={`grouping-box-${grouping}-${group}`}
                            index={index}
                            boxHeight={visHeight(windowSize.height) / 20}
                            grouping={
                              groupingData[grouping as keyof TGroupingData][
                                group
                              ]
                            }
                            opacity={activeGrouping == grouping ? 100 : 0}
                            setActiveNode={setActiveNode}
                          />
                        </g>
                      );
                    })}
                  </g>
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
                    activeNode={activeNode}
                    setActiveNode={setActiveNode}
                    boxHeight={visHeight(windowSize.height) / 20}
                    center={{
                      x: visWidth(windowSize.width) / 2,
                      y: visHeight(windowSize.height) / 2,
                    }}
                    dragging={dragging}
                    setDragging={setDragging}
                    opacity={
                      activeVersions.length > 0 &&
                      !person.versions.some((personVersion) =>
                        activeVersions.includes(personVersion.label)
                      )
                        ? 0.5
                        : 1
                    }
                  />
                );
              })}
            </g>
          </svg>
        )}
      </div>
      <div className="border-l-2 md:row-span-5 flex flex-col">
        <div className="text-xl md:text-2xl p-2 border border-b-1 uppercase">
          View by:
        </div>
        <div className="flex pb-4 md:pb-0 border border-b-1">
          <div>
            <GroupingSelect
              setSelectedGrouping={setActiveGrouping}
              activeGrouping={activeGrouping}
            />
          </div>
        </div>
        <div className="overflow-y-hidden flex">
          {activeNode && (
            <div className="overflow-y-scroll">
              <div className="p-2 text-xl font-dubois uppercase text-duboisSecondary">
                {activeNode.label}
              </div>
              <div className="grid grid-cols-3 grid-rows-2 mx-4 gap-4">
                <PersonGroupingList person={activeNode} grouping="location" />
                <PersonGroupingList person={activeNode} grouping="department" />
                <PersonGroupingList
                  person={activeNode}
                  grouping="institution"
                />
                <PersonGroupingList person={activeNode} grouping="role" />
                <PersonGroupingList person={activeNode} grouping="position" />
              </div>
            </div>
          )}
          {!activeNode && (
            <div className="p-2">
              <p>Maybe some instructions?</p>
              <p>For example, click a name and see it here.</p>
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:block border-t-2 md:col-span-3 p-4">
        <h3 className="text-4xl font-duboisWide">People across versions</h3>
        <h4 className="text-2xl mt-2 font-duboisLightWide">Tag line?</h4>
      </div>
    </div>
  );
};

export default PeopleVersions;
