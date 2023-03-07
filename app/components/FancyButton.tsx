export default function FancyButton({ action, outlineColor, children }) {
  return (
    <svg
      onClick={action}
      type="button"
      width={77}
      height={32}
      viewBox="0 0 77 32"
      fill="none"
      role="button"
    >
      <path
        d="M70 31H7C4.66 28.66 3.34 27.34 1 25V7C3.34 4.66 4.66 3.34 7 1H70C72.34 3.34 73.66 4.66 76 7V25C73.66 27.34 72.34 28.66 70 31Z"
        stroke={outlineColor ?? "white"}
        strokeWidth={1.5}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-dubois"
        fill={outlineColor ?? "white"}
      >
        {children}
      </text>
    </svg>
  );
}
