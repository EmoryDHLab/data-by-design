import * as d3 from "d3";

export type TRow = {
  source: string;
  user: string;
  timestamp: string;
  dateString: string;
  information: string;
};

export const YEARS = [
  2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
];

export const csvData = async () => {
  const data: TRow[] = await d3.csv(
    "/prototypes/data_traces_vis_for_jay/data/labor_data_0412.csv"
  );
  return data.map((row: TRow) => ({
    ...row,
    dateString: new Date(row.timestamp).toDateString() || "",
  }));
};

// export const groupedData = async () => {
//   const data = await csvData();
//   if (!data) return;
//   return {
//     byMonth: d3.rollup(
//       data,
//       (v) => v.length,
//       (d) => d3.timeMonth(d.dateStirng),
//       (d) => d.source
//     ),
//     byWeek: d3.rollup(
//       data,
//       (v) => v.length,
//       (d) => d3.timeMonday.floor(d.dateStirng),
//       (d) => d.source
//     ),
//   };
// };

export const yearScale = (visHeight: number) => {
  return d3
    .scaleTime()
    .domain([new Date(2024, 8, 1), new Date(2013, 8, 1)])
    .range([0, visHeight + 50]);
};

// get monthly data from csv
// result = Map.groupBy(temp1, ({timestamp}) => new Date(timestamp.getFullYear() == 2013))

// export const formatWeeklyData = () {
// for (const month of monthlyData) {
//   wD[`${month.month.toLocaleString()}`] = weeklyData.filter(
//     (w) =>
//       w.week.getFullYear() == month.month.getFullYear() &&
//       w.week.getMonth() == month.month.getMonth()
//   );
// }
// //   console.log("🚀 ~ wd:", wD);

// // }
