import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
// scale(2.5) translateX(-19px) translateY(-8px)
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
    transform: "scale-[10] translate-x-[18rem] -translate-y-[19.5rem] rotate-90",
    mask: { x: 32.5, y: 0, h: 70, w: 2.5}
  },
  nursingMother: {
    transform: "scale-[14] -translate-x-[23.75rem] -translate-y-[9rem]",
    mask: { x: 28.3, y: 11.35, h: 2, w: 1}
  }
};

export default function SeraphiqueTour() {
  const { hoverState } = useContext(ChapterContext);

  return (
    <figure>
      <svg
        viewBox="0 0 50 70"
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
          <title></title>
          <image
            mask="url(#seraphique"
            role="presentation"
            href="/images/brooks/2-1468px-Plan.jpeg"
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
        </g>
      </svg>
    </figure>
  )
}