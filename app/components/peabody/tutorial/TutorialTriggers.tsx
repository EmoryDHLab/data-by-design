import InlineFootnote from "~/components/InlineFootnote";
import TutorialKey from "./TutorialKey";
import eventsData from "~/data/peabody/1600sEvents.json";

const Key = function ({ highlight }) {
  return (
    <div className="grid grid-cols-2 text-sm p-8">
      <div>
        <ol className="list-decimal">
          <li>Battles, Sieges, Beginning of War</li>
          <li>Conquests, Annexations, Unions</li>
          <li>Losses and Disasters</li>
          <li>Falls of States</li>
          <li>Foundations of States and Revolutions</li>
          <li>Treaties and Sundries</li>
          <li>Births</li>
          <li>Deeds</li>
          <li>Deaths of Remarkable Individuals </li>
        </ol>
      </div>

      <div>
        <svg className="w-8/12" x="0px" y="0px" viewBox="0 0 154 154">
          <rect fillOpacity="1" className="fill-peabodyOrange" fill="peabodyOrange" width="154" height="154"/>
          <g>
            <rect className="fill-peabodyOrange" width="150" height="150"/>
            <rect fill="white" width="50" height="50" x="2" y="2" />
            <text className="number pointer-events-none" fill="black" x="22" y="32" fill="black">1</text>
            <rect x="50" fill="white" width="50" height="50" x="52" y="2" />
            <text className="number pointer-events-none" fill="black" x="72" y="32">2</text>
            <rect x="100" fill={highlight ? "#355c66" : "white"} width="50" height="50" x="102" y="2"/>
            <text className="number pointer-events-none" fill={highlight ? "white" : "black"} x="122" y="32">3</text>
            <rect y="50" fill="white" width="50" height="50" x="2" y="52"/>
            <text className="number pointer-events-none" fill="black" x="22" y="82">4</text>
            <rect x="50" y="50" fill={highlight ? "#498868" : "white"} width="50" height="50" x="52" y="52"/>
            <text className="number pointer-events-none" fill={highlight ? "white" : "black"} x="72" y="82">5</text>
            <rect x="100" y="50" fill="white" width="50" height="50" x="102" y="52"/>
            <text className="number pointer-events-none" fill="black" x="122" y="82">6</text>
            <rect y="100" fill={highlight ? "#8c2a22" : "white"} width="50" height="50" x="2" y="102"/>
            <text className="number pointer-events-none" fill={highlight ? "white" : "black"} x="22" y="132">7</text>
            <rect x="50" y="100" fill="white" width="50" height="50" x="52" y="102"/>
            <text className="number pointer-events-none" fill="black" x="72" y="132">8</text>
            <rect x="100" y="100" fill="white" width="50" height="50" x="102" y="102"/>
            <text className="number pointer-events-none" fill="black" x="122" y="132">9</text>
          </g>
        </svg>
      </div>
    </div>
  )
};

const Actors = function() {
  return (
    <div className="flex text-sm mt-6 gap-2">
      {Object.keys(eventsData.actorColors).map((actor, index) => {
          return (
            <div key={index} className={`font-normal bg-${actor} text-${actor === "Americas" || actor === "Sweden" ? "black" : "white"} p-2 border-2 border-black`}>
              {actor}
            </div>
          );
        })}
    </div>
  )
};

const TutorialTriggers = [
  (<p key={1}></p>),
  (<p key={2}>
    Peabody's version of Bem's system borrows the idea of a numbered grid,
    with each year in a century marked out in its own box.
  </p>),
  (<p key={3}>
    She also borrows the idea of subdividing each box, so that each of the
    nine interior squares corresponds to a particular type of historical event.
  </p>),
  (<>
    <p key={4}>
      In the Polish-American System, as in Bem's, the top left corner is the
      space for wars, battles, and sieges; in the top middle is the space for
      conquests and unions; in the top right is the space for losses and divisions,
      and so on.
    </p>
    <Key />
  </>),
  (<>
    <p key={5}>
      The events are also color-coded, indicating the various countries involved
      in a particular event. On this point, Peabody makes special note that she
      employs "a somewhat different, and, as it seems to me, a more expressive
      distribution of colors."
      <InlineFootnote index={7} bgOverride="white" textOverride="offblack" />
    </p>
    <Actors />
  </>),
  (<>
    <p key={6}>
      Shapes that take up the entire box indicate an event of such magnitude or
      complexity that the other events in that same year hardly matter.
    </p>
  </>),
  (<TutorialKey key={7} />)
];

export default TutorialTriggers;