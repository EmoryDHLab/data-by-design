import Carousel from "nuka-carousel";
import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import Figure from "../figures/Figure";
import figures from "~/data/figures/peabody.json";

const FIGURES = [
  figures["railroadscaled"],
  figures["rochester"],
  figures["louisville"],
  figures["richmond"],
];

export default function PromotionalTourMap() {
  const { hoverState } = useContext(ChapterContext);
  const [currentHover, setCurrentHover] = useState<number>(0);

  useEffect(() => {
    switch (hoverState) {
      case "Rochester":
        setCurrentHover(1);
        break;
      case "Louisville":
        setCurrentHover(2);
        break;
      case "Richmond":
        setCurrentHover(3);
        break;
      default:
        setCurrentHover(0);
    }
  }, [hoverState, setCurrentHover]);

  return (
    <div id="promo-tour" className="ml-24 hidden md:block">
      <Carousel
        withoutControls
        slideIndex={currentHover}
        swiping={false}
        animation="fade"
      >
        {FIGURES.map((figure) => {
          return (
            <Figure
              key={figure.fileName}
              figure={figure}
              className="w-full"
              id=""
            />
          );
        })}
      </Carousel>
    </div>
  );
}
