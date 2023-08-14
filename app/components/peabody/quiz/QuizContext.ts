import { createContext } from "react";
import type { PeabodySquare, QuizStepCount, QuizStep, QuizFeedbackType } from "~/types/peabody";
import type { Dispatch, SetStateAction } from "react";


interface IQuizContext {
  allowOption: Function;
  currentStep: QuizStep | undefined;
  currentStepCount: QuizStepCount;
  setCurrentStepCount: Dispatch<SetStateAction<QuizStepCount>>;
  focusedCategory: PeabodySquare | undefined;
  setFocusedCategory: Dispatch<SetStateAction<PeabodySquare | undefined>>;
  handleCategoryClick: Function;
  selectedCategories: Array<PeabodySquare>;
  selectedYears: number[];
  handleYearClick: Function;
  feedback: QuizFeedbackType;
  setFeedback: Dispatch<SetStateAction<QuizFeedbackType>>;
}


export const QuizContext = createContext<IQuizContext>({
  allowOption: (index: number) => { return false },
  currentStep: undefined,
  currentStepCount: 0,
  setCurrentStepCount: (_: SetStateAction<QuizStepCount>) => {},
  focusedCategory: undefined,
  setFocusedCategory: (_: SetStateAction<PeabodySquare | undefined>) => undefined,
  handleCategoryClick: (selected: number) => {},
  selectedCategories: [],
  selectedYears: [],
  handleYearClick: (year: number) => {},
  feedback: { message: "", correct: true },
  setFeedback: (_: SetStateAction<QuizFeedbackType>) => ""
});