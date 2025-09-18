import { useContext, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import EyeClosed from "../icons/EyeClosed";
import EyeOpen from "../icons/EyeOpen";

interface Props {
  id?: string;
  className?: string;
}

const ConsentToggle = ({ id, className }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const {
    hideSensitiveState,
    setHideSensitiveState,
    accentColor,
    backgroundColor,
  } = useContext(ChapterContext);

  const getBackgroundColor = () => {
    if (isHovered) {
      return backgroundColor === 'dataPrimary' ? '#8B5CF6' : backgroundColor === 'white' ? '#FFFFFF' : '#000000';
    }
    return accentColor === 'dataSecondary' ? '#F3F4F6' : accentColor === 'black' ? '#000000' : '#8B5CF6';
  };

  const renderButton = () => {
    if (hideSensitiveState) {
      return (
        <EyeClosed
          className={`text-offblack md:text-off${
            isHovered ? "white" : "black"
          } ${className ?? ""}`}
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
        className={`inline-flex items-center justify-center border-2 border-offblack rounded-full drop-shadow-lg active:drop-shadow-none transition-all duration-200 ${
          className ?? "h-8 w-8"
        }`}
        style={{
          backgroundColor: getBackgroundColor(),
          transform: 'translateZ(0)', // Force hardware acceleration to prevent layout shifts
        }}
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

export default ConsentToggle;
