import { useState } from "react";
import ChapterTitle from "~/components/ChapterTitle";
import { ChapterContext } from "~/chapterContext";
import CenteredLayout from "~/components/layout/CenteredLayout";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import Footer from "~/components/Footer";
import WorkshopPeabodyGrid from "~/components/knowledge/workshop/WorkshopPeabodyGrid";
import {
  CELLS,
  parseWorkshopCsv,
} from "~/components/knowledge/workshop/parseWorkshopCsv";
import { pageMetaTags } from "~/utils";
import type { MetaFunction } from "react-router";
import type { HighlightedElement } from "~/components/knowledge/peabodyUtils";
import type { WorkshopGrid } from "~/components/knowledge/workshop/parseWorkshopCsv";

export const meta: MetaFunction = () => {
  return pageMetaTags({
    title: "Peabody Grid Workshop: Data by Design",
    description:
      "Record a month of your life as a CSV and turn it into a chronological grid in the style of Elizabeth Palmer Peabody.",
    path: "/peabody-workshop",
  });
};

const sections = [
  { title: "What Is a Peabody Grid?", id: "what-is-a-peabody-grid" },
  { title: "1. Choose Nine Kinds of Event", id: "choose-event-types" },
  { title: "2. Fill In the CSV", id: "fill-in-the-csv" },
  { title: "3. Upload Your Month", id: "upload" },
  { title: "4. Talk About It", id: "discussion" },
];

const SUBHEAD =
  "font-power font-bold uppercase tracking-[0.15em] text-sm md:text-base pb-2 border-b border-black/15";

const TEMPLATE_PATH = "/peabody-workshop-template.csv";
const SAMPLE_PATH = "/peabody-workshop-sample.csv";

const columns = [
  {
    name: "week",
    description: "Which week the event happened in, from 1 to 4.",
  },
  {
    name: "cell",
    description:
      "Which of your nine kinds of event it is, from 1 to 9. Count across the square from the top left, as Peabody did: 1, 2, 3 on the top row, 4, 5, 6 in the middle, 7, 8, 9 on the bottom.",
  },
  {
    name: "type",
    description:
      "The name you gave that kind of event, such as “Meals shared”. Use the same name every time you use the same cell.",
  },
  {
    name: "who",
    description:
      "Who was involved, such as self, family, friends, work. If more than one, separate them with a semicolon: friends;family. Each name gets its own color, up to six.",
  },
  {
    name: "note",
    description: "Optional. A few words about what happened.",
  },
];

export default function PeabodyWorkshopPage() {
  const [grid, setGrid] = useState<WorkshopGrid>();
  const [fileName, setFileName] = useState<string>();
  const [highlightedElement, setHighlightedElement] =
    useState<HighlightedElement>();

  const loadCsv = (text: string, name: string) => {
    setGrid(parseWorkshopCsv(text));
    setFileName(name);
    setHighlightedElement(undefined);
  };

  const highlighted =
    grid && highlightedElement
      ? {
          week: Math.floor(highlightedElement.elementIndex / CELLS) + 1,
          cell: (highlightedElement.elementIndex % CELLS) + 1,
          events: grid.events[highlightedElement.elementIndex] ?? [],
        }
      : undefined;

  return (
    <div className="bg-offwhite">
      <ChapterContext.Provider
        value={{
          backgroundColor: "knowledgePrimary",
          accentColor: "knowledgeSecondary",
          footnoteTextColor: "knowledgePrimary",
          primaryTextColor: "black",
          footnotes: [],
        }}
      >
        <ChapterTitle
          title="Peabody Grid Workshop"
          subtitle="Chart a month of your life the way Elizabeth Palmer Peabody charted a century"
        />

        <main id="main-content" className="chapter-body pb-36">
          <ChapterSectionTitle section={sections[0]} />
          <CenteredLayout>
            <p>
              In the 1850s, the educator Elizabeth Palmer Peabody taught
              history with large, colorful grids. Each grid is a century. It
              is divided into 100 squares, one per year, and each year is
              divided again into nine smaller cells. Every cell stands for a
              kind of event: battles in the top left, treaties in the middle
              right, the deaths of remarkable people in the bottom right. The
              color of a cell shows which nation took part, and when several
              took part, the cell is split between their colors.
            </p>
            <p className="mt-4">
              Peabody wanted students to see the shape of a century at a glance,
              and then to make their own grids by hand. You can read more about
              her method in the{" "}
              <a className="underline" href="/chapters/knowledge">
                chapter on Peabody
              </a>
              .
            </p>
            <p className="mt-4">
              In this workshop you will make a smaller grid: one month of your
              own life. The month is divided into four weeks, laid out as a
              two-by-two block of squares. Each week is divided into nine cells,
              one for each kind of event you choose. The colors show who was
              involved.
            </p>
          </CenteredLayout>

          <ChapterSectionTitle section={sections[1]} />
          <CenteredLayout>
            <p>
              Peabody chose her nine kinds of event to suit the history she
              wanted to tell. You get to choose yours. Think about the last
              month and the things that made it what it was. Some ideas:
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-1">
              <li>Meals shared</li>
              <li>Travel, near or far</li>
              <li>Celebrations</li>
              <li>Arguments or disagreements</li>
              <li>Learning something new</li>
              <li>Losses and disappointments</li>
              <li>Caring for someone</li>
              <li>Making something</li>
              <li>Time outdoors</li>
            </ul>
            <p className="mt-4">
              On paper, draw a square split three by three and write one kind
              of event in each cell. This is your key. Number the cells 1 to 9,
              across and then down. You will use these numbers in the CSV.
            </p>
            <p className="mt-4">
              Then decide who the colors stand for. Peabody used nations; you
              might use self, family, friends, work, and community. You can have
              up to six.
            </p>
          </CenteredLayout>

          <ChapterSectionTitle section={sections[2]} />
          <CenteredLayout>
            <p>
              Open the{" "}
              <a className="underline" href={TEMPLATE_PATH} download>
                CSV template
              </a>{" "}
              in a spreadsheet program such as Excel, Numbers, or Google Sheets.
              Add one row for each event you remember. Keep the first row as it
              is: it names the columns.
            </p>
            <section className="mt-8">
              <h2 className={SUBHEAD}>Columns</h2>
              <dl className="mt-4 space-y-3">
                {columns.map((column) => (
                  <div key={column.name}>
                    <dt className="font-mono font-bold">{column.name}</dt>
                    <dd>{column.description}</dd>
                  </div>
                ))}
              </dl>
            </section>
            <section className="mt-8">
              <h2 className={SUBHEAD}>Example</h2>
              <pre className="mt-4 overflow-x-auto bg-white p-4 text-sm">
                {`week,cell,type,who,note
1,1,Meals shared,family,Sunday dinner at Nani's
1,5,Learning something new,self,Finished the d3 tutorial
2,1,Meals shared,friends;family,Diwali potluck
3,4,Arguments,work,Deadline disagreement`}
              </pre>
            </section>
            <p className="mt-4">
              When you are done, export or download the sheet as a CSV file
              (“Comma-separated values”).
            </p>
          </CenteredLayout>

          <ChapterSectionTitle section={sections[3]} />
          <CenteredLayout>
            <p>
              Choose your CSV file. It stays on your computer: the grid is drawn
              in your browser, and nothing is uploaded to a server. If you
              don’t have a file yet, try the sample month.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <label className="cursor-pointer bg-black px-4 py-2 text-white">
                Choose a CSV file
                <input
                  type="file"
                  accept=".csv,text/csv"
                  className="sr-only"
                  onChange={async (event) => {
                    const file = event.target.files?.[0];
                    if (file) loadCsv(await file.text(), file.name);
                    // Clear the input so choosing the same file again reloads it.
                    event.target.value = "";
                  }}
                />
              </label>
              <button
                type="button"
                className="border border-black px-4 py-2"
                onClick={async () => {
                  const response = await fetch(SAMPLE_PATH);
                  loadCsv(await response.text(), "the sample month");
                }}
              >
                Try the sample month
              </button>
            </div>
            {fileName && (
              <p className="mt-4 text-sm" aria-live="polite">
                Showing {fileName}.
              </p>
            )}
          </CenteredLayout>

          {grid && (
            <CenteredLayout className="mt-8">
              <div className="grid gap-8 md:grid-cols-[3fr_2fr]">
                <div onMouseLeave={() => setHighlightedElement(undefined)}>
                  <WorkshopPeabodyGrid
                    weeks={grid.weeks}
                    highlightedElement={highlightedElement}
                    setHighlightedElement={setHighlightedElement}
                  />
                </div>
                <div className="space-y-8">
                  <section>
                    <h2 className={SUBHEAD}>Key</h2>
                    <div className="mt-4 grid grid-cols-3 gap-px bg-black/15 text-xs md:text-sm">
                      {grid.typeLabels.map((label, cell) => (
                        <div
                          key={cell}
                          className={`p-2 bg-white ${
                            highlighted?.cell === cell + 1 ? "font-bold" : ""
                          }`}
                        >
                          <span className="text-black/50">{cell + 1}</span>{" "}
                          {label ?? "—"}
                        </div>
                      ))}
                    </div>
                  </section>
                  <section>
                    <h2 className={SUBHEAD}>Who</h2>
                    <ul className="mt-4 space-y-1">
                      {grid.actors.map((actor) => (
                        <li key={actor.label} className="flex items-center gap-2">
                          <span
                            className="inline-block w-4 h-4"
                            style={{ backgroundColor: actor.rgb }}
                          />
                          {actor.label}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section aria-live="polite">
                    <h2 className={SUBHEAD}>Selected cell</h2>
                    {highlighted ? (
                      <div className="mt-4">
                        <p className="font-bold">
                          Week {highlighted.week},{" "}
                          {grid.typeLabels[highlighted.cell - 1] ??
                            `cell ${highlighted.cell}`}
                        </p>
                        {highlighted.events.length > 0 ? (
                          <ul className="mt-2 list-disc pl-5 space-y-1">
                            {highlighted.events.map((event, i) => (
                              <li key={i}>
                                {event.note || "No note"}
                                {event.who.length > 0 && (
                                  <span className="text-black/60">
                                    {" "}
                                    ({event.who.join(", ")})
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-2">Nothing recorded.</p>
                        )}
                      </div>
                    ) : (
                      <p className="mt-4">
                        Hover over or tap a cell to see its events.
                      </p>
                    )}
                  </section>
                </div>
              </div>
              {grid.warnings.length > 0 && (
                <section className="mt-8">
                  <h2 className={SUBHEAD}>Check your CSV</h2>
                  <ul className="mt-4 list-disc pl-5 space-y-1">
                    {grid.warnings.map((warning) => (
                      <li key={warning}>{warning}</li>
                    ))}
                  </ul>
                </section>
              )}
            </CenteredLayout>
          )}

          <ChapterSectionTitle section={sections[4]} />
          <CenteredLayout>
            <p>Put the grids side by side and talk about them.</p>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>
                What patterns do you see at a glance? Which weeks are full,
                and which are empty?
              </li>
              <li>
                Which colors fill the grid, and which hardly appear? Is that how
                the month felt?
              </li>
              <li>
                What does the grid leave out? Think of events that didn’t fit
                any of your nine kinds, or were too private to write down.
              </li>
              <li>
                Peabody wanted students to memorize their grids and draw them
                again from memory. Turn away and try to sketch yours. What do
                you remember, and what do you forget?
              </li>
              <li>
                How would you choose nine kinds of event differently next time?
              </li>
            </ul>
          </CenteredLayout>
        </main>
        <Footer />
      </ChapterContext.Provider>
    </div>
  );
}
