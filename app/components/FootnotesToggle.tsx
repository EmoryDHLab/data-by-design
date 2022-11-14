import { useContext } from "react";
import { ThemeContext } from "~/theme";

export default function FootnotesToggle() {
  const { backgroundColor } = useContext(ThemeContext);
  return (
    <div className="flex items-center space-x-2">
      <div
        className={`border-${backgroundColor} w-[45px] h-[21px] flex items-center border-2 rounded-full`}
      >
        <div
          className={`rounded-full w-[15px] h-[15px] ml-[1px] bg-${backgroundColor}`}
        />
      </div>
      <span className="font-dubois">view footnotes</span>
    </div>
  );
}
