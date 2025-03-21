import type { Dispatch, SetStateAction } from "react";
import type { ResponseData } from "../types";

interface Props {
  response: ResponseData;
  setActiveResponse: Dispatch<SetStateAction<string | undefined>>;
  color: string;
  id: string;
}

function ResponseDot({ response, color, setActiveResponse, id }: Props) {
  return (
    <g id={`response-dot-${response.id}-${id}`}>
      <circle
        id={`dot-${response.id}`}
        cx={response.x}
        cy={response.y}
        stroke="#000"
        strokeOpacity={1}
        fill={color}
        r={5}
        className="opacity-100 cursor-pointer focus:stroke-amber-400 focus:outline-0 focus:outline-none"
        onClick={() => setActiveResponse(response.id)}
        role="button"
        fillOpacity={1}
        tabIndex={0}
      />
    </g>
  );
}

export default ResponseDot;
