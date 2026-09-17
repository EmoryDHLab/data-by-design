// GA4 event helpers.
//
// Reports stay navigable when the event *names* are few and stable, and the
// varying detail lives in parameters. So there is one event name per user
// intent, and every call passes `placement` — in GA4 you then open a single
// "preorder_click" row and break it down by retailer or placement, instead of
// scanning a long list of one-off event names.
//
// NOTE: `retailer`, `placement`, `event_title` and `link_type` must be
// registered once in GA4 under Admin -> Custom definitions -> Custom dimensions
// (event-scoped) before they appear in standard reports. Until then they are
// only visible in Realtime, DebugView, and the BigQuery export.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type EventParams = Record<string, string>;

export const trackEvent = (name: string, params: EventParams = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
};

/**
 * A click on any link that leads to a retailer.
 *
 * @param retailer  "MIT Press" | "Bookshop.org" | "Barnes & Noble"
 * @param placement where on the site the click happened, e.g. "homepage_hero"
 *                  or "footer" — keep these values short and reuse them, since
 *                  they become the breakdown dimension in GA4.
 */
export const trackPreorderClick = (retailer: string, placement: string) =>
  trackEvent("preorder_click", { retailer, placement });

/**
 * A click on a link belonging to one of the tour events.
 *
 * Named `event_click` rather than `click`, which GA4's enhanced measurement
 * already collects for outbound links.
 *
 * @param eventTitle the event's `title` from ~/data/events, which is what
 *                   identifies it across both pages — the dates and venues
 *                   repeat, the titles don't.
 * @param linkType   which link in the row was taken: "register" for the
 *                   register/RSVP button, "venue" for the venue's own page,
 *                   "row" for the whole-row link the homepage uses.
 * @param placement  "homepage_release" or "events_page" — the same event is
 *                   reachable from both, and this is how you tell which
 *                   listing is doing the work.
 */
export const trackEventClick = (
  eventTitle: string,
  linkType: string,
  placement: string
) =>
  trackEvent("event_click", {
    event_title: eventTitle,
    link_type: linkType,
    placement,
  });
