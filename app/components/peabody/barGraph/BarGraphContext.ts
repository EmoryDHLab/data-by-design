import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

type PeabodyCentury =
  | 1500
  | 1600
  | 1700
  | 1800;

type PeabodySquare =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9

type PeabodyActor =
  | "England"
  | "France"
  | "Americas"
  | "Holland"
  | "Sweden"
  | "Spain"
  | "Native"
  | "Mexico";

type PeabodyEvent =
  | {
      event: string;
      year: PeabodyCentury;
      squares: PeabodySquare[] | "full";
      actors: PeabodyActor[];
    }
  | undefined;

type ActivePeabodyEvent =
  | {
    event: PeabodyEvent;
    type: number;
    absoluteIndex: number;
  }
  | undefined;

interface IBarGraphContext {
  currentCentury: PeabodyCentury;
  setCurrentCentury: Dispatch<SetStateAction<PeabodyCentury>>;
  currentCenturyEvents: object[];
  setCurrentCenturyEvents: Dispatch<SetStateAction<array>>;
  activeEvent: ActivePeabodyEvent;
  setActiveEvent: Dispatch<SetStateAction<ActivePeabodyEvent>>;
  centuries: PeabodyCentury[]
}

const BarGraphContext = createContext<IBarGraphContext>({});

export default BarGraphContext;
