import { useEffect, useState } from "react";
import responseData from "~/data/dubois/studentResponses.json";
import ResponseV2 from "./chartThree/ResponseV2";
import ResponseDot from "./chartThree/ResponseDot";

interface Props {
  interactive?: boolean;
  scrollProgress?: number | undefined;
}

const chartHeight = 1000;
const chartWidth = 800;
const leftColumnX = "25%";
const rightColumnX = "75%";
const bottomRowY = 540;
const largeText = 20;
const smallText = 15;
const regularText = 15;
const leftMargin = 15;

const StudentChartThreeV2 = ({
  interactive = false,
  scrollProgress,
}: Props) => {
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
    <svg
      viewBox={`0 0 ${chartWidth} ${chartHeight}`}
      className="my-auto h-[80vh]"
    >
      <rect
        x={0}
        y={0}
        height={1000}
        width={800}
        fill="none"
        stroke="black"
        className="fill-offwhite"
      />
      <g
        className={`duration-1000 transition-opacity opacity-${
          interactive || (scrollProgress || 0) >= 5.5 ? 100 : 20
        }`}
      >
        <text
          x="50%"
          y={28}
          className="font-duboisWide"
          fontSize={largeText}
          textAnchor="middle"
        >
          <tspan>
            A CHART ILLUSTRATING THE WORDS OF THE BLACK COLLEGE GRADUATES FROM
          </tspan>
          <tspan dy={22.5} x="50%">
            ACROSS THE UNITED STATES WHO CONTRIBUTED TO DU BOIS'S RESEARCH.
          </tspan>
        </text>

        <text
          x="25%"
          fontSize={regularText}
          y={90}
          textAnchor="middle"
          className="text-black font-duboisWide uppercase tracking-wider"
        >
          <tspan>Prepared and executed by</tspan>
          <tspan x="25%" dy={regularText + 2}>
            Tanvi Sharma, Anna Mola, Jay
          </tspan>
          <tspan x="25%" dy={regularText + 2}>
            Varner, and Lauren Klein Under
          </tspan>
          <tspan x="25%" dy={regularText + 2}>
            The auspices Of The Digital
          </tspan>
          <tspan x="25%" dy={regularText + 2}>
            Humanities Lab Emory University
          </tspan>
          <tspan x="25%" dy={regularText + 2}>
            Atlanta, GA
          </tspan>
          <tspan x="25%" dy={regularText + 2}>
            United STATES OF AMERICA
          </tspan>
        </text>
        <text
          x="72%"
          fontSize={regularText}
          y={90}
          dominantBaseline="central"
          textAnchor="middle"
          className="uppercase font-duboisWide tracking-wider"
        >
          <tspan>The previous chart visualized information</tspan>
          <tspan x="72%" dy={regularText + 2}>
            about the graduates of Atlanta University
          </tspan>
          <tspan x="72%" dy={regularText + 2}>
            in the context of the total number of black
          </tspan>
          <tspan x="72%" dy={regularText + 2}>
            college graduates in the united states as of
          </tspan>
          <tspan x="72%" dy={regularText + 2}>
            1909. As part of the college-bred negro
          </tspan>
          <tspan x="72%" dy={regularText + 2}>
            graduates american, these same college
          </tspan>
          <tspan x="72%" dy={regularText + 2}>
            were surveyed about their lives. this chart
          </tspan>
          <tspan x="75%" dy={regularText + 2}>
            visualizes their words.
          </tspan>
        </text>

        <text
          x={leftMargin}
          className="uppercase font-duboistWide tracking-wider"
          fontSize={regularText}
          y={865}
        >
          <tspan textLength={775}>
            This visualization enriches the data associated with the 3,856 Black
            college graduates
          </tspan>
          <tspan dy={largeText} x={14} textLength={775}>
            who were documented in{" "}
            <tspan className="italic">The College-Bred Negro American</tspan>.
            As part of the study,
          </tspan>
          <tspan dy={largeText} x={14} textLength={775}>
            they were also asked to provide written responses to four questions:
            their thoughts
          </tspan>
          <tspan dy={largeText} x={14} textLength={775}>
            on their own "early life and training," their plans to educate their
            children, the "chief
          </tspan>
          <tspan dy={largeText} x={14} textLength={775}>
            hindrances" they had faced, and their "present practical philosophy
            in regard to the Negro
          </tspan>
          <tspan dy={largeText} x={14} textLength={775}>
            race in America," abbreviated in the study as "philosophy of life."
            About 800 responses
          </tspan>
          <tspan dy={largeText} x={14}>
            to the survey were received, a selection of which were published.
          </tspan>
        </text>
      </g>

      <g
        id="etl"
        className={`transition-opacity duration-1000 opacity-${eltOpacity}`}
      >
        <text
          x={leftColumnX}
          y={chartHeight / 4}
          fontSize={smallText}
          fontFamily="VTC Du Bois, serif"
          className="font-bold uppercase"
          textAnchor="middle"
        >
          <tspan>Reports of early life</tspan>
          <tspan x={leftColumnX} dy={largeText}>
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
          fontSize={smallText}
          fontFamily="VTC Du Bois, serif"
          className="font-bold uppercase"
          textAnchor="middle"
        >
          <tspan>How shall you educate your</tspan>
          <tspan x={rightColumnX} dy={largeText}>
            children
            <tspan dx={1} fontFamily="VTC Du Bois Narrow, serif">
              (i.e., to a trade in,
            </tspan>
          </tspan>
          <tspan
            dy={largeText}
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
          fontSize={smallText}
          fontFamily="VTC Du Bois, serif"
          className="uppercase font-bold"
          textAnchor="middle"
        >
          <tspan>Briefly, what is your present practical</tspan>
          <tspan x={leftColumnX} dy={largeText}>
            philosophy in regard to the negro race
          </tspan>
          <tspan x={leftColumnX} dy={largeText}>
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
          fontSize={smallText}
          fontFamily="VTC Du Bois, serif"
          className="uppercase font-bold"
          textAnchor="middle"
        >
          <tspan>What have been your chief hinderances?</tspan>
          <tspan
            dy={largeText}
            x={rightColumnX}
            fontFamily="VTC Du Bois Narrow, serif"
          >
            (i.e., how has prejudice or, lack of opportunity worked)
          </tspan>
          <tspan
            dy={largeText}
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
              (scrollProgress || 0) >= 1 && (scrollProgress || 0) <= 2 ? 100 : 0
            }`}
          />
        </g>
      )}
    </svg>
  );
};

export default StudentChartThreeV2;
