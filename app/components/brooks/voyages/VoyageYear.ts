class VoyageYear {
  constructor(
    p5,
    vid,
    totalEmbarked,
    mortalityRate,
    year,
    resistanceReported,
    duration,
    rgb,
    minYear,
    maxYear,
    height,
    width,
    nonResistanceStrokeWidth,
    lerpAmount,
  ) {
    this.p5 = p5;
    this.vid = vid;
    this.totalEmbarked = totalEmbarked;
    this.mortalityRate = mortalityRate;
    this.year = year
    this.isResistance = resistanceReported;
    this.duration = duration;
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

  updateTransition(lerpAmount, nonResistanceStrokeWidth, shapeSeed) {
    this.lerpAmount = lerpAmount;
    this.nonResistanceStrokeWidth = nonResistanceStrokeWidth;
    this.shapeSeed = shapeSeed;
  }

  updateMinMax(minDuration, maxDuration, minEmbark, maxEmbark, minYear, maxYear) {
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
      this.totalEmbarked,
      this.minEmbark,
      this.maxEmbark,
      0,
      this.height
    );
    let rat = voyageHeight / this.height;
    voyageHeight = this.height;
    let yStart = - voyageHeight / 2;
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
    if (this.isResistance) {
      this.p5.strokeWeight(0.5)
      this.p5.fill(...this.rgb, 200);
    } else {
      this.p5.strokeWeight(this.nonResistanceStrokeWidth);
      this.p5.fill(
        this.p5.lerpColor(
          this.p5.color(...this.rgb, 0),
          this.p5.color(...this.rgb, 200),
          this.lerpAmount
        )
      );
    }

    //setting the maximum overlapping, width of each voyage vis
    let max_ol = 300
    let max_width = 30
    let curveSeed = [
      this.duration,
      this.minDuration,
      this.maxDuration,
      0,
      max_ol
    ];
    let lower = -this.distanceLeft - this.p5.map(...curveSeed);
    let upper = this.distanceRight + this.p5.map(...curveSeed);
    let c1 = this.p5.random(lower, upper);
    let c2 = this.p5.random(lower, upper);
    let c3 = this.p5.random(lower, upper);
    let c4 = this.p5.random(lower, upper);
    let c5 = this.p5.random(lower, upper);
    let c6 = this.p5.random(lower, upper);
    let c7 = this.p5.random(lower, upper);

    this.p5.beginShape();
    this.p5.curveVertex(c6, yStart - 300 * rat);
    this.p5.curveVertex(c5, yStart - 300 * rat);
    this.p5.curveVertex(c1, yStart + (voyageHeight / 5) * 1);
    this.p5.curveVertex(c2, yStart + (voyageHeight / 5) * 2);
    this.p5.curveVertex(c3, yStart + (voyageHeight / 5) * 3);
    this.p5.curveVertex(c4, yStart + (voyageHeight / 5) * 4);
    this.p5.curveVertex(c7, voyageHeight / 2 + 500 * rat);

    let vertexLower = this.p5.map(this.totalEmbarked * (1 - this.mortalityRate), this.minEmbark, this.maxEmbark, 0, max_width);
    let vertexUpper = this.p5.map(this.totalEmbarked, this.minEmbark, this.maxEmbark, 0, max_width);
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
};

export default VoyageYear;
