import ChapterCard from "~/components/home/ChapterCard";
import { chapterMeta } from "~/data/chapterMeta";
import type { TChapterMeta, ChapterTitle } from "~/types/chapterMetaTags";

const ChapterCardGrid = () => {
  return (
    <div className="bg-black ">
      <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-3 3xl:mx-48">
        {Object.keys(chapterMeta as TChapterMeta)
          .slice(1, 8)
          .map((chapterName) => {
            const chapter = chapterMeta[chapterName as ChapterTitle];
            return (
              <ChapterCard
                key={`card-${chapterName}`}
                to={`/chapters/${chapterName}`}
                className={`hover:bg-${chapterName} bg-center bg-cover hover:text-white`}
                title={chapter.title}
                subtitle={chapter.subtitle}
              >
                {chapter.description}
                <link rel="prefetch" href={chapter.bgImage} />
              </ChapterCard>
            );
          })}
      </div>
    </div>
  );
};

export default ChapterCardGrid;
