import { useContext, useState } from "react";
import { ScrollytellContext } from "~/scrollytellContext";
import Column from "../layout/Column";
import ScrollytellContent from "../ScrollytellContent";
import Tutorial from "./Tutorial";
import { ChapterContext } from "~/theme";
import InlineFootnote from "../InlineFootnote";

const triggers = [
  (<>Peabody's version of Bem's system borrows the idea of a numbered grid, with each year in a century marked out in its own box.</>),
  (<>She also borrows the idea of subdividing each box, so that each of the nine interior squares corresponds to a particular type of historical event.</>),
  (<>In the Polish-American System, as in Bem's, the top left corner is the space for wars, battles, and sieges; in the top middle is the space for conquests and unions; in the top right is the space for losses and divisions, and so on.</>),
  (<>Shapes that take up the entire box indicate an event of such magnitude or complexity that the other events in that same year hardly matter.</>),
  (<>The events are also color-coded, indicating the various countries involved in a particular event. On this point, Peabody makes special note that she employs "a somewhat different, and, as it seems to me, a more expressive distribution of colors."<InlineFootnote index={7} bgOverride="white" textOverride="offblack" /></>),
];

export default function Scrollytell() {
  const [scrollProgress, setScrollProgress] = useState(0.0);
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);

  return (
    <ScrollytellContext.Provider
      value={{
        scrollProgress,
        setScrollProgress
      }}
    >
      <div className={`bg-${backgroundColor} flex max-w-screen scrollytell`}>
        <Column className="w-screen mx-24">
          <p className="text-2xl h-[50vh]"></p>
          {triggers.map((trigger, index) => {
            return (
              <ScrollytellContent
                key={index}
                id={index}
                last={index + 1 === triggers.length}
                color={primaryTextColor}
              >
                {trigger}
              </ScrollytellContent>
            );
          })}
        </Column>
        <Column shouldPin={true}>
        <div className="grid content-center h-screen mr-24">
          <Tutorial />
        </div>
        </Column>
      </div>
    </ScrollytellContext.Provider>
  )
};