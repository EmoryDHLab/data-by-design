export type ChapterTitle =
  | "brooks"
  | "dubois"
  | "peabody"
  | "playfair"
  | "shanawdithit"
  | "labour";

export type TChapterMeta = {
  [key in ChapterTitle]: {
    title: string,
    subtitle: string,
    description: string,
    image: string,
    imageWidth: string,
    imageHeight: string
  }
};