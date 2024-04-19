import eventData from "~/data/peabody/eventData.json";

const TutorialKey = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm px-8 pb-4 bg-[#9ae4c1cc]">
      <div>
        <ol className="list-decimal font-sans text-sm font-semibold small-caps tracking-wide ">
          {eventData.eventTypes.map((type) => {
            return <li key={`pb-scrolly-type-${type}`}>{type}</li>;
          })}
        </ol>
      </div>

      <div>
        <svg className="w-8/12" x={"0px"} y={"0px"} viewBox="0 0 154 154">
          <rect
            fillOpacity={1}
            className="fill-peabodyOrange"
            fill="peabodyOrange"
            width={154}
            height={154}
          />
          <g>
            <rect className="fill-peabodyOrange" width={150} height={150} />
            <rect fill="white" width={50} height={50} x={2} y={2} />
            <text
              className="number pointer-events-none"
              fill="black"
              x={22}
              y={32}
            >
              1
            </text>
            <rect fill="white" width={50} height={50} x={52} y={2} />
            <text
              className="number pointer-events-none"
              fill="black"
              x={72}
              y={32}
            >
              2
            </text>
            <rect fill={"white"} width={50} height={50} x={102} y={2} />
            <text
              className="number pointer-events-none"
              fill={"black"}
              x={122}
              y={32}
            >
              3
            </text>
            <rect fill="white" width={50} height={50} x={2} y={52} />
            <text
              className="number pointer-events-none"
              fill="black"
              x={22}
              y={82}
            >
              4
            </text>
            <rect fill={"white"} width={50} height={50} x={52} y={52} />
            <text
              className="number pointer-events-none"
              fill={"black"}
              x={72}
              y={82}
            >
              5
            </text>
            <rect fill="white" width={50} height={50} x={102} y={52} />
            <text
              className="number pointer-events-none"
              fill="black"
              x={122}
              y={82}
            >
              6
            </text>
            <rect fill={"white"} width={50} height={50} x={2} y={102} />
            <text
              className="number pointer-events-none"
              fill={"black"}
              x={22}
              y={132}
            >
              7
            </text>
            <rect fill="white" width={50} height={50} x={52} y={102} />
            <text
              className="number pointer-events-none"
              fill="black"
              x={72}
              y={132}
            >
              8
            </text>
            <rect fill="white" width={50} height={50} x={102} y={102} />
            <text
              className="number pointer-events-none"
              fill="black"
              x={122}
              y={132}
            >
              9
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default TutorialKey;
