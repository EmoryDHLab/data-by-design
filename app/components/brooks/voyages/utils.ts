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

const minEmbark = 1;
const maxEmbark = 1545;
const minDuration = 86400;
const maxDuration = 273369600;
const maxWidth = 50;
const maxOverlap = 30;
const distanceLeft = 100;
const distanceRight = 100;

const curveSeed = (duration: number, p5: p5) => {
  return p5.random(
    -distanceLeft - p5.map(duration, minDuration, maxDuration, 0, maxOverlap),
    distanceRight + p5.map(duration, minDuration, maxDuration, 0, maxOverlap)
  );
};

const vertexSeed = (totalPeople: number, mortalityRate: number, p5: p5) => {
  return p5.random(
    p5.map(
      totalPeople * (1 - mortalityRate),
      minEmbark,
      maxEmbark,
      0,
      maxWidth
    ),
    p5.map(totalPeople, minEmbark, maxEmbark, 0, maxWidth)
  );
};

export const generateSeeds = (voyage: TVoyage, p5: p5) => {
  const curveSeeds = {};
  const vertexSeeds = {};
  for (const index in Array.from({ length: 7 })) {
    // @ts-ignore
    curveSeeds[`c${parseInt(index) + 1}`] = curveSeed(voyage.duration, p5);
    // @ts-ignore
    vertexSeeds[`c${parseInt(index) + 1}`] = vertexSeed(
      voyage.totalPeople,
      voyage.mortalityRate,
      p5
    );
  }
  return { curveSeeds, vertexSeeds };
};
