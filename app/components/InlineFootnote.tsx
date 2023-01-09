import { ReactNodeLike } from "prop-types";
import { useContext, useState } from "react";
import { ChapterContext } from "~/theme";

interface Props {
  index: number;
  children?: ReactNodeLike;
}

export default function InlineFootnote({ index }: Props) {
  const { backgroundColor, primaryTextColor, footnoteTextColor, footnotes } =
    useContext(ChapterContext);
  const [isTextVisible, setIsTextVisible] = useState(false);
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
