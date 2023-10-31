import { EyeSlashIcon } from '@heroicons/react/24/outline'
import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import type { ChapterFigure } from '~/types/figureType';
import FigureModal from '../layout/FigureModal';

const tourLocations = {
  clarksonCrossSections: {
    transform: "",
    mask: { x: 0, y: 17, h: 20, w: 50}
  },
  sideView: {
    transform: "",
    mask: { x: 0, y: 6, h: 11, w: 50}
  },
  clarksonTables: {
    transform: "",
    mask: { x: 0, y: 37, h: 23, w: 50}
  },
}

interface Props {
  figure: ChapterFigure;
};

function ClarksonTour({ figure }: Props) {
  const { hoverState, hideSensitiveState, accentColor, backgroundColor } = useContext(ChapterContext);

  return (
    <FigureModal figure={figure} hide={hideSensitiveState}>
      <p id={figure.fileName} className='sr-only'>{figure.caption}</p>
      <svg
        viewBox="0 0 50 63"
        role="img"
        aria-labelledby={figure.fileName}
        className={`drop-shadow-lg bg-${accentColor}`}
      >
        <mask id="clarkston">
          <rect x={0} y={0} width={50} height={63} fill="white" fillOpacity={0.2} />
          <rect
            className="duration-1000 transition-all z-10"
            x={tourLocations[hoverState]?.mask.x ?? 0}
            y={tourLocations[hoverState]?.mask.y ?? 0}
            width={tourLocations[hoverState]?.mask.w ?? 50}
            height={tourLocations[hoverState]?.mask.h ?? 63}
            fill="white"
          />
        </mask>
        <g>
          <image
            mask="url(#clarkston)"
            role="presentation"
            href={`/images/${figure.chapter}/${figure.fileName}.jpg`}
            width="100%"
            className={`duration-1000 transition-transform ${tourLocations[hoverState]?.transform ?? ""}`}
          />
        </g>
        <g>
          {hideSensitiveState && (
            <g>
              <rect
                x={0}
                y={0}
                height={63}
                width={50}
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
            __html: figure.caption,
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

export default ClarksonTour;