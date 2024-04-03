const SiteTitle = () => {
  return (
    <svg
      width="80%"
      height="50%"
      viewBox="0 0 386 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
    >
      <text
        x={0}
        y={67}
        fill="white"
        className="uppercase font-dubois md:font-light"
      >
        <tspan fontSize={94} className="font-bold">
          Data by
        </tspan>
        <tspan
          x={50}
          dy={76}
          fontSize={94}
          className="tracking-wider font-bold"
        >
          Design
        </tspan>
        <tspan x={52} dy={23} fontSize={17} className="tracking-wide">
          An Interactive History
        </tspan>
        <tspan dy={23} fontSize={17} x={52} className="tracking-wide">
          of Data Visualization
        </tspan>
        <tspan dy={-23} fontSize={15} x={311} className="tracking-wide">
          1786-1900
        </tspan>
      </text>
    </svg>
  );
};

export default SiteTitle;
