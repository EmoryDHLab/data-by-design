import perCapitaCovidData from "~/data/playfair/perCapitaCovidData";
import * as d3 from "d3";
import VerticalGrid from "./elements/VerticalGrid";
import HorizontalGrid from "./elements/HorizontalGrid";
import ColorAreaCovid from "./elements/ColorAreaCovid";
import OvalTitle from "./elements/OvalTitle";

export default function RecreationCovid() {
  const height = 44;
  const width = 94;
  const innerGridWidth = (94 / 11) * 10 + 3;
  const maxUK = Math.max(...perCapitaCovidData.map(d => d.ukDeaths));
  const maxUS = Math.max(...perCapitaCovidData.map(d => d.usDeaths));
  const yValues = Array.from({ length: Math.floor(Math.max(maxUK, maxUS) / 50 )}, (_, n) => (n + 1) * 50);
  const yValueHighlights = Array.from({ length: 4}, (_, n) => ( n + 1) * 250);
  const xValues = Array.from({ length: Math.floor(perCapitaCovidData.length / 30 )}, (_, n) => (n + 1) * 30);
  const dates = xValues.map(v => perCapitaCovidData[v - 20]?.date.substring(5)).reverse();
  const ellipse = { cx: 23, cy: 17, rx: (94 / 11) * 1.9, ry: 10 };
  const topText = { text: "COVID-19 DEATHS", x: 11, y: 15 };
  const midText = { text: "a comparison between the", x: 13, y: 18.5 };
  const botText = { text: "U.S. AND U.K.", x: 13, y: 22 };

  const xScale = d3.scaleLinear()
                   .range([0, (width / 11) * 10])
                   .domain([0, perCapitaCovidData.length]);

  const yScale = d3.scaleLinear()
                   .range([height, 0])
                   .domain([0, Math.max(maxUK, maxUS) + 100]);

  const fillAreaPath = d3.area()
                 .curve(d3.curveCatmullRom)
                 .x0((d) => xScale(d.position) + 3)
                 .x1((d) => xScale(d.position) + 3)
                 .y0((d) => yScale(d.ukDeaths) + 3)
                 .y1((d) => yScale(d.usDeaths) + 3);

  const fillColorArea = fillAreaPath(perCapitaCovidData);

  const ukPath = d3.area()
                   .x((d) => xScale(d.position) + 3)
                   .y((d) => yScale(d.ukDeaths) + 3)
                   .curve(d3.curveCatmullRom)
                   .defined(function (d) {
                     return d.ukDeaths;
                   });

  const ukLine = ukPath(perCapitaCovidData);

  const usPath = d3.area()
                   .x((d) => xScale(d.position) + 3)
                   .y((d) => yScale(d.usDeaths) + 3)
                   .curve(d3.curveCatmullRom)
                   .defined(function (d) {
                     return d.usDeaths;
                   });

  const usLine = usPath(perCapitaCovidData);

  const transformUSText = () => {
    return "rotate(-14) translate(" + 33 + "," + 41 + ")";
  }

  const transformUKText = () => {
    return "rotate(-10) translate(" + 36 + "," + 29 + ")";
  }

  return (
    <span className="col-span-6 2xl:col-span-8 col-start-3 2xl:col-start-4 mt-6 flex flex-row">
      <svg
        viewBox="0 0 100 50"
      >
        <rect width="100%" height="100%" fill="#F3ECCB" />
        <svg viewBox="0 0 100 50">
          <g>
            <text
              fill="black"
              x={width / 2}
              y="2.3"
              fontFamily="Times New Roman"
              fontSize="2.3"
            >
              Time
            </text>
            <text
              fill="black"
              y="2"
              fontFamily="Times New Roman"
              fontSize="2.3"
              transform="rotate(-90) translate(-37, 0)"
            >
              Deaths per 1 Million People
            </text>
            <rect
              fill="white"
              x="3"
              y="3"
              height={height}
              width={(width / 11) * 10}
              opacity="0.2"
            ></rect>
            {xValues.map((xValue, index) => {
              return (
                <VerticalGrid
                  key={xValue}
                  xValue={xScale(xValue)}
                  offset={3}
                  text={dates[index]}
                />
              )
            })}
            {yValues.map((yValue, index) => {
              return (
                <HorizontalGrid
                  key={yValue}
                  yValue={yScale(yValue)}
                  text={yValue}
                  innerWidth={innerGridWidth}
                  opacity={yValueHighlights.includes(yValue) ? "0.4" : "0.2"}
                />
              )
            })}
            <ColorAreaCovid area={fillColorArea} />
            <path d={ukLine} strokeWidth=".4px" stroke="#D6BF24"></path>
            <path d={usLine} strokeWidth=".4px" stroke="#BB877F"></path>
            <OvalTitle
              color="#FCE2B0"
              ellipse={ellipse}
              topText={topText}
              midText={midText}
              botText={botText}
            />
            <rect
              fill="transparent"
              x="3"
              y="3"
              height={height}
              width={width}
              stroke="black"
              strokeWidth="0.25"
            ></rect>
            <line
              x1={innerGridWidth}
              y1="3"
              x2={innerGridWidth}
              y2="47"
              stroke="black"
              strokeWidth="0.1"
            ></line>
          <g>
            <text
              fill="black"
              fontSize="3"
              fontFamily="Chancery Cursive"
              transform={transformUSText()}
            >
              U.S. Deaths
            </text>
            <text
              fill="black"
              fontSize="3"
              fontFamily="Chancery Cursive"
              transform={transformUKText()}
            >
              U.K. Deaths
            </text>
          </g>
        </g>
      </svg>
    </svg>
  </span>
  )
}