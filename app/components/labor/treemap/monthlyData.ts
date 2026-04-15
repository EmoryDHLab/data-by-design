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
    month: new Date(2025, 7, 1),
    sources: [
      { month: new Date(2025, 7, 1), source: "iCalendar", count: 5 },
      { month: new Date(2025, 7, 1), source: "Google Drive", count: 39 },
      { month: new Date(2025, 7, 1), source: "Figma", count: 14 },
    ],
    total: 58,
  },
  {
    month: new Date(2025, 6, 1),
    sources: [
      { month: new Date(2025, 6, 1), source: "iCalendar", count: 1 },
      { month: new Date(2025, 6, 1), source: "Google Drive", count: 21 },
      { month: new Date(2025, 6, 1), source: "Figma", count: 11 },
    ],
    total: 33,
  },
  {
    month: new Date(2025, 8, 1),
    sources: [
      { month: new Date(2025, 8, 1), source: "iCalendar", count: 3 },
      { month: new Date(2025, 8, 1), source: "Google Drive", count: 44 },
      { month: new Date(2025, 8, 1), source: "Figma", count: 6 },
    ],
    total: 53,
  },
  {
    month: new Date(2025, 11, 1),
    sources: [
      { month: new Date(2025, 11, 1), source: "iCalendar", count: 4 },
      { month: new Date(2025, 11, 1), source: "Google Drive", count: 21 },
      { month: new Date(2025, 11, 1), source: "Figma", count: 33 },
    ],
    total: 58,
  },
  {
    month: new Date(2026, 0, 1),
    sources: [
      { month: new Date(2026, 0, 1), source: "iCalendar", count: 3 },
      { month: new Date(2026, 0, 1), source: "Google Drive", count: 7 },
      { month: new Date(2026, 0, 1), source: "Figma", count: 13 },
    ],
    total: 23,
  },
  {
    month: new Date(2025, 9, 1),
    sources: [
      { month: new Date(2025, 9, 1), source: "iCalendar", count: 6 },
      { month: new Date(2025, 9, 1), source: "Google Drive", count: 26 },
      { month: new Date(2025, 9, 1), source: "Figma", count: 13 },
    ],
    total: 45,
  },
  {
    month: new Date(2026, 1, 1),
    sources: [
      { month: new Date(2026, 1, 1), source: "iCalendar", count: 3 },
      { month: new Date(2026, 1, 1), source: "Figma", count: 1 },
    ],
    total: 4,
  },
  {
    month: new Date(2025, 10, 1),
    sources: [
      { month: new Date(2025, 10, 1), source: "iCalendar", count: 1 },
      { month: new Date(2025, 10, 1), source: "Google Drive", count: 27 },
      { month: new Date(2025, 10, 1), source: "Figma", count: 6 },
    ],
    total: 34,
  },
  {
    month: new Date(2025, 4, 1),
    sources: [
      { month: new Date(2025, 4, 1), source: "iCalendar", count: 4 },
      { month: new Date(2025, 4, 1), source: "Google Drive", count: 91 },
      { month: new Date(2025, 4, 1), source: "Figma", count: 7 },
      { month: new Date(2025, 4, 1), source: "Github", count: 1 },
    ],
    total: 103,
  },
  {
    month: new Date(2025, 5, 1),
    sources: [
      { month: new Date(2025, 5, 1), source: "iCalendar", count: 2 },
      { month: new Date(2025, 5, 1), source: "Google Drive", count: 7 },
      { month: new Date(2025, 5, 1), source: "Figma", count: 37 },
      { month: new Date(2025, 5, 1), source: "Github", count: 3 },
    ],
    total: 49,
  },
  {
    month: new Date(2024, 8, 1),
    sources: [
      { month: new Date(2024, 8, 1), source: "iCalendar", count: 4 },
      { month: new Date(2024, 8, 1), source: "Google Drive", count: 5 },
      { month: new Date(2024, 8, 1), source: "Figma", count: 5 },
    ],
    total: 14,
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
    month: new Date(2024, 10, 1),
    sources: [
      { month: new Date(2024, 10, 1), source: "iCalendar", count: 2 },
      { month: new Date(2024, 10, 1), source: "Google Drive", count: 6 },
      { month: new Date(2024, 10, 1), source: "Figma", count: 2 },
    ],
    total: 10,
  },
  {
    month: new Date(2025, 3, 1),
    sources: [
      { month: new Date(2025, 3, 1), source: "iCalendar", count: 1 },
      { month: new Date(2025, 3, 1), source: "Google Drive", count: 6 },
      { month: new Date(2025, 3, 1), source: "Figma", count: 3 },
    ],
    total: 10,
  },
  {
    month: new Date(2025, 2, 1),
    sources: [
      { month: new Date(2025, 2, 1), source: "iCalendar", count: 2 },
      { month: new Date(2025, 2, 1), source: "Google Drive", count: 5 },
      { month: new Date(2025, 2, 1), source: "Figma", count: 13 },
      { month: new Date(2025, 2, 1), source: "Github", count: 2 },
    ],
    total: 22,
  },
  {
    month: new Date(2024, 11, 1),
    sources: [
      { month: new Date(2024, 11, 1), source: "iCalendar", count: 1 },
      { month: new Date(2024, 11, 1), source: "Google Drive", count: 6 },
      { month: new Date(2024, 11, 1), source: "Figma", count: 4 },
    ],
    total: 11,
  },
  {
    month: new Date(2024, 6, 1),
    sources: [
      { month: new Date(2024, 6, 1), source: "iCalendar", count: 10 },
      { month: new Date(2024, 6, 1), source: "Google Drive", count: 9 },
    ],
    total: 19,
  },
  {
    month: new Date(2024, 5, 1),
    sources: [
      { month: new Date(2024, 5, 1), source: "iCalendar", count: 11 },
      { month: new Date(2024, 5, 1), source: "Google Drive", count: 4 },
      { month: new Date(2024, 5, 1), source: "Figma", count: 8 },
    ],
    total: 23,
  },
  {
    month: new Date(2024, 4, 1),
    sources: [
      { month: new Date(2024, 4, 1), source: "iCalendar", count: 4 },
      { month: new Date(2024, 4, 1), source: "Google Drive", count: 21 },
      { month: new Date(2024, 4, 1), source: "Figma", count: 39 },
      { month: new Date(2024, 4, 1), source: "Github", count: 116 },
    ],
    total: 180,
  },
  {
    month: new Date(2024, 7, 1),
    sources: [
      { month: new Date(2024, 7, 1), source: "iCalendar", count: 1 },
      { month: new Date(2024, 7, 1), source: "Google Drive", count: 2 },
      { month: new Date(2024, 7, 1), source: "Figma", count: 6 },
    ],
    total: 9,
  },
  {
    month: new Date(2024, 3, 1),
    sources: [
      { month: new Date(2024, 3, 1), source: "iCalendar", count: 8 },
      { month: new Date(2024, 3, 1), source: "Google Drive", count: 125 },
      { month: new Date(2024, 3, 1), source: "Figma", count: 59 },
      { month: new Date(2024, 3, 1), source: "Github", count: 115 },
    ],
    total: 307,
  },
  {
    month: new Date(2024, 2, 1),
    sources: [
      { month: new Date(2024, 2, 1), source: "iCalendar", count: 3 },
      { month: new Date(2024, 2, 1), source: "Google Drive", count: 28 },
      { month: new Date(2024, 2, 1), source: "Figma", count: 68 },
      { month: new Date(2024, 2, 1), source: "Github", count: 55 },
    ],
    total: 154,
  },
  {
    month: new Date(2024, 1, 1),
    sources: [
      { month: new Date(2024, 1, 1), source: "iCalendar", count: 4 },
      { month: new Date(2024, 1, 1), source: "Google Drive", count: 30 },
      { month: new Date(2024, 1, 1), source: "Figma", count: 23 },
      { month: new Date(2024, 1, 1), source: "Github", count: 18 },
    ],
    total: 75,
  },
  {
    month: new Date(2023, 9, 1),
    sources: [
      { month: new Date(2023, 9, 1), source: "iCalendar", count: 9 },
      { month: new Date(2023, 9, 1), source: "Google Drive", count: 23 },
      { month: new Date(2023, 9, 1), source: "Figma", count: 54 },
      { month: new Date(2023, 9, 1), source: "Github", count: 33 },
    ],
    total: 119,
  },
  {
    month: new Date(2023, 11, 1),
    sources: [
      { month: new Date(2023, 11, 1), source: "iCalendar", count: 2 },
      { month: new Date(2023, 11, 1), source: "Google Drive", count: 5 },
      { month: new Date(2023, 11, 1), source: "Figma", count: 18 },
      { month: new Date(2023, 11, 1), source: "Github", count: 8 },
    ],
    total: 33,
  },
  {
    month: new Date(2023, 10, 1),
    sources: [
      { month: new Date(2023, 10, 1), source: "iCalendar", count: 2 },
      { month: new Date(2023, 10, 1), source: "Google Drive", count: 16 },
      { month: new Date(2023, 10, 1), source: "Figma", count: 8 },
      { month: new Date(2023, 10, 1), source: "Github", count: 20 },
    ],
    total: 46,
  },
  {
    month: new Date(2024, 0, 1),
    sources: [
      { month: new Date(2024, 0, 1), source: "iCalendar", count: 4 },
      { month: new Date(2024, 0, 1), source: "Google Drive", count: 19 },
      { month: new Date(2024, 0, 1), source: "Figma", count: 23 },
      { month: new Date(2024, 0, 1), source: "Github", count: 8 },
    ],
    total: 54,
  },
  {
    month: new Date(2026, 2, 1),
    sources: [{ month: new Date(2026, 2, 1), source: "iCalendar", count: 1 }],
    total: 1,
  },
  {
    month: new Date(2013, 11, 1),
    sources: [{ month: new Date(2013, 11, 1), source: "Zotero", count: 95 }],
    total: 95,
  },
  {
    month: new Date(2014, 0, 1),
    sources: [{ month: new Date(2014, 0, 1), source: "Zotero", count: 3 }],
    total: 3,
  },
  {
    month: new Date(2014, 4, 1),
    sources: [
      { month: new Date(2014, 4, 1), source: "Zotero", count: 1 },
      { month: new Date(2014, 4, 1), source: "Google Drive", count: 2 },
    ],
    total: 3,
  },
  {
    month: new Date(2014, 11, 1),
    sources: [{ month: new Date(2014, 11, 1), source: "Zotero", count: 2 }],
    total: 2,
  },
  {
    month: new Date(2021, 6, 1),
    sources: [
      { month: new Date(2021, 6, 1), source: "Google Drive", count: 3 },
      { month: new Date(2021, 6, 1), source: "Figma", count: 54 },
      { month: new Date(2021, 6, 1), source: "Github", count: 73 },
    ],
    total: 130,
  },
  {
    month: new Date(2020, 9, 1),
    sources: [
      { month: new Date(2020, 9, 1), source: "Google Drive", count: 5 },
      { month: new Date(2020, 9, 1), source: "Github", count: 3 },
    ],
    total: 8,
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
    month: new Date(2025, 0, 1),
    sources: [
      { month: new Date(2025, 0, 1), source: "Google Drive", count: 2 },
      { month: new Date(2025, 0, 1), source: "Figma", count: 1 },
    ],
    total: 3,
  },
  {
    month: new Date(2023, 8, 1),
    sources: [
      { month: new Date(2023, 8, 1), source: "Google Drive", count: 30 },
      { month: new Date(2023, 8, 1), source: "Figma", count: 9 },
      { month: new Date(2023, 8, 1), source: "Github", count: 16 },
      { month: new Date(2023, 8, 1), source: "iCalendar", count: 2 },
    ],
    total: 57,
  },
  {
    month: new Date(2023, 7, 1),
    sources: [
      { month: new Date(2023, 7, 1), source: "Google Drive", count: 38 },
      { month: new Date(2023, 7, 1), source: "Figma", count: 14 },
      { month: new Date(2023, 7, 1), source: "Github", count: 32 },
      { month: new Date(2023, 7, 1), source: "iCalendar", count: 4 },
    ],
    total: 88,
  },
  {
    month: new Date(2023, 5, 1),
    sources: [
      { month: new Date(2023, 5, 1), source: "Google Drive", count: 15 },
      { month: new Date(2023, 5, 1), source: "Figma", count: 54 },
      { month: new Date(2023, 5, 1), source: "Github", count: 22 },
      { month: new Date(2023, 5, 1), source: "iCalendar", count: 8 },
    ],
    total: 99,
  },
  {
    month: new Date(2023, 2, 1),
    sources: [
      { month: new Date(2023, 2, 1), source: "Google Drive", count: 16 },
      { month: new Date(2023, 2, 1), source: "Figma", count: 50 },
      { month: new Date(2023, 2, 1), source: "Github", count: 49 },
      { month: new Date(2023, 2, 1), source: "iCalendar", count: 7 },
    ],
    total: 122,
  },
  {
    month: new Date(2023, 1, 1),
    sources: [
      { month: new Date(2023, 1, 1), source: "Google Drive", count: 4 },
      { month: new Date(2023, 1, 1), source: "Figma", count: 39 },
      { month: new Date(2023, 1, 1), source: "Github", count: 39 },
      { month: new Date(2023, 1, 1), source: "iCalendar", count: 2 },
    ],
    total: 84,
  },
  {
    month: new Date(2023, 0, 1),
    sources: [
      { month: new Date(2023, 0, 1), source: "Google Drive", count: 6 },
      { month: new Date(2023, 0, 1), source: "Figma", count: 37 },
      { month: new Date(2023, 0, 1), source: "Github", count: 70 },
      { month: new Date(2023, 0, 1), source: "iCalendar", count: 2 },
    ],
    total: 115,
  },
  {
    month: new Date(2022, 6, 1),
    sources: [
      { month: new Date(2022, 6, 1), source: "Google Drive", count: 73 },
      { month: new Date(2022, 6, 1), source: "Figma", count: 31 },
      { month: new Date(2022, 6, 1), source: "Github", count: 31 },
    ],
    total: 135,
  },
  {
    month: new Date(2022, 7, 1),
    sources: [
      { month: new Date(2022, 7, 1), source: "Google Drive", count: 13 },
      { month: new Date(2022, 7, 1), source: "Figma", count: 17 },
      { month: new Date(2022, 7, 1), source: "Github", count: 8 },
    ],
    total: 38,
  },
  {
    month: new Date(2021, 7, 1),
    sources: [
      { month: new Date(2021, 7, 1), source: "Google Drive", count: 10 },
      { month: new Date(2021, 7, 1), source: "Figma", count: 6 },
      { month: new Date(2021, 7, 1), source: "Github", count: 27 },
      { month: new Date(2021, 7, 1), source: "iCalendar", count: 2 },
    ],
    total: 45,
  },
  {
    month: new Date(2022, 5, 1),
    sources: [
      { month: new Date(2022, 5, 1), source: "Google Drive", count: 28 },
      { month: new Date(2022, 5, 1), source: "Figma", count: 23 },
      { month: new Date(2022, 5, 1), source: "Github", count: 7 },
    ],
    total: 58,
  },
  {
    month: new Date(2021, 5, 1),
    sources: [
      { month: new Date(2021, 5, 1), source: "Google Drive", count: 59 },
      { month: new Date(2021, 5, 1), source: "Figma", count: 36 },
      { month: new Date(2021, 5, 1), source: "Github", count: 92 },
      { month: new Date(2021, 5, 1), source: "iCalendar", count: 2 },
    ],
    total: 189,
  },
  {
    month: new Date(2023, 6, 1),
    sources: [
      { month: new Date(2023, 6, 1), source: "Google Drive", count: 15 },
      { month: new Date(2023, 6, 1), source: "Figma", count: 4 },
      { month: new Date(2023, 6, 1), source: "Github", count: 15 },
      { month: new Date(2023, 6, 1), source: "iCalendar", count: 2 },
    ],
    total: 36,
  },
  {
    month: new Date(2023, 4, 1),
    sources: [
      { month: new Date(2023, 4, 1), source: "Google Drive", count: 27 },
      { month: new Date(2023, 4, 1), source: "Figma", count: 20 },
      { month: new Date(2023, 4, 1), source: "Github", count: 22 },
      { month: new Date(2023, 4, 1), source: "iCalendar", count: 2 },
    ],
    total: 71,
  },
  {
    month: new Date(2022, 4, 1),
    sources: [
      { month: new Date(2022, 4, 1), source: "Google Drive", count: 11 },
      { month: new Date(2022, 4, 1), source: "Figma", count: 2 },
      { month: new Date(2022, 4, 1), source: "Github", count: 7 },
      { month: new Date(2022, 4, 1), source: "iCalendar", count: 3 },
    ],
    total: 23,
  },
  {
    month: new Date(2021, 2, 1),
    sources: [
      { month: new Date(2021, 2, 1), source: "Google Drive", count: 21 },
      { month: new Date(2021, 2, 1), source: "Figma", count: 19 },
      { month: new Date(2021, 2, 1), source: "Github", count: 18 },
      { month: new Date(2021, 2, 1), source: "iCalendar", count: 1 },
    ],
    total: 59,
  },
  {
    month: new Date(2023, 3, 1),
    sources: [
      { month: new Date(2023, 3, 1), source: "Google Drive", count: 16 },
      { month: new Date(2023, 3, 1), source: "Figma", count: 60 },
      { month: new Date(2023, 3, 1), source: "Github", count: 12 },
      { month: new Date(2023, 3, 1), source: "iCalendar", count: 3 },
    ],
    total: 91,
  },
  {
    month: new Date(2022, 1, 1),
    sources: [
      { month: new Date(2022, 1, 1), source: "Google Drive", count: 1 },
      { month: new Date(2022, 1, 1), source: "Figma", count: 14 },
      { month: new Date(2022, 1, 1), source: "Github", count: 22 },
      { month: new Date(2022, 1, 1), source: "iCalendar", count: 2 },
    ],
    total: 39,
  },
  {
    month: new Date(2022, 0, 1),
    sources: [
      { month: new Date(2022, 0, 1), source: "Google Drive", count: 6 },
      { month: new Date(2022, 0, 1), source: "Figma", count: 11 },
      { month: new Date(2022, 0, 1), source: "Github", count: 4 },
      { month: new Date(2022, 0, 1), source: "iCalendar", count: 1 },
    ],
    total: 22,
  },
  {
    month: new Date(2020, 7, 1),
    sources: [
      { month: new Date(2020, 7, 1), source: "Google Drive", count: 59 },
      { month: new Date(2020, 7, 1), source: "Github", count: 15 },
      { month: new Date(2020, 7, 1), source: "iCalendar", count: 1 },
    ],
    total: 75,
  },
  {
    month: new Date(2018, 3, 1),
    sources: [
      { month: new Date(2018, 3, 1), source: "Google Drive", count: 3 },
    ],
    total: 3,
  },
  {
    month: new Date(2017, 10, 1),
    sources: [
      { month: new Date(2017, 10, 1), source: "Google Drive", count: 2 },
    ],
    total: 2,
  },
  {
    month: new Date(2020, 6, 1),
    sources: [
      { month: new Date(2020, 6, 1), source: "Google Drive", count: 3 },
      { month: new Date(2020, 6, 1), source: "Github", count: 26 },
    ],
    total: 29,
  },
  {
    month: new Date(2020, 4, 1),
    sources: [
      { month: new Date(2020, 4, 1), source: "Google Drive", count: 8 },
      { month: new Date(2020, 4, 1), source: "Github", count: 45 },
      { month: new Date(2020, 4, 1), source: "iCalendar", count: 1 },
    ],
    total: 54,
  },
  {
    month: new Date(2020, 10, 1),
    sources: [
      { month: new Date(2020, 10, 1), source: "Google Drive", count: 38 },
      { month: new Date(2020, 10, 1), source: "Github", count: 7 },
    ],
    total: 45,
  },
  {
    month: new Date(2020, 8, 1),
    sources: [
      { month: new Date(2020, 8, 1), source: "Google Drive", count: 13 },
      { month: new Date(2020, 8, 1), source: "Github", count: 14 },
    ],
    total: 27,
  },
  {
    month: new Date(2022, 2, 1),
    sources: [
      { month: new Date(2022, 2, 1), source: "Google Drive", count: 5 },
      { month: new Date(2022, 2, 1), source: "Figma", count: 6 },
      { month: new Date(2022, 2, 1), source: "Github", count: 23 },
      { month: new Date(2022, 2, 1), source: "iCalendar", count: 3 },
    ],
    total: 37,
  },
  {
    month: new Date(2021, 0, 1),
    sources: [
      { month: new Date(2021, 0, 1), source: "Google Drive", count: 3 },
      { month: new Date(2021, 0, 1), source: "Github", count: 112 },
      { month: new Date(2021, 0, 1), source: "iCalendar", count: 1 },
    ],
    total: 116,
  },
  {
    month: new Date(2015, 2, 1),
    sources: [
      { month: new Date(2015, 2, 1), source: "Google Drive", count: 1 },
    ],
    total: 1,
  },
  {
    month: new Date(2020, 11, 1),
    sources: [
      { month: new Date(2020, 11, 1), source: "Google Drive", count: 13 },
      { month: new Date(2020, 11, 1), source: "Github", count: 115 },
    ],
    total: 128,
  },
  {
    month: new Date(2021, 10, 1),
    sources: [
      { month: new Date(2021, 10, 1), source: "Google Drive", count: 65 },
      { month: new Date(2021, 10, 1), source: "Figma", count: 7 },
      { month: new Date(2021, 10, 1), source: "Github", count: 18 },
      { month: new Date(2021, 10, 1), source: "iCalendar", count: 3 },
    ],
    total: 93,
  },
  {
    month: new Date(2021, 3, 1),
    sources: [
      { month: new Date(2021, 3, 1), source: "Google Drive", count: 2 },
      { month: new Date(2021, 3, 1), source: "Figma", count: 33 },
      { month: new Date(2021, 3, 1), source: "Github", count: 11 },
      { month: new Date(2021, 3, 1), source: "iCalendar", count: 1 },
    ],
    total: 47,
  },
  {
    month: new Date(2019, 0, 1),
    sources: [
      { month: new Date(2019, 0, 1), source: "Google Drive", count: 49 },
      { month: new Date(2019, 0, 1), source: "Github", count: 3 },
    ],
    total: 52,
  },
  {
    month: new Date(2021, 8, 1),
    sources: [
      { month: new Date(2021, 8, 1), source: "Google Drive", count: 1 },
      { month: new Date(2021, 8, 1), source: "Figma", count: 9 },
      { month: new Date(2021, 8, 1), source: "Github", count: 5 },
      { month: new Date(2021, 8, 1), source: "iCalendar", count: 4 },
    ],
    total: 19,
  },
  {
    month: new Date(2020, 5, 1),
    sources: [
      { month: new Date(2020, 5, 1), source: "Google Drive", count: 1 },
      { month: new Date(2020, 5, 1), source: "Github", count: 18 },
    ],
    total: 19,
  },
  {
    month: new Date(2020, 1, 1),
    sources: [
      { month: new Date(2020, 1, 1), source: "Google Drive", count: 3 },
      { month: new Date(2020, 1, 1), source: "Github", count: 7 },
    ],
    total: 10,
  },
  {
    month: new Date(2019, 5, 1),
    sources: [
      { month: new Date(2019, 5, 1), source: "Google Drive", count: 5 },
      { month: new Date(2019, 5, 1), source: "Github", count: 1 },
    ],
    total: 6,
  },
  {
    month: new Date(2019, 4, 1),
    sources: [
      { month: new Date(2019, 4, 1), source: "Google Drive", count: 4 },
      { month: new Date(2019, 4, 1), source: "Github", count: 6 },
    ],
    total: 10,
  },
  {
    month: new Date(2020, 0, 1),
    sources: [
      { month: new Date(2020, 0, 1), source: "Google Drive", count: 3 },
      { month: new Date(2020, 0, 1), source: "Github", count: 2 },
    ],
    total: 5,
  },
  {
    month: new Date(2019, 3, 1),
    sources: [
      { month: new Date(2019, 3, 1), source: "Google Drive", count: 3 },
      { month: new Date(2019, 3, 1), source: "Github", count: 2 },
    ],
    total: 5,
  },
  {
    month: new Date(2019, 2, 1),
    sources: [
      { month: new Date(2019, 2, 1), source: "Google Drive", count: 10 },
      { month: new Date(2019, 2, 1), source: "Github", count: 6 },
    ],
    total: 16,
  },
  {
    month: new Date(2019, 1, 1),
    sources: [
      { month: new Date(2019, 1, 1), source: "Google Drive", count: 6 },
      { month: new Date(2019, 1, 1), source: "Github", count: 20 },
    ],
    total: 26,
  },
  {
    month: new Date(2018, 6, 1),
    sources: [
      { month: new Date(2018, 6, 1), source: "Google Drive", count: 4 },
      { month: new Date(2018, 6, 1), source: "Github", count: 21 },
    ],
    total: 25,
  },
  {
    month: new Date(2018, 5, 1),
    sources: [
      { month: new Date(2018, 5, 1), source: "Google Drive", count: 32 },
      { month: new Date(2018, 5, 1), source: "Github", count: 5 },
    ],
    total: 37,
  },
  {
    month: new Date(2018, 4, 1),
    sources: [
      { month: new Date(2018, 4, 1), source: "Google Drive", count: 15 },
      { month: new Date(2018, 4, 1), source: "Github", count: 2 },
    ],
    total: 17,
  },
  {
    month: new Date(2019, 7, 1),
    sources: [
      { month: new Date(2019, 7, 1), source: "Google Drive", count: 3 },
      { month: new Date(2019, 7, 1), source: "Github", count: 2 },
    ],
    total: 5,
  },
  {
    month: new Date(2018, 8, 1),
    sources: [
      { month: new Date(2018, 8, 1), source: "Google Drive", count: 3 },
    ],
    total: 3,
  },
  {
    month: new Date(2018, 1, 1),
    sources: [
      { month: new Date(2018, 1, 1), source: "Google Drive", count: 4 },
    ],
    total: 4,
  },
  {
    month: new Date(2018, 2, 1),
    sources: [
      { month: new Date(2018, 2, 1), source: "Google Drive", count: 1 },
    ],
    total: 1,
  },
  {
    month: new Date(2021, 11, 1),
    sources: [
      { month: new Date(2021, 11, 1), source: "Google Drive", count: 1 },
      { month: new Date(2021, 11, 1), source: "Figma", count: 3 },
      { month: new Date(2021, 11, 1), source: "Github", count: 12 },
      { month: new Date(2021, 11, 1), source: "iCalendar", count: 1 },
    ],
    total: 17,
  },
  {
    month: new Date(2021, 1, 1),
    sources: [
      { month: new Date(2021, 1, 1), source: "Google Drive", count: 1 },
      { month: new Date(2021, 1, 1), source: "Figma", count: 5 },
      { month: new Date(2021, 1, 1), source: "Github", count: 10 },
    ],
    total: 16,
  },
  {
    month: new Date(2018, 9, 1),
    sources: [
      { month: new Date(2018, 9, 1), source: "Google Drive", count: 9 },
      { month: new Date(2018, 9, 1), source: "Github", count: 2 },
    ],
    total: 11,
  },
  {
    month: new Date(2018, 10, 1),
    sources: [
      { month: new Date(2018, 10, 1), source: "Google Drive", count: 1 },
      { month: new Date(2018, 10, 1), source: "Github", count: 1 },
    ],
    total: 2,
  },
  {
    month: new Date(2021, 4, 1),
    sources: [
      { month: new Date(2021, 4, 1), source: "Figma", count: 23 },
      { month: new Date(2021, 4, 1), source: "Github", count: 11 },
      { month: new Date(2021, 4, 1), source: "iCalendar", count: 2 },
    ],
    total: 36,
  },
  {
    month: new Date(2021, 9, 1),
    sources: [
      { month: new Date(2021, 9, 1), source: "Figma", count: 13 },
      { month: new Date(2021, 9, 1), source: "Github", count: 22 },
      { month: new Date(2021, 9, 1), source: "iCalendar", count: 3 },
    ],
    total: 38,
  },
  {
    month: new Date(2022, 3, 1),
    sources: [
      { month: new Date(2022, 3, 1), source: "Figma", count: 17 },
      { month: new Date(2022, 3, 1), source: "Github", count: 19 },
      { month: new Date(2022, 3, 1), source: "iCalendar", count: 2 },
    ],
    total: 38,
  },
  {
    month: new Date(2022, 8, 1),
    sources: [
      { month: new Date(2022, 8, 1), source: "Figma", count: 9 },
      { month: new Date(2022, 8, 1), source: "Github", count: 8 },
    ],
    total: 17,
  },
  {
    month: new Date(2022, 9, 1),
    sources: [
      { month: new Date(2022, 9, 1), source: "Figma", count: 13 },
      { month: new Date(2022, 9, 1), source: "Github", count: 27 },
    ],
    total: 40,
  },
  {
    month: new Date(2022, 10, 1),
    sources: [
      { month: new Date(2022, 10, 1), source: "Figma", count: 18 },
      { month: new Date(2022, 10, 1), source: "Github", count: 15 },
      { month: new Date(2022, 10, 1), source: "iCalendar", count: 2 },
    ],
    total: 35,
  },
  {
    month: new Date(2022, 11, 1),
    sources: [
      { month: new Date(2022, 11, 1), source: "Figma", count: 7 },
      { month: new Date(2022, 11, 1), source: "Github", count: 8 },
      { month: new Date(2022, 11, 1), source: "iCalendar", count: 1 },
    ],
    total: 16,
  },
  {
    month: new Date(2020, 3, 1),
    sources: [{ month: new Date(2020, 3, 1), source: "Github", count: 6 }],
    total: 6,
  },
  {
    month: new Date(2020, 2, 1),
    sources: [{ month: new Date(2020, 2, 1), source: "Github", count: 16 }],
    total: 16,
  },
  {
    month: new Date(2019, 11, 1),
    sources: [{ month: new Date(2019, 11, 1), source: "Github", count: 16 }],
    total: 16,
  },
  {
    month: new Date(2019, 10, 1),
    sources: [{ month: new Date(2019, 10, 1), source: "Github", count: 13 }],
    total: 13,
  },
  {
    month: new Date(2019, 9, 1),
    sources: [{ month: new Date(2019, 9, 1), source: "Github", count: 2 }],
    total: 2,
  },
  {
    month: new Date(2019, 8, 1),
    sources: [{ month: new Date(2019, 8, 1), source: "Github", count: 1 }],
    total: 1,
  },
  {
    month: new Date(2019, 6, 1),
    sources: [{ month: new Date(2019, 6, 1), source: "Github", count: 4 }],
    total: 4,
  },
  {
    month: new Date(2018, 7, 1),
    sources: [{ month: new Date(2018, 7, 1), source: "Github", count: 10 }],
    total: 10,
  },
  {
    month: new Date(2017, 3, 1),
    sources: [{ month: new Date(2017, 3, 1), source: "Github", count: 7 }],
    total: 7,
  },
  {
    month: new Date(2017, 2, 1),
    sources: [{ month: new Date(2017, 2, 1), source: "Github", count: 8 }],
    total: 8,
  },
  {
    month: new Date(2017, 1, 1),
    sources: [{ month: new Date(2017, 1, 1), source: "Github", count: 1 }],
    total: 1,
  },
  {
    month: new Date(2017, 0, 1),
    sources: [{ month: new Date(2017, 0, 1), source: "Github", count: 14 }],
    total: 14,
  },
  {
    month: new Date(2016, 11, 1),
    sources: [{ month: new Date(2016, 11, 1), source: "Github", count: 27 }],
    total: 27,
  },
  {
    month: new Date(2016, 10, 1),
    sources: [{ month: new Date(2016, 10, 1), source: "Github", count: 3 }],
    total: 3,
  },
  {
    month: new Date(2016, 9, 1),
    sources: [{ month: new Date(2016, 9, 1), source: "Github", count: 15 }],
    total: 15,
  },
  {
    month: new Date(2016, 8, 1),
    sources: [{ month: new Date(2016, 8, 1), source: "Github", count: 13 }],
    total: 13,
  },
  {
    month: new Date(2016, 7, 1),
    sources: [{ month: new Date(2016, 7, 1), source: "Github", count: 1 }],
    total: 1,
  },
  {
    month: new Date(2016, 5, 1),
    sources: [{ month: new Date(2016, 5, 1), source: "Github", count: 1 }],
    total: 1,
  },
  {
    month: new Date(2016, 4, 1),
    sources: [{ month: new Date(2016, 4, 1), source: "Github", count: 2 }],
    total: 2,
  },
  {
    month: new Date(2016, 3, 1),
    sources: [{ month: new Date(2016, 3, 1), source: "Github", count: 3 }],
    total: 3,
  },
  {
    month: new Date(2016, 2, 1),
    sources: [{ month: new Date(2016, 2, 1), source: "Github", count: 4 }],
    total: 4,
  },
  {
    month: new Date(2015, 7, 1),
    sources: [{ month: new Date(2015, 7, 1), source: "Github", count: 1 }],
    total: 1,
  },
];
