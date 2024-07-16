import type { Category } from "~/components/dubois/types";

interface Props {
  x: number;
  y: number;
  maxX: number;
  height: number;
  width: number;
  radius: number;
  catagories: Category[];
}

const Legend = ({ x, y, maxX, height, width, radius, catagories }: Props) => {
  return (
    <>
      {catagories.slice(0, 4).map((category, index) => {
        return (
          <g key={category.name}>
            <circle
              cx={x + radius * 0.25}
              cy={y + height * (index * 4.5)}
              r={radius}
              fill={category.color}
              stroke="black"
            />
            {category.displayName.includes(" ") && (
              <text
                y={y + height * (index * 4.5)}
                className="uppercase font-duboisWide"
                fontSize={radius * 1.5}
              >
                <tspan x={x + radius + radius * 0.65}>
                  {category.displayName.split(" ")[0]}
                </tspan>
                <tspan x={x + radius + radius * 0.65} dy={radius * 1.55}>
                  {category.displayName.split(" ")[1]}
                </tspan>
              </text>
            )}
            {!category.displayName.includes(" ") && (
              <text
                x={x + radius + radius * 0.65}
                y={
                  y +
                  height * (index * 4.55) +
                  radius / (index == 0 ? 1.75 : 2.5)
                }
                className="uppercase font-duboisWide"
                fontSize={radius * 1.5}
              >
                {category.displayName}
              </text>
            )}
          </g>
        );
      })}
      {catagories.slice(4).map((category, index) => {
        return (
          <g key={category.name}>
            <circle
              cx={maxX - 40}
              cy={y + height * (index * 4.5)}
              r={radius}
              fill={category.color}
              stroke="black"
            />
            {category.displayName.includes(" ") &&
              category.displayName.length > 15 && (
                <text
                  x={maxX - 40 - radius * 3}
                  y={y + height * (index * 4.5) + radius / 5}
                  className="uppercase font-duboisWide"
                  fontSize={radius * 1.5}
                  textAnchor="end"
                >
                  <tspan x={maxX - 40 - radius * 3}>
                    {category.displayName.split(" ")[0]}
                  </tspan>
                  <tspan x={maxX - 40 - radius * 3} dy={radius * 1.55}>
                    {category.displayName.split(" ")[1]}
                  </tspan>
                </text>
              )}
            {(!category.displayName.includes(" ") ||
              category.displayName.length < 15) && (
              <text
                x={maxX - 40 - radius * 3}
                y={y + height * (index * 4.55) + radius / 2.5}
                className="uppercase font-duboisWide"
                fontSize={radius * 1.5}
                textAnchor="end"
              >
                {category.displayName}
              </text>
            )}
          </g>
        );
      })}
    </>
  );
};

export default Legend;
