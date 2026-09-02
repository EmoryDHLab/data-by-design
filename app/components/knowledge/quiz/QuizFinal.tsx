import { useContext } from "react";
import { QuizContext } from "./QuizContext";

export default function QuizFinal() {
  const { currentStepCount, setCurrentStepCount } = useContext(QuizContext);

  return (
    <div
      className={`transition-all duration-1000 ${
        currentStepCount === 9
          ? "opacity-100 md:-translate-x-24  lg:-translate-x-32 scale-100 delay-300 pointer-events-auto"
          : "opacity-0 md:-translate-x-24  lg:-translate-x-32 scale-100 pointer-events-none"
      }`}
    >
      <div className="text-white px-12 space-y-6 max-w-7xl">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎉</span>
          <h2 className="text-xl font-power text-yellow-400 m-0">
            QUIZ COMPLETE
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="flex items-start gap-3">
              <span className="text-lg">📖</span>
              <div>
                <p className="m-0 text-sm font-medium text-white mb-1">
                  Continue the Story
                </p>
                <p className="m-0 text-xs text-offwhite leading-relaxed">
                  Explore how these visualization techniques reveal hidden
                  patterns in centuries of historical data
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <p className="m-0 text-xs text-offwhite/70">
              Scroll down to continue reading
            </p>
            <button
              className="focus:outline-none focus:underline hover:underline text-xs text-white/60 hover:text-white transition-colors pointer-events-auto relative z-50"
              onClick={() => {
                console.log("Retake Quiz clicked");
                setCurrentStepCount(1);
              }}
            >
              <span className="font-icons mr-1 text-xs">e</span>
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
