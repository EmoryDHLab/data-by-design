import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import type { Dispatch, SetStateAction } from "react";
import type { ResponseData } from "../types";

interface Props {
  response: ResponseData;
  activeResponse: string | undefined;
  setActiveResponse: Dispatch<SetStateAction<string | undefined>>;
  color: string;
  textColor: string;
}

// s
// 'Data visualization has never been neutral or objective. There is a meaning — and an argument — conveyed through each design. not by'
// c = Math.ceil(s.length / 6)
// 22
// a = Array.from({length: 6})
// (6) [undefined, undefined, undefined, undefined, undefined, undefined]
// a.forEach((p, i) => { console.log(s.slice(i * c, c * (i + 1))) })

function ResponseV2({ response, activeResponse, setActiveResponse, color, textColor }: Props) {
  const pathRef = useRef<d3.Selection<SVGPathElement, null, HTMLElement, any> | undefined>(undefined);
  const textRef = useRef<d3.Selection<SVGTextElement, null, HTMLElement, any> | undefined>(undefined);
  const textPathRef = useRef<d3.Selection<SVGTextPathElement, null, HTMLElement, any> | undefined>(undefined);
  // const buttonRef = useRef<d3.Selection<SVGRectElement, null, HTMLElement, any> | undefined>(undefined);
  const containerRef = useRef<d3.Selection<SVGRectElement, null, HTMLElement, any> | undefined>(undefined);
  const contentRef = useRef<d3.Selection<SVGTextElement, null, HTMLElement, any> | undefined>(undefined);
  const previousActiveRef = useRef<string | undefined>(activeResponse);
  const wadRef = useRef<string | null>(null);
  const knotRef = useRef<string | null>(null);
  const wadLengthRef = useRef<number>(0);
  const x = useRef<number>(response.x);
  const y = useRef<number>(response.y);
  const boxX = useRef<number>(response.x);
  const boxY = useRef<number>(response.y);
  const [isUnraveled, setIsUnraveled] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {
    // Collapse response
    if (isCollapsed) {
      pathRef.current?.attr("d", wadRef.current);

      textPathRef.current
                 ?.attr("textLength", 258)
                 .transition(d3.transition().duration(700))
                 .attr("textLength", 0);

      textPathRef.current
                 ?.attr("fill-opacity", 1)
                 .transition(d3.transition().delay(300))
                 .attr("fill-opacity", 0);

      // buttonRef.current?.attr("height", 0);

      d3.selectAll(`.button-text-${response.id}`)
        .attr("fill-opacity", 0);

      d3.selectAll(`.button-text-${response.id}`)
        .attr("font-size", 0);
    }
  }, [isCollapsed, response]);

  useEffect(() => {
    if (activeResponse && activeResponse === response.id) {
      pathRef.current?.attr("d", knotRef.current);

      containerRef.current?.node()?.focus();

      containerRef.current
        ?.transition().duration(100).attr("x", boxX.current - 5)
        .transition().duration(100).attr("y", boxY.current - 30)
        .transition().duration(100).attr("height", 85)
        .transition().duration(100).attr("fill-opacity", 1)

      textPathRef.current
        ?.transition().duration(700).delay(100).attr("textLength", 258);

      textPathRef.current?.attr("fill-opacity", 1);

      d3.selectAll(`.button-text-${response.id}`)
        .attr("font-size", 5)
        .attr("x", boxX.current + 16.5)
        .attr("y", boxY.current + 42)
        .transition().duration(300).delay(300).attr("fill-opacity", 1);

      // buttonRef.current
      //   ?.attr("y", boxY.current + 36)
      //   .attr("x", boxX.current + 14.5)
      //   .transition().duration(300).delay(300).attr("height", 14);

      setIsCollapsed(false);
      // contentRef.current?.raise();
      // contentRef.current?.attr("font-size", 0).transition(transition.delay(1500)).attr("font-size", 5);
      previousActiveRef.current = activeResponse;
    } else if (previousActiveRef.current == response.id) {
      containerRef.current?.node()?.blur();
      setIsCollapsed(true);
      setIsUnraveled(false);

      // previousActiveRef.current = undefined;
    }
  }, [activeResponse, response]);

  useEffect(() => {
    if (isUnraveled && activeResponse === response.id) {
      containerRef.current?.node()?.focus();
      contentRef.current?.attr("font-size", 5);

      const tSpans: any[] = d3.selectAll(`tSpan.line-${response.id}`).nodes() || [undefined];

      const boxWidth = Math.max(
        ...tSpans.map((textSpan) => textSpan?.textLength.baseVal.value)
      );

      const boxHeight = 7 * response.lines.length;

      if (x.current + boxWidth > 200) {
        const leftOffSet = (x.current + boxWidth) - 180;
        boxX.current =  x.current - leftOffSet;
      }

      if (y.current + boxHeight > 200) {
        const bottomOffset = (y.current + boxHeight) - 200;
        boxY.current = y.current - bottomOffset;
      }

      d3.selectAll(`.line-${response.id}`).attr("x", boxWidth / 2 + boxX.current + 5);

      containerRef.current
        ?.transition().duration(300).attr("width", Math.max(...response.lines.map((l) => l.length)) * 2.65)
        .transition().duration(100).attr("x", boxX.current)
        .transition().duration(100).attr("y", boxY.current - 25)
        .transition().duration(100).attr("height", boxHeight + 10)
        .transition().duration(100).attr("rx", 0)
        // .transition().duration(100).attr("fill-opacity", 1)

      contentRef.current
       ?.attr("y", boxY.current - 20)
       .transition().duration(300).delay(300).attr("fill-opacity", 1);

      setIsCollapsed(true);
    } else {
      containerRef.current
        ?.attr("height", 0)
        .attr("width", 75)
        .attr("fill-opacity", 0)
        .attr("x", x.current)
        .attr("y", y.current)
        .attr("rx", 5);

      contentRef.current
        ?.attr("font-size", 0)
        .attr("fill-opacity", 0)
        .attr("x", x.current + 10)
        .attr("y", y.current - 20);
    }
  }, [isUnraveled, response, color, activeResponse]);

  useEffect(() => {
    // console.log("🚀 ~ file: ResponseV2.tsx:147 ~ useEffect ~ textRef:", "initial")
    textRef.current = d3.select(`#text-${response.id}`);
    // buttonRef.current = d3.select(`#button-${response.id}`);
    containerRef.current = d3.select(`#container-${response.id}`);
    contentRef.current = d3.select(`#content-${response.id}`);
    pathRef.current = d3.select(`#path-${response.id}`);
    textPathRef.current = d3.select(`#text-path-${response.id}`);

    const width = 75;
    const height = 80;

    if (x.current + width > 200) {
      const leftOffSet = (x.current + width) - 180;
      boxX.current =  x.current - leftOffSet;
    }

    if (y.current + height > 200) {
      const bottomOffset = (y.current + height) - 220;
      boxY.current = y.current - bottomOffset;
    } else if (y.current - 30 < 0) {
      const topOffset = (y.current - 32) * -1;
      boxY.current = y.current + topOffset;
    }

    const wad: Array<[number, number]> = Array.from({ length: 6 }).map(() => [boxX.current + 25, boxY.current]);
    wadRef.current = d3.line().curve(d3.curveNatural)(wad);

    const knot: Array<[number, number]> = [
      [boxX.current, boxY.current],
      [boxX.current + 25, boxY.current + 18],
      [boxX.current + 10, boxY.current + 23],
      [boxX.current + 18, boxY.current - 13],
      [boxX.current + 40, boxY.current + 33],
      [boxX.current + 50, boxY.current - 20],
      [boxX.current + 60, boxY.current + 33],
    ];

    knotRef.current = d3.line().curve(d3.curveNatural)(knot);


    const sentences = response.lines.join('').split('.');
    const sentence = sentences[d3.randomInt(0, sentences.length - 1)()] + '.';

    // const knot: Array<[number, number]> = [[x, y]];
    // Array.from({ length: Math.ceil(sentence.length / 6)}).forEach((chunk) => {
    //   knot.push([d3.randomInt(x, x + 50)(), d3.randomInt(y - 20, y + 40)()]);
    // });

    // const line = d3.line().curve(d3.curveNatural);

    pathRef.current?.attr('d', wadRef.current);
    wadLengthRef.current = pathRef.current?.node()?.getTotalLength() || sentence.length * 2;
    textPathRef.current
      ?.attr("xlink:href", `#path-${response.id}`)
      .attr("textLength", 120)
      .text(sentence);

  }, [response]);

  return (
    <svg
      id={`response-svg-${response.id}`}
    >
      <rect
        id={`container-${response.id}`}
        x={x.current}
        y={y.current - 25}
        rx={15}
        width={75}
        height={0}
        strokeWidth={0.5}
        fillOpacity={0}
        fill={color}
        className="drop-shadow-md focus:stroke-black focus:outline-0 focus:outline-none"
        tabIndex={0}
        onKeyUp={({ key }) => { if (key === 'Escape') setActiveResponse(undefined) }}
      />
      <path
        id={`path-${response.id}`}
        fill="none"
        strokeWidth={8}
        strokeOpacity={0}
      />
      <text id={`text-${response.id}`} fill={textColor}>
        <textPath
          id={`text-path-${response.id}`}
          fontFamily="VTC Du Bois Narrow, serif"
          className={`font-bold text-${textColor}`}
          fontSize={5}
          fillOpacity={1}
          textLength={0}
          onClick={() => setActiveResponse(undefined)}
        >
        </textPath>
      </text>
      {/* <rect
        id={`button-${response.id}`}
        x={x.current + 14.5}
        y={y.current + 36}
        height={0}
        width={32}
        stroke="black"
        strokeWidth={0.5}
        fill={color}
        role="button"
        onClick={() => setIsUnraveled(true)}
      /> */}
      <text
        x={x.current + 16.5}
        y={y.current + 42}
        fontSize={0}
        className="uppercase"
        fill={textColor}
        fillOpacity={1}
        role="button"
        onClick={() => setIsUnraveled(true)}
      >
        <tspan
          className={`button-text-${response.id}`}
        >
          Read full
        </tspan>
        <tspan
          className={`button-text-${response.id}`}
          x={x.current + 16.5}
          dy={6}
        >
          response
        </tspan>
      </text>
      <rect
        id={`full-container-${response.id}`}
        x={x.current}
        y={y.current - 25}
        width={75}
        height={0}
        strokeWidth={0.5}
        fillOpacity={0}
        fill="rgb(250 241 233)"
      />
      <text
        id={`content-${response.id}`}
        x={x.current + 10}
        y={y.current - 20}
        fontSize={0}
        className="text-white font-duboisNarrow tracking-widest"
        fill={textColor}
        fillOpacity={0}
        textAnchor="middle"
        onClick={() => setActiveResponse(undefined)}
      >
        {response.lines.map((line, index) => {
          return (
            <tspan
              key={`line-${response.id}-${line.slice(1,15).replace(' ', '')}-${line.length}`}
              className={`line-${response.id}`}
              x={x.current}
              dy={index > 0 ? 7 : 3}
            >
              {line}
            </tspan>
          )
        })}
      </text>
    </svg>
  );
}

export default ResponseV2;