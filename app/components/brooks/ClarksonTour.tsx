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
  image: ChapterFigure;
};

function ClarksonTour({ image }: Props) {
  const { hoverState, hideSensitiveState, accentColor, backgroundColor } = useContext(ChapterContext);

  return (
    <FigureModal figure={image} hide={hideSensitiveState}>
      <p id={image.fileName} className='sr-only'>{image.caption}</p>
      <svg
        viewBox="0 0 50 63"
        role="img"
        aria-labelledby={image.fileName}
        className={`drop-shadow-lg bg-${accentColor}`}
      >
        <mask id="clarkston">
          <rect x={0} y={0} width={50} height={63} fill="white" fillOpacity={0.2} />
          <rect
            className={`duration-1000 transition-all z-10`}
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
            href={`/images/${image.chapter}/${image.fileName}`}
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
    </FigureModal>
  );
}

export default ClarksonTour;