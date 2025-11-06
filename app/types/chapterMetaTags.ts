export type ChapterTitle =
  | "intro"
  | "data"
  | "change"
  | "knowledge"
  | "image"
  | "people"
  | "labor"
  | "preface"
  | "epilogue";

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
