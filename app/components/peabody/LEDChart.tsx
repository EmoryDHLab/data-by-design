import { Fragment, useEffect, useRef, useState } from "react";
import ScrollytellWrapper from "../ScrollytellWrapper";
import { ScrollytellContext } from "~/scrollytellContext";
import { numberRange } from "~/utils";

const initialY = 0;
const offset = 9;
const maxTop = 10;

const Triggers = [...numberRange(0, 8)].map((trigger) => {
  return (
    <Fragment key={`led-trigger-${trigger}`}>
      <div
        data-step={`led-trigger-${trigger}`}
        className="led-chart-step h-96 md:h-[50vh]"
      ></div>
    </Fragment>
  );
});

export default function LEDChart() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [layer1Y, setLayer1Y] = useState<number>(initialY);
  const [layer2Y, setLayer2Y] = useState<number>(initialY);
  const [layer3Y, setLayer3Y] = useState<number>(initialY);
  const [layer4Y, setLayer4Y] = useState<number>(initialY);
  const [layer5Y, setLayer5Y] = useState<number>(initialY);
  const [layer6Y, setLayer6Y] = useState<number>(initialY);
  const [layer7Y, setLayer7Y] = useState<number>(initialY);
  const [layer8Y, setLayer8Y] = useState<number>(initialY);
  const [layer9Y, setLayer9Y] = useState<number>(initialY);

  useEffect(() => {
    if (scrollProgress && scrollProgress < 0.5) {
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
      if (scrollProgress && scrollProgress >= 0.5) {
        if (index < currentStep) {
          updateFunc(maxTop + index * offset);
        } else {
          updateFunc(maxTop + (currentStep - 1) * offset);
        }
      } else {
        updateFunc(initialY);
      }
    });
  }, [scrollProgress, currentStep]);

  return (
    <ScrollytellContext.Provider
      value={{
        scrollProgress,
        setScrollProgress,
      }}
    >
      <ScrollytellWrapper
        setScrollProgress={setScrollProgress}
        setCurrentStep={setCurrentStep}
        triggers={Triggers}
        steps={stepsRef}
        stepClassName=".led-chart-step"
        bgColor="none"
        threshold={4}
        className="w-full grid-wrapper"
        debug={false}
        scrollOffset={1}
      >
        <div id="scrolly-led-chart">
          <figure className="sticky top-16 text-center md:ml-24">
            <svg viewBox="0 0 50 105" className="w-full h-[75vh] md:h-full">
              <g>
                <image
                  className="transition-all duration-700"
                  x={0}
                  y={layer9Y}
                  width={50}
                  height={30}
                  href="/images/peabody/illustration/9.png"
                />
                <image
                  className="transition-all duration-700"
                  x={0}
                  y={layer8Y}
                  width={50}
                  height={30}
                  href="/images/peabody/illustration/8.png"
                />
                <image
                  className="transition-all duration-700"
                  x={0}
                  y={layer7Y}
                  width={50}
                  height={30}
                  href="/images/peabody/illustration/7.png"
                />
                <image
                  className="transition-all duration-700"
                  x={0}
                  y={layer6Y}
                  width={50}
                  height={30}
                  href="/images/peabody/illustration/6.png"
                />
                <image
                  className="transition-all duration-700"
                  x={0}
                  y={layer5Y}
                  width={50}
                  height={30}
                  href="/images/peabody/illustration/5.png"
                />
                <image
                  className="transition-all duration-700"
                  x={0}
                  y={layer4Y}
                  width={50}
                  height={30}
                  href="/images/peabody/illustration/4.png"
                />
                <image
                  className="transition-all duration-700"
                  x={0}
                  y={layer3Y}
                  width={50}
                  height={30}
                  href="/images/peabody/illustration/3.png"
                />
                <image
                  className="transition-all duration-700"
                  x={0}
                  y={layer2Y}
                  width={50}
                  height={30}
                  href="/images/peabody/illustration/2.png"
                />
                <image
                  className="transition-all duration-700"
                  x={0}
                  y={layer1Y}
                  width={50}
                  height={30}
                  href="/images/peabody/illustration/1.png"
                />
              </g>
            </svg>
            <figcaption className="font-dubois mt-3 md:mt-6 mb-6 md:mb-12 col-span-full">
              Women's work of various forms has much to contribute to larger
              narratives about the development of most scholarly disciplines and
              professional fields. A final example helps to underscore this
              point: most contemporary viewers, when seeing Peabody's charts for
              the first time, observe that they look like paintings by Piet
              Mondrian, the famous Dutch modernist.
            </figcaption>
          </figure>
          <div ref={stepsRef} className="relative">
            {Triggers.map((trigger) => {
              return (
                <div key={`trigger-wrap-${trigger.key}`}>
                  {trigger}
                </div>
              )
            })}
          </div>
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  );
}
