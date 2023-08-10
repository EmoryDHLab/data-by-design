import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import type { Figure } from "~/types/figureType";

interface Props {
  figure: Figure;
  className?: string;
}

function Picture({ figure, className }: Props) {
  const { hide } = useContext(ChapterContext);

  return (
    <picture>
      <source srcSet={`/images/${figure.chapter}/${figure.fileName}.webp`} />
      <source srcSet={`/images/${figure.chapter}/${figure.fileName}.jpg`} />
      <img
        className={`drop-shadow-lg transition-opacity opacity-${hide ? "0" : "100"} ${className ?? ""}`}
        src={`/images/${figure.chapter}/${figure.fileName}.jpg`}
        alt={figure.altText ?? ""}
        title={figure.title ?? ""}
        draggable={!hide}
      />
    </picture>
  );
}

export default Picture;