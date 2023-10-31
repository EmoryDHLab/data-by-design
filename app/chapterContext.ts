import { createContext } from "react";
import type { Dispatch, SetStateAction, ReactNode, RefObject } from "react";

export type HoverState =
  | "Rochester"
  | "Louisville"
  | "Richmond"
  | "Jamestown"
  | "Plymouth"
  | "FirstEnslavedAfricans"
  | "hold"
  | "crossSections"
  | "watercolor"
  | "tables"
  | "nonhumanCargo"
  | "nakedPeople"
  | "shackledMen"
  | "nursingMother"
  | "crossSections"
  | "sideView"
  | "tableSet"
  | "City"
  | "Value"
  | "Owners"
  | "Illiteracy"
  | "Countries"
  | "Occupations"
  | "Freedom"
  | "Newspapers"
  | "Gender"
  | "Race"
  | "Race-Distribution"
  | "Foreign"
  | "Age-Sex"
  | "Populations"
  | "Religion"
  | "Occupation"
  | "Map"
  | "Willard1"
  | "Willard2"
  | "Willard9"
  | undefined;

export type TAnchors = {
  [key: string]: {
    type: "figure" | "scrollytell" | "visualization",
    ref: RefObject<HTMLSpanElement> | undefined
  }
}
interface IChapterContext {
  backgroundColor?: string;
  accentColor?: string;
  accentTextColor?: string;
  primaryTextColor?: string;
  hoverState?: HoverState;
  setHoverState?: Dispatch<SetStateAction<HoverState>>;
  footnotes: Array<ReactNode>;
  footnoteTextColor?: string;
  docHeightState?: number;
  setDocHeightState?: Dispatch<SetStateAction<number>>;
  figures?: object|undefined;
  disclosure?: boolean|undefined
  hideSensitiveState?: boolean|undefined;
  setHideSensitiveState?: Dispatch<SetStateAction<boolean>>;
  hide?: boolean;
}

const ChapterContext = createContext<IChapterContext>({
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
  figures: undefined,
  hideSensitiveState: false,
});

ChapterContext.displayName = "ChapterContext";

export { ChapterContext };
