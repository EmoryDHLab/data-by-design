import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import Carousel from "nuka-carousel";
import FigureObj from "../layout/FigureObj";
import figures from "~/data/figures/dubois.json";

const FIGURES = [
  figures["ch5-05a-countries"],
  figures["ch5-05a-countries"],
  figures["ch5-05b-occupations"],
  figures["ch5-05c-freedom"],
  figures["ch5-05d-newspapers"],
  figures["ch5-06b-map"],
  figures["ch5-04d-value"],
  figures["ch5-07a-populations"],
  figures["ch5-07b-gender"],
  figures["ch5-07c-race"],
  figures["ch5-07d-race-distrib"],
  figures["ch5-07e-foreign"],
  figures["ch5-07f-age-sex"],
  figures["ch5-07g-religion"],
  figures["ch5-07h-occupation"],
];

export default function HoverImages2() {
  const { hoverState } = useContext(ChapterContext);
  const [currentHover, setCurrentHover] = useState<number>(0);

  useEffect(() => {
    switch (hoverState) {
      case "Countries":
        setCurrentHover(1);
        break;
      case "Occupations":
        setCurrentHover(2);
        break;
      case "Freedom":
        setCurrentHover(3);
        break;
      case "Newspapers":
        setCurrentHover(4);
        break;
      case "Letter":
        setCurrentHover(5);
        break;
      case "Map":
        setCurrentHover(6);
        break;
      case "Populations":
        setCurrentHover(7);
        break;
      case "Gender":
        setCurrentHover(8);
        break;
      case "Race":
        setCurrentHover(9);
        break;
      case "Race-Distribution":
        setCurrentHover(10);
        break;
      case "Foreign":
        setCurrentHover(11);
        break;
      case "Age-Sex":
        setCurrentHover(12);
        break;
      case "Religion":
        setCurrentHover(13);
        break;
      case "Occupation":
        setCurrentHover(14);
        break;
    }
  }, [hoverState]);

  return (
    <div className="ml-24 hidden md:block max-w-3xl" id="hover2">
      <Carousel
        withoutControls
        slideIndex={currentHover}
        swiping={false}
        animation="fade"
      >
        {FIGURES.map((figure, index) => {
          return (
            <FigureObj key={figure.fileName} figure={figure} className="w-full" id={`hover-2-${index}`} />
          )
        })}
      </Carousel>
    </div>
  );
}
