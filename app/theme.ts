import { createContext } from "react";

export const ThemeContext = createContext({
  backgroundColor: "duboisPrimary",
  accentColor: "duboisSecondary",
  primaryTextColor: "white",
});
