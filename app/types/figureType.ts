export type TFigure = {
  altText: string | null;
  altTextLong: string | null;
  // Set when the scan has had its paper background cleared, so the fallback
  // served alongside the webp is a PNG with alpha rather than a flat JPEG.
  alpha?: boolean;
  artist: string | null;
  caption: string | null;
  chapter: string;
  cleanAltText: string | null;
  cleanAltTextLong: string | null;
  cleanSensitiveAltText: string | null;
  cleanTitle: string | null;
  creditLine: string | null;
  fileName: string;
  frontPage: boolean;
  height: number | null;
  iiif: boolean;
  sensitive: boolean;
  sensitiveAltText: string | null;
  sourceUrl: string | null;
  title: string | null;
  width: number | null;
  year: number;
};
