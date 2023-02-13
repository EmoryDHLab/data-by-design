import type { ReactNodeLike } from "prop-types";

interface Props {
  children: ReactNodeLike;
  className?: string;
}

export default function TwoColumnLayout({ children, className }: Props) {
  return (
    <div className={`flex-none md:flex justify-between mx-12 md:mx-24 ${className ?? ""}`}>{children}</div>
  );
}
