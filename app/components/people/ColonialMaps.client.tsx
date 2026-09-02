import Carousel from "nuka-carousel";
import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import Figure from "../figures/Figure";
import figures from "~/data/figures/people.json";

const FIGURES = [
  figures["0315-willard1"],
  figures["0316-willard2"],
  figures["0317-willard3"],
];

const ColonialMaps = () => {
  const { hoverState } = useContext(ChapterContext);
  const [currentHover, setCurrentHover] = useState<number>(0);

  useEffect(() => {
    switch (hoverState) {
      case "0315-willard1":
        setCurrentHover(0);
        break;
      case "0316-willard2":
        setCurrentHover(1);
        break;
      case "0317-willard3":
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
