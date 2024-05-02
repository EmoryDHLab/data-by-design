import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import FigureModal from "./FigureModal";
import type { TFigure } from "~/types/figureType";
import Picture from "./Picture";
import type { ReactElement } from "react";

interface Props {
  figure?: TFigure;
  figures?: Array<TFigure>;
  className?: string;
  imageClassName?: string;
  captionClassName?: string;
  groupCaption?: ReactElement;
  id?: string;
}

export const Caption = ({ figure, className }: Props) => {
  return (
    <figcaption
      className={`font-neueMontreal text-sm leading-5 text-left mt-3 md:mt-6 mb-6 md:mb-12 col-span-full ${
        className ?? ""
      }`}
      dangerouslySetInnerHTML={{
        __html: `<caption>${figure?.caption}<caption>${
          figure?.creditLine ? `<caption>${figure?.creditLine}</caption>` : ""
        }`,
      }}
    />
  );
};

export default function FigureObj({
  figure,
  figures,
  className,
  captionClassName,
  groupCaption,
  imageClassName,
  id,
}: Props) {
  const { hideSensitiveState } = useContext(ChapterContext);

  if (figures) {
    return (
      <div className={className ?? ""} id={id ?? `fig-${figures[0].fileName}`}>
        {figures.map((figure) => {
          return (
            <FigureModal
              key={`${figure.fileName}`}
              figure={figure}
              id={id ?? `fig-${figures[0].fileName}`}
            >
              <Picture figure={figure} />
            </FigureModal>
          );
        })}
        {groupCaption && (
          <figcaption
            className={`font-neueMontreal text-sm leading-tight text-left mt-3 md:mt-6 mb-6 md:mb-12 col-span-full ${
              captionClassName ?? ""
            }`}
          >
            {groupCaption}
          </figcaption>
        )}
        {!groupCaption && <Caption figure={figures[0]} />}
      </div>
    );
  } else if (figure) {
    return (
      <FigureModal
        figure={figure}
        className={className}
        id={id ?? `fig-${figure.fileName}`}
      >
        {hideSensitiveState && figure.sensitive && (
          <div className="absolute p-6 z-10 text-xl font-neueMontreal">
            {figure.altText?.split(".")[0]}. {figure.altText?.split(".")[1]}.
          </div>
        )}
        <Picture
          figure={figure}
          className={`transition-all duration-1000 ${imageClassName} ${
            hideSensitiveState && figure.sensitive
              ? "blur-md border-2 border-offblack"
              : ""
          }`}
        />
        <Caption figure={figure} className={captionClassName} />
      </FigureModal>
    );
  }

  return <></>;
}
