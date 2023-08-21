import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import type { Dispatch, SetStateAction } from "react";
import type { ResponseData } from "../types";

interface Props {
  setHasUnraveled: Dispatch<SetStateAction<boolean>>;
  setDropZoneActive: Dispatch<SetStateAction<boolean>>;
  setActiveColor: Dispatch<SetStateAction<string | undefined>>;
  setActiveResponse: Dispatch<SetStateAction<string | undefined>>;
  activeResponse: string | undefined;
  response: ResponseData;
  color: string;
  responseIndex: number;
  type: string;
  hasUnraveled: boolean;
}

function Response({
  setHasUnraveled,
  setDropZoneActive,
  setActiveColor,
  setActiveResponse,
  activeResponse,
  response,
  color,
  responseIndex,
  type,
  hasUnraveled,
}: Props) {
  const svgRef = useRef<any | undefined>(undefined);
  const dotRef = useRef<SVGCircleElement>(null);
  const curvedSegments = useRef<Array<string>>([]);
  const wadSegments = useRef<Array<string>>([]);
  const straightSegments = useRef<Array<string>>([]);
  const originalLengths = useRef<Array<number>>([]);
  const [dotX, setDotX] = useState<number>(50);
  const [dotY, setDotY] = useState<number>(50);
  const [dragging, setDragging] = useState<boolean>(false);
  const [dropped, setDropped] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [unraveled, setUnraveled] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(true);

  useEffect(() => {
    if(dropped && activeResponse !== response.id) setCollapsed(true);
  }, [dropped, activeResponse, response]);

  useEffect(() => {
    if (dragging) {
      setDropZoneActive(true);
      setActiveColor(color);
      setActiveResponse(response.id);
    }
  }, [dragging, setDropZoneActive, setActiveColor, color, setActiveResponse, response]);

  useEffect(() => {
    if (dropped) {
      setDragging(false)
      setActive(true);
      setDropZoneActive(false);
      setActiveColor("none");
    }
  }, [dropped, setDropZoneActive, setActiveColor]);

  useEffect(() => {
    if (active) {
      let curveStart = [100, 100];

      response.lines.forEach((line, lineIndex) => {
        let words = Array.from({ length: line.split(' ').length});
        let curveSegment: Array<Array<number>> = [];
        let straightSegment: Array<Array<number>> = [];
        let wadSegment: Array<Array<number>> = [];
        words.forEach((word, wordIndex) => {
          wadSegment.push([d3.randomInt(99, 101)(), d3.randomInt(99, 101)()]);
          straightSegment.push([(220 / words.length) * wordIndex, (10 * (lineIndex + 1) + (97 - (response.lines.length * 5)))]);
          if (wordIndex === 0) {
            curveSegment.push(curveStart);
          } else if (wordIndex == words.length + 1) {
            curveStart = [d3.randomInt(20, 380)(), d3.randomInt(20,380)()];
            curveSegment.push(curveStart);
          } else {
            curveSegment.push(
              [d3.randomInt(50, 150)(), d3.randomInt(50, 150)()]
            );
          }
        });
        // @ts-ignore
        curvedSegments.current.push(d3.line().curve(d3.curveNatural)(curveSegment));
        // @ts-ignore
        straightSegments.current.push(d3.line().curve(d3.curveNatural)(straightSegment));
        // @ts-ignore
        wadSegments.current.push(d3.line().curve(d3.curveNatural)(wadSegment));
      });

      wadSegments.current.forEach((line, index) => {
        let segment = svgRef.current.select(`#segment-${response.id}-${index}`)
                            .attr("d", line)
                            .attr("stroke-width", 0)
                            .attr("fill", "none")
                            .attr("stroke", "black");
        originalLengths.current.push(segment.node()?.getTotalLength());
        svgRef.current.select(`#text-${response.id}-${index}`)
                      .attr("fill-opacity", 0)
                      .attr("xlink:href", `#segment-${response.id}-${index}`)
                      .attr("textLength", segment.node()?.getTotalLength())
                      .attr("fill", "#000")
                      .text(response.lines[index]);
      });

      setDotX(100);
      setDotY(100);
      setExpanded(true);
    } else {
      curvedSegments.current.forEach((curve, index) => {
        const segment = d3.select(`#segment-${response.id}-${index}`);
        const text = d3.select(`#text-${response.id}-${index}`);
        segment.attr("stroke-width", 0);
        text.attr("fill-opacity", 0);
        text.attr("textLength", originalLengths.current[index]);
      });
      setTimeout(() => {
        if (type === "elt") {
          if (responseIndex % 2 == 0) {
            setDotX(d3.randomInt(46, 101)());
            setDotY(d3.randomInt(10, 46)());
          } else {
            setDotX(d3.randomInt(4, 46)());
            setDotY(d3.randomInt(20, 90)());
          }
        }
        if (type == "cedu") {
          if (responseIndex % 2 == 0) {
            setDotX(d3.randomInt(166, 190)());
            setDotY(d3.randomInt(20, 90)());
          } else {
            setDotX(d3.randomInt(101, 166)());
            setDotY(d3.randomInt(20, 46)());
          }
        }
        if (type == "hind") {
          if (responseIndex % 2 == 0) {
            setDotX(d3.randomInt(48, 101)());
            setDotY(d3.randomInt(155, 170)());
          } else {
            setDotX(d3.randomInt(4, 46)());
            setDotY(d3.randomInt(100, 170)());
          }
        }
        if (type == "pl") {
          if (responseIndex % 2 == 0) {
            setDotX(d3.randomInt(101, 156)());
            setDotY(d3.randomInt(155, 170)());
          } else {
            setDotX(d3.randomInt(156, 190)());
            setDotY(d3.randomInt(100, 170)());
          }
        }
      }, 1000);
    }
  }, [active, response, responseIndex, type]);

  useEffect(() => {
    if (expanded) {
      setCollapsed(false);
      const transition = d3.transition().duration(300).delay(300);
      svgRef.current.on('click', () => setUnraveled(true));
      const dot = d3.select(`#dot-${response.id}`);
      dot.attr("r", 2.5).transition(transition).attr("r", 0);

      curvedSegments.current.forEach((curve, index) => {
        const segment = d3.select(`#segment-${response.id}-${index}`);
        const text = d3.select(`#text-${response.id}-${index}`);
        segment.attr('d', wadSegments.current[index]).transition(transition).attr('d', curve);
        segment.attr("stroke-width", 0).transition(transition).attr('stroke-width', 0.2);
        text.attr("fill-opacity", 0).transition(transition).attr('fill-opacity', 1);
        text.attr("textLength", originalLengths.current[index]).transition(transition).attr("textLength", 2000);
      });
    }
  }, [expanded, response, color]);

  useEffect(() => {
    if (unraveled) {
      setHasUnraveled(true);
      svgRef.current.on('click', () => setCollapsed(true));
      const rect = d3.select("#text-block")
                     .attr("fill", color)
      rect.raise();
      const transition = d3.transition().duration(1000);
      rect.attr("x", 100).transition(transition).attr("x", 0);
      rect.attr("y", 100).transition(transition).attr("y", 97 - (response.lines.length * 5));
      rect.attr("width", 0).transition(transition).attr("width", 200);
      rect.attr("height", 0).transition(transition).attr("height", 10 * response.lines.length + 5);
      curvedSegments.current.forEach((curve, index) => {
        let segment = d3.select(`#segment-${response.id}-${index}`);
        segment.attr('d', curve).transition(transition).attr('d', straightSegments.current[index]);
        segment.attr('stroke-width', 0.2).transition(transition).attr('stroke-width', 0);
        const textLength = 180;
        const textPath = d3.select(`#text-${response.id}-${index}`);
        textPath.attr("startOffset", 10);
        // @ts-ignore
        textPath.attr("textLength", segment?.node()?.getTotalLength()).transition(transition).attr("textLength", textLength);
        textPath.attr("fill", "black").transition(transition).attr("fill", `${type === "elt" || type === "pl" ? "white": "black"}`);
        textPath.raise();
      });
      setExpanded(false);
    }
  }, [unraveled, setHasUnraveled, response, color, type]);

  useEffect(() => {
    if (collapsed) {
      const transition = d3.transition().duration(300);
      const rect = d3.select("#text-block")
      rect.attr("x", 0).transition(transition).attr("x", 100);
      rect.attr("y", 97 - (response.lines.length * 5)).transition(transition).attr("y", 100);
      rect.attr("width", 200).transition(transition).attr("width", 0);
      rect.attr("height", 10 * response.lines.length + 5).transition(transition).attr("height", 0);

      curvedSegments.current.forEach((curve, index) => {
        d3.select(`#segment-${response.id}-${index}`)
          .attr('d', straightSegments.current[index]).transition(transition).attr('d', wadSegments.current[index]);
        const text = d3.select(`#text-${response.id}-${index}`);
        text.attr("textLength", 200).transition(transition).attr("textLength", originalLengths.current[index])
        text.attr("fill-opacity", 1).transition(transition).attr("fill-opacity", 0)
        d3.select(`#dot-${response.id}`)
          .attr("r", 0).transition(d3.transition().duration(300).delay(300)).attr("r", 2.5)
      })
      setUnraveled(false);
      setUnraveled(false);
      setActive(false);
      setHasUnraveled(false);
    }
  }, [collapsed, setHasUnraveled, response]);

  useEffect(() => {
    const drag = ({ x, y }: { x: number, y: number }) => {
      setDropped(false);
      setDotX(x);
      setDotY(y);
    }

    const drop = ({ x, y }: { x: number, y: number }) => {
      const distance = Math.sqrt(((100 - x) * (100 - x)) + ((100 - y) * (100 - y)));
      setDragging(false);
      setDropZoneActive(false);
      setDropped(distance < 50);
    }

    svgRef.current = d3.select(`#svg-${response.id}`);

    svgRef.current.select(`#dot-${response.id}`)
                  .attr("r", 2.5)
                  .attr("fill", color)
                  .style("stroke", "#000")
                  .call(
                    d3.drag()
                      .on("start", () => setDragging(true))
                      .on("drag", drag)
                      .on("end", drop)
                  );
    const svgRefCopy = svgRef.current

    return () => {
      svgRefCopy.remove();
    }
  }, [setDropZoneActive, response, color]);

  return (
    <svg id={`svg-${response.id}`}>
      <circle
        cx={dotX}
        cy={dotY}
        ref={dotRef}
        id={`dot-${response.id}`}
        className={`opacity-${hasUnraveled ? 10 : 100} ${dragging ? "cursor-grabbing" : "cursor-grab"} ${dropped ? "transition-all duration-300" : ""}`}
      />
      <rect id="text-block" x={100} y={100} height={0} width={0} />
      {response.lines.map((line, index) => {
        return (
          <g key={`line-${response.id}-${index}`} className="cursor-pointer">
            <path id={`segment-${response.id}-${index}`} />
            <text>
              <textPath
                id={`text-${response.id}-${index}`}
                fontFamily="VTC Du Bois Narrow, serif"
                className="font-bold"
                fontSize={6}
              ></textPath>
            </text>
          </g>
        )
      })}
    </svg>
  );
}

export default Response;