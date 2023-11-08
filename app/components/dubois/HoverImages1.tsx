import Carousel from "nuka-carousel";
import FigureObj from "../layout/FigureObj";
import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import figures from "~/data/figures/dubois.json";

const FIGURES = [
  figures["ch5-03-georgia"],
  figures["ch5-04a-city"],
  figures["ch5-04b-illiteracy"],
  figures["ch5-04c-owners"],
  figures["ch5-06a-letter"],
]

export default function HoverImages1() {
  const { hoverState } = useContext(ChapterContext);
  const [currentHover, setCurrentHover] = useState<number>(0);

  useEffect(() => {
    switch (hoverState) {
      case "City":
        setCurrentHover(1);
        break;
      case "Illiteracy":
        setCurrentHover(2);
        break;
      case "Owners":
        setCurrentHover(3);
        break;
        case "Value":
          setCurrentHover(4);
          break;
    }
  }, [hoverState, setCurrentHover]);

  return (
    <div className="ml-24 hidden md:block" id="hover1">
      <Carousel
        withoutControls
        slideIndex={currentHover}
        swiping={false}
        animation="fade"
      >
        {FIGURES.map((figure, index) => {
          return (
            <FigureObj key={figure.fileName} figure={figure} className="w-full" id={`hover-1-${index}`} />
          )
        })}
      </Carousel>
    </div>
  );
}
