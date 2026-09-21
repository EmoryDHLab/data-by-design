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

const IIIF_SRCSET_WIDTHS = [640, 960, 1280, 1920, 2560];

const iiifUrl = (figure: TFigure, width: number) => {
  return `https://iiif.ecds.io/iiif/3/${
    figure.fileName
  }.tiff/full/${width},/0/default.${figure.alpha ? "png" : "jpg"}`;
};

const iiifSrcSet = (figure: TFigure) => {
  const maxWidth =
    figure.width ?? IIIF_SRCSET_WIDTHS[IIIF_SRCSET_WIDTHS.length - 1];
  const widths = [...IIIF_SRCSET_WIDTHS.filter((w) => w < maxWidth), maxWidth];
  return widths.map((w) => `${iiifUrl(figure, w)} ${w}w`).join(", ");
};

const Picture = ({ figure, className }: Props) => {
  const { hideSensitiveState } = useContext(ChapterContext);
  const { preferShortAltText } = useContext(AltTextContext);

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
      {figure.iiif ? (
        <source
          srcSet={iiifSrcSet(figure)}
          sizes={SIZES}
          type={`image/${figure.alpha ? "png" : "jpeg"}`}
        />
      ) : (
        <source
          srcSet={`/images/chapters/${figure.fileName}.webp`}
          type="image/webp"
        />
      )}
      <img
        className={classNames("mx-auto max-h-screen object-contain", className)}
        src={`/images/chapters/${figure.fileName}.jpg`}
        alt={altText}
        title={figure.cleanTitle ?? figure.fileName}
        draggable={!hideSensitiveState}
        decoding="async"
        width={figure.width ?? 0}
        height={figure.height ?? 0}
        sizes={SIZES}
      />
    </picture>
  );
};

export default Picture;
