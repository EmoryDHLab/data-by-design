import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import type { TFigure } from "~/types/figureType";
import { Caption } from "../layout/FigureObj";
import FigureModal from "../layout/FigureModal";

interface Props {
  figure: TFigure;
}

export default function HoverZoomPeabodySquare({ figure }: Props) {
  const { hoverState } = useContext(ChapterContext);
  return (
    <FigureModal figure={figure} className="hidden md:block">
      <p id={figure.fileName} className='sr-only'>{figure.caption}</p>
      <svg
        viewBox="0 0 244.56 242.88"
        role="img"
        aria-labelledby={figure.fileName ?? ""}
      >
        <image
          role="presentation"
          href={`/images/${figure.chapter}/${figure.fileName}.jpg`}
          width="100%"
          id={`fig-${figure.fileName}`}
        />
        {hoverState === "Jamestown" && (
          <g>
            <rect
              x={142}
              y={9}
              width={31}
              height={31}
              fill="none"
              stroke="black"
              strokeWidth={3}
            />
            <rect
              x={145}
              y={13}
              width={25}
              height={25}
              fill="none"
              stroke="gold"
              strokeWidth={3}
            />
          </g>
        )}
        {hoverState === "Plymouth" && (
          <g>
            <rect
              x={205}
              y={30}
              width={31}
              height={31}
              fill="none"
              stroke="black"
              strokeWidth={3}
            />
            <rect
              x={208}
              y={33}
              width={25}
              height={25}
              fill="none"
              stroke="gold"
              strokeWidth={3}
            />
          </g>
        )}
        {hoverState === "FirstEnslavedAfricans" && (
          <g>
            <rect
              x={221}
              y={39}
              width={14}
              height={14}
              fill="none"
              stroke="black"
              strokeWidth={2}
            />
            <rect
              x={223}
              y={41}
              width={10}
              height={10}
              fill="none"
              stroke="gold"
              strokeWidth={2}
            />
          </g>
        )}
      </svg>
      <Caption figure={figure} />
    </FigureModal>
  );
}
