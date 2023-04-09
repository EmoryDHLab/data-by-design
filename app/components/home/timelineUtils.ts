export interface Image {
  CHAPTER: string;
  FILE_NAME: string;
  TITLE: string;
  ARTIST: string;
  CREDIT: string;
  DIGITIZED: string;
  YEAR: string;
  ALT_TEXT: string;
}

export enum TimelineType {
  Draggable,
  Ordered,
}
