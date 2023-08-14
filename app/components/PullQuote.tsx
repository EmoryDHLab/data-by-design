import type { ReactNodeLike } from "prop-types";
import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";

interface Props {
  title: string;
  subtitle: string;
  children?: ReactNodeLike;
  className?: string;
  width?: string;
}

export default function PullQuote({ title, subtitle, children, className, width }: Props) {
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);
  return (
    <aside
      className={`${ width ?? "w-screen"} bg-${backgroundColor} text-${primaryTextColor} flex flex-col items-center ${className ?? "p-12 md:p-16 my-6 md:my-20"}`}
    >
      <blockquote className="w-full md:w-2/3 xl:w-2/5">
        <p>
          <span className="font-duboisNarrow text-lg md:text-3xl tracking-wide block">
            {title}
          </span>
          <span className="font-dubois text-sm md:text-xl py-4 block">
            {subtitle}
          </span>
        </p>
      </blockquote>
        {children &&
          <p>
            {children}
          </p>
        }
    </aside>
  );
}
