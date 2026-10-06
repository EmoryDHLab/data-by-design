import { useContext, useState } from "react";
import { AltTextContext } from "~/altTextContext";
import { ChapterContext } from "~/chapterContext";
import { classNames } from "~/utils";
import type { TFigure } from "~/types/figureType";

interface Props {
  figure: TFigure;
  className?: string;
}

// The browser picks from the srcset by this hint, so it must not undersell how
// wide the image is drawn. Figures run up to the full width of the reading
// column and beyond, and the old "33vw" on desktop had them fetching a file a
// third of that and stretching it — soft in the chapter, sharp only once the
// lightbox's deep zoom loaded the full tiles. The viewport is the one width a
// figure never exceeds; srcset is already capped at the figure's own width.
const SIZES = "100vw";

const IIIF_SRCSET_WIDTHS = [640, 960, 1280, 1920, 2560];

// A quarter turn swaps the scan's sides, so the width the image is drawn at is
// its height before turning.
const isQuarterTurn = (figure: TFigure) => (figure.rotation ?? 0) % 180 !== 0;

const drawnWidth = (figure: TFigure) =>
  isQuarterTurn(figure) ? figure.height : figure.width;

const drawnHeight = (figure: TFigure) =>
  isQuarterTurn(figure) ? figure.width : figure.height;

// IIIF sizes the image before rotating it, so after a quarter turn the width
// asked for here has to be given as the height (",w") for the srcset's "w"
// descriptors to stay true of what comes back.
const iiifUrl = (figure: TFigure, width: number) => {
  const size = isQuarterTurn(figure) ? `,${width}` : `${width},`;
  return `https://iiif.ecds.io/iiif/3/${figure.fileName}.tiff/full/${size}/${
    figure.rotation ?? 0
  }/default.${figure.alpha ? "png" : "jpg"}`;
};

const iiifSrcSet = (figure: TFigure) => {
  const maxWidth =
    drawnWidth(figure) ?? IIIF_SRCSET_WIDTHS[IIIF_SRCSET_WIDTHS.length - 1];
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
        width={drawnWidth(figure) ?? 0}
        height={drawnHeight(figure) ?? 0}
        sizes={SIZES}
      />
    </picture>
  );
};

export default Picture;
