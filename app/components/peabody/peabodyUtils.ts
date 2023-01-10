export function getEventXFromIndex(index: number) {
  return (index % 3) * 30;
}

export function getEventYFromIndex(index: number) {
  return Math.floor(index / 3) * 30;
}

export const YEAR_WIDTH = 9;

export function getYearXFromIndex(index: number) {
  let column = index % 10;
  return 3 + column * YEAR_WIDTH + (column > 4 ? 3 : 0);
}

export function getYearYFromIndex(index: number) {
  let row = Math.floor(index / 10);
  return 3 + row * YEAR_WIDTH + (row > 4 ? 3 : 0);
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

export const POLYGONS = [
  undefined,
  TWO_POLYGONS,
  THREE_POLYGONS,
  FOUR_POLYGONS,
  THREE_POLYGONS_SPLIT,
];
