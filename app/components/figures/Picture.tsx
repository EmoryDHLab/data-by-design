import { useContext, useEffect, useRef, useState } from "react";
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
  const pictureRef = useRef<HTMLPictureElement>(null);
  const [figurePath, setFigurePath] = useState<string>(
    `/images/${figure.chapter}/${figure.fileName}`
  );

  useEffect(() => {
    if (figure.width) {
      setFigurePath(
        `https://iiif.ecds.io/iiif/3/dxd/${figure.chapter}/${figure.fileName}.tiff/full/max/0/default`
      );
    }
  }, [figure]);

  return (
    <picture ref={pictureRef}>
      <source srcSet={`${figurePath}.webp`} />
      <source srcSet={`${figurePath}.jpg`} />
      <img
        className={classNames(
          center ? "mx-auto drop-shadow-lg" : "mx-0 drop-shadow-lg",
          className
        )}
        src={`${figurePath}.jpg`}
        alt={
          figure.altText?.replace(/(<i>|<\/i>)/gi, '"') ??
          figure.title?.replace(/(<i>|<\/i>)/gi, '"') ??
          ""
        }
        title={figure.title?.replace(/(<i>|<\/i>)/gi, '"') ?? figure.fileName}
        draggable={!hideSensitiveState}
        loading="lazy"
        width={figure.width ?? 0}
        height={figure.height ?? 0}
      />
    </picture>
  );
};

export default Picture;
