import { useContext } from "react";
import { ScrollytellContext } from "~/scrollytellContext";

interface Props {
  width: number;
  height: number;
}

const MACK_Y_OFFSET = 2;
const SIMON_Y_OFFSET = 3;
const ROGERS_Y_OFFSET = 1.5;

const People = ({ width, height }: Props) => {
  const largeText = height / 28;
  const smallText = height / 32;

  const { scrollProgress } = useContext(ScrollytellContext);

  return (
    <g
      className={`${
        scrollProgress >= 6 ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000 scale-90`}
    >
      <g
        className={`${
          scrollProgress >= 6 && scrollProgress <= 8
            ? "opacity-100"
            : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <polygon
          points={`
          ${width / 10},${height / MACK_Y_OFFSET}
          ${width / 10 + 40}, ${height / MACK_Y_OFFSET + 40}
          ${width / 10},${height / MACK_Y_OFFSET + 80}
          ${width / 10 - 40},${height / MACK_Y_OFFSET + 40}
        `}
          strokeWidth={10}
          className={`stroke-offblack transition-all duration-1000 ${
            scrollProgress >= 6 && scrollProgress <= 7
              ? "fill-[#FEC313]"
              : "fill-[#FFD3D3]"
          }`}
        />
        <rect
          y={height / MACK_Y_OFFSET}
          x={width * 0.2}
          height={largeText * 6}
          width={width * 0.8}
          rx={20}
          className="fill-offblack"
        />
        <g
          className={`${
            scrollProgress >= 6 && scrollProgress <= 7
              ? "opacity-100"
              : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <text
            y={height / MACK_Y_OFFSET + 25}
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
            scrollProgress >= 7 && scrollProgress <= 8
              ? "opacity-100"
              : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <text
            y={height / MACK_Y_OFFSET + 25}
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
          scrollProgress >= 8 && scrollProgress <= 10
            ? "opacity-100"
            : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <g id="simon">
          <polygon
            points={`
          ${width / 8},${height / SIMON_Y_OFFSET}
          ${width / 8 + 40}, ${height / SIMON_Y_OFFSET + 40}
          ${width / 8},${height / SIMON_Y_OFFSET + 80}
          ${width / 8 - 40},${height / SIMON_Y_OFFSET + 40}
        `}
            strokeWidth={10}
            className={`stroke-offblack transition-all duration-1000 ${
              scrollProgress <= 9 ? "fill-[#D92944]" : "fill-[#C4C4C4]"
            }`}
          />
          <rect
            y={height / SIMON_Y_OFFSET}
            x={width * 0.2}
            height={largeText * 6}
            width={width * 0.85}
            rx={20}
            className="fill-offblack"
          />
          <g
            className={`${
              scrollProgress >= 8 && scrollProgress <= 10
                ? "opacity-100"
                : "opacity-0"
            } transition-opacity duration-1000`}
          >
            <text
              y={height / SIMON_Y_OFFSET + 25}
              x={width * 0.2 + 25}
              fontSize={largeText}
              className={`fill-offwhite font-powerWide tracking-wider`}
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
      </g>
      <g
        className={`${
          scrollProgress >= 8 && scrollProgress <= 9
            ? "opacity-100"
            : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <g id="rogers">
          <polygon
            points={`
          ${width / 5},${height / ROGERS_Y_OFFSET}
          ${width / 5 + 40}, ${height / ROGERS_Y_OFFSET + 40}
          ${width / 5},${height / ROGERS_Y_OFFSET + 80}
          ${width / 5 - 40},${height / ROGERS_Y_OFFSET + 40}
        `}
            strokeWidth={10}
            className={`stroke-offblack transition-all duration-1000 fill-[#D92944]`}
          />
          <rect
            y={height / ROGERS_Y_OFFSET}
            x={width * 0.28}
            height={largeText * 6}
            width={width * 0.7}
            rx={20}
            className="fill-offblack"
          />
          <g className={``}>
            <text
              y={height / ROGERS_Y_OFFSET + 25}
              x={width * 0.28 + 25}
              fontSize={largeText}
              className="fill-offwhite font-powerWide tracking-wider"
              dominantBaseline="hanging"
            >
              <tspan>William Andrew Rogers</tspan>
              <tspan
                fontSize={smallText}
                dy={largeText + smallText / ROGERS_Y_OFFSET}
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
      {/* <g
        className={`${
          scrollProgress >= 9 && scrollProgress <= 10
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
      </g> */}
    </g>
  );
};

export default People;
