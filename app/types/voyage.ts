import type p5 from "p5";

export type Seed = {
  c1: number;
  c2: number;
  c3: number;
  c4: number;
  c5: number;
  c6: number;
  c7: number;
};

export type TVoyage = {
  id: number;
  totalPeople: number;
  year: number;
  duration: number;
  mortalityRate: number;
  resistanceReported: boolean;
  rgb: Array<number>;
  curveSeeds: Seed;
  vertexSeeds: Seed;
};

export type TVoyageYear = {
  curveSeed: Seed;
  distanceLeft: number;
  distanceRight: number;
  duration: number;
  height: number;
  id: number;
  lerpAmount: number;
  maxDuration: number;
  maxEmbark: number;
  maxYear: number;
  minDuration: number;
  minEmbark: number;
  minYear: number;
  mortalityRate: number;
  nonResistanceStrokeWidth: number;
  p5: p5;
  resistanceReported: boolean;
  rgb: Array<number>;
  shapeSeed: number;
  totalPeople: number;
  vertexSeed: Seed;
  width: number;
  year: number;
  updateTransition: (
    lerpAmount: number,
    nonResistanceStrokeWidth: number,
    shapeSeed: number
  ) => void;
  updateMinMax: (
    minYear: number,
    maxYear: number
  ) => void;
  show: () => void;
  updateP5Instance: (p5: p5) => void;
};
