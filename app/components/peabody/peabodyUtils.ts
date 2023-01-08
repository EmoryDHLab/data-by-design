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
