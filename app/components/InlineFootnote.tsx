import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "~/chapterContext";

interface Props {
  index: number;
}

export default function InlineFootnote({ index }: Props) {
  const { accentColor, footnotes, showFootnotes } = useContext(ChapterContext);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    setIsTextVisible(showFootnotes);
  }, [showFootnotes]);

  return (
    <span>
      <button
        onClick={() => setIsTextVisible(!isTextVisible)}
        className={`footnote mr-2 inline-flex items-center font-semibold justify-center bg-${
          isTextVisible ? accentColor : "offwhite"
        } hover:bg-${accentColor} text-offblack pointer-events-auto border-[1.5px] border-offblack`}
      >
        {index + 1}
      </button>
      {isTextVisible && (
        <span className="font-neueMontrealLight">{footnotes[index]}</span>
      )}
    </span>
  );
}
