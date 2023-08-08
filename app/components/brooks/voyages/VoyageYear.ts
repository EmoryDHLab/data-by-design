import type p5 from "p5";
import type { Voyage } from "~/types/voyage";

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

  constructor(
    p5: p5,
    voyage: Voyage,
    rgb: Array<number>,
    minYear: number,
    maxYear: number,
    height: number,
    width: number,
    nonResistanceStrokeWidth: number,
    lerpAmount: number,
  ) {
    this.p5 = p5;
    ({
      id: this.id,
      totalPeople: this.totalPeople,
      mortalityRate: this.mortalityRate,
      year: this.year,
      resistanceReported: this.resistanceReported,
      duration: this.duration,
    } = voyage);
    this.rgb = rgb;
    this.minYear = minYear;
    this.maxYear = maxYear;
    this.height = height;
    this.width = width;
    this.nonResistanceStrokeWidth = nonResistanceStrokeWidth;
    this.lerpAmount = lerpAmount;

    this.distanceLeft = 10;
    this.distanceRight = 10;
    this.shapeSeed = Math.floor(Math.random() * (293) + 1565);
    this.minEmbark = 1;
    this.maxEmbark = 1545;
    this.minDuration = 86400;
    this.maxDuration = 273369600;
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
    minDuration: number,
    maxDuration: number,
    minEmbark: number,
    maxEmbark: number,
    minYear: number,
    maxYear: number
  ) {
    this.minEmbark = minEmbark;
    this.maxEmbark = maxEmbark;
    this.minDuration = minDuration;
    this.maxDuration = maxDuration;
    this.minYear = minYear;
    this.maxYear = maxYear;
  }

  show(){
    this.p5.randomSeed(this.shapeSeed);
    let voyageHeight = this.p5.map(
      this.totalPeople,
      this.minEmbark,
      this.maxEmbark,
      0,
      this.height
    );
    const rat = voyageHeight / this.height;
    voyageHeight = this.height;
    const yStart = - voyageHeight / 2;
    this.p5.push();
    this.p5.translate(
      this.p5.map(
        this.year,
        this.minYear,
        this.maxYear,
        40,
        this.width
      ),
      voyageHeight / 2
    );

    // Add color
    if (this.resistanceReported) {
      this.p5.strokeWeight(0.5)
      this.p5.fill([...this.rgb, 200]);
    } else {
      this.p5.strokeWeight(this.nonResistanceStrokeWidth);
      this.p5.fill(
        this.p5.lerpColor(
          this.p5.color([...this.rgb, 0]),
          this.p5.color([...this.rgb, 200]),
          this.lerpAmount
        )
      );
    }

    //setting the maximum overlapping, width of each voyage vis
    const maxOl = 300
    const maxWidth = 30
    const curveSeed = [
      this.duration,
      this.minDuration,
      this.maxDuration,
      0,
      maxOl
    ];

    // @ts-ignore
    const lower = -this.distanceLeft - this.p5.map(...curveSeed);
    // @ts-ignore
    const upper = this.distanceRight + this.p5.map(...curveSeed);
    const c1 = this.p5.random(lower, upper);
    const c2 = this.p5.random(lower, upper);
    const c3 = this.p5.random(lower, upper);
    const c4 = this.p5.random(lower, upper);
    const c5 = this.p5.random(lower, upper);
    const c6 = this.p5.random(lower, upper);
    const c7 = this.p5.random(lower, upper);

    this.p5.beginShape();
    this.p5.curveVertex(c6, yStart - 300 * rat);
    this.p5.curveVertex(c5, yStart - 300 * rat);
    this.p5.curveVertex(c1, yStart + (voyageHeight / 5) * 1);
    this.p5.curveVertex(c2, yStart + (voyageHeight / 5) * 2);
    this.p5.curveVertex(c3, yStart + (voyageHeight / 5) * 3);
    this.p5.curveVertex(c4, yStart + (voyageHeight / 5) * 4);
    this.p5.curveVertex(c7, voyageHeight / 2 + 500 * rat);

    const vertexLower = this.p5.map(this.totalPeople * (1 - this.mortalityRate), this.minEmbark, this.maxEmbark, 0, maxWidth);
    const vertexUpper = this.p5.map(this.totalPeople, this.minEmbark, this.maxEmbark, 0, maxWidth);
    this.p5.curveVertex(c7 + this.p5.random(vertexLower, vertexUpper), voyageHeight / 2 + 500 * rat);
    this.p5.curveVertex(c4 + this.p5.random(vertexLower, vertexUpper), yStart + (voyageHeight / 5) * 4);
    this.p5.curveVertex(c3 + this.p5.random(vertexLower, vertexUpper), yStart + (voyageHeight / 5) * 3);
    this.p5.curveVertex(c2 + this.p5.random(vertexLower, vertexUpper), yStart + (voyageHeight / 5) * 2);
    this.p5.curveVertex(c1 + this.p5.random(vertexLower, vertexUpper), yStart + (voyageHeight / 5) * 1);
    this.p5.curveVertex(c5 + this.p5.random(vertexLower, vertexUpper), yStart - 300 * rat);
    this.p5.curveVertex(c6 + this.p5.random(vertexLower, vertexUpper), yStart - 300 * rat);
    this.p5.endShape(this.p5.CLOSE);
    this.p5.pop();
  }
}

export default VoyageYear;
