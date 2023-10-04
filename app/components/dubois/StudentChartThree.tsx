import { useEffect, useState } from "react";
// import * as d3 from "d3";
// import Response from "./chartThree/Response";
import responseData from "~/data/dubois/student-responses.json";
import ResponseV2 from "./chartThree/ResponseV2";
import { random } from "~/utils";
import ResponseDot from "./chartThree/ResponseDot";

export default function StudentChartThree() {
  // const [hasUnraveled, setHasUnraveled] = useState<boolean>(false);
  // const [dropZoneActive, setDropZoneActive] = useState<boolean>(false);
  // const [activeColor, setActiveColor] = useState<string | undefined>(undefined);
  const [activeResponse, setActiveResponse] = useState<string | undefined>(undefined);

  useEffect(() => {
    // const handleZoom = ({ transform }: { transform: { k: number, x: number, y: number }}) => {
    //   d3.select("#chart-3 g")
    //     .attr('transform', transform.toString());
    // }

    // let zoom: any = d3.zoom()
    //               .on('zoom', handleZoom);

    // d3.select("#chart-3").call(zoom);

    return () => {
      setActiveResponse(undefined);
    }
  }, []);

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
      <figure>
        <svg
          id="chart-3"
          viewBox={`0, 0, 200, 200`}
          className="w-full"
          onKeyUp={({ key }) => { if (key === 'Escape') setActiveResponse(undefined) }}
          >
          <g>
            <text
              x={50}
              y={4}
              fontSize={4}
              fontFamily="VTC Du Bois, serif"
              className="font-bold uppercase"
              textAnchor="middle"
            >
              <tspan>Reports of early life</tspan>
              <tspan x={50} dy={4}>and training</tspan>
            </text>
            <text
              x={150}
              y={4}
              fontSize={4}
              fontFamily="VTC Du Bois, serif"
              className="font-bold uppercase"
              textAnchor="middle"
            >
              <tspan>How shall you educate your</tspan>
              <tspan
              x={150}
              dy={4}
              >
                children
              <tspan
                dx={1}
                // x={150}
                fontFamily="VTC Du Bois Narrow, serif"
              >
                (i.e., to a trade in,
              </tspan>
              </tspan>
              <tspan
                dy={4}
                x={150}
                fontFamily="VTC Du Bois Narrow, serif"
              >
                college, in a profession, etc.)
              </tspan>
            </text>
            <text
              x={50}
              y={100}
              fontSize={4}
              fontFamily="VTC Du Bois, serif"
              className="uppercase"
              textAnchor="middle"
            >
              <tspan x={50}>Briefly, what is your present practical</tspan>
              <tspan x={50} dy={4}>philosophy in regard to the negro race</tspan>
              <tspan x={50} dy={4}>in America?</tspan>
            </text>
            <text
              x={150}
              y={100}
              fontSize={4}
              fontFamily="VTC Du Bois, serif"
              className="uppercase"
              textAnchor="middle"
            >
              <tspan>What have been your chief</tspan>
              <tspan
                x={150}
                dy={4}
              >
                hinderances?
              </tspan>
              <tspan
                dy={4}
                x={150}
                fontFamily="VTC Du Bois Narrow, serif"
              >
                (i.e., how has prejudice or,
              </tspan>
              <tspan
                dy={4}
                x={150}
                fontFamily="VTC Du Bois Narrow, serif"
              >
                lack of opportunity worked)
              </tspan>
              <tspan
                dy={4}
                x={150}
                fontFamily="VTC Du Bois Narrow, serif"
              >
                in your case?)
              </tspan>
            </text>
            {/* <circle
              cx={100}
              cy={100}
              r={50}
              fill={activeColor ?? "none"}
              fillOpacity={dropZoneActive ? 0.5 : 0}
              stroke="#000"
              strokeOpacity={hasUnraveled ? 0.25 : 1}
              className="transition-all duration-1000"
            /> */}
            {/* <ResponseV2 response={responseData.elt[0]} /> */}
            {responseData.elt.map((response) => {
              if (response.x === 0 && response.y === 0) {
                response.x = random(5, 98);
                response.y = random(15, 90);
              }
              return (
                <ResponseDot
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#D92944"
                />
              )
            })}
            {responseData.hind.map((response) => {
              if (response.x === 0 && response.y === 0) {
                response.x = random(102, 197.5);
                response.y = random(120, 195);
              }
              return (
                <ResponseDot
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#FEC313"
                />
              )
            })}
            {responseData.cedu.map((response) => {
              if (response.x === 0 && response.y === 0) {
                response.x = random(102, 197.5);
                response.y = random(20, 90);
              }
              return (
                <ResponseDot
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#9AE4C1"
                />
              )
            })}
            {responseData.pl.map((response) => {
              if (response.x === 0 && response.y === 0) {
                response.x = random(5, 98);
                response.y = random(110, 195);
              }
              return (
                <ResponseDot
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#3B6FE0"
                />
              )
            })}
            {responseData.elt.map((response) => {
              return (
                <ResponseV2
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#D92944"
                  textColor="white"
                />
              )
            })}
            {responseData.hind.map((response) => {
              return (
                <ResponseV2
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#FEC313"
                  textColor="black"
                />
              )
            })}
            {responseData.cedu.map((response) => {
              return (
                <ResponseV2
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#9AE4C1"
                  textColor="black"
                />
              )
            })}
            {responseData.pl.map((response) => {
              return (
                <ResponseV2
                  key={response.id}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#FEC313"
                  textColor="black"
                />
              )
            })}
            {/* {responseData.cedu.map((response, index) => {
              return (
                <Response
                  key={response.id}
                  setHasUnraveled={setHasUnraveled}
                  setDropZoneActive={setDropZoneActive}
                  setActiveColor={setActiveColor}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#9AE4C1"
                  responseIndex={index}
                  type="cedu"
                  hasUnraveled={hasUnraveled}
                />
              )
            })}
            {responseData.hind.map((response, index) => {
              return (
                <Response
                  key={response.id}
                  setHasUnraveled={setHasUnraveled}
                  setDropZoneActive={setDropZoneActive}
                  setActiveColor={setActiveColor}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#FEC313"
                  responseIndex={index}
                  type="hind"
                  hasUnraveled={hasUnraveled}
                />
              )
            })}
            {responseData.pl.map((response, index) => {
              return (
                <Response
                  key={response.id}
                  setHasUnraveled={setHasUnraveled}
                  setDropZoneActive={setDropZoneActive}
                  setActiveColor={setActiveColor}
                  setActiveResponse={setActiveResponse}
                  activeResponse={activeResponse}
                  response={response}
                  color="#3B6FE0"
                  responseIndex={index}
                  type="pl"
                  hasUnraveled={hasUnraveled}
                />
              )
            })} */}
          </g>
        </svg>
      </figure>
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
