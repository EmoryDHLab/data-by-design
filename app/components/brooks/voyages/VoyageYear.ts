import type p5 from "p5";
import type { TVoyage } from "~/types/voyage";

type Seed = {
  c1: number,
  c2: number,
  c3: number,
  c4: number,
  c5: number,
  c6: number,
  c7: number
};

class VoyageYear {
  p5: p5;
  distanceLeft: number;
  distanceRight: number;
  shapeSeed: number;
  minEmbark: number;
  maxEmbark: number;
  minDuration: number;
  maxDuration: number;
  id: number;
  totalPeople: number;
  year: number;
  duration: number;
  mortalityRate: number;
  resistanceReported: boolean;
  lerpAmount: number;
  rgb: Array<number>;
  minYear: number;
  maxYear: number;
  height: number;
  width: number;
  nonResistanceStrokeWidth: number;
  curveSeeds: Seed;
  vertexSeeds: Seed;
  allEqual: boolean;

  constructor(
    p5: p5,
    voyage: TVoyage,
    minYear: number,
    maxYear: number,
    height: number,
    width: number,
    nonResistanceStrokeWidth: number,
    lerpAmount: number,
    allEqual: boolean = false
  ) {
    this.p5 = p5;
    ({
      id: this.id,
      totalPeople: this.totalPeople,
      mortalityRate: this.mortalityRate,
      year: this.year,
      resistanceReported: this.resistanceReported,
      duration: this.duration,
      rgb: this.rgb,
      curveSeeds: this.curveSeeds,
      vertexSeeds: this.vertexSeeds,
    } = voyage);

    this.minYear = minYear;
    this.maxYear = maxYear;
    this.height = height;
    this.width = width;
    this.nonResistanceStrokeWidth = nonResistanceStrokeWidth;
    this.lerpAmount = lerpAmount;
    this.allEqual = allEqual;

    this.distanceLeft = 10;
    this.distanceRight = 10;
    this.shapeSeed = Math.floor(Math.random() * (293) + 1565);
    this.minEmbark = 1;
    this.maxEmbark = 1545;
    this.minDuration = 86400;
    this.maxDuration = 273369600;
  }

  updateP5Instance(p5: p5) {
    this.p5 = p5;
  }

  updateTransition(
    lerpAmount: number,
    nonResistanceStrokeWidth: number,
    shapeSeed: number
  ) {
    this.lerpAmount = lerpAmount;
    this.nonResistanceStrokeWidth = nonResistanceStrokeWidth;
    this.shapeSeed = shapeSeed;
  }

  updateMinMax(
    minYear: number,
    maxYear: number
  ) {
    this.minYear = minYear;
    this.maxYear = maxYear;
  }

  show(){
    this.p5.randomSeed(this.shapeSeed);
    const yStart = - this.height / 2;
    this.p5.push();
    this.p5.translate(
      this.p5.map(
        this.year,
        this.minYear,
        this.maxYear,
        40,
        this.width
      ),
      this.height / 2
    );

    // Add color
    if (this.resistanceReported || this.allEqual) {
      this.p5.strokeWeight(0.5);
      // this.p5.colorMode(this.p5.RGB);
      this.p5.fill(`rgba(${[...this.rgb, 0.6]})`);
    } else {
      this.p5.strokeWeight(this.nonResistanceStrokeWidth);
      this.p5.strokeWeight(0.5);
      this.p5.stroke([0, 0, 0])
      this.p5.fill([250, 241, 233]);
    }

    this.p5.beginShape();
    this.p5.curveVertex(this.curveSeeds.c6, yStart - 300);
    this.p5.curveVertex(this.curveSeeds.c5, yStart - 300);
    this.p5.curveVertex(this.curveSeeds.c1, yStart + (this.height / 5) * 1);
    this.p5.curveVertex(this.curveSeeds.c2, yStart + (this.height / 5) * 2);
    this.p5.curveVertex(this.curveSeeds.c3, yStart + (this.height / 5) * 3);
    this.p5.curveVertex(this.curveSeeds.c4, yStart + (this.height / 5) * 4);
    this.p5.curveVertex(this.curveSeeds.c7, this.height / 2 + 500);

    this.p5.curveVertex(this.curveSeeds.c7 + this.vertexSeeds.c7, this.height / 2 + 500);
    this.p5.curveVertex(this.curveSeeds.c4 + this.vertexSeeds.c4, yStart + (this.height / 5) * 4);
    this.p5.curveVertex(this.curveSeeds.c3 + this.vertexSeeds.c3, yStart + (this.height / 5) * 3);
    this.p5.curveVertex(this.curveSeeds.c2 + this.vertexSeeds.c2, yStart + (this.height / 5) * 2);
    this.p5.curveVertex(this.curveSeeds.c1 + this.vertexSeeds.c1, yStart + (this.height / 5) * 1);
    this.p5.curveVertex(this.curveSeeds.c5 + this.vertexSeeds.c5, yStart - 300);
    this.p5.curveVertex(this.curveSeeds.c6 + this.vertexSeeds.c6, yStart - 300);
    this.p5.endShape(this.p5.CLOSE);
    this.p5.pop();
  }
}

export default VoyageYear;
