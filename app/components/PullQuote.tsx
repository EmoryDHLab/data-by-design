import type { ReactNodeLike } from "prop-types";
import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";

interface Props {
  title: string;
  subtitle: string;
  children?: ReactNodeLike;
}

export default function PullQuote({ title, subtitle, children }: Props) {
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);
  return (
    <div
      className={`bg-${backgroundColor} text-${primaryTextColor} p-12 md:p-16 flex flex-col items-center my-6 md:my-20`}
    >
      <div className="max-w-[1000px]">
        <div className="font-duboisNarrow text-xl tracking-wide lg:text-xl xl:text-3xl ">
          <p>
            <span>{title}</span>
          </p>
        </div>
        <div className="font-dubois text-sm lg:text-l xl:text-lg py-4">
          <p>
            <span>{subtitle}</span>
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}
