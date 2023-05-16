import { createContext } from "react";
import type { PeabodySquare, QuizStepCount, QuizStep, QuizFeedback } from "~/types/peabody";
import type { Dispatch, SetStateAction } from "react";

interface IQuizContext {
  allowOption(index: number): boolean;
  currentStep: QuizStep | undefined;
  currentStepCount: QuizStepCount;
  setCurrentStepCount: Dispatch<SetStateAction<QuizStepCount>>;
  focusedCategory: PeabodySquare;
  setFocusedCategory: Dispatch<SetStateAction<PeabodySquare | undefined>>;
  handleCategoryClick(selected: PeabodySquare): undefined;
  selectedCategories: PeabodySquare[];
  selectedYears: number[];
  handleYearClick(year: number): undefined;
  feedback: QuizFeedback;
  setFeedback: Dispatch<SetStateAction<QuizFeedback>>;
};


export const QuizContext = createContext<IQuizContext>({
  allowOption: (index: number) => { return false },
  currentStep: undefined,
  currentStepCount: 0,
  setCurrentStepCount: (_: SetStateAction<QuizStepCount>) => {},
  focusedCategory: 0,
  setFocusedCategory: (_: SetStateAction<QuizStepCount>) => {},
  handleCategoryClick: (selected: number) => {},
  selectedCategories: [],
  selectedYears: [],
  handleYearClick: (year: number) => {},
  feedback: { message: "", correct: true },
});