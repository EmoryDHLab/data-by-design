import { useContext, useEffect, useRef, useState } from "react";
import { QuizContext } from "./QuizContext";
import { useDeviceContext } from "~/hooks";

export default function QuizFeedback() {
  const { feedback, setFeedback, currentStepCount } = useContext(QuizContext);
  const [show, setShow] = useState<boolean>(false);
  const timeout = useRef<any>(undefined);
  const { isMobile } = useDeviceContext();

  useEffect(() => {
    if (!feedback?.message) return;
    clearTimeout(timeout.current);
    setShow(true);
    timeout.current = setTimeout(() => {
      setShow(false);
      timeout.current = undefined;
    }, 3000);
  }, [feedback, setFeedback, setShow]);

  if (isMobile) {
    return (
      <span
        className={`
        transition-all duration-700 tracking-widest
        text-start absolute top-10 bg-black z-10
        ${
          show ? "opacity-100 w-full px-3 pb-3 h-20" : "opacity-0 px-0 pb-0 h-0"
        }
        text-${feedback?.correct ? "green-400" : "red-600"}
      `}
      >
        {feedback?.message ?? " "}
      </span>
    );
  }

  return (
    <div
      className={`opacity-${
        currentStepCount === 0 || currentStepCount === 8 ? "0" : "100"
      }`}
    >
      <div
        className={`transition-all duration-500 ease-out tracking-widest text-base font-power italic whitespace-nowrap text-wrap prose px-2 ${
          show
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-2 scale-95"
        } ${feedback?.correct ? "text-green-400" : "text-red-400"}`}
      >
        {feedback?.message}
      </div>
    </div>
  );
}
