import { createContext } from "react";
import type { Dispatch, SetStateAction, ReactNode } from "react";
import type { TFigure } from "./types/figureType";

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
  | "Letter"
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
  | "0315-willard1"
  | "0316-willard2"
  | "0317-willard3"
  | "showError"
  | undefined;

export type TVizAnchors = {
  type: "scrollytell" | "visualization" | "figures";
  id: string;
  title: string;
};

export type TChapterSection = {
  title: string;
  id: string;
};

interface IChapterContext {
  backgroundColor?: string;
  accentColor?: string;
  accentTextColor?: string;
  primaryTextColor?: string;
  hoverState?: HoverState;
  setHoverState?: Dispatch<SetStateAction<HoverState>>;
  footnotes: ReactNode[];
  chapterFigures?: TFigure[];
  visualizations?: TVizAnchors[];
  footnoteTextColor?: string;
  disclosure?: boolean | undefined;
  hideSensitiveState?: boolean | undefined;
  setHideSensitiveState?: Dispatch<SetStateAction<boolean>>;
  showFootnotes?: boolean;
  setShowFootnotes?: Dispatch<SetStateAction<boolean>>;
  hide?: boolean;
  sections?: TChapterSection[];
}

const ChapterContext = createContext<IChapterContext>({
  backgroundColor: "changePrimary",
  accentColor: "changeSecondary",
  accentTextColor: "black",
  primaryTextColor: "white",
  footnoteTextColor: "black",
  hoverState: undefined,
  setHoverState: (_: SetStateAction<HoverState>) => {
    console.error("setHoverState not implemented. Did you pass it to context?");
  },
  footnotes: [],
  chapterFigures: [],
  visualizations: [],
  hideSensitiveState: false,
  sections: [],
  setShowFootnotes: (_: SetStateAction<boolean>) => {
    console.error(
      "setShowFootnotes not implemented. Did you pass it to context?",
    );
  },
  showFootnotes: false,
});

ChapterContext.displayName = "ChapterContext";

export { ChapterContext };
