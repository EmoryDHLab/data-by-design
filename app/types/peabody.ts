export type PeabodyEvent = {
  year: number,
  event: string,
  squares: number[],
  actors: string[]
}

export type QuizStep = {
  solvedEvents: number[],
  currentEvent: PeabodyEvent,
  instructions: string
}