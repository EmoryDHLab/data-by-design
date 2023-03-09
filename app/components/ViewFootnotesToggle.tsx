import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";

interface Props {
  className?: string;
}

export default function ViewFootnotesToggle({ className }: Props) {
  const { backgroundColor } = useContext(ChapterContext);
  return (
    <div className={`flex items-center space-x-2 ${className ?? ""}`}>
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
