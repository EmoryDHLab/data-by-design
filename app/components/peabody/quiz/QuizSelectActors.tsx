import { useContext, useEffect, useState } from "react";
import { QuizContext } from "./QuizContext";
import QuizActorButton from "./QuizActorButton";
import { useDeviceContext } from "~/hooks";
import type { PeabodyActor, QuizStepCount } from "~/types/peabody";

const quizActors = ["England", "France", "Americas", "Sweden", "Holland"];
const correctActors = (["England", "Americas"] as Array<PeabodyActor>);
const fillColors = ({
    England: "rgb(119,43,21)",
    France: "rgb(60,100,100)",
    Americas: "rgb(222,145,49)",
    Holland: "rgb(68,108,73)",
    Sweden: "rgb(217,182,17)",
  } as { [key in PeabodyActor]: string });

export default function QuizSelectActors() {
  const { currentStep, currentStepCount, setCurrentStepCount, setFeedback } = useContext(QuizContext);
  const [actors, setActors] = useState(quizActors);
  const [solvedActors, setSolvedActors] = useState<Array<PeabodyActor>>([]);
  const [selectedActors, setSelectedActors] = useState<Array<PeabodyActor>>([]);
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

  const selectActor = (actor: PeabodyActor) => {
    if (currentStepCount !== 1) return;

    if (selectedActors.includes(actor) || solvedActors.includes(actor)) return;

    if (currentStep?.stepEvent?.actors.includes(actor)) {
      if (solvedActors.length < 1) {
        setFeedback({
          message: "Great! Click the second actor that was involved.",
          correct: true
        });
      } else if (solvedActors.length === 1) {
        setCurrentStepCount(currentStepCount => (currentStepCount + 1 as QuizStepCount));
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

  return (
    <g
      className={`transition-all duration-1000`}
    >
      {actors.map((actor, index) => {
        if ((currentStepCount > 1 && correctActors.includes((actor as PeabodyActor))) || currentStepCount == 1) {
          const x = startX + (index * 28);
          const y = startY;
          return (
            <QuizActorButton
              key={`quiz-${actor}`}
              x={x}
              y={y}
              actor={(actor as PeabodyActor)}
              selectActor={selectActor}
              fillColor={fillColors[(actor as PeabodyActor)]}
              disable={selectedActors.includes((actor as PeabodyActor))}
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