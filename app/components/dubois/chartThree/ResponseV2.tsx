import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import type { Dispatch, SetStateAction } from "react";
import type { ResponseData, SimpleDot } from "../types";

const WIDTH = 175;
const HEIGHT = 180;

interface Props {
  response: ResponseData;
  activeResponse: string | undefined;
  setActiveResponse: Dispatch<SetStateAction<string | undefined>>;
  color: string;
  textColor: string;
  canvasWidth: number;
  canvasHeight: number;
  dot: SimpleDot;
}

// s
// 'Data visualization has never been neutral or objective. There is a meaning — and an argument — conveyed through each design. not by'
// c = Math.ceil(s.length / 6)
// 22
// a = Array.from({length: 6})
// (6) [undefined, undefined, undefined, undefined, undefined, undefined]
// a.forEach((p, i) => { console.log(s.slice(i * c, c * (i + 1))) })

function ResponseV2({
  response,
  activeResponse,
  setActiveResponse,
  color,
  textColor,
  canvasWidth,
  canvasHeight,
  dot,
}: Props) {
  const pathRef = useRef<
    d3.Selection<SVGPathElement, null, HTMLElement, any> | undefined
  >(undefined);
  const textRef = useRef<
    d3.Selection<SVGTextElement, null, HTMLElement, any> | undefined
  >(undefined);
  const textPathRef = useRef<
    d3.Selection<SVGTextPathElement, null, HTMLElement, any> | undefined
  >(undefined);
  // const buttonRef = useRef<d3.Selection<SVGRectElement, null, HTMLElement, any> | undefined>(undefined);
  const containerRef = useRef<
    d3.Selection<SVGRectElement, null, HTMLElement, any> | undefined
  >(undefined);
  const contentRef = useRef<
    d3.Selection<SVGTextElement, null, HTMLElement, any> | undefined
  >(undefined);
  const previousActiveRef = useRef<string | undefined>(activeResponse);
  const wadRef = useRef<string | null>(null);
  const knotRef = useRef<string | null>(null);
  const wadLengthRef = useRef<number>(0);
  const boxX = useRef<number>(dot?.x || 0);
  const boxY = useRef<number>(dot?.y || 0);
  const [isUnraveled, setIsUnraveled] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {}, [response]);

  // SETUP
  useEffect(() => {
    if (!dot || dot.x === 0 || dot.y === 0) return;

    boxX.current = dot.x;
    boxY.current = dot.y;
    textRef.current = d3.select(`#text-${response.id}`);
    containerRef.current = d3.select(`#container-${response.id}`);
    contentRef.current = d3.select(`#content-${response.id}`);
    pathRef.current = d3.select(`#path-${response.id}`);
    textPathRef.current = d3.select(`#text-path-${response.id}`);

    if (dot.x + WIDTH > canvasWidth) {
      const leftOffSet = dot.x + WIDTH - canvasWidth;
      boxX.current = dot.x - leftOffSet;
    }

    if (dot.y + HEIGHT > canvasHeight) {
      const bottomOffset = dot.y + HEIGHT - canvasHeight;
      boxY.current = dot.y - bottomOffset;
    } else if (dot.y - 30 < 0) {
      const topOffset = (dot.y - 32) * -1;
      boxY.current = dot.y + topOffset;
    }

    const wad: Array<[number, number]> = Array.from({ length: 6 }).map(() => [
      boxX.current + 25,
      boxY.current,
    ]);
    wadRef.current = d3.line().curve(d3.curveNatural)(wad);

    const knot: Array<[number, number]> = [
      [boxX.current, boxY.current],
      [boxX.current + 75, boxY.current + 88],
      [boxX.current + 20, boxY.current + 93],
      [boxX.current + 38, boxY.current - 13],
      [boxX.current + 110, boxY.current + 103],
      [boxX.current + 120, boxY.current - 10],
      [boxX.current + 150, boxY.current + 110],
    ];

    knotRef.current = d3.line().curve(d3.curveNatural)(knot);

    pathRef.current?.attr("d", wadRef.current);
    wadLengthRef.current =
      pathRef.current?.node()?.getTotalLength() ||
      response.selection.length * 2;
    textPathRef.current
      ?.attr("xlink:href", `#path-${response.id}`)
      .text(response.selection);
  }, [response, canvasHeight, canvasWidth, dot]);

  // SHOW KNOT
  useEffect(() => {
    if (activeResponse && activeResponse === response.id) {
      pathRef.current?.attr("d", knotRef.current);

      containerRef.current?.node()?.focus();

      containerRef.current
        ?.transition()
        .duration(100)
        .attr("x", boxX.current - 5)
        .transition()
        .duration(100)
        .attr("y", boxY.current - 30)
        .transition()
        .duration(100)
        .attr("height", HEIGHT)
        .transition()
        .duration(100)
        .attr("fill-opacity", 1);

      textRef.current
        ?.transition()
        .duration(700)
        .delay(100)
        .attr("textLength", 697);

      textPathRef.current?.attr("fill-opacity", 1);

      d3.selectAll(`.button-text-${response.id}`)
        .attr("font-size", 10)
        .attr("x", boxX.current + WIDTH / 2)
        .attr("y", boxY.current + 130)
        .transition()
        .duration(300)
        .delay(300)
        .attr("fill-opacity", 1);

      setIsCollapsed(false);
      previousActiveRef.current = activeResponse;
    } else if (previousActiveRef.current == response.id) {
      containerRef.current?.node()?.blur();
      setIsCollapsed(true);
      setIsUnraveled(false);
    }
  }, [activeResponse, response]);

  // SHOW FULL RESPONSE
  useEffect(() => {
    if (isUnraveled && activeResponse === response.id) {
      containerRef.current?.node()?.focus();
      contentRef.current?.attr("font-size", 18);

      const tSpans: any[] = d3.selectAll(`.line-${response.id}`).nodes() || [
        undefined,
      ];

      const boxWidth =
        Math.max(...tSpans.map((textSpan) => textSpan?.getBBox().width)) + 10;

      const boxHeight = 20 * response.lines.length;

      if (boxX.current + boxWidth > canvasWidth) {
        const leftOffSet = boxX.current + boxWidth - canvasWidth;
        boxX.current = boxX.current - leftOffSet;
      }

      d3.selectAll(`.line-${response.id}`).attr(
        "x",
        boxWidth / 2 + boxX.current
      );

      if (dot.y + boxHeight > canvasHeight) {
        const bottomOffset = boxY.current + boxHeight - canvasHeight;
        boxY.current = boxY.current - bottomOffset;
      }

      containerRef.current
        ?.transition()
        .duration(300)
        .attr("width", boxWidth)
        .transition()
        .duration(100)
        .attr("x", boxX.current)
        .transition()
        .duration(100)
        .attr("y", boxY.current - 25)
        .transition()
        .duration(100)
        .attr("height", boxHeight + 10)
        .transition()
        .duration(100)
        .attr("rx", 0);
      // .transition().duration(100).attr("fill-opacity", 1)

      contentRef.current
        ?.attr("y", boxY.current - 20)
        .transition()
        .duration(300)
        .delay(300)
        .attr("fill-opacity", 1);

      setIsCollapsed(true);
    } else {
      containerRef.current
        ?.attr("height", 0)
        .attr("width", WIDTH)
        .attr("fill-opacity", 0)
        .attr("x", dot.x)
        .attr("y", dot.y)
        .attr("rx", 5);

      contentRef.current
        ?.attr("font-size", 0)
        .attr("fill-opacity", 0)
        .attr("x", dot.x + 10)
        .attr("y", dot.y - 20);
    }
  }, [
    isUnraveled,
    response,
    color,
    activeResponse,
    canvasHeight,
    canvasWidth,
    dot,
  ]);

  // COLLAPSE
  useEffect(() => {
    // Collapse response
    if (isCollapsed) {
      pathRef.current?.attr("d", wadRef.current);

      textRef.current?.transition().duration(700).attr("textLength", 0);
      textPathRef.current?.transition().delay(300).attr("fill-opacity", 0);

      d3.selectAll(`.button-text-${response.id}`).attr("fill-opacity", 0);

      d3.selectAll(`.button-text-${response.id}`).attr("font-size", 0);
    }
  }, [isCollapsed, response]);

  if (dot) {
    return (
      <svg id={`response-svg-${response.id}`}>
        <rect
          id={`container-${response.id}`}
          x={dot.x}
          y={dot.y - 25}
          rx={15}
          width={WIDTH}
          height={0}
          strokeWidth={0.5}
          fillOpacity={0}
          fill={color}
          className="drop-shadow-md focus:stroke-black focus:outline-0 focus:outline-none"
          tabIndex={0}
          onKeyUp={({ key }) => {
            if (key === "Escape") setActiveResponse(undefined);
          }}
        />
        <path
          id={`path-${response.id}`}
          fill="none"
          stroke="black"
          strokeWidth={8}
          strokeOpacity={0}
        />
        <text id={`text-${response.id}`} fill={textColor} textLength={0}>
          <textPath
            id={`text-path-${response.id}`}
            fontFamily="VTC Du Bois Narrow, serif"
            className={`font-bold text-${textColor}`}
            fontSize={12}
            fillOpacity={1}
            onClick={() => setActiveResponse(undefined)}
          ></textPath>
        </text>

        <text
          x={dot.x + 16.5}
          y={dot.y + 42}
          fontSize={0}
          className="uppercase"
          fill={textColor}
          fillOpacity={1}
          role="button"
          textAnchor="middle"
          dominantBaseline="middle"
          onClick={() => setIsUnraveled(true)}
        >
          <tspan className={`button-text-${response.id}`}>Read full</tspan>
          <tspan
            className={`button-text-${response.id}`}
            x={dot.x + 16.5}
            dy={12}
          >
            response
          </tspan>
        </text>
        <rect
          id={`full-container-${response.id}`}
          x={dot.x}
          y={dot.y - 25}
          width={WIDTH}
          height={0}
          strokeWidth={0.5}
          fillOpacity={0}
          fill="rgb(250 241 233)"
        />
        <text
          id={`content-${response.id}`}
          x={dot.x + 10}
          y={dot.y - 20}
          fontSize={0}
          className="text-white font-duboisNarrow tracking-widest"
          fill={textColor}
          fillOpacity={0}
          textAnchor="middle"
          dominantBaseline="middle"
          onClick={() => setActiveResponse(undefined)}
        >
          {response.lines.map((line, index) => {
            return (
              <tspan
                key={`line-${response.id}-${response.lines.indexOf(line)}`}
                className={`line-${response.id}`}
                dy={index > 0 ? 20 : 10}
                dangerouslySetInnerHTML={{
                  __html: line,
                }}
              />
            );
          })}
        </text>
      </svg>
    );
  }

  return <></>;
}

export default ResponseV2;
