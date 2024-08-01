import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import type { TFigure } from "~/types/figureType";
import { classNames } from "~/utils";

interface Props {
  figure: TFigure;
  className?: string;
  center?: boolean;
}

const Picture = ({ figure, className, center = true }: Props) => {
  const { hideSensitiveState } = useContext(ChapterContext);

  return (
    <picture>
      <source srcSet={`/images/${figure.chapter}/${figure.fileName}.webp`} />
      <source srcSet={`/images/${figure.chapter}/${figure.fileName}.jpg`} />
      <img
        className={classNames(center ? "mx-auto" : "mx-0", className)}
        src={`/images/${figure.chapter}/${figure.fileName}.jpg`}
        alt={
          figure.altText?.replace(/(<i>|<\/i>)/gi, '"') ??
          figure.title?.replace(/(<i>|<\/i>)/gi, '"') ??
          ""
        }
        title={figure.title?.replace(/(<i>|<\/i>)/gi, '"') ?? figure.fileName}
        draggable={!hideSensitiveState}
      />
    </picture>
  );
};

export default Picture;
