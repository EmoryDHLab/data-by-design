import { ReactNodeLike } from "prop-types";
import { useContext, useState } from "react";
import { ChapterContext } from "~/theme";

interface Props {
  number: string;
  children: ReactNodeLike;
}

export default function Footnote({ number, children }: Props) {
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);
  const [isTextVisible, setIsTextVisible] = useState(false);
  return (
    <span>
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
