import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { ActivePeabodyEvent, PeabodyEvent } from "~/types/peabody";

export type PeabodyCentury =
  | 1500
  | 1600
  | 1700
  | 1800;

interface IBarGraphContext {
  currentCentury: PeabodyCentury | number;
  setCurrentCentury: Dispatch<SetStateAction<PeabodyCentury | number>>;
  currentCenturyEvents: Array<PeabodyEvent>;
  setCurrentCenturyEvents: Dispatch<SetStateAction<Array<PeabodyEvent>>>;
  activeEvent: ActivePeabodyEvent | undefined;
  setActiveEvent: Dispatch<SetStateAction<ActivePeabodyEvent | undefined>>;
  centuries: Array<number>
}

const BarGraphContext = createContext<IBarGraphContext>({
  currentCentury: 1700,
  setCurrentCentury: (_: SetStateAction<PeabodyCentury | number>) => {
    console.error("setCurrentCentury not implemented. Did you pass it to context?");
  },
  currentCenturyEvents: [],
  setCurrentCenturyEvents: (_: SetStateAction<Array<PeabodyEvent>>) => {
    console.error("setCurrentCenturyEvents not implemented. Did you pass it to context?");
  },
  activeEvent: undefined,
  setActiveEvent: (_: SetStateAction<ActivePeabodyEvent>) => {
    console.error("setActiveEvent not implemented. Did you pass it to context?");
  },
  centuries: [],
});

export default BarGraphContext;
