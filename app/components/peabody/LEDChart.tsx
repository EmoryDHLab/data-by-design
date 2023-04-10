import { useEffect, useRef, useState } from "react";
import ScrollytellWrapper from "../ScrollytellWrapper";
import { ScrollytellContext } from "~/scrollytellContext";
import { numberRange } from "~/utils";

const initialY = 0;
const initialX = 12.5;
const offset = 7;
const maxTop = 10;

export default function LEDChart({ children }) {
  const parentRef = useRef();
  const stepsRef = useRef();
  const [scrollProgress, setScrollProgress] = useState(undefined);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [layer1Y, setLayer1Y] = useState<float>(initialY);
  const [layer2Y, setLayer2Y] = useState<float>(initialY);
  const [layer3Y, setLayer3Y] = useState<float>(initialY);
  const [layer4Y, setLayer4Y] = useState<float>(initialY);
  const [layer5Y, setLayer5Y] = useState<float>(initialY);
  const [layer6Y, setLayer6Y] = useState<float>(initialY);
  const [layer7Y, setLayer7Y] = useState<float>(initialY);
  const [layer8Y, setLayer8Y] = useState<float>(initialY);
  const [layer9Y, setLayer9Y] = useState<float>(initialY);

  useEffect(() => {
    if (scrollProgress < 0.5) {
      setLayer1Y(initialY);
      setLayer2Y(initialY);
      setLayer3Y(initialY);
      setLayer4Y(initialY);
      setLayer5Y(initialY);
      setLayer6Y(initialY);
      setLayer7Y(initialY);
      setLayer8Y(initialY);
      setLayer9Y(initialY);
    }

    const updateFunctions = [
      setLayer2Y,
      setLayer3Y,
      setLayer4Y,
      setLayer5Y,
      setLayer6Y,
      setLayer7Y,
      setLayer8Y,
      setLayer9Y,
    ];

    updateFunctions.forEach((updateFunc, index) => {
      if (scrollProgress >= 0.5) {
        if (index < currentStep) {
          updateFunc(maxTop + ( index * offset ));
        } else {
          updateFunc(maxTop + ( (currentStep - 1) * offset));
        }
      } else {
        updateFunc(initialY);
      }
    });
  }, [scrollProgress, setLayer1Y, setLayer2Y, currentStep]);

  return (
    <ScrollytellContext.Provider
      value={{
        scrollProgress,
        setScrollProgress,
      }}
    >
      <ScrollytellWrapper
        scrollProgress={scrollProgress}
        setScrollProgress={setScrollProgress}
        setCurrentStep={setCurrentStep}
        triggers={stepsRef.current?.children ?? []}
        steps={stepsRef}
        stepClassName=".led-chart-step"
        bgColor="none"
        parent={parentRef.current}
        threshold={4}
        widthClass="w-full"
        debug={false}
        scrollOffset={1}
      >
        <div ref={parentRef} className="">
          <figure className="sticky top-0">
              <svg viewBox="0 0 75 125">
                <g>
                  <image className="transition-all duration-1000" x={initialX} y={layer9Y} width={50} height={50} href="/images/peabody/illustration/9.png" />
                  <image className="transition-all duration-1000" x={initialX} y={layer8Y} width={50} height={50} href="/images/peabody/illustration/8.png" />
                  <image className="transition-all duration-1000" x={initialX} y={layer7Y} width={50} height={50} href="/images/peabody/illustration/7.png" />
                  <image className="transition-all duration-1000" x={initialX} y={layer6Y} width={50} height={50} href="/images/peabody/illustration/6.png" />
                  <image className="transition-all duration-1000" x={initialX} y={layer5Y} width={50} height={50} href="/images/peabody/illustration/5.png" />
                  <image className="transition-all duration-1000" x={initialX} y={layer4Y} width={50} height={50} href="/images/peabody/illustration/4.png" />
                  <image className="transition-all duration-1000" x={initialX} y={layer3Y} width={50} height={50} href="/images/peabody/illustration/3.png" />
                  <image className="transition-all duration-1000" x={initialX} y={layer2Y} width={50} height={50} href="/images/peabody/illustration/2.png" />
                  <image className="transition-all duration-1000" x={initialX} y={layer1Y} width={50} height={50} href="/images/peabody/illustration/1.png" />
                </g>
              </svg>
          </figure>
          <div ref={stepsRef} className="relative">
            {[...numberRange(0, 8)].map((trigger) => {
              return (
                <div
                  key={trigger}
                  data-step={trigger}
                  className="led-chart-step h-[12vh]"
                ></div>
              )
            })}
          </div>
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  )
}