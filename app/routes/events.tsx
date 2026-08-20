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

// The kinds of appearance on the tour. Each one gets a color, shown as a dot
// before its label, so the list can be scanned by type.
type EventKind = "talk" | "workshop" | "conference";

const eventKinds: Record<EventKind, { label: string; dot: string }> = {
  talk: { label: "Author talk", dot: "bg-imagePrimary" },
  workshop: { label: "Workshop", dot: "bg-dataPrimary" },
  conference: { label: "Conference", dot: "bg-peoplePrimary" },
};

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
  // The street address is shown under the venue, with the postal code after it,
  // and both feed the schema.org markup, to give search engines and maps an
  // exact location. The city and state aren't repeated here — they already have
  // their own column beside the venue. Store the ZIP+4 when there is one: the
  // markup uses it in full, and the line only shows the first five digits.
  streetAddress?: string;
  postalCode?: string;
  // The venue's own page for the event, when there is one.
  url?: string;
  // Named speaker, when the event is one person's talk rather than a panel.
  performer?: string;
  title: string;
  kind: EventKind;
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
    title: "Book Launch",
    kind: "talk",
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
    title: "Lauren Klein in conversation with Miriam Posner and Julian Posada",
    kind: "conference",
    city: "Chicago, IL",
        venue: "American Studies Association",
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
    kind: "talk",
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
    title: "New York Book Launch",
    kind: "talk",
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
    title: "Workshop and Talk",
    kind: "workshop",
    performer: "Tanvi Sharma",
    city: "Northampton, MA",
    venue: "Smith College",
  },
  {
    date: "Thursday, November 12, 2026",
    month: "Nov",
    day: "10/12",
    year: "2026",
    title: "Lauren Klein in conversation with Arvind Satyanarayan" ,
    kind: "talk",
    city: "Boston, MA",
    venue: "Norman B. Leventhal Map & Education Center, Boston Public Library.",
    streetAddress: "700 Boylston St",
    postalCode: "02116",

  },
  {
    date: "November 10–14, 2026",
    month: "Nov",
    day: "10–14",
    year: "2026",
    dateNote: "Exact date TBD",
    title: "Lauren Klein and Shiyao Li at IEEE VIS",
    kind: "conference",
    tbd: true,
  },
  {
    date: "Friday, January 8, 2027",
    month: "Jan",
    day: "8",
    weekday: "Fri",
    year: "2027",
    dateNote: "Date not yet confirmed",
    title:
      "Book party at MLA, with Sari Altschuler, Molly Farrell, and Miriam Posner",
    kind: "conference",
    city: "Los Angeles, CA",
    tbd: true,
  },
  {
    date: "January 11 or 12, 2027",
    month: "Jan",
    day: "11/12",
    year: "2027",
    title: "Lauren Klein at a Historical Mapping Symposium",
    kind: "conference",
    city: "Austin, TX",
    venue: "UT Austin",
    tbd: true,
    
  },
  {
    date: "January 28 or 29, 2027",
    month: "Jan",
    day: "28/29",
    year: "2027",
    title: "Lauren Klein",
    kind: "talk",
    city: "Charlottesville, VA",
    venue: "University of Virginia",
        tbd: true,
  },
  {
    date: "February 10 or 11, 2027",
    month: "Feb",
    day: "10/11",
    year: "2027",
    title: "Lauren Klein",
    kind: "talk",
    city: "Norman, OK",
    venue: "University of Oklahoma",
        tbd: true,
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

// The label shown beside an event, with a dot in the color of its kind. The
// words carry the meaning on their own, so the color is reinforcement rather
// than the only signal — it stays readable without color vision.
const KindLabel = ({ kind }: { kind: EventKind }) => (
  <span className="inline-flex items-center gap-2 font-power font-bold uppercase text-xs tracking-[0.15em] text-black/60">
    <span
      className={classNames(
        "w-2 h-2 rounded-full shrink-0",
        eventKinds[kind].dot
      )}
      aria-hidden
    />
    {eventKinds[kind].label}
  </span>
);

// One quiet type treatment, shared by the weekday, the time, and the city on
// mobile, so each row speaks in two voices — the title, and small print — rather
// than in five slightly different ones. Size is set per use, but the small print
// all sits at text-xs on mobile, which is where the type scale bottoms out.
const META = "font-power uppercase tracking-[0.15em] text-black/50";

// The city leads its own column on desktop, so there it's a heading. On mobile
// there is no column to anchor, and a second bold line only competes with the
// title, so it falls back to small print beside the time.
const CITY =
  "md:text-xl lg:text-2xl md:font-bold md:normal-case md:tracking-normal md:text-black md:leading-tight";

const DateBox = ({ event }: { event: Event }) => (
  <div className="w-16 md:w-24">
    <div className="w-16 h-16 md:w-24 md:h-24 bg-black/[0.07] flex flex-col items-center justify-center text-center leading-none">
      <span className="font-power font-bold uppercase text-xs md:text-sm tracking-[0.15em] ps-[0.15em] md:tracking-[0.2em] md:ps-[0.2em]">
        {event.month}
      </span>
      <span
        className={classNames(
          "font-power tabular-nums mt-1 md:mt-1.5",
          event.day.length > 2
            ? "text-base md:text-2xl"
            : "text-2xl md:text-4xl"
        )}
      >
        {event.day.length === 1 ? `0${event.day}` : event.day}
      </span>
    </div>
    {event.weekday && (
      <div className={classNames(META, "text-xs text-center mt-1.5 md:mt-2")}>
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
        <main id="main-content" className="pb-24 md:pb-36">
          <StructuredData data={eventsSchema(upcoming)} />
          <div className="mx-auto max-w-5xl px-6 md:px-10 pt-10 md:pt-16">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-8 md:pb-10">
              {(Object.keys(eventKinds) as EventKind[]).map((kind) => (
                <KindLabel key={kind} kind={kind} />
              ))}
            </div>
            {groupByYear(upcoming).map(({ year, events: yearEvents }) => (
              <section key={year} className="mb-12 md:mb-16 last:mb-0">
                <h2 className="font-power font-bold uppercase tracking-[0.2em] text-sm text-black/60 pb-3 border-b border-black/25">
                  {year}
                </h2>
                <ul className="divide-y divide-black/10">
                  {yearEvents.map((event) => (
                    <li key={event.date + event.title}>
                      <div className="flex gap-4 text-base md:gap-6 lg:gap-10 py-6 md:py-8">
                        <time dateTime={event.date} className="block shrink-0">
                          <span className="sr-only">{event.date}</span>
                          <DateBox event={event} />
                        </time>
                        <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-start gap-x-6 lg:gap-x-10 gap-y-2 md:gap-y-3">
                          {/* What the event is, and where in the building. The
                              loudest thing in the row, at every width. */}
                          <div className="flex-1 min-w-0 md:order-2">
                            <div className="mb-1.5 md:mb-2">
                              <KindLabel kind={event.kind} />
                            </div>
                            <p className="font-power text-lg md:text-xl leading-snug">
                              {event.title}
                            </p>
                            {event.venue && (
                              <p className="font-power text-sm md:text-base text-black/70 mt-1">
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
                              <p className="font-power text-sm md:text-base text-black/50 mt-0.5">
                                {event.streetAddress}
                                {/* The five-digit ZIP reads better in body text
                                    than the ZIP+4 kept for the markup. */}
                                {event.postalCode &&
                                  `, ${event.postalCode.split("-")[0]}`}
                              </p>
                            )}
                            {event.description && (
                              <p className="mt-3 text-base">
                                {event.description}
                              </p>
                            )}
                          </div>
                          {/* City and time: a column of their own on desktop,
                              one line of small print under the event on mobile. */}
                          {(event.city || event.time || event.dateNote) && (
                            <div className="md:order-1 shrink-0 md:w-44 lg:w-52 flex flex-wrap items-baseline gap-x-3 gap-y-1 md:block">
                              {event.city && (
                                <h3 className={classNames(META, "text-xs", CITY)}>
                                  {event.city}
                                </h3>
                              )}
                              {event.time && (
                                <div className={classNames(META, "text-xs md:text-sm md:mt-1.5")}>
                                  {event.time}
                                </div>
                              )}
                              {event.dateNote && (
                                <div className="font-power text-base md:text-xs text-black/50 md:mt-1">
                                  {event.dateNote}
                                </div>
                              )}
                            </div>
                          )}
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
