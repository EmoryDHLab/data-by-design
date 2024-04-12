import { visHeight } from "../data/functions";
import { yearScale } from "./data";

const yScale = yearScale(visHeight());

const YearLabel = ({
  year,
  height,
}: {
  year: number;
  height: number | undefined;
}) => {
  return (
    <text
      className="fill-offwhite font-dubois tracking-widest"
      transform={`translate(0, ${yScale(new Date(year, 8, 1))})`}
      dominantBaseline="middle"
      fontSize={(height || 0) / 1.35}
    >
      {year}/{year - 1999}
    </text>
  );
};

export default YearLabel;
