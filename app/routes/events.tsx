import ChapterTitle from "~/components/ChapterTitle";
import Footer from "~/components/Footer";
import StructuredData from "~/components/StructuredData";
import { ChapterContext } from "~/chapterContext";
import { bookMeta } from "~/data/bookMeta";
import { events, eventKinds } from "~/data/events";
import EventRow, { KindLabel } from "~/components/events/EventRow";
import type { Event, EventKind } from "~/data/events";
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

// schema.org's three attendance modes. Getting this wrong misreports the tour:
// an online event marked Offline tells search engines to send people to a city
// they don't need to travel to.
function attendanceModeFor(event: Event) {
  if (event.attendance === "virtual")
    return "https://schema.org/OnlineEventAttendanceMode";
  if (event.attendance === "hybrid")
    return "https://schema.org/MixedEventAttendanceMode";
  return "https://schema.org/OfflineEventAttendanceMode";
}

// An online event's location is a VirtualLocation carrying the joining URL, not
// a Place; a hybrid event has both. Only registerUrl is used for the virtual
// location, never url — url is the venue's page, which is not somewhere you can
// attend.
function locationFor(event: Event) {
  const place = {
    "@type": "Place",
    name: event.venue ?? event.city,
    ...(event.city ? { address: addressFor(event) } : {}),
  };
  const virtual = {
    "@type": "VirtualLocation",
    ...(event.registerUrl ? { url: event.registerUrl } : {}),
  };
  if (event.attendance === "virtual") return virtual;
  if (event.attendance === "hybrid") return [place, virtual];
  return place;
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
        ...(event.description ? { description: event.description } : {}),
        startDate: event.startDate,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: attendanceModeFor(event),
        url: event.registerUrl ?? event.url ?? `${HOST_NAME}/events`,
        image: `${HOST_NAME}${bookMeta.cover}`,
        location: locationFor(event),
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
                    <EventRow key={event.date + event.title} event={event} />
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
