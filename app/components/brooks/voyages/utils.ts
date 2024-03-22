import type p5 from "p5";
import type { TVoyage } from "~/types/voyage";

const colors = [
  [86, 146, 138], // green
  [238, 201, 159], // tan
  [222, 0, 59], // red
  [58, 15, 49], // purple
  [77, 76, 132], // blue
];

export const randomColor = (fullColor: boolean) => {
  if (fullColor) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Return black;
  return [0, 0, 0];
};

const maxEmbark = 1545;
const minDuration = 86400;
const maxDuration = 273369600;
const maxWidth = 50;
const maxOverlap = 300;
const distanceLeft = 12;
const distanceRight = 12;

const calcPoints = (duration: number, p5: p5) => {
  return p5.random(
    -distanceLeft - p5.map(duration, minDuration, maxDuration, 0, maxOverlap),
    distanceRight + p5.map(duration, minDuration, maxDuration, 0, maxOverlap)
  );
};

const calcOffsets = (
  totalPeople: number,
  survivors: number,
  deathsPerLeg: number,
  p5: p5,
  index: number
) => {
  const currentTotalPeople = totalPeople - deathsPerLeg * index;
  const voyageWidth = p5.map(totalPeople, 0, maxEmbark, 0, maxWidth);
  return p5.map(currentTotalPeople, survivors, totalPeople, 0, voyageWidth);
};

export const generatePoints = (voyage: TVoyage, p5: p5) => {
  const points = {};
  const offsets = {};
  const deaths = voyage.totalPeople * voyage.mortalityRate;
  const survivors = voyage.totalPeople - deaths;
  const deathsPerLeg = deaths / 7;
  for (const index in Array.from({ length: 7 })) {
    // @ts-ignore
    points[`c${parseInt(index) + 1}`] = calcPoints(voyage.duration, p5);
    // @ts-ignore
    offsets[`c${parseInt(index) + 1}`] = calcOffsets(
      voyage.totalPeople,
      survivors,
      deathsPerLeg,
      p5,
      parseInt(index)
    );
  }
  return { points, offsets };
};
