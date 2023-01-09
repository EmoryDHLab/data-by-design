import type { ReactNodeLike } from "prop-types";
import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "~/theme";

interface Props {
  number: string;
  children: ReactNodeLike;
}

export default function Footnote({ number, children }: Props) {
  const { backgroundColor, primaryTextColor, footnoteState, setFootnoteState, } = useContext(ChapterContext);
  const [isTextVisible, setIsTextVisible] = useState(false);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setFootnoteState(footnoteState + 1);
  }, [isTextVisible]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <span className="pr-1">
      <button
        onClick={() => setIsTextVisible(!isTextVisible)}
        className={`footnote bg-${backgroundColor} text-${primaryTextColor}`}
      >
        {number}
      </button>
      {isTextVisible && <div className={`text-blue-600`}>{children}</div>}
    </span>
  );
}
