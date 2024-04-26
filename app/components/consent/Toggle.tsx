import { useContext, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import EyeClosed from "../icons/EyeClosed";
import EyeOpen from "../icons/EyeOpen";

interface Props {
  id?: string;
  className?: string;
}

const Toggle = ({ id, className }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const {
    hideSensitiveState,
    setHideSensitiveState,
    accentColor,
    backgroundColor,
  } = useContext(ChapterContext);

  const renderButton = () => {
    if (hideSensitiveState) {
      return (
        <EyeClosed
          className={`text-off${isHovered ? "white" : "black"} ${
            className ?? ""
          }`}
        />
      );
    }
    return (
      <EyeOpen
        className={`text-off${isHovered ? "white" : "black"} ${
          className ?? ""
        }`}
      />
    );
  };

  if (setHideSensitiveState) {
    return (
      <button
        className={`inline-flex items-center justify-center border  border-offblack rounded-full drop-shadow-md bg-${accentColor} hover:bg-${backgroundColor} ${
          className ?? "h-8 w-8"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setHideSensitiveState(!hideSensitiveState)}
        data-tooltip-id={id ?? "consent-toggle"}
        data-tooltip-content={`${
          hideSensitiveState ? "Show" : "Block"
        } sensitive images.`}
      >
        {renderButton()}
      </button>
    );
  }

  return null;
};

export default Toggle;
