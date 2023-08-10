export type PolygonTransform =
  | {
    transform: string
    transformOrigin: string
  }
  | {}

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
  | "full"

export type QuizStepCount =
  | 0
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

export type PeabodyEvent =
  | {
      event: string;
      year: PeabodyCentury | number;
      squares: Array<PeabodySquare> | "full" | undefined;
      actors: Array<string>;
      transform?: Array<number | string>;
    }
  | undefined;

export type ActivePeabodyEvent =
  | {
    event: PeabodyEvent;
    type: number;
    absoluteIndex?: number;
  }
  | undefined;

export type QuizStep = {
  solvedEvents: Array<PeabodySquare>,
  stepEvent: PeabodyEvent,
  instructions: string,
  notes: string
};

export type QuizFeedbackType =
 | {
    message: string,
    correct: boolean,
  }
 | undefined;
