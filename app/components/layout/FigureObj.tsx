import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import type { ReactNodeLike } from "prop-types";
import type { ChapterFigure } from "~/figureType";
import ImageModal from "~/components/layout/ImageModal";

interface Props {
  children: ReactNodeLike;
  figure: ChapterFigure;
  figures: array[ChapterFigure];
  className?: string;
}

export default function FigureObj({
  figure,
  figures,
  children,
  className,
}: Props) {
  const { chapter } = useContext(ChapterContext);

  return (
    <div className={`flex justify-center `}>
      <figure className={`${className ?? ""}`}>
        {figures ? (
          figures.map((image, index) => (
            <ImageModal
              className="p-2"
              key={index}
              src={image.src}
              alt={image.alt}
            />
          ))
        ) : (
          <ImageModal
            src={`/images/${chapter}/${figure.fileName}`}
            alt={figure.altText ?? ""}
            title={figure.title ?? ""}
          />
        )}
        <figcaption className="font-dubois md:text-center text-left mt-3 md:mt-6 mb-6 md:mb-12 col-span-full">
          <span
            dangerouslySetInnerHTML={{
              __html: figure.caption,
            }}
          />
          {figure.creditLine &&
            <span className="pl-1"
              dangerouslySetInnerHTML={{
                __html: figure.creditLine,
              }}
            />
          }
        </figcaption>
      </figure>
    </div>
  );
}
