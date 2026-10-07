import ChapterCard from "~/components/home/ChapterCard";
import { chapterMeta } from "~/data/chapterMeta";
import type { TChapterMeta, ChapterTitle } from "~/types/chapterMetaTags";

const ChapterCardGrid = () => {
  return (
    <div className="bg-black ">
      <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-3 3xl:mx-48">
        {/* The six chapters, data through labor: preface and intro come
            before them in chapterMeta, and the epilogue after, which has no
            route yet. Six also fills the grid's two columns by three rows. */}
        {Object.keys(chapterMeta as TChapterMeta)
          .slice(2, 8)
          .map((chapterName) => {
            const chapter = chapterMeta[chapterName as ChapterTitle];
            return (
              <ChapterCard
                key={`card-${chapterName}`}
                to={`/chapters/${chapterName}`}
                title={chapter.title}
                subtitle={chapter.subtitle}
                bg={chapter.bgImage}
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
