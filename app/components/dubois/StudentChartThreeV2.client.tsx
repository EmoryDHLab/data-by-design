import { useEffect, useState } from "react";
import { useResizeObserver } from "~/hooks";
import responseData from "~/data/dubois/studentResponses.json";
import ResponseV2 from "./chartThree/ResponseV2";
import { random } from "~/utils";
import ResponseDot from "./chartThree/ResponseDot";
import type { SimpleDot } from "./types";

const StudentChartThreeV2 = () => {
  const { width, height } = useResizeObserver().windowSize;
  const [fontSize, setFontSize] = useState<number>(1);
  const [rightColumnX, setRightColumnX] = useState<number>(0);
  const [leftColumnX, setLeftColumnX] = useState<number>(0);
  const [bottomRowY, setBottomRowY] = useState<number>(0);
  const [activeResponse, setActiveResponse] = useState<string | undefined>(undefined);
  const [chartWidth, setChartWidth] = useState<number>(0);
  const [chartHeight, setChartHeight] = useState<number>(0);
  const [eltDotsState, setEltDotsState] = useState<SimpleDot[]>([]);
  const [ceduDotsState, setCeduDotsState] = useState<SimpleDot[]>([]);
  const [hindDotsState, setHindDotsState] = useState<SimpleDot[]>([]);
  const [plDotsState, setPlDotsState] = useState<SimpleDot[]>([]);


  useEffect(() => {
    if (!width || !height) return;
    setChartWidth(width * 0.5);
    setChartHeight(height * 0.5);
  }, [width, height]);

  useEffect(() => {
  const checkOverlapping = (dot: SimpleDot, existing: SimpleDot[]) => {
    let overlapping = false;

    for (let count = 0; count < existing.length; count++) {
      let other = existing[count];
      let distance = Math.hypot(other.x - dot.x, other.y - dot.y)
      if (distance < 15) {
          // console.log("🚀 ~ file: StudentChartThreeV2.client.tsx:33 ~ checkOverlapping ~ other:", other)
          // console.log("🚀 ~ file: StudentChartThreeV2.client.tsx:39 ~ checkOverlapping ~ distance:", distance)
          overlapping = true;
        }
      }

      return overlapping;
    };

    if (chartHeight === 0 || chartWidth === 0) return;

    setFontSize(chartHeight * 0.025);
    setLeftColumnX(chartWidth * 0.25);
    setRightColumnX(chartWidth * 0.75);
    setBottomRowY((chartHeight / 2) + (chartHeight * 0.04));

    const eltDots: SimpleDot[] = [];
    const ceduDots: SimpleDot[] = [];
    const hindDots: SimpleDot[] = [];
    const plDots: SimpleDot[] = [];

    while (eltDots.length < responseData.elt.length) {
      let dot = {
        x: random(15, (chartWidth / 2) - 15),
        y: random(15, (chartHeight / 2 - 50)) + 40,
        d: 2,
        id: ""
      };
      // console.log("🚀 ~ file: StudentChartThreeV2.client.tsx:65 ~ useEffect ~ dot:", dot)

      const overlapping = checkOverlapping(dot, eltDots);
      if (!overlapping) {
        eltDots.push(dot);
        dot.id = responseData.elt[eltDots.length - 1].id;
        responseData.elt[eltDots.length - 1].x = dot.x;
        responseData.elt[eltDots.length - 1].y = dot.y;
      }
    }

    while (ceduDots.length < responseData.cedu.length) {
      let dot = {
        x: random((chartWidth / 2) + 15, chartWidth - 15),
        y: random(15, (chartHeight / 2 - 50)) + 40,
        d: 2,
        id: ""
      };

      const overlapping = checkOverlapping(dot, ceduDots);
      if (!overlapping) {
        ceduDots.push(dot);
        dot.id = responseData.cedu[ceduDots.length - 1].id;
        responseData.cedu[ceduDots.length - 1].x = dot.x;
        responseData.cedu[ceduDots.length - 1].y = dot.y;
      }
    }

    while (hindDots.length < responseData.hind.length) {
      let dot = {
        x: random(15, (chartWidth / 2) - 15) + 15,
        y: random((chartHeight / 2 + 50) + 15, chartHeight - 15),
        d: 2,
        id: ""
      };

      const overlapping = checkOverlapping(dot, hindDots);
      if (!overlapping) {
        hindDots.push(dot);
        dot.id = responseData.hind[hindDots.length - 1].id;
        responseData.hind[hindDots.length - 1].x = dot.x;
        responseData.hind[hindDots.length - 1].y = dot.y;
      }
    }

    while (plDots.length < responseData.pl.length) {
      let dot = {
        x: random((chartWidth / 2) + 15, chartWidth - 15),
        y: random((chartHeight / 2 + 60) + 25, chartHeight - 25),
        d: 2,
        id: ""
      };

      const overlapping = checkOverlapping(dot, plDots);
      if (!overlapping) {
        plDots.push(dot);
        dot.id = responseData.pl[plDots.length - 1].id;
        responseData.pl[plDots.length - 1].x = dot.x;
        responseData.pl[plDots.length - 1].y = dot.y;
      }
    }

    setEltDotsState(eltDots);
    setCeduDotsState(ceduDots);
    setHindDotsState(hindDots);
    setPlDotsState(plDots);

  }, [chartHeight, chartWidth]);

  return (
    <>
      <p className="font-bold text-lg md:text-xl 2xl:text-2xl text-center font-duboisWide uppercase">
        A CHART ILLUSTRATING THE WORDS OF THE BLACK COLLEGE GRADUATES FROM ACROSS THE UNITED STATES
        WHO CONTRIBUTED TO DU BOIS'S RESEARCH.
      </p>
      <div className="flex flex-col md:flex-row md:flex-wrap font-duboisNarrow text-base text-md text-center uppercase md:mt-8">
        <ul className="my-6 md:my-0 md:w-1/3">
          <li>Prepared and executed by, Tanvi Sharma,</li>
          <li>Anna Mola, Nicholas Yang, and Lauren Klein</li>
          <li>Under the Auspices of the </li>
          <li>Digital Humanities Lab</li>
          <li>Emory University, Atlanta, GA.</li>
          <li>United States of America</li>
        </ul>
        <div className="md:w-2/3 md:mb-8">
          <p>
            The previous chart visualized information about the graduates of Atlanta
            University in the context of the total number of Black college graduates
            in the United States as of 1909.
          </p>
          <p>
            As part of <cite>The College-Bred Negro American</cite>, these same college
            graduates were surveyed about their lives. This chart visualizes their words.
          </p>
        </div>
      </div>

      <div className="relative m-auto" style={{ width: `${chartWidth}px`, height: `${chartHeight}px` }}>
        <div id="chart-3v2">
        </div>
        {width && height &&
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="absolute top-0"
            style={{ width: `${chartWidth}px` }}
          >
            {/* <rect x={0} y={0} height={chartHeight} width={chartWidth} fill="deeppink" fillOpacity={0.3} /> */}
            <text
              x={leftColumnX}
              y={fontSize}
              fontSize={fontSize}
              fontFamily="VTC Du Bois, serif"
              className="font-bold uppercase"
              textAnchor="middle"
            >
              <tspan>Reports of early life</tspan>
              <tspan x={leftColumnX} dy={fontSize}>and training</tspan>
            </text>

            <text
              x={rightColumnX}
              y={fontSize}
              fontSize={fontSize}
              fontFamily="VTC Du Bois, serif"
              className="font-bold uppercase"
              textAnchor="middle"
            >
              <tspan>How shall you educate your</tspan>
              <tspan
              x={rightColumnX}
              dy={fontSize}
              >
                children
              <tspan
                dx={1}
                fontFamily="VTC Du Bois Narrow, serif"
              >
                (i.e., to a trade in,
              </tspan>
              </tspan>
              <tspan
                dy={fontSize}
                x={rightColumnX}
                fontFamily="VTC Du Bois Narrow, serif"
              >
                college, in a profession, etc.)
              </tspan>
            </text>

            <text
              x={leftColumnX}
              y={bottomRowY}
              fontSize={fontSize}
              fontFamily="VTC Du Bois, serif"
              className="uppercase font-bold"
              textAnchor="middle"
            >
              <tspan>Briefly, what is your present practical</tspan>
              <tspan x={leftColumnX} dy={fontSize }>philosophy in regard to the negro race</tspan>
              <tspan x={leftColumnX} dy={fontSize }>in America?</tspan>
            </text>

            <text
              x={rightColumnX}
              y={bottomRowY}
              fontSize={fontSize}
              fontFamily="VTC Du Bois, serif"
              className="uppercase font-bold"
              textAnchor="middle"
            >
              <tspan>What have been your chief</tspan>
              <tspan
                x={rightColumnX}
                dy={fontSize}
              >
                hinderances?
              </tspan>
              <tspan
                dy={fontSize}
                x={rightColumnX}
                fontFamily="VTC Du Bois Narrow, serif"
              >
                (i.e., how has prejudice or,
              </tspan>
              <tspan
                dy={fontSize}
                x={rightColumnX}
                fontFamily="VTC Du Bois Narrow, serif"
              >
                lack of opportunity worked)
              </tspan>
              <tspan
                dy={fontSize}
                x={rightColumnX}
                fontFamily="VTC Du Bois Narrow, serif"
              >
                in your case?)
              </tspan>
            </text>

            {eltDotsState.map ((response) => {
              return (
                <ResponseDot
                  key={`dot-${response.id}`}
                  response={response}
                  color="#D92944"
                  setActiveResponse={setActiveResponse}

                />
              )
            })}

            {ceduDotsState.map ((response) => {
              return (
                <ResponseDot
                  key={`dot-${response.id}`}
                  response={response}
                  color="#9AE4C1"
                  setActiveResponse={setActiveResponse}

                />
              )
            })}

            {hindDotsState.map ((response) => {
              return (
                <ResponseDot
                  key={`dot-${response.id}`}
                  response={response}
                  color="#FEC313"
                  setActiveResponse={setActiveResponse}

                />
              )
            })}

            {plDotsState.map ((response) => {
              return (
                <ResponseDot
                  key={`dot-${response.id}`}
                  response={response}
                  color="#3B6FE0"
                  setActiveResponse={setActiveResponse}

                />
              )
            })}

            {responseData.elt.map ((response, index) => {
              return (
                <ResponseV2
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#D92944"
                  textColor="white"
                  canvasWidth={chartWidth}
                  canvasHeight={chartHeight}
                  dot={eltDotsState[index]}
                />
              )
            })}

            {responseData.cedu.map ((response, index) => {
              return (
                <ResponseV2
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#9AE4C1"
                  textColor="black"
                  canvasWidth={chartWidth}
                  canvasHeight={chartHeight}
                  dot={ceduDotsState[index]}
                />
              )
            })}

            {responseData.hind.map ((response, index) => {
              return (
                <ResponseV2
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#FEC313"
                  textColor="black"
                  canvasWidth={chartWidth}
                  canvasHeight={chartHeight}
                  dot={hindDotsState[index]}
                />
              )
            })}

            {responseData.pl.map ((response, index) => {
              return (
                <ResponseV2
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#3B6FE0"
                  textColor="white"
                  canvasWidth={chartWidth}
                  canvasHeight={chartHeight}
                  dot={plDotsState[index]}
                />
              )
            })}

          </svg>
        }
      </div>
      <div className="mx-4 md:mx-auto font-dubois uppercase text-justify tracking-wider">
        <p>
          This visualization enriches the data associated with the 3,856 Black college
          graduates who were documented in <cite>The College-Bred Negro American</cite>. As part of
          the study, they were also asked to provide written responses to four questions:
          their thoughts on their own "early life and training," their plans to educate
          their children, the "chief hindrances" they had faced, and their “present practical
          philosophy in regard to the Negro race in America,” abbreviated in the study as
          "philosophy of life." About 800 responses to the survey were received, a selection
          of which were published.
        </p>
      </div>
    </>
  );
}

export default StudentChartThreeV2;