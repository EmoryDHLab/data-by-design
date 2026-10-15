import { useContext, useMemo } from "react";
import { ScrollytellContext } from "~/scrollytellContext";
import studentData from "~/data/power/studentChartTwo.json";
import respondentsData from "~/data/power/1910-Respondents.json";

const COLUMNS = 62;
const ROWS = 63;
const TOTAL = 3856;
const ATLANTA_COLUMNS = 13;
const RESPONDENTS = 800;

const GRAY = "fill-[#C4C4C4]";

type TCategory =
  | "teachers"
  | "ministers"
  | "government"
  | "business"
  | "other"
  | "housewives"
  | "deceased"
  | "unknown";

// Same colors and order as Students. respondentKey is the matching key in the
// 1910 respondents file (deceased/unknown have no respondent counts).
const CATEGORIES: {
  key: TCategory;
  fill: string;
  respondentKey?: keyof typeof respondentsData;
}[] = [
  { key: "teachers", fill: "fill-[#D92944]", respondentKey: "teachers" },
  { key: "ministers", fill: "fill-[#5A7BC3]", respondentKey: "ministers" },
  {
    key: "government",
    fill: "fill-[#FFD3D3]",
    respondentKey: "government service",
  },
  { key: "business", fill: "fill-[#CDCE9D]", respondentKey: "business" },
  {
    key: "other",
    fill: "fill-[#2F4F4F]",
    respondentKey: "other professions",
  },
  { key: "housewives", fill: "fill-[#FEC313]", respondentKey: "housewives" },
  { key: "deceased", fill: GRAY },
  { key: "unknown", fill: "fill-[#B5CCFF]" },
];

const students = studentData.categories.flatMap((c) => c.students);

const categoryOf = (professionCategory: string): TCategory =>
  professionCategory === "other professions"
    ? "other"
    : (professionCategory as TCategory);

// The respondents file counts 665 known occupations, not 800, so scale its
// proportions up to RESPONDENTS dots (largest remainder keeps the sum exact).
const respondentCounts = (() => {
  const withRespondents = CATEGORIES.filter((c) => c.respondentKey);
  const value = (key: keyof typeof respondentsData) =>
    respondentsData[key] as number;
  const known = withRespondents.reduce(
    (sum, c) => sum + value(c.respondentKey!),
    0,
  );
  const shares = withRespondents.map((c) => {
    const exact = (value(c.respondentKey!) / known) * RESPONDENTS;
    return { key: c.key, count: Math.floor(exact), remainder: exact % 1 };
  });
  let leftover = RESPONDENTS - shares.reduce((sum, s) => sum + s.count, 0);
  [...shares]
    .sort((a, b) => b.remainder - a.remainder)
    .forEach((share) => {
      if (leftover > 0) {
        share.count++;
        leftover--;
      }
    });
  return Object.fromEntries(shares.map((s) => [s.key, s.count])) as Partial<
    Record<TCategory, number>
  >;
})();

// Seeded so the arrangement is the same on every render.
const seededRandom = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

type TItem =
  | { kind: "atlanta"; fill: string; atlantaIndex: number }
  | { kind: "respondent"; fill: string }
  | { kind: "unknown"; fill: string };

// All 3,856 graduates sorted by category, with the Atlanta graduates mixed in
// among the estimated and unknown ones inside each category.
const sortedItems: TItem[] = (() => {
  const random = seededRandom(1900);
  const items: TItem[] = [];

  CATEGORIES.forEach(({ key, fill }) => {
    const group: TItem[] = [];

    students.forEach((student, atlantaIndex) => {
      if (categoryOf(student.professionCategory) === key) {
        group.push({ kind: "atlanta", fill, atlantaIndex });
      }
    });
    for (let i = 0; i < (respondentCounts[key] ?? 0); i++) {
      group.push({ kind: "respondent", fill });
    }
    if (key === "unknown") {
      const unknownOthers = TOTAL - students.length - RESPONDENTS;
      for (let i = 0; i < unknownOthers; i++) {
        group.push({ kind: "unknown", fill: GRAY });
      }
    }

    // The unknown block is ~47 rows tall; shuffling would bury its few
    // Atlanta graduates deep in the gray, so they stay at the start of it.
    if (key !== "unknown") {
      for (let i = group.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [group[i], group[j]] = [group[j], group[i]];
      }
    }
    items.push(...group);
  });

  return items;
})();

type TOtherCell = { x: number; y: number; fill: string; respondent: boolean };
type TAtlantaCell = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  fill: string;
  delay: number;
};

const Students = ({ width, height }: { width: number; height: number }) => {
  const { scrollProgress } = useContext(ScrollytellContext);

  const radius = (width / COLUMNS) * 0.3;

  const { others, atlanta } = useMemo(() => {
    // Same grid geometry as Students so the 13x13 block lands where it does there.
    const sectionWidth = width * (1 - 1 / COLUMNS / (radius * 2));
    const margin = (width - sectionWidth) / (2 * COLUMNS);
    const topSpacing = (height - radius * 3 * ROWS) / 2;
    const position = (row: number, column: number) => ({
      x:
        (width / COLUMNS) * column +
        radius +
        width / (radius * COLUMNS) +
        margin,
      y: radius * 3 * row + topSpacing,
    });

    const nextOthers: TOtherCell[] = [];
    const nextAtlanta: TAtlantaCell[] = [];
    sortedItems.forEach((item, index) => {
      const home = position(Math.floor(index / COLUMNS), index % COLUMNS);
      if (item.kind === "atlanta") {
        const slot = position(
          Math.floor(item.atlantaIndex / ATLANTA_COLUMNS),
          item.atlantaIndex % ATLANTA_COLUMNS,
        );
        nextAtlanta.push({
          ...home,
          dx: slot.x - home.x,
          dy: slot.y - home.y,
          fill: item.fill,
          delay: item.atlantaIndex,
        });
      } else {
        nextOthers.push({
          ...home,
          fill: item.fill,
          respondent: item.kind === "respondent",
        });
      }
    });
    return { others: nextOthers, atlanta: nextAtlanta };
  }, [width, height, radius]);

  const showOthers =
    (scrollProgress >= 3 && scrollProgress < 4) || scrollProgress >= 10;
  const showAtlanta =
    (scrollProgress >= 3 && scrollProgress <= 5) || scrollProgress >= 10;
  const plucked = scrollProgress >= 3.25 && scrollProgress <= 6;
  const zoomed = scrollProgress >= 4 && scrollProgress <= 6;

  return (
    <g className="scale-95 origin-center">
      <g
        className={`origin-top-left transition-all duration-1000 ${
          zoomed ? "-translate-x-6 -translate-y-[33.5rem] scale-[5]" : ""
        }`}
        // Wait for the Atlanta graduates to finish moving before zooming in.
        style={{ transitionDelay: plucked ? "1000ms" : "0ms" }}
      >
        <g
          className={`transition-opacity duration-1000 ${
            showOthers ? "opacity-100" : "opacity-0"
          }`}
        >
          {others.map((cell, index) => (
            <circle
              key={index}
              r={radius}
              cx={cell.x}
              cy={cell.y}
              opacity={cell.respondent ? 0.6 : 0.6}
              // strokeDasharray={cell.respondent ? "2 2" : "2 2"}
              className={`stroke-offblack ${cell.fill}`}
              style={{
                fillOpacity: (() => {
                  if (scrollProgress < 9) return 0;
                  return 1;
                })(),
              }}
            />
          ))}
        </g>
        <g
          className={`transition-opacity duration-1000 ${
            showAtlanta ? "opacity-100" : "opacity-0"
          }`}
        >
          {atlanta.map((cell, index) => (
            <circle
              key={index}
              r={radius}
              cx={cell.x}
              cy={cell.y}
              className={`stroke-offblack transition-[fill-opacity,opacity,transform] duration-1000 ${cell.fill}`}
              opacity={(() => {
                if (scrollProgress >= 3 && scrollProgress < 4) {
                  return 0.6;
                } else if (scrollProgress >= 4 && scrollProgress < 5) {
                  return 1;
                } else if (scrollProgress >= 10) {
                  return 1;
                }
                return 0;
              })()}
              style={{
                fillOpacity: (() => {
                  if (scrollProgress >= 4 && scrollProgress < 5) {
                    return 1;
                  } else if (scrollProgress >= 10) {
                    return 1;
                  }
                  return 0;
                })(),
                transform: zoomed
                  ? `translate(${cell.dx}px, ${cell.dy}px)`
                  : "none",
                transitionDelay: `${cell.delay}ms`,
              }}
            />
          ))}
        </g>
      </g>
    </g>
  );
};

export default Students;
