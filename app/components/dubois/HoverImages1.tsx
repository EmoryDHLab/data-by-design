import { classNames } from "~/utils";
import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import ImageModal from "~/components/layout/ImageModal";

export default function HoverImages1() {
  const { hoverState } = useContext(ChapterContext);
  let imageSource = "/images/dubois/ch5-03-georgia.png";

  if (hoverState === "City") {
    imageSource = "/images/dubois/ch5-04a-city.png";
  }

  if (hoverState === "Illiteracy") {
    imageSource = "/images/dubois/ch5-04b-illiteracy.png";
  }

  if (hoverState === "Owners") {
    imageSource = "/images/dubois/ch5-04c-owners.png";
  }

  if (hoverState === "Value") {
    imageSource = "/images/dubois/ch5-06a-letter.png";
  }

  // —————————————————

  return (
    <div className="flex flex-col items-center">
      <div className="border-duboisPrimaryHalfOpacity border-[50px] max-w-xl overflow-hidden">
        <ImageModal src={imageSource} alt="" />
      </div>
    </div>
  );
}
