import {useContext, useEffect, useState } from "react";
import { EyeSlashIcon } from '@heroicons/react/24/outline'
import { ChapterContext } from "~/chapterContext";
import FigureModal from "./FigureModal";
import type { TFigure } from "~/types/figureType";
import Picture from "./Picture";
import type { ReactElement } from "react";

interface Props {
  figure?: TFigure;
  figures?: Array<TFigure>;
  className?: string;
  imageClassName?: string;
  captionClassName?: string;
  groupCaption?: ReactElement;
  id?: string;
}

export const Caption = ({ figure, className }: Props) => {
  return (
    <figcaption
      className={`font-dubois md:text-center text-left mt-3 md:mt-6 mb-6 md:mb-12 col-span-full ${className ?? ""}`}
      dangerouslySetInnerHTML={{
        __html: `<p>${figure?.caption}<p>${figure?.creditLine ? `<p>${figure?.creditLine}</p>` : ""}`,
      }}
    />
  )
}

export default function FigureObj({
  figure,
  figures,
  className,
  captionClassName,
  groupCaption,
  imageClassName,
  id,
}: Props) {
  const { hideSensitiveState, accentColor, backgroundColor } = useContext(ChapterContext);
  const [hide, setHide] = useState<boolean>(Boolean(hideSensitiveState && figure?.sensitive));

  useEffect(() => {
    setHide(Boolean(hideSensitiveState && figure?.sensitive));
  }, [setHide, hideSensitiveState, figure]);

  if (figures) {
    return (
      <div className={className ?? ""} id={id ?? `fig-${figures[0].fileName}`}>
        {figures.map((figure) => {
          return (
            <FigureModal key={`${figure.fileName}`} figure={figure}>
              <Picture figure={figure} />
            </FigureModal>
          )
        })}
        {groupCaption &&
          <figcaption
            className={`font-dubois md:text-center text-left mt-3 md:mt-6 mb-6 md:mb-12 col-span-full ${captionClassName ?? ""}`}
          >
            {groupCaption}
          </figcaption>
        }
        {!groupCaption &&
          <Caption figure={figures[0]} />
        }
      </div>
    );
  } else if (figure) {
    return (
      <FigureModal figure={figure} hide={hide} className={className}>
        <div id={id ?? `fig-${figure.fileName}`} className={`grid grid-cols-1 place-items-center border-${hide ? "4" : "0"} border-${backgroundColor} bg-${accentColor}`}>
          <EyeSlashIcon
            className={`h-36 absolute my-auto mx-auto transition-[stroke-opacity] stroke-${backgroundColor}`}
            strokeOpacity={hide ? 0.75 : 0}
            role="presentation"
          />
        </div>
        <Picture figure={figure} className={imageClassName} />
        <Caption figure={figure} className={captionClassName} />
      </FigureModal>
    );
  }

  return <></>
}
