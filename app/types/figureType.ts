export type Figure = {
  chapter: string;
  fileName: string;
  title: string|undefined;
  artist: string|undefined;
  caption: string|undefined;
  altText: string|undefined;
  sensitive: boolean|string|undefined;
  creditLine: string|undefined;
  digitizedLine: string|undefined;
  source: string|undefined;
  sourceUrl: string|undefined;
  fee: boolean|string|undefined;
  notes: string|undefined;
  frontPage: boolean|string|undefined;
  year: number|string|undefined;
}
// export type ChapterFigure = {
//   [key: string]: Figure;
// }