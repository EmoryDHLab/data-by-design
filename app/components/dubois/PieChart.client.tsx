import p5 from "p5";
import { Circle } from "~/components/dubois/pieChart/Circle";
import { Label } from "~/components/dubois/pieChart/Label";
import { useEffect, useRef } from "react";
import { useDeviceContext, useResizeObserver } from "~/hooks";
import tailwindConfig from "tailwind.config";
import type { Student, StudentData } from "~/components/dubois/types";

interface Props {
  studentData: StudentData;
  id: string;
  className?: string;
  containerSize?: number;
  interactive?: boolean;
  activeStudent?: string;
}

const OFFSET = Math.PI * 1.1;

/**
 * Tries to create a new circle that does not overlap with the previous
 * circles and is inside a specific arc. If the circle does overlap, we
 * return undefined.
 */
function createNewCircle(
  p5: p5,
  circles: Circle[],
  categoryCircles: Circle[],
  id: number,
  student: Student,
  pieChartRadius: number,
  circleDiameter: number,
  startAngle: number,
  endAngle: number,
  center: { x: number; y: number },
  interactive: boolean
) {
  // Using polar coordinates here
  // Get a random radius
  // We need to take the square root of a random variable
  // in order to get a better distribution:
  // http://www.anderswallin.net/2009/05/uniform-random-points-in-a-circle-using-polar-coordinates/
  const r = pieChartRadius * Math.sqrt(p5.random(0, 1));
  // And a random angle
  const angle = p5.random(startAngle, endAngle);
  // Convert to cartesian
  const rx = r * Math.cos(angle);
  const ry = r * Math.sin(angle);

  // Now we need to get the coordinates from the center
  const x = rx + center.x;
  const y = ry + center.y;

  for (const circle of categoryCircles) {
    const overlapsWithCircle =
      p5.dist(x, y, circle.x, circle.y) < circle.diameter;

    if (overlapsWithCircle) {
      return undefined;
    }
  }

  return new Circle(
    p5,
    x,
    y,
    circleDiameter,
    id,
    circles,
    `${student.name}\n${student.location}\n${student.year}`,
    interactive
  );
}

function placeCategoryCircles(
  p5: p5,
  circles: Circle[],
  labels: Label[],
  currentAngle: number,
  categoryAngle: number,
  students: any[],
  interactive: boolean
) {
  const diameter = p5.width * (15 / 466);
  const center = {
    x: p5.width / 2,
    y: p5.height / 2,
  };
  // We store the category circles separately because we want to
  // do the overlap check only for the category circles.
  const categoryCircles = [];

  for (let i = 0; i < students.length; i++) {
    while (true) {
      const circle = createNewCircle(
        p5,
        circles,
        categoryCircles,
        i,
        students[i],
        (p5.width - 20) / 2,
        diameter,
        currentAngle,
        currentAngle + categoryAngle,
        center,
        interactive
      );

      if (circle) {
        categoryCircles.push(circle);
        break;
      }
    }
  }

  // Then we add the category circles to the main circle
  circles.push(...categoryCircles);
  for (const circle of circles) {
    labels.push(
      new Label(p5, circle.x, circle.y, circle.diameter, circle.text)
    );
  }
}

function placeCategories(
  p5: p5,
  studentData: StudentData,
  circles: Circle[],
  labels: Label[],
  interactive: boolean
) {
  const { count, categories } = studentData;
  let currentAngle = OFFSET;

  for (const { students } of categories) {
    const categoryAngle = (students.length / count) * 2 * Math.PI;
    placeCategoryCircles(
      p5,
      circles,
      labels,
      currentAngle,
      categoryAngle,
      students,
      interactive
    );
    currentAngle += categoryAngle;
  }
}

function pieChart(p5: p5, studentData: StudentData, diameter: number) {
  let lastAngle = OFFSET;
  const { count, categories } = studentData;
  const padding = 15;

  for (const { color, students } of categories) {
    const angle = (students.length / count) * Math.PI * 2;

    p5.fill(color);
    p5.stroke("black");
    p5.arc(
      p5.width / 2,
      p5.height / 2,
      diameter - padding,
      diameter - padding,
      lastAngle,
      lastAngle + angle,
      p5.PIE
    );

    lastAngle += angle;
  }
}

export default function PieChart({
  studentData,
  id,
  className,
  containerSize,
  interactive = true,
  activeStudent,
}: Props) {
  const { isMobile } = useDeviceContext();
  const { windowSize } = useResizeObserver();
  const activeStudentRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    activeStudentRef.current = activeStudent;
  }, [activeStudent]);

  useEffect(() => {
    function script(p5: p5) {
      let circles: Circle[] = [];
      let labels: Label[] = [];

      let pieSize = 100;

      // The p5.windowWidth does not seem to be reliable when the window is resized.
      if (containerSize) {
        pieSize = containerSize;
      } else {
        pieSize = isMobile
          ? window.innerWidth - 100
          : Math.min(350, window.innerHeight * 0.2);
      }

      p5.setup = function () {
        p5.createCanvas(pieSize, pieSize).parent(id);

        placeCategories(p5, studentData, circles, labels, interactive);
      };

      p5.draw = function () {
        p5.background(tailwindConfig.theme.extend.colors.offwhite);
        pieChart(p5, studentData, p5.width);

        circles.forEach((ball) => {
          ball.display();
          ball.collide();
          ball.wiggle();
          ball.withinBounds();
        });
        labels.forEach((label) => {
          if (interactive) label.mouseOn();
          if (
            activeStudentRef.current &&
            label.text.startsWith(activeStudentRef.current)
          )
            label.showLabel();
        });

        // p5.noLoop();
      };
    }

    const p5Copy = new p5(script);

    return () => {
      p5Copy.remove();
    };
  }, [studentData, isMobile, windowSize, containerSize, id]);

  return (
    <div
      id={id}
      className={`flex justify-center md:items-center ${className ?? ""}`}
    />
  );
}
