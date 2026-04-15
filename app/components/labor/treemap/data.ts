import * as d3 from "d3";
import type { DSVRowArray } from "d3";

export type TContribution = {
  source: string;
  user: string;
  timestamp: string;
  dateString: string;
  information: string;
  monday: Date;
  uuid: string;
};

export const YEARS = [
  2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025
];

export const csvData = async () => {
  const data = await d3.csv(
    "/data/labor_contributions.csv"
  ) satisfies DSVRowArray<keyof TContribution>;
  return data.map((row) => ({
    ...row,
    dateString: new Date(row.timestamp).toDateString() || "",
    monday: d3.timeMonday(new Date(row.timestamp)),
  }));
};

export const yearScale = (visHeight: number) => {
  return d3
    .scaleTime()
    .domain([new Date(2026, 4, 1), new Date(2012, 7, 1)])
    .range([0, visHeight + 50]);
};

export const rectColor = (source: string | undefined) => {
  if (!source) return;
  switch (source) {
    case "Github":
      return "fill-changePrimary";
    case "Figma":
      return "fill-imagePrimary";
    case "Zotero":
      return "fill-peoplePrimary";
    case "iCalendar":
      return "fill-knowledgePrimary";
    case "Google Drive":
      return "fill-dataPrimary";
    default:
      return "black";
  }
};

export const rectHoverColor = (source: string | undefined) => {
  if (!source) return;
  switch (source) {
    case "Github":
      return "hover:fill-changeSecondary";
    case "Figma":
      return "hover:fill-imageSecondary";
    case "Zotero":
      return "hover:fill-peopleSecondary";
    case "iCalendar":
      return "hover:fill-knowledgeSecondary";
    case "Google Drive":
      return "hover:fill-dataSecondary";
    default:
      return "";
  }
};


// let rows = []
// for (const month of monthlyData) {
//   let row = month.sources.sort(
//     (a, b) => a.source > b.source ? 1 : b.source > a.source ? -1 : 0
//   ).map((m) => { return {[m.source]: m.count}})
//   row.push(`${month.month.getFullYear()}-${month.month.getMonth() + 1}-${month.month.getDate()}`)
//   rows.push(row)
// }