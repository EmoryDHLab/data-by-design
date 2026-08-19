// GA4 event helpers.
//
// Reports stay navigable when the event *names* are few and stable, and the
// varying detail lives in parameters. So there is one event name per user
// intent, and every call passes `placement` — in GA4 you then open a single
// "preorder_click" row and break it down by retailer or placement, instead of
// scanning a long list of one-off event names.
//
// NOTE: `retailer` and `placement` must be registered once in GA4 under
// Admin -> Custom definitions -> Custom dimensions (event-scoped) before they
// appear in standard reports. Until then they are only visible in Realtime,
// DebugView, and the BigQuery export.

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
