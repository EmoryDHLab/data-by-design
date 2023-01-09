import { useContext } from "react";
import { ChapterContext } from "~/theme";

export default function ImageCaption({ children }) {
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);
  return (
    <div className="flex-auto p-2">
      <figcaption className="text-[15px] tracking-wider mt-5 leading-6 font-dubois ">
        {children}
      </figcaption>
    </div>
  );
}
