export type ChapterTitle =
  | "intro"
  | "data"
  | "power"
  | "process"
  | "image"
  | "people"
  | "work"
  | "preface";

export type TChapterMeta = {
  [key in ChapterTitle]: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    bgImage: string;
    imageWidth: string;
    imageHeight: string;
  };
};
