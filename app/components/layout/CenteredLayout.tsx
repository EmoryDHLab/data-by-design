import { ReactNodeLike } from "prop-types";

interface Props {
  children: ReactNodeLike;
  className?: string;
}

// Implements a full bleed grid: https://www.joshwcomeau.com/css/full-bleed/
export default function CenteredLayout({ children, className }: Props) {
  return (
    <div className={`grid-wrapper md:py-5 ${className ?? ""}`}>
      {children}
    </div>
  );
}
