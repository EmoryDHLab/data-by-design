import eventData from "~/data/process/eventData.json";

const quizEvents = eventData.events[1644];

export const quizSteps = [
  {
    //0
    solvedEvents: [],
    stepEvent: { event: "" },
  },
  {
    //1
    solvedEvents: [],
    stepEvent: quizEvents[0],
  },
  {
    // 2
    solvedEvents: [],
    stepEvent: quizEvents[0],
  },
  {
    //3
    solvedEvents: [],
    stepEvent: quizEvents[0],
  },
  {
    // 4
    solvedEvents: [0],
    stepEvent: quizEvents[1],
  },
  {
    // 5
    solvedEvents: [0, 1],
    stepEvent: quizEvents[2],
  },
  {
    // 6
    solvedEvents: [0, 1, 2],
    stepEvent: quizEvents[3],
  },
  {
    // 7
    solvedEvents: [0, 1, 2, 5],
    stepEvent: quizEvents[3],
  },
  {
    // 8
    solvedEvents: [0, 1, 2, 5],
    stepEvent: quizEvents[3],
  },
  {
    // 9
    solvedEvents: [0, 1, 2, 5],
    stepEvent: quizEvents[3],
  },
];
