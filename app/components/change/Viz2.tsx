import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import studentData from "~/data/power/studentChartTwo.json";
import respondentsData from "~/data/power/1910-Respondents.json";

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
  Unreported: "#C4C4C4",
  "Unknown/Deceased": "#C4C4C4",
  // 1910-Respondents categories
  teachers: "#D92944",
  ministers: "#5A7BC3",
  "government service": "#FFD3D3",
  business: "#CDCE9D",
  "other professions": "#2F4F4F",
  housewives: "#FEC313",
  "unknown/deceased": "#C4C4C4",
};

export default function Viz2({ interactive = false }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredStudent, setHoveredStudent] = useState<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showPieChart, setShowPieChart] = useState(true);
  const [useCircularArrangement, setUseCircularArrangement] = useState(false);
  const [redrawKey, setRedrawKey] = useState(0);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set dimensions
    const width = 900;
    const height = 500;
    const radius = Math.min(width, height) / 2 - 80;

    // Process data - count students in each category, combining Deceased and Unreported
    const rawPieData = studentData.categories.map((category) => ({
      name: category.displayName,
      value: category.students.length,
      color: colorMapping[category.displayName] || "#999",
      isDotted: false,
      students: category.students,
    }));

    // Combine Deceased and Unreported into Unknown/Deceased
    const pieData: any[] = [];
    let unknownDeceasedData: any = null;

    rawPieData.forEach(category => {
      if (category.name === "Deceased" || category.name === "Unreported") {
        if (!unknownDeceasedData) {
          unknownDeceasedData = {
            name: "Unknown/Deceased",
            value: category.value,
            color: colorMapping["Unknown/Deceased"],
            isDotted: false,
            students: [...category.students],
          };
        } else {
          unknownDeceasedData.value += category.value;
          unknownDeceasedData.students.push(...category.students);
        }
      } else {
        pieData.push(category);
      }
    });

    if (unknownDeceasedData) {
      pieData.push(unknownDeceasedData);
    }

    // Add 1910-Respondents data with dotted borders
    const categoryMapping: Record<string, string> = {
      "teachers": "Teachers",
      "ministers": "Ministers", 
      "government service": "Government Service",
      "business": "Business",
      "other professions": "Other Professions",
      "housewives": "House Wives",
      "unknown/deceased": "Unknown/Deceased"
    };

    const respondentsPieData = Object.entries(respondentsData)
      .filter(([key]) => key !== "title")
      .map(([key, value]) => {
        const mappedCategory = categoryMapping[key] || key;
        return {
          name: mappedCategory,
          value: value as number,
          color: colorMapping[mappedCategory] || "#999",
          isDotted: true,
        };
      });

    // Combine matching categories from both datasets
    const combinedPieData = pieData.map(category => {
      const matchingRespondent = respondentsPieData.find(r => r.name === category.name);
      if (matchingRespondent) {
        return {
          ...category,
          value: category.value + matchingRespondent.value,
          respondentsCount: matchingRespondent.value,
          studentsCount: category.value,
        };
      }
      return {
        ...category,
        respondentsCount: 0,
        studentsCount: category.value,
      };
    });

    // Add any respondent categories that don't have matching student categories
    const unmatchedRespondents = respondentsPieData.filter(
      r => !pieData.some(p => p.name === r.name)
    );
    
    combinedPieData.push(...unmatchedRespondents.map(r => ({
      ...r,
      respondentsCount: r.value,
      studentsCount: 0,
    })));
    
    console.log("Combined pie data:", combinedPieData.map(c => ({
      name: c.name, 
      total: c.value, 
      students: c.studentsCount, 
      respondents: c.respondentsCount
    })));

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
        .data(pie(combinedPieData))
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
        .attr("stroke-width", 1.5);
    }

    // Add individual student dots
    const allDots: Array<{ x: number; y: number; radius: number }> = [];
    const dotRadius = 2;
    const minDistance = dotRadius * 2 + 1; // Minimum distance between dot centers

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
    combinedPieData.forEach((categoryData, categoryIndex) => {
      // Get original students for this category
      let originalStudents: any[] = [];
      
      if (categoryData.name === "Unknown/Deceased") {
        // For combined category, get students from the processed pieData
        const combinedCategory = pieData.find(cat => cat.name === "Unknown/Deceased");
        originalStudents = combinedCategory?.students || [];
      } else {
        originalStudents =
          studentData.categories.find(
            (cat) => cat.displayName === categoryData.name
          )?.students || [];
      }

      // Create synthetic respondents for this category
      const respondentsCount = categoryData.respondentsCount || 0;
      if (categoryData.name === "Teachers") {
        console.log(`Teachers respondentsCount:`, respondentsCount);
      }
      const respondents = Array.from({ length: respondentsCount }, (_, i) => ({
        name: `${categoryData.name}_respondent_${i}`,
        isRespondent: true,
      }));

      // Combine students and respondents
      const allPeople = [
        ...originalStudents.map(s => ({ ...s, isRespondent: false })),
        ...respondents
      ];
      
      if (categoryData.name === "Teachers") {
        console.log(`Teachers - Students: ${originalStudents.length}, Respondents: ${respondents.length}, Total: ${allPeople.length}`);
      }
      
      let successfulPlacements = 0;
      let failedPlacements = 0;

      // Calculate positions for students within the circular area
      allPeople.forEach((person, personIndex) => {
        // Use person name hash as seed for consistent placement
        const seed = person.name
          .split("")
          .reduce(
            (acc, char) => acc + char.charCodeAt(0),
            personIndex + categoryIndex * 1000
          );

        let x: number, y: number;
        let attempts = 0;
        const maxAttempts = 200;
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
            const pieSlice = pie(combinedPieData)[categoryIndex];
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
          successfulPlacements++;

          // Add dot for person
          const dotElement = g
            .append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", dotRadius)
            .attr("fill", categoryData.color)
            .attr("stroke", "black")
            .attr("stroke-width", 1)
            .attr("stroke-dasharray", person.isRespondent ? "3,3" : "none")
            .style("cursor", interactive ? "pointer" : "default");

          if (interactive) {
            if (!person.isRespondent) {
              // Original student data - show full details
              dotElement
                .on("mouseenter", function (event: any) {
                  setHoveredStudent(person);
                  const rect = svgRef.current?.getBoundingClientRect();
                  if (rect) {
                    setMousePosition({
                      x: event.clientX - rect.left,
                      y: event.clientY - rect.top,
                    });
                  }
                })
                .on("mouseleave", function () {
                  setHoveredStudent(null);
                });
            } else {
              // 1910-Respondents data - show basic info
              dotElement
                .on("mouseenter", function (event: any) {
                  setHoveredStudent({
                    name: "1910 Survey Respondent",
                    profession: categoryData.name,
                    isRespondent: true,
                  });
                  const rect = svgRef.current?.getBoundingClientRect();
                  if (rect) {
                    setMousePosition({
                      x: event.clientX - rect.left,
                      y: event.clientY - rect.top,
                    });
                  }
                })
                .on("mouseleave", function () {
                  setHoveredStudent(null);
                });
            }
          }

          // Add subtle wiggle animation
          const wiggleAnimation = () => {
            const baseSeed = seed + personIndex;
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
          }, (seed + personIndex) % 2000); // Reduced delay range
        } else {
          failedPlacements++;
        }
      });
      
      if (categoryData.name === "Teachers") {
        console.log(`Teachers placement: ${successfulPlacements} successful, ${failedPlacements} failed`);
      }
    });

    // Add legend - split between left and right
    const leftLegendData = combinedPieData.slice(
      0,
      Math.ceil(combinedPieData.length / 2)
    );
    const rightLegendData = combinedPieData.slice(
      Math.ceil(combinedPieData.length / 2)
    );

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
      .append("circle")
      .attr("cx", 7.5)
      .attr("cy", 7.5)
      .attr("r", 7.5)
      .attr("fill", (d) => d.color)
      .attr("stroke", "black")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", (d) => (d.isDotted ? "3,3" : "none"));

    leftLegendItems
      .append("text")
      .attr("x", 20)
      .attr("y", 7.5)
      .attr("dy", "0.35em")
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
      .append("circle")
      .attr("cx", 7.5)
      .attr("cy", 7.5)
      .attr("r", 7.5)
      .attr("fill", (d) => d.color)
      .attr("stroke", "black")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", (d) => (d.isDotted ? "3,3" : "none"));

    rightLegendItems
      .append("text")
      .attr("x", 20)
      .attr("y", 7.5)
      .attr("dy", "0.35em")
      .attr("font-size", "16px")
      .attr("font-family", "VTC Du Bois, serif")
      .attr("text-transform", "uppercase")
      .attr("font-weight", "500")
      .text((d) => `${d.name.toUpperCase()} `);
  }, [interactive, showPieChart, useCircularArrangement, redrawKey]);

  return (
    <div className="flex flex-col items-center relative">
      <svg ref={svgRef} className="max-w-full"></svg>
      {interactive && (
        <div className="-mt-2 flex gap-4">
          <button
            onClick={() => setShowPieChart(!showPieChart)}
            className="px-3 py-1 bg-changePrimary text-white rounded font-power text-sm hover:bg-opacity-80 transition-opacity"
          >
            {showPieChart ? "HIDE PIE CHART" : "SHOW PIE CHART"}
          </button>
          <button
            onClick={() => setUseCircularArrangement(!useCircularArrangement)}
            className="px-3 py-1 bg-changeSecondary text-black rounded font-power text-sm hover:bg-opacity-80 transition-opacity"
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
            {hoveredStudent.isRespondent ? (
              <li className="text-xs">Profession: {hoveredStudent.profession}</li>
            ) : (
              <>
                {/* <li className="text-xs">{hoveredStudent.profession}</li> */}
                <li className="text-xs">{hoveredStudent.location}</li>
                <li className="text-xs">Class of {hoveredStudent.year}</li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
