import { useEffect, useRef, useState } from "react";
import ScrollytellWrapper from "../ScrollytellWrapper";
import { ScrollytellContext } from "~/scrollytellContext";

// The Floor Chart is a nine-layer sandwich. Drawn top to bottom, the way the
// exploded-view diagram (figure 0430-Peabody-Sandwich) presents it.
type TLayer = {
  id: string;
  label: string;
  fill: string;
  // Extrusion depth in SVG units. Fabric and copper read as sheets; the foam
  // and backing boards read as slabs.
  depth: number;
  pattern?: "chart" | "leds" | "grid" | "strips-x" | "strips-y";
  stroke?: string;
  // Outline drawn around the layer's top face.
  edge?: string;
};

const CHART_ORANGE = "rgb(219, 136, 42)";

const LAYERS: TLayer[] = [
  {
    id: "quilt-topper",
    label: "quilt topper",
    fill: "#FDF9F6",
    depth: 2,
    pattern: "chart",
    stroke: CHART_ORANGE,
    edge: CHART_ORANGE,
  },
  { id: "batting", label: "batting", fill: "#FFFFFF", depth: 4 },
  {
    id: "leds",
    label: "LEDs",
    fill: "#FDF9F6",
    depth: 2,
    pattern: "leds",
    stroke: "#6B6461",
  },
  { id: "quilt-bottom", label: "quilt bottom", fill: "#F4EDE6", depth: 2 },
  { id: "foam", label: "foam", fill: "#2E2A29", depth: 7 },
  {
    id: "copper-top",
    label: "copper strips",
    fill: "none",
    depth: 0,
    pattern: "strips-x",
    stroke: "#B87333",
  },
  {
    id: "foam-spacer",
    label: "foam spacer",
    fill: "#FFFFFF",
    depth: 2,
    pattern: "grid",
    stroke: "#B4ADA9",
  },
  {
    id: "copper-bottom",
    label: "copper strips",
    fill: "none",
    depth: 0,
    pattern: "strips-y",
    stroke: "#B87333",
  },
  { id: "foam-bottom", label: "foam bottom", fill: "#2E2A29", depth: 7 },
];

// Layer-space square, before the isometric transform.
const SIDE = 100;
// Maps the square onto a rhombus twice as wide as it is tall.
const ISO = "matrix(0.866 0.5 -0.866 0.5 0 0)";

const COLLAPSED_GAP = 7;
const EXPANDED_GAP = 44;

// The figure releases from its sticky pin once there's no more step height
// left to hold it in place. Finishing the expansion before that point (with
// room to spare) means the reader sees the fully-exploded state before the
// diagram starts scrolling away.
const EXPANSION_COMPLETE_AT = 0.5;

const VIEW_WIDTH = 200;
const VIEW_HEIGHT = 520;
const CENTER_X = VIEW_WIDTH / 2;
const CENTER_Y = 200;

// The touch matrix is a 30 x 30 grid of hand-cut holes; the chart above it
// carries Peabody's century of 100 squares.
const MATRIX_DIVISIONS = 30;
const CHART_DIVISIONS = 10;

const range = (n: number) => Array.from({ length: n + 1 }, (_, i) => i);

const LayerPattern = ({ layer }: { layer: TLayer }) => {
  const { pattern, stroke } = layer;
  if (!pattern) return null;

  const line = (
    key: string,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
  ) => (
    <line
      key={key}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={stroke}
      strokeWidth={pattern === "chart" ? 1.2 : 0.75}
      strokeDasharray={pattern === "leds" ? "2 2" : undefined}
      vectorEffect="non-scaling-stroke"
    />
  );

  if (pattern === "strips-x" || pattern === "strips-y") {
    const step = SIDE / MATRIX_DIVISIONS;
    return (
      <g>
        {range(MATRIX_DIVISIONS).map((i) =>
          pattern === "strips-x"
            ? line(`x${i}`, 0, i * step, SIDE, i * step)
            : line(`y${i}`, i * step, 0, i * step, SIDE),
        )}
      </g>
    );
  }

  if (pattern === "leds") {
    const step = SIDE / MATRIX_DIVISIONS;
    return (
      <g>
        {range(MATRIX_DIVISIONS - 1).map((i) =>
          line(`led${i}`, 2, i * step, SIDE - 2, i * step),
        )}
      </g>
    );
  }

  const divisions = pattern === "chart" ? CHART_DIVISIONS : MATRIX_DIVISIONS;
  const step = SIDE / divisions;
  return (
    <g>
      {range(divisions).map((i) => (
        <g key={i}>
          {line(`h${i}`, 0, i * step, SIDE, i * step)}
          {line(`v${i}`, i * step, 0, i * step, SIDE)}
        </g>
      ))}
      {pattern === "chart" && (
        // Peabody quartered each century before subdividing it.
        <g>
          <line
            x1={SIDE / 2}
            y1={0}
            x2={SIDE / 2}
            y2={SIDE}
            stroke={stroke}
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1={0}
            y1={SIDE / 2}
            x2={SIDE}
            y2={SIDE / 2}
            stroke={stroke}
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
          />
        </g>
      )}
    </g>
  );
};

const Layer = ({ layer, y }: { layer: TLayer; y: number }) => {
  // Rhombus corners in screen space, relative to the layer's top corner.
  const halfWidth = 0.866 * SIDE;
  const top = [0, 0];
  const right = [halfWidth, SIDE / 2];
  const bottom = [0, SIDE];
  const left = [-halfWidth, SIDE / 2];
  const { depth } = layer;

  return (
    <g transform={`translate(${CENTER_X} ${y})`}>
      {depth > 0 && (
        <>
          <polygon
            points={`${left[0]},${left[1]} ${bottom[0]},${bottom[1]} ${
              bottom[0]
            },${bottom[1] + depth} ${left[0]},${left[1] + depth}`}
            fill={layer.fill}
            style={{ filter: "brightness(0.78)" }}
          />
          <polygon
            points={`${bottom[0]},${bottom[1]} ${right[0]},${right[1]} ${
              right[0]
            },${right[1] + depth} ${bottom[0]},${bottom[1] + depth}`}
            fill={layer.fill}
            style={{ filter: "brightness(0.9)" }}
          />
        </>
      )}
      <polygon
        points={`${top[0]},${top[1]} ${right[0]},${right[1]} ${bottom[0]},${bottom[1]} ${left[0]},${left[1]}`}
        fill={layer.fill}
        stroke={layer.edge}
        strokeWidth={layer.edge ? 2 : undefined}
        vectorEffect={layer.edge ? "non-scaling-stroke" : undefined}
      />
      <g transform={ISO}>
        <LayerPattern layer={layer} />
      </g>
    </g>
  );
};

const FloorChartDiagram = ({ gap }: { gap: number }) => {
  const middle = (LAYERS.length - 1) / 2;

  return (
    <svg
      viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
      className="h-[70vh] max-h-[520px] w-auto max-w-full mx-auto"
      role="img"
      aria-label="An exploded-view diagram showing the nine layers of the Floor Chart, from top to bottom: quilt topper, batting, LEDs, quilt bottom, foam, copper strips, foam spacer, copper strips, foam bottom."
    >
      <defs />
      {/* Painted bottom up so each layer occludes the one below it. */}
      {LAYERS.map((layer, index) => ({ layer, index }))
        .reverse()
        .map(({ layer, index }) => (
          <Layer
            key={layer.id}
            layer={layer}
            y={CENTER_Y + (index - middle) * gap}
          />
        ))}
    </svg>
  );
};

// A single trigger spanning the whole scroll-through: with one step,
// scrollama's index is always 0, so scrollProgress is already a plain 0-1
// float rather than a step count to translate.
const Triggers = [
  <div
    key="floor-chart-trigger"
    data-step="floor-chart-trigger"
    className="floor-chart-step h-[150vh] md:h-[200vh]"
  ></div>,
];

/**
 * A coded stand-in for the exploded-view photograph of the Floor Chart. The
 * nine layers sit stacked when the diagram enters the viewport and draw apart
 * as the reader scrolls through it.
 */
const FloorChartLayers = ({ className }: { className?: string }) => {
  const stepsRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  if (reducedMotion) {
    return (
      <div className={className}>
        <FloorChartDiagram gap={EXPANDED_GAP} />
      </div>
    );
  }

  const expansion = Math.min(
    Math.max(scrollProgress / EXPANSION_COMPLETE_AT, 0),
    1,
  );
  const gap = COLLAPSED_GAP + (EXPANDED_GAP - COLLAPSED_GAP) * expansion;

  return (
    <ScrollytellContext.Provider value={{ scrollProgress, setScrollProgress }}>
      <ScrollytellWrapper
        setScrollProgress={setScrollProgress}
        triggers={Triggers}
        steps={stepsRef}
        stepClassName=".floor-chart-step"
        bgColor="none"
        threshold={4}
        className={className}
        debug={false}
      >
        <div id="scrolly-floor-chart">
          <figure className="sticky top-16">
            <FloorChartDiagram gap={gap} />
          </figure>
          <div ref={stepsRef} className="relative">
            {Triggers.map((trigger) => (
              <div key={`trigger-wrap-${trigger.key}`}>{trigger}</div>
            ))}
          </div>
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  );
};

export default FloorChartLayers;
