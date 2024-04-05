import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import type { TFigure } from "~/types/figureType";

interface Props {
  figure: TFigure;
  className?: string;
  center?: boolean;
}

function Picture({ figure, className, center = true }: Props) {
  const { hide } = useContext(ChapterContext);

  return (
    <picture>
      <source srcSet={`/images/${figure.chapter}/${figure.fileName}.webp`} />
      <source srcSet={`/images/${figure.chapter}/${figure.fileName}.jpg`} />
      <img
        className={`mx-${center ? "auto" : 0}  transition-opacity opacity-${
          hide ? "0" : "100"
        } ${className ?? ""}`}
        src={`/images/${figure.chapter}/${figure.fileName}.jpg`}
        alt={
          figure.altText?.replace(/(<i>|<\/i>)/gi, '"') ??
          figure.title?.replace(/(<i>|<\/i>)/gi, '"') ??
          ""
        }
        title={figure.title?.replace(/(<i>|<\/i>)/gi, '"') ?? figure.fileName}
        draggable={!hide}
      />
    </picture>
  );
}

export default Picture;
