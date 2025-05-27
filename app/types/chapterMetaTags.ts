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
    image: string | undefined;
    bgImage: string | undefined;
    imageWidth: string;
    imageHeight: string;
  };
};
