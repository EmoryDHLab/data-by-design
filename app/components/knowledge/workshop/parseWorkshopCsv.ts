import { csvParse } from "~/utils/d3-imports";
import { actorColors } from "~/components/knowledge/peabodyUtils";
import type {
  PeabodyColor,
  SquareData,
} from "~/components/knowledge/peabodyUtils";

export const WEEKS = 4;
export const CELLS = 9;
// POLYGONS can split a cell into at most four colors.
const MAX_COLORS_PER_CELL = 4;

export interface WorkshopEvent {
  who: string[];
  note: string;
}

export interface WorkshopGrid {
  // One entry per week, each with 9 cells of colors.
  weeks: SquareData;
  // The participant's label for each of the 9 cells.
  typeLabels: (string | null)[];
  actors: PeabodyColor[];
  // Events keyed by absolute cell index (week * 9 + cell).
  events: WorkshopEvent[][];
  warnings: string[];
}

export function parseWorkshopCsv(text: string): WorkshopGrid {
  const warnings: string[] = [];
  const typeLabels: (string | null)[] = Array(CELLS).fill(null);
  const events: WorkshopEvent[][] = Array.from(
    { length: WEEKS * CELLS },
    () => []
  );
  const actors: PeabodyColor[] = [];

  const rows = csvParse(text.trim(), (row) => {
    // Match headers loosely so "Week " and "WHO" still work.
    const normalized: Record<string, string> = {};
    for (const [key, value] of Object.entries(row)) {
      normalized[key.trim().toLowerCase()] = (value ?? "").trim();
    }
    return normalized;
  });

  const columns = rows.columns.map((c) => c.trim().toLowerCase());
  const missing = ["week", "cell", "who"].filter((c) => !columns.includes(c));
  if (missing.length > 0) {
    warnings.push(
      `The CSV is missing the ${missing.join(", ")} column${
        missing.length > 1 ? "s" : ""
      }. The first line should be: week,cell,type,who,note`
    );
    return emptyGrid(warnings);
  }

  rows.forEach((row, i) => {
    // +2: one for the header line, one because rows count from 1.
    const line = i + 2;
    const week = Number(row.week);
    const cell = Number(row.cell);
    if (!Number.isInteger(week) || week < 1 || week > WEEKS) {
      warnings.push(`Row ${line}: week should be 1–${WEEKS}, not "${row.week}".`);
      return;
    }
    if (!Number.isInteger(cell) || cell < 1 || cell > CELLS) {
      warnings.push(`Row ${line}: cell should be 1–${CELLS}, not "${row.cell}".`);
      return;
    }

    const type = row.type ?? "";
    if (type) {
      const existing = typeLabels[cell - 1];
      if (existing === null) {
        typeLabels[cell - 1] = type;
      } else if (existing.toLowerCase() !== type.toLowerCase()) {
        warnings.push(
          `Row ${line}: cell ${cell} is already "${existing}", so "${type}" is shown as "${existing}".`
        );
      }
    }

    const who = (row.who ?? "")
      .split(";")
      .map((w) => w.trim())
      .filter(Boolean);
    if (who.length === 0) {
      warnings.push(`Row ${line}: no one is listed under who, so it has no color.`);
    }
    for (const label of who) {
      if (actors.some((a) => a.label.toLowerCase() === label.toLowerCase())) {
        continue;
      }
      if (actors.length < actorColors.length) {
        actors.push({ label, rgb: actorColors[actors.length].rgb });
      } else {
        warnings.push(
          `Row ${line}: there are only ${actorColors.length} colors, so "${label}" is left out.`
        );
      }
    }

    events[(week - 1) * CELLS + (cell - 1)].push({ who, note: row.note ?? "" });
  });

  const weeks: SquareData = Array.from({ length: WEEKS }, (_, week) =>
    Array.from({ length: CELLS }, (_, cell) => {
      const cellEvents = events[week * CELLS + cell];
      const involved = new Set(
        cellEvents.flatMap((e) => e.who.map((w) => w.toLowerCase()))
      );
      // Keep colors in legend order so shared cells split the same way.
      const colors = actors
        .filter((a) => involved.has(a.label.toLowerCase()))
        .map((a) => a.rgb);
      if (colors.length > MAX_COLORS_PER_CELL) {
        warnings.push(
          `Week ${week + 1}, cell ${cell + 1} has ${colors.length} people; only the first ${MAX_COLORS_PER_CELL} are shown.`
        );
        return colors.slice(0, MAX_COLORS_PER_CELL);
      }
      return colors.length > 0 ? colors : null;
    })
  );

  return { weeks, typeLabels, actors, events, warnings };
}

function emptyGrid(warnings: string[]): WorkshopGrid {
  return {
    weeks: Array.from({ length: WEEKS }, () => Array(CELLS).fill(null)),
    typeLabels: Array(CELLS).fill(null),
    actors: [],
    events: Array.from({ length: WEEKS * CELLS }, () => []),
    warnings,
  };
}
