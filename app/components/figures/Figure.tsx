import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import FigureModal from "./FigureModal";
import Picture from "./Picture";
import type { ReactElement } from "react";
import type { TFigure } from "~/types/figureType";

interface Props {
  figure?: TFigure;
  figures?: Array<TFigure>;
  className?: string;
  imageClassName?: string;
  captionClassName?: string;
  groupCaption?: ReactElement;
  id?: string;
  showCaption?: boolean;
  modalClassNames?: string[];
}

export const Caption = ({
  figure,
  className,
}: {
  figure?: TFigure;
  className?: string;
}) => {
  if (!figure?.caption && !figure?.creditLine) return null;

  return (
    <figcaption
      className={`font-neueMontreal text-xs md:text-sm leading-5 text-left mt-6 md:mt-8 mb-6 md:mb-8 col-span-full ${
        className ?? ""
      }`}
    >
      {figure.caption && (
        <span dangerouslySetInnerHTML={{ __html: figure.caption }} />
      )}
      {figure.creditLine && (
        <span dangerouslySetInnerHTML={{ __html: ` ${figure.creditLine}` }} />
      )}
    </figcaption>
  );
};

const SensitiveOverlay = ({ figure }: { figure: TFigure }) => {
  const { hideSensitiveState } = useContext(ChapterContext);
  if (!hideSensitiveState || !figure.sensitive) return null;

  return (
    <div className="absolute p-6 z-10 text-xl font-neueMontreal">
      {figure.sensitiveAltText}
    </div>
  );
};

export default function Figure({
  figure,
  figures,
  className,
  captionClassName,
  groupCaption,
  imageClassName,
  id,
  showCaption = true,
  modalClassNames = [],
}: Props) {
  const { hideSensitiveState } = useContext(ChapterContext);

  if (figures) {
    const groupId = id ?? `fig-${figures[0]?.fileName}`;
    return (
      <div
        className={className ?? "flex flex-col space-y-4"}
        id={groupId}
      >
        {figures.map((figure, index) => (
          <FigureModal
            key={figure.fileName}
            figure={figure}
            id={`${groupId}-${index}`}
            className={modalClassNames[index]}
          >
            <SensitiveOverlay figure={figure} />
            <Picture figure={figure} className={imageClassName} />
          </FigureModal>
        ))}
        {groupCaption ? (
          <figcaption
            className={`font-neueMontreal text-sm leading-tight text-left mt-3 md:mt-6 mb-6 md:mb-8 col-span-full ${
              captionClassName ?? ""
            }`}
          >
            {groupCaption}
          </figcaption>
        ) : (
          <Caption figure={figures[0]} />
        )}
      </div>
    );
  }

  if (figure) {
    return (
      <FigureModal
        figure={figure}
        className={className}
        id={id ?? `fig-${figure.fileName}`}
      >
        <SensitiveOverlay figure={figure} />
        <Picture
          figure={figure}
          className={`transition-all duration-1000 ${imageClassName ?? ""} ${
            hideSensitiveState && figure.sensitive
              ? "blur-md border-2 border-offblack"
              : ""
          }`}
        />
        {showCaption && (
          <Caption figure={figure} className={captionClassName} />
        )}
      </FigureModal>
    );
  }

  return null;
}
