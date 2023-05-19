import InlineFootnote from "~/components/InlineFootnote";
import PeabodyActors from "../PeabodyActors";
import eventData from "~/data/peabody/eventData.json";

const Key = function ({ highlight }) {
  return (
    <div className="grid grid-cols-2 text-sm p-8 bg-[#9ae4c1cc]">
      <div>
        <ol className="list-decimal font-sans text-sm font-semibold small-caps tracking-wide ">
          {eventData.eventTypes.map((type) => {
            return(
              <li key={`pb-scrolly-type-${type}`}>{type}</li>
            )
          })}
        </ol>
      </div>

      <div>
        <svg className="w-8/12" x="0px" y="0px" viewBox="0 0 154 154">
          <rect
            fillOpacity="1"
            className="fill-peabodyOrange"
            fill="peabodyOrange"
            width="154"
            height="154"
          />
          <g>
            <rect className="fill-peabodyOrange" width="150" height="150" />
            <rect fill="white" width="50" height="50" x="2" y="2" />
            <text
              className="number pointer-events-none"
              fill="black"
              x="22"
              y="32"
              fill="black"
            >
              1
            </text>
            <rect x="50" fill="white" width="50" height="50" x="52" y="2" />
            <text
              className="number pointer-events-none"
              fill="black"
              x="72"
              y="32"
            >
              2
            </text>
            <rect
              x="100"
              fill={highlight ? "#355c66" : "white"}
              width="50"
              height="50"
              x="102"
              y="2"
            />
            <text
              className="number pointer-events-none"
              fill={highlight ? "white" : "black"}
              x="122"
              y="32"
            >
              3
            </text>
            <rect y="50" fill="white" width="50" height="50" x="2" y="52" />
            <text
              className="number pointer-events-none"
              fill="black"
              x="22"
              y="82"
            >
              4
            </text>
            <rect
              x="50"
              y="50"
              fill={highlight ? "#498868" : "white"}
              width="50"
              height="50"
              x="52"
              y="52"
            />
            <text
              className="number pointer-events-none"
              fill={highlight ? "white" : "black"}
              x="72"
              y="82"
            >
              5
            </text>
            <rect
              x="100"
              y="50"
              fill="white"
              width="50"
              height="50"
              x="102"
              y="52"
            />
            <text
              className="number pointer-events-none"
              fill="black"
              x="122"
              y="82"
            >
              6
            </text>
            <rect
              y="100"
              fill={highlight ? "#8c2a22" : "white"}
              width="50"
              height="50"
              x="2"
              y="102"
            />
            <text
              className="number pointer-events-none"
              fill={highlight ? "white" : "black"}
              x="22"
              y="132"
            >
              7
            </text>
            <rect
              x="50"
              y="100"
              fill="white"
              width="50"
              height="50"
              x="52"
              y="102"
            />
            <text
              className="number pointer-events-none"
              fill="black"
              x="72"
              y="132"
            >
              8
            </text>
            <rect
              x="100"
              y="100"
              fill="white"
              width="50"
              height="50"
              x="102"
              y="102"
            />
            <text
              className="number pointer-events-none"
              fill="black"
              x="122"
              y="132"
            >
              9
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

const TutorialTriggers = [
  <section key="2c8354f7"></section>,

  <section key="6f989444">
    <p className="bg-[#9ae4c1cc] p-3 md:p-0">
      Peabody's version of Bem's system borrows the idea of a numbered grid, with
      each year in a century marked out in its own box.
    </p>
  </section>,

  <section key="33dfea32">
    <p className="bg-[#9ae4c1cc] p-3 md:p-0">
      She also borrows the idea of subdividing each box, so that each of the nine
      interior squares corresponds to a particular type of historical event.
    </p>
  </section>,

  <section key="e4503b65">
    <p className="bg-[#9ae4c1cc] p-3 md:p-0">
      In the Polish-American System, as in Bem's, the top left corner is the
      space for wars, battles, and sieges; in the top middle is the space for
      conquests and unions; in the top right is the space for losses and
      divisions, and so on.
    </p>
    <Key />
  </section>,

  <section key="52553732">
    <p className="bg-[#9ae4c1cc] p-3 md:p-0">
      The events are also color-coded, indicating the various countries involved
      in a particular event. On this point, Peabody makes special note that she
      employs "a somewhat different, and, as it seems to me, a more expressive
      distribution of colors."
      <InlineFootnote index={7} bgOverride="white" textOverride="offblack" />
    </p>
    <div className="flex text-sm mt-6 gap-2 bg-[#9ae4c1cc]">
      <PeabodyActors century="1600" />
    </div>
  </section>,

  <section key="8ffd6ede">
    <p className="bg-[#9ae4c1cc] p-3 md:p-0">
      Shapes that take up the entire box indicate an event of such magnitude or
      complexity that the other events in that same year hardly matter.
    </p>
    <p>
      1607 marks the establishment of Jamestown.
    </p>
    <p className="text-sm">
      <PeabodyActors actor="England" />
    </p>
  </section>,

  <section key="0d3e2774">
    <p>Events inform each other. Here we see Pilgrims settling Plymouth in 1920.</p>
    <p className="p-2 text-sm uppercase border-l-2 border-peabodyOrange">
      2. {eventData.eventTypes[1]}
    </p>
    <p className="text-sm p-1">
      <PeabodyActors actor="England" /> <PeabodyActors actor="Holland" className="opacity-25 text-black" />
    </p>
  </section>,

  <section key="9b41ae5d">
    <p>It also marks the first slaves in being brought to Jamestown, Virginia (20 brought on a Dutch ship).</p>
    <p className="p-2 text-sm uppercase border-l-2 border-peabodyOrange">
      6. {eventData.eventTypes[5]}
    </p>
    <p className="text-sm p-1">
      <PeabodyActors actor="England" className="opacity-50 text-black" /> <PeabodyActors actor="Holland" />
    </p>
  </section>,

  <section key="25c869c2">
    <p>Peabody also uses diagonals to show an event being shared by 2 countries (or more).</p>
    <p className="text-sm">
      <PeabodyActors actor="England" /> <PeabodyActors actor="Americas" /> <PeabodyActors actor="Holland" />
    </p>
  </section>,

  <section key="fd6e81bb">
    <p>
      Here we see the Jamestown Massacre.
    </p>
    <p className="p-2 text-sm uppercase border-l-2 border-peabodyOrange">
      1. {eventData.eventTypes[0]}
    </p>
    <p className="text-sm p-1">
      <PeabodyActors actor="England" /> <PeabodyActors actor="Americas" />
    </p>
  </section>,

  <section key="01f4d21b">
    <p>
      Assault on Powhatan Settlements.
    </p>
    <p className="p-2 text-sm uppercase border-l-2 border-peabodyOrange">
      2. {eventData.eventTypes[1]}
    </p>
    <p className="text-sm p-1">
      <PeabodyActors actor="England" /> <PeabodyActors actor="Americas" />
    </p>
  </section>,

  <section key="0291a8ab">
    <p>
      "Indians are conquered."
    </p>
    <p className="p-2 text-sm uppercase border-l-2 border-peabodyOrange">
      3. {eventData.eventTypes[2]}
    </p>
    <p className="text-sm p-1">
      <PeabodyActors actor="Americas" />
    </p>
  </section>,

  <section key="615d61e0">
    <p>
      And the death of Pocahontas.
    </p>
    <p className="p-2 text-sm uppercase border-l-2 border-peabodyOrange">
      9. {eventData.eventTypes[8]}
    </p>
    <p className="text-sm p-1">
      <PeabodyActors actor="Holland" />
    </p>
  </section>,

  <section key="6f6c2b69"></section>
];

export default TutorialTriggers;
