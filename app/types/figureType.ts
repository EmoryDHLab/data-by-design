type Figure = {
  chapter: string;
  fileName: string;
  title: string|undefined;
  artist: string|undefined;
  caption: string|undefined;
  altText: string|undefined;
  sensitive: string|undefined;
  creditLine: string|undefined;
  digitizedLine: string|undefined;
  source: string|undefined;
  sourceUrl: string|undefined;
  fee: string|undefined;
  notes: string|undefined;
  frontPage: string|undefined;
  year: string|undefined;
  file_type: string;
}
export type ChapterFigure = {
  [key: string]: Figure;
}