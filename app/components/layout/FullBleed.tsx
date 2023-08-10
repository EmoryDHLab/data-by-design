import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

// Makes item full bleed, i.e. full width. Only use as a direct
// child of a SingleColumnLayout component
export default function FullBleed({ children, className }: Props) {
  return (
    <div className={`full-bleed items-center ${className ?? ""}`}>
      {children}
    </div>
  );
}
