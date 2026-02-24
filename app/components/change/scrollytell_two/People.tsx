import { useContext } from "react";
import { ScrollytellContext } from "~/scrollytellContext";

interface Props {
  width: number;
  height: number;
}

const People = ({ width, height }: Props) => {
  const largeText = height / 28;
  const smallText = height / 32;

  const { scrollProgress } = useContext(ScrollytellContext);

  return (
    <g
      className={`${
        scrollProgress >= 5.25 ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      <g
        className={`${
          scrollProgress >= 5.25 && scrollProgress <= 7.25
            ? "opacity-100"
            : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <polygon
          points={`
          ${width / 10},${height / 4}
          ${width / 10 + 40}, ${height / 4 + 40}
          ${width / 10},${height / 4 + 80}
          ${width / 10 - 40},${height / 4 + 40}
        `}
          strokeWidth={10}
          className={`stroke-offblack transition-all duration-1000 ${
            scrollProgress >= 5.25 && scrollProgress <= 6.25
              ? "fill-[#FEC313]"
              : "fill-[#FFD3D3]"
          }`}
        />
        <rect
          y={height / 4}
          x={width * 0.2}
          height={largeText * 6}
          width={width * 0.8}
          rx={20}
          className="fill-offblack"
        />
        <g
          className={`${
            scrollProgress >= 5.25 && scrollProgress <= 6.25
              ? "opacity-100"
              : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <text
            y={height / 4 + 25}
            x={width * 0.2 + 25}
            fontSize={largeText}
            className="fill-offwhite font-powerWide tracking-wider"
            dominantBaseline="hanging"
          >
            <tspan>Lula Iola Mack (Mrs. F.H. Wilkins)</tspan>
            <tspan
              fontSize={smallText}
              dy={largeText + smallText}
              x={width * 0.2 + 25}
            >
              Athens
            </tspan>
            <tspan
              fontSize={smallText}
              dy={largeText + smallText}
              x={width * 0.2 + 25}
            >
              Class of 1900
            </tspan>
          </text>
        </g>
        <g
          className={`${
            scrollProgress >= 6.25 && scrollProgress <= 7.25
              ? "opacity-100"
              : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <text
            y={height / 4 + 25}
            x={width * 0.2 + 25}
            fontSize={largeText}
            className="fill-offwhite font-powerWide tracking-wider"
            dominantBaseline="hanging"
          >
            <tspan>William George Westmoreland</tspan>
            <tspan
              fontSize={smallText}
              dy={largeText + smallText / 1.75}
              x={width * 0.2 + 25}
            >
              Mail Carrier
            </tspan>
            <tspan
              fontSize={smallText}
              dy={largeText + smallText / 2.75}
              x={width * 0.2 + 25}
            >
              Atlanta
            </tspan>
            <tspan
              fontSize={smallText}
              dy={largeText + smallText / 2.75}
              x={width * 0.2 + 25}
            >
              Class of 1892
            </tspan>
          </text>
        </g>
      </g>
      <g
        className={`${
          scrollProgress >= 7.25 && scrollProgress <= 8.25
            ? "opacity-100"
            : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <g id="simon">
          <polygon
            points={`
          ${width / 15},${height / 5}
          ${width / 15 + 40}, ${height / 5 + 40}
          ${width / 15},${height / 5 + 80}
          ${width / 15 - 40},${height / 5 + 40}
        `}
            strokeWidth={10}
            className={`stroke-offblack transition-all duration-1000 fill-[#D92944]`}
          />
          <rect
            y={height / 5}
            x={width * 0.15}
            height={largeText * 6}
            width={width * 0.85}
            rx={20}
            className="fill-offblack"
          />
          <g className={``}>
            <text
              y={height / 5 + 25}
              x={width * 0.15 + 25}
              fontSize={largeText}
              className="fill-offwhite font-powerWide tracking-wider"
              dominantBaseline="hanging"
            >
              <tspan>Edward Lee Simon</tspan>
              <tspan
                fontSize={smallText}
                dy={largeText + smallText / 1.75}
                x={width * 0.15 + 25}
              >
                Supervisor Indus. Work, Pub. Schools
              </tspan>
              <tspan
                fontSize={smallText}
                dy={largeText + smallText / 2.75}
                x={width * 0.15 + 25}
              >
                Memphis, Tenn.
              </tspan>
              <tspan
                fontSize={smallText}
                dy={largeText + smallText / 2.75}
                x={width * 0.15 + 25}
              >
                Class of 1900
              </tspan>
            </text>
          </g>
        </g>
        <g id="rogers">
          <polygon
            points={`
          ${width / 5},${height / 1.75}
          ${width / 5 + 40}, ${height / 1.75 + 40}
          ${width / 5},${height / 1.75 + 80}
          ${width / 5 - 40},${height / 1.75 + 40}
        `}
            strokeWidth={10}
            className={`stroke-offblack transition-all duration-1000 fill-[#D92944]`}
          />
          <rect
            y={height / 1.75}
            x={width * 0.28}
            height={largeText * 6}
            width={width * 0.7}
            rx={20}
            className="fill-offblack"
          />
          <g className={``}>
            <text
              y={height / 1.75 + 25}
              x={width * 0.28 + 25}
              fontSize={largeText}
              className="fill-offwhite font-powerWide tracking-wider"
              dominantBaseline="hanging"
            >
              <tspan>William Andrew Rogers</tspan>
              <tspan
                fontSize={smallText}
                dy={largeText + smallText / 1.75}
                x={width * 0.28 + 25}
              >
                Teacher State Normal School
              </tspan>
              <tspan
                fontSize={smallText}
                dy={largeText + smallText / 2.75}
                x={width * 0.28 + 25}
              >
                Petersburg, VA.
              </tspan>
              <tspan
                fontSize={smallText}
                dy={largeText + smallText / 2.75}
                x={width * 0.28 + 25}
              >
                Class of 1899
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <g
        className={`${
          scrollProgress >= 9.25 && scrollProgress <= 10.25
            ? "opacity-100"
            : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <polygon
          points={`
          ${width / 10},${height / 4}
          ${width / 10 + 40}, ${height / 4 + 40}
          ${width / 10},${height / 4 + 80}
          ${width / 10 - 40},${height / 4 + 40}
        `}
          strokeWidth={10}
          className={`stroke-offblack transition-all duration-1000 fill-[#C4C4C4]`}
        />
        <rect
          y={height / 4}
          x={width * 0.2}
          height={largeText * 6}
          width={width * 0.85}
          rx={20}
          className="fill-offblack"
        />
        <text
          y={height / 4 + 25}
          x={width * 0.2 + 25}
          fontSize={largeText}
          className="fill-offwhite font-powerWide tracking-wider"
          dominantBaseline="hanging"
        >
          <tspan>Edward Lee Simon</tspan>
          <tspan
            fontSize={smallText}
            dy={largeText + smallText / 1.75}
            x={width * 0.2 + 25}
          >
            Supervisor Indus. Work, Pub. Schools
          </tspan>
          <tspan
            fontSize={smallText}
            dy={largeText + smallText / 2.75}
            x={width * 0.2 + 25}
          >
            Memphis, Tenn.
          </tspan>
          <tspan
            fontSize={smallText}
            dy={largeText + smallText / 2.75}
            x={width * 0.2 + 25}
          >
            Class of 1900
          </tspan>
        </text>
      </g>
    </g>
  );
};

export default People;
