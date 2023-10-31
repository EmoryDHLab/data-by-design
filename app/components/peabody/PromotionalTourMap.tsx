import Carousel from "nuka-carousel";
import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import FigureObj from "../layout/FigureObj";
import figures from "~/data/figures/peabody.json";

const FIGURES = [
  figures["railroadscaled"],
  figures["rochester"],
  figures["louisville"],
  figures["richmond"],
];

export default function HoverImagesDubois() {
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
    <div className="ml-24 hidden md:block">
      <Carousel
        withoutControls
        slideIndex={currentHover}
        swiping={false}
        animation="fade"
      >
        {FIGURES.map((figure) => {
          return (
            <FigureObj key={figure.fileName} figure={figure} className="w-full" />
          )
        })}
      </Carousel>
    </div>
  );
}
