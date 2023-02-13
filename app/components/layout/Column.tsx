import type { ReactNodeLike } from "prop-types";

interface Props {
  children?: ReactNodeLike;
  className?: string;
  shouldPin?: boolean;
}

export default function Column({ children, className, shouldPin }: Props) {

  return (
    <div className={`${className ?? ""} h-full bias-1/2 w-1/2 space-y-5 ${shouldPin ? "sticky top-[60px]" : ""}`}>
      {children}
    </div>
  );
}
