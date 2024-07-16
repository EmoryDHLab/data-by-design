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
  xOffset: number;
  yOffset: number;

  constructor(p5: p5, x: number, y: number, diameter: number, text: string) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.rollover = false; // Is the mouse over the ellipse?
    this.text = text;
    this.p5 = p5;
    this.textWidth = 0;
    this.p5.textSize(this.p5.height * 0.05);
    this.xOffset = this.p5.height * 0.025;
    this.yOffset = this.p5.height * 0.035;
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
    const height = this.p5.height / 7;
    const width = this.textWidth + 20;
    const x =
      this.x + width > this.p5.width ? Math.max(this.x - width, 0) : this.x;
    const y =
      this.y + height > this.p5.height
        ? Math.min(this.y - height, this.p5.height - height * 1.2)
        : this.y;

    this.rollover = true;
    this.p5.rectMode(this.p5.CENTER);
    this.p5.fill("white");
    this.p5.stroke("black");
    // Drawing the text box with the cut corners
    this.p5.beginShape();
    this.p5.vertex(x, y);
    this.p5.vertex(x + this.xOffset, y - this.yOffset);
    this.p5.vertex(x + width - this.xOffset, y - this.yOffset);
    this.p5.vertex(x + width, y);
    this.p5.vertex(x + width, y + height);
    this.p5.vertex(x + width - this.xOffset, y + height + this.yOffset);
    this.p5.vertex(x + this.xOffset, y + height + this.yOffset);
    this.p5.vertex(x, y + height);
    this.p5.endShape(this.p5.CLOSE);

    this.p5.fill("black");
    this.p5.noStroke();
    this.p5.text(this.text, x + this.xOffset, y + this.yOffset);
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

      const height = this.p5.height / 7;
      const width = this.textWidth + 20;
      const mouseX = this.p5.mouseX;
      const mouseY = this.p5.mouseY;
      const x =
        mouseX + width > this.p5.width ? Math.max(mouseX - width, 0) : mouseX;
      const y =
        mouseY + height > this.p5.width
          ? Math.min(mouseY - height, this.p5.height - height * 1.2)
          : mouseY;

      // Drawing the text box with the cut corners
      this.p5.beginShape();
      this.p5.vertex(x, y);
      this.p5.vertex(x + this.xOffset, y - this.yOffset);
      this.p5.vertex(x + width - this.xOffset, y - this.yOffset);
      this.p5.vertex(x + width, y);
      this.p5.vertex(x + width, y + height);
      this.p5.vertex(x + width - this.xOffset, y + height + this.yOffset);
      this.p5.vertex(x + this.xOffset, y + height + this.yOffset);
      this.p5.vertex(x, y + height);
      this.p5.endShape(this.p5.CLOSE);

      this.p5.fill("black");
      this.p5.noStroke();
      this.p5.text(this.text, x + this.xOffset, y + this.yOffset);
    } else {
      this.rollover = false;
    }
  }
}
