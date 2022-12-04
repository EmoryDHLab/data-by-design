import ukCovidData from "./uk_covid.json";

const perCapitaCovidData = ukCovidData.map((datum, index) => {
  return {
    ukDeaths: ((1000000 * datum.cumDeaths28DaysByDeathDate) / 66650000).toFixed(2),
    usDeaths: ((1000000 * datum.usDeath) / 328200000).toFixed(2),
    position: ukCovidData.length - index,
    date: datum.date
  }
});

export default perCapitaCovidData;