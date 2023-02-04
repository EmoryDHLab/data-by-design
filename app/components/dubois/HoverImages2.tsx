import { classNames } from "~/utils";
import { useContext } from "react";
import { ChapterContext } from "~/theme";
import ImageModal from "~/components/layout/ImageModal";

export default function HoverImages2() {
  const { hoverState } = useContext(ChapterContext);
  let imageSource = "/images/dubois/ch5-05a-countries.jpg";

  if (hoverState === "Countries") {
    imageSource = "/images/dubois/ch5-05a-countries.jpg";
  }

  if (hoverState === "Occupations") {
    imageSource = "/images/dubois/ch5-05b-occupations.jpg";
  }

  if (hoverState === "Freedom") {
    imageSource = "/images/dubois/ch5-05c-freedom.jpg";
  }

  if (hoverState === "Newspapers") {
    imageSource = "/images/dubois/ch5-05d-newspapers.jpg";
  }

  return (
    <div className="flex flex-col items-center">
      <div className="border-duboisPrimaryHalfOpacity border-[50px] max-w-xl overflow-hidden">
        <ImageModal src={imageSource} alt="" />
      </div>
    </div>
  );
}
