import { ReactNodeLike } from "prop-types";

interface Props {
  children: ReactNodeLike;
  className?: string;
}

// Makes item full bleed, i.e. full width. Only use as a direct
// child of a SingleColumnLayout component
export default function FullBleed({ children, className }: Props) {
  return <div className={`full-bleed ${className ?? ""}`}>{children}</div>;
}
