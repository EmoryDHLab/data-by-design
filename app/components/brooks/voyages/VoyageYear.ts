class VoyageYear {
  constructor(
    p5,
    vid,
    totalEmbarked,
    mr,
    palette,
    r,
    yr,
    if_resis,
    dur,
    colorTable,
    shape_seed,
    slider_lower,
    slider_upper,
    minEmbark,
    maxEmbark,
    height,
    width,
    minDuration,
    maxDuration,
    nonResistanceStrokeWidth,
    t,
  ) {
    this.p5 = p5;
    this.vid = vid
    this.totalEmbarked = totalEmbarked
    //console.log(this.totalEmbarked)
    this.mr = mr
    this.p = Math.floor(Math.random() * 676);
    this.r = r // was count needed?
    this.year = yr
    this.distance_left = 10
    this.distance_right = 10
    this.isResistance = if_resis == 1
    this.dur = dur
    this.alpha = 100 // needed?
    this.sw = 0 // needed?
    this.selected = 1; // needed?
    this.colorTable = colorTable;
    this.shape_seed = shape_seed;
    this.slider_lower = slider_lower;
    this.slider_upper = slider_upper;
    this.minEmbark = minEmbark;
    this.maxEmbark = maxEmbark;
    this.height = height;
    this.width = width;
    this.minDuration = minDuration;
    this.maxDuration = maxDuration;
    this.nonResistanceStrokeWidth = nonResistanceStrokeWidth;
    this.t = t; // is always 0?
  }

  updateTransition(t, nonResistanceStrokeWidth, shape_seed) {
    this.t = t;
    this.nonResistanceStrokeWidth = nonResistanceStrokeWidth;
    this.shape_seed = shape_seed;
  }

  updateMinMax(minDuration, maxDuration, minEmbark, maxEmbark) {
    this.minEmbark = minEmbark;
    this.maxEmbark = maxEmbark;
    this.minDuration = minDuration;
    this.maxDuration = maxDuration;
  }

  set_sw(sw){
    this.sw = sw
  }

  set_selected(){
    if(this.year >= start_year && this.year <= end_year){
      this.selected = 1;
    }else{
      this.selected = 1;
    }
  }

  show(){
    this.p5.randomSeed(this.shape_seed);
    let voy_height = this.p5.map(this.totalEmbarked, this.minEmbark, this.maxEmbark, 0, this.height);
    let rat = voy_height / this.height;
    voy_height = this.height;
    let yStart = -voy_height / 2;
    this.p5.push();
    this.p5.translate(
      this.p5.map(
        this.year,
        this.slider_lower.value(),
        this.slider_upper.value(),
        40,
        this.width
      ),
      voy_height / 2
    );

    // Add color
    let col = this.p5.floor(this.p5.random(5 + 0));
    let red = this.colorTable.get(this.p, col * 3);
    let green = this.colorTable.get(this.p, col * 3 + 1);
    let blue = this.colorTable.get(this.p, col * 3 + 2);
    if (this.isResistance) {
      this.p5.strokeWeight(0.5)
      this.p5.fill(red, green, blue, 200);
    } else {
      this.p5.strokeWeight(this.nonResistanceStrokeWidth);
      this.p5.fill(
        this.p5.lerpColor(
          this.p5.color(red, green, blue, 0),
          this.p5.color(red, green, blue, 200),
          this.t
        )
      );
    }

    //setting the maximum overlapping, width of each voyage vis
    let max_ol = 300
    let max_width = 30
    let curveSeed = [this.dur, this.minDuration, this.maxDuration, 0, max_ol];
    let lower = -this.distance_left - this.p5.map(...curveSeed);
    let upper = this.distance_right + this.p5.map(...curveSeed);
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
    this.p5.curveVertex(c1, yStart + (voy_height / 5) * 1);
    this.p5.curveVertex(c2, yStart + (voy_height / 5) * 2);
    this.p5.curveVertex(c3, yStart + (voy_height / 5) * 3);
    this.p5.curveVertex(c4, yStart + (voy_height / 5) * 4);
    this.p5.curveVertex(c7, voy_height / 2 + 500 * rat);

    let vertexLower = this.p5.map(this.totalEmbarked * (1 - this.mr), this.minEmbark, this.maxEmbark, 0, max_width);
    let vertexUpper = this.p5.map(this.totalEmbarked, this.minEmbark, this.maxEmbark, 0, max_width);
    this.p5.curveVertex(c7 + this.p5.random(vertexLower, vertexUpper), voy_height / 2 + 500 * rat);
    this.p5.curveVertex(c4 + this.p5.random(vertexLower, vertexUpper), yStart + (voy_height / 5) * 4);
    this.p5.curveVertex(c3 + this.p5.random(vertexLower, vertexUpper), yStart + (voy_height / 5) * 3);
    this.p5.curveVertex(c2 + this.p5.random(vertexLower, vertexUpper), yStart + (voy_height / 5) * 2);
    this.p5.curveVertex(c1 + this.p5.random(vertexLower, vertexUpper), yStart + (voy_height / 5) * 1);
    this.p5.curveVertex(c5 + this.p5.random(vertexLower, vertexUpper), yStart - 300 * rat);
    this.p5.curveVertex(c6 + this.p5.random(vertexLower, vertexUpper), yStart - 300 * rat);
    this.p5.endShape(this.p5.CLOSE);
    this.p5.pop();
  }
};

export default VoyageYear;
