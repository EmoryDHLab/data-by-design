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
  const { backgroundColor, primaryTextColor, footnotes } =
    useContext(ChapterContext);
  const [isTextVisible, setIsTextVisible] = useState(false);

  return (
    <span>
      <button
        onClick={() => setIsTextVisible(!isTextVisible)}
        className={`footnote mr-2 bg-${bgOverride ?? backgroundColor} text-${
          superscriptOverride ?? primaryTextColor
        } pointer-events-auto`}
      >
        {index + 1}
      </button>
      {isTextVisible && (
        <span className="font-neueMontrealLight">{footnotes[index]}</span>
      )}
    </span>
  );
}
