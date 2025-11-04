const exportColor = "#56190F";
const importColor = "#F4B20C";

const imports = [
  { x: 5.88, y: 46.89 },
  { x: 13.57, y: 46.41 },
  { x: 20.36, y: 45.14 },
  { x: 28.05, y: 43.98 },
  { x: 35.74, y: 43.68 },
  { x: 44.12, y: 42.83 },
  { x: 51.13, y: 42.18 },
  { x: 55.39, y: 39.17 },
  { x: 61.57, y: 37.45 },
  { x: 63.78, y: 35.08 },
  { x: 64.97, y: 46.62 },
  { x: 66.51, y: 47.8 },
  { x: 69.07, y: 46.39 },
  { x: 72.4, y: 38.86 },
  { x: 73.93, y: 37.23 },
  { x: 75.17, y: 34.58 },
  { x: 77.67, y: 32.92 },
  { x: 80.8, y: 31.04 },
  { x: 82.17, y: 24.71 },
];

const exports = [
  { x: 5.99, y: 48.14 },
  { x: 9.62, y: 48.04 },
  { x: 11.77, y: 47.64 },
  { x: 20.36, y: 47.39 },
  { x: 28.05, y: 46.22 },
  { x: 34.84, y: 45.41 },
  { x: 37.74, y: 44.64 },
  { x: 43.22, y: 42.12 },
  { x: 51.29, y: 35.58 },
  { x: 54.15, y: 31.19 },
  { x: 57.28, y: 21.69 },
  { x: 59.27, y: 16.53 },
  { x: 60.36, y: 23.13 },
  { x: 61.12, y: 31.32 },
  { x: 62.66, y: 24.71 },
  { x: 64.97, y: 35.88 },
  { x: 66.06, y: 39.5 },
  { x: 66.96, y: 35.73 },
  { x: 72.85, y: 28 },
  { x: 75.62, y: 18.67 },
  { x: 76.77, y: 21.69 },
  { x: 82.26, y: 13.47 },
];

const LineSegmentDots = () => {
  return (
    <>
      {imports.map((importDot) => {
        return (
          <circle
            key={`${importDot.x}`}
            cx={importDot.x}
            cy={importDot.y}
            r={0.5}
            stroke={importColor}
            strokeWidth={0.5}
            fill="white"
            strokeOpacity={0.8}
          />
        );
      })}
      {exports.map((exportDot) => {
        return (
          <circle
            key={`${exportDot.x}`}
            cx={exportDot.x}
            cy={exportDot.y}
            r={0.5}
            stroke={exportColor}
            strokeWidth={0.5}
            fill="white"
            strokeOpacity={0.8}
          />
        );
      })}
    </>
  );
};

export default LineSegmentDots;
