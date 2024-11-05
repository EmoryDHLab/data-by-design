import * as d3 from "d3";
import descriptionFigures from "~/data/figures/description.json";
import duboisFigures from "~/data/figures/dubois.json";
import peabodyFigures from "~/data/figures/peabody.json";
import playfairFigures from "~/data/figures/playfair.json";
import shanawdithitFigures from "~/data/figures/shanawdithit.json";
import type { TFigure } from "~/types/figureType";

export type TFilteredFigures = [string, TFigure];

export enum TimelineType {
  Draggable,
  Ordered,
}

const filterFigures = (figures: TFilteredFigures) => {
  console.log("🚀 ~ filterFigures ~ figures:", figures);
  return figures[1].frontPage && figures[1].width;
};

export const timelineImages = () => {
  const shanawdithit: TFilteredFigures[] =
    Object.entries(shanawdithitFigures).filter(filterFigures);

  const description: TFilteredFigures[] =
    Object.entries(descriptionFigures).filter(filterFigures);

  const allDubois: TFilteredFigures[] =
    Object.entries(duboisFigures).filter(filterFigures);
  const peabody: TFilteredFigures[] =
    Object.entries(peabodyFigures).filter(filterFigures);
  const playfair: TFilteredFigures[] =
    Object.entries(playfairFigures).filter(filterFigures);

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
