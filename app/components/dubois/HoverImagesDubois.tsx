import { classNames } from "~/utils";
import { useContext } from "react";
import { ChapterContext } from "~/theme";
import ImageModal from "~/components/layout/ImageModal";

export default function PromotionalTourMap() {
  const { hoverState } = useContext(ChapterContext);
  let imageSource = "/images/dubois/ch5-03-georgia.jpg";

  if (hoverState === "Rochester") {
    imageSource = "/images/dubois/ch5-04b-illiteracy.jpg";
  }

  if (hoverState === "Louisville") {
    imageSource = "/images/dubois/ch5-04b-illiteracy.jpg";
  }

  if (hoverState === "Richmond") {
    imageSource = "/images/dubois/ch5-04c-owners.jpg";
  }

  return (
    <div className="flex flex-col items-center">
      <div className="border-duboisPrimaryHalfOpacity border-[50px] p-1 max-w-xl overflow-hidden">
        <ImageModal src={imageSource} alt="" />
      </div>
    </div>
  );
}
