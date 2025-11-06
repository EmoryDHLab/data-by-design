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
  const [legendData, setLegendData] = useState<any[]>([]);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set dimensions
    const width = 1200;
    const height = 900; // Increased to give more room at top
    const vizHeight = 800; // Increased visualization height
    const radius = Math.min(width, vizHeight - 160) / 2 - 80; // Increased radius

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

    rawPieData.forEach((category) => {
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
      teachers: "Teachers",
      ministers: "Ministers",
      "government service": "Government Service",
      business: "Business",
      "other professions": "Other Professions",
      housewives: "House Wives",
      "unknown/deceased": "Unknown/Deceased",
    };

    const respondentsPieData = Object.entries(respondentsData)
      .filter(([key]) => key !== "title" && key !== "unknown/deceased")
      .map(([key, value]) => {
        const mappedCategory = categoryMapping[key] || key;
        return {
          name: mappedCategory,
          value: value as number,
          color: colorMapping[mappedCategory] || "#999",
          isDotted: true,
        };
      });

    // Filter out Unknown/Deceased from pie chart since it goes outside
    const pieDataWithoutUnknown = pieData.filter(category => category.name !== "Unknown/Deceased");
    
    // Combine matching categories from both datasets (excluding unknown/deceased)
    const combinedPieData = pieDataWithoutUnknown.map((category) => {
      const matchingRespondent = respondentsPieData.find(
        (r) => r.name === category.name
      );
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
      (r) => !pieDataWithoutUnknown.some((p) => p.name === r.name)
    );

    combinedPieData.push(
      ...unmatchedRespondents.map((r) => ({
        ...r,
        respondentsCount: r.value,
        studentsCount: 0,
      }))
    );

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%");

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${vizHeight / 2 + 80})`);

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
    const dotRadius = 4;
    const minDistance = dotRadius * 2 + 1; // Minimum distance between dot centers

    // Create a seeded random function for consistent randomization
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    // List of specific students to show as diamonds
    const diamondStudents = [
      "William George Westmoreland",
      "Lula Iola Mack (Mrs. F. H. Wilkins)",
      "Edward Lee Simon",
      "Henry Napoleon Lee",
      "William Andrew Rogers",
    ];

    // Function to create diamond path
    const createDiamondPath = (cx: number, cy: number, size: number) => {
      return `M ${cx} ${cy - size} L ${cx + size} ${cy} L ${cx} ${
        cy + size
      } L ${cx - size} ${cy} Z`;
    };

    // Function to check if a point is within the allowed area
    const isValidPosition = (x: number, y: number, slice?: any) => {
      const distance = Math.sqrt(x * x + y * y);
      const baseCheck = distance >= 20 && distance <= radius - 8; // Reduced margins

      if (useCircularArrangement) {
        return baseCheck;
      } else {
        // Check if within pie slice with smaller buffer for small slices
        const angle = Math.atan2(y, x) + Math.PI / 2;
        const normalizedAngle = angle < 0 ? angle + 2 * Math.PI : angle;
        
        // Dynamic buffer based on slice size - smaller slices get smaller buffers
        const sliceAngle = slice.endAngle - slice.startAngle;
        const minBuffer = 0.005; // Minimum 0.005 radians (~0.3 degrees)
        const maxBuffer = 0.015; // Maximum 0.015 radians (~0.9 degrees)
        const angleBuffer = Math.max(minBuffer, Math.min(maxBuffer, sliceAngle * 0.02));
        
        const bufferedStartAngle = slice.startAngle + angleBuffer;
        const bufferedEndAngle = slice.endAngle - angleBuffer;
        
        // Less restrictive center and edge checks
        const distanceFromCenter = Math.sqrt(x * x + y * y);
        const tooCloseToCenter = distanceFromCenter < 25;
        const tooCloseToEdge = distanceFromCenter > radius - 10;
        
        return (
          baseCheck &&
          !tooCloseToCenter &&
          !tooCloseToEdge &&
          normalizedAngle >= bufferedStartAngle &&
          normalizedAngle <= bufferedEndAngle
        );
      }
    };

    // Function to check collision with existing dots
    const hasCollision = (x: number, y: number, isDiamond: boolean = false) => {
      const requiredDistance = isDiamond ? minDistance * 1.5 : minDistance; // More space for diamonds
      return allDots.some((dot) => {
        const distance = Math.sqrt((x - dot.x) ** 2 + (y - dot.y) ** 2);
        return distance < requiredDistance;
      });
    };

    // Function to check if point is too close to pie chart strokes
    const isTooCloseToStroke = (x: number, y: number, currentSlice: any) => {
      if (!currentSlice || !showPieChart) return false;
      
      const pointAngle = Math.atan2(y, x) + Math.PI / 2;
      const normalizedAngle = pointAngle < 0 ? pointAngle + 2 * Math.PI : pointAngle;
      const distance = Math.sqrt(x * x + y * y);
      
      // Check distance to slice boundaries
      const distToStartBoundary = Math.abs(normalizedAngle - currentSlice.startAngle);
      const distToEndBoundary = Math.abs(normalizedAngle - currentSlice.endAngle);
      
      // Convert angular distance to linear distance at the point's radius
      const linearDistToStart = distToStartBoundary * distance;
      const linearDistToEnd = distToEndBoundary * distance;
      
      // Very small buffer for stroke avoidance - only 2 pixels
      return linearDistToStart < 2 || linearDistToEnd < 2;
    };

    // Add all students from all categories
    combinedPieData.forEach((categoryData, categoryIndex) => {
      // Get original students for this category
      let originalStudents: any[] = [];

      if (categoryData.name === "Unknown/Deceased") {
        // For combined category, get students from the processed pieData
        const combinedCategory = pieData.find(
          (cat) => cat.name === "Unknown/Deceased"
        );
        originalStudents = combinedCategory?.students || [];
      } else {
        originalStudents =
          studentData.categories.find(
            (cat) => cat.displayName === categoryData.name
          )?.students || [];
      }

      // Create synthetic respondents for this category
      const respondentsCount = categoryData.respondentsCount || 0;
      const respondents = Array.from({ length: respondentsCount }, (_, i) => ({
        name: `${categoryData.name}_respondent_${i}`,
        isRespondent: true,
      }));

      // Combine and shuffle students and respondents for better mixing
      const students = originalStudents.map((s) => ({ ...s, isRespondent: false }));
      const allPeople = [];
      
      // Interleave students and respondents for better distribution
      const maxLength = Math.max(students.length, respondents.length);
      for (let i = 0; i < maxLength; i++) {
        if (i < students.length) allPeople.push(students[i]);
        if (i < respondents.length) allPeople.push(respondents[i]);
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

        // Check if this person should be a diamond before position calculation
        const isDiamond = !person.isRespondent && diamondStudents.includes(person.name);

        // Try to find a non-overlapping position
        do {
          let randomAngle: number;

          if (useCircularArrangement) {
            // Random angle anywhere in the circle
            randomAngle = seededRandom(seed + attempts) * 2 * Math.PI;
            currentSlice = null;
          } else {
            // Better distribution for red dots (Teachers)
            const pieSlice = pie(combinedPieData)[categoryIndex];
            currentSlice = pieSlice;
            const sliceAngle = pieSlice.endAngle - pieSlice.startAngle;
            
            if (categoryData.name === "Teachers") {
              // For Teachers (red dots), use systematic distribution with some randomness
              const totalDots = allPeople.length;
              const dotIndex = personIndex;
              
              // Create a more uniform distribution across the slice
              const baseAngle = (dotIndex / totalDots) * sliceAngle;
              
              // Add controlled randomness to prevent grid patterns
              const randomOffset = (seededRandom(seed + attempts) - 0.5) * (sliceAngle * 0.08);
              
              // Ensure we use the full width of the slice
              const minAnglePadding = 0.003; // Very small padding
              const maxAngle = sliceAngle - 2 * minAnglePadding;
              const clampedAngle = Math.max(minAnglePadding, Math.min(maxAngle, baseAngle + randomOffset));
              
              randomAngle = pieSlice.startAngle + clampedAngle;
            } else {
              // Other categories use original logic with smaller padding
              const anglePadding = Math.max(0.005, sliceAngle * 0.02);
              const availableAngle = sliceAngle - 2 * anglePadding;
              randomAngle =
                pieSlice.startAngle +
                anglePadding +
                seededRandom(seed + attempts) * availableAngle;
            }
          }

          // Random radius within the area with better distribution for Teachers
          const maxRadius = radius - 8;
          const minRadius = 20;
          
          let randomRadius;
          if (categoryData.name === "Teachers") {
            // For Teachers, encourage more even radial distribution
            const radiusRange = maxRadius - minRadius;
            const systematicRadius = (personIndex % 5) / 4; // Create 5 radial bands
            const randomComponent = seededRandom(seed + 1000 + attempts);
            randomRadius = minRadius + (systematicRadius * 0.7 + randomComponent * 0.3) * radiusRange;
          } else {
            randomRadius = minRadius + seededRandom(seed + 1000 + attempts) * (maxRadius - minRadius);
          }

          // Convert polar to cartesian coordinates
          x = Math.cos(randomAngle - Math.PI / 2) * randomRadius;
          y = Math.sin(randomAngle - Math.PI / 2) * randomRadius;

          attempts++;
        } while (
          (hasCollision(x, y) || 
           !isValidPosition(x, y, currentSlice) || 
           isTooCloseToStroke(x, y, currentSlice)) &&
          attempts < maxAttempts
        );

        // Only add the dot if we found a good position
        if (attempts < maxAttempts) {
          allDots.push({ x, y, radius: dotRadius });
          successfulPlacements++;

          // Check if this person should be a diamond
          const isDiamond =
            !person.isRespondent && diamondStudents.includes(person.name);

          let dotElement: any;

          if (isDiamond) {
            // Create diamond shape
            dotElement = g
              .append("path")
              .attr("d", createDiamondPath(x, y, dotRadius + 1))
              .attr("fill", categoryData.color)
              .attr("stroke", "black")
              .attr("stroke-width", 1.5)
              .style("opacity", 1.0)
              .style("cursor", interactive ? "pointer" : "default");
          } else {
            // Create regular circle
            dotElement = g
              .append("circle")
              .attr("cx", x)
              .attr("cy", y)
              .attr("r", dotRadius)
              .attr("fill", categoryData.color)
              .attr("stroke", "black")
              .attr("stroke-width", 1)
              .attr("stroke-dasharray", person.isRespondent ? "3,3" : "none")
              .style("opacity", person.isRespondent ? 0.6 : 1.0)
              .style("cursor", interactive ? "pointer" : "default");
          }

          if (interactive) {
            if (!person.isRespondent) {
              // Original student data - show full details
              dotElement
                .on("mouseenter", function (event: any) {
                  d3.select(this).attr("fill", "black");
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
                  d3.select(this).attr("fill", categoryData.color);
                  setHoveredStudent(null);
                });
            } else {
              // 1910-Respondents data - show basic info
              dotElement
                .on("mouseenter", function (event: any) {
                  d3.select(this).attr("fill", "black");
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
                  d3.select(this).attr("fill", categoryData.color);
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
    });

    // Add unknown/deceased students and respondents outside the pie chart
    const unknownDeceasedCount = respondentsData["unknown/deceased"] || 0;
    const unknownDeceasedStudents = pieData.find(cat => cat.name === "Unknown/Deceased")?.students || [];
    const totalUnknownCount = unknownDeceasedCount + unknownDeceasedStudents.length;
    
    if (totalUnknownCount > 0) {
      const outerRadius = radius + 500;
      const innerRadius = radius + 30; // All unknown data starts close to perimeter
      const outerDots: Array<{ x: number; y: number; radius: number }> = []; // Track outer dots for collision
      let dotIndex = 0;

      // Add unknown/deceased students (solid dots) - mixed with respondents
      unknownDeceasedStudents.forEach((student, studentIndex) => {
        let x: number, y: number;
        let attempts = 0;
        const maxAttempts = 100;
        
        // Try to find non-overlapping position
        do {
          const angle = (dotIndex / totalUnknownCount) * 2 * Math.PI;
          const angleOffset = (seededRandom(studentIndex * 1000 + attempts) - 0.5) * 0.3; // Small angular variation
          const finalAngle = angle + angleOffset;
          
          // Students mixed throughout the outer area
          const randomRadius = innerRadius + seededRandom(studentIndex * 2000 + attempts) * (outerRadius - innerRadius);
          x = Math.cos(finalAngle) * randomRadius;
          y = Math.sin(finalAngle) * randomRadius;
          
          attempts++;
        } while (
          outerDots.some(dot => {
            const distance = Math.sqrt((x - dot.x) ** 2 + (y - dot.y) ** 2);
            return distance < minDistance;
          }) && attempts < maxAttempts
        );
        
        // Only add if we found a good position
        if (attempts < maxAttempts) {
          outerDots.push({ x, y, radius: dotRadius });

        const dotElement = g.append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", dotRadius)
          .attr("fill", colorMapping["Unknown/Deceased"])
          .attr("stroke", "black")
          .attr("stroke-width", 1)
          .style("cursor", interactive ? "pointer" : "default")
          .style("opacity", 1.0);

        if (interactive) {
          dotElement
            .on("mouseenter", function (event: any) {
              d3.select(this).attr("fill", "black");
              setHoveredStudent(student);
              const rect = svgRef.current?.getBoundingClientRect();
              if (rect) {
                setMousePosition({
                  x: event.clientX - rect.left,
                  y: event.clientY - rect.top,
                });
              }
            })
            .on("mouseleave", function () {
              d3.select(this).attr("fill", colorMapping["Unknown/Deceased"]);
              setHoveredStudent(null);
            });
        }
          dotIndex++;
        }
      });

      // Add unknown/deceased respondents (dotted dots) - mixed with students
      for (let i = 0; i < unknownDeceasedCount; i++) {
        let x: number, y: number;
        let attempts = 0;
        const maxAttempts = 100;
        
        // Try to find non-overlapping position
        do {
          const angle = (dotIndex / totalUnknownCount) * 2 * Math.PI;
          const angleOffset = (seededRandom(i * 3000 + attempts) - 0.5) * 0.3; // Small angular variation
          const finalAngle = angle + angleOffset;
          
          // Respondents mixed throughout the same outer area as students
          const randomRadius = innerRadius + seededRandom(i * 4000 + attempts) * (outerRadius - innerRadius);
          x = Math.cos(finalAngle) * randomRadius;
          y = Math.sin(finalAngle) * randomRadius;
          
          attempts++;
        } while (
          outerDots.some(dot => {
            const distance = Math.sqrt((x - dot.x) ** 2 + (y - dot.y) ** 2);
            return distance < minDistance;
          }) && attempts < maxAttempts
        );
        
        // Only add if we found a good position
        if (attempts < maxAttempts) {
          outerDots.push({ x, y, radius: dotRadius });

        const dotElement = g.append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", dotRadius)
          .attr("fill", colorMapping["Unknown/Deceased"])
          .attr("stroke", "black")
          .attr("stroke-width", 1)
          .attr("stroke-dasharray", "3,3")
          .style("cursor", interactive ? "pointer" : "default")
          .style("opacity", 0.6);

        if (interactive) {
          dotElement
            .on("mouseenter", function (event: any) {
              d3.select(this).attr("fill", "black");
              setHoveredStudent({
                name: "1910 Survey Respondent",
                profession: "Unknown/Deceased",
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
              d3.select(this).attr("fill", colorMapping["Unknown/Deceased"]);
              setHoveredStudent(null);
            });
        }
          dotIndex++;
        }
      }
    }

    // Create legend data for HTML legend
    const legendItems = combinedPieData.map((d) => ({
      ...d,
      displayText: d.name.toUpperCase(),
      hasStudents: d.studentsCount > 0,
      hasRespondents: d.respondentsCount > 0,
    }));

    // Add unknown/deceased category for legend
    if (unknownDeceasedCount > 0) {
      legendItems.push({
        name: "Unknown/Deceased (1910 only)",
        color: colorMapping["Unknown/Deceased"],
        displayText: "UNKNOWN/DECEASED (1910 ONLY)",
        hasStudents: false,
        hasRespondents: true,
        isDotted: true,
        value: unknownDeceasedCount,
        studentsCount: 0,
        respondentsCount: unknownDeceasedCount,
      });
    }

    setLegendData(legendItems);
  }, [interactive, showPieChart, useCircularArrangement, redrawKey]);

  return (
    <div className="flex flex-col items-center relative">
      <svg
        ref={svgRef}
        className="max-w-full"
        style={{ height: "800px" }}
      ></svg>
      {interactive && (
        <div className="-mt-2 flex gap-4 mb-4">
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
          <button
            onClick={() => setRedrawKey((prev) => prev + 1)}
            className="px-3 py-1 bg-gray-600 text-white rounded font-power text-sm hover:bg-opacity-80 transition-opacity"
          >
            REDRAW
          </button>
        </div>
      )}

      {/* HTML-based legend */}
      <div className="w-full max-w-4xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {legendData.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white border border-gray-200 rounded-lg p-3 shadow-sm"
            >
              <div className="flex items-center mr-3">
                {item.hasStudents && (
                  <div
                    className="w-3 h-3 rounded-full border border-black mr-1"
                    style={{ backgroundColor: item.color }}
                  />
                )}
                {item.hasRespondents && (
                  <div
                    className="w-3 h-3 rounded-full border border-black opacity-60"
                    style={{
                      backgroundColor: item.color,
                      borderStyle: "dashed",
                      borderWidth: "1px",
                    }}
                  />
                )}
              </div>
              <div className="flex-1">
                <div
                  className="text-sm font-semibold text-gray-800"
                  style={{ fontFamily: "VTC Du Bois, serif" }}
                >
                  {item.displayText}
                </div>
                <div
                  className="text-xs text-gray-600"
                  style={{ fontFamily: "VTC Du Bois, serif" }}
                >
                  {item.hasStudents &&
                    item.hasRespondents &&
                    `Students: ${item.studentsCount} | 1910: ${item.respondentsCount}`}
                  {item.hasStudents &&
                    !item.hasRespondents &&
                    `Students: ${item.studentsCount}`}
                  {!item.hasStudents &&
                    item.hasRespondents &&
                    `1910: ${item.respondentsCount}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
              <li className="text-xs">
                Profession: {hoveredStudent.profession}
              </li>
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
