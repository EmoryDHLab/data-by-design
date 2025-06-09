import { useState } from "react";
import type { ReactNode } from "react";
import { useDeviceContext } from "~/hooks";

interface Props {
  versionName: string;
  x: number;
  y: number;
  width: number;
  height: number;
  active: boolean;
  children: ReactNode;
  handleVersionSelect: (selectedVersion: string, key?: string) => void;
}
const Version = ({
  versionName,
  x,
  y,
  width,
  height,
  active,
  handleVersionSelect,
  children,
}: Props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const { isMobile } = useDeviceContext();
  const fontSize = Math.min(width - height / 4, height - 5);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <g
      onClick={() => handleVersionSelect(versionName)}
      onKeyDown={({ key }) => handleVersionSelect(versionName, key)}
      tabIndex={0}
      className="cursor-pointer focus:border-none focus:outline-none"
      role="button"
      aria-label={`Highlight people who worked on ${versionName}`}
      onMouseEnter={() => handleFocus()}
      onMouseLeave={() => handleBlur()}
      onFocus={() => handleFocus()}
      onBlur={() => handleBlur()}
    >
      <rect
        y={y}
        x={x}
        rx={isMobile ? 5 : 50}
        width={width}
        height={height}
        fill="gray"
        fillOpacity={focused ? 0.2 : 0}
        stroke="#FAF1E9"
        strokeWidth={focused ? 2 : 1}
      />
      <text
        x={x + width / 2}
        y={(y + height) / 2 + fontSize / 4}
        textAnchor="middle"
        dominantBaseline={"middle"}
        fill="#FAF1E9"
        fillOpacity={active ? 1 : 0.2}
        stroke="#FAF1E9"
        strokeWidth={0.75}
        fontSize={fontSize}
        className="transition-all duration-1000"
      >
        {children}
      </text>
    </g>
  );
};

export default Version;
