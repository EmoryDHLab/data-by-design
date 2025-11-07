import { memo, useContext, useCallback } from "react";
import { QuizContext } from "./QuizContext";

const IntroContent = memo(() => (
  <div className="text-white">
    <h2 className="text-2xl md:text-3xl font-power font-bold leading-normal">
      Creating historical knowledge
    </h2>
    <h3 className="text-lg md:text-xl font-power leading-normal mt-2">
      Interacting with Peabody's Pedagogy
    </h3>
    <p className="text-base md:text-lg leading-normal text-offwhite font-thin mt-3">
      Peabody intended the process of learning to be interactive.
    </p>
    <p className="text-base md:text-lg leading-normal text-offwhite font-thin mt-2">
      Follow the instructions to participate in Peabody's process of knowledge
      production.
    </p>
  </div>
));

IntroContent.displayName = "IntroContent";

export default memo(function QuizIntro({ className }: { className?: string }) {
  const { setCurrentStepCount } = useContext(QuizContext);

  const handleBeginClick = useCallback(() => {
    setCurrentStepCount(1);
  }, [setCurrentStepCount]);

  return (
    <div className={`p-6 md:p-12 ${className || ""}`}>
      <IntroContent />
      <button
        onClick={handleBeginClick}
        className="mt-6 text-xl md:text-2xl font-powerLightNarrow italic text-white focus:outline-none focus:underline hover:underline active:underline cursor-pointer relative z-50 p-2 -m-2 pointer-events-auto"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        BEGIN
        <span className="font-icons ml-2">b</span>
      </button>
    </div>
  );
});
