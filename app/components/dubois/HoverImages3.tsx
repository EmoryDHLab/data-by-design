import { classNames } from "~/utils";
import { useContext } from "react";
import { ChapterContext } from "~/theme";
import ImageModal from "~/components/layout/ImageModal";

export default function HoverImages3() {
  const { hoverState } = useContext(ChapterContext);
  let imageSource = "/images/dubois/ch5-06a-letter.jpg";

  if (hoverState === "Letter") {
    imageSource = "/images/dubois/ch5-06b-map.jpg";
  }
  if (hoverState === "Map") {
    imageSource = "/images/dubois/ch5-04d-value.jpg";
  }
  if (hoverState === "Populations") {
    imageSource = "/images/dubois/ch5-07a-populations.jpg";
  }
  if (hoverState === "Gender") {
    imageSource = "/images/dubois/ch5-07b-gender.jpg";
  }
  if (hoverState === "Race") {
    imageSource = "/images/dubois/ch5-07c-race.jpg";
  }
  if (hoverState === "Race-Distribution") {
    imageSource = "/images/dubois/ch5-07d-race-distrib.jpg";
  }
  if (hoverState === "Foreign") {
    imageSource = "/images/dubois/ch5-07e-foreign.jpg";
  }
  if (hoverState === "Age-Sex") {
    imageSource = "/images/dubois/ch5-07f-age-sex.jpg";
  }

  if (hoverState === "Religion") {
    imageSource = "/images/dubois/ch5-07g-religion.jpg";
  }
  if (hoverState === "Occupation") {
    imageSource = "/images/dubois/ch5-07h-occupation.jpg";
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
