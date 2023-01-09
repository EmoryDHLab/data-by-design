import { classNames } from "~/utils";
import { useContext } from "react";
import { ChapterContext } from "~/theme";
import ImageCaption from "~/components/ImageCaption";

const tourLocations = {
  Rochester: {
    mapStyles: "scale-[2.56] -translate-x-[22rem] translate-y-[17.9rem]",
  },
  Louisville: {
    mapStyles: "scale-[3] translate-x-[4rem] -translate-y-[3rem]",
  },
  Richmond: {
    mapStyles: "scale-[3.3] -translate-x-[14rem] -translate-y-[2rem]",
  },
};

export default function PromotionalTourMap() {
  const { hoverState } = useContext(ChapterContext);
  let transformStyles = "";

  if (
    hoverState === "Rochester" ||
    hoverState === "Louisville" ||
    hoverState === "Richmond"
  ) {
    transformStyles = tourLocations[hoverState].mapStyles;
  }
  return (
    <div className="flex flex-col items-center">
      <div className="border-peabodyPrimaryHalfOpacity border-[50px] p-1 max-w-xl overflow-hidden">
        <img
          src="/images/peabody/railroadscaled.webp"
          alt=""
          className={classNames("transition-transform", transformStyles)}
        />
      </div>
      <ImageCaption>
        The range of Peabody's promotional tour, as plotted on an 1850 rail map
        of the United States. Image courtesy of the Library of Congress,
        Geography and Map Division.
      </ImageCaption>
    </div>
  );
}
