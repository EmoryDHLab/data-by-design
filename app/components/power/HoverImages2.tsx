import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import Carousel from "nuka-carousel";
import Figure from "../figures/Figure";
import figures from "~/data/figures/power.json";
import ClientOnly from "~/components/ClientOnly";

const FIGURES = [
  figures["0505a-countries"],
  figures["0505a-countries"],
  figures["0505b-occupations"],
  figures["0505c-freedom"],
  figures["0505d-newspapers"],
  figures["0506b-map"],
  figures["0504d-value"],
  figures["0507a-populations"],
  figures["0507b-gender"],
  figures["0507c-race"],
  figures["0507d-race-distrib"],
  figures["0507e-foreign"],
  figures["0507f-age-sex"],
  figures["0507g-religion"],
  figures["0507h-occupation"],
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
      <ClientOnly>
        <Carousel
          withoutControls
          slideIndex={currentHover}
          swiping={false}
          animation="fade"
        >
          {FIGURES.map((figure, index) => {
            return (
              <Figure
                key={`${figure.fileName}-hover2`}
                figure={figure}
                className="w-full"
                id={`hover-2-${index}`}
              />
            );
          })}
        </Carousel>
      </ClientOnly>
    </div>
  );
}
