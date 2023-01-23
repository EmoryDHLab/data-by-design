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
  const { backgroundColor, primaryTextColor, footnoteTextColor, footnotes, setDocHeightState, } =
    useContext(ChapterContext);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    setDocHeightState(docHeightState => docHeightState + 1);
  }, [isTextVisible, setDocHeightState]);

  return (
    <span>
      <button
        onClick={() => setIsTextVisible(!isTextVisible)}
        className={`footnote mr-2 bg-${bgOverride ?? backgroundColor} text-${textOverride ?? primaryTextColor}`}
      >
        {index + 1}
      </button>
      {isTextVisible && (
        <span className={`block text-${textOverride ?? footnoteTextColor}`}>{footnotes[index]}</span>
      )}
    </span>
  );
}
