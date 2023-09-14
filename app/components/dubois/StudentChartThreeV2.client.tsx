import p5 from "p5";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "~/hooks";
import responseData from "~/data/dubois/student-responses.json";
import ResponseV2 from "./chartThree/ResponseV2";

type SimpleDot = {
  x: number,
  y: number,
  d: number,
  pressed?: any,
  id: string,
}

const StudentChartThreeV2 = () => {
  const { width, height } = useWindowSize();
  const p5Ref = useRef<p5 | undefined>(undefined);
  const [fontSize, setFontSize] = useState<number>(1);
  const [rightColumnX, setRightColumnX] = useState<number>(0);
  const [leftColumnX, setLeftColumnX] = useState<number>(0);
  const [bottomRowY, setBottomRowY] = useState<number>(0);
  const [activeResponse, setActiveResponse] = useState<string | undefined>(undefined);
  const [clickedX, setClickedX] = useState<number>(0);
  const [clickedY, setClickedY] = useState<number>(0);

  useEffect(() => {
    const eltDots: SimpleDot[] = [];
    const ceduDots: SimpleDot[] = [];
    const hindDots: SimpleDot[] = [];
    const plDots: SimpleDot[] = [];

    function script(p5: p5) {
      if (!width || !height) return;

      const chartWidth = width * 0.5;
      const chartHeight = height * 0.5;

      p5.setup = function () {
        const checkOverlapping = (dot: SimpleDot, existing: SimpleDot[]) => {
          let overlapping = false;
          for (var j = 0; j < existing.length; j++) {
            let other = existing[j];
            let d = p5.dist(dot.x, dot.y, other.x, other.y);
            if (d < dot.d * 1.2) {
              overlapping = true;
            }
          }
          return overlapping;
        };

        const clicked = (dot: SimpleDot) => {
          if (
            p5.dist(p5.mouseX, p5.mouseY, dot.x, dot.y) <
            5 &&
            p5.mouseX &&
            p5.mouseY
          ) {
              setClickedX(dot.x);
              setClickedY(dot.y);
              setActiveResponse(dot.id);
          }
        };

        p5.createCanvas(
          chartWidth,
          chartHeight
        ).parent("chart-3v2");

        while (eltDots.length < responseData.elt.length) {
          let dot = {
            x: p5.random(15, (p5.width / 2) - 15),
            y: p5.random(15, (p5.height / 2 - 50)) + 40,
            d: 10,
            pressed: clicked,
            id: ""
          };

          const overlapping = checkOverlapping(dot, eltDots);
          // If not keep it!
          if (!overlapping) {
            eltDots.push(dot);
            dot.id = responseData.elt[eltDots.length - 1].id;
            responseData.elt[eltDots.length - 1].x = dot.x;
            responseData.elt[eltDots.length - 1].y = dot.y;
            }
        }

        while (ceduDots.length < responseData.cedu.length) {
          let dot = {
            x: p5.random((p5.width / 2) + 15, p5.width - 15),
            y: p5.random(15, (p5.height / 2 - 50)) + 40,
            d: 10,
            pressed: clicked,
            id: ""
          };

          const overlapping = checkOverlapping(dot, ceduDots);
          // If not keep it!
          if (!overlapping) {
            ceduDots.push(dot);
            dot.id = responseData.cedu[ceduDots.length - 1].id;
            responseData.cedu[ceduDots.length - 1].x = dot.x;
            responseData.cedu[ceduDots.length - 1].y = dot.y;
            }
        }

        // y: p5.random(15, (p5.height / 2 -15) + 15) ,
        // y: p5.random(15, (p5.height / 2 - 100)) + 100,


        while (hindDots.length < responseData.hind.length) {
          let dot = {
            x: p5.random(15, (p5.width / 2) - 15) + 15,
            y: p5.random((p5.height / 2 + 50) + 15, p5.height - 15),
            d: 10,
            pressed: clicked,
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
            x: p5.random((p5.width / 2) + 15, p5.width - 15),
            y: p5.random((p5.height / 2 + 60) + 25, p5.height - 25),
            d: 10,
            pressed: clicked,
            id: ""
          };

          const overlapping = checkOverlapping(dot, plDots);
          // If not keep it!
          if (!overlapping) {
            plDots.push(dot);
            dot.id = responseData.pl[plDots.length - 1].id;
            responseData.pl[plDots.length - 1].x = dot.x;
            responseData.pl[plDots.length - 1].y = dot.y;
            }
        }

        setFontSize(p5.height * 0.02);
        setLeftColumnX(p5.width * 0.25);
        setRightColumnX(p5.width * 0.75);
        setBottomRowY((p5.height / 2) + (p5.height * 0.04));
      };

      p5.draw = function () {
        p5.background("rgb(250, 241, 233)");

        for (let i = 0; i < eltDots.length; i++) {
          const dot = eltDots[i];
          p5.push();
          if (
            p5.dist(p5.mouseX, p5.mouseY, dot.x, dot.y) <
            5 &&
            p5.mouseX &&
            p5.mouseY
            ) {
              p5.fill("white");
          } else {
            p5.fill("#D92944");
          }
          p5.ellipse(dot.x, dot.y, dot.d);
          p5.pop();
        }

        for (let i = 0; i < ceduDots.length; i++) {
          const dot = ceduDots[i];
          p5.push();
          p5.fill("#9AE4C1")
          p5.ellipse(dot.x, dot.y, dot.d)
          p5.pop();
        }

        for (let i = 0; i < hindDots.length; i++) {
          const dot = hindDots[i];
          p5.push();
          p5.fill("#FEC313")
          p5.ellipse(dot.x, dot.y, dot.d)
          p5.pop();
        }

        for (let i = 0; i < plDots.length; i++) {
          const dot = plDots[i];
          p5.push();
          p5.fill("#3B6FE0")
          p5.ellipse(dot.x, dot.y, dot.d)
          p5.pop();
        }
      };

      p5.mousePressed = function () {
        [...eltDots, ...ceduDots, ...hindDots, ...plDots].forEach((dot) => {
          dot.pressed(dot);
        });
      };
    }

    const p5Copy = new p5(script);
    p5Ref.current = p5Copy;

    return () => {
      p5Copy.remove();
    }
  }, [width, height]);

  return (
    <>
            <p className="font-bold text-lg md:text-xl 2xl:text-2xl text-center font-duboisWide uppercase">
       A series of statistical charts, illustrating details about the graduates of
       Atlanta University, and other black college graduates in the united states,
       who contributed their knowledge, labor, and data to Du Bois's research program.
      </p>
      <div className="flex flex-col md:flex-row md:flex-wrap font-duboisNarrow text-base text-md text-center uppercase md:mt-8">
        <ul className="my-6 md:my-0 md:w-1/3">
          <li>prepared and executed by</li>
          <li>tanvi sharma, anna mola,</li>
          <li>and lauren klein</li>
          <li>under the auspices of</li>
          <li>the digital humanities lab</li>
          <li>emory university, atlanta, ga.</li>
          <li>united states of america</li>
        </ul>
        <div className="md:w-2/3">
          <p className="md:mt-0">
            The previous chart visualized information about the 163 college graduates of
            Atlanta University, as of 1909, in the context of the 3856 total Black college
            graduates in the entire United States.
          </p>
          <p className="md:mt-8">
            As part of the 1910 Atlanta University Study, The College-Bred Negro American,
            these same 3856 Black college graduates were surveyed about their lives. This
            chart visualizes their words.
          </p>
        </div>
        <p className="md:m-8 text-center w-full">
          if you want a more comprehensive look check out the archive.
        </p>
      </div>

      <div className="relative m-auto" style={{ width: `${p5Ref.current?.width}px`}}>
        <div id="chart-3v2">
        </div>
        {width && height &&
          <svg
            viewBox={`0 0 ${p5Ref.current?.width} ${p5Ref.current?.height}`}
            className="absolute top-0"
            style={{ width: `${p5Ref.current?.width}px` }}
          >
            {/* <rect x={0} y={0} height={p5Ref.current?.height} width={p5Ref.current?.width} fill="deeppink" fillOpacity={0.3} /> */}
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
            {responseData.elt.map ((response) => {
              return (
                <ResponseV2
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#D92944"
                  textColor="white"
                  x={clickedX}
                  y={clickedY}
                  canvasWidth={p5Ref.current?.width ?? 1000}
                  canvasHeight={p5Ref.current?.height ?? 1000}
                />
              )
            })}

            {responseData.cedu.map ((response) => {
              return (
                <ResponseV2
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#9AE4C1"
                  textColor="black"
                  x={clickedX}
                  y={clickedY}
                  canvasWidth={p5Ref.current?.width ?? 1000}
                  canvasHeight={p5Ref.current?.height ?? 1000}
                />
              )
            })}

            {responseData.hind.map ((response) => {
              return (
                <ResponseV2
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#FEC313"
                  textColor="black"
                  x={clickedX}
                  y={clickedY}
                  canvasWidth={p5Ref.current?.width ?? 1000}
                  canvasHeight={p5Ref.current?.height ?? 1000}
                />
              )
            })}

            {responseData.pl.map ((response) => {
              return (
                <ResponseV2
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#3B6FE0"
                  textColor="white"
                  x={clickedX}
                  y={clickedY}
                  canvasWidth={p5Ref.current?.width ?? 1000}
                  canvasHeight={p5Ref.current?.height ?? 1000}
                />
              )
            })}

          </svg>
        }
      </div>
      <p className="mx-4 md:mx-auto font-dubois uppercase text-justify tracking-wider">
        This visualization attempts to further humanize the data associated with the 3856
        Black college graduates whose lives were recorded as data in the Atlanta University
        Study of 1910, entitled The College-Bred Negro American. As part of this study, these
        3856 graduates were sent a survey which, among a range of questions about their lives
        and accomplishments, included four questions that encouraged long-form response: their
        thoughts on their own “early life and training,” their plans to educate their children,
        the “chief hindrances” they had faced, and their “present practical philosophy in regard
        to the Negro race in America”--abbreviated in the published study as “philosophy of
        life.” About 800 responses to the survey were received; these are the responses published
        in the 1910 Study.
      </p>
    </>
  );
}

export default StudentChartThreeV2;