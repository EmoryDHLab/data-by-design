import type { ReactNodeLike } from "prop-types";
import { useContext, useState } from "react";
import { ChapterContext } from "~/chapterContext";

interface Props {
  index: number;
  children?: ReactNodeLike;
  bgOverride?: string;
  superscriptOverride?: string;
  textOverride?: string;
}

export default function InlineFootnote({
  index,
  bgOverride,
  superscriptOverride,
  textOverride,
}: Props) {
  const { accentColor, footnotes } = useContext(ChapterContext);
  const [isTextVisible, setIsTextVisible] = useState(false);

  return (
    <span>
      <button
        onClick={() => setIsTextVisible(!isTextVisible)}
        className={`footnote mr-2 inline-flex items-center justify-center bg-${
          isTextVisible ? accentColor : "offwhite"
        } hover:bg-${accentColor} text-offblack pointer-events-auto border border-offblack`}
      >
        {index + 1}
      </button>
      {isTextVisible && (
        <span className="font-neueMontrealLight">{footnotes[index]}</span>
      )}
    </span>
  );
}
