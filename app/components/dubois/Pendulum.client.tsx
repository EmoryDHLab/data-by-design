import { useEffect } from "react";
import p5 from "p5";

function script(p5: p5) {
  let r1 = 125;
  let r2 = 125;
  let m1 = 10;
  let m2 = 10;
  let a1 = 0;
  let a2 = 0;
  let a1_v = 0;
  let a2_v = 0;
  let g = 1;

  let px2 = -1;
  let py2 = -1;
  let cx, cy;

  let buffer;
  let randomRotation = p5.random(2 * p5.PI);

  p5.setup = function () {
    p5.createCanvas(500, 500).parent("pendulum");
    // Issue with wrong rendering on a retina Mac. See issue: https://github.com/CodingTrain/website/issues/574
    p5.pixelDensity(1);
    a1 = p5.PI / 2;
    a2 = p5.PI / 2;
    cx = p5.width / 2;
    cy = 250;
    buffer = p5.createGraphics(p5.width, p5.height);
    buffer.translate(cx, cy);
    buffer.rotate(randomRotation);
  };

  p5.draw = function () {
    if (p5.frameCount > 1000) {
      a1_v *= 0.999;
      a2_v *= 0.999;
    }
    p5.imageMode(p5.CORNER);

    p5.image(buffer, 0, 0, p5.width, p5.height);

    let num1 = -g * (2 * m1 + m2) * p5.sin(a1);
    let num2 = -m2 * g * p5.sin(a1 - 2 * a2);
    let num3 = -2 * p5.sin(a1 - a2) * m2;
    let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * p5.cos(a1 - a2);
    let den = r1 * (2 * m1 + m2 - m2 * p5.cos(2 * a1 - 2 * a2));
    let a1_a = (num1 + num2 + num3 * num4) / den;

    num1 = 2 * p5.sin(a1 - a2);
    num2 = a1_v * a1_v * r1 * (m1 + m2);
    num3 = g * (m1 + m2) * p5.cos(a1);
    num4 = a2_v * a2_v * r2 * m2 * p5.cos(a1 - a2);
    den = r2 * (2 * m1 + m2 - m2 * p5.cos(2 * a1 - 2 * a2));
    let a2_a = (num1 * (num2 + num3 + num4)) / den;

    p5.translate(cx, cy);
    p5.rotate(randomRotation);
    p5.stroke(0);
    p5.strokeWeight(2);

    let x1 = r1 * p5.sin(a1);
    let y1 = r1 * p5.cos(a1);

    let x2 = x1 + r2 * p5.sin(a2);
    let y2 = y1 + r2 * p5.cos(a2);

    p5.ellipse(x2, y2, m2, m2);
    a1_v += a1_a;
    a2_v += a2_a;
    a1 += a1_v;
    a2 += a2_v;

    buffer.stroke(0);
    if (p5.frameCount > 1) {
      buffer.line(px2, py2, x2, y2);
    }

    px2 = x2;
    py2 = y2;
  };
}

export default function DoublePendulum() {
  useEffect(() => {
    new p5(script);
  }, []);
  return <div id="pendulum" />;
}
