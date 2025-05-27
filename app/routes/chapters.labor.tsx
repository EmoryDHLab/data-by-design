import { redirect } from "react-router";

export const loader = () => {
  return redirect("/chapters/work", 301);
};
