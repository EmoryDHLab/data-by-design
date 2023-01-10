import type { ReactNodeLike } from "prop-types";
import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "~/theme";

interface Props {
  number: number;
  children: ReactNodeLike;
}

export default function InlineFootnote({ index }: Props) {
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
        className={`footnote bg-${backgroundColor} text-${primaryTextColor}`}
      >
        {index + 1}
      </button>
      {isTextVisible && (
        <div className={`text-${footnoteTextColor}`}>{footnotes[index]}</div>
      )}
    </span>
  );
}
