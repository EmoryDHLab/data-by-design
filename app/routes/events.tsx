import ChapterTitle from "~/components/ChapterTitle";
import Footer from "~/components/Footer";
import StructuredData from "~/components/StructuredData";
import { ChapterContext } from "~/chapterContext";
import { bookMeta } from "~/data/bookMeta";
import { events, eventKinds, hasPassed, lastDay } from "~/data/events";
import EventRow, { KindLabel } from "~/components/events/EventRow";
import type { Event, EventKind } from "~/data/events";
import { classNames, pageMetaTags, HOST_NAME } from "~/utils";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
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

// One tab's worth of listings: the years, each with its events. Pulled out so
// Upcoming and Past render through the same code, differing only in whether
// their rows still offer a way to register.
function EventYears({ list, isPast }: { list: Event[]; isPast?: boolean }) {
  if (list.length === 0) {
    return (
      <p className="font-power text-black/60 py-8">
        Nothing to list here yet.
      </p>
    );
  }
  return (
    <>
      {groupByYear(list).map(({ year, events: yearEvents }) => (
        // The year rides beside its events rather than sitting above them in a
        // full-width band, which is what the rule and its padding used to cost.
        // It sticks while its own section scrolls, so the year you're reading
        // stays named without being repeated.
        <section
          key={year}
          className="md:grid md:grid-cols-[3.5rem_1fr] md:gap-x-6 lg:gap-x-8 mb-10 md:mb-12 last:mb-0"
        >
          {/* Same type as the heading it replaces — font-power, bold, uppercase,
              tracking-[0.2em], text-sm, text-black/60. Only the band comes off:
              the border and its padding are what the sticky column makes
              unnecessary. md:pt-8 matches EventRow's md:py-8 so the year sits
              level with the first date box rather than above it. */}
          <h3 className="font-power font-bold uppercase tracking-[0.2em] text-sm text-black/60 md:sticky md:top-8 md:self-start mb-3 md:mb-0 md:pt-8">
            {year}
          </h3>
          <ul className="divide-y divide-black/10 min-w-0">
            {yearEvents.map((event) => (
              <EventRow
                key={event.date + event.title}
                event={event}
                isPast={isPast}
              />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}

const TAB =
  "font-power font-bold uppercase tracking-[0.15em] text-sm md:text-base pb-2 border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-changePrimary";

export default function EventsPage() {
  const listed = events.filter((event) => !event.tbd);
  // Split on the day rather than by hand, so an event moves itself across once
  // its date is behind us and the page doesn't go stale between deploys.
  const upcoming = listed.filter((event) => !hasPassed(event));
  // Most recent first: the far end of a past list is the least interesting
  // thing on it.
  const past = listed
    .filter((event) => hasPassed(event))
    .sort((a, b) => lastDay(b).getTime() - lastDay(a).getTime());

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
          {/* Only the upcoming events are marked up for search engines: the
              point of Event markup is to send people to something they can
              still attend. */}
          <StructuredData data={eventsSchema(upcoming)} />
          <div className="mx-auto max-w-6xl px-6 md:px-10 pt-8 md:pt-12">
            <TabGroup>
              {/* The tabs and the kind legend used to be two full-width bands
                  stacked above the listings, each costing height before the
                  first event. They move into a column beside the listings
                  instead, into space that was margin, and the column sticks so
                  both stay reachable down a long list. max-w-5xl becomes 6xl to
                  pay for the column rather than taking the width out of the
                  rows. */}
              <div className="md:grid md:grid-cols-[11rem_1fr] lg:grid-cols-[13rem_1fr] md:gap-x-10 lg:gap-x-14">
                <div className="md:col-start-1 md:row-start-1 md:sticky md:top-8 md:self-start mb-8 md:mb-0">
                  {/* flex-wrap so the tabs drop to their own lines rather than
                      overflowing the column if the type scale changes. */}
                  <TabList className="flex flex-wrap gap-x-5 gap-y-1 border-b border-black/25 mb-5 md:mb-7">
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          TAB,
                          selected
                            ? "border-black text-black"
                            : "border-transparent text-black/50 hover:text-black"
                        )
                      }
                    >
                      Upcoming
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          TAB,
                          selected
                            ? "border-black text-black"
                            : "border-transparent text-black/50 hover:text-black"
                        )
                      }
                    >
                      Past
                    </Tab>
                  </TabList>
                  {/* A row on mobile, where there is no column to stack into,
                      and a list from md. KindLabel is untouched, so these read
                      exactly as they do against each event. */}
                  <div className="flex flex-wrap md:flex-col md:items-start gap-x-5 gap-y-2 md:gap-y-2.5">
                    {(Object.keys(eventKinds) as EventKind[]).map((kind) => (
                      <KindLabel key={kind} kind={kind} />
                    ))}
                  </div>
                </div>
                <div className="md:col-start-2 md:row-start-1 min-w-0">
                  <TabPanels>
                    <TabPanel>
                      <h2 className="sr-only">Upcoming events</h2>
                      <EventYears list={upcoming} />
                    </TabPanel>
                    <TabPanel>
                      <h2 className="sr-only">Past events</h2>
                      <EventYears list={past} isPast />
                    </TabPanel>
                  </TabPanels>
                </div>
              </div>
            </TabGroup>
          </div>
        </main>
        <Footer />
      </ChapterContext.Provider>
    </div>
  );
}
