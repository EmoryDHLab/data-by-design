import type { ReactNodeLike } from "prop-types";
import type { ChapterFigure } from "~/types/figureType";
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

  return (
    <figure className={`grid grid-cols-1 place-items-center md:ml-24 ${className ?? ""}`}>
      {figures ? (
        figures.map((image, index) => (
          <ImageModal
            className="p-2"
            key={figure.fileName}
            src={`/images/${figure.chapter}/${figure.fileName}`}
            alt={image.altText}
          />
        ))
      ) : (
        <ImageModal
          figure={figure}
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
  );
}
