import * as d3 from "d3";
import VerticalGrid from "./elements/VerticalGrid";
import HorizontalGrid from "./elements/HorizontalGrid";
import OvalTitle from "./elements/OvalTitle";
import playfairData from "~/data/image/playfairImportExport.json";
import ScatterPlot from "./elements/ScatterPlot";
import StippleHatch from "./elements/StippleHatch";
import ColorArea from "./elements/ColorArea";
import { Paths } from "./scrollytellElements/Paths";
import { useRef } from "react";

const height = 44;
const width = 94;
const innerGridWidth = (width / 11) * 10 + 5.5;
const maxImport = 3300000; // Math.max(...playfairData.map((d: PlayfairData) => d.Imports))
const maxExport = 4900000; // Math.max(...playfairData.map((d: PlayfairData) => d.Exports))
const maxY = Math.max(maxImport, maxExport + 1_000_000);
const interval = 200000;

const xScaleDomain = [1700, 1800]; // d3.extent(playfairData.map(d => d.Years))
const xScale = d3
  .scaleLinear()
  .range([0, (width / 11) * 10])
  .domain(xScaleDomain);

const yScale = d3
  .scaleLinear()
  .range([height, 0])
  .domain([0, maxY + 200_000]);

const xMinorScale = d3
  .scaleLinear()
  .range([0, (width / 100) * 9])
  .domain([1_770, 1_780]);

const yValues = yScale.ticks(20);
const xValues = xScale.ticks();
const xMinorValues = xMinorScale.ticks();

const scatterImport = playfairData
  .map((d) => ({
    x: d.Years,
    y: d.Imports,
  }))
  .slice(0, 19);

const scatterExport = playfairData
  .map((d) => ({
    x: d.Years,
    y: d.Exports,
  }))
  .slice(0, 19);

const formatYValue = (value: number) => {
  if (value < interval || value >= 6_000_000)
    return { formattedValue: " ", millions: false };
  if (value === interval) return { formattedValue: "200,000", millions: false };
  if (value < 1_000_000)
    return { formattedValue: value / 100_000, millions: false };
  const shortValue = value / 1_000_000;
  if (shortValue === 1 && shortValue % 1 === 0)
    return { formattedValue: `${shortValue}`, millions: true };
  if (shortValue % 1 === 0)
    return { formattedValue: `${shortValue}`, millions: true };
  return { formattedValue: value / 1_000_000, millions: false };
};

const scaleMapper = (sOut: Array<number>, sIn: Array<number>) => {
  const m = (1.0 * sOut[1] - sOut[0]) / (sIn[1] - sIn[0]);
  return (x: number) => sOut[0] + m * (x - sIn[0]);
};

export default function Recreation({
  scrollProgress,
}: {
  scrollProgress: number;
}) {
  const svgRef = useRef<SVGSVGElement>(null);

  const transitionInOut = (arrayIn: Array<number>, arrayOut: Array<number>) => {
    const progToOpacityIn = scaleMapper([0.0, 1.0], arrayIn);
    const progToOpacityOut = scaleMapper([1.0, 0.0], arrayOut);
    if (scrollProgress <= arrayIn[0]) {
      return 0;
    } else if (scrollProgress > arrayIn[0] && scrollProgress <= arrayIn[1]) {
      return progToOpacityIn(scrollProgress);
    } else if (scrollProgress > arrayOut[0] && scrollProgress <= arrayOut[1]) {
      return progToOpacityOut(scrollProgress);
    } else if (scrollProgress >= arrayIn[1] && scrollProgress <= arrayOut[0]) {
      return 1;
    }
    return 0;
  };

  const transitionIn = (array: Array<number>) => {
    if (scrollProgress <= array[0]) {
      return 0;
    } else if (scrollProgress > array[0] && scrollProgress <= array[1]) {
      const progToOpacity = scaleMapper([0.0, 1.0], array);
      return progToOpacity(scrollProgress);
    } else {
      return 1;
    }
  };

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 105 55"
      className="w-full md:h-full flex md:ml-6 p-3 md:p-0 pt-10 md:pt-0"
    >
      <g
        className="transition-all duration-1000 origin-center"
        opacity={scrollProgress > 3.5 && scrollProgress < 13 ? 1 : 0}
        transform="translate(0.8, -0.4) scale(0.9, 1)"
        // transform={`scale(${
        //   scrollProgress > 3.25 && scrollProgress < 13 ? 1 : 0.85
        // })`}
      >
        <rect width="100%" height="100%" fill="#F3ECCB"></rect>
        <rect
          x={0.25}
          y={0.25}
          width={104.5}
          height={54.5}
          fill="none"
          strokeWidth={0.5}
          stroke="black"
        ></rect>
        <rect
          x={1}
          y={1}
          width={103}
          height={53}
          fill="none"
          strokeWidth={0.1}
          stroke="black"
        ></rect>
        <rect
          fill="transparent"
          x={5.5}
          y={6}
          height={height - 0.5}
          width={width - 2}
          stroke="black"
          strokeWidth={0.25}
        ></rect>
        <g>
          <rect
            fill="white"
            x={5.5}
            y={5.5}
            height={height}
            width={(width / 11) * 10}
            opacity={0.2}
          ></rect>
          {xValues.map((xValue, _) => {
            return (
              <VerticalGrid
                key={xValue}
                xValue={xScale(xValue)}
                xOffset={5.5}
                y1Offset={1}
                text={xValue}
                textXOffset={4.25}
                textYOffset={5.5}
              />
            );
          })}
          {yValues.map((yValue, _) => {
            const { formattedValue, millions } = formatYValue(yValue) as {
              formattedValue: number | string;
              millions: boolean;
            };
            return (
              <HorizontalGrid
                key={yValue}
                yValue={yScale(yValue)}
                text={formattedValue}
                millions={millions}
                innerWidth={innerGridWidth}
                opacity={(yValue / 1_000_000) % 1 === 0 ? 0.2 : 0.1}
              />
            );
          })}
          <g
            opacity={
              scrollProgress > 3 && scrollProgress < 6
                ? transitionInOut([3, 3.5], [5, 5.5])
                : 0
            }
            // transform="translate(6, 2) scale(0.9)"
          >
            {scatterImport.map((plot) => {
              return (
                <ScatterPlot
                  key={plot.x + plot.y}
                  xValue={xScale(plot.x)}
                  yValue={yScale(plot.y)}
                  color="#D6BF24"
                />
              );
            })}
            {scatterExport.map((plot) => {
              return (
                <ScatterPlot
                  key={plot.x + plot.y}
                  xValue={xScale(plot.x)}
                  yValue={yScale(plot.y)}
                  color="#BB877F"
                />
              );
            })}
          </g>
          {/* Color Areas */}
          <g opacity={scrollProgress >= 9.5 ? transitionIn([9.5, 10]) : 0}>
            <ColorArea opacity={1} />
          </g>
          {/* Import Export Lines */}
          <g
            opacity={scrollProgress >= 4 ? transitionIn([4, 4.5]) : 0}
            transform="translate(0,0)"
          >
            <path
              d={scrollProgress <= 8 ? Paths.import1stEd : Paths.import3rdEd}
              stroke="#F4B20C"
              strokeWidth="0.3px"
              fill="none"
              className="transition-all duration-1000"
              // strokeLinecap="round"
              strokeDasharray={
                scrollProgress <= 8 ? 83.06825256347656 : 112.31173706054688
              }
              strokeDashoffset={
                scrollProgress >= 4.5
                  ? 0
                  : scrollProgress <= 8
                  ? 83.06825256347656
                  : 112.31173706054688
              }
            />
            <path
              d={scrollProgress <= 8 ? Paths.export1stEd : Paths.export3rdEd}
              stroke="#56190F"
              strokeWidth="0.3px"
              fill="none"
              className="transition-all duration-1000"
              strokeDasharray={
                scrollProgress <= 8 ? 139.813720703125 : 157.57818603515625
              }
              strokeDashoffset={
                scrollProgress >= 4.5
                  ? 0
                  : scrollProgress <= 8
                  ? 139.813720703125
                  : 157.57818603515625
              }
            />
          </g>

          <StippleHatch
            opacity={
              scrollProgress >= 5.5 && scrollProgress < 7.5
                ? transitionInOut([5.5, 6], [7, 7.75])
                : 0
            }
          />
          {/* Detail lines */}
          {xMinorValues.map((xValue, _) => {
            return (
              <VerticalGrid
                key={xValue}
                xValue={xMinorScale(xValue)}
                xOffset={(width / 11) * 7 + 5.5}
                text={" "}
                opacity={
                  scrollProgress >= 6.5 && scrollProgress < 9
                    ? transitionInOut([6.5, 7], [7.5, 8.5])
                    : 0
                }
              />
            );
          })}
          {/* Labels */}
          <g
            opacity={scrollProgress >= 9.5 ? transitionIn([9.5, 10]) : 0}
            className="tracking-wide"
          >
            <path
              fill="none"
              stroke="none"
              opacity={0}
              id="export-curve"
              d="M55.111,37.336 C55.1114,37.4151,55.3299,37.201,55.5406,36.9836 C55.7514,36.7662,55.952,36.543,56.1559,36.3184 C56.3598,36.0939,56.5625,35.8646,56.764,35.6363 C56.9655,35.4079,57.1689,35.1779,57.365,34.9483 C57.561,34.7187,57.7519,34.4942,57.9401,34.2585 C58.1284,34.0227,58.3167,33.7808,58.4943,33.5339 C58.6718,33.2871,58.8428,33.0334,59.0056,32.7772 C59.1683,32.521,59.3236,32.2616,59.4707,31.9966 C59.6178,31.7317,59.7586,31.4613,59.888,31.1877 C60.0175,30.9141,60.132,30.6342,60.2476,30.3549 C60.3633,30.0756,60.4731,29.7935,60.5819,29.5119 C60.6907,29.2303,60.7948,28.9515,60.9005,28.6653 C61.0061,28.379,61.1136,28.0812,61.2159,27.7944 C61.3182,27.5077,61.4155,27.23,61.5145,26.9448 C61.6134,26.6597,61.7119,26.3719,61.8095,26.0835 C61.9071,25.7951,62.0052,25.5016,62.1,25.2144 C62.1949,24.9271,62.2865,24.6467,62.3786,24.36 C62.4706,24.0733,62.5634,23.7844,62.6522,23.4942 C62.741,23.204,62.8276,22.9116,62.9115,22.6188 C62.9954,22.326,63.0747,22.0294,63.1556,21.7372 C63.2365,21.4449,63.3157,21.1575,63.3969,20.8655 C63.4782,20.5735,63.5607,20.2771,63.6433,19.9852 C63.7258,19.6932,63.807,19.4047,63.8923,19.1138 C63.9776,18.823,64.0499,18.5225,64.155,18.2399"
            />
            <path
              fill="none"
              stroke="none"
              opacity={0}
              id="import-curve"
              d="M5.60,47.29 C5.657194994049331,47.28820785062805,5.976889254978827,47.283181142553,6.193169964295988,47.2792471037683 C6.409450673613149,47.2753130649836,6.631394153326503,47.27096815370096,6.847684255902967,47.266395767291804 C7.063974358479432,47.261823380882646,7.276218042963668,47.257020927023426,7.490910579754774,47.251812785313355 C7.7056031165458805,47.246604643603284,7.920357042056617,47.24108130389341,8.135839476649604,47.235146917031386 C8.351321911242591,47.22921253016936,8.567580710751585,47.22292625214753,8.783805187312694,47.21620646414123 C9.000029663873804,47.20948667613493,9.21791394253102,47.20235331846456,9.433186336016263,47.19482818899359 C9.648458729501506,47.18730305952262,9.861469637380111,47.179571232501296,10.075439548224155,47.171055687315416 C10.2894094590682,47.16254014212954,10.502119127394058,47.15321730823174,10.717005801080534,47.14373491787833 C10.93189247476701,47.134252527524914,11.149131921170037,47.12445586538446,11.364759590343008,47.11416134519496 C11.580387259515978,47.103866825005454,11.795024092078194,47.09372484814985,12.010771816118359,47.0819677967413 C12.226519540158524,47.07021074533276,12.444176176410625,47.05834849222701,12.659245934583993,47.043619036743706 C12.87431569275736,47.0288895812604,13.086608234662195,47.01412664539592,13.301190365158563,46.99359106384146 C13.51577249565493,46.973055482286995,13.733279255779067,46.95040790300408,13.946738717562202,46.92040554741695 C14.160198179345336,46.89040319182982,14.370012999609227,46.854105067495084,14.581947135857371,46.8135769303187 C14.793881272105516,46.77304879314232,15.0087072952895,46.726624029797,15.218343535051064,46.67723672435864 C15.427979774812627,46.627849418920285,15.631680266589706,46.57112168002098,15.839764574426745,46.51725309768854 C16.047848882263782,46.4633845153561,16.256293126527186,46.402711781187506,16.466849382073296,46.35402523036401 C16.677405637619405,46.30533867954051,16.890905961552022,46.26152492971087,17.1031021077034,46.22513379274754 C17.315298253854777,46.18874265578421,17.526424228982997,46.16031505856062,17.74002625898157,46.135678408584006 C17.95362828898014,46.11104175860739,18.170128450458215,46.098690685894034,18.384714287694827,46.07731389288785 C18.59930012493144,46.05593709988167,18.813621297926254,46.033616898137474,19.02754128240125,46.00741765054691 C19.241461266876243,45.98121840295635,19.455156496193787,45.95218167870345,19.668234194544798,45.920118407344496 C19.88131189289581,45.888055135985546,20.09416580509378,45.8557769518881,20.306007472507314,45.815038022393196 C20.51784913992085,45.77429909289829,20.72961429354429,45.72466348275457,20.939284199025998,45.67568483037506 C21.148954104507705,45.62670617799555,21.35406234086767,45.56676254631363,21.56402690539755,45.521166108116134 C21.77399146992743,45.475569669918634,21.986128260902767,45.43487106113357,22.19907158620527,45.40210620119006 C22.412014911507775,45.369341341246546,22.626710395269498,45.34582069778063,22.841686857212576,45.32457694845507 C23.056663319155653,45.303333199129504,23.273847069370117,45.29370833555338,23.488930357863737,45.27464370523667 C23.704013646357357,45.25557907491996,23.918307257207346,45.23478891179024,24.1321865881743,45.210189166554784 C24.346065919141253,45.18558942131933,24.558854992736595,45.1586265803385,24.77220634366545,45.12704523382392 C24.985557694594302,45.09546388730934,25.200264876146054,45.056909768208676,25.412294693747427,45.02070108746732 C25.6243245113488,44.98449240672597,25.832664442579972,44.94583036325734,26.04438524927368,44.909793149375815 C26.25610605596739,44.87375593549429,26.469394150607016,44.838488718240484,26.68261953390968,44.804477804178134 C26.895844917212344,44.770466890115785,27.11022597166693,44.7377486939333,27.32373754908966,44.70572766500174 C27.53724912651239,44.67370663607018,27.750213312111118,44.64213942958821,27.963688998446045,44.612351630588755 C28.177164684780973,44.5825638315893,28.39099203689363,44.553276681722835,28.604591667099218,44.52700087100497 C28.818191297304807,44.50072506028711,29.030677504862684,44.4756067952636,29.24528677967957,44.45469676628156 C29.459896054496458,44.43378673729951,29.676942020002933,44.41526258950778,29.892247316000546,44.4015406971127 C30.10755261199816,44.38781880471762,30.322001396477532,44.37888041211978,30.53711855566524,44.37236541191106 C30.75223571485295,44.36585041170235,30.967611384399497,44.36513681315659,31.182950271126803,44.3624506958604 C31.39828915785411,44.35976457856422,31.61401887742721,44.35945219571364,31.829151876029087,44.35624870813396 C32.04428487463096,44.353045220554286,32.25825015780095,44.34908991834275,32.47374826273806,44.34322977038234 C32.689246367675175,44.337369622421924,32.90623904307265,44.32982702796606,33.12214050565177,44.321087820371474 C33.33804196823089,44.31234861277689,33.55394833951162,44.30247393371073,33.76915703821277,44.2907945248148 C33.984365736913915,44.27911511591887,34.198056153667494,44.26690687527208,34.413392697858654,44.2510113669959 C34.628729242049815,44.235115858719716,34.84595612827678,44.213414186845064,35.06117630335972,44.19542147515773 C35.27639647844266,44.177428763470395,35.48971944460006,44.156934945344915,35.7047137483563,44.143055096871876 C35.91970805211253,44.12917524839884,36.13632794555584,44.12080129233831,36.35114212589713,44.1121423843195 C36.56595630623841,44.10348347630069,36.77785824448312,44.09604762191381,36.99359883040402,44.091101648759015 C37.209339416324916,44.08615567560422,37.42928264800818,44.08272210580056,37.64558564142251,44.08246654539074 C37.86188863483683,44.08221098498091,38.07629405568636,44.08668187807667,38.29141679088995,44.08956828630007 C38.50653952609353,44.092454694523475,38.72139968170879,44.1005662985292,38.93632205264402,44.09978499473115"
            />
            <text
              fill="black"
              fontSize="3"
              fontFamily="Chancery Cursive"
              transform="translate(9,-4)"
            >
              <textPath alignmentBaseline="central" xlinkHref="#import-curve">
                Line of Imports
              </textPath>
            </text>
            <text
              fill="black"
              fontSize={3}
              fontFamily="Chancery Cursive"
              transform="translate(-3,0)"
            >
              <textPath alignmentBaseline="central" xlinkHref="#export-curve">
                Line of Exports
              </textPath>
            </text>
          </g>
          <OvalTitle
            color="#FCE2B0"
            ellipse={{ cx: 28, cy: 19, rx: (width / 11) * 1.9, ry: 10 }}
            topText={{ text: "EXPORTS & IMPORTS", x: 14, y: 17 }}
            midText={{ text: "to and from all", x: 22, y: 20.5 }}
            botText={{ text: "NORTH AMERICA", x: 15, y: 24 }}
            opacity={scrollProgress >= 10.5 ? transitionIn([10.5, 11]) : 0}
            transform="translate(5.5, 1) scale(0.88)"
          />
          <g opacity={scrollProgress >= 11.5 ? transitionIn([11.5, 12.5]) : 0}>
            <text
              fill="black"
              x={width / 2}
              y={3.5}
              fontFamily="Times New Roman"
              fontSize={2.5}
              transform="translate(2,2)"
            >
              Time
            </text>
            <text
              fill="black"
              y={4}
              x={-27.5}
              fontFamily="Times New Roman"
              fontSize={2.5}
              transform="rotate(-90) translate(-1.5,0.7)"
              textAnchor="middle"
            >
              Money
            </text>
          </g>
        </g>
      </g>
      <g
        className="transition-opacity duration-1000"
        opacity={scrollProgress > 0 && scrollProgress < 1.5 ? 1 : 0}
      >
        <image
          href="/images/image/1786.jpg"
          width={105}
          height={55}
          x={0}
          y={0}
        />
      </g>
      <g
        className="transition-opacity duration-1000"
        opacity={scrollProgress > 1.5 && scrollProgress < 2.5 ? 1 : 0}
      >
        <image
          href="/images/image/extras/0224-playfair1787-cropped.jpg"
          width={105}
          height={55}
          x={0}
          y={0}
        />
      </g>
      <g
        className="transition-opacity duration-1000"
        opacity={scrollProgress > 2.5 && scrollProgress < 3.5 ? 1 : 0}
      >
        <image
          href="/images/image/1786.jpg"
          width={105}
          height={55}
          x={0}
          y={0}
        />
      </g>

      <g
        className="transition-opacity duration-1000"
        opacity={scrollProgress > 2.5 && scrollProgress < 3.5 ? 1 : 0}
      >
        <image
          href="/images/image/extras/0201-playfair-northam-cropped.jpg"
          width={105}
          height={55}
          x={0}
          y={0}
        />
      </g>

      <g
        className="transition-opacity duration-1000"
        opacity={scrollProgress > 12.5 && scrollProgress < 20 ? 1 : 0}
        // opacity={scrollProgress > 12.5 ? transitionIn([12.5, 12.75]) : 0}
      >
        <image
          href="/images/image/extras/0201-playfair-northam-cropped.jpg"
          width={105}
          height={55}
          x={0}
          y={0}
        />
      </g>
    </svg>
  );
}
