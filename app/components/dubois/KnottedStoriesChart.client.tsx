import { useEffect } from "react";
import p5 from "p5";

export default function KnottedStoriesChartClient() {
  useEffect(() => {
    function script(p5) {
      p5.setup = () => {
        p5.createCanvas(400, 400).parent("studentChart");
        p5.colorMode(p5.HSL);
        p5.stroke("black");
        p5.fill("transparent");
        p5.circle(200, 200, 400);
        p5.frameRate(60);
      };

      p5.draw = () => {
        if (p5.frameCount > 1441) {
          p5.noLoop();
        }
        let i;
        let radius;
        if (p5.frameCount > 720) {
          i = 1441 - p5.frameCount;
          p5.fill("white");
          radius = 21;
        } else {
          i = p5.frameCount;
          p5.fill(i % 360, 25, 50);
          radius = 20;
        }

        p5.translate(200, 200);
        p5.noStroke();
        let x = p5.cos(i / 39) * 100;
        let y = p5.sin(i / 50) * 100;

        p5.ellipse(x, y, radius, radius);
      };
    }

    new p5(script);
  }, []);
  return <div id="studentChart" />;
}
