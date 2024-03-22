import type p5 from "p5";

export type TPoint = {
  c1: number;
  c2: number;
  c3: number;
  c4: number;
  c5: number;
  c6: number;
  c7: number;
};

export type TVoyageData = {
  id: number;
  totalPeople: number;
  year: number;
  duration: number;
  mortalityRate: number;
  resistanceReported: boolean;
  rgb: Array<number>;
  points: TPoint;
  offsets: TPoint;
};

export type TVoyage = {
  points: TPoint;
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
  offsets: TPoint;
  width: number;
  year: number;
  updateMinMax: (minYear: number, maxYear: number) => void;
  show: () => void;
  updateP5Instance: (p5: p5) => void;
};
