import { useEffect, useRef } from "react";
import * as d3 from "d3";
import type { Dispatch, SetStateAction } from "react";
import type { ResponseData } from "../types";

interface Props {
  response: ResponseData;
  activeResponse: string | undefined;
  setActiveResponse: Dispatch<SetStateAction<string | undefined>>;
  color: string;
}

function ResponseDot({ response, color, activeResponse, setActiveResponse}: Props) {
  const dotRef = useRef<d3.Selection<SVGCircleElement, null, HTMLElement, any> | undefined>(undefined);

  useEffect(() => {
    dotRef.current = d3.select(`#dot-${response.id}`);
    const transition = d3.transition().duration(300);
    if (activeResponse && activeResponse === response.id) {
        dotRef.current?.attr("r", 2.5).transition(transition).attr("r", 0);
    } else {
      // console.log("🚀 ~ file: ResponseDot.tsx:20 ~ useEffect ~ activeResponse:", activeResponse)
      dotRef.current?.attr("r", dotRef.current?.attr("r")).transition(transition).attr("r", 2.5);
      // dotRef.current?.attr("fill-opacity", 1).transition(transition).attr("fill-opacity", 0.5);
      // dotRef.current?.attr("stroke-opacity", 1).transition(transition).attr("stroke-opacity", 0.5);
    }

    // return() => {
    //   d3.select(`#response-dot-${response.id} > *`).remove();
    // }

  }, [activeResponse, response]);

  return (
    <svg
      id={`response-dot-${response.id}`}
    >
      <circle
        id={`dot-${response.id}`}
        cx={response.x}
        cy={response.y}
        stroke="#000"
        strokeOpacity={1}
        fill={color}
        r={2.5}
        className="opacity-100 cursor-pointer focus:stroke-amber-400 focus:outline-0 focus:outline-none"
        onClick={() => setActiveResponse(response.id)}
        role="button"
        fillOpacity={1}
        tabIndex={0}
      />
    </svg>
  );
}

export default ResponseDot;