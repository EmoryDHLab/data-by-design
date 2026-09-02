import { useContext, useState } from "react";
import { AltTextContext } from "~/altTextContext";
import { ChapterContext } from "~/chapterContext";
import { classNames } from "~/utils";
import type { TFigure } from "~/types/figureType";

interface Props {
  figure: TFigure;
  className?: string;
}

const SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

function iiifUrl(fileName: string) {
  return `https://iiif.ecds.io/iiif/3/${fileName}.tiff/full/1200,/0/default.jpg`;
}

const Picture = ({ figure, className }: Props) => {
  const { hideSensitiveState } = useContext(ChapterContext);
  const { preferShortAltText } = useContext(AltTextContext);
  // Local webp/jpg is preferred, IIIF server currently does
  // not support webp.
  const [localFailed, setLocalFailed] = useState(false);
  const useIIIFFallback = localFailed && figure.iiif;

  const localPath = `/images/chapters/${figure.fileName}`;

  const altText =
    (hideSensitiveState
      ? figure.cleanSensitiveAltText
      : preferShortAltText
      ? figure.cleanAltText
      : figure.cleanAltTextLong) ??
    figure.cleanTitle ??
    figure.altTextLong ??
    "";

  return (
    <picture>
      {!useIIIFFallback && (
        <source srcSet={`${localPath}.webp`} type="image/webp" />
      )}
      <img
        className={classNames("mx-auto", className)}
        src={useIIIFFallback ? iiifUrl(figure.fileName) : `${localPath}.jpg`}
        onError={() => {
          if (!localFailed && figure.iiif) setLocalFailed(true);
        }}
        alt={altText}
        title={figure.cleanTitle ?? figure.fileName}
        draggable={!hideSensitiveState}
        loading="lazy"
        decoding="async"
        width={figure.width ?? 0}
        height={figure.height ?? 0}
        sizes={SIZES}
      />
    </picture>
  );
};

export default Picture;
