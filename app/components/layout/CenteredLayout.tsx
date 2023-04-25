import { ReactNodeLike } from "prop-types";

interface Props {
  children: ReactNodeLike;
  className?: string;
}

// Implements a full bleed grid: https://www.joshwcomeau.com/css/full-bleed/
export default function CenteredLayout({
  children,
  className,
  ...props
}: Props) {
  return (
    <div
      className={`grid-wrapper mx-12 md:mx-24 md:py-5 ${className ?? ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
