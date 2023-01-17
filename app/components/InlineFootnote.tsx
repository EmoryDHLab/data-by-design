import type { ReactNodeLike } from "prop-types";
import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "~/theme";

interface Props {
  number: number;
  children: ReactNodeLike;
  bgOverride: string;
  textOverride: string;
}

export default function InlineFootnote({ index, bgOverride, textOverride }: Props) {
  const { backgroundColor, primaryTextColor, footnoteTextColor, footnotes, setFootnoteState, } =
    useContext(ChapterContext);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    setFootnoteState(footnoteState => footnoteState + 1);
  }, [isTextVisible, setFootnoteState]);

  return (
    <span>
      <button
        onClick={() => setIsTextVisible(!isTextVisible)}
        className={`footnote bg-${bgOverride ?? backgroundColor} text-${textOverride ?? primaryTextColor}`}
      >
        {index + 1}
      </button>
      {isTextVisible && (
        <div className={`text-${textOverride ?? footnoteTextColor}`}>{footnotes[index]}</div>
      )}
    </span>
  );
}
