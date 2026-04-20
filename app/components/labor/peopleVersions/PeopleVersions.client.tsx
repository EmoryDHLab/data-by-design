import { useEffect, useRef, useState } from "react";
import { peopleData, versionData, groupingData } from "../data/versions";
import { visWidth, visHeight, versionHeight } from "../data/functions";
import PersonBox from "./PersonBox";
import GroupingSelect from "./GroupingSelect";
import { useResizeObserver } from "~/hooks";
import type {
  TPerson,
  Groupings,
  TGroupingData,
  TGroupingNode,
} from "../data/types";
import GroupingBox from "./GroupingBox";
import Connection from "./Connection";
import PersonGroupingList from "./PersonGroupingList";

const PeopleVersions = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeVersions, setActiveVersions] = useState<string[]>(
    Object.keys(versionData),
  );
  const [people, setPeople] = useState<TPerson[]>(peopleData);
  const [activeNode, setActiveNode] = useState<
    TPerson | TGroupingNode | undefined
  >(undefined);
  const [activeGrouping, setActiveGrouping] = useState<Groupings | undefined>(
    undefined,
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
    for (const person of peopleData) {
      if (activeGrouping) {
        person.x = person.groupingsXY[activeGrouping].x;
        person.y = person.groupingsXY[activeGrouping].y;
      } else {
        person.x = person.defaultX;
        person.y = person.defaultY;
      }
    }
    setPeople([...peopleData]);
  }, [activeGrouping]);

  const updatedPerson = (index: number, x: number, y: number) => {
    if (x < visWidthRef.current && x > 0) {
      people[index].x = x / (visWidth(windowSize.width) || 1);
    }
    if (y > 0 && y < visHeightRef.current) {
      people[index].y = y / (visHeight(windowSize.height) || 1);
    }
    setPeople([...people]);
  };

  const handleVersionSelect = (
    selectedVersion: string,
    key: string | undefined,
  ) => {
    if (key && key !== "Enter") return;

    const indexOfSelected = activeVersions.indexOf(selectedVersion);
    if (indexOfSelected >= 0) {
      setActiveVersions(activeVersions.toSpliced(indexOfSelected, 1));
    } else {
      setActiveVersions([...activeVersions, selectedVersion]);
    }
  };

  return (
    <div
      id="people-across-versions"
      className="bg-[#D7E6D2] w-screen grid grid-cols-1 md:grid-cols-3 md:grid-rows-[1fr_auto] text-black"
    >
      <div className="col-span-1 md:col-span-2 md:row-span-1 md:order-2 flex flex-col">
        {windowSize && (
          <svg
            ref={svgRef}
            className="font-power font-bold flex-1"
            // onClick={() => {
            //   if (activeNode) setActiveNode(undefined);
            // }}
            viewBox={`0 0 ${
              ((windowSize?.width || visWidth(windowSize.width)) / 3) * 2
            } ${((windowSize?.height || window.innerHeight) / 7) * 4.25}`}
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
                              windowSize.width || 0,
                            )}
                            y2={
                              grouping.getY(
                                grouping.y,
                                windowSize.height || 0,
                              ) +
                              visHeight(windowSize.height) / 40
                            }
                            dragging={dragging}
                            isActive={person === activeNode}
                          />
                        );
                      })}
                    </g>
                  );
                })}
              </>
            )}
            <g id="groupings">
              {Object.keys(groupingData).map((grouping) => {
                return (
                  <g key={`${grouping}-group`} id={`${grouping}-group`}>
                    {Object.keys(
                      groupingData[grouping as keyof TGroupingData],
                    ).map((group, index) => {
                      return (
                        <g
                          key={`${grouping}-group-${group}`}
                          id={`${grouping}-group-${group}`}
                        >
                          <GroupingBox
                            key={`grouping-box-${grouping}-${group}`}
                            index={index}
                            boxHeight={visHeight(windowSize.height) / 15}
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
                    boxHeight={visHeight(windowSize.height) / 15}
                    center={{
                      x: visWidth(windowSize.width) / 2,
                      y: visHeight(windowSize.height) / 2,
                    }}
                    dragging={dragging}
                    setDragging={setDragging}
                    opacity={
                      activeVersions.length > 0 &&
                      !person.versions.some((personVersion) =>
                        activeVersions.includes(personVersion.label),
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
        <div
          className="hidden md:flex border-black border-t-2 p-8 justify-between items-center"
          id="title"
        >
          <div className="grow pr-8">
            <h3 className="text-4xl font-power font-bold">
              People across versions
            </h3>
            <h4 className="text-xl mt-2 font-power">
              Mapping human involvement across Data by Design
            </h4>
          </div>
          <div className="flex gap-3">
            {Object.keys(versionData).map((version) => (
              <button
                key={version}
                onClick={() => handleVersionSelect(version, undefined)}
                className={`px-6 py-3 text-6xl border-2 border-white rounded-[3rem] font-power font-bold transition-all text-white ${
                  activeVersions.includes(version)
                    ? "bg-[#1C1817]"
                    : "bg-[#1C1817] opacity-40"
                }`}
              >
                {version}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div
        className="border-r-2 border-black md:row-span-2 flex flex-col md:order-1"
        id="view-by"
      >
        <div className="text-center font-power light">
          <GroupingSelect
            setSelectedGrouping={setActiveGrouping}
            activeGrouping={activeGrouping}
          />
        </div>
        <div className="overflow-y-hidden flex flex-1 w-full">
          {activeNode && (
            <div className="px-6 py-5 w-full" id="selection-info">
              <div className="text-2xl font-power font-bold mb-6 flex flex-row w-full">
                <h3 className="grow">{activeNode.label}</h3>
                <button
                  aria-label="Unselect Person"
                  className="border-2 font-power font-bold rounded-full border-offblack/75 text-offblack/75 hover:border-offblack hover:text-offblack hover:bg-offblack/5 px-1.5 text-sm h-6 self-start"
                  onClick={() => setActiveNode(undefined)}
                >
                  X
                </button>
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-8 gap-y-6 w-full">
                <PersonGroupingList person={activeNode} grouping="role" />
                <PersonGroupingList person={activeNode} grouping="position" />
                <PersonGroupingList person={activeNode} grouping="department" />
                <PersonGroupingList
                  person={activeNode}
                  grouping="institution"
                />
                <PersonGroupingList person={activeNode} grouping="location" />
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
    </div>
  );
};

export default PeopleVersions;
