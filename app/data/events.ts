// The tour data, shared between the /events page and the homepage's release
// section. Kept out of the route so both can read the same list.
export type EventKind = "talk" | "conversation" | "workshop" | "conference" | "party";

export const eventKinds: Record<EventKind, { label: string; dot: string }> = {
  talk: { label: "Author talk", dot: "bg-imagePrimary" },
  conversation: { label: "Conversation", dot: "bg-changePrimary" },
  workshop: { label: "Workshop", dot: "bg-dataPrimary" },
  conference: { label: "Conference", dot: "bg-peoplePrimary" },
  party: { label: "Party", dot: "bg-knowledgePrimary" },
};

export type Event = {
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
  // A sentence or two on what the event is, for anything the title can't carry
  // on its own — a co-host, a registration note, what the talk covers. Shown
  // under the address, and used as the schema.org Event description.
  description?: string;
  // How you can attend. Absent means in person only, which is most of the tour.
  // "hybrid" is in person with an online option; "virtual" is online only, and
  // such an event has no city or venue to show.
  attendance?: "virtual" | "hybrid";
  // Where the register button points. There is deliberately no fallback to url:
  // url is the venue's page for the event, which is not always a registration
  // page, and for a hybrid event may cover only one way of attending.
  registerUrl?: string;
  // What the register button says, when "Register" isn't right — "RSVP",
  // "Get tickets", or, on a hybrid event whose link only covers the online
  // option, something that says so. Ignored without a link to point at.
  registerLabel?: string;
  tbd?: boolean;
};

export const events: Event[] = [
  {
    date: "Tuesday, September 15, 2026",
    month: "Sep",
    day: "15",
    weekday: "Tue",
    year: "2026",
    time: "7:00pm–8:30pm",
    // EDT: US daylight time runs through November 1, 2026.
    startDate: "2026-09-15T19:00:00-04:00",
    title: "ChinatownJS: They Who Name the Fields",
    kind: "talk",
    description:
      "Tanvi Sharma presents \"Navigating Resistance in Data\" at ChinatownJS, hosted by Sanctuary Computer.",
    city: "New York, NY",
    venue: "Index Chinatown",
    // Two Luma pages: the venue's listing for the evening, and the separate
    // ticket page the button points at.
    url: "https://luma.com/index-ltuw",
    registerUrl: "https://luma.com/dnl59iqk",
    registerLabel: "Get tickets",
  },
  {
    date: "Tuesday, October 20, 2026",
    month: "Oct",
    day: "20",
    weekday: "Tue",
    year: "2026",
    time: "7:30pm",
    startDate: "2026-10-20T19:30:00-4:00",
    title: "Atlanta Book Release!",
    kind: "conversation",
    description: "A conversation with Lauren Klein, Tanvi Sharma, Jay Varner, Margy Adams, and Shiyao Li, moderated by Catherine D'Ignazio, director of the Data + Feminism Lab at MIT.",
    city: "Decatur, GA",
    venue: "Charis Books & More",
    streetAddress: "184 S. Candler St",
    postalCode: "30030-3740",
    // Charis's page for the event is the online RSVP, so the button says which
    // way of attending it covers. Turning up in person needs no registration.
    attendance: "hybrid",
    url: "https://charisbooksandmore.com/event/2026-10-20/data-design-visualization-and-power-abolition-dawn-data-science-panel-discussion",
    registerUrl: "https://charisbooksandmore.com/event/2026-10-20/data-design-visualization-and-power-abolition-dawn-data-science-panel-discussion",
    registerLabel: "RSVP to attend online",
  },
  {
    date: "Friday, October 23, 2026",
    month: "Oct",
    day: "23",
    weekday: "Fri",
    year: "2026",
    startDate: "2026-10-23",
    title: "American Studies Association conference",
    description: "A celebration of recent books by Miriam Posner, Julian Posada, and Lauren Klein",
    kind: "party",
    city: "Chicago, IL",
        venue: "Location TBD",
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
    title: "Parsons School of Design",
    description: "Talk by Lauren Klein and Tanvi Sharma",
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
    title: "New York Book Release!",
    kind: "conversation",
    description: "A conversation with Lauren Klein, Tanvi Sharma, and Silas Munro, moderated by Shannon Mattern, of the Metropolitan New York Library Council.",
    city: "New York, NY",
    venue: "P&T Knitwear Bookstore",
    streetAddress: "180 Orchard St",
    postalCode: "10002",
    url: "https://ptknitwear.com/events/51515",
    registerUrl: "https://www.eventbrite.com/e/1999226784129?aff=oddtdtcreator",
  },
  {
    date: "Monday, November 2, 2026",
    month: "Nov",
    day: "2",
    weekday: "Mon",
    year: "2026",
    startDate: "2026-11-02",
    title: "Workshop at Wurtele Center for Collaborative Leadership",
    kind: "workshop",
    description: "Talk and workshop by Tanvi Sharma",
    performer: "Tanvi Sharma",
    city: "Northampton, MA",
    venue: "Smith College",
  },
  {
    date: "Thursday, November 12, 2026",
    month: "Nov",
    day: "12",
    weekday: "Thu",
    year: "2026",
    time: "5:00pm",
    title: "Boston Book Release!",
    kind: "conversation",
    description: "Lauren Klein and Tanvi Sharma in conversation with Arvind Satyanarayan, director of the Visualization Group at MIT",
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
    dateNote: "Date TBD",
    title: "IEEE VIS conference",
    description: "Lauren Klein and Shiyao Li will present \"What Data Do and Do Not Represent\" at the IEEE VIS Conference.",
    kind: "conference",
  },
  {
    date: "Friday, January 8, 2027",
    month: "Jan",
    day: "8",
    weekday: "Fri",
    year: "2027",
    title: "Modern Langauge Association conference",
    description: "Book party at the MLA, with Sari Altschuler, Molly Farrell, and Miriam Posner",  
    kind: "party",
    city: "Los Angeles, CA",
  },
  {
    date: "January 11-12, 2027",
    month: "Jan",
    day: "11-12",
    year: "2027",
    title: "New Directions in Historical Cartography",
    description: "Symposium presentation",  
    kind: "conference",
    city: "Austin, TX",
    venue: "UT Austin",
  },
  {
    date: "January 28, 2027",
    month: "Jan",
    day: "28",
    year: "2027",
    title: "University of Virginia",
    description: "A public talk by Lauren Klein as part of the For the (Digital) Humanities series",
    kind: "talk",
    city: "Charlottesville, VA",
    venue: "University of Virginia",
  },
  {
    date: "January 29, 2027",
    month: "Jan",
    day: "29",
    year: "2027",
    title: "University of Virginia",
    description: "A seminar by Lauren Klein as part of the For the (Digital) Humanities series",
    kind: "talk",
    city: "Charlottesville, VA",
    venue: "University of Virginia",
  },
  {
    date: "February 10, 2027",
    month: "Feb",
    day: "10",
    year: "2027",
    title: "University of Oklahoma",
    description: "A public talk by Lauren Klein",
    kind: "talk",
    city: "Norman, OK",
    venue: "University of Oklahoma",
  },
];
