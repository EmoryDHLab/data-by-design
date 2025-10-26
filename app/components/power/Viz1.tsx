import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import studentData from "~/data/power/studentChartOne.json";

interface Props {
  interactive?: boolean;
}

const colorMapping: Record<string, string> = {
  "Teachers": "#D92944",
  "Ministers": "#5A7BC3",
  "Government Service": "#FFD3D3",
  "Business": "#CDCE9D",
  "Other Professions": "#2F4F4F",
  "House Wives": "#FEC313",
  "Deceased": "#C4C4C4",
  "Unknown": "#B5CCFF"
};

export default function Viz1({ interactive = false }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredSlice, setHoveredSlice] = useState<string | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set dimensions
    const width = 1000;
    const height = 800;
    const radius = Math.min(width, height) / 2 - 120;

    // Process data - count students in each category
    const pieData = studentData.categories.map(category => ({
      name: category.displayName,
      value: category.students.length,
      color: colorMapping[category.displayName] || "#999"
    }));

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%");

    const g = svg.append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Create pie generator
    const pie = d3.pie<any>()
      .value(d => d.value)
      .sort(null);

    // Create arc generator
    const arc = d3.arc<any>()
      .innerRadius(0)
      .outerRadius(radius);

    // Create hover arc (slightly larger)
    const hoverArc = d3.arc<any>()
      .innerRadius(0)
      .outerRadius(radius + 10);

    // Create pie slices
    const arcs = g.selectAll(".arc")
      .data(pie(pieData))
      .enter().append("g")
      .attr("class", "arc");

    // Add pie slices
    arcs.append("path")
      .attr("d", arc)
      .attr("fill", d => d.data.color)
      .attr("stroke", "white")
      .attr("stroke-width", 2)
      .style("cursor", interactive ? "pointer" : "default")
      .on("mouseenter", interactive ? function(event: any, d: any) {
        setHoveredSlice(d.data.name);
        d3.select(this)
          .transition()
          .duration(200)
          .attr("d", hoverArc);
      } : null)
      .on("mouseleave", interactive ? function(event: any, d: any) {
        setHoveredSlice(null);
        d3.select(this)
          .transition()
          .duration(200)
          .attr("d", arc);
      } : null);

    // Add labels for slices with more than 5% of the pie
    const totalStudents = pieData.reduce((sum, d) => sum + d.value, 0);
    
    arcs.each(function(d: any) {
      const percent = (d.data.value / totalStudents) * 100;
      if (percent > 5) {
        const [x, y] = arc.centroid(d);
        
        d3.select(this).append("text")
          .attr("transform", `translate(${x}, ${y})`)
          .attr("text-anchor", "middle")
          .attr("font-size", "14px")
          .attr("font-weight", "bold")
          .attr("fill", "white")
          .style("pointer-events", "none")
          .text(d.data.name);
          
        d3.select(this).append("text")
          .attr("transform", `translate(${x}, ${y + 18})`)
          .attr("text-anchor", "middle")
          .attr("font-size", "12px")
          .attr("fill", "white")
          .style("pointer-events", "none")
          .text(`${d.data.value} (${percent.toFixed(1)}%)`);
      }
    });

    // Add legend - split between left and right
    const leftLegendData = pieData.slice(0, 4);
    const rightLegendData = pieData.slice(4);
    
    // Left side legend
    const leftLegend = svg.append("g")
      .attr("transform", `translate(20, ${height / 2 - leftLegendData.length * 15})`);

    const leftLegendItems = leftLegend.selectAll(".legend-item-left")
      .data(leftLegendData)
      .enter().append("g")
      .attr("class", "legend-item-left")
      .attr("transform", (d, i) => `translate(0, ${i * 30})`);

    leftLegendItems.append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill", d => d.color)
      .attr("stroke", "white")
      .attr("stroke-width", 1);

    leftLegendItems.append("text")
      .attr("x", 24)
      .attr("y", 9)
      .attr("dy", "0.35em")
      .attr("font-size", "13px")
      .attr("font-weight", "500")
      .text(d => `${d.name} (${d.value})`);

    // Right side legend  
    const rightLegend = svg.append("g")
      .attr("transform", `translate(${width - 180}, ${height / 2 - rightLegendData.length * 15})`);

    const rightLegendItems = rightLegend.selectAll(".legend-item-right")
      .data(rightLegendData)
      .enter().append("g")
      .attr("class", "legend-item-right")
      .attr("transform", (d, i) => `translate(0, ${i * 30})`);

    rightLegendItems.append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill", d => d.color)
      .attr("stroke", "white")
      .attr("stroke-width", 1);

    rightLegendItems.append("text")
      .attr("x", 24)
      .attr("y", 9)
      .attr("dy", "0.35em")
      .attr("font-size", "13px")
      .attr("font-weight", "500")
      .text(d => `${d.name} (${d.value})`);

  }, [interactive]);

  return (
    <div className="flex flex-col items-center">
      <svg ref={svgRef} className="max-w-full"></svg>
      {interactive && hoveredSlice && (
        <div className="mt-4 p-4 bg-gray-100 rounded text-center">
          <p className="font-bold text-lg">{hoveredSlice}</p>
          <p className="text-sm text-gray-600">
            {studentData.categories.find(c => c.displayName === hoveredSlice)?.students.length} alumni
          </p>
        </div>
      )}
    </div>
  );
}