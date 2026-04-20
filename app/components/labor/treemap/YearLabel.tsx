import { useMemo } from "react";
import { yearScale } from "./data";

const YearLabel = ({
  year,
  height,
  visHeight,
}: {
  year: number;
  height: number | undefined;
  visHeight: number | undefined;
}) => {
  const yScale = useMemo(() => yearScale(visHeight || 0), [visHeight]);

  return (
    <text
      className="fill-offwhite font-power tracking-widest"
      transform={`translate(18, ${yScale(new Date(year, 8, 1)) + 8})`}
      dominantBaseline="middle"
      fontSize={(height || 0) / 1.75}
    >
      {year}/{year - 1999}
    </text>
  );
};

export default YearLabel;
