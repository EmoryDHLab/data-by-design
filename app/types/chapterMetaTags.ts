export type ChapterTitle =
  | "intro"
  | "description"
  | "dubois"
  | "peabody"
  | "playfair"
  | "shanawdithit"
  | "labor";

export type TChapterMeta = {
  [key in ChapterTitle]: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    imageWidth: string;
    imageHeight: string;
  };
};
