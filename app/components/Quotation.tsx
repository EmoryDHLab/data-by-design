import type { ReactNode } from "react";

interface Props {
  quote: ReactNode;
  byline?: string | ReactNode;
}

export default function Quotation({ quote, byline }: Props) {
  return (
    <blockquote className="p-10 leading-7 tracking-wide	space-y-4 opacity-70	">
      <div className="font-dubois">
        <q>{quote}</q>
      </div>
      <div className="font-sans text-base text-gray-500">{byline}</div>
    </blockquote>
  );
}
