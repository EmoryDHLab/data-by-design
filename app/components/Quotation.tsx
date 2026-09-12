import type { ReactNode } from "react";

interface Props {
  quote: ReactNode;
  byline?: string | ReactNode;
}

export default function Quotation({ quote, byline }: Props) {
  return (
    <blockquote className="quotation p-10 leading-7 tracking-wide	space-y-4 opacity-70	">
      {/* The negative indent pulls the opening quotation mark into the margin
          so the first line of prose aligns with the lines beneath it. */}
      <div className="font-power indent-[-0.45em]">
        <q>{quote}</q>
      </div>
      <div className="font-sans text-base text-gray-500">{byline}</div>
    </blockquote>
  );
}
