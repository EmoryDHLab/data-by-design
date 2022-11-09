import type { ReactNodeLike } from "prop-types";

interface Props {
  children: ReactNodeLike;
  className?: string;
}

export default function TwoColumnLayout({ children, className }: Props) {
  return (
    <div className={`flex max-w-[1536px] ${className ?? ""}`}>{children}</div>
  );
}
