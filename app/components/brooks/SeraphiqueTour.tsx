import { EyeSlashIcon } from '@heroicons/react/24/outline'
import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";

const tourLocations = {
  hold: {
    transform: "scale-[2.5] -translate-x-[3rem] -translate-y-[1.25rem]",
    mask: { x: 24, y: 0, h: 70, w: 12}
  },
  crossSections: {
    transform: "scale-[1.2] -translate-x-[.3rem] -translate-y-[.45rem]",
    mask: { x: 0, y: 8, h: 32, w: 50}
  },
  watercolor: {
    transform: "scale-[1.2] -translate-x-[.3rem] -translate-y-[3rem]",
    mask: { x: 0, y: 40, h: 17, w: 50}
  },
  tables: {
    transform: "scale-[1.2] -translate-x-[.3rem] -translate-y-[3rem]",
    mask: { x: 0, y: 57, h: 15, w: 50}
  },
  nonhumanCargo: {
    transform: "scale-[8] -translate-x-[13.55rem] -translate-y-[14.25rem]",
    mask: { x: 0, y: 0, h: 70, w: 50}
  },
  naked: {
    transform: "scale-[11] -translate-x-[19rem] -translate-y-[14.75rem]",
    mask: { x: 0, y: 0, h: 70, w: 50}
  },
  shackledMen: {
    transform: "scale-[11] -translate-x-[17.5rem] -translate-y-[16rem]",
    mask: { x: 0, y: 0, h: 70, w: 50}
  },
  nursingMother: {
    transform: "scale-[28] -translate-x-[49rem] -translate-y-[19.5rem]",
    mask: { x: 0, y: 0, h: 70, w: 50}
  }
};

export default function SeraphiqueTour({ image }) {
  const { hoverState, hideSensitiveState } = useContext(ChapterContext);

  return (
    <figure className='ml-12'>
      <p id="2-2-1468px-Plan-description" className='sr-only'>{image.caption}</p>
      <svg
        viewBox="0 0 50 70"
        role="img"
        aria-labelledby='2-2-1468px-Plan-description'
      >
        <mask id="seraphique">
          <rect x={0} y={0} width={50} height={70} fill="white" fillOpacity={0.3} />
          <rect
            className={`duration-1000 transition-[x] transition-[y] transition-[height] transition-[width] z-10`}
            x={tourLocations[hoverState]?.mask.x ?? 0}
            y={tourLocations[hoverState]?.mask.y ?? 0}
            width={tourLocations[hoverState]?.mask.w ?? 50}
            height={tourLocations[hoverState]?.mask.h ?? 70}
            fill="white"
          />
        </mask>
        <g>
          <image
            mask="url(#seraphique"
            role="presentation"
            href={`/images/${image.chapter}/${image.fileName}`}
            width="100%"
            className={`duration-1000 transition-transform ${tourLocations[hoverState]?.transform ?? ""}`}
          />
        </g>
        <g>
          <rect
            className={`transition-[x] transition-[y] transition-[height] transition-[width] transition-transform ${tourLocations[hoverState]?.transform ?? ""}`}
            x={tourLocations[hoverState]?.mask.x ?? 0}
            y={tourLocations[hoverState]?.mask.y ?? 0}
            width={tourLocations[hoverState]?.mask.w ?? 50}
            height={tourLocations[hoverState]?.mask.h ?? 70}
            fill="none"
            stroke="#db882a"
            strokeWidth={0}
          />
          {hideSensitiveState && (
            <g>
              <rect
                x={0}
                y={0}
                height={70}
                width={50}
                fill="#D9D9D9"
                stroke="#8C20E1"
                strokeWidth={1}
              />
              <EyeSlashIcon
                className="w-1 h-1"
                height={20}
                stroke="#8C20E1"
                strokeOpacity={0.7}
                y="33%"
                textAnchor="middle"
                dominantBaseline="middle"
              />
            </g>
          )}
        </g>
      </svg>
      <figcaption className="font-dubois md:text-center text-left mt-3 md:mt-6 mb-6 md:mb-12 col-span-full">
        {image.caption}
      </figcaption>
    </figure>
  )
}