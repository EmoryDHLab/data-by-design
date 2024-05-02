import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import Toggle from "./Toggle";

// interface Props {}

const FootnoteToggle = () => {
  const { showFootnotes, setShowFootnotes } = useContext(ChapterContext);

  return (
    <div className="hidden md:flex sticky top-24 ml-8 mt-8 text-xs md:text-sm flex-col font-dubois">
      <Toggle
        onChange={setShowFootnotes}
        checked={showFootnotes}
        className="scale-75"
      >
        <span className="mt-2 block">View Footnotes</span>
      </Toggle>
    </div>
  );
};

export default FootnoteToggle;
