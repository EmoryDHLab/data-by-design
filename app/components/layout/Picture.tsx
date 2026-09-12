import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import type { TFigure } from "~/types/figureType";
import { classNames, titleToPlainText } from "~/utils";

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
        className={classNames(
          center ? "mx-auto max-h-screen w-auto object-contain" : "mx-0",
          className,
        )}
        src={`/images/${figure.chapter}/${figure.fileName}.jpg`}
        alt={
          titleToPlainText(figure.altText) ??
          titleToPlainText(figure.title) ??
          ""
        }
        title={titleToPlainText(figure.title) ?? figure.fileName}
        draggable={!hideSensitiveState}
      />
    </picture>
  );
};

export default Picture;
