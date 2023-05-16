import { useContext, useEffect, useRef, useState } from "react";
import { QuizContext } from "./QuizContext";

export default function QuizFeedback() {
  const { feedback, setFeedback, currentStepCount } = useContext(QuizContext);
  const [show, setShow] = useState<boolean>(false);
  const timeout = useRef(undefined);

  useEffect(() => {
    if (!feedback.message) return;
    clearTimeout(timeout.current);
    setShow(true);
    timeout.current = setTimeout(() => {
      setShow(false);
      timeout.current = undefined;
    }, 3000);
  }, [feedback, setFeedback, setShow]);

  return (
    <svg
      width={300}
      height={10}
      y={14}
      className={`opacity-${currentStepCount === 0 || currentStepCount === 8 ? "0" : "100"}`}
    >
      <text
        fontSize={6}
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={feedback.correct ? "green" : "red"}
        fontFamily="VTC Du Bois Narrow, serif"
        fontStyle="italic"
        className={`transition-opacity duration-700 tracking-widest opacity-${show ? "100": "0"}`}
      >
        {feedback.message}
      </text>
    </svg>
  )
}