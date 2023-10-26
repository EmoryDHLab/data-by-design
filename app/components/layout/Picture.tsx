import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import type { TFigure } from "~/types/figureType";

interface Props {
  figure: TFigure;
  className?: string;
}

function Picture({ figure, className }: Props) {
  const { hide } = useContext(ChapterContext);

  return (
    <picture>
      <source srcSet={`/images/${figure.chapter}/${figure.fileName}.webp`} />
      <source srcSet={`/images/${figure.chapter}/${figure.fileName}.jpg`} />
      <img
        className={`mx-auto drop-shadow-lg transition-opacity opacity-${
          hide ? "0" : "100"
        } ${className ?? ""}`}
        src={`/images/${figure.chapter}/${figure.fileName}.jpg`}
        alt={figure.altText ?? ""}
        title={figure.title ?? ""}
        draggable={!hide}
      />
    </picture>
  );
}

export default Picture;
