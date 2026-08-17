import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import Toggle from "./Toggle";

// interface Props {}

const FootnoteToggle = () => {
  const { showFootnotes, setShowFootnotes, footnotes } =
    useContext(ChapterContext);
  if (setShowFootnotes && footnotes && footnotes.length > 0) {
    return (
      <div className="hidden w-fit md:flex sticky top-24 ml-4 lg:ml-8 mt-8 text-xs md:text-sm flex-col font-power">
        <Toggle
          onChange={setShowFootnotes}
          checked={showFootnotes ?? false}
          className="scale-75"
          label={`${showFootnotes ? "Hide" : "Show"} References`}
          screenReaderMsg={`Button to ${showFootnotes ? "hide" : "show"}.`}
        />
      </div>
    );
  }

  return <></>;
};

export default FootnoteToggle;
