const SiteTitle = () => {
  return (
    <svg
      width="500px"
      viewBox="0 0 420 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
    >
      <text x={0} y={67} fill="white" className="font-dubois md:font-light">
        <tspan fontSize={96} className="font-bold uppercase">
          Data by
        </tspan>
        <tspan
          x={50}
          dy={76}
          fontSize={96}
          className="tracking-wide font-bold uppercase"
        >
          Design
        </tspan>
        <tspan x={52} dy={28} fontSize={18} className="tracking-wide">
          An Interactive History
        </tspan>
        <tspan dy={23} fontSize={18} x={52} className="tracking-wide">
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
