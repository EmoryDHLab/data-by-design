import ChapterTitle from "~/components/ChapterTitle";
import Footer from "~/components/Footer";
import { ChapterContext } from "~/chapterContext";
import CenteredLayout from "~/components/layout/CenteredLayout";

type Event = {
  date: string;
  title: string;
  description?: string;
  location?: string;
  tbd?: boolean;
};

const events: Event[] = [
  {
    date: "Friday, October 23, 2026",
    title: "Book party at ASA, with Miriam Posner and Julian Posada",
    location: "Chicago, IL",
  },
  {
    date: "Tuesday, October 27, 2026, 7:00pm",
    title: "Talk at Parsons School of Design",
    location: "New York, NY",
  },
  {
    date: "Thursday, October 29, 2026, 6:30pm arrival / 7:00pm start",
    title: "NYC book launch",
    location: "New York, NY",
  },
  {
    date: "Monday, November 2, 2026",
    title: "Tanvi Sharma: workshop and talk",
    location: "Smith College, Northampton, MA",
  },
  {
    date: "Tuesday, November 10 or Thursday, November 12, 2026",
    title: "Event details to come",
    location: "Boston / Cambridge, MA",
    tbd: true,
  },
  {
    date: "November 10–14, 2026 (exact date TBD)",
    title: "Lauren Klein and Shiyao Li at IEEE VIS",
    tbd: true,
  },
  {
    date: "Friday, January 8, 2027 (likely)",
    title:
      "Book party at MLA, with Sari Altschuler, Molly Farrell, and Miriam Posner",
    location: "Los Angeles, CA",
    tbd: true,
  },
  {
    date: "January 11 or 12, 2027",
    title: "Lauren Klein at a historical mapping symposium",
    location: "UT Austin",
  },
  {
    date: "January 28 or 29, 2027",
    title: "Lauren Klein",
    location: "University of Virginia",
  },
  {
    date: "February 10 or 11, 2027",
    title: "Lauren Klein",
    location: "University of Oklahoma",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-offwhite">
      <ChapterContext.Provider
        value={{
          backgroundColor: "changePrimary",
          accentColor: "changeSecondary",
          footnoteTextColor: "changePrimary",
          primaryTextColor: "white",
          footnotes: [],
        }}
      >
        <ChapterTitle
          title="Events"
          subtitle="Book talks, launches, and appearances"
        />
        <main id="main-content" className="pb-36">
          <CenteredLayout className="pt-16">
            <ul className="divide-y divide-black/10 border-y border-black/10">
              {events
                .filter((event) => !event.tbd)
                .map((event) => (
                  <li key={event.date} className="py-6">
                    <div className="font-power font-bold uppercase text-sm tracking-wider text-black/60">
                      {event.date}
                    </div>
                    <div className="font-power text-lg md:text-xl mt-1">
                      {event.title}
                    </div>
                    {event.location && (
                      <div className="text-black/70 mt-1">
                        {event.location}
                      </div>
                    )}
                    {event.description && (
                      <p className="mt-2">{event.description}</p>
                    )}
                  </li>
                ))}
            </ul>
          </CenteredLayout>
        </main>
        <Footer />
      </ChapterContext.Provider>
    </div>
  );
}
