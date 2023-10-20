import brooksFigures from "~/data/figures/brooks.json";
import duboisFigures from "~/data/figures/dubois.json";
import peabodyFigures from "~/data/figures/peabody.json";
import playfairFigures from "~/data/figures/playfair.json";
import shanawdithitFigures from "~/data/figures/shanawdithit.json";
import type { TFigure } from "~/types/figureType";

export type TFilteredFigures = (string | TFigure)[];

export enum TimelineType {
  Draggable,
  Ordered,
}

export const timelineImages = () => {

  const shanawdithit: TFilteredFigures[] = Object.entries(
    shanawdithitFigures
  ).filter((figures) => figures[1].frontPage && figures[1].year);

  const brooks: TFilteredFigures[] = Object.entries(brooksFigures).filter(
    (figures) => figures[1].frontPage && figures[1].year
  );
  const dubois: TFilteredFigures[] = Object.entries(duboisFigures).filter(
    (figures) => figures[1].frontPage && figures[1].year
  );
  const peabody: TFilteredFigures[] = Object.entries(peabodyFigures).filter(
    (figures) => figures[1].frontPage && figures[1].year
  );
  const playfair: TFilteredFigures[] = Object.entries(
    playfairFigures
  ).filter((figures) => figures[1].frontPage && figures[1].year);

  const filteredFigures: TFigure[] = Object.values(
    Object.fromEntries(brooks.concat(dubois, peabody, playfair, shanawdithit))
  );

  return filteredFigures;
};
