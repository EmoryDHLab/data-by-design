import { useState, useEffect, useRef } from "react";
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
  Unknown: "#C4C4C4",
  Unreported: "#C4C4C4",
  // 1910-Respondents categories
  teachers: "#D92944",
  ministers: "#5A7BC3",
  "government service": "#FFD3D3",
  business: "#CDCE9D",
  "other professions": "#2F4F4F",
  housewives: "#FEC313",
  unknown: "#C4C4C4",
};

export default function Viz4({ interactive = false }: Props) {
  console.log("Viz4 component rendering, interactive:", interactive);
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredStudent, setHoveredStudent] = useState<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [legendData, setLegendData] = useState<any[]>([]);

  useEffect(() => {
    console.log("Viz4 useEffect running");
    if (!svgRef.current) {
      console.log("No svgRef.current");
      return;
    }

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set dimensions
    const width = 1200;
    const height = 900;
    const margin = { top: 100, right: 150, bottom: 100, left: 150 };
    const gridWidth = width - margin.left - margin.right;
    const gridHeight = height - margin.top - margin.bottom;

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`);

    // Process data - all students in a flat array with category info
    const allStudents: any[] = [];
    const categoryTotals: { [key: string]: number } = {};
    
    console.log("studentData:", studentData);
    
    if (!studentData || !studentData.categories) {
      console.error("No studentData or categories found");
      return;
    }
    
    studentData.categories.forEach((category) => {
      categoryTotals[category.displayName] = category.students.length;
      category.students.forEach((student: any) => {
        allStudents.push({
          ...student,
          category: category.displayName,
          color: colorMapping[category.displayName] || "#999",
        });
      });
    });

    // Add 1910 respondents
    const respondentCategories = [
      "teachers", "ministers", "government service", 
      "business", "other professions", "housewives", "unknown"
    ];
    
    respondentCategories.forEach(category => {
      const catData = (respondentsData as any)[category];
      if (Array.isArray(catData)) {
        console.log(`Processing ${category}: ${catData.length} respondents`);
        catData.forEach((respondent: any) => {
          allStudents.push({
            ...respondent,
            category: category.charAt(0).toUpperCase() + category.slice(1),
            color: colorMapping[category] || "#999",
            isRespondent: true,
          });
        });
        const displayName = category.charAt(0).toUpperCase() + category.slice(1);
        categoryTotals[displayName] = (categoryTotals[displayName] || 0) + catData.length;
      }
    });
    
    console.log(`Total students processed: ${allStudents.length}`);

    // Calculate grid dimensions
    const totalStudents = allStudents.length;
    const dotRadius = 4;
    const dotSpacing = 2.5;
    const cols = Math.ceil(Math.sqrt(totalStudents * 1.3)); // Wider grid
    const rows = Math.ceil(totalStudents / cols);

    // Create main group
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 40)
      .attr("text-anchor", "middle")
      .attr("font-size", "24px")
      .attr("font-weight", "bold")
      .attr("fill", "white")
      .text("Atlanta University Graduates - Grid View");

    // Draw dots in grid
    const dots = g
      .selectAll("circle")
      .data(allStudents)
      .enter()
      .append("circle")
      .attr("cx", (d, i) => (i % cols) * (dotRadius * 2 + dotSpacing))
      .attr("cy", (d, i) => Math.floor(i / cols) * (dotRadius * 2 + dotSpacing))
      .attr("r", dotRadius)
      .attr("fill", (d) => d.color)
      .attr("stroke", (d) => d.isRespondent ? "white" : "none")
      .attr("stroke-width", (d) => d.isRespondent ? 1 : 0)
      .attr("stroke-dasharray", (d) => d.isRespondent ? "2,2" : "none")
      .attr("opacity", (d) => {
        if (selectedCategory && d.category !== selectedCategory) {
          return 0.2;
        }
        return d.isRespondent ? 0.5 : 1; // Lower opacity for 1910 respondents
      })
      .style("cursor", "pointer")
      .on("mouseover", function (event, d: any) {
        if (interactive) {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("r", dotRadius * 1.5);
          
          setHoveredStudent(d);
          setMousePosition({ x: event.pageX, y: event.pageY });
        }
      })
      .on("mouseout", function () {
        if (interactive) {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("r", dotRadius);
          
          setHoveredStudent(null);
        }
      });

    // Create legend
    const legend = svg
      .append("g")
      .attr("transform", `translate(${width - margin.right + 20}, ${margin.top})`);

    const categories = Object.keys(categoryTotals).filter(cat => categoryTotals[cat] > 0);
    
    categories.forEach((category, i) => {
      const legendRow = legend
        .append("g")
        .attr("transform", `translate(0, ${i * 25})`)
        .style("cursor", "pointer")
        .on("click", () => {
          setSelectedCategory(selectedCategory === category ? null : category);
        });

      legendRow
        .append("circle")
        .attr("r", 6)
        .attr("fill", colorMapping[category] || "#999")
        .attr("opacity", selectedCategory && selectedCategory !== category ? 0.2 : 1);

      legendRow
        .append("text")
        .attr("x", 15)
        .attr("y", 5)
        .attr("fill", "white")
        .attr("font-size", "14px")
        .attr("opacity", selectedCategory && selectedCategory !== category ? 0.2 : 1)
        .text(`${category} (${categoryTotals[category]})`);
    });

    setLegendData(categories.map(cat => ({
      name: cat,
      count: categoryTotals[cat],
      color: colorMapping[cat] || "#999"
    })));

  }, [interactive, selectedCategory]);

  // Create a simple React-based grid as fallback
  const allStudents: any[] = [];
  
  if (studentData && studentData.categories) {
    studentData.categories.forEach((category) => {
      category.students.forEach((student: any) => {
        allStudents.push({
          ...student,
          category: category.displayName,
          color: colorMapping[category.displayName] || "#999",
        });
      });
    });
  }

  const cols = Math.ceil(Math.sqrt(allStudents.length * 1.2));

  return (
    <div className="w-full bg-[#2A2423] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Grid Visualization of Atlanta University Graduates
          </h2>
          <p className="text-gray-300">
            Each dot represents a graduate. Total: {allStudents.length} students
          </p>
        </div>

        {/* Simple CSS Grid */}
        <div className="relative mb-8">
          <div 
            className="grid gap-1 mx-auto max-w-4xl"
            style={{
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
            }}
          >
            {allStudents.map((student, index) => (
              <div
                key={`${student.name}-${index}`}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all hover:scale-150`}
                style={{ 
                  backgroundColor: student.color,
                  opacity: selectedCategory && student.category !== selectedCategory ? 0.2 : 1
                }}
                title={`${student.name} - ${student.category}`}
                onClick={() => setSelectedCategory(selectedCategory === student.category ? null : student.category)}
              />
            ))}
          </div>
        </div>

        <div className="relative" style={{ minHeight: "500px", display: "none" }}>
          <svg ref={svgRef} className="w-full h-auto" style={{ background: "rgba(0,0,0,0.2)" }} />
          
          {/* Tooltip */}
          {hoveredStudent && (
            <div
              className="absolute z-10 bg-black bg-opacity-90 text-white p-3 rounded-lg pointer-events-none"
              style={{
                left: `${mousePosition.x + 10}px`,
                top: `${mousePosition.y - 30}px`,
                transform: "translate(-50%, -100%)",
              }}
            >
              <div className="font-bold">{hoveredStudent.name}</div>
              <div className="text-sm text-gray-300">
                {hoveredStudent.category}
              </div>
              {hoveredStudent.year && (
                <div className="text-sm text-gray-300">
                  Year: {hoveredStudent.year}
                </div>
              )}
              {hoveredStudent.isRespondent && (
                <div className="text-xs text-gray-400 mt-1">
                  1910 Respondent
                </div>
              )}
            </div>
          )}
        </div>

        {/* Legend Summary */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {legendData.map(item => (
            <div 
              key={item.name}
              className="bg-black bg-opacity-50 p-3 rounded cursor-pointer hover:bg-opacity-70"
              onClick={() => setSelectedCategory(selectedCategory === item.name ? null : item.name)}
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-white text-sm">{item.name}</span>
              </div>
              <div className="text-gray-400 text-xs mt-1">
                {item.count} graduates
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}