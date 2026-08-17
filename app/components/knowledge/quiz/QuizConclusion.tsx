import { useContext } from "react";
import { QuizContext } from "./QuizContext";
import { useDeviceContext } from "~/hooks";

const ConclusionContent = () => {
  return (
    <>
      <div className="lg:-translate-x-12 max-w-[65ch] place-content-start">
        <p className=" font-sans  leading-relaxed text-offwhite font-thin">
Once you learn to recognize this sequence of gold and burgundy triangles as a representation of settler-Indigenous conflict, you can see how the seventeenth century is increasingly dominated by similar conflicts.  



        </p>
        <p className="  font-sans leading-relaxed text-offwhite font-light mt-2">
       The repeating pattern throughout the century becomes a visual indicator of the recurrent violence brought about by British colonial expansion.

        </p>
      </div>
    </>
  );
};

export default function QuizConclusion({ className }: { className?: string }) {
  const { setCurrentStepCount } = useContext(QuizContext);
  const { isMobile } = useDeviceContext();

  if (isMobile) {
    return <ConclusionContent />;
  }
  return (
    <div className={`text-white ${className || ""}`}>
      <ConclusionContent />
      <button
        className="lg:-translate-x-12 font-powerLightNarrow italic focus:outline-none focus:underline hover:underline text-xl md:text-2xl mt-6 pointer-events-auto cursor-pointer"
        tabIndex={0}
        onClick={() => setCurrentStepCount(9)}
        onKeyUp={({ key }) => {
          if (key === "Enter" || key === "Space") setCurrentStepCount(9);
        }}
      >
        FINISH
        <span className="font-icons ml-2">b</span>
      </button>
    </div>
  );
}
