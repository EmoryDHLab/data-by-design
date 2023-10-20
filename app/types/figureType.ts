export type TFigure = {
  chapter: string;
  fileName: string;
  title: string|undefined|null;
  artist: string|undefined|null;
  caption: string|undefined|null;
  altText: string|undefined|null;
  sensitive: boolean|string|undefined|null;
  creditLine: string|undefined|null;
  digitizedLine: string|undefined|null;
  source: string|undefined|null;
  sourceUrl: string|undefined|null;
  fee: boolean|string|undefined|null;
  notes: string|undefined|null;
  frontPage: boolean|string|undefined|null;
  year: number;
}
// export type ChapterFigure = {
//   [key: string]: Figure;
// }