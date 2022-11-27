import type { ReactNodeLike } from "prop-types";

interface Props {
  children?: ReactNodeLike;
  className?: string;
}

export default function Column({ children, className }: Props) {
  return (
    <div className={`column-grid-wrapper w-1/2 space-y-5 ${className ?? ""}`}>
      {children}
    </div>
  );
}
