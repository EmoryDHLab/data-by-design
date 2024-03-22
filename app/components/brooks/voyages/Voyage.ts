import type p5 from "p5";
import type { TVoyage, TPoint } from "~/types/voyage";

class Voyage {
  p5: p5;
  shapeSeed: number;
  minEmbark: number;
  maxEmbark: number;
  id: number;
  totalPeople: number;
  year: number;
  duration: number;
  resistanceReported: boolean;
  rgb: Array<number>;
  minYear: number;
  maxYear: number;
  height: number;
  width: number;
  points: TPoint;
  offsets: TPoint;
  fullColor: boolean;

  constructor(
    p5: p5,
    voyage: TVoyage,
    minYear: number,
    maxYear: number,
    height: number,
    width: number,
    fullColor: boolean = false
  ) {
    this.p5 = p5;
    ({
      id: this.id,
      totalPeople: this.totalPeople,
      year: this.year,
      resistanceReported: this.resistanceReported,
      duration: this.duration,
      rgb: this.rgb,
      points: this.points,
      offsets: this.offsets,
    } = voyage);

    this.minYear = minYear;
    this.maxYear = maxYear;
    this.height = height;
    this.width = width;
    this.fullColor = fullColor;

    this.shapeSeed = Math.floor(Math.random() * 293 + 1565);
    this.minEmbark = 1;
    this.maxEmbark = 1545;
  }

  updateP5Instance(p5: p5) {
    this.p5 = p5;
  }

  updateMinMax(minYear: number, maxYear: number) {
    this.minYear = minYear;
    this.maxYear = maxYear;
  }

  show() {
    this.p5.randomSeed(this.shapeSeed);
    const voyageHeight = this.p5.map(
      this.totalPeople,
      this.minEmbark,
      this.maxEmbark,
      0,
      this.height
    );
    const rat = voyageHeight / this.height;
    const yStart = -this.height / 2;
    this.p5.push();
    this.p5.translate(
      this.p5.map(this.year, this.minYear, this.maxYear, 40, this.width),
      this.height / 2
    );

    // Add color
    if (this.resistanceReported || this.fullColor) {
      this.p5.strokeWeight(0.5);
      // this.p5.colorMode(this.p5.RGB);
      this.p5.fill(`rgba(${[...this.rgb, 0.6]})`);
    } else {
      this.p5.strokeWeight(0);
      this.p5.strokeWeight(0.5);
      this.p5.stroke([0, 0, 0]);
      this.p5.fill([250, 241, 233]);
    }

    this.p5.beginShape();
    this.p5.curveVertex(this.points.c6, yStart - 300 * rat);
    this.p5.curveVertex(this.points.c5, yStart - 300 * rat);
    this.p5.curveVertex(this.points.c1, yStart + (this.height / 5) * 1);
    this.p5.curveVertex(this.points.c2, yStart + (this.height / 5) * 2);
    this.p5.curveVertex(this.points.c3, yStart + (this.height / 5) * 3);
    this.p5.curveVertex(this.points.c4, yStart + (this.height / 5) * 4);
    this.p5.curveVertex(this.points.c7, this.height / 2 + 500 * rat);

    this.p5.curveVertex(
      this.points.c7 + this.offsets.c7,
      this.height / 2 + 500 * rat
    );
    this.p5.curveVertex(
      this.points.c4 + this.offsets.c6,
      yStart + (this.height / 5) * 4
    );
    this.p5.curveVertex(
      this.points.c3 + this.offsets.c5,
      yStart + (this.height / 5) * 3
    );
    this.p5.curveVertex(
      this.points.c2 + this.offsets.c4,
      yStart + (this.height / 5) * 2
    );
    this.p5.curveVertex(
      this.points.c1 + this.offsets.c3,
      yStart + (this.height / 5) * 1
    );
    this.p5.curveVertex(this.points.c5 + this.offsets.c2, yStart - 300 * rat);
    this.p5.curveVertex(this.points.c6 + this.offsets.c1, yStart - 300 * rat);
    this.p5.endShape(this.p5.CLOSE);
    this.p5.pop();
  }
}

export default Voyage;
