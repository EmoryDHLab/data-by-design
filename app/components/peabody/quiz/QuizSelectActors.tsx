import { useContext, useEffect, useState } from "react";
import { QuizContext } from "./QuizContext";
import QuizActorButton from "./QuizActorButton";
import { useDeviceContext } from "~/hooks";

const quizActors = ["England", "France", "Americas", "Sweden", "Holland"];
const correctActors = ["England", "Americas"];
const fillColors = {
    England: "rgb(119,43,21)",
    France: "rgb(60,100,100)",
    Americas: "rgb(222,145,49)",
    Holland: "rgb(68,108,73)",
    Sweden: "rgb(217,182,17)",
  };

export default function QuizSelectActors() {
  const { currentStep, currentStepCount, setCurrentStepCount, setFeedback } = useContext(QuizContext);
  const [actors, setActors] = useState(quizActors);
  const [solvedActors, setSolvedActors] = useState<array>([]);
  const [selectedActors, setSelectedActors] = useState<array>([]);
  const [startX, setStartX] = useState<number>(60);
  const [startY, setStartY] = useState<number>(66);
  const { isMobile } = useDeviceContext();

  useEffect(() => {
    setStartX(isMobile ? 0 : 60);
    setStartY(isMobile ? 0 : 66);
    setActors(isMobile ? quizActors.slice(0, -1) : quizActors);
  }, [isMobile]);

  useEffect(() => {
    if (currentStepCount <= 1) {
      setSolvedActors([]);
      setSelectedActors([]);
    } else {
      setSolvedActors(correctActors);
    }
  }, [currentStepCount, setSolvedActors, setSelectedActors]);

  const selectActor = (actor) => {
    if (currentStepCount !== 1) return;

    if (selectedActors.includes(actor) || solvedActors.includes(actor)) return;

    if (currentStep.stepEvent.actors.includes(actor)) {
      if (solvedActors.length < 1) {
        setFeedback({
          message: "Great! Click the second actor that was involved.",
          correct: true
        });
      } else if (solvedActors.length === 1) {
        setCurrentStepCount(currentStepCount => currentStepCount + 1);
        setFeedback({
          message: "Well done. Now, click the year the when Powhatan attacked Virginia.",
          correct: true
        });
      }
      setSolvedActors([...solvedActors, actor]);
    } else {
      setFeedback({
        message: `No, ${actor} was not involved. Click the remaining ${2 - solvedActors.length} involved.`,
        correct: false
      });
      setSelectedActors([...selectedActors, actor]);
    }
  };

  // const buttonBorder = (actor) => {
  //   if (solvedActors.includes(actor)) return 0.5;
  //   if ( active === actor) return 1.0;
  //   return 0;
  // }

  // const buttonOpacity = (actor) => {
  //   if (selectedActors.includes(actor)) return 0.5;
  //   if (solvedActors.includes(actor) || active === actor) return 1.0;
  //   return 0.75;
  // }

  return (
    <g
      className={`transition-all duration-1000`}
    >
      {actors.map((actor, index) => {
        if ((currentStepCount > 1 && correctActors.includes(actor)) || currentStepCount == 1) {
          const x = startX + (index * 28);
          const y = startY;
          return (
            <QuizActorButton
              key={`quiz-${actor}`}
              x={x}
              y={y}
              actor={actor}
              // opacity={buttonOpacity(actor)}
              // border={buttonBorder(actor)}
              selectActor={selectActor}
              fillColor={fillColors[actor]}
              disable={selectedActors.includes(actor)}
              solvedActors={solvedActors}
              selectedActors={selectedActors}
            />
          )
        }
        return <g key={`quiz-${actor}`}></g>
      })}
    </g>
  );
}