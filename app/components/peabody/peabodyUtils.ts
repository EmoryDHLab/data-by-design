import eventData from "~/data/peabody/eventData.json";
import type { PeabodyEvent } from "~/types/peabody";

export function getEventXFromIndex(index: number, size?: number) {
  return (index % 3) * (size ?? 30);
}

export function getEventYFromIndex(index: number, size?: number) {
  return Math.floor(index / 3) * (size ?? 30);
}

export const YEAR_WIDTH = 9;

export function getYearXFromIndex(index: number, width?: number) {
  let column = index % 10;
  return 3 + column * (width ?? YEAR_WIDTH) + (column > 4 ? 3 : 0);
}

export function getYearYFromIndex(index: number, width?: number) {
  let row = Math.floor(index / 10);
  return 3 + row * (width ?? YEAR_WIDTH) + (row > 4 ? 3 : 0);
}

export type Actor = string;

export type YearSquare = (Actor[] | null)[];

export type SquareData = (YearSquare | null)[];

export interface HighlightedElement {
  elementIndex: number;
  polygonIndex?: number;
}

// Coordinates for rendering various polygon combos in an event square
const TWO_POLYGONS = ["0, 0 30, 0 0, 30", "0, 30 30, 30 30, 0"];
const THREE_POLYGONS = [
  "0, 0 30, 0 15, 15",
  "0, 0 0, 30 15, 15",
  "0, 30 30, 30 30, 0",
];
const FOUR_POLYGONS = [
  "0, 0, 15, 0, 0, 30",
  "0, 30, 15, 30, 15, 0",
  "15, 0, 30, 0, 15, 30",
  "15, 30, 30, 30, 30, 0",
];

const THREE_POLYGONS_SPLIT = [
  "0, 0 30, 0 15, 15",
  "0, 0 0, 30 15, 15",
  "15, 15 30, 0 30, 30",
  "15, 15 0, 30 30, 30",
];

const SQUARE = [
  "0 0, 0 30, 30 30, 30, 0"
]

export const POLYGONS = [
  SQUARE,
  TWO_POLYGONS,
  THREE_POLYGONS,
  FOUR_POLYGONS,
  THREE_POLYGONS_SPLIT,
];

export const getCenturyEvents = ((century: number) => {
  return (Object.keys(eventData.events).map((year) => {
    if (parseInt(year) >= century + 1 && parseInt(year) <= century + 100) {
        return (eventData.events as {[key: string]: Array<PeabodyEvent | {}>})[year].flat();
    }
    return undefined;
  }) as Array<PeabodyEvent>).filter(Boolean).flat();
});

export const strokeDasharray = (index: number, isVertical: boolean = false) => {
  if (isVertical) {
    switch(index) {
      case 8:
        return "top";
      default:
        return "middle";
    }
  }
  switch (index) {
    case 0:
      return "nw";
    case 1:
      return "n";
    case 2:
      return "ne";
    case 3:
      return "w";
    case 4:
      return "c";
    case 5:
      return "e";
    case 6:
      return "sw";
    case 7:
      return "s";
    case 8:
      return "se";
  }
};
