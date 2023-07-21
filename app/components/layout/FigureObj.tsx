import { useContext, useEffect, useState } from "react";
import { EyeSlashIcon } from '@heroicons/react/24/outline'
import { ChapterContext } from "~/chapterContext";
import FigureModal from "./FigureModal";
import type { ReactNodeLike } from "prop-types";
import type { ChapterFigure } from "~/types/figureType";
import Picture from "./Picture";

interface Props {
  children?: ReactNodeLike;
  figure: ChapterFigure;
  figures: array[ChapterFigure];
  className?: string;
  captionClassName?: string;
  loading?: string;
  figureTransforms?: string;
}

export const Caption = ({ figure, className }) => {
  return (
    <figcaption
      className={`font-dubois md:text-center text-left mt-3 md:mt-6 mb-6 md:mb-12 col-span-full ${className ?? ""}`}
      dangerouslySetInnerHTML={{
        __html: `<p>${figure.caption}<p>${figure.creditLine ? `<p>${figure.creditLine}</p>` : ""}`,
      }}
    />
  )
}

export default function FigureObj({
  figure,
  figures,
  className,
  loading,
  children,
  figureTransforms,
  captionClassName,
}: Props) {
  const { hideSensitiveState, accentColor, backgroundColor } = useContext(ChapterContext);
  const [hide, setHide] = useState<boolean>(hideSensitiveState && figure.sensitive);

  useEffect(() => {
    setHide(hideSensitiveState && figure.sensitive);
  }, [setHide, hideSensitiveState, figure]);

  if (figures) {
    return (
      <figure className={className ?? ""}>
        {figures.map((figure) => {
          return (
            <FigureModal key={figure.fileName} figure={figure}>
              <Picture figure={figure} />
            </FigureModal>
          )
        })}
        <Caption figure={figures[0]} />
      </figure>
    );
  }

  return (
    <FigureModal figure={figure} hide={hide} className={className}>
      <section className={`grid grid-cols-1 place-items-center border-${hide ? "4" : "0"} border-${backgroundColor} bg-${accentColor}`}>
        <EyeSlashIcon
          className={`h-36 absolute my-auto mx-auto transition-[stroke-opacity] stroke-${backgroundColor}`}
          strokeOpacity={hide ? 0.75 : 0}
        />
      </section>
      <Picture figure={figure} />
      <Caption figure={figure} className={captionClassName} />
    </FigureModal>
  );
};
