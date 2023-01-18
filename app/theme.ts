import { createContext, Dispatch, SetStateAction, ReactNode } from "react";

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
  accentTextColor: string;
  primaryTextColor: string;
  hoverState: HoverState;
  setHoverState: Dispatch<SetStateAction<HoverState>>;
  footnotes: ReactNode[];
  footnoteTextColor: string;
  docHeightState: number;
  setDocHeightState: Dispatch<SetStateAction<number>>;
}

export const ChapterContext = createContext<IChapterContext>({
  backgroundColor: "duboisPrimary",
  accentColor: "duboisSecondary",
  accentTextColor: "black",
  primaryTextColor: "white",
  footnoteTextColor: "black",
  hoverState: undefined,
  setHoverState: (_: SetStateAction<HoverState>) => {
    console.error("setHoverState not implemented. Did you pass it to context?");
  },
  docHeightState: 0,
  setDocHeightState: (_: SetStateAction<number>) => {
    console.error(
      "setDocHeightState not implemented. Did you pass it to context?"
    );
  },
  footnotes: [],
});
