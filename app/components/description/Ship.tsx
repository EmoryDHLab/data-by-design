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
    <figure className="my-8">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full">
        <image
          href="/images/description/1-sof_slaveship.jpg"
          width={2973}
          height={1213}
          transform="scale(.24)"
          x={0}
          y={-0.45}
        />
        <g>
          <path
            strokeWidth={0}
            className={`fill-brooksSecondary transition-opacity duration-1000 opacity-${
              hideSensitiveState ? 100 : 0
            }`}
            d={paths.outline}
          />
          <path
            className={`duration-1000 transition-colors fill-none stroke-2 stroke-${
              hideSensitiveState ? "offblack" : "none"
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
        </g>
      </svg>
    </figure>
  );
};

export default Ship;
