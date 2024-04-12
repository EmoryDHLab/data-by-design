type TSource = {
  month: Date;
  source: string;
  count: number;
};

export type TMontData = {
  month: Date;
  sources: TSource[];
  total: number;
};

const monthlyData: TMontData[] = [
  {
    month: new Date(2012, 7, 1),
    sources: [
      {
        month: new Date(2012, 7, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2012, 7, 1),
        source: "Zotero",
        count: 1,
      },
      {
        month: new Date(2012, 7, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2012, 7, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2012, 7, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 1,
  },
  {
    month: new Date(2013, 11, 1),
    sources: [
      {
        month: new Date(2013, 11, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2013, 11, 1),
        source: "Zotero",
        count: 95,
      },
      {
        month: new Date(2013, 11, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2013, 11, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2013, 11, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 95,
  },
  {
    month: new Date(2014, 0, 1),
    sources: [
      {
        month: new Date(2014, 0, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2014, 0, 1),
        source: "Zotero",
        count: 4,
      },
      {
        month: new Date(2014, 0, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2014, 0, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2014, 0, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 4,
  },
  {
    month: new Date(2014, 1, 1),
    sources: [
      {
        month: new Date(2014, 1, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2014, 1, 1),
        source: "Zotero",
        count: 1,
      },
      {
        month: new Date(2014, 1, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2014, 1, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2014, 1, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 1,
  },
  {
    month: new Date(2014, 4, 1),
    sources: [
      {
        month: new Date(2014, 4, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2014, 4, 1),
        source: "Zotero",
        count: 1,
      },
      {
        month: new Date(2014, 4, 1),
        source: "Google Drive",
        count: 2,
      },
      {
        month: new Date(2014, 4, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2014, 4, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 3,
  },
  {
    month: new Date(2014, 11, 1),
    sources: [
      {
        month: new Date(2014, 11, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2014, 11, 1),
        source: "Zotero",
        count: 2,
      },
      {
        month: new Date(2014, 11, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2014, 11, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2014, 11, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 2,
  },
  {
    month: new Date(2015, 2, 1),
    sources: [
      {
        month: new Date(2015, 2, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2015, 2, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2015, 2, 1),
        source: "Google Drive",
        count: 1,
      },
      {
        month: new Date(2015, 2, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2015, 2, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 1,
  },
  {
    month: new Date(2015, 7, 1),
    sources: [
      {
        month: new Date(2015, 7, 1),
        source: "Github",
        count: 1,
      },
      {
        month: new Date(2015, 7, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2015, 7, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2015, 7, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2015, 7, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 1,
  },
  {
    month: new Date(2016, 2, 1),
    sources: [
      {
        month: new Date(2016, 2, 1),
        source: "Github",
        count: 4,
      },
      {
        month: new Date(2016, 2, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2016, 2, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2016, 2, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2016, 2, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 4,
  },
  {
    month: new Date(2016, 3, 1),
    sources: [
      {
        month: new Date(2016, 3, 1),
        source: "Github",
        count: 3,
      },
      {
        month: new Date(2016, 3, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2016, 3, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2016, 3, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2016, 3, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 3,
  },
  {
    month: new Date(2016, 4, 1),
    sources: [
      {
        month: new Date(2016, 4, 1),
        source: "Github",
        count: 2,
      },
      {
        month: new Date(2016, 4, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2016, 4, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2016, 4, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2016, 4, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 2,
  },
  {
    month: new Date(2016, 5, 1),
    sources: [
      {
        month: new Date(2016, 5, 1),
        source: "Github",
        count: 1,
      },
      {
        month: new Date(2016, 5, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2016, 5, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2016, 5, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2016, 5, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 1,
  },
  {
    month: new Date(2016, 7, 1),
    sources: [
      {
        month: new Date(2016, 7, 1),
        source: "Github",
        count: 1,
      },
      {
        month: new Date(2016, 7, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2016, 7, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2016, 7, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2016, 7, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 1,
  },
  {
    month: new Date(2016, 8, 1),
    sources: [
      {
        month: new Date(2016, 8, 1),
        source: "Github",
        count: 15,
      },
      {
        month: new Date(2016, 8, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2016, 8, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2016, 8, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2016, 8, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 15,
  },
  {
    month: new Date(2016, 9, 1),
    sources: [
      {
        month: new Date(2016, 9, 1),
        source: "Github",
        count: 13,
      },
      {
        month: new Date(2016, 9, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2016, 9, 1),
        source: "Google Drive",
        count: 6,
      },
      {
        month: new Date(2016, 9, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2016, 9, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 19,
  },
  {
    month: new Date(2016, 10, 1),
    sources: [
      {
        month: new Date(2016, 10, 1),
        source: "Github",
        count: 3,
      },
      {
        month: new Date(2016, 10, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2016, 10, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2016, 10, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2016, 10, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 3,
  },
  {
    month: new Date(2016, 11, 1),
    sources: [
      {
        month: new Date(2016, 11, 1),
        source: "Github",
        count: 27,
      },
      {
        month: new Date(2016, 11, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2016, 11, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2016, 11, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2016, 11, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 27,
  },
  {
    month: new Date(2017, 0, 1),
    sources: [
      {
        month: new Date(2017, 0, 1),
        source: "Github",
        count: 14,
      },
      {
        month: new Date(2017, 0, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2017, 0, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2017, 0, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2017, 0, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 14,
  },
  {
    month: new Date(2017, 1, 1),
    sources: [
      {
        month: new Date(2017, 1, 1),
        source: "Github",
        count: 1,
      },
      {
        month: new Date(2017, 1, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2017, 1, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2017, 1, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2017, 1, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 1,
  },
  {
    month: new Date(2017, 2, 1),
    sources: [
      {
        month: new Date(2017, 2, 1),
        source: "Github",
        count: 10,
      },
      {
        month: new Date(2017, 2, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2017, 2, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2017, 2, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2017, 2, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 10,
  },
  {
    month: new Date(2017, 3, 1),
    sources: [
      {
        month: new Date(2017, 3, 1),
        source: "Github",
        count: 5,
      },
      {
        month: new Date(2017, 3, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2017, 3, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2017, 3, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2017, 3, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 5,
  },
  {
    month: new Date(2017, 4, 1),
    sources: [
      {
        month: new Date(2017, 4, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2017, 4, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2017, 4, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2017, 4, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2017, 4, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 2,
  },
  {
    month: new Date(2017, 5, 1),
    sources: [
      {
        month: new Date(2017, 5, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2017, 5, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2017, 5, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2017, 5, 1),
        source: "iCalendar",
        count: 3,
      },
      {
        month: new Date(2017, 5, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 3,
  },
  {
    month: new Date(2017, 7, 1),
    sources: [
      {
        month: new Date(2017, 7, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2017, 7, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2017, 7, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2017, 7, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2017, 7, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 2,
  },
  {
    month: new Date(2017, 8, 1),
    sources: [
      {
        month: new Date(2017, 8, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2017, 8, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2017, 8, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2017, 8, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2017, 8, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 2,
  },
  {
    month: new Date(2017, 9, 1),
    sources: [
      {
        month: new Date(2017, 9, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2017, 9, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2017, 9, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2017, 9, 1),
        source: "iCalendar",
        count: 4,
      },
      {
        month: new Date(2017, 9, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 4,
  },
  {
    month: new Date(2017, 10, 1),
    sources: [
      {
        month: new Date(2017, 10, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2017, 10, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2017, 10, 1),
        source: "Google Drive",
        count: 2,
      },
      {
        month: new Date(2017, 10, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2017, 10, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 4,
  },
  {
    month: new Date(2017, 11, 1),
    sources: [
      {
        month: new Date(2017, 11, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2017, 11, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2017, 11, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2017, 11, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2017, 11, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 1,
  },
  {
    month: new Date(2018, 0, 1),
    sources: [
      {
        month: new Date(2018, 0, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2018, 0, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2018, 0, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2018, 0, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2018, 0, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 2,
  },
  {
    month: new Date(2018, 1, 1),
    sources: [
      {
        month: new Date(2018, 1, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2018, 1, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2018, 1, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2018, 1, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2018, 1, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 1,
  },
  {
    month: new Date(2018, 3, 1),
    sources: [
      {
        month: new Date(2018, 3, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2018, 3, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2018, 3, 1),
        source: "Google Drive",
        count: 3,
      },
      {
        month: new Date(2018, 3, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2018, 3, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 3,
  },
  {
    month: new Date(2018, 4, 1),
    sources: [
      {
        month: new Date(2018, 4, 1),
        source: "Github",
        count: 2,
      },
      {
        month: new Date(2018, 4, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2018, 4, 1),
        source: "Google Drive",
        count: 14,
      },
      {
        month: new Date(2018, 4, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2018, 4, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 17,
  },
  {
    month: new Date(2018, 5, 1),
    sources: [
      {
        month: new Date(2018, 5, 1),
        source: "Github",
        count: 2,
      },
      {
        month: new Date(2018, 5, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2018, 5, 1),
        source: "Google Drive",
        count: 32,
      },
      {
        month: new Date(2018, 5, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2018, 5, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 34,
  },
  {
    month: new Date(2018, 6, 1),
    sources: [
      {
        month: new Date(2018, 6, 1),
        source: "Github",
        count: 9,
      },
      {
        month: new Date(2018, 6, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2018, 6, 1),
        source: "Google Drive",
        count: 3,
      },
      {
        month: new Date(2018, 6, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2018, 6, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 12,
  },
  {
    month: new Date(2018, 7, 1),
    sources: [
      {
        month: new Date(2018, 7, 1),
        source: "Github",
        count: 1,
      },
      {
        month: new Date(2018, 7, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2018, 7, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2018, 7, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2018, 7, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 2,
  },
  {
    month: new Date(2018, 8, 1),
    sources: [
      {
        month: new Date(2018, 8, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2018, 8, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2018, 8, 1),
        source: "Google Drive",
        count: 3,
      },
      {
        month: new Date(2018, 8, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2018, 8, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 5,
  },
  {
    month: new Date(2018, 9, 1),
    sources: [
      {
        month: new Date(2018, 9, 1),
        source: "Github",
        count: 1,
      },
      {
        month: new Date(2018, 9, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2018, 9, 1),
        source: "Google Drive",
        count: 9,
      },
      {
        month: new Date(2018, 9, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2018, 9, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 10,
  },
  {
    month: new Date(2018, 10, 1),
    sources: [
      {
        month: new Date(2018, 10, 1),
        source: "Github",
        count: 1,
      },
      {
        month: new Date(2018, 10, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2018, 10, 1),
        source: "Google Drive",
        count: 1,
      },
      {
        month: new Date(2018, 10, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2018, 10, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 2,
  },
  {
    month: new Date(2018, 11, 1),
    sources: [
      {
        month: new Date(2018, 11, 1),
        source: "Github",
        count: 0,
      },
      {
        month: new Date(2018, 11, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2018, 11, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2018, 11, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2018, 11, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 1,
  },
  {
    month: new Date(2019, 0, 1),
    sources: [
      {
        month: new Date(2019, 0, 1),
        source: "Github",
        count: 2,
      },
      {
        month: new Date(2019, 0, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2019, 0, 1),
        source: "Google Drive",
        count: 7,
      },
      {
        month: new Date(2019, 0, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2019, 0, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 9,
  },
  {
    month: new Date(2019, 1, 1),
    sources: [
      {
        month: new Date(2019, 1, 1),
        source: "Github",
        count: 19,
      },
      {
        month: new Date(2019, 1, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2019, 1, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2019, 1, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2019, 1, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 19,
  },
  {
    month: new Date(2019, 2, 1),
    sources: [
      {
        month: new Date(2019, 2, 1),
        source: "Github",
        count: 6,
      },
      {
        month: new Date(2019, 2, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2019, 2, 1),
        source: "Google Drive",
        count: 1,
      },
      {
        month: new Date(2019, 2, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2019, 2, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 7,
  },
  {
    month: new Date(2019, 3, 1),
    sources: [
      {
        month: new Date(2019, 3, 1),
        source: "Github",
        count: 2,
      },
      {
        month: new Date(2019, 3, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2019, 3, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2019, 3, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2019, 3, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 2,
  },
  {
    month: new Date(2019, 4, 1),
    sources: [
      {
        month: new Date(2019, 4, 1),
        source: "Github",
        count: 6,
      },
      {
        month: new Date(2019, 4, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2019, 4, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2019, 4, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2019, 4, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 6,
  },
  {
    month: new Date(2019, 5, 1),
    sources: [
      {
        month: new Date(2019, 5, 1),
        source: "Github",
        count: 1,
      },
      {
        month: new Date(2019, 5, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2019, 5, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2019, 5, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2019, 5, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 1,
  },
  {
    month: new Date(2019, 6, 1),
    sources: [
      {
        month: new Date(2019, 6, 1),
        source: "Github",
        count: 4,
      },
      {
        month: new Date(2019, 6, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2019, 6, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2019, 6, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2019, 6, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 4,
  },
  {
    month: new Date(2019, 7, 1),
    sources: [
      {
        month: new Date(2019, 7, 1),
        source: "Github",
        count: 2,
      },
      {
        month: new Date(2019, 7, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2019, 7, 1),
        source: "Google Drive",
        count: 1,
      },
      {
        month: new Date(2019, 7, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2019, 7, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 3,
  },
  {
    month: new Date(2019, 8, 1),
    sources: [
      {
        month: new Date(2019, 8, 1),
        source: "Github",
        count: 1,
      },
      {
        month: new Date(2019, 8, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2019, 8, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2019, 8, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2019, 8, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 1,
  },
  {
    month: new Date(2019, 9, 1),
    sources: [
      {
        month: new Date(2019, 9, 1),
        source: "Github",
        count: 2,
      },
      {
        month: new Date(2019, 9, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2019, 9, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2019, 9, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2019, 9, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 2,
  },
  {
    month: new Date(2019, 10, 1),
    sources: [
      {
        month: new Date(2019, 10, 1),
        source: "Github",
        count: 13,
      },
      {
        month: new Date(2019, 10, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2019, 10, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2019, 10, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2019, 10, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 13,
  },
  {
    month: new Date(2019, 11, 1),
    sources: [
      {
        month: new Date(2019, 11, 1),
        source: "Github",
        count: 16,
      },
      {
        month: new Date(2019, 11, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2019, 11, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2019, 11, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2019, 11, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 16,
  },
  {
    month: new Date(2020, 0, 1),
    sources: [
      {
        month: new Date(2020, 0, 1),
        source: "Github",
        count: 2,
      },
      {
        month: new Date(2020, 0, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2020, 0, 1),
        source: "Google Drive",
        count: 3,
      },
      {
        month: new Date(2020, 0, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2020, 0, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 6,
  },
  {
    month: new Date(2020, 1, 1),
    sources: [
      {
        month: new Date(2020, 1, 1),
        source: "Github",
        count: 8,
      },
      {
        month: new Date(2020, 1, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2020, 1, 1),
        source: "Google Drive",
        count: 1,
      },
      {
        month: new Date(2020, 1, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2020, 1, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 9,
  },
  {
    month: new Date(2020, 2, 1),
    sources: [
      {
        month: new Date(2020, 2, 1),
        source: "Github",
        count: 15,
      },
      {
        month: new Date(2020, 2, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2020, 2, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2020, 2, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2020, 2, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 16,
  },
  {
    month: new Date(2020, 3, 1),
    sources: [
      {
        month: new Date(2020, 3, 1),
        source: "Github",
        count: 6,
      },
      {
        month: new Date(2020, 3, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2020, 3, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2020, 3, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2020, 3, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 6,
  },
  {
    month: new Date(2020, 4, 1),
    sources: [
      {
        month: new Date(2020, 4, 1),
        source: "Github",
        count: 45,
      },
      {
        month: new Date(2020, 4, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2020, 4, 1),
        source: "Google Drive",
        count: 8,
      },
      {
        month: new Date(2020, 4, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2020, 4, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 54,
  },
  {
    month: new Date(2020, 5, 1),
    sources: [
      {
        month: new Date(2020, 5, 1),
        source: "Github",
        count: 19,
      },
      {
        month: new Date(2020, 5, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2020, 5, 1),
        source: "Google Drive",
        count: 2,
      },
      {
        month: new Date(2020, 5, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2020, 5, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 21,
  },
  {
    month: new Date(2020, 6, 1),
    sources: [
      {
        month: new Date(2020, 6, 1),
        source: "Github",
        count: 24,
      },
      {
        month: new Date(2020, 6, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2020, 6, 1),
        source: "Google Drive",
        count: 3,
      },
      {
        month: new Date(2020, 6, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2020, 6, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 27,
  },
  {
    month: new Date(2020, 7, 1),
    sources: [
      {
        month: new Date(2020, 7, 1),
        source: "Github",
        count: 14,
      },
      {
        month: new Date(2020, 7, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2020, 7, 1),
        source: "Google Drive",
        count: 57,
      },
      {
        month: new Date(2020, 7, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2020, 7, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 72,
  },
  {
    month: new Date(2020, 8, 1),
    sources: [
      {
        month: new Date(2020, 8, 1),
        source: "Github",
        count: 14,
      },
      {
        month: new Date(2020, 8, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2020, 8, 1),
        source: "Google Drive",
        count: 13,
      },
      {
        month: new Date(2020, 8, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2020, 8, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 27,
  },
  {
    month: new Date(2020, 9, 1),
    sources: [
      {
        month: new Date(2020, 9, 1),
        source: "Github",
        count: 3,
      },
      {
        month: new Date(2020, 9, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2020, 9, 1),
        source: "Google Drive",
        count: 4,
      },
      {
        month: new Date(2020, 9, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2020, 9, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 7,
  },
  {
    month: new Date(2020, 10, 1),
    sources: [
      {
        month: new Date(2020, 10, 1),
        source: "Github",
        count: 7,
      },
      {
        month: new Date(2020, 10, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2020, 10, 1),
        source: "Google Drive",
        count: 38,
      },
      {
        month: new Date(2020, 10, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2020, 10, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 45,
  },
  {
    month: new Date(2020, 11, 1),
    sources: [
      {
        month: new Date(2020, 11, 1),
        source: "Github",
        count: 66,
      },
      {
        month: new Date(2020, 11, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2020, 11, 1),
        source: "Google Drive",
        count: 10,
      },
      {
        month: new Date(2020, 11, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2020, 11, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 76,
  },
  {
    month: new Date(2021, 0, 1),
    sources: [
      {
        month: new Date(2021, 0, 1),
        source: "Github",
        count: 49,
      },
      {
        month: new Date(2021, 0, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2021, 0, 1),
        source: "Google Drive",
        count: 3,
      },
      {
        month: new Date(2021, 0, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2021, 0, 1),
        source: "Figma",
        count: 0,
      },
    ],
    total: 53,
  },
  {
    month: new Date(2021, 1, 1),
    sources: [
      {
        month: new Date(2021, 1, 1),
        source: "Github",
        count: 5,
      },
      {
        month: new Date(2021, 1, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2021, 1, 1),
        source: "Google Drive",
        count: 1,
      },
      {
        month: new Date(2021, 1, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2021, 1, 1),
        source: "Figma",
        count: 5,
      },
    ],
    total: 11,
  },
  {
    month: new Date(2021, 2, 1),
    sources: [
      {
        month: new Date(2021, 2, 1),
        source: "Github",
        count: 16,
      },
      {
        month: new Date(2021, 2, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2021, 2, 1),
        source: "Google Drive",
        count: 20,
      },
      {
        month: new Date(2021, 2, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2021, 2, 1),
        source: "Figma",
        count: 16,
      },
    ],
    total: 53,
  },
  {
    month: new Date(2021, 3, 1),
    sources: [
      {
        month: new Date(2021, 3, 1),
        source: "Github",
        count: 12,
      },
      {
        month: new Date(2021, 3, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2021, 3, 1),
        source: "Google Drive",
        count: 2,
      },
      {
        month: new Date(2021, 3, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2021, 3, 1),
        source: "Figma",
        count: 28,
      },
    ],
    total: 43,
  },
  {
    month: new Date(2021, 4, 1),
    sources: [
      {
        month: new Date(2021, 4, 1),
        source: "Github",
        count: 10,
      },
      {
        month: new Date(2021, 4, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2021, 4, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2021, 4, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2021, 4, 1),
        source: "Figma",
        count: 21,
      },
    ],
    total: 33,
  },
  {
    month: new Date(2021, 5, 1),
    sources: [
      {
        month: new Date(2021, 5, 1),
        source: "Github",
        count: 93,
      },
      {
        month: new Date(2021, 5, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2021, 5, 1),
        source: "Google Drive",
        count: 59,
      },
      {
        month: new Date(2021, 5, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2021, 5, 1),
        source: "Figma",
        count: 33,
      },
    ],
    total: 187,
  },
  {
    month: new Date(2021, 6, 1),
    sources: [
      {
        month: new Date(2021, 6, 1),
        source: "Github",
        count: 69,
      },
      {
        month: new Date(2021, 6, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2021, 6, 1),
        source: "Google Drive",
        count: 2,
      },
      {
        month: new Date(2021, 6, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2021, 6, 1),
        source: "Figma",
        count: 43,
      },
    ],
    total: 114,
  },
  {
    month: new Date(2021, 7, 1),
    sources: [
      {
        month: new Date(2021, 7, 1),
        source: "Github",
        count: 27,
      },
      {
        month: new Date(2021, 7, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2021, 7, 1),
        source: "Google Drive",
        count: 10,
      },
      {
        month: new Date(2021, 7, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2021, 7, 1),
        source: "Figma",
        count: 4,
      },
    ],
    total: 43,
  },
  {
    month: new Date(2021, 8, 1),
    sources: [
      {
        month: new Date(2021, 8, 1),
        source: "Github",
        count: 5,
      },
      {
        month: new Date(2021, 8, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2021, 8, 1),
        source: "Google Drive",
        count: 1,
      },
      {
        month: new Date(2021, 8, 1),
        source: "iCalendar",
        count: 4,
      },
      {
        month: new Date(2021, 8, 1),
        source: "Figma",
        count: 7,
      },
    ],
    total: 17,
  },
  {
    month: new Date(2021, 9, 1),
    sources: [
      {
        month: new Date(2021, 9, 1),
        source: "Github",
        count: 25,
      },
      {
        month: new Date(2021, 9, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2021, 9, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2021, 9, 1),
        source: "iCalendar",
        count: 3,
      },
      {
        month: new Date(2021, 9, 1),
        source: "Figma",
        count: 11,
      },
    ],
    total: 39,
  },
  {
    month: new Date(2021, 10, 1),
    sources: [
      {
        month: new Date(2021, 10, 1),
        source: "Github",
        count: 15,
      },
      {
        month: new Date(2021, 10, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2021, 10, 1),
        source: "Google Drive",
        count: 65,
      },
      {
        month: new Date(2021, 10, 1),
        source: "iCalendar",
        count: 3,
      },
      {
        month: new Date(2021, 10, 1),
        source: "Figma",
        count: 5,
      },
    ],
    total: 88,
  },
  {
    month: new Date(2021, 11, 1),
    sources: [
      {
        month: new Date(2021, 11, 1),
        source: "Github",
        count: 12,
      },
      {
        month: new Date(2021, 11, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2021, 11, 1),
        source: "Google Drive",
        count: 1,
      },
      {
        month: new Date(2021, 11, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2021, 11, 1),
        source: "Figma",
        count: 3,
      },
    ],
    total: 17,
  },
  {
    month: new Date(2022, 0, 1),
    sources: [
      {
        month: new Date(2022, 0, 1),
        source: "Github",
        count: 5,
      },
      {
        month: new Date(2022, 0, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2022, 0, 1),
        source: "Google Drive",
        count: 6,
      },
      {
        month: new Date(2022, 0, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2022, 0, 1),
        source: "Figma",
        count: 10,
      },
    ],
    total: 22,
  },
  {
    month: new Date(2022, 1, 1),
    sources: [
      {
        month: new Date(2022, 1, 1),
        source: "Github",
        count: 21,
      },
      {
        month: new Date(2022, 1, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2022, 1, 1),
        source: "Google Drive",
        count: 1,
      },
      {
        month: new Date(2022, 1, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2022, 1, 1),
        source: "Figma",
        count: 12,
      },
    ],
    total: 36,
  },
  {
    month: new Date(2022, 2, 1),
    sources: [
      {
        month: new Date(2022, 2, 1),
        source: "Github",
        count: 24,
      },
      {
        month: new Date(2022, 2, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2022, 2, 1),
        source: "Google Drive",
        count: 5,
      },
      {
        month: new Date(2022, 2, 1),
        source: "iCalendar",
        count: 3,
      },
      {
        month: new Date(2022, 2, 1),
        source: "Figma",
        count: 6,
      },
    ],
    total: 38,
  },
  {
    month: new Date(2022, 3, 1),
    sources: [
      {
        month: new Date(2022, 3, 1),
        source: "Github",
        count: 18,
      },
      {
        month: new Date(2022, 3, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2022, 3, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2022, 3, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2022, 3, 1),
        source: "Figma",
        count: 14,
      },
    ],
    total: 34,
  },
  {
    month: new Date(2022, 4, 1),
    sources: [
      {
        month: new Date(2022, 4, 1),
        source: "Github",
        count: 7,
      },
      {
        month: new Date(2022, 4, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2022, 4, 1),
        source: "Google Drive",
        count: 11,
      },
      {
        month: new Date(2022, 4, 1),
        source: "iCalendar",
        count: 3,
      },
      {
        month: new Date(2022, 4, 1),
        source: "Figma",
        count: 2,
      },
    ],
    total: 23,
  },
  {
    month: new Date(2022, 5, 1),
    sources: [
      {
        month: new Date(2022, 5, 1),
        source: "Github",
        count: 7,
      },
      {
        month: new Date(2022, 5, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2022, 5, 1),
        source: "Google Drive",
        count: 28,
      },
      {
        month: new Date(2022, 5, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2022, 5, 1),
        source: "Figma",
        count: 22,
      },
    ],
    total: 57,
  },
  {
    month: new Date(2022, 6, 1),
    sources: [
      {
        month: new Date(2022, 6, 1),
        source: "Github",
        count: 32,
      },
      {
        month: new Date(2022, 6, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2022, 6, 1),
        source: "Google Drive",
        count: 62,
      },
      {
        month: new Date(2022, 6, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2022, 6, 1),
        source: "Figma",
        count: 29,
      },
    ],
    total: 124,
  },
  {
    month: new Date(2022, 7, 1),
    sources: [
      {
        month: new Date(2022, 7, 1),
        source: "Github",
        count: 7,
      },
      {
        month: new Date(2022, 7, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2022, 7, 1),
        source: "Google Drive",
        count: 13,
      },
      {
        month: new Date(2022, 7, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2022, 7, 1),
        source: "Figma",
        count: 15,
      },
    ],
    total: 35,
  },
  {
    month: new Date(2022, 8, 1),
    sources: [
      {
        month: new Date(2022, 8, 1),
        source: "Github",
        count: 8,
      },
      {
        month: new Date(2022, 8, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2022, 8, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2022, 8, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2022, 8, 1),
        source: "Figma",
        count: 9,
      },
    ],
    total: 18,
  },
  {
    month: new Date(2022, 9, 1),
    sources: [
      {
        month: new Date(2022, 9, 1),
        source: "Github",
        count: 27,
      },
      {
        month: new Date(2022, 9, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2022, 9, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2022, 9, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2022, 9, 1),
        source: "Figma",
        count: 13,
      },
    ],
    total: 40,
  },
  {
    month: new Date(2022, 10, 1),
    sources: [
      {
        month: new Date(2022, 10, 1),
        source: "Github",
        count: 15,
      },
      {
        month: new Date(2022, 10, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2022, 10, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2022, 10, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2022, 10, 1),
        source: "Figma",
        count: 18,
      },
    ],
    total: 35,
  },
  {
    month: new Date(2022, 11, 1),
    sources: [
      {
        month: new Date(2022, 11, 1),
        source: "Github",
        count: 8,
      },
      {
        month: new Date(2022, 11, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2022, 11, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2022, 11, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2022, 11, 1),
        source: "Figma",
        count: 7,
      },
    ],
    total: 16,
  },
  {
    month: new Date(2023, 0, 1),
    sources: [
      {
        month: new Date(2023, 0, 1),
        source: "Github",
        count: 64,
      },
      {
        month: new Date(2023, 0, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2023, 0, 1),
        source: "Google Drive",
        count: 6,
      },
      {
        month: new Date(2023, 0, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2023, 0, 1),
        source: "Figma",
        count: 40,
      },
    ],
    total: 112,
  },
  {
    month: new Date(2023, 1, 1),
    sources: [
      {
        month: new Date(2023, 1, 1),
        source: "Github",
        count: 39,
      },
      {
        month: new Date(2023, 1, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2023, 1, 1),
        source: "Google Drive",
        count: 4,
      },
      {
        month: new Date(2023, 1, 1),
        source: "iCalendar",
        count: 1,
      },
      {
        month: new Date(2023, 1, 1),
        source: "Figma",
        count: 36,
      },
    ],
    total: 80,
  },
  {
    month: new Date(2023, 2, 1),
    sources: [
      {
        month: new Date(2023, 2, 1),
        source: "Github",
        count: 49,
      },
      {
        month: new Date(2023, 2, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2023, 2, 1),
        source: "Google Drive",
        count: 4,
      },
      {
        month: new Date(2023, 2, 1),
        source: "iCalendar",
        count: 6,
      },
      {
        month: new Date(2023, 2, 1),
        source: "Figma",
        count: 49,
      },
    ],
    total: 108,
  },
  {
    month: new Date(2023, 3, 1),
    sources: [
      {
        month: new Date(2023, 3, 1),
        source: "Github",
        count: 12,
      },
      {
        month: new Date(2023, 3, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2023, 3, 1),
        source: "Google Drive",
        count: 2,
      },
      {
        month: new Date(2023, 3, 1),
        source: "iCalendar",
        count: 3,
      },
      {
        month: new Date(2023, 3, 1),
        source: "Figma",
        count: 32,
      },
    ],
    total: 49,
  },
  {
    month: new Date(2023, 4, 1),
    sources: [
      {
        month: new Date(2023, 4, 1),
        source: "Github",
        count: 25,
      },
      {
        month: new Date(2023, 4, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2023, 4, 1),
        source: "Google Drive",
        count: 22,
      },
      {
        month: new Date(2023, 4, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2023, 4, 1),
        source: "Figma",
        count: 10,
      },
    ],
    total: 59,
  },
  {
    month: new Date(2023, 5, 1),
    sources: [
      {
        month: new Date(2023, 5, 1),
        source: "Github",
        count: 22,
      },
      {
        month: new Date(2023, 5, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2023, 5, 1),
        source: "Google Drive",
        count: 9,
      },
      {
        month: new Date(2023, 5, 1),
        source: "iCalendar",
        count: 8,
      },
      {
        month: new Date(2023, 5, 1),
        source: "Figma",
        count: 27,
      },
    ],
    total: 66,
  },
  {
    month: new Date(2023, 6, 1),
    sources: [
      {
        month: new Date(2023, 6, 1),
        source: "Github",
        count: 15,
      },
      {
        month: new Date(2023, 6, 1),
        source: "Zotero",
        count: 10,
      },
      {
        month: new Date(2023, 6, 1),
        source: "Google Drive",
        count: 12,
      },
      {
        month: new Date(2023, 6, 1),
        source: "iCalendar",
        count: 2,
      },
      {
        month: new Date(2023, 6, 1),
        source: "Figma",
        count: 2,
      },
    ],
    total: 41,
  },
  {
    month: new Date(2023, 7, 1),
    sources: [
      {
        month: new Date(2023, 7, 1),
        source: "Github",
        count: 40,
      },
      {
        month: new Date(2023, 7, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2023, 7, 1),
        source: "Google Drive",
        count: 33,
      },
      {
        month: new Date(2023, 7, 1),
        source: "iCalendar",
        count: 4,
      },
      {
        month: new Date(2023, 7, 1),
        source: "Figma",
        count: 6,
      },
    ],
    total: 83,
  },
  {
    month: new Date(2023, 8, 1),
    sources: [
      {
        month: new Date(2023, 8, 1),
        source: "Github",
        count: 8,
      },
      {
        month: new Date(2023, 8, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2023, 8, 1),
        source: "Google Drive",
        count: 25,
      },
      {
        month: new Date(2023, 8, 1),
        source: "iCalendar",
        count: 3,
      },
      {
        month: new Date(2023, 8, 1),
        source: "Figma",
        count: 3,
      },
    ],
    total: 39,
  },
  {
    month: new Date(2023, 9, 1),
    sources: [
      {
        month: new Date(2023, 9, 1),
        source: "Github",
        count: 34,
      },
      {
        month: new Date(2023, 9, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2023, 9, 1),
        source: "Google Drive",
        count: 14,
      },
      {
        month: new Date(2023, 9, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2023, 9, 1),
        source: "Figma",
        count: 25,
      },
    ],
    total: 73,
  },
  {
    month: new Date(2023, 10, 1),
    sources: [
      {
        month: new Date(2023, 10, 1),
        source: "Github",
        count: 20,
      },
      {
        month: new Date(2023, 10, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2023, 10, 1),
        source: "Google Drive",
        count: 0,
      },
      {
        month: new Date(2023, 10, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2023, 10, 1),
        source: "Figma",
        count: 4,
      },
    ],
    total: 24,
  },
  {
    month: new Date(2023, 11, 1),
    sources: [
      {
        month: new Date(2023, 11, 1),
        source: "Github",
        count: 8,
      },
      {
        month: new Date(2023, 11, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2023, 11, 1),
        source: "Google Drive",
        count: 4,
      },
      {
        month: new Date(2023, 11, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2023, 11, 1),
        source: "Figma",
        count: 6,
      },
    ],
    total: 18,
  },
  {
    month: new Date(2024, 0, 1),
    sources: [
      {
        month: new Date(2024, 0, 1),
        source: "Github",
        count: 10,
      },
      {
        month: new Date(2024, 0, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2024, 0, 1),
        source: "Google Drive",
        count: 2,
      },
      {
        month: new Date(2024, 0, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2024, 0, 1),
        source: "Figma",
        count: 22,
      },
    ],
    total: 34,
  },
  {
    month: new Date(2024, 1, 1),
    sources: [
      {
        month: new Date(2024, 1, 1),
        source: "Github",
        count: 19,
      },
      {
        month: new Date(2024, 1, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2024, 1, 1),
        source: "Google Drive",
        count: 19,
      },
      {
        month: new Date(2024, 1, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2024, 1, 1),
        source: "Figma",
        count: 21,
      },
    ],
    total: 59,
  },
  {
    month: new Date(2024, 2, 1),
    sources: [
      {
        month: new Date(2024, 2, 1),
        source: "Github",
        count: 54,
      },
      {
        month: new Date(2024, 2, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2024, 2, 1),
        source: "Google Drive",
        count: 16,
      },
      {
        month: new Date(2024, 2, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2024, 2, 1),
        source: "Figma",
        count: 67,
      },
    ],
    total: 137,
  },
  {
    month: new Date(2024, 3, 1),
    sources: [
      {
        month: new Date(2024, 3, 1),
        source: "Github",
        count: 21,
      },
      {
        month: new Date(2024, 3, 1),
        source: "Zotero",
        count: 0,
      },
      {
        month: new Date(2024, 3, 1),
        source: "Google Drive",
        count: 106,
      },
      {
        month: new Date(2024, 3, 1),
        source: "iCalendar",
        count: 0,
      },
      {
        month: new Date(2024, 3, 1),
        source: "Figma",
        count: 28,
      },
    ],
    total: 155,
  },
];

export default monthlyData;
