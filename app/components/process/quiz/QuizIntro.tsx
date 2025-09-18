import { memo, useContext, useCallback } from "react";
import { QuizContext } from "./QuizContext";
import { useDeviceContext } from "~/hooks";

const IntroText = memo(() => (
  <section className="text-white">
    <h2 className="text-4xl md:text-[14px] font-power leading-normal md:leading-[15px]">
      Creating historical knowledge
    </h2>
    <h3 className="text-2xl md:text-[7px] font-powerLightNarrow leading-loose md:leading-[8px] mt-[2px]">
      interacting with Peabody's Pedagogy
    </h3>
    <p className="md:text-[8px] leading-normal md:leading-[9px] text-offwhite font-thin">
      Peabody intended the process of learning to be interactive.
    </p>
    <p className="md:text-[8px] leading-normal md:leading-[9px] text-offwhite font-[1]">
      Follow the instruction in italics to participate in Peabody's process of
      knowledge production.
    </p>
  </section>
));

IntroText.displayName = 'IntroText';

const DesktopView = memo(({ 
  className, 
  onBeginClick 
}: { 
  className?: string; 
  onBeginClick: () => void;
}) => (
  <svg>
    <g className={`hidden md:block ${className || ''}`}>
      <foreignObject x={50} y={20} width={200} height={100}>
        <IntroText />
      </foreignObject>
      <text
        y={120}
        x={50}
        width={20}
        height={20}
        fill="white"
        role="button"
        tabIndex={0}
        onClick={onBeginClick}
        onKeyUp={({ key }) => {
          if (key === "Enter" || key === " ") onBeginClick();
        }}
        fontSize={10}
        className="font-powerLightNarrow italic focus:outline-none focus:underline hover:underline cursor-pointer"
      >
        BEGIN
        <tspan dx={2} className="font-icons">
          b
        </tspan>
      </text>
    </g>
  </svg>
));

DesktopView.displayName = 'DesktopView';

export default memo(function QuizIntro({ className }: { className?: string }) {
  const { setCurrentStepCount } = useContext(QuizContext);
  const { isMobile, isDesktop } = useDeviceContext();
  
  const handleBeginClick = useCallback(() => {
    setCurrentStepCount(1);
  }, [setCurrentStepCount]);

  if (isMobile) {
    return <IntroText />;
        <g className={`hidden md:block ${className}`}>
  }
  
  if (isDesktop) {
    return <DesktopView className={className} onBeginClick={handleBeginClick} />;
  }

  return null;
});
