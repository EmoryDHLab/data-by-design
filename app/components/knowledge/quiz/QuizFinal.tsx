import { useContext } from "react";
import { QuizContext } from "./QuizContext";

export default function QuizFinal() {
  const { currentStepCount, setCurrentStepCount } = useContext(QuizContext);

  return (
    <div
      className={`transition-all duration-1000 ${
        currentStepCount === 9
          ? "opacity-100 md:-translate-y-48 md:-translate-x-24 lg:-translate-y-64 lg:-translate-x-32 scale-100 delay-300 pointer-events-auto"
          : "opacity-0 md:-translate-y-48 md:-translate-x-24 lg:-translate-y-64 lg:-translate-x-32 scale-100 pointer-events-none"
      }`}
    >
      <div className="text-white space-y-6 max-w-lg">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎉</span>
          <h2 className="text-xl font-power text-yellow-400 m-0">
            QUIZ COMPLETE
          </h2>
        </div>

        <div className="space-y-4 text-sm leading-relaxed">
          <p className="m-0 text-offwhite">
            You've mastered Peabody's visual language for mapping colonial
            conflicts.
          </p>
          <p className="m-0 text-offwhite font-light">
            Ready to see how these patterns reveal the deeper story of
            historical data visualization?
          </p>
        </div>

        <div className="border-t border-white/20 pt-6 space-y-4">
          <h3 className="m-0 text-base font-medium text-white">WHAT'S NEXT?</h3>

          <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer">
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
              className="focus:outline-none focus:underline hover:underline text-xs text-white/60 hover:text-white transition-colors bg-red-500 p-2"
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
