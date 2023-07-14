import { useContext, useEffect, useRef, useState } from "react";
import { QuizContext } from "./QuizContext";
import { useDeviceContext } from "~/hooks";

export default function QuizFeedback() {
  const { feedback, setFeedback, currentStepCount } = useContext(QuizContext);
  const [show, setShow] = useState<boolean>(false);
  const timeout = useRef(undefined);
  const { isMobile } = useDeviceContext();

  useEffect(() => {
    if (!feedback.message) return;
    clearTimeout(timeout.current);
    setShow(true);
    timeout.current = setTimeout(() => {
      setShow(false);
      timeout.current = undefined;
    }, 3000);
  }, [feedback, setFeedback, setShow]);

  if (isMobile) {
    return (
      <span className={`
        transition-all duration-700 tracking-widest
        text-center absolute top-0 bg-black z-10
        ${show ? "opacity-100 w-full px-3 pb-3 h-20": "opacity-0 px-0 pb-0 h-0"}
        text-${feedback.correct ? "green-400" : "red-600"}
      `}
      >
        {feedback.message ?? " "}
      </span>
    )
  }

  return (
    <svg
      width={300}
      height={10}
      y={14}
      className={`hidden md:block opacity-${currentStepCount === 0 || currentStepCount === 8 ? "0" : "100"}`}
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