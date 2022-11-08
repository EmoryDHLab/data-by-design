import type { ReactNodeLike } from "prop-types";

interface Props {
  children: ReactNodeLike;
  className?: string;
}

export default function Column({ children, className }: Props) {
  return <div className={`w-1/2 ${className ?? ""}`}>{children}</div>;
}
