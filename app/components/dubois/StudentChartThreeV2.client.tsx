import { useEffect, useState } from "react";
import { useResizeObserver } from "~/hooks";
import responseData from "~/data/dubois/studentResponses.json";
import ResponseV2 from "./chartThree/ResponseV2";
import ResponseDot from "./chartThree/ResponseDot";

interface Props {
  interactive?: boolean;
  scrollProgress?: number | undefined;
}

const chartHeight = 900;
const chartWidth = 630;
const leftColumnX = 157.5;
const rightColumnX = 472.5;
const bottomRowY = 450;

const StudentChartThreeV2 = ({
  interactive = false,
  scrollProgress,
}: Props) => {
  const { width, height } = useResizeObserver().windowSize;
  const [activeResponse, setActiveResponse] = useState<string | undefined>(
    undefined
  );
  const [eltOpacity, setEltOpacity] = useState<number>(100);
  const [ceduOpacity, setCeduOpacity] = useState<number>(100);
  const [hindOpacity, setHindOpacity] = useState<number>(100);
  const [plOpacity, setPlOpacity] = useState<number>(100);

  useEffect(() => {
    if (!scrollProgress) return;

    switch (true) {
      case scrollProgress >= 2.5 && scrollProgress <= 2.75:
        setEltOpacity(100);
        setCeduOpacity(20);
        setPlOpacity(20);
        setHindOpacity(20);
        break;
      case scrollProgress >= 2.75 && scrollProgress <= 3:
        setEltOpacity(20);
        setCeduOpacity(100);
        setPlOpacity(20);
        setHindOpacity(20);
        break;
      case scrollProgress >= 3 && scrollProgress <= 3.25:
        setEltOpacity(20);
        setCeduOpacity(20);
        setPlOpacity(100);
        setHindOpacity(20);
        break;
      case scrollProgress >= 3.25 && scrollProgress <= 3.5:
        setEltOpacity(20);
        setCeduOpacity(20);
        setPlOpacity(20);
        setHindOpacity(100);
        break;
      default:
        setEltOpacity(100);
        setCeduOpacity(100);
        setHindOpacity(100);
        setPlOpacity(100);
        break;
    }

    if (scrollProgress >= 3.5 && scrollProgress <= 5.5) {
      setActiveResponse(responseData.hind[6].id);
    } else setActiveResponse(undefined);
  }, [scrollProgress]);

  return (
    <div
      className={`relative m-auto mt-${interactive ? "auto" : 28} mb-12`}
      style={{ width: `${chartWidth}px`, height: `${chartHeight}px` }}
    >
      <div
        id={`chart-3v2-${interactive ? "interactive" : "scrolly"}`}
        className="bg-offwhite"
      ></div>
      {width && height && (
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className={`bg-offwhite md:p-${interactive ? "auto" : 6} md:mt-${
            interactive ? "auto" : 28
          }`}
          style={{ width: `${chartWidth}px` }}
        >
          <g
            className={`duration-1000 transition-opacity opacity-${
              interactive || (scrollProgress || 0) >= 5.5 ? 100 : 20
            }`}
          >
            <text
              x={315}
              y={28}
              className="font-duboisWide"
              fontSize={15}
              textAnchor="middle"
            >
              <tspan>
                A CHART ILLUSTRATING THE WORDS OF THE BLACK COLLEGE GRADUATES
                FROM
              </tspan>
              <tspan dy={22.5} x={315}>
                ACROSS THE UNITED STATES WHO CONTRIBUTED TO DU BOIS'S RESEARCH.
              </tspan>
            </text>

            <text
              x={115}
              fontSize={13.5}
              y={90}
              textAnchor="middle"
              className="uppercase font-duboisNarrow"
            >
              <tspan>PREPARED AND EXECUTED BY</tspan>
              <tspan x={115} dy={14}>
                TANVI SHARMA, ANNA MOLA, Jay
              </tspan>
              <tspan x={115} dy={14}>
                Varner, AND LAUREN KLEIN UNDER
              </tspan>
              <tspan x={115} dy={14}>
                THE AUSPICES OF THE Digital{" "}
              </tspan>
              <tspan x={115} dy={14}>
                HUMANITIES LAB Emory University,
              </tspan>
              <tspan x={115} dy={14}>
                ATLANTA, GA UNITED STATES OF AMERICA
              </tspan>
            </text>
            <text
              x={425}
              fontSize={12}
              y={90}
              textAnchor="middle"
              className="uppercase font-duboisNarrow"
            >
              <tspan>
                THE PREVIOUS CHART VISUALIZED INFORMATION ABOUT THE GRADUATES OF
              </tspan>
              <tspan x={425} dy={14}>
                ATLANTA UNIVERSITY IN THE CONTEXT OF THE TOTAL NUMBER OF BLACK
              </tspan>
              <tspan x={425} dy={14}>
                COLLEGE GRADUATES IN THE UNITED STATES AS OF 1909.
              </tspan>
              <tspan x={425} dy={14}>
                AS PART OF THE COLLEGE-BRED NEGRO AMERICAN, THESE SAME COLLEGE
                Graduates
              </tspan>
              <tspan x={425} dy={14}>
                WERE SURVEYED ABOUT THEIR LIVES. THIS CHART VISUALIZES THEIR
                WORDS.
              </tspan>
            </text>

            <text
              x={14}
              className="uppercase font-duboisLightWide"
              fontSize={12}
              y={742}
              width={585}
            >
              <tspan textLength={600}>
                This visualization enriches the data associated with the 3,856
                Black college
              </tspan>
              <tspan dy={18.75} x={14} textLength={600}>
                graduates who were documented in{" "}
                <tspan className="italic">
                  The College-Bred Negro American
                </tspan>
                .
              </tspan>
              <tspan dy={18.75} x={14} textLength={600}>
                As part of the study, they were also asked to provide written
                responses to
              </tspan>
              <tspan dy={18.75} x={14} textLength={600}>
                four questions: their thoughts on their own "early life and
                training," their
              </tspan>
              <tspan dy={18.75} x={14} textLength={600}>
                plans to educate their children, the "chief hindrances" they had
                faced, and
              </tspan>
              <tspan dy={18.75} x={14} textLength={600}>
                their "present practical philosophy in regard to the Negro race
                in America,"
              </tspan>
              <tspan dy={18.75} x={14} textLength={600}>
                abbreviated in the study as "philosophy of life." About 800
                responses
              </tspan>
              <tspan dy={18.75} x={14} textLength={600}>
                to the survey were received, a selection of which were
                published.
              </tspan>
            </text>
          </g>

          <g
            id="etl"
            className={`transition-opacity duration-1000 opacity-${eltOpacity}`}
          >
            <text
              x={leftColumnX}
              y={225}
              fontSize={11.25}
              fontFamily="VTC Du Bois, serif"
              className="font-bold uppercase"
              textAnchor="middle"
            >
              <tspan>Reports of early life</tspan>
              <tspan x={leftColumnX} dy={11.5}>
                and training
              </tspan>
            </text>
            {responseData.elt.map((response) => {
              return (
                <ResponseDot
                  key={`dot-${response.id}`}
                  id={interactive ? "clickable" : "scrolly"}
                  response={response}
                  color="#D92944"
                  setActiveResponse={setActiveResponse}
                />
              );
            })}
          </g>

          <g
            id="cedu"
            className={`transition-opacity duration-1000 opacity-${ceduOpacity}`}
          >
            <text
              x={rightColumnX}
              y={chartHeight / 4}
              fontSize={11.25}
              fontFamily="VTC Du Bois, serif"
              className="font-bold uppercase"
              textAnchor="middle"
            >
              <tspan>How shall you educate your</tspan>
              <tspan x={rightColumnX} dy={11.5}>
                children
                <tspan dx={1} fontFamily="VTC Du Bois Narrow, serif">
                  (i.e., to a trade in,
                </tspan>
              </tspan>
              <tspan
                dy={11.5}
                x={rightColumnX}
                fontFamily="VTC Du Bois Narrow, serif"
              >
                college, in a profession, etc.)
              </tspan>
            </text>
            {responseData.cedu.map((response) => {
              return (
                <ResponseDot
                  key={`dot-${response.id}`}
                  id={interactive ? "clickable" : "scrolly"}
                  response={response}
                  color="#9AE4C1"
                  setActiveResponse={setActiveResponse}
                />
              );
            })}
          </g>

          <g
            id="pl"
            className={`transition-opacity duration-1000 opacity-${plOpacity}`}
          >
            <text
              x={leftColumnX}
              y={bottomRowY}
              fontSize={11.25}
              fontFamily="VTC Du Bois, serif"
              className="uppercase font-bold"
              textAnchor="middle"
            >
              <tspan>Briefly, what is your present practical</tspan>
              <tspan x={leftColumnX} dy={11.5}>
                philosophy in regard to the negro race
              </tspan>
              <tspan x={leftColumnX} dy={11.5}>
                in America?
              </tspan>
            </text>
            {responseData.pl.map((response) => {
              return (
                <ResponseDot
                  key={`dot-${response.id}`}
                  id={interactive ? "clickable" : "scrolly"}
                  response={response}
                  color="#3B6FE0"
                  setActiveResponse={setActiveResponse}
                />
              );
            })}
          </g>

          <g
            id="hind"
            className={`transition-opacity duration-1000 opacity-${hindOpacity}`}
          >
            <text
              x={rightColumnX}
              y={bottomRowY}
              fontSize={11.25}
              fontFamily="VTC Du Bois, serif"
              className="uppercase font-bold"
              textAnchor="middle"
            >
              <tspan>What have been your chief</tspan>
              <tspan x={rightColumnX} dy={11.5}>
                hinderances?
              </tspan>
              <tspan
                dy={11.5}
                x={rightColumnX}
                fontFamily="VTC Du Bois Narrow, serif"
              >
                (i.e., how has prejudice or,
              </tspan>
              <tspan
                dy={11.5}
                x={rightColumnX}
                fontFamily="VTC Du Bois Narrow, serif"
              >
                lack of opportunity worked)
              </tspan>
              <tspan
                dy={11.5}
                x={rightColumnX}
                fontFamily="VTC Du Bois Narrow, serif"
              >
                in your case?)
              </tspan>
            </text>
            {responseData.hind.map((response) => {
              return (
                <ResponseDot
                  key={`dot-${response.id}`}
                  id={interactive ? "clickable" : "scrolly"}
                  response={response}
                  color="#FEC313"
                  setActiveResponse={setActiveResponse}
                />
              );
            })}
          </g>

          <g id="response_text">
            {responseData.elt.map((response, index) => {
              return (
                <ResponseV2
                  key={response.id}
                  id={interactive ? "clickable" : "scrolly"}
                  setActiveResponse={interactive ? setActiveResponse : null}
                  activeResponse={activeResponse}
                  response={response}
                  color="#D92944"
                  textColor="white"
                  canvasWidth={chartWidth}
                  canvasHeight={chartHeight}
                />
              );
            })}
            {responseData.cedu.map((response, index) => {
              return (
                <ResponseV2
                  key={response.id}
                  id={interactive ? "clickable" : "scrolly"}
                  setActiveResponse={interactive ? setActiveResponse : null}
                  activeResponse={activeResponse}
                  response={response}
                  color="#9AE4C1"
                  textColor="black"
                  canvasWidth={chartWidth}
                  canvasHeight={chartHeight}
                />
              );
            })}
            {responseData.hind.map((response, index) => {
              return (
                <ResponseV2
                  key={response.id}
                  id={interactive ? "clickable" : "scrolly"}
                  setActiveResponse={interactive ? setActiveResponse : null}
                  activeResponse={activeResponse}
                  response={response}
                  color="#FEC313"
                  textColor="black"
                  canvasWidth={chartWidth}
                  canvasHeight={chartHeight}
                  unravel={
                    scrollProgress != undefined &&
                    scrollProgress >= 4.5 &&
                    scrollProgress <= 5.5
                  }
                />
              );
            })}
            {responseData.pl.map((response, index) => {
              return (
                <ResponseV2
                  key={response.id}
                  id={interactive ? "clickable" : "scrolly"}
                  setActiveResponse={interactive ? setActiveResponse : null}
                  activeResponse={activeResponse}
                  response={response}
                  color="#3B6FE0"
                  textColor="white"
                  canvasWidth={chartWidth}
                  canvasHeight={chartHeight}
                />
              );
            })}
          </g>
          {!interactive && (
            <g>
              <image
                href="/images/dubois/1910-survey-cover.jpg"
                className={`w-full transition-opacity duration-1000 opacity-${
                  ((scrollProgress || 0) >= 0 && (scrollProgress || 0) <= 1) ||
                  (!interactive && !scrollProgress)
                    ? 100
                    : 0
                }`}
              />
              <image
                href="/images/dubois/1910-survey-p1.jpg"
                className={`w-full transition-opacity duration-1000 opacity-${
                  (scrollProgress || 0) >= 1 && (scrollProgress || 0) <= 2
                    ? 100
                    : 0
                }`}
              />
            </g>
          )}
        </svg>
      )}
    </div>
  );
};

export default StudentChartThreeV2;
