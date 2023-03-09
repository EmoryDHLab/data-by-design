import { createContext } from "react";
import type { Dispatch, SetStateAction, ReactNode } from "react";

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
  | "naked"
  | "shackledMen"
  | "nursingMother"
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
  requireConsentState: boolean;
  setRequireConsentState: Dispatch<SetStateAction<boolean>>;
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
  requireConsent: false,
});

ChapterContext.displayName = "ChapterContext";

export { ChapterContext };
