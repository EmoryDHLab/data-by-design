import type { ReactNodeLike } from "prop-types";

interface Props {
  children?: ReactNodeLike;
  className?: string;
  shouldPin?: boolean;
}

export default function Column({ children, className, shouldPin }: Props) {
  return (
    <div
      className={`${
        className ?? ""
      } h-full w-full bias-full md:bias-1/2 md:w-1/2 md: py-5 my-6 md:my-0 ${
        shouldPin ? "md:sticky top-[calc(48px+1.5rem)]" : ""
      }`}
    >
      {children}
    </div>
  );
}
