import { useContext } from "react";
import { QuizContext } from "./QuizContext";
import { useDeviceContext } from "~/hooks";

const ConclusionContent = () => {
  return (
    <>
      <p className=" prose leading-relaxed text-offwhite font-thin">
        Once you've learned to recognize the Gold and Burgundy triangles as
        visual representation of Indigenous and colonial conflict.
      </p>
      <p className=" prose leading-relaxed text-offwhite font-light mt-2">
        You come to see how the 17th century is increasingly dominated by
        similar conflicts, documenting the devastation brought about by British
        colonial expansion
      </p>
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
        className="font-powerLightNarrow italic focus:outline-none focus:underline hover:underline text-xl md:text-2xl mt-6 pointer-events-auto cursor-pointer"
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
