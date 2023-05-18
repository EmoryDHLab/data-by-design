import { useContext, useEffect, useState } from "react";
import { EyeSlashIcon } from '@heroicons/react/24/outline'
import { ChapterContext } from "~/chapterContext";
import type { ReactNodeLike } from "prop-types";
import type { ChapterFigure } from "~/types/figureType";
import FigureModal from "./FigureModal";

interface Props {
  children?: ReactNodeLike;
  figure: ChapterFigure;
  figures: array[ChapterFigure];
  className?: string;
  loading?: string;
}

export default function FigureObj({
  figure,
  figures,
  className,
  loading,
  children,
}: Props) {
  const { hideSensitiveState, accentColor, backgroundColor } = useContext(ChapterContext);
  const [hide, setHide] = useState<boolean>(hideSensitiveState && figure.sensitive);

  useEffect(() => {
    setHide(hideSensitiveState && figure.sensitive);
  }, [setHide, hideSensitiveState, figure]);

  return (
    <FigureModal figure={figure} hide={hide}>
      <section className={`grid grid-cols-1 place-items-center border-${hide ? "4" : "0"} border-${backgroundColor} bg-${accentColor}`}>
        <EyeSlashIcon
          className={`h-36 absolute my-auto mx-auto transition-[stroke-opacity] stroke-${backgroundColor}`}
          strokeOpacity={hide ? 0.75 : 0}
        />
        <img
          className={`drop-shadow-lg transition-opacity opacity-${hide ? "0" : "100"}`}
          src={`/images/${figure.chapter}/${figure.fileName}`}
          alt={figure.altText}
          title={figure.title}
          draggable={!hide}
        />
      </section>
      <figcaption className="font-dubois md:text-center text-left mt-3 md:mt-6 mb-6 md:mb-12 col-span-full">
        <span
          dangerouslySetInnerHTML={{
            __html: figure.caption,
          }}
        />
        {figure.creditLine &&
          <span className="pl-1"
            dangerouslySetInnerHTML={{
              __html: figure.creditLine,
            }}
          />
        }
      </figcaption>
    </FigureModal>
  );
};
