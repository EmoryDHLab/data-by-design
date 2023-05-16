export type PeabodyCentury =
  | 1500
  | 1600
  | 1700
  | 1800;

export type PeabodySquare =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9

export type QuizStepCount =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9

export type PeabodyActor =
  | "England"
  | "France"
  | "Americas"
  | "Holland"
  | "Sweden"
  | "Spain"
  | "Native"
  | "Mexico";

export type PeabodyEvent = {
  year: number,
  event: string,
  squares: PeabodySquare[],
  actors: PeabodyActor[]
};

export type QuizStep = {
  solvedEvents: PeabodySquare[],
  currentEvent: PeabodyEvent,
  instructions: string
};

export type QuizFeedback = {
  message: string,
  correct: boolean,
};
