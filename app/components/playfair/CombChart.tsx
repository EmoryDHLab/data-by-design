import * as d3 from "d3";
import playfairData from "~/data/playfair/playfairImportExport.json"

export default function CombChart() {
  const yearAngle = 3.27;
  const interval = 500000;
  const radiusScale = 1.6;
  const height = 50;
  const width = 34;
  const offset = 65;
  const maxY = Math.max(...playfairData.map(d => d.Imports + d.Exports));
  const maxOuterR = ((maxY / interval + 1) * radiusScale) / 2;

  const importArcs = Array.from({ length: playfairData.length}).map((_, index) => {
    const startAng = ((playfairData[index].Years - 1700) * yearAngle * Math.PI) / 180;

    const endAng = index != playfairData.length - 1
      ? ((playfairData[(index + 1) % playfairData.length].Years - 1700) * yearAngle *  Math.PI) / 180
      : 2 * Math.PI;

    return d3.arc()
             .innerRadius(0)
             .outerRadius(
               ((Number(playfairData[index].Imports) +
                 Number(playfairData[index].Exports)) /
                 interval) *
                 radiusScale
             )
             .startAngle(startAng)
             .endAngle(endAng)
             .call();
  });

  const exportArcs = Array.from({ length: playfairData.length}).map((_, index) => {
    const startAng = ((playfairData[index].Years - 1700) * yearAngle * Math.PI) / 180;

    const endAng = index != playfairData.length - 1
      ? ((playfairData[(index + 1) % playfairData.length].Years - 1700) * yearAngle * Math.PI) / 180
      : 2 * Math.PI;

    return d3.arc()
             .innerRadius(0)
             .outerRadius(
               (playfairData[index].Imports / interval) * radiusScale
             )
             .startAngle(startAng)
             .endAngle(endAng)
             .call();
  });

  const outlineArcs = Array.from({ length: 11}).map((_, index) => {
    const startAng = ((2 * Math.PI) / 11) * index;
    const endAng = ((2 * Math.PI) / 11) * (index + 1);
    return d3.arc()
             .innerRadius(0)
             .outerRadius(maxOuterR)
             .startAngle(startAng)
             .endAngle(endAng)
             .call();
  });

  return (
    <g>
      {importArcs.map((arc, index) => {
        return (
          <path
            fill="#E4AE95"
            key={`${index}importArcs`}
            d={arc}
            transform=" translate(82, 32)"
          />
        );
      })}

      {exportArcs.map((circle, index) => {
        return (
          <path
            fill="#ABAF7B"
            key={`${index}exportArcs`}
            d={circle}
            transform="translate(82, 32)"
          />
        );
      })}

      {outlineArcs.map((arc, index) => {
        return (
          <path
            fill="transparent"
            stroke="#7e7e7e"
            strokeWidth="0.15"
            key={`${index}outlineArcs`}
            d={arc}
            transform=" translate(82, 32)"
          />
        );
      })}

      {Array.from({ length: 8}).map((_, index) => {
        return (
          <circle
            key={`${index}'circle`}
            fill="transparent"
            stroke="#9c9c9c"
            strokeWidth={index % 2 === 0 ? 0.2 : 0.1}
            opacity="1"
            cx={offset + width / 2}
            cy="32"
            r={index * radiusScale}
          />
        );
      })}

      {Array.from({ length: 11 }).map((_, index) => {
        return (
          <text
            key={`${index}Year`}
            fill="black"
            fontSize="2.5"
            fontFamily="Chancery Cursive"
            dy="2.3em"
            transform={`translate(${offset + width / 2 + Math.sin(((2 * Math.PI) / 11) * (index + 0.4)) * (maxOuterR + 6)},${(32 - Math.cos(((2 * Math.PI) / 11) * (index + 0.4)) * (maxOuterR + 6)).toFixed(8)}) rotate(${((index + 0.4) * 360) / 11})`}
          >
            { 1700 + index * 10 }
          </text>
        );
      })}

      <text
        fill="black"
        fontSize="3"
        fontFamily="Chancery Cursive"
        x="78"
        y="12"
      >
        Exports
      </text>

      <text
        fill="black"
        fontSize="3"
        fontFamily="Chancery Cursive"
        x="81"
        y={height / 2}
      >
        Imports
      </text>
    </g>
  );
}