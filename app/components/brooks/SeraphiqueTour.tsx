import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import FigureModal from "../layout/FigureModal";
import type { TFigure } from "~/types/figureType";

type MaskType = {
  x: number;
  y: number;
  h: number;
  w: number;
};

type TourLocation = {
  transform: string;
  mask: MaskType;
};

type TourLocations = {
  [key: string]: TourLocation;
};

const tourLocations: TourLocations = {
  hold: {
    transform: "",
    mask: { x: 24, y: 8, h: 32, w: 12 },
  },
  crossSections: {
    transform: "",
    mask: { x: 0, y: 8, h: 32, w: 50 },
  },
  watercolor: {
    transform: "",
    mask: { x: 0, y: 40, h: 17, w: 50 },
  },
  tables: {
    transform: "",
    mask: { x: 0, y: 57, h: 15, w: 50 },
  },
  nonhumanCargo: {
    transform: "scale-[8] -translate-x-[216.8px] -translate-y-[228px]",
    mask: { x: 0, y: 0, h: 70, w: 50 },
  },
  nakedPeople: {
    transform: "scale-[11] -translate-x-[304px] -translate-y-[236px]",
    mask: { x: 0, y: 0, h: 70, w: 50 },
  },
  shackledMen: {
    transform: "scale-[11] -translate-x-[280px] -translate-y-[256px]",
    mask: { x: 0, y: 0, h: 70, w: 50 },
  },
  nursingMother: {
    transform: "scale-[28] -translate-x-[784px] -translate-y-[312px]",
    mask: { x: 0, y: 0, h: 70, w: 50 },
  },
};

interface Props {
  figure: TFigure;
}

export default function SeraphiqueTour({ figure }: Props) {
  const { hoverState, hideSensitiveState } = useContext(ChapterContext);

  return (
    <FigureModal figure={figure}>
      <p
        className={`absolute z-10 overflow-hidden font-neueMontreal text-xl p-6 m-6 transition-opacity duration-1000 opacity-${
          hideSensitiveState ? 100 : 0
        }`}
      >
        {figure.altText?.split(".")[0]}. {figure.altText?.split(".")[1]}.
      </p>

      <svg
        id={`fig-${figure.fileName}`}
        viewBox="0 0 50 70"
        role="img"
        aria-describedby={`fig-label-${figure.fileName}`}
        className={`drop-shadow-lg`}
      >
        <mask id="seraphique">
          <rect
            x={0}
            y={0}
            width={50}
            height={70}
            fill="white"
            fillOpacity={0.3}
          />
          <rect
            className={`duration-[2s] transition-all z-10`}
            x={tourLocations[hoverState ?? ""]?.mask.x ?? 0}
            y={tourLocations[hoverState ?? ""]?.mask.y ?? 0}
            width={tourLocations[hoverState ?? ""]?.mask.w ?? 50}
            height={tourLocations[hoverState ?? ""]?.mask.h ?? 70}
            fill="white"
          />
        </mask>
        <g>
          <image
            mask="url(#seraphique)"
            role="presentation"
            href={`/images/${figure.chapter}/${figure.fileName}.jpg`}
            width="100%"
            className={`duration-[2s] transition-all ease-in-out ${
              tourLocations[hoverState ?? ""]?.transform ?? ""
            } ${hideSensitiveState ? "blur-[2px]" : ""}`}
          />
        </g>
      </svg>
      <figcaption className="font-dubois md:text-center text-left mt-3 md:mt-6 mb-6 md:mb-12 col-span-full">
        <span id={`fig-label-${figure.fileName}`} className="sr-only">
          {figure.caption}
        </span>
        <span
          dangerouslySetInnerHTML={{
            __html: figure.caption ?? "",
          }}
        />
        {figure.creditLine && (
          <span
            className="pl-1"
            dangerouslySetInnerHTML={{
              __html: figure.creditLine,
            }}
          />
        )}
      </figcaption>
    </FigureModal>
  );
}
