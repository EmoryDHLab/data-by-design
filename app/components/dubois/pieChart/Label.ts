import type p5 from "p5";

export class Label {
  x: number;
  y: number;
  diameter: number;
  rollover: boolean;
  text: string;
  p5: p5;
  offsetX?: number;
  offsetY?: number;
  textWidth: number;

  constructor(p5: p5, x: number, y: number, diameter: number, text: string) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.rollover = false; // Is the mouse over the ellipse?
    this.text = text;
    this.p5 = p5;
    this.textWidth = 0;
    const lineWidths = this.text
      .split("\n")
      .map((line) => this.p5.textWidth(line));
    for (const width of lineWidths) {
      if (width > this.textWidth) {
        this.textWidth = width;
      }
    }
  }

  showLabel() {
    const width = this.textWidth + 20;
    const height = 55;
    const x = this.x + width > this.p5.width ? this.x - width : this.x;
    const y = this.y + height > this.p5.width ? this.y - height : this.y;

    this.rollover = true;
    this.p5.rectMode(this.p5.CENTER);
    this.p5.fill("white");
    this.p5.stroke("black");
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
    this.p5.textSize(12);
    this.p5.text(this.text, x + 10, y + 10);
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

      const width = this.textWidth + 20;
      const height = 55;
      const mouseX = this.p5.mouseX;
      const mouseY = this.p5.mouseY;
      const x = mouseX + width > this.p5.width ? mouseX - width : mouseX;
      const y = mouseY + height > this.p5.width ? mouseY - height : mouseY;

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
      this.p5.textSize(12);
      this.p5.text(this.text, x + 10, y + 10);
    } else {
      this.rollover = false;
    }
  }
}
