import { createContext } from "react";
import type { Dispatch, useRef } from "react";

interface IScrollytellContext {
  scrollProgress: float;
  setScrollProgress: Dispatch<SetStateAction<number>>;
  setTriggers: Dispatch<SetStateAction<array>>;
  steps: useRef<HTMLDivElement<null>>;
}

export const ScrollytellContext = createContext<IScrollytellContext>({
  scrollProgress: 0.0,
  setScrollProgress: (_: SetStateAction<float>) => {
    console.error("setScrollProgress not implemented. Did you pass it to context?");
  },
  setTriggers: (_: SetStateAction<array>) => {
    // console.error("setTriggers not implemented. Did you pass it to context?");
  },
  steps: null,
});
