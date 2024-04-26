import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import { paths } from "./plymouthCommitteeScrollytell/paths";
import type { TFigure } from "~/types/figureType";

interface Props {
  figure: TFigure;
}

const HEIGHT = 291.12;
const WIDTH = 713.52;

const Ship = ({ figure }: Props) => {
  const { hideSensitiveState } = useContext(ChapterContext);
  return (
    <figure>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full">
        <filter id="blurShip">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <g
          className={`fill-brooksSecondary transition-all duration-1000 ${
            hideSensitiveState ? "blur" : "blur-0"
          }`}
        >
          <path
            strokeWidth={0}
            className={`transition-opacity duration-1000 opacity-100`}
            d={paths.outline}
          />
        </g>
        <path
          className={`duration-1000 transition-all fill-none origin-center stroke-offblack stroke-${
            hideSensitiveState ? 0 : 1
          }`}
          d={paths.outline}
        />
        <foreignObject
          width={WIDTH * 0.7}
          x={WIDTH / 6}
          y={HEIGHT / 3}
          className="h-1/3"
        >
          <p
            className={`font-neueMontreal transition-opacity duration-1000 opacity-${
              hideSensitiveState ? 100 : 0
            }`}
          >
            {figure.altText?.split(".")[0]}.
          </p>
        </foreignObject>
      </svg>
    </figure>
  );
};

export default Ship;
