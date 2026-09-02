import { useContext } from "react";
import { AltTextContext } from "~/altTextContext";
import { ChapterContext } from "~/chapterContext";
import { classNames } from "~/utils";
import type { TFigure } from "~/types/figureType";

interface Props {
  figure: TFigure;
  className?: string;
}

// Breakpoint widths for IIIF srcset requests. Cantaloupe (the IIIF server)
// rejects widths larger than the source image (400 error) and doesn't
// support webp output (415 error) - only jpg/png are safe formats. Kept to
// a small fixed set (rather than exact-viewport widths) so CloudFront's
// cache is reused across visitors instead of fragmenting per pixel width.
const IIIF_WIDTHS = [400, 800, 1200, 1600, 2000];
const SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

function iiifUrl(fileName: string, width: number) {
  return `https://iiif.ecds.io/iiif/3/${fileName}.tiff/full/${width},/0/default.png`;
}

function iiifSrcSet(fileName: string, maxWidth: number) {
  const widths = IIIF_WIDTHS.filter((w) => w < maxWidth);
  widths.push(maxWidth);
  return widths.map((w) => `${iiifUrl(fileName, w)} ${w}w`).join(", ");
}

const Picture = ({ figure, className }: Props) => {
  const { hideSensitiveState } = useContext(ChapterContext);
  const { preferShortAltText } = useContext(AltTextContext);

  const localPath = `/images/chapters/${figure.fileName}`;
  const iiifMaxWidth = figure.width || IIIF_WIDTHS[IIIF_WIDTHS.length - 1];
  const fallbackSrc = figure.iiif
    ? iiifUrl(figure.fileName, Math.min(1200, iiifMaxWidth))
    : `${localPath}.jpg`;

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
          srcSet={iiifSrcSet(figure.fileName, iiifMaxWidth)}
          sizes={SIZES}
          type="image/jpeg"
        />
      ) : (
        <source srcSet={`${localPath}.webp`} type="image/webp" />
      )}
      <img
        className={classNames("mx-auto", className)}
        src={fallbackSrc}
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
