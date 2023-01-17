import { createContext } from "react";
import type { Dispatch } from "react";

interface IScrollytellContext {
  scrollProgress: float;
  setScrollProgress: Dispatch<SetStateAction<number>>;
}

export const ScrollytellContext = createContext<IScrollytellContext>({
  scrollProgress: 0.0,
  setScrollProgress: (_: SetStateAction<float>) => {
    console.error("setScrollProgress not implemented. Did you pass it to context?");
  },
});
