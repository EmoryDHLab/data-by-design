import * as d3 from "d3";
import descriptionFigures from "~/data/figures/description.json";
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
  ).filter((figures) => figures[1].frontPage);

  const description: TFilteredFigures[] = Object.entries(
    descriptionFigures
  ).filter((figures) => figures[1].frontPage);
  const allDubois: TFilteredFigures[] = Object.entries(duboisFigures).filter(
    (figures) => figures[1].frontPage
  );
  const peabody: TFilteredFigures[] = Object.entries(peabodyFigures).filter(
    (figures) => figures[1].frontPage
  );
  const playfair: TFilteredFigures[] = Object.entries(playfairFigures).filter(
    (figures) => figures[1].frontPage
  );

  const shuffledDubois = d3.shuffle(allDubois);
  const dubois: TFilteredFigures[] = shuffledDubois.slice(
    0,
    allDubois.length / 8
  );

  const filteredFigures: TFigure[] = Object.values(
    Object.fromEntries([
      ...description,
      ...dubois,
      ...peabody,
      ...playfair,
      ...shanawdithit,
    ])
  );

  return filteredFigures || [];
};

export const randomTimelineImages = (imageCount: number) => {
  const shuffled = d3.shuffle(timelineImages());
  const start = Math.floor(Math.random() * imageCount);
  return shuffled.slice(start, start + imageCount);
};
