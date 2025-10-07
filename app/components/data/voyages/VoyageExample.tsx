import { useEffect, useState } from "react";

const VoyageExample = ({ slideIndex }: { slideIndex: number }) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(slideIndex >= 7 && slideIndex <= 11);
  }, [slideIndex]);

  return (
    <g
      className={`md:-translate-x-16 md:scale-[0.7] xl:-translate-x-20 xl:scale-[0.75] transition-opacity duration-1000 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <defs>
        <clipPath id="clippath">
          <rect x={92.85} y={161.72} width={442.06} height={339.57} />
        </clipPath>
      </defs>
      <rect
        className="fill-offwhite stroke-offblack"
        x={92.85}
        y={161.72}
        width={442.06}
        height={339.57}
      />
      <g
        className={`transition-opacity duration-1000 opacity-${show ? 100 : 0}`}
        style={{ clipPath: "url(#clippath)" }}
      >
        <path
          className={`transition-all duration-1000 ${
            slideIndex > 7
              ? "fill-[#DE003B] opacity-60"
              : "fill-gray-400 opacity-100"
          }`}
          d="M378,354.49c-.57-38.87-32.27-97.19-41.89-117.23-5.14-10.71-6.71-41.76-4.33-75.53h-36.03c3.43,33.8,10.55,68.15,18.29,84.04,9.44,19.38,47.05,75.93,47.05,108.73,0,26.47-61.19,84.98-83.32,146.8h12.35c27.86-53.73,88.33-116.88,87.89-146.8Z"
        />
        <g
          className={`transition-opacity duration-1000 ${
            slideIndex === 11 ? "opacity-60" : "opacity-0"
          }`}
        >
          <path
            className={`fill-[#3A0F31] opacity-60`}
            d="M536.58,455.59c13.64,26.73,25.44,105.69,20.1,146.39l-48.04-1.22c12.46-49.2,13.5-119.39,4.81-136.67-10.08-20.05-43.3-78.36-43.89-117.23-.59-38.87,106.5-133.82,106.5-191.34,0-46.01-37.77-154.42-53.19-202.88h17.2c13.25,42.11,40.33,141.65,42.7,202.88,2.97,76.53-95.49,158.54-95.49,191.34s39.4,89.35,49.29,108.73Z"
          />
          <path
            className={`fill-[#DE003B] opacity-60`}
            d="M143.63,24.87c-13.64-26.73-25.44-105.69-20.1-146.39l48.04,1.21c-12.46,49.2-13.5,119.39-4.81,136.67,10.08,20.04,43.3,78.36,43.89,117.23.59,38.87-106.5,133.82-106.5,191.34,0,46.01,37.76,154.42,53.19,202.88h-17.2c-13.25-42.11-40.33-141.65-42.7-202.88-2.97-76.53,95.49-158.54,95.49-191.34s-39.4-89.35-49.29-108.73Z"
          />
          <path
            className={`fill-[#4D4C84] opacity-60`}
            d="M356.31,249.8c2.17-27.26-6.78-80.43-11.53-103.61h-24.76c4.97,20.51,14.92,69.95,14.92,103.61,0,42.07-79.71,73.36-77.67,114.73,2.04,41.37,47.15,39.98,53.93,72.32,5.43,25.87,8.14,64.32,8.82,80.31h24.76c-3.28-18.43-9.84-60.29-9.84-80.31,0-25.03-48.16-41.37-49.18-72.32s67.83-80.66,70.55-114.73Z"
          />
          <path
            className={`fill-[#EEC99F] opacity-60`}
            d="M391.12,800.99c9.77,46.17,39.8,169.9,53.59,225.99h15.6l-50.88-204.44c-16.51-78.11-49.52-243.24-49.52-278.84v-104.3c0-40.33-18.32-253.11-21.71-316.39-2.71-50.62,75.3-242.22,114.64-331.69l141.77-292.05h-16.96c-26.91,55.4-84.52,173.98-99.72,205.13-18.99,38.94-147.88,324.04-153.31,413.05s22.39,272.58,22.39,321.95-3.39,84.14,7.46,152.98,24.42,150.89,36.63,208.61Z"
          />
          <path
            className={`fill-[#56928A] opacity-60`}
            d="M550.3,1013.31c9.77,46.17,39.8,169.9,53.59,225.99h15.6l-50.88-204.44c-16.51-78.11-49.52-243.24-49.52-278.84v-104.3c0-40.33-18.32-253.11-21.71-316.39-2.71-50.62,75.3-242.22,114.64-331.69l141.77-292.05h-16.96c-26.91,55.4-84.52,173.98-99.72,205.13-18.99,38.94-147.88,324.04-153.31,413.05s22.39,272.58,22.39,321.95-3.39,84.14,7.46,152.98c10.85,68.84,24.42,150.89,36.63,208.61Z"
          />
          <path
            className={`fill-[#EEC99F] opacity-60`}
            d="M120.23,324.44c9.77,46.17,39.8,169.9,53.59,225.99h15.6l-50.88-204.44c-16.51-78.11-49.52-243.24-49.52-278.84V-37.15c0-40.33-18.32-253.11-21.71-316.39-2.71-50.62,75.3-242.22,114.64-331.69l141.77-292.05h-16.96c-26.91,55.4-84.52,173.98-99.72,205.13-18.99,38.94-147.88,324.04-153.31,413.05-5.43,89.01,22.39,272.58,22.39,321.95s-3.39,84.14,7.46,152.98c10.85,68.84,24.42,150.89,36.63,208.61Z"
          />
          <path
            className={`fill-[#56928A] opacity-60`}
            d="M163.73,64.03c2.03-19.82-24.42-108.48-37.65-133.16h13.23c23.63,33.15,46.67,104.72,47.48,143.94,1.02,49.02-61.66,73.59-61.66,119.14s82.35,176.74,85.06,219.5c2.17,34.21-73.04,193.89-110.91,269.45h-13.23c36.07-64.9,104.47-195.95,104.47-260.76,0-81.01-89.02-183.34-75.79-240.71,4.65-20.17,44.89-77.48,48.99-117.4Z"
          />
        </g>
        <g
          className={`stroke-offblack fill-none transition-opacity duration-1000 ${
            slideIndex === 10 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            strokeDasharray: "4.5 4.5",
            strokeWidth: "2.5px",
          }}
        >
          <path d="M348.24,161.72c-2.66,8.79-79.4,69.79-99.21,95.76-16.49,21.63,39.35,74.64,84.44,115.09,37.5,38.76,53.65,51.82,63.66,81.64,8.09,24.08,5.29,18.28,1.56,47.07" />
          <line x1="333" y1="161" x2="333" y2="501" />
          <line x1="333" y1="470" x2="395" y2="470" />
          <line
            style={{ strokeDasharray: "none" }}
            x1="380"
            y1="460"
            x2="395"
            y2="470"
          />
          <line
            style={{ strokeDasharray: "none" }}
            x1="380"
            y1="480"
            x2="395"
            y2="470"
          />
        </g>
        <path
          className={`transition-all duration-1000 ${
            slideIndex > 7
              ? "fill-[#56928A] opacity-60"
              : "fill-[#A7A7A7] opacity-30"
          }`}
          d="M419.91,467.92c-2.59-42.76-155.06-151.24-155.06-196.79,0-35.42,80.83-71.88,116.33-109.4h-32.94c-36.65,39.41-97.41,84.7-100.55,98.97-12.63,57.37,153.44,134.9,153.44,215.91,0,7.42-.87,15.72-2.43,24.69h14.62c4.51-14.94,7-26.62,6.59-33.38Z"
        />
      </g>
      <g
        className={`transition-opacity duration-1000 opacity-${
          slideIndex === 7 ? 100 : 0
        }`}
      >
        <line className="stroke-offblack" x1="425" y1="167" x2="435" y2="167" />
        <line className="stroke-offblack" x1="425" y1="495" x2="435" y2="495" />
        <line className="stroke-offblack" x1="430" y1="167" x2="430" y2="495" />
        <text
          className="font-neueMontrealLight font-light"
          fontSize={12}
          x={440}
          y={176}
        >
          <tspan>Beginning of</tspan>
          <tspan dy={14} x={440}>
            Voyage
          </tspan>
        </text>
        <text className="font-neueMontrealLight font-light" fontSize={12}>
          <tspan x={440} y={495}>
            End of Voyage
          </tspan>
        </text>
      </g>
      <g
        className={`stroke-offblack fill-none transition-opacity duration-1000 ${
          slideIndex === 9 ? "opacity-70" : "opacity-0"
        }`}
        style={{ strokeWidth: "1.5px" }}
      >
        {/* Start number enslaved departed */}
        <line x1={295} x2={330} y1={151} y2={151} />
        <line x1={295} x2={295} y1={146} y2={156} />
        <line x1={330} x2={330} y1={146} y2={156} />
        <line x1={350} x2={380} y1={151} y2={151} />
        <line x1={350} x2={350} y1={146} y2={156} />
        <line x1={380} x2={380} y1={146} y2={156} />

        {/* End number enslaved departed */}
        <line x1={278} x2={290} y1={511} y2={511} />
        <line x1={278} x2={278} y1={506} y2={516} />
        <line x1={290} x2={290} y1={506} y2={516} />

        <line x1={400} x2={412} y1={511} y2={511} />
        <line x1={400} x2={400} y1={506} y2={516} />
        <line x1={412} x2={412} y1={506} y2={516} />
      </g>
      <g
        className={`transition-opacity duration-1000 opacity-${
          slideIndex === 11 ? 100 : 0
        }`}
      >
        <text
          x={130}
          y={531}
          className="font-neueMontrealLight font-bold"
          fontSize={24}
        >
          1764
        </text>
        <text
          x={330}
          y={531}
          className="font-neueMontrealLight font-bold"
          fontSize={24}
        >
          1765
        </text>
        <text
          x={490}
          y={531}
          className="font-neueMontrealLight font-bold"
          fontSize={24}
        >
          1766
        </text>
      </g>
    </g>
  );
};

export default VoyageExample;
