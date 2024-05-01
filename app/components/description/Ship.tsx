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
    <figure className="relative">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className={`w-full transition-all duration-1000 ${
          hideSensitiveState ? "blur-md" : "blur-none"
        }`}
      >
        <g className={`fill-brooksSecondary`}>
          <path
            strokeWidth={0}
            className={`transition-opacity duration-1000 opacity-100`}
            d={paths.outline}
          />
        </g>
        <path
          className={`duration-1000 transition-all fill-none stroke-offblack`}
          style={{ strokeOpacity: hideSensitiveState ? 0 : 1 }}
          d={paths.outline}
        />
      </svg>
      <p
        className={`absolute top-1/3 ml-[20%] w-1/2 transition-opacity duration-1000 opacity-${
          hideSensitiveState ? 100 : 0
        }`}
      >
        {figure.altText?.split(".")[0]}.
      </p>
    </figure>
  );
};

export default Ship;
