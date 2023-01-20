import { ReactNode } from "react";

interface Props {
  quote: ReactNode;
  byline: string;
}

export default function Quotation({ quote, byline }: Props) {
  return (
    <div className="p-10 space-y-4">
      <div className="font-dubois">{quote}</div>
      <div className="font-sans text-lg text-gray-500">{byline}</div>
    </div>
  );
}
