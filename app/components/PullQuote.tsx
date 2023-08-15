import type { ReactNodeLike } from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
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
  const [inColumn, setInColumn] = useState<boolean>(false);
  const [classList, setClassList] = useState<string | undefined>(undefined);
  const asideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setInColumn(
      Boolean(asideRef.current?.parentElement?.classList.contains('md:bias-1/2'))
    );
  }, []);

  useEffect(() => {
    const size = inColumn
                 ? "w-screen md:w-auto -mx-12 md:mx-auto p-12 md:py-8 my-6 md:my-0"
                 : "w-screen p-12 md:p-16 my-6 md:my-20"

    setClassList(`flex flex-col items-center ${size} bg-${backgroundColor} text-${primaryTextColor} ${className ?? ""}`)
  }, [inColumn, className, backgroundColor, primaryTextColor]);

  return (
    <aside
      ref={asideRef}
      className={classList}
    >
      <blockquote className="w-full md:w-2/3">
        <p className="my-0">
          <span className="font-duboisNarrow text-xl lg:text-2xl tracking-wide block">
            {title}
          </span>
          <span className="font-dubois text-l lg:text-xl pt-4 block">
            {subtitle}
          </span>
        </p>
      </blockquote>
        {children &&
          <p className="w-full md:w-2/3 mt-0">
            {children}
          </p>
        }
    </aside>
  );
}

/*
Saving this for future look into adding quotation marks. The font size needs work.

  return (
    <aside
      className={`${ width ?? "w-screen"} bg-${backgroundColor} text-${primaryTextColor} flex flex-col items-center ${className ?? "p-12 md:p-16 my-6 md:my-20"}`}
    >
      <blockquote className="w-full md:w-2/3 xl:w-2/5">
        <p className="flex justify-center">
          <span className="font-serif flex-none block text-9xl px-8">"</span>
          <span className="grow block">
            <span className="font-duboisNarrow text-lg md:text-3xl tracking-wide block">
              {title}
            </span>
            <span className="font-dubois text-sm md:text-xl py-4 block">
              {subtitle}
            </span>
          </span>
          <span className="font-serif flex-none block text-9xl px-8 self-end">"</span>
        </p>
      </blockquote>
        {children &&
          <p>
            {children}
          </p>
        }
    </aside>
  );
*/
