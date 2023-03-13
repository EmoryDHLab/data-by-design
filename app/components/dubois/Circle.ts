import type p5 from "p5";

export class Circle {
  x: number;
  y: number;
  color: string;
  id: number;
  diameter: number;
  others: Circle[];
  dragging: boolean;
  rollover: boolean;
  text: string;
  p5: p5;
  offsetX?: number;
  offsetY?: number;

  constructor(
    p5: p5,
    x: number,
    y: number,
    diameter: number,
    id: number,
    others: Circle[],
    text: string
  ) {
    this.x = x;
    this.y = y;
    this.color = "white";
    this.id = id;
    this.diameter = diameter;
    this.others = others;
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.text = text;
    this.p5 = p5;
  }

  mouseOn() {
    if (
      this.p5.dist(this.p5.mouseX, this.p5.mouseY, this.x, this.y) <
      this.diameter / 2
    ) {
      this.rollover = true;
      this.p5.rectMode(this.p5.CENTER);
      this.p5.fill("white");
      this.p5.stroke("black");

      let textWidth = 0;
      const lineWidths = this.text
        .split("\n")
        .map((line) => this.p5.textWidth(line));
      for (const width of lineWidths) {
        if (width > textWidth) {
          textWidth = width;
        }
      }
      const width = textWidth + 20;
      const height = 55;
      const mouseX = this.p5.mouseX;
      const mouseY = this.p5.mouseY;
      const x = mouseX + width > 490 ? mouseX - width : mouseX;
      const y = mouseY + height > 490 ? mouseY - height : mouseY;

      // Drawing the text box with the cut corners
      this.p5.beginShape();
      this.p5.vertex(x, y);
      this.p5.vertex(x + 10, y - 10);
      this.p5.vertex(x + width - 10, y - 10);
      this.p5.vertex(x + width, y);
      this.p5.vertex(x + width, y + height);
      this.p5.vertex(x + width - 10, y + height + 10);
      this.p5.vertex(x + 10, y + height + 10);
      this.p5.vertex(x, y + height);
      this.p5.endShape(this.p5.CLOSE);

      this.p5.fill("black");
      this.p5.noStroke();
      this.p5.textSize(16);
      this.p5.text(this.text, x + 10, y + 10);
    } else {
      this.rollover = false;
    }
  }

  pressed() {
    if (
      this.p5.dist(this.p5.mouseX, this.p5.mouseY, this.x, this.y) <
        this.diameter / 2 &&
      this.p5.mouseX &&
      this.p5.mouseY
    ) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - this.p5.mouseX;
      this.offsetY = this.y - this.p5.mouseY;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging && this.offsetX && this.offsetY) {
      this.x = this.p5.mouseX + this.offsetX;
      this.y = this.p5.mouseY + this.offsetY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }

  collide() {
    for (let i = this.id; i < this.others.length; i++) {
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      if (distance < minDist) {
        let angle = Math.atan2(dy, dx);
        let targetX = this.x + Math.cos(angle) * minDist;
        let targetY = this.y + Math.sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * 0.1;
        let ay = (targetY - this.others[i].y) * 0.1;
        this.x -= ax;
        this.y -= ay;
        this.others[i].x += ax;
        this.others[i].y += ay;
      }
    }
  }

  display() {
    if (
      this.p5.dist(this.p5.mouseX, this.p5.mouseY, this.x, this.y) <
      this.diameter / 2
    ) {
      this.p5.fill("white");
      this.p5.stroke("#FEF6D8");
    } else {
      let c = this.p5.color("#FAF1E9");
      c.setAlpha(76.5);
      this.p5.fill(c);
      this.p5.stroke("#FEF6D8");
    }
    this.p5.ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  wiggle() {
    let dx = this.p5.random();
    let dy = this.p5.random();
    let sx = this.p5.random();
    let sy = this.p5.random();
    let t = this.p5.millis() * 0.01;

    this.x = this.x + this.p5.sin(this.p5.PI * dx + t * sx) * 0.1;
    this.y = this.y + this.p5.sin(this.p5.PI * dy + t * sy) * 0.1;
  }

  withinBounds() {
    let wWidth = Math.min(this.p5.width, 500);

    const dx = this.x - this.p5.width / 2;
    const dy = this.y - this.p5.width / 2;

    const collision =
      Math.sqrt(dx * dx + dy * dy) >= (wWidth - 20) / 2 - this.diameter / 2;

    if (collision) {
      const center = [
        Math.floor(this.p5.width / 2),
        Math.floor(this.p5.width / 2),
      ];
      const radvec = [this.x, this.y].map((c, i) => c - center[i]);

      if (radvec[0] < 0) this.x += 0.1;
      else this.x -= 0.1;
      if (radvec[1] < 0) this.y += 0.1;
      else this.y -= 0.1;
    }
  }
}
