import Carousel from "nuka-carousel";
import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import FigureObj from "../layout/FigureObj";
import figures from "~/data/figures/shanawdithit.json";

const FIGURES = [figures["Willard1"], figures["Willard2"], figures["Willard9"]];

const ColonialMaps = () => {
  const { hoverState } = useContext(ChapterContext);
  const [currentHover, setCurrentHover] = useState<number>(0);

  useEffect(() => {
    switch (hoverState) {
      case "Willard1":
        setCurrentHover(0);
        break;
      case "Willard2":
        setCurrentHover(1);
        break;
      case "Willard9":
        setCurrentHover(2);
        break;
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
        {FIGURES.map((figure, index) => {
          return (
            <FigureObj
              key={figure.fileName}
              figure={figure}
              className="w-full"
              id={`colonial-map-${index}`}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default ColonialMaps;
