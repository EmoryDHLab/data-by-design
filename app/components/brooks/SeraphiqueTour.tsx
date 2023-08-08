import { EyeSlashIcon } from '@heroicons/react/24/outline'
import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import type { Figure } from '~/types/figureType';
import FigureModal from '../layout/FigureModal';

type MaskType = {
  x: number;
  y: number;
  h: number;
  w: number;
}

type TourLocation = {
  transform: string;
  mask: MaskType;
}

type TourLocations = {
  [key: string]: TourLocation;
}


const tourLocations: TourLocations = {
  hold: {
    transform: "",
    mask: { x: 24, y: 8, h: 32, w: 12}
  },
  crossSections: {
    transform: "",
    mask: { x: 0, y: 8, h: 32, w: 50}
  },
  watercolor: {
    transform: "",
    mask: { x: 0, y: 40, h: 17, w: 50}
  },
  tables: {
    transform: "",
    mask: { x: 0, y: 57, h: 15, w: 50}
  },
  nonhumanCargo: {
    transform: "scale-[8] -translate-x-[216.8px] -translate-y-[228px]",
    mask: { x: 0, y: 0, h: 69, w: 50}
  },
  nakedPeople: {
    transform: "scale-[11] -translate-x-[304px] -translate-y-[236px]",
    mask: { x: 0, y: 0, h: 69, w: 50}
  },
  shackledMen: {
    transform: "scale-[11] -translate-x-[280px] -translate-y-[256px]",
    mask: { x: 0, y: 0, h: 69, w: 50}
  },
  nursingMother: {
    transform: "scale-[28] -translate-x-[784px] -translate-y-[312px]",
    mask: { x: 0, y: 0, h: 69, w: 50}
  }
};

interface Props {
  figure: Figure;
}

export default function SeraphiqueTour({ figure }: Props) {
  const { hoverState, hideSensitiveState, accentColor, backgroundColor } = useContext(ChapterContext);

  return (
    <FigureModal figure={figure} hide={hideSensitiveState}>
      <p id={figure.fileName} className='sr-only'>{figure.caption}</p>
      <svg
        viewBox="0 0 50 69"
        role="img"
        aria-labelledby={figure.fileName}
        className={`drop-shadow-lg bg-${accentColor}`}
      >
        <mask id="seraphique">
          <rect x={0} y={0} width={50} height={69} fill="white" fillOpacity={0.3} />
          <rect
            className={`duration-1000 transition-all z-10`}
            x={tourLocations[hoverState ?? ""]?.mask.x ?? 0}
            y={tourLocations[hoverState ?? ""]?.mask.y ?? 0}
            width={tourLocations[hoverState ?? ""]?.mask.w ?? 50}
            height={tourLocations[hoverState ?? ""]?.mask.h ?? 69}
            fill="white"
          />
        </mask>
        <g>
          <image
            mask="url(#seraphique)"
            role="presentation"
            href={`/images/${figure.chapter}/${figure.fileName}.jpg`}
            width="100%"
            className={`duration-1000 transition-transform ${tourLocations[hoverState ?? ""]?.transform ?? ""}`}
          />
        </g>
        <g>
          {hideSensitiveState && (
            <g>
              <rect
                x={0}
                y={0}
                height={69}
                width={50}
                fill="#D9D9D9"
                strokeWidth={1}
                className={`stroke-${backgroundColor} fill-${accentColor}`}
              />
              <EyeSlashIcon
                height={20}
                strokeOpacity={0.7}
                y="33%"
                textAnchor="middle"
                dominantBaseline="middle"
                className={`w-1 h-1 stroke-${backgroundColor}`}
              />
            </g>
          )}
        </g>
      </svg>
      <figcaption className="font-dubois md:text-center text-left mt-3 md:mt-6 mb-6 md:mb-12 col-span-full">
        <span
          dangerouslySetInnerHTML={{
            __html: figure.caption ?? "",
          }}
        />
        {figure.creditLine &&
          <span className="pl-1"
            dangerouslySetInnerHTML={{
              __html: figure.creditLine,
            }}
          />
        }
      </figcaption>
    </FigureModal>
  );
}
