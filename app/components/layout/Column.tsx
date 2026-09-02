import { useContext } from "react";
import type { ReactNode } from "react";
import { ChapterContext } from "~/chapterContext";

interface Props {
  children?: ReactNode;
  className?: string;
  shouldPin?: boolean;
}

export default function Column({ children, className, shouldPin }: Props) {
  const { disclosure } = useContext(ChapterContext);
  return (
    <div
      data-bias-column
      className={`${
        className ?? ""
      } h-full w-full bias-full md:bias-1/2 md:w-1/2 md:py-5 my-6 md:my-0 ${
        shouldPin ? `md:sticky ${disclosure ? "top-32" : "top-12"}` : ""
      }`}
    >
      {children}
    </div>
  );
}
