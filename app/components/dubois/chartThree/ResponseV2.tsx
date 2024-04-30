import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import type { Dispatch, SetStateAction } from "react";
import type { ResponseData } from "../types";

const WIDTH = 175;
const HEIGHT = 180;

interface Props {
  response: ResponseData;
  activeResponse: string | undefined;
  setActiveResponse: Dispatch<SetStateAction<string | undefined>> | null;
  color: string;
  textColor: string;
  canvasWidth: number;
  canvasHeight: number;
  unravel?: boolean | undefined;
  id?: string | undefined;
}

function ResponseV2({
  response,
  activeResponse,
  setActiveResponse,
  color,
  textColor,
  canvasWidth,
  canvasHeight,
  unravel = false,
  id,
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
  const boxX = useRef<number>(response.x);
  const boxY = useRef<number>(response.y);
  const [isUnraveled, setIsUnraveled] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {
    setIsUnraveled(unravel);
    setIsCollapsed(!unravel);
  }, [unravel]);

  // SETUP
  useEffect(() => {
    if (!response || response.x === 0 || response.y === 0) return;

    boxX.current = response.x;
    boxY.current = response.y;
    textRef.current = d3.select(`#text-${response.id}-${id}`);
    containerRef.current = d3.select(`#container-${response.id}-${id}`);
    contentRef.current = d3.select(`#content-${response.id}-${id}`);
    pathRef.current = d3.select(`#path-${response.id}-${id}`);
    textPathRef.current = d3.select(`#text-path-${response.id}-${id}`);

    if (response.x + WIDTH > canvasWidth) {
      const leftOffSet = response.x + WIDTH - canvasWidth;
      boxX.current = response.x - leftOffSet;
    }

    if (response.y + HEIGHT > canvasHeight) {
      const bottomOffset = response.y + HEIGHT - canvasHeight;
      boxY.current = response.y - bottomOffset;
    } else if (response.y - 30 < 0) {
      const topOffset = (response.y - 32) * -1;
      boxY.current = response.y + topOffset;
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
      ?.attr("xlink:href", `#path-${response.id}-${id}`)
      .text(response.selection);
  }, [response, canvasHeight, canvasWidth, id]);

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

      if (response.y + boxHeight > canvasHeight) {
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
        .attr("x", response.x)
        .attr("y", response.y)
        .attr("rx", 5);

      contentRef.current
        ?.attr("font-size", 0)
        .attr("fill-opacity", 0)
        .attr("x", response.x + 10)
        .attr("y", response.y - 20);
    }
  }, [isUnraveled, response, color, activeResponse, canvasHeight, canvasWidth]);

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

  if (response) {
    return (
      <svg id={`response-svg-${response.id}-${id}`}>
        <rect
          id={`container-${response.id}-${id}`}
          x={response.x}
          y={response.y - 25}
          rx={15}
          width={WIDTH}
          height={0}
          strokeWidth={0.5}
          fillOpacity={0}
          fill={color}
          className="drop-shadow-md focus:stroke-black focus:outline-0 focus:outline-none"
          tabIndex={0}
          onKeyUp={({ key }) => {
            if (key === "Escape" && setActiveResponse)
              setActiveResponse(undefined);
          }}
        />
        <path
          id={`path-${response.id}-${id}`}
          fill="none"
          stroke="black"
          strokeWidth={8}
          strokeOpacity={0}
        />
        <text id={`text-${response.id}-${id}`} fill={textColor} textLength={0}>
          <textPath
            id={`text-path-${response.id}-${id}`}
            fontFamily="VTC Du Bois Narrow, serif"
            className={`font-bold text-${textColor}`}
            fontSize={12}
            fillOpacity={1}
            onClick={() => {
              if (setActiveResponse) {
                setActiveResponse(undefined);
              }
            }}
          ></textPath>
        </text>

        <text
          x={response.x + 16.5}
          y={response.y + 42}
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
            x={response.x + 16.5}
            dy={12}
          >
            response
          </tspan>
        </text>
        <rect
          id={`full-container-${response.id}-${id}`}
          x={response.x}
          y={response.y - 25}
          width={WIDTH}
          height={0}
          strokeWidth={0.5}
          fillOpacity={0}
          fill="rgb(250 241 233)"
        />
        <text
          id={`content-${response.id}-${id}`}
          x={response.x + 10}
          y={response.y - 20}
          fontSize={0}
          className="text-white font-duboisNarrow tracking-widest"
          fill={textColor}
          fillOpacity={0}
          textAnchor="middle"
          dominantBaseline="middle"
          onClick={() => {
            if (setActiveResponse) {
              setActiveResponse(undefined);
            }
          }}
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
