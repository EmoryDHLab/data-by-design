import { ReactNodeLike } from "prop-types";

interface Props {
  children: ReactNodeLike;
  className?: string;
}

// Implements a full bleed grid: https://www.joshwcomeau.com/css/full-bleed/
export default function FullBleedGrid({ children, className }: Props) {
  return <div className={`grid-wrapper ${className}`}>{children}</div>;
}
