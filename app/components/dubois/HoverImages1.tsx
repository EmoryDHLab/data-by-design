import { classNames } from "~/utils";
import { useContext } from "react";
import { ChapterContext } from "~/theme";
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

  if (hoverState === "Letter") {
    imageSource = "/images/dubois/ch5-06b-map.png";
  }
  if (hoverState === "Map") {
    imageSource = "/images/dubois/ch5-04d-value.png";
  }
  if (hoverState === "Populations") {
    imageSource = "/images/dubois/ch5-07a-populations.png";
  }
  if (hoverState === "Gender") {
    imageSource = "/images/dubois/ch5-07b-gender.png";
  }
  if (hoverState === "Race") {
    imageSource = "/images/dubois/ch5-07c-race.png";
  }
  if (hoverState === "Race-Distribution") {
    imageSource = "/images/dubois/ch5-07d-race-distrib.png";
  }
  if (hoverState === "Foreign") {
    imageSource = "/images/dubois/ch5-07e-foreign.png";
  }
  if (hoverState === "Age-Sex") {
    imageSource = "/images/dubois/ch5-07f-age-sex.png";
  }

  if (hoverState === "Religion") {
    imageSource = "/images/dubois/ch5-07g-religion.png";
  }
  if (hoverState === "Occupation") {
    imageSource = "/images/dubois/ch5-07h-occupation.png";
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
