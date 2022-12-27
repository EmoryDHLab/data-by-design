import { useState } from "react";
import Column from "../layout/Column";
import Recreation from "./Recreation";
import Content from "./scroll_elements/Content";

export default function Scrollytell() {

  const triggers = [
    "The table in the first edition of the Atlas includes data only for the years between 1770 and 1782.",
    "Playfair nevertheless plotted data lines for the full range of years between 1700 and 1780.",
    "He shaded the area between the two data lines in order to illustrate the balance of trade between the two nations. Stippled dots indicate periods of time when the amount of imports from North America to England exceeded the amount of exports from England to North America. Diagonal lines indicate the times when exports from England to North America exceed imports.",
    "While Playfair includes both major and minor gridlines along the y-axis of the chart, in the version included in the first edition of the Atlas Playfair includes minor gridlines along the x-axis only for the twelve years for which he possesses tabular data.",
    "In the third edition of the Atlas these minor gridlines disappear--along with the data tables.",
    "While Playfair extends the endpoint of the x-axis to 1800, what was then the present, the datalines become less precise. As he plots the lines of imports and exports, they become smoother--as improved engraving technique, or of his desire to convey a more general impression of the economic picture, or both.",
    "In the third edition of the Atlas Playfair also made significant improvements to the charts' design. He replaced the hachure and stippled dots employed in the second edition to indicate the difference between the periods of trade in favor of and against England with hand-stained color",
    "He (or more likely, the master-engraver Neele) also placed the titles in oval superimposed upon the chart, rather than above, and decided to remove the explanatory notes about the charts' scale.",
    "He labeled the axes and modified the scale markers of the charts—each of which also improved legibility.",
    "The overall effect was to solidify the impact “simple impression” that he envisioned from the start.",
  ];

  const [currentProgress, setCurrentProgress] = useState(0.0);

  return (
    <div className="bg-playfairPrimary flex max-w-screen scrollytell">
      <Column className="w-screen mx-24">
        <p className="h-screen text-white text-2xl"></p>
        {triggers.map((trigger, index) => {
          return (
            <Content key={index} update={setCurrentProgress} id={index}>{trigger}</Content>
          );
        })}
      </Column>
      <Column shouldPin={true}>
        <div className="grid content-center h-screen mr-24">
          <Recreation scrollProg={currentProgress} />
        </div>
      </Column>
    </div>
  )
}
