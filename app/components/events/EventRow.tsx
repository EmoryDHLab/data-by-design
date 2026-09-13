import { classNames } from "~/utils";
import { eventKinds } from "~/data/events";
import type { Event, EventKind } from "~/data/events";

// One row of the tour, shared by the /events page and the homepage's release
// section so the two never drift apart.

export const KindLabel = ({ kind }: { kind: EventKind }) => (
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
          event.day.length > 2 ? "text-base md:text-2xl" : "text-2xl md:text-4xl"
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

export default function EventRow({ event }: { event: Event }) {
  return (
    <li>
      <div className="flex gap-4 text-base md:gap-6 lg:gap-10 py-6 md:py-8">
        <time dateTime={event.date} className="block shrink-0">
          <span className="sr-only">{event.date}</span>
          <DateBox event={event} />
        </time>
        <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-start gap-x-6 lg:gap-x-10 gap-y-2 md:gap-y-3">
          {/* What the event is, and where in the building. The loudest thing in
              the row, at every width. */}
          <div className="flex-1 min-w-0 md:order-2">
            <div className="mb-1.5 md:mb-2">
              <KindLabel kind={event.kind} />
            </div>
            <p className="font-power text-lg md:text-xl leading-snug">
              {event.title}
            </p>
            {event.description && (
              <p className="mt-3 text-base">{event.description}</p>
            )}
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
                {/* The five-digit ZIP reads better in body text than the ZIP+4
                    kept for the markup. */}
                {event.postalCode && `, ${event.postalCode.split("-")[0]}`}
              </p>
            )}
            {event.registerUrl && (
              <a
                href={event.registerUrl}
                target="_blank"
                rel="noopener"
                className="inline-block font-power uppercase tracking-wide text-sm md:text-base mt-4 px-5 py-2 border border-black hover:bg-changePrimary hover:text-white hover:border-changePrimary transition-colors"
              >
                {event.registerLabel ?? "Register"}
                <span className="sr-only">
                  {" "}
                  for {event.title} (opens in a new tab)
                </span>
              </a>
            )}
          </div>
          {/* City and time: a column of their own on desktop, one line of small
              print under the event on mobile. */}
          {(event.city ||
            event.time ||
            event.dateNote ||
            event.attendance) && (
            <div className="md:order-1 shrink-0 md:w-44 lg:w-52 flex flex-wrap items-baseline gap-x-3 gap-y-1 md:block">
              {event.city && event.attendance !== "virtual" && (
                <h3 className={classNames(META, "text-xs", CITY)}>
                  {event.city}
                </h3>
              )}
              {/* A virtual event has no city, so "Online" takes the city's place
                  as the heading. A hybrid one keeps its city and notes the
                  online option beneath, in the same small print as the time. */}
              {event.attendance === "virtual" && (
                <h3 className={classNames(META, "text-xs", CITY)}>Online</h3>
              )}
              {event.attendance === "hybrid" && (
                <div
                  className={classNames(META, "text-xs md:text-sm md:mt-1.5")}
                >
                  &amp; online
                </div>
              )}
              {event.time && (
                <div
                  className={classNames(META, "text-xs md:text-sm md:mt-1.5")}
                >
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
  );
}
