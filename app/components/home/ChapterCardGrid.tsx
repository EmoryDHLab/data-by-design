import ChapterCard from "~/components/home/ChapterCard";

export default function ChapterCardGrid() {
  return (
    <div className="bg-black">
      <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-3 3xl:mx-48">
        <ChapterCard
          to="/chapters/description"
          status=""
          className="cardBrooks bg-black hover:text-white"
          title="Every Datapoint a Person"
          subtitle="Diagram of a Slave Ship"
        >
          Before there are data, there are people. People who offer up their
          lives as data — or whose lives become data without consent.
        </ChapterCard>
        <ChapterCard
          to="/chapters/playfair"
          status=""
          className="cardPlayfair bg-black hover:text-white"
          title="What Visualization Reveals"
          subtitle="William Playfair's Time-Series Charts"
        >
          Data visualization has never been neutral or objective. There is a
          meaning — and an argument — conveyed through each design.
        </ChapterCard>
        <ChapterCard
          to="/chapters/shanawdithit"
          status=""
          className="cardShanawdithit bg-black hover:text-white"
          title="Narratives of Possession"
          subtitle="Shanawdithit's Narrative Maps"
        >
          Maps can create nations and contest them. <br />
          How have maps been used to document multiple pasts?
        </ChapterCard>
        <ChapterCard
          to="/chapters/peabody"
          status=""
          className="cardPeabody bg-black hover:text-white"
          title="The Work of Knowledge"
          subtitle="Elizabeth Palmer Peabody's Chronological Grids"
        >
          We have come to believe that data visualizations should be clear and
          efficient. Is there value in designs that make us pause and reflect?
        </ChapterCard>
        <ChapterCard
          to="/chapters/dubois"
          status=""
          className="cardDubois bg-black hover:text-white"
          title="Between Data and Truth"
          subtitle="W. E. B. Du Bois's “Data Portraits”"
        >
          How can data visualization bear witness to oppression? How can it hold
          space for what cannot be conveyed through data alone?
        </ChapterCard>
        <ChapterCard
          to="/chapters/labor"
          status="IN PROGRESS"
          className="cardLabour bg-black hover:text-white"
          title="The Process is the Product"
          subtitle="The Making of Data by Design"
        >
          Any digital project is the work of many hands. How can this labor be
          visualized? What labor remains out of sight?
        </ChapterCard>
      </div>
    </div>
  );
}
