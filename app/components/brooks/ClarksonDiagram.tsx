import Areas from "./elford/Areas";
import { paths } from "./elford/paths";

const ClarksonDiagram = () => {
  return (
    <svg viewBox="0 0 713.52 291.12" className="w-full md:h-full mt-12 md:mt-0">
      <image
        href="/images/brooks/LSF_Volume-H_85_Plan_of_an_African_slave_ship.jpg"
        width="2973"
        height="1213"
        transform="scale(.24)"
        x={0}
        y={-0.45}
      />
      <g>
        <path
          strokeWidth={0}
          fill="#D9D9D9"
          mask="url(#focus)"
          d={paths.outline}
        />
        <path
          stroke="rgb(28 24 23)"
          strokeWidth={3}
          fillOpacity={0}
          d={paths.outline}
        />

        <Areas strokeOpacity={1} />
      </g>
    </svg>
  );
};

export default ClarksonDiagram;
