import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import studentData from "~/data/power/studentChartOne.json";

interface Props {
  interactive?: boolean;
}

const colorMapping: Record<string, string> = {
  Teachers: "#D92944",
  Ministers: "#5A7BC3",
  "Government Service": "#FFD3D3",
  Business: "#CDCE9D",
  "Other Professions": "#2F4F4F",
  "House Wives": "#FEC313",
  Deceased: "#C4C4C4",
  Unknown: "#B5CCFF",
};

export default function Viz1({ interactive = false }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredStudent, setHoveredStudent] = useState<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showPieChart, setShowPieChart] = useState(true);
  const [useCircularArrangement, setUseCircularArrangement] = useState(false);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set dimensions
    const width = 900;
    const height = 500;
    const radius = Math.min(width, height) / 2 - 80;

    // Process data - count students in each category
    const pieData = studentData.categories.map((category) => ({
      name: category.displayName,
      value: category.students.length,
      color: colorMapping[category.displayName] || "#999",
    }));

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%");

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Create pie generator
    const pie = d3
      .pie<any>()
      .value((d) => d.value)
      .sort(null);

    // Create arc generator
    const arc = d3.arc<any>().innerRadius(0).outerRadius(radius);

    // Create hover arc (slightly larger)
    const hoverArc = d3
      .arc<any>()
      .innerRadius(0)
      .outerRadius(radius + 10);

    // Create pie slices (conditional)
    let arcs: any;
    if (showPieChart) {
      arcs = g
        .selectAll(".arc")
        .data(pie(pieData))
        .enter()
        .append("g")
        .attr("class", "arc");

      // Add pie slices
      arcs
        .append("path")
        .attr("d", arc)
        .attr("fill", "none")

        // for color in pie slices:
        // .attr("fill", (d) => d.data.color)

        .attr("stroke", "black")
        .attr("stroke-width", 2);
    }

    // Add individual student dots
    const allDots: Array<{ x: number; y: number; radius: number }> = [];
    const dotRadius = 4;
    const minDistance = dotRadius * 2 + 2; // Minimum distance between dot centers

    // Create a seeded random function for consistent randomization
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    // Function to check if a point is within the allowed area
    const isValidPosition = (x: number, y: number, slice?: any) => {
      const distance = Math.sqrt(x * x + y * y);
      const baseCheck = distance >= 20 && distance <= radius - 8;

      if (useCircularArrangement) {
        return baseCheck;
      } else {
        // Check if within pie slice
        const angle = Math.atan2(y, x) + Math.PI / 2;
        const normalizedAngle = angle < 0 ? angle + 2 * Math.PI : angle;
        return (
          baseCheck &&
          normalizedAngle >= slice.startAngle &&
          normalizedAngle <= slice.endAngle
        );
      }
    };

    // Function to check collision with existing dots
    const hasCollision = (x: number, y: number) => {
      return allDots.some((dot) => {
        const distance = Math.sqrt((x - dot.x) ** 2 + (y - dot.y) ** 2);
        return distance < minDistance;
      });
    };

    // Add all students from all categories
    pieData.forEach((categoryData, categoryIndex) => {
      const students =
        studentData.categories.find(
          (cat) => cat.displayName === categoryData.name
        )?.students || [];

      // Calculate positions for students within the circular area
      students.forEach((student, studentIndex) => {
        // Use student name hash as seed for consistent placement
        const seed = student.name
          .split("")
          .reduce(
            (acc, char) => acc + char.charCodeAt(0),
            studentIndex + categoryIndex * 1000
          );

        let x: number, y: number;
        let attempts = 0;
        const maxAttempts = 100;
        let currentSlice: any = null;

        // Try to find a non-overlapping position
        do {
          let randomAngle: number;

          if (useCircularArrangement) {
            // Random angle anywhere in the circle
            randomAngle = seededRandom(seed + attempts) * 2 * Math.PI;
            currentSlice = null;
          } else {
            // Random angle within the slice with padding
            const pieSlice = pie(pieData)[categoryIndex];
            currentSlice = pieSlice;
            const sliceAngle = pieSlice.endAngle - pieSlice.startAngle;
            const anglePadding = sliceAngle * 0.07;
            const availableAngle = sliceAngle - 2 * anglePadding;
            randomAngle =
              pieSlice.startAngle +
              anglePadding +
              seededRandom(seed + attempts) * availableAngle;
          }

          // Random radius within the area
          const maxRadius = radius - 8;
          const minRadius = 20;
          const randomRadius =
            minRadius +
            seededRandom(seed + 1000 + attempts) * (maxRadius - minRadius);

          // Convert polar to cartesian coordinates
          x = Math.cos(randomAngle - Math.PI / 2) * randomRadius;
          y = Math.sin(randomAngle - Math.PI / 2) * randomRadius;

          attempts++;
        } while (
          (hasCollision(x, y) || !isValidPosition(x, y, currentSlice)) &&
          attempts < maxAttempts
        );

        // Only add the dot if we found a good position
        if (attempts < maxAttempts) {
          allDots.push({ x, y, radius: dotRadius });

          // Add dot for student
          const dotElement = g
            .append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", dotRadius)
            .attr("fill", categoryData.color)
            .attr("stroke", "black")
            .attr("stroke-width", 1)
            .style("cursor", interactive ? "pointer" : "default")
            .on(
              "mouseenter",
              interactive
                ? function (event: any) {
                    setHoveredStudent(student);
                    const rect = svgRef.current?.getBoundingClientRect();
                    if (rect) {
                      setMousePosition({
                        x: event.clientX - rect.left,
                        y: event.clientY - rect.top,
                      });
                    }
                  }
                : null
            )
            .on(
              "mouseleave",
              interactive
                ? function () {
                    setHoveredStudent(null);
                  }
                : null
            );

          // Add subtle wiggle animation
          const wiggleAnimation = () => {
            const baseSeed = seed + studentIndex;
            const time = Date.now() * 0.001; // Slightly faster for more visible movement
            const wiggleX = Math.sin(time + baseSeed * 0.1) * 2; // Increased amplitude
            const wiggleY = Math.cos(time * 1.2 + baseSeed * 0.15) * 2; // Increased amplitude

            dotElement
              .transition()
              .duration(2500 + (baseSeed % 1500)) // Shorter, more varied durations
              .ease(d3.easeSinInOut) // Smoother easing
              .attr("cx", x + wiggleX)
              .attr("cy", y + wiggleY)
              .on("end", wiggleAnimation);
          };

          // Start wiggle animation immediately with small random delay
          setTimeout(() => {
            wiggleAnimation();
          }, (seed + studentIndex) % 2000); // Reduced delay range
        }
      });
    });

    // Add legend - split between left and right
    const leftLegendData = pieData.slice(0, 4);
    const rightLegendData = pieData.slice(4);

    // Left side legend
    const leftLegend = svg
      .append("g")
      .attr(
        "transform",
        `translate(50, ${height / 2 - leftLegendData.length * 22})`
      );

    const leftLegendItems = leftLegend
      .selectAll(".legend-item-left")
      .data(leftLegendData)
      .enter()
      .append("g")
      .attr("class", "legend-item-left")
      .attr("transform", (d, i) => `translate(0, ${i * 35})`);

    leftLegendItems
      .append("rect")
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", (d) => d.color)
      .attr("stroke", "black")
      .attr("stroke-width", 1);

    leftLegendItems
      .append("text")
      .attr("x", 20)
      .attr("y", 10)
      .attr("dy", "0.2em")
      .attr("font-size", "16px")
      .attr("font-family", "VTC Du Bois, serif")
      .attr("text-transform", "uppercase")
      .attr("font-weight", "500")
      .text((d) => `${d.name.toUpperCase()} `);

    // Right side legend
    const rightLegend = svg
      .append("g")
      .attr(
        "transform",
        `translate(${width - 210}, ${height / 2 - rightLegendData.length * 22})`
      );

    const rightLegendItems = rightLegend
      .selectAll(".legend-item-right")
      .data(rightLegendData)
      .enter()
      .append("g")
      .attr("class", "legend-item-right")
      .attr("transform", (d, i) => `translate(0, ${i * 35})`);

    rightLegendItems
      .append("rect")
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", (d) => d.color)
      .attr("stroke", "black")
      .attr("stroke-width", 1);

    rightLegendItems
      .append("text")
      .attr("x", 20)
      .attr("y", 10)
      .attr("dy", "0.2em")
      .attr("font-size", "16px")
      .attr("font-family", "VTC Du Bois, serif")
      .attr("text-transform", "uppercase")
      .attr("font-weight", "500")
      .text((d) => `${d.name.toUpperCase()} `);
  }, [interactive, showPieChart, useCircularArrangement]);

  return (
    <div className="flex flex-col items-center relative">
      <svg ref={svgRef} className="max-w-full"></svg>
      {interactive && (
        <div className="-mt-2 flex gap-4">
          <button
            onClick={() => setShowPieChart(!showPieChart)}
            className="px-3 py-1 bg-powerPrimary text-white rounded font-power text-sm hover:bg-opacity-80 transition-opacity"
          >
            {showPieChart ? "HIDE PIE CHART" : "SHOW PIE CHART"}
          </button>
          <button
            onClick={() => setUseCircularArrangement(!useCircularArrangement)}
            className="px-3 py-1 bg-powerSecondary text-black rounded font-power text-sm hover:bg-opacity-80 transition-opacity"
          >
            {useCircularArrangement
              ? "PIE ARRANGEMENT"
              : "CIRCULAR ARRANGEMENT"}
          </button>
        </div>
      )}
      {interactive && hoveredStudent && (
        <div
          className="absolute z-10 p-3 bg-black text-white rounded shadow-lg pointer-events-none"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y - 10,
            fontFamily: "VTC Du Bois, serif",
          }}
        >
          <ul>
            <li className="font-bold text-sm">{hoveredStudent.name}</li>
            {/* <li className="text-xs">{hoveredStudent.profession}</li> */}
            <li className="text-xs">{hoveredStudent.location}</li>
            <li className="text-xs">Class of {hoveredStudent.year}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
