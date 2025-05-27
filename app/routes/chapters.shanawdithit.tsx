import { redirect } from "react-router";

export const loader = () => {
  return redirect("/chapters/people", 301);
};
