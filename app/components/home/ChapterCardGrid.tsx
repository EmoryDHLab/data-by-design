import ChapterCard from "~/components/home/ChapterCard";
import chapters from "~/data/chapterMeta.json";
import type { TChapterMeta, ChapterTitle } from "~/types/chapterMetaTags";

const ChapterCardGrid = () => {
  return (
    <div className="bg-black ">
      <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-3 3xl:mx-48">
        {Object.keys(chapters as TChapterMeta)
          .slice(1, 8)
          .map((chapterName) => {
            const chapter = chapters[chapterName as ChapterTitle];
            return (
              <ChapterCard
                key={`card-${chapterName}`}
                to={`/chapters/${chapterName}`}
                className={`hover:bg-${chapterName} bg-center hover:text-white`}
                title={chapter.title}
                subtitle={chapter.subtitle}
              >
                {chapter.description}
              </ChapterCard>
            );
          })}
      </div>
    </div>
  );
};

export default ChapterCardGrid;
