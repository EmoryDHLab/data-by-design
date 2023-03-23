import QuizYearSquare from "./QuizYearSquare"
import { numberRange } from "~/utils";

export default function QuizSquare() {
  return (
    <>
      {[...numberRange( 1601,  1700)].map((year, index) => {
        return (
            <QuizYearSquare index={index} year={year} key={index} />
        );
      })}
    </>
  )
}