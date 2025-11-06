import * as d3 from "d3";
import descriptionFigures from "~/data/figures/data.json";
import powerFigures from "~/data/figures/change.json";
import processFigures from "~/data/figures/knowledge.json";
import imageFigures from "~/data/figures/image.json";
import peopleFigures from "~/data/figures/people.json";
import type { TFigure } from "~/types/figureType";

export type TFilteredFigures = [string, TFigure];

export enum TimelineType {
  Draggable,
  Ordered,
}

const filterFigures = (figures: TFilteredFigures) => {
  return figures[1].frontPage && figures[1].width;
};

export const timelineImages = () => {
  const people: TFilteredFigures[] =
    Object.entries(peopleFigures).filter(filterFigures);

  const description: TFilteredFigures[] =
    Object.entries(descriptionFigures).filter(filterFigures);

  const allDubois: TFilteredFigures[] =
    Object.entries(powerFigures).filter(filterFigures);
  const process: TFilteredFigures[] =
    Object.entries(processFigures).filter(filterFigures);
  const playfair: TFilteredFigures[] =
    Object.entries(imageFigures).filter(filterFigures);

  const shuffledDubois = d3.shuffle(allDubois);
  const power: TFilteredFigures[] = shuffledDubois.slice(
    0,
    allDubois.length / 8
  );

  const filteredFigures: TFigure[] = Object.values(
    Object.fromEntries([
      ...description,
      ...power,
      ...process,
      ...playfair,
      ...people,
    ])
  );

  return filteredFigures || [];
};

export const randomTimelineImages = (imageCount: number) => {
  const shuffled = d3.shuffle(timelineImages());
  const start = Math.floor(Math.random() * imageCount);
  return shuffled.slice(start, start + imageCount);
};
