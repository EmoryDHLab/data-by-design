import { visHeight } from "../data/functions";
import { yearScale } from "./data";

const yScale = yearScale(visHeight());

const YearDivider = ({
  year,
  width,
  yOffset,
}: {
  year: number;
  width: number | undefined;
  yOffset: number | undefined;
}) => {
  return (
    <line
      x1={100}
      x2={(width || 0) + 100}
      y1={yScale(new Date(year, 8, 1)) + (yOffset || 0)}
      y2={yScale(new Date(year, 8, 1)) + (yOffset || 0)}
      stroke="white"
      strokeWidth={1}
      strokeOpacity={0.5}
    />
  );
};

export default YearDivider;
