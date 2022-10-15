import ChapterCard from "~/components/ChapterCard";

export default function ChapterCardGrid() {
  return (
    <>
      <h3 className="text-white font-william font-bold text-center text-3xl mb-7">
        CHAPTERS
      </h3>
      <div className="grid grid-cols-2 grid-rows-3">
        <ChapterCard
          to="/chapters/brooks"
          className="cardBrooks bg-brooksSecondary hover:text-white"
          title="Every Datapoint a Person"
          subtitle="The Brooks / Diagram of a Slave Ship"
        >
          Before there are data, there are people. People who offer up their
          lives as data -- or whose lives become data without consent.
        </ChapterCard>
        <ChapterCard
          to="/chapters/playfair"
          className="cardPlayfair bg-playfairSecondary hover:text-white"
          title="What Visualization Reveals"
          subtitle="William Playfair's Time-Series Charts"
        >
          Data visualization has never been neutral or objective. There is a
          meaning -- and an argument -- conveyed through each design.
        </ChapterCard>
        <ChapterCard
          to="/chapters/willard"
          className="cardWillard bg-willardSecondary hover:text-white"
          title="Narratives of Possession"
          subtitle="Emma Willard and Shanawdithit’s Narrative Maps"
        >
          Maps can create nations and contest them. <br />
          How have maps been used to document multiple pasts?
        </ChapterCard>
        <ChapterCard
          to="/chapters/peabody"
          className="cardPeabody bg-peabodySecondary hover:text-white"
          title="The Work of Knowledge"
          subtitle="Elizabeth Palmer Peabody’s Chronological Grids as Argument"
        >
          We have come to believe that data visualizations should be clear and
          efficient. Is there value in designs that make us pause and reflect?
        </ChapterCard>
        <ChapterCard
          to="/chapters/dubois"
          className="cardDubois bg-duboisSecondary hover:text-white"
          title="Between Data and Truth"
          subtitle="W. E. B. Du Bois’s “Data Portraits”"
        >
          How can data visualization bear witness to oppression? How can it hold
          space for what cannot be conveyed through data alone?
        </ChapterCard>
        <ChapterCard
          to="/chapters/labour"
          className="cardLabour bg-labourSecondary hover:text-white"
          title="Labour"
          subtitle="How We Built This"
        >
          How can data visualization bear witness to oppression? How can it hold
          space for what cannot be conveyed through data alone?
        </ChapterCard>
      </div>
    </>
  );
}
