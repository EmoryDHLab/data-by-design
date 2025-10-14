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
  const [altText, setAltText] = useState<string>(figure.altText || "");

  useEffect(() => {
    if (figure.width) {
      setFigurePath(
        `https://iiif.ecds.io/iiif/3/dxd/${figure.chapter}/${figure.fileName}.tiff/full/max/0/default`
      );
    }
  }, [figure]);

  useEffect(() => {
    if (hideSensitiveState && figure.cleanSensitiveAltText) {
      setAltText(figure.cleanSensitiveAltText.replace(/(<i>|<\/i>)/gi, '"'));
    } else if (!hideSensitiveState && figure.cleanAltText) {
      setAltText(figure.cleanAltText.replace(/(<i>|<\/i>)/gi, '"'));
    } else if (figure.cleanTitle) {
      setAltText(figure.cleanTitle.replace(/(<i>|<\/i>)/gi, '"'));
    }
  }, [figure]);

  return (
    <picture ref={pictureRef}>
      <source
        srcSet={`/images/${figure.chapter}/${figure.fileName}.webp`}
        type="image/webp"
      />
      <source
        srcSet={`/images/${figure.chapter}/${figure.fileName}.jpg`}
        type="image/jpeg"
      />
      <source srcSet={`${figurePath}.webp`} type="image/webp" />
      <source srcSet={`${figurePath}.jpg`} type="image/webp" />
      <img
        className={classNames(
          center ? "mx-auto drop-shadow-lg" : "mx-0 drop-shadow-lg",
          className
        )}
        src={`${figurePath}.jpg`}
        alt={altText}
        title={figure.cleanTitle ?? figure.fileName}
        draggable={!hideSensitiveState}
        loading="lazy"
        width={figure.width ?? 0}
        height={figure.height ?? 0}
      />
    </picture>
  );
};

export default Picture;
