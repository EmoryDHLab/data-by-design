import { ReactNodeLike } from "prop-types";
import { useState } from "react";

interface Props {
  backgroundColor: string;
  textColor: string;
  number: string;
  children: ReactNodeLike;
}

export default function Footnote({
  backgroundColor,
  textColor,
  number,
  children,
}: Props) {
  const [isTextVisible, setIsTextVisible] = useState(false);
  return (
    <span>
      <button
        onClick={() => setIsTextVisible(!isTextVisible)}
        className={`footnote ${backgroundColor} ${textColor}`}
      >
        {number}
      </button>
      {isTextVisible && <div className="text-cyan-500">{children}</div>}
    </span>
  );
}
