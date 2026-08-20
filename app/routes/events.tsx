import ChapterTitle from "~/components/ChapterTitle";
import Footer from "~/components/Footer";
import StructuredData from "~/components/StructuredData";
import { ChapterContext } from "~/chapterContext";
import { bookMeta } from "~/data/bookMeta";
import { classNames, pageMetaTags, HOST_NAME } from "~/utils";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () =>
  pageMetaTags({
    title: "Events: Data by Design",
    description:
      "Book talks, launches, and appearances for Data by Design, by Lauren Klein (MIT Press, 2026).",
    path: "/events",
    image: "/images/bookcover.webp",
  });

type Event = {
  // The full date, spelled out. Used for screen readers and as the source of
  // truth for the abbreviated parts shown in the date box.
  date: string;
  month: string;
  day: string;
  weekday?: string;
  year: string;
  time?: string;
  // ISO 8601 start, used only for schema.org Event markup. Set it only when the
  // day is actually settled — events still listed as "Jan 11 or 12" have no
  // real start date, and inventing one would publish false structured data.
  startDate?: string;
  // Shown when the exact day isn't settled yet.
  dateNote?: string;
  city?: string;
  venue?: string;
  // The street address is shown under the venue, and both it and the postal
  // code feed the schema.org markup, to give search engines and maps an exact
  // location. The city and state aren't repeated here — they already have their
  // own column beside the venue.
  streetAddress?: string;
  postalCode?: string;
  // The venue's own page for the event, when there is one.
  url?: string;
  // Named speaker, when the event is one person's talk rather than a panel.
  performer?: string;
  title: string;
  description?: string;
  tbd?: boolean;
};

const events: Event[] = [
  {
    date: "Tuesday, October 20, 2026",
    month: "Oct",
    day: "20",
    weekday: "Tue",
    year: "2026",
    time: "7:00pm",
    startDate: "2026-10-20T19:00:00-04:00",
    title: "Book launch",
    city: "Decatur, GA",
    venue: "Charis Books & More",
    streetAddress: "184 S. Candler St",
    postalCode: "30030-3740",
    url: "https://charisbooksandmore.com/",
  },
  {
    date: "Friday, October 23, 2026",
    month: "Oct",
    day: "23",
    weekday: "Fri",
    year: "2026",
    startDate: "2026-10-23",
    title: "Book party at ASA, with Miriam Posner and Julian Posada",
    city: "Chicago, IL",
  },
  {
    date: "Tuesday, October 27, 2026",
    month: "Oct",
    day: "27",
    weekday: "Tue",
    year: "2026",
    time: "7:00pm",
    // EDT: US daylight time runs through November 1, 2026.
    startDate: "2026-10-27T19:00:00-04:00",
    title: "Talk at Parsons School of Design",
    city: "New York, NY",
  },
  {
    date: "Thursday, October 29, 2026",
    month: "Oct",
    day: "29",
    weekday: "Thu",
    year: "2026",
    time: "6:30pm arrival / 7:00pm start",
    startDate: "2026-10-29T19:00:00-04:00",
    title: "NYC book launch",
    city: "New York, NY",
    venue: "P&T Knitwear Bookstore",
    streetAddress: "180 Orchard St",
    postalCode: "10002",
  },
  {
    date: "Monday, November 2, 2026",
    month: "Nov",
    day: "2",
    weekday: "Mon",
    year: "2026",
    startDate: "2026-11-02",
    title: "Tanvi Sharma: workshop and talk",
    performer: "Tanvi Sharma",
    city: "Northampton, MA",
    venue: "Smith College",
  },
  {
    date: "Thursday, November 12, 2026",
    month: "Nov",
    day: "10/12",
    year: "2026",
    dateNote: "Thursday, November 12",
    title: "Boston Public Library Book Signing",
    city: "Boston, MA",
    venue: "Norman B. Leventhal Map & Education Center",
    streetAddress: "700 Boylston St",
    postalCode: "02116",

  },
  {
    date: "November 10–14, 2026 (exact date TBD)",
    month: "Nov",
    day: "10–14",
    year: "2026",
    dateNote: "Exact date TBD",
    title: "Lauren Klein and Shiyao Li at IEEE VIS",
    tbd: true,
  },
  {
    date: "Friday, January 8, 2027 (likely)",
    month: "Jan",
    day: "8",
    weekday: "Fri",
    year: "2027",
    dateNote: "Date not yet confirmed",
    title:
      "Book party at MLA, with Sari Altschuler, Molly Farrell, and Miriam Posner",
    city: "Los Angeles, CA",
    tbd: true,
  },
  {
    date: "January 11 or 12, 2027",
    month: "Jan",
    day: "11/12",
    year: "2027",
    dateNote: "January 11 or 12",
    title: "Lauren Klein at a historical mapping symposium",
    city: "Austin, TX",
    venue: "UT Austin",
  },
  {
    date: "January 28 or 29, 2027",
    month: "Jan",
    day: "28/29",
    year: "2027",
    dateNote: "January 28 or 29",
    title: "Lauren Klein",
    city: "Charlottesville, VA",
    venue: "University of Virginia",
  },
  {
    date: "February 10 or 11, 2027",
    month: "Feb",
    day: "10/11",
    year: "2027",
    dateNote: "February 10 or 11",
    title: "Lauren Klein",
    city: "Norman, OK",
    venue: "University of Oklahoma",
  },
];

function groupByYear(list: Event[]) {
  return list.reduce<{ year: string; events: Event[] }[]>((groups, event) => {
    const group = groups.find(({ year }) => year === event.year);
    if (group) group.events.push(event);
    else groups.push({ year: event.year, events: [event] });
    return groups;
  }, []);
}

// "New York, NY" -> a PostalAddress, plus the street address and postal code
// when the event supplies them. Falls back to a bare locality if the string
// isn't in "City, ST" form.
function addressFor(event: Event) {
  const city = event.city ?? "";
  const match = city.match(/^(.+),\s*([A-Z]{2})$/);
  return {
    "@type": "PostalAddress",
    ...(event.streetAddress ? { streetAddress: event.streetAddress } : {}),
    addressLocality: match ? match[1] : city,
    ...(match ? { addressRegion: match[2] } : {}),
    ...(event.postalCode ? { postalCode: event.postalCode } : {}),
    addressCountry: "US",
  };
}

// schema.org ItemList of Events, for search engines. Only events with a settled
// startDate are included, since Event markup without a real start date is
// invalid and would misreport the tour.
function eventsSchema(list: Event[]) {
  const dated = list.filter((event) => event.startDate);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${bookMeta.title} events`,
    itemListElement: dated.map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Event",
        name: event.title,
        startDate: event.startDate,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        url: event.url ?? `${HOST_NAME}/events`,
        image: `${HOST_NAME}${bookMeta.cover}`,
        location: {
          "@type": "Place",
          name: event.venue ?? event.city,
          ...(event.city ? { address: addressFor(event) } : {}),
        },
        ...(event.performer
          ? { performer: { "@type": "Person", name: event.performer } }
          : {}),
        about: {
          "@type": "Book",
          name: `${bookMeta.title}: ${bookMeta.subtitle}`,
          isbn: bookMeta.isbn,
        },
      },
    })),
  };
}

const DateBox = ({ event }: { event: Event }) => (
  <div className="w-20 md:w-24">
    <div className="w-20 h-20 md:w-24 md:h-24 bg-black/[0.07] flex flex-col items-center justify-center text-center leading-none">
      <span className="font-power font-bold uppercase text-xs md:text-sm tracking-[0.2em] ps-[0.2em]">
        {event.month}
      </span>
      <span
        className={classNames(
          "font-power tabular-nums mt-1.5",
          event.day.length > 2 ? "text-xl md:text-2xl" : "text-3xl md:text-4xl"
        )}
      >
        {event.day.length === 1 ? `0${event.day}` : event.day}
      </span>
    </div>
    {event.weekday && (
      <div className="font-power uppercase text-[0.625rem] tracking-[0.15em] text-black/50 text-center mt-2">
        {event.weekday}
      </div>
    )}
  </div>
);

export default function EventsPage() {
  const upcoming = events.filter((event) => !event.tbd);

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
          <StructuredData data={eventsSchema(upcoming)} />
          <div className="mx-auto max-w-5xl px-6 md:px-10 pt-16">
            {groupByYear(upcoming).map(({ year, events: yearEvents }) => (
              <section key={year} className="mb-16 last:mb-0">
                <h2 className="font-power font-bold uppercase tracking-[0.2em] text-sm text-black/60 pb-3 border-b border-black/25">
                  {year}
                </h2>
                <ul className="divide-y divide-black/10">
                  {yearEvents.map((event) => (
                    <li key={event.date + event.title}>
                      <div className="flex flex-col sm:flex-row gap-x-6 lg:gap-x-10 gap-y-4 py-8">
                        <time dateTime={event.date} className="block shrink-0">
                          <span className="sr-only">{event.date}</span>
                          <DateBox event={event} />
                        </time>
                        <div className="flex-1 flex flex-col md:flex-row md:items-start gap-x-6 lg:gap-x-10 gap-y-3">
                          {event.city && (
                            <h3 className="shrink-0 md:w-44 lg:w-52 font-power font-bold leading-tight text-lg md:text-xl lg:text-2xl">
                              {event.city}
                            </h3>
                          )}
                          <div className="flex-1 flex flex-col lg:flex-row lg:items-start gap-x-8 gap-y-2">
                            <div className="flex-1">
                              <p className="font-power text-lg md:text-xl leading-snug">
                                {event.title}
                              </p>
                              {event.venue && (
                                <p className="font-power text-base text-black/70 mt-1">
                                  {event.url ? (
                                    <a
                                      href={event.url}
                                      className="underline underline-offset-4 decoration-1 hover:decoration-2 hover:text-black transition-colors"
                                    >
                                      {event.venue}
                                    </a>
                                  ) : (
                                    event.venue
                                  )}
                                </p>
                              )}
                              {event.streetAddress && (
                                <p className="font-power text-base text-black/50 mt-0.5">
                                  {event.streetAddress}
                                </p>
                              )}
                              {event.description && (
                                <p className="mt-3 text-base">
                                  {event.description}
                                </p>
                              )}
                            </div>
                            {(event.time || event.dateNote) && (
                              <div className="shrink-0 lg:w-36 font-power uppercase tracking-wider text-xs text-black/60 lg:pt-1.5">
                                {event.time && <div>{event.time}</div>}
                                {event.dateNote && (
                                  <div className="normal-case tracking-normal text-black/50 mt-1">
                                    {event.dateNote}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </main>
        <Footer />
      </ChapterContext.Provider>
    </div>
  );
}
