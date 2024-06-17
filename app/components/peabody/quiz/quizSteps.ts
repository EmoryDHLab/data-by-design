import eventData from "~/data/peabody/eventData.json";

const quizEvents = eventData.events[1644];

export const quizSteps = [
  {
    //0
    solvedEvents: [],
    stepEvent: { event: "" },
    notes: "",
    instructions: "",
  },
  {
    //1
    solvedEvents: [],
    stepEvent: quizEvents[0],
    notes: "",
    instructions: "SELECT THE TWO COUNTRIES INVOLVED.????",
  },
  {
    // 2
    solvedEvents: [],
    stepEvent: quizEvents[0],
    notes: "",
    instructions: "SELECT THE YEAR 1644",
  },
  {
    //3
    solvedEvents: [],
    stepEvent: quizEvents[0],
    notes: "",
    instructions: "CATEGORIZE THE EVENT",
  },
  {
    // 4
    solvedEvents: [0],
    stepEvent: quizEvents[1],
    notes: "Peabody identified other events that took place in the year.",
    instructions: "CATEGORIZE THE EVENT",
  },
  {
    // 5
    solvedEvents: [0, 1],
    stepEvent: quizEvents[2],
    notes:
      "The third event that Peabody identified taking place later that year is",
    instructions: "CATEGORIZE THE EVENT",
  },
  {
    // 6
    solvedEvents: [0, 1, 2],
    stepEvent: quizEvents[3],
    notes: "",
    instructions: "CATEGORIZE THE EVENT",
  },
  {
    // 7
    solvedEvents: [0, 1, 2, 5],
    stepEvent: quizEvents[3],
    notes: "",
    instructions: "",
  },
  {
    // 8
    solvedEvents: [0, 1, 2, 5],
    stepEvent: quizEvents[3],
    notes: "",
    instructions: "",
  },
  {
    // 9
    solvedEvents: [0, 1, 2, 5],
    stepEvent: quizEvents[3],
    notes: "",
    instructions: "",
  },
];
