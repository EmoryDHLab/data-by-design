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
// {
//   month: new Date(2012, 7, 1),
//   sources: [{ month: new Date(2012, 7, 1), source: "Zotero", count: 1 }],
//   total: 1,
// },
export const monthlyData: TMontData[] = [
  {
    month: new Date(2012, 7, 1),
    sources: [{ month: new Date(2012, 7, 1), source: "Zotero", count: 1 }],
    total: 1,
  },
  {
    month: new Date(2013, 11, 1),
    sources: [{ month: new Date(2013, 11, 1), source: "Zotero", count: 190 }],
    total: 190,
  },
  {
    month: new Date(2014, 0, 1),
    sources: [{ month: new Date(2014, 0, 1), source: "Zotero", count: 7 }],
    total: 7,
  },
  {
    month: new Date(2014, 1, 1),
    sources: [{ month: new Date(2014, 1, 1), source: "Zotero", count: 1 }],
    total: 1,
  },
  {
    month: new Date(2014, 4, 1),
    sources: [
      { month: new Date(2014, 4, 1), source: "Google Drive", count: 4 },
      { month: new Date(2014, 4, 1), source: "Zotero", count: 2 },
    ],
    total: 6,
  },
  {
    month: new Date(2014, 11, 1),
    sources: [{ month: new Date(2014, 11, 1), source: "Zotero", count: 4 }],
    total: 4,
  },
  {
    month: new Date(2015, 2, 1),
    sources: [
      { month: new Date(2015, 2, 1), source: "Google Drive", count: 2 },
    ],
    total: 2,
  },
  {
    month: new Date(2015, 7, 1),
    sources: [{ month: new Date(2015, 7, 1), source: "Github", count: 2 }],
    total: 2,
  },
  {
    month: new Date(2016, 2, 1),
    sources: [{ month: new Date(2016, 2, 1), source: "Github", count: 8 }],
    total: 8,
  },
  {
    month: new Date(2016, 3, 1),
    sources: [{ month: new Date(2016, 3, 1), source: "Github", count: 6 }],
    total: 6,
  },
  {
    month: new Date(2016, 4, 1),
    sources: [{ month: new Date(2016, 4, 1), source: "Github", count: 4 }],
    total: 4,
  },
  {
    month: new Date(2016, 5, 1),
    sources: [{ month: new Date(2016, 5, 1), source: "Github", count: 2 }],
    total: 2,
  },
  {
    month: new Date(2016, 7, 1),
    sources: [{ month: new Date(2016, 7, 1), source: "Github", count: 2 }],
    total: 2,
  },
  {
    month: new Date(2016, 8, 1),
    sources: [{ month: new Date(2016, 8, 1), source: "Github", count: 28 }],
    total: 28,
  },
  {
    month: new Date(2016, 9, 1),
    sources: [
      { month: new Date(2016, 9, 1), source: "Github", count: 28 },
      { month: new Date(2016, 9, 1), source: "Google Drive", count: 6 },
    ],
    total: 34,
  },
  {
    month: new Date(2016, 10, 1),
    sources: [{ month: new Date(2016, 10, 1), source: "Github", count: 6 }],
    total: 6,
  },
  {
    month: new Date(2016, 11, 1),
    sources: [{ month: new Date(2016, 11, 1), source: "Github", count: 54 }],
    total: 54,
  },
  {
    month: new Date(2017, 0, 1),
    sources: [{ month: new Date(2017, 0, 1), source: "Github", count: 28 }],
    total: 28,
  },
  {
    month: new Date(2017, 1, 1),
    sources: [{ month: new Date(2017, 1, 1), source: "Github", count: 2 }],
    total: 2,
  },
  {
    month: new Date(2017, 2, 1),
    sources: [{ month: new Date(2017, 2, 1), source: "Github", count: 18 }],
    total: 18,
  },
  {
    month: new Date(2017, 3, 1),
    sources: [{ month: new Date(2017, 3, 1), source: "Github", count: 12 }],
    total: 12,
  },
  {
    month: new Date(2017, 4, 1),
    sources: [{ month: new Date(2017, 4, 1), source: "iCalendar", count: 4 }],
    total: 4,
  },
  {
    month: new Date(2017, 5, 1),
    sources: [{ month: new Date(2017, 5, 1), source: "iCalendar", count: 6 }],
    total: 6,
  },
  {
    month: new Date(2017, 7, 1),
    sources: [{ month: new Date(2017, 7, 1), source: "iCalendar", count: 4 }],
    total: 4,
  },
  {
    month: new Date(2017, 8, 1),
    sources: [{ month: new Date(2017, 8, 1), source: "iCalendar", count: 4 }],
    total: 4,
  },
  {
    month: new Date(2017, 9, 1),
    sources: [{ month: new Date(2017, 9, 1), source: "iCalendar", count: 8 }],
    total: 8,
  },
  {
    month: new Date(2017, 10, 1),
    sources: [
      { month: new Date(2017, 10, 1), source: "iCalendar", count: 4 },
      { month: new Date(2017, 10, 1), source: "Google Drive", count: 4 },
    ],
    total: 8,
  },
  {
    month: new Date(2017, 11, 1),
    sources: [{ month: new Date(2017, 11, 1), source: "iCalendar", count: 2 }],
    total: 2,
  },
  {
    month: new Date(2018, 0, 1),
    sources: [{ month: new Date(2018, 0, 1), source: "iCalendar", count: 4 }],
    total: 4,
  },
  {
    month: new Date(2018, 1, 1),
    sources: [
      { month: new Date(2018, 1, 1), source: "Google Drive", count: 4 },
      { month: new Date(2018, 1, 1), source: "iCalendar", count: 2 },
    ],
    total: 6,
  },
  {
    month: new Date(2018, 2, 1),
    sources: [
      { month: new Date(2018, 2, 1), source: "Google Drive", count: 1 },
    ],
    total: 1,
  },
  {
    month: new Date(2018, 3, 1),
    sources: [
      { month: new Date(2018, 3, 1), source: "Google Drive", count: 6 },
    ],
    total: 6,
  },
  {
    month: new Date(2018, 4, 1),
    sources: [
      { month: new Date(2018, 4, 1), source: "iCalendar", count: 2 },
      { month: new Date(2018, 4, 1), source: "Google Drive", count: 29 },
      { month: new Date(2018, 4, 1), source: "Github", count: 4 },
    ],
    total: 35,
  },
  {
    month: new Date(2018, 5, 1),
    sources: [
      { month: new Date(2018, 5, 1), source: "Google Drive", count: 64 },
      { month: new Date(2018, 5, 1), source: "Github", count: 7 },
    ],
    total: 71,
  },
  {
    month: new Date(2018, 6, 1),
    sources: [
      { month: new Date(2018, 6, 1), source: "Github", count: 30 },
      { month: new Date(2018, 6, 1), source: "Google Drive", count: 7 },
    ],
    total: 37,
  },
  {
    month: new Date(2018, 7, 1),
    sources: [
      { month: new Date(2018, 7, 1), source: "Github", count: 10 },
      { month: new Date(2018, 7, 1), source: "iCalendar", count: 2 },
    ],
    total: 12,
  },
  {
    month: new Date(2018, 8, 1),
    sources: [
      { month: new Date(2018, 8, 1), source: "Google Drive", count: 6 },
      { month: new Date(2018, 8, 1), source: "iCalendar", count: 4 },
    ],
    total: 10,
  },
  {
    month: new Date(2018, 9, 1),
    sources: [
      { month: new Date(2018, 9, 1), source: "Google Drive", count: 18 },
      { month: new Date(2018, 9, 1), source: "Github", count: 3 },
    ],
    total: 21,
  },
  {
    month: new Date(2018, 10, 1),
    sources: [
      { month: new Date(2018, 10, 1), source: "Google Drive", count: 2 },
      { month: new Date(2018, 10, 1), source: "Github", count: 2 },
    ],
    total: 4,
  },
  {
    month: new Date(2018, 11, 1),
    sources: [{ month: new Date(2018, 11, 1), source: "iCalendar", count: 2 }],
    total: 2,
  },
  {
    month: new Date(2019, 0, 1),
    sources: [
      { month: new Date(2019, 0, 1), source: "Google Drive", count: 56 },
      { month: new Date(2019, 0, 1), source: "Github", count: 5 },
    ],
    total: 61,
  },
  {
    month: new Date(2019, 1, 1),
    sources: [
      { month: new Date(2019, 1, 1), source: "Github", count: 39 },
      { month: new Date(2019, 1, 1), source: "Google Drive", count: 6 },
    ],
    total: 45,
  },
  {
    month: new Date(2019, 2, 1),
    sources: [
      { month: new Date(2019, 2, 1), source: "Google Drive", count: 11 },
      { month: new Date(2019, 2, 1), source: "Github", count: 12 },
    ],
    total: 23,
  },
  {
    month: new Date(2019, 3, 1),
    sources: [
      { month: new Date(2019, 3, 1), source: "Github", count: 4 },
      { month: new Date(2019, 3, 1), source: "Google Drive", count: 3 },
    ],
    total: 7,
  },
  {
    month: new Date(2019, 4, 1),
    sources: [
      { month: new Date(2019, 4, 1), source: "Google Drive", count: 4 },
      { month: new Date(2019, 4, 1), source: "Github", count: 12 },
    ],
    total: 16,
  },
  {
    month: new Date(2019, 5, 1),
    sources: [
      { month: new Date(2019, 5, 1), source: "Google Drive", count: 5 },
      { month: new Date(2019, 5, 1), source: "Github", count: 2 },
    ],
    total: 7,
  },
  {
    month: new Date(2019, 6, 1),
    sources: [{ month: new Date(2019, 6, 1), source: "Github", count: 8 }],
    total: 8,
  },
  {
    month: new Date(2019, 7, 1),
    sources: [
      { month: new Date(2019, 7, 1), source: "Github", count: 4 },
      { month: new Date(2019, 7, 1), source: "Google Drive", count: 4 },
    ],
    total: 8,
  },
  {
    month: new Date(2019, 8, 1),
    sources: [{ month: new Date(2019, 8, 1), source: "Github", count: 2 }],
    total: 2,
  },
  {
    month: new Date(2019, 9, 1),
    sources: [{ month: new Date(2019, 9, 1), source: "Github", count: 4 }],
    total: 4,
  },
  {
    month: new Date(2019, 10, 1),
    sources: [{ month: new Date(2019, 10, 1), source: "Github", count: 26 }],
    total: 26,
  },
  {
    month: new Date(2019, 11, 1),
    sources: [{ month: new Date(2019, 11, 1), source: "Github", count: 32 }],
    total: 32,
  },
  {
    month: new Date(2020, 0, 1),
    sources: [
      { month: new Date(2020, 0, 1), source: "Github", count: 4 },
      { month: new Date(2020, 0, 1), source: "Google Drive", count: 6 },
      { month: new Date(2020, 0, 1), source: "iCalendar", count: 2 },
    ],
    total: 12,
  },
  {
    month: new Date(2020, 1, 1),
    sources: [
      { month: new Date(2020, 1, 1), source: "Github", count: 15 },
      { month: new Date(2020, 1, 1), source: "Google Drive", count: 4 },
    ],
    total: 19,
  },
  {
    month: new Date(2020, 2, 1),
    sources: [
      { month: new Date(2020, 2, 1), source: "Github", count: 31 },
      { month: new Date(2020, 2, 1), source: "iCalendar", count: 2 },
    ],
    total: 33,
  },
  {
    month: new Date(2020, 3, 1),
    sources: [{ month: new Date(2020, 3, 1), source: "Github", count: 12 }],
    total: 12,
  },
  {
    month: new Date(2020, 4, 1),
    sources: [
      { month: new Date(2020, 4, 1), source: "Github", count: 90 },
      { month: new Date(2020, 4, 1), source: "Google Drive", count: 16 },
      { month: new Date(2020, 4, 1), source: "iCalendar", count: 2 },
    ],
    total: 108,
  },
  {
    month: new Date(2020, 5, 1),
    sources: [
      { month: new Date(2020, 5, 1), source: "Github", count: 35 },
      { month: new Date(2020, 5, 1), source: "Google Drive", count: 3 },
    ],
    total: 38,
  },
  {
    month: new Date(2020, 6, 1),
    sources: [
      { month: new Date(2020, 6, 1), source: "Github", count: 50 },
      { month: new Date(2020, 6, 1), source: "Google Drive", count: 6 },
    ],
    total: 56,
  },
  {
    month: new Date(2020, 7, 1),
    sources: [
      { month: new Date(2020, 7, 1), source: "Github", count: 28 },
      { month: new Date(2020, 7, 1), source: "Google Drive", count: 116 },
      { month: new Date(2020, 7, 1), source: "iCalendar", count: 2 },
    ],
    total: 146,
  },
  {
    month: new Date(2020, 8, 1),
    sources: [
      { month: new Date(2020, 8, 1), source: "Github", count: 28 },
      { month: new Date(2020, 8, 1), source: "Google Drive", count: 26 },
    ],
    total: 54,
  },
  {
    month: new Date(2020, 9, 1),
    sources: [
      { month: new Date(2020, 9, 1), source: "Google Drive", count: 9 },
      { month: new Date(2020, 9, 1), source: "Github", count: 6 },
    ],
    total: 15,
  },
  {
    month: new Date(2020, 10, 1),
    sources: [
      { month: new Date(2020, 10, 1), source: "Google Drive", count: 76 },
      { month: new Date(2020, 10, 1), source: "Github", count: 14 },
    ],
    total: 90,
  },
  {
    month: new Date(2020, 11, 1),
    sources: [
      { month: new Date(2020, 11, 1), source: "Github", count: 127 },
      { month: new Date(2020, 11, 1), source: "Google Drive", count: 23 },
    ],
    total: 150,
  },
  {
    month: new Date(2021, 0, 1),
    sources: [
      { month: new Date(2021, 0, 1), source: "Github", count: 103 },
      { month: new Date(2021, 0, 1), source: "Google Drive", count: 6 },
      { month: new Date(2021, 0, 1), source: "iCalendar", count: 2 },
    ],
    total: 111,
  },
  {
    month: new Date(2021, 1, 1),
    sources: [
      { month: new Date(2021, 1, 1), source: "Figma", count: 10 },
      { month: new Date(2021, 1, 1), source: "Github", count: 10 },
      { month: new Date(2021, 1, 1), source: "Google Drive", count: 2 },
    ],
    total: 22,
  },
  {
    month: new Date(2021, 2, 1),
    sources: [
      { month: new Date(2021, 2, 1), source: "Github", count: 32 },
      { month: new Date(2021, 2, 1), source: "Figma", count: 35 },
      { month: new Date(2021, 2, 1), source: "Google Drive", count: 41 },
      { month: new Date(2021, 2, 1), source: "iCalendar", count: 2 },
    ],
    total: 110,
  },
  {
    month: new Date(2021, 3, 1),
    sources: [
      { month: new Date(2021, 3, 1), source: "Figma", count: 61 },
      { month: new Date(2021, 3, 1), source: "Google Drive", count: 4 },
      { month: new Date(2021, 3, 1), source: "Github", count: 23 },
      { month: new Date(2021, 3, 1), source: "iCalendar", count: 2 },
    ],
    total: 90,
  },
  {
    month: new Date(2021, 4, 1),
    sources: [
      { month: new Date(2021, 4, 1), source: "Github", count: 21 },
      { month: new Date(2021, 4, 1), source: "iCalendar", count: 4 },
      { month: new Date(2021, 4, 1), source: "Figma", count: 44 },
    ],
    total: 69,
  },
  {
    month: new Date(2021, 5, 1),
    sources: [
      { month: new Date(2021, 5, 1), source: "iCalendar", count: 4 },
      { month: new Date(2021, 5, 1), source: "Figma", count: 69 },
      { month: new Date(2021, 5, 1), source: "Github", count: 183 },
      { month: new Date(2021, 5, 1), source: "Google Drive", count: 118 },
    ],
    total: 374,
  },
  {
    month: new Date(2021, 6, 1),
    sources: [
      { month: new Date(2021, 6, 1), source: "Github", count: 141 },
      { month: new Date(2021, 6, 1), source: "Figma", count: 97 },
      { month: new Date(2021, 6, 1), source: "Google Drive", count: 5 },
    ],
    total: 243,
  },
  {
    month: new Date(2021, 7, 1),
    sources: [
      { month: new Date(2021, 7, 1), source: "Github", count: 54 },
      { month: new Date(2021, 7, 1), source: "iCalendar", count: 4 },
      { month: new Date(2021, 7, 1), source: "Google Drive", count: 20 },
      { month: new Date(2021, 7, 1), source: "Figma", count: 10 },
    ],
    total: 88,
  },
  {
    month: new Date(2021, 8, 1),
    sources: [
      { month: new Date(2021, 8, 1), source: "iCalendar", count: 8 },
      { month: new Date(2021, 8, 1), source: "Figma", count: 16 },
      { month: new Date(2021, 8, 1), source: "Github", count: 10 },
      { month: new Date(2021, 8, 1), source: "Google Drive", count: 2 },
    ],
    total: 36,
  },
  {
    month: new Date(2021, 9, 1),
    sources: [
      { month: new Date(2021, 9, 1), source: "Github", count: 44 },
      { month: new Date(2021, 9, 1), source: "iCalendar", count: 6 },
      { month: new Date(2021, 9, 1), source: "Figma", count: 24 },
    ],
    total: 74,
  },
  {
    month: new Date(2021, 10, 1),
    sources: [
      { month: new Date(2021, 10, 1), source: "Github", count: 36 },
      { month: new Date(2021, 10, 1), source: "Figma", count: 12 },
      { month: new Date(2021, 10, 1), source: "iCalendar", count: 6 },
      { month: new Date(2021, 10, 1), source: "Google Drive", count: 130 },
    ],
    total: 184,
  },
  {
    month: new Date(2021, 11, 1),
    sources: [
      { month: new Date(2021, 11, 1), source: "Github", count: 24 },
      { month: new Date(2021, 11, 1), source: "Figma", count: 6 },
      { month: new Date(2021, 11, 1), source: "iCalendar", count: 2 },
      { month: new Date(2021, 11, 1), source: "Google Drive", count: 2 },
    ],
    total: 34,
  },
  {
    month: new Date(2022, 0, 1),
    sources: [
      { month: new Date(2022, 0, 1), source: "Google Drive", count: 12 },
      { month: new Date(2022, 0, 1), source: "Figma", count: 21 },
      { month: new Date(2022, 0, 1), source: "Github", count: 8 },
      { month: new Date(2022, 0, 1), source: "iCalendar", count: 2 },
    ],
    total: 43,
  },
  {
    month: new Date(2022, 1, 1),
    sources: [
      { month: new Date(2022, 1, 1), source: "Github", count: 44 },
      { month: new Date(2022, 1, 1), source: "Figma", count: 26 },
      { month: new Date(2022, 1, 1), source: "iCalendar", count: 4 },
      { month: new Date(2022, 1, 1), source: "Google Drive", count: 2 },
    ],
    total: 76,
  },
  {
    month: new Date(2022, 2, 1),
    sources: [
      { month: new Date(2022, 2, 1), source: "Github", count: 46 },
      { month: new Date(2022, 2, 1), source: "Google Drive", count: 10 },
      { month: new Date(2022, 2, 1), source: "Figma", count: 12 },
      { month: new Date(2022, 2, 1), source: "iCalendar", count: 6 },
    ],
    total: 74,
  },
  {
    month: new Date(2022, 3, 1),
    sources: [
      { month: new Date(2022, 3, 1), source: "Github", count: 38 },
      { month: new Date(2022, 3, 1), source: "Figma", count: 31 },
      { month: new Date(2022, 3, 1), source: "iCalendar", count: 4 },
    ],
    total: 73,
  },
  {
    month: new Date(2022, 4, 1),
    sources: [
      { month: new Date(2022, 4, 1), source: "iCalendar", count: 6 },
      { month: new Date(2022, 4, 1), source: "Github", count: 14 },
      { month: new Date(2022, 4, 1), source: "Google Drive", count: 22 },
      { month: new Date(2022, 4, 1), source: "Figma", count: 4 },
    ],
    total: 46,
  },
  {
    month: new Date(2022, 5, 1),
    sources: [
      { month: new Date(2022, 5, 1), source: "Google Drive", count: 56 },
      { month: new Date(2022, 5, 1), source: "Figma", count: 45 },
      { month: new Date(2022, 5, 1), source: "Github", count: 14 },
    ],
    total: 115,
  },
  {
    month: new Date(2022, 6, 1),
    sources: [
      { month: new Date(2022, 6, 1), source: "Figma", count: 60 },
      { month: new Date(2022, 6, 1), source: "Github", count: 62 },
      { month: new Date(2022, 6, 1), source: "Google Drive", count: 135 },
      { month: new Date(2022, 6, 1), source: "iCalendar", count: 1 },
    ],
    total: 258,
  },
  {
    month: new Date(2022, 7, 1),
    sources: [
      { month: new Date(2022, 7, 1), source: "Figma", count: 32 },
      { month: new Date(2022, 7, 1), source: "Github", count: 16 },
      { month: new Date(2022, 7, 1), source: "Google Drive", count: 26 },
    ],
    total: 74,
  },
  {
    month: new Date(2022, 8, 1),
    sources: [
      { month: new Date(2022, 8, 1), source: "Figma", count: 18 },
      { month: new Date(2022, 8, 1), source: "Github", count: 16 },
      { month: new Date(2022, 8, 1), source: "iCalendar", count: 1 },
    ],
    total: 35,
  },
  {
    month: new Date(2022, 9, 1),
    sources: [
      { month: new Date(2022, 9, 1), source: "Figma", count: 26 },
      { month: new Date(2022, 9, 1), source: "Github", count: 76 },
    ],
    total: 102,
  },
  {
    month: new Date(2022, 10, 1),
    sources: [
      { month: new Date(2022, 10, 1), source: "Github", count: 45 },
      { month: new Date(2022, 10, 1), source: "iCalendar", count: 4 },
      { month: new Date(2022, 10, 1), source: "Figma", count: 36 },
    ],
    total: 85,
  },
  {
    month: new Date(2022, 11, 1),
    sources: [
      { month: new Date(2022, 11, 1), source: "iCalendar", count: 2 },
      { month: new Date(2022, 11, 1), source: "Figma", count: 14 },
      { month: new Date(2022, 11, 1), source: "Github", count: 24 },
    ],
    total: 40,
  },
  {
    month: new Date(2023, 0, 1),
    sources: [
      { month: new Date(2023, 0, 1), source: "Figma", count: 77 },
      { month: new Date(2023, 0, 1), source: "Github", count: 192 },
      { month: new Date(2023, 0, 1), source: "Google Drive", count: 12 },
      { month: new Date(2023, 0, 1), source: "iCalendar", count: 4 },
    ],
    total: 285,
  },
  {
    month: new Date(2023, 1, 1),
    sources: [
      { month: new Date(2023, 1, 1), source: "Figma", count: 75 },
      { month: new Date(2023, 1, 1), source: "Github", count: 117 },
      { month: new Date(2023, 1, 1), source: "Google Drive", count: 8 },
      { month: new Date(2023, 1, 1), source: "iCalendar", count: 2 },
    ],
    total: 202,
  },
  {
    month: new Date(2023, 2, 1),
    sources: [
      { month: new Date(2023, 2, 1), source: "Github", count: 147 },
      { month: new Date(2023, 2, 1), source: "Figma", count: 99 },
      { month: new Date(2023, 2, 1), source: "iCalendar", count: 13 },
      { month: new Date(2023, 2, 1), source: "Google Drive", count: 20 },
    ],
    total: 279,
  },
  {
    month: new Date(2023, 3, 1),
    sources: [
      { month: new Date(2023, 3, 1), source: "Github", count: 36 },
      { month: new Date(2023, 3, 1), source: "Figma", count: 92 },
      { month: new Date(2023, 3, 1), source: "Google Drive", count: 18 },
      { month: new Date(2023, 3, 1), source: "iCalendar", count: 6 },
    ],
    total: 152,
  },
  {
    month: new Date(2023, 4, 1),
    sources: [
      { month: new Date(2023, 4, 1), source: "Github", count: 69 },
      { month: new Date(2023, 4, 1), source: "Figma", count: 30 },
      { month: new Date(2023, 4, 1), source: "Google Drive", count: 49 },
      { month: new Date(2023, 4, 1), source: "iCalendar", count: 4 },
    ],
    total: 152,
  },
  {
    month: new Date(2023, 5, 1),
    sources: [
      { month: new Date(2023, 5, 1), source: "Figma", count: 81 },
      { month: new Date(2023, 5, 1), source: "Github", count: 66 },
      { month: new Date(2023, 5, 1), source: "iCalendar", count: 16 },
      { month: new Date(2023, 5, 1), source: "Google Drive", count: 24 },
    ],
    total: 187,
  },
  {
    month: new Date(2023, 6, 1),
    sources: [
      { month: new Date(2023, 6, 1), source: "Google Drive", count: 27 },
      { month: new Date(2023, 6, 1), source: "Github", count: 45 },
      { month: new Date(2023, 6, 1), source: "iCalendar", count: 4 },
      { month: new Date(2023, 6, 1), source: "Zotero", count: 10 },
      { month: new Date(2023, 6, 1), source: "Figma", count: 6 },
    ],
    total: 92,
  },
  {
    month: new Date(2023, 7, 1),
    sources: [
      { month: new Date(2023, 7, 1), source: "Github", count: 112 },
      { month: new Date(2023, 7, 1), source: "iCalendar", count: 8 },
      { month: new Date(2023, 7, 1), source: "Google Drive", count: 71 },
      { month: new Date(2023, 7, 1), source: "Figma", count: 20 },
    ],
    total: 211,
  },
  {
    month: new Date(2023, 8, 1),
    sources: [
      { month: new Date(2023, 8, 1), source: "Github", count: 32 },
      { month: new Date(2023, 8, 1), source: "iCalendar", count: 5 },
      { month: new Date(2023, 8, 1), source: "Google Drive", count: 55 },
      { month: new Date(2023, 8, 1), source: "Figma", count: 12 },
    ],
    total: 104,
  },
  {
    month: new Date(2023, 9, 1),
    sources: [
      { month: new Date(2023, 9, 1), source: "Google Drive", count: 37 },
      { month: new Date(2023, 9, 1), source: "iCalendar", count: 9 },
      { month: new Date(2023, 9, 1), source: "Figma", count: 79 },
      { month: new Date(2023, 9, 1), source: "Github", count: 101 },
    ],
    total: 226,
  },
  {
    month: new Date(2023, 10, 1),
    sources: [
      { month: new Date(2023, 10, 1), source: "Github", count: 60 },
      { month: new Date(2023, 10, 1), source: "Google Drive", count: 16 },
      { month: new Date(2023, 10, 1), source: "Figma", count: 12 },
      { month: new Date(2023, 10, 1), source: "iCalendar", count: 2 },
    ],
    total: 90,
  },
  {
    month: new Date(2023, 11, 1),
    sources: [
      { month: new Date(2023, 11, 1), source: "Google Drive", count: 9 },
      { month: new Date(2023, 11, 1), source: "iCalendar", count: 2 },
      { month: new Date(2023, 11, 1), source: "Figma", count: 24 },
      { month: new Date(2023, 11, 1), source: "Github", count: 24 },
    ],
    total: 59,
  },
  {
    month: new Date(2024, 0, 1),
    sources: [
      { month: new Date(2024, 0, 1), source: "Github", count: 26 },
      { month: new Date(2024, 0, 1), source: "Google Drive", count: 21 },
      { month: new Date(2024, 0, 1), source: "Figma", count: 45 },
      { month: new Date(2024, 0, 1), source: "iCalendar", count: 4 },
    ],
    total: 96,
  },
  {
    month: new Date(2024, 1, 1),
    sources: [
      { month: new Date(2024, 1, 1), source: "Figma", count: 44 },
      { month: new Date(2024, 1, 1), source: "iCalendar", count: 4 },
      { month: new Date(2024, 1, 1), source: "Github", count: 56 },
      { month: new Date(2024, 1, 1), source: "Google Drive", count: 49 },
    ],
    total: 153,
  },
  {
    month: new Date(2024, 2, 1),
    sources: [
      { month: new Date(2024, 2, 1), source: "Github", count: 163 },
      { month: new Date(2024, 2, 1), source: "Figma", count: 135 },
      { month: new Date(2024, 2, 1), source: "iCalendar", count: 3 },
      { month: new Date(2024, 2, 1), source: "Google Drive", count: 44 },
    ],
    total: 345,
  },
  {
    month: new Date(2024, 3, 1),
    sources: [
      { month: new Date(2024, 3, 1), source: "Google Drive", count: 231 },
      { month: new Date(2024, 3, 1), source: "Figma", count: 87 },
      { month: new Date(2024, 3, 1), source: "Github", count: 254 },
      { month: new Date(2024, 3, 1), source: "iCalendar", count: 8 },
    ],
    total: 580,
  },
  {
    month: new Date(2024, 4, 1),
    sources: [
      { month: new Date(2024, 4, 1), source: "Github", count: 216 },
      { month: new Date(2024, 4, 1), source: "Google Drive", count: 21 },
      { month: new Date(2024, 4, 1), source: "iCalendar", count: 4 },
      { month: new Date(2024, 4, 1), source: "Figma", count: 39 },
    ],
    total: 280,
  },
  {
    month: new Date(2024, 5, 1),
    sources: [
      { month: new Date(2024, 5, 1), source: "iCalendar", count: 11 },
      { month: new Date(2024, 5, 1), source: "Figma", count: 8 },
      { month: new Date(2024, 5, 1), source: "Google Drive", count: 4 },
      { month: new Date(2024, 5, 1), source: "Github", count: 3 },
    ],
    total: 26,
  },
  {
    month: new Date(2024, 6, 1),
    sources: [
      { month: new Date(2024, 6, 1), source: "iCalendar", count: 10 },
      { month: new Date(2024, 6, 1), source: "Github", count: 20 },
      { month: new Date(2024, 6, 1), source: "Google Drive", count: 9 },
    ],
    total: 39,
  },
  {
    month: new Date(2024, 7, 1),
    sources: [
      { month: new Date(2024, 7, 1), source: "Github", count: 17 },
      { month: new Date(2024, 7, 1), source: "Google Drive", count: 2 },
      { month: new Date(2024, 7, 1), source: "iCalendar", count: 1 },
      { month: new Date(2024, 7, 1), source: "Figma", count: 6 },
    ],
    total: 26,
  },
  {
    month: new Date(2024, 8, 1),
    sources: [
      { month: new Date(2024, 8, 1), source: "Figma", count: 5 },
      { month: new Date(2024, 8, 1), source: "iCalendar", count: 4 },
      { month: new Date(2024, 8, 1), source: "Google Drive", count: 5 },
    ],
    total: 14,
  },
  {
    month: new Date(2024, 9, 1),
    sources: [
      { month: new Date(2024, 9, 1), source: "Google Drive", count: 14 },
      { month: new Date(2024, 9, 1), source: "Figma", count: 1 },
    ],
    total: 15,
  },
  {
    month: new Date(2024, 10, 1),
    sources: [
      { month: new Date(2024, 10, 1), source: "Google Drive", count: 6 },
      { month: new Date(2024, 10, 1), source: "Github", count: 9 },
      { month: new Date(2024, 10, 1), source: "iCalendar", count: 2 },
      { month: new Date(2024, 10, 1), source: "Figma", count: 2 },
    ],
    total: 19,
  },
  {
    month: new Date(2024, 11, 1),
    sources: [
      { month: new Date(2024, 11, 1), source: "Google Drive", count: 6 },
      { month: new Date(2024, 11, 1), source: "Figma", count: 4 },
      { month: new Date(2024, 11, 1), source: "iCalendar", count: 1 },
    ],
    total: 11,
  },
  {
    month: new Date(2025, 0, 1),
    sources: [
      { month: new Date(2025, 0, 1), source: "Google Drive", count: 2 },
      { month: new Date(2025, 0, 1), source: "Figma", count: 1 },
    ],
    total: 3,
  },
  {
    month: new Date(2025, 1, 1),
    sources: [
      { month: new Date(2025, 1, 1), source: "iCalendar", count: 2 },
      { month: new Date(2025, 1, 1), source: "Google Drive", count: 2 },
    ],
    total: 4,
  },
  {
    month: new Date(2025, 2, 1),
    sources: [
      { month: new Date(2025, 2, 1), source: "iCalendar", count: 2 },
      { month: new Date(2025, 2, 1), source: "Google Drive", count: 5 },
      { month: new Date(2025, 2, 1), source: "Figma", count: 13 },
      { month: new Date(2025, 2, 1), source: "Github", count: 4 },
    ],
    total: 24,
  },
  {
    month: new Date(2025, 3, 1),
    sources: [
      { month: new Date(2025, 3, 1), source: "Google Drive", count: 6 },
      { month: new Date(2025, 3, 1), source: "Figma", count: 3 },
      { month: new Date(2025, 3, 1), source: "iCalendar", count: 1 },
    ],
    total: 10,
  },
  {
    month: new Date(2025, 4, 1),
    sources: [
      { month: new Date(2025, 4, 1), source: "iCalendar", count: 4 },
      { month: new Date(2025, 4, 1), source: "Google Drive", count: 91 },
      { month: new Date(2025, 4, 1), source: "Figma", count: 7 },
      { month: new Date(2025, 4, 1), source: "Github", count: 20 },
    ],
    total: 122,
  },
  {
    month: new Date(2025, 5, 1),
    sources: [
      { month: new Date(2025, 5, 1), source: "iCalendar", count: 2 },
      { month: new Date(2025, 5, 1), source: "Figma", count: 37 },
      { month: new Date(2025, 5, 1), source: "Google Drive", count: 7 },
      { month: new Date(2025, 5, 1), source: "Github", count: 48 },
    ],
    total: 94,
  },
  {
    month: new Date(2025, 6, 1),
    sources: [
      { month: new Date(2025, 6, 1), source: "Figma", count: 11 },
      { month: new Date(2025, 6, 1), source: "Github", count: 15 },
      { month: new Date(2025, 6, 1), source: "Google Drive", count: 21 },
      { month: new Date(2025, 6, 1), source: "iCalendar", count: 1 },
    ],
    total: 48,
  },
  {
    month: new Date(2025, 7, 1),
    sources: [
      { month: new Date(2025, 7, 1), source: "iCalendar", count: 4 },
      { month: new Date(2025, 7, 1), source: "Figma", count: 14 },
      { month: new Date(2025, 7, 1), source: "Google Drive", count: 39 },
      { month: new Date(2025, 7, 1), source: "Github", count: 15 },
    ],
    total: 72,
  },
  {
    month: new Date(2025, 8, 1),
    sources: [
      { month: new Date(2025, 8, 1), source: "Google Drive", count: 44 },
      { month: new Date(2025, 8, 1), source: "iCalendar", count: 3 },
      { month: new Date(2025, 8, 1), source: "Github", count: 17 },
      { month: new Date(2025, 8, 1), source: "Figma", count: 6 },
    ],
    total: 70,
  },
  {
    month: new Date(2025, 9, 1),
    sources: [
      { month: new Date(2025, 9, 1), source: "Github", count: 53 },
      { month: new Date(2025, 9, 1), source: "Google Drive", count: 26 },
      { month: new Date(2025, 9, 1), source: "Figma", count: 13 },
      { month: new Date(2025, 9, 1), source: "iCalendar", count: 6 },
    ],
    total: 98,
  },
  {
    month: new Date(2025, 10, 1),
    sources: [
      { month: new Date(2025, 10, 1), source: "Google Drive", count: 27 },
      { month: new Date(2025, 10, 1), source: "Github", count: 32 },
      { month: new Date(2025, 10, 1), source: "Figma", count: 6 },
      { month: new Date(2025, 10, 1), source: "iCalendar", count: 1 },
    ],
    total: 66,
  },
  {
    month: new Date(2025, 11, 1),
    sources: [
      { month: new Date(2025, 11, 1), source: "Github", count: 17 },
      { month: new Date(2025, 11, 1), source: "iCalendar", count: 4 },
      { month: new Date(2025, 11, 1), source: "Google Drive", count: 21 },
      { month: new Date(2025, 11, 1), source: "Figma", count: 33 },
    ],
    total: 75,
  },
  {
    month: new Date(2026, 0, 1),
    sources: [
      { month: new Date(2026, 0, 1), source: "iCalendar", count: 2 },
      { month: new Date(2026, 0, 1), source: "Figma", count: 13 },
      { month: new Date(2026, 0, 1), source: "Github", count: 10 },
      { month: new Date(2026, 0, 1), source: "Google Drive", count: 7 },
    ],
    total: 32,
  },
  {
    month: new Date(2026, 1, 1),
    sources: [
      { month: new Date(2026, 1, 1), source: "iCalendar", count: 3 },
      { month: new Date(2026, 1, 1), source: "Figma", count: 1 },
      { month: new Date(2026, 1, 1), source: "Github", count: 1 },
    ],
    total: 5,
  },
  {
    month: new Date(2026, 2, 1),
    sources: [
      { month: new Date(2026, 2, 1), source: "Github", count: 8 },
      { month: new Date(2026, 2, 1), source: "iCalendar", count: 1 },
    ],
    total: 9,
  },
  {
    month: new Date(2026, 3, 1),
    sources: [{ month: new Date(2026, 3, 1), source: "Github", count: 11 }],
    total: 11,
  },
];
