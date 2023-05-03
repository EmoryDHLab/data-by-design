import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../PeabodyQuiz";
import eventData from "~/data/peabody/eventData.json";
import QuizActorButton from "./QuizActorButton";

const quizActors = ["England", "Americas"];

export default function QuizSelectActors() {
  const { currentStep, currentStepCount, setCurrentStepCount, setFeedback } = useContext(QuizContext);
  const [solvedActors, setSolvedActors] = useState<array>([]);
  const [selectedActors, setSelectedActors] = useState<array>([]);
  const [active, setActive] = useState<string|undefined>(undefined);

  useEffect(() => {
    if (currentStepCount <= 1) {
      setSolvedActors([]);
      setSelectedActors([]);
    } else {
      setSolvedActors(quizActors);
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

  const buttonBorder = (actor) => {
    if (solvedActors.includes(actor)) return 0.5;
    if ( active === actor) return 1.0;
    return 0;
  }

  const buttonOpacity = (actor) => {
    if (selectedActors.includes(actor)) return 0.5;
    if (solvedActors.includes(actor) || active === actor) return 1.0;
    return 0.75;
  }

  return (
    <g
      className={`transition-all duration-1000`}
    >
      {eventData.actors["1600"].map((actor, index) => {
        if ((currentStepCount > 1 && quizActors.includes(actor)) || currentStepCount == 1) {
          const x = 60 + (index * 28);
          const y = 66
          return (
            <QuizActorButton
              key={`quiz-${actor}`}
              x={x}
              y={y}
              actor={actor}
              opacity={buttonOpacity(actor)}
              border={buttonBorder(actor)}
              selectActor={selectActor}
              setActive={setActive}
              fill={eventData.actorColors[actor]}
              disable={selectedActors.includes(actor)}
              solvedActors={solvedActors}
              selectedActors={selectedActors}
              active={active}
            />
          )
        }
        return <g key={index}></g>
      })}
    </g>
  );
}