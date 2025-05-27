import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";

const Labels = () => {
  const { hideSensitiveState } = useContext(ChapterContext);

  return (
    <g
      className={`transition-opacity duration-1000 opacity-${
        hideSensitiveState ? 100 : 0
      }`}
    >
      <text x={450} y={125} fontSize={10} className="fill-offblack">
        <tspan>120 male bodies in</tspan>
        <tspan x={450} dy={12}>
          4 rows of 30.
        </tspan>
      </text>

      <text x={325} y={120} fontSize={10} className="fill-offblack">
        <tspan>72 boy</tspan>
        <tspan x={325} dy={12}>
          bodies in
        </tspan>
        <tspan x={325} dy={12}>
          in 6 rows
        </tspan>
        <tspan x={325} dy={12}>
          of 12.
        </tspan>
      </text>

      <text x={180} y={135} fontSize={10} className="fill-offblack">
        <tspan>84 female bodies in</tspan>
        <tspan x={180} dy={12}>
          4 rows of 21.
        </tspan>
      </text>

      <text x={108} y={130} fontSize={10} className="fill-offblack">
        <tspan>30 girl</tspan>
        <tspan x={108} dy={12}>
          bodies in
        </tspan>
        <tspan x={108} dy={12}>
          3 rows
        </tspan>
        <tspan x={108} dy={12}>
          of 10.
        </tspan>
      </text>
    </g>
  );
};

export default Labels;
