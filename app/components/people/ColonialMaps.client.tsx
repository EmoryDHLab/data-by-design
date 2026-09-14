import Carousel from "nuka-carousel";
import { useContext, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import Figure from "../figures/Figure";
import figures from "~/data/figures/people.json";

const FIGURES = [figures["0316-willard2"], figures["0317-willard3"]];

const ColonialMaps = () => {
  const { hoverState } = useContext(ChapterContext);
  const [currentHover, setCurrentHover] = useState<number>(0);

  // Adjusted during render (React's documented pattern) rather than in an
  // effect: only two hoverState values map to a slide, so for every other
  // value currentHover deliberately holds its previous slide.
  let nextHover = currentHover;
  if (hoverState === "0316-willard2") nextHover = 0;
  if (hoverState === "0317-willard3") nextHover = 1;
  if (nextHover !== currentHover) {
    setCurrentHover(nextHover);
  }

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
            <Figure
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
