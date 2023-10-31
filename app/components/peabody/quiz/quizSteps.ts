import eventData from "~/data/peabody/eventData.json";

const quizEvents = eventData.events[1644];

export const quizSteps = [
    { //0
      solvedEvents: [],
      stepEvent: { event: "" },
      notes: ""
    }, { //1
      solvedEvents: [],
      stepEvent: quizEvents[0],
      notes: ""
    }, { // 2
      solvedEvents: [],
      stepEvent: quizEvents[0],
      notes: ""
    }, { //3
      solvedEvents: [],
      stepEvent: quizEvents[0],
      notes: ""
    }, { // 4
      solvedEvents: [0],
      stepEvent: quizEvents[1],
      notes: "Peabody identified other events that took place in the year."
    }, { // 5
      solvedEvents: [0, 1],
      stepEvent: quizEvents[2],
      notes: "The third event that Peabody identified taking place later that year is"
    }, { // 6
      solvedEvents: [0, 1, 2],
      stepEvent: quizEvents[3],
      notes: ""
    }, { // 7
      solvedEvents: [0, 1, 2, 5],
      stepEvent: quizEvents[3],
      notes: ""
    }, { // 8
      solvedEvents: [0, 1, 2, 5],
      stepEvent: quizEvents[3],
      notes: ""
    }, { // 9
      solvedEvents: [0, 1, 2, 5],
      stepEvent: quizEvents[3],
      notes: ""
    }, { // 10
      solvedEvents: [0, 1, 2, 5],
      stepEvent: quizEvents[3],
      notes: ""
    }, { // 11
      solvedEvents: [0, 1, 2, 5],
      stepEvent: quizEvents[3],
      notes: ""
    }
  ];