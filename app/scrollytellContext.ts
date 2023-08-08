import { createContext } from "react";
import type { Dispatch, SetStateAction, RefObject } from "react";
// import type { HTMLDivElement } from "react-dom";

interface IScrollytellContext {
  scrollProgress: number;
  setScrollProgress: Dispatch<SetStateAction<number>>;
  setTriggers: Dispatch<SetStateAction<Array<RefObject<HTMLDivElement>>>>;
  steps: RefObject<HTMLDivElement> | undefined;
}

export const ScrollytellContext = createContext<IScrollytellContext>({
  scrollProgress: 0.0,
  setScrollProgress: (_: SetStateAction<number>) => {
    console.error("setScrollProgress not implemented. Did you pass it to context?");
  },
  setTriggers: (_: SetStateAction<Array<RefObject<HTMLDivElement>>>) => {
    // console.error("setTriggers not implemented. Did you pass it to context?");
  },
  steps: undefined,
});
