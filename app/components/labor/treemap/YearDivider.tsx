import { useMemo } from "react";
import { yearScale } from "./data";

const YearDivider = ({
  year,
  width,
  yOffset,
  visHeight,
}: {
  year: number;
  width: number | undefined;
  yOffset: number | undefined;
  visHeight: number | undefined;
}) => {
  const yScale = useMemo(() => yearScale(visHeight || 0), [visHeight]);
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
