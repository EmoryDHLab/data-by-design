import { createContext, Dispatch, SetStateAction } from "react";

export type HoverState =
  | "Rochester"
  | "Louisville"
  | "Richmond"
  | "Jamestown"
  | "Plymouth"
  | "FirstEnslavedAfricans"
  | undefined;

interface IChapterContext {
  backgroundColor: string;
  accentColor: string;
  primaryTextColor: string;
  hoverState: HoverState;
  setHoverState: Dispatch<SetStateAction<HoverState>>;
  footnoteState: number;
  setFootnoteState: Dispatch<SetStateAction<number>>;
}

export const ChapterContext = createContext<IChapterContext>({
  backgroundColor: "duboisPrimary",
  accentColor: "duboisSecondary",
  primaryTextColor: "white",
  hoverState: undefined,
  setHoverState: (_: SetStateAction<HoverState>) => {
    console.error("setHoverState not implemented. Did you pass it to context?");
  },
  footnoteState: 0,
  setFootnoteState: (_: SetStateAction<number>) => {
    console.error("setFootnoteState not implemented. Did you pass it to context?");
  },
});
