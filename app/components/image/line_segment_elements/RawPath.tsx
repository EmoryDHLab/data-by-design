const RawPath = () => {
  return (
    <>
      <rect x={5.75} y={0} height={55} width={93.5} fill="white" />
      <line x1={10} x2={10} y1={0} y2={55} strokeWidth={0} stroke="black" />
      <line x1={95} x2={95} y1={0} y2={55} strokeWidth={0} stroke="black" />
      <text x={11} y={15} fontSize={2}>
        {`<path`}
        <tspan x={12} dy={2.75}>
          d="M0,42.702L8.545,42.557L17.091,42.485L25.636,41.259L34.182,40.393L42.727,37.148L51.273,
        </tspan>
        <tspan x={12} dy={2.75}>
          30.295L58.109,16.59L59.818,11.18L60.673,10.603L61.527,18.033L62.382,26.22L63.236,
        </tspan>
        <tspan x={12} dy={2.75}>
          16.302L64.091,36.895L64.945,35.416L65.8,30.439L66.655,35.705L67.509,34.118L68.364,
        </tspan>
        <tspan x={12} dy={2.75}>
          30.98L69.218,32.856L70.073,37.472L76.909,15.869L85.455,8.656"
        </tspan>
        <tspan x={12} dy={2.75}>
          stroke="#db882a" fill="none" stroke-width="0.5"
        </tspan>
        <tspan x={12} dy={2.75}>
          transform="translate(11, 5) scale(0.9, 1)"
        </tspan>
        <tspan x={11} dy={2.75}>{`/>`}</tspan>
      </text>
    </>
  );
};

export default RawPath;
