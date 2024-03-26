import type { ReactNodeLike } from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";

interface Props {
  title: string;
  subtitle?: string;
  children?: ReactNodeLike;
  className?: string;
}

export default function PullQuote({
  title,
  subtitle,
  children,
  className,
}: Props) {
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);
  const [classList, setClassList] = useState<string | undefined>(undefined);
  const asideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setClassList(`flex flex-col py-6 md:py-12 md:-ml-4 ${className ?? ""}`);
  }, [className, backgroundColor, primaryTextColor]);

  return (
    <aside ref={asideRef} className={classList}>
      <blockquote className={`border-l-4 border-l-${backgroundColor} md:pl-4`}>
        <p className="my-0">
          <span className="font-neueMontreal text-xl md:text-4xl tracking-tight block">
            {title}
          </span>
          {subtitle && (
            <span className="font-neueMontrealLight text-l lg:text-2xl font-light pt-4 block">
              {subtitle}
            </span>
          )}
        </p>
        {children && <p className="m-0 pt-2">{children}</p>}
      </blockquote>
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
