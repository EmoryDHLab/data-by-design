import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "../../ScrollytellWrapper";
import Areas from "./Areas";
import { paths } from "./paths";
import Labels from "./Labels";
import type { ReactElement } from "react";

export default function PlymouthCommitteeScrollytell({
  triggers,
}: {
  triggers: ReactElement[];
}) {
  const { accentTextColor, hideSensitiveState } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [focusShapeSize, setFocusShapeSize] = useState<object>({
    x: 645,
    y: 130,
    width: 0,
    height: 0,
  });
  const [fadeShapeSize, setFadeShapeSize] = useState<object>({
    x: 380,
    y: 0,
    width: 0,
    height: 291,
  });
  const [fadeBorder, setFadeBorder] = useState<string>("m380,66 l0,150");
  const [fadeOpacity, setFadeOpacity] = useState<number>(0.0);
  const steps = useRef<HTMLDivElement>(null);

  useEffect(() => {
    switch (true) {
      case scrollProgress < 0.5:
        setFocusShapeSize({ x: 645, y: 0, width: 0, height: 291 });
        break;
      // Men
      case scrollProgress >= 0.5 && scrollProgress < 1.5:
        setFocusShapeSize({ x: 380, y: 0, width: 265, height: 291 });
        break;
      // Boys
      case scrollProgress >= 1.5 && scrollProgress < 2.5:
        setFocusShapeSize({ x: 300, y: 0, width: 345, height: 291 });
        break;
      // Women
      case scrollProgress >= 2.5 && scrollProgress < 3.5:
        setFocusShapeSize({ x: 155, y: 0, width: 490, height: 291 });
        break;
      // Girls
      case scrollProgress >= 3.5 && scrollProgress < 4.5:
        setFocusShapeSize({ x: 95, y: 0, width: 550, height: 291 });
        break;
      default:
        setFocusShapeSize({ x: 25, y: 0, width: 618, height: 291 });
    }
  }, [scrollProgress, setFocusShapeSize]);

  useEffect(() => {
    switch (true) {
      // Men
      case scrollProgress < 2.5:
        setFadeShapeSize({ x: 385, y: 0, width: 265, height: 291 });
        setFadeBorder("m385,66 l0,150");
        break;
      // Boys
      case scrollProgress >= 2.5 && scrollProgress < 3.5:
        setFadeShapeSize({ x: 305, y: 0, width: 345, height: 291 });
        setFadeBorder("m305,70 l0,146");
        break;
      // Women
      case scrollProgress >= 3.5 && scrollProgress < 4.5:
        setFadeShapeSize({ x: 160, y: 0, width: 490, height: 291 });
        setFadeBorder("m160,85 l0,122");
        break;
      default:
        setFadeShapeSize({ x: 645, y: 0, width: 0, height: 291 });
        setFadeBorder("m160,85 l0,122");
    }
  }, [scrollProgress, setFadeShapeSize]);

  useEffect(() => {
    if (scrollProgress >= 1.5) {
      if (hideSensitiveState) {
        setFadeOpacity(1.0);
      } else {
        setFadeOpacity(0.7);
      }
    } else {
      setFadeOpacity(0.0);
    }
  }, [scrollProgress, hideSensitiveState, setFadeOpacity]);

  return (
    <ScrollytellContext.Provider value={{ scrollProgress }}>
      <ScrollytellWrapper
        bgColor="brooksSecondary"
        setScrollProgress={setScrollProgress}
        triggers={triggers}
        steps={steps}
        className="w-screen"
        id="scrollytell1"
      >
        <div className="sticky pt-16 md:pt-0 top-0 h-screen grid grid-cols-1 md:content-end order-first">
          <div
            className="text-3xl relative md:top-[calc(100vh-40rem)] ml-4 text-black hidden md:block"
            tabIndex={-1}
          >
            ↓
          </div>
          <div className="mb-6">
            <div className="w-11/12 m-auto">
              <svg
                viewBox="0 0 713.52 291.12"
                className="w-full md:h-full mt-12 md:mt-0"
              >
                <image
                  href="/images/description/1-sof_slaveship.jpg"
                  width="2973"
                  height="1213"
                  transform="scale(.24)"
                  x={0}
                  y={-0.45}
                />
                <g>
                  <path
                    className={`transition-all duration-1000 fill-${
                      scrollProgress > 4.5 ? "brooksSecondary" : "peabodyOrange"
                    } opacity-${hideSensitiveState ? 100 : 0}`}
                    stroke="rgb(28 24 23)"
                    strokeWidth={scrollProgress > 4.5 ? 3 : 0}
                    d={paths.outline}
                  />
                  <Labels />
                </g>
                <g
                  className={`transition-all duration-1000 opacity-${
                    scrollProgress >= 4.5 ? 0 : 100
                  }`}
                >
                  <mask id="focus">
                    <path d={paths.outline} fill="white" />
                    <rect
                      {...focusShapeSize}
                      fill="black"
                      className="transition-all duration-1000"
                    />
                  </mask>
                  <mask id="fade">
                    <path d={paths.outline} fill="white" fillOpacity={0} />
                    <rect
                      {...fadeShapeSize}
                      fill="white"
                      className="transition-all duration-1000"
                    />
                  </mask>

                  <path
                    strokeWidth={0}
                    className="fill-brooksSecondary"
                    mask="url(#focus)"
                    d={paths.outline}
                  />
                  <rect
                    {...focusShapeSize}
                    fillOpacity={0}
                    mask="url(#focus)"
                    className="transition-all duration-1000"
                    strokeWidth={3}
                    strokeOpacity={1.0}
                    stroke="rgb(28 24 23)"
                  />

                  <path
                    className={`transition-all duration-1000 fill-${
                      hideSensitiveState ? "brooksSecondary" : "offblack opacity-75"
                    }`}
                    strokeWidth={0}
                    mask="url(#fade)"
                    d={paths.outline}
                  />
                  <rect
                    {...fadeShapeSize}
                    fillOpacity={0}
                    mask="url(#fade)"
                    className="transition-all duration-1000"
                    strokeWidth={0}
                  />
                  <path
                    stroke="rgb(28 24 23)"
                    strokeWidth={3}
                    fillOpacity={0}
                    d={paths.outline}
                  />

                  <path
                    className="transition-all duration-1000"
                    stroke="rgb(28 24 23)"
                    strokeWidth={1.5}
                    strokeOpacity={fadeOpacity}
                    d={fadeBorder}
                  />
                </g>
                <Areas
                  strokeOpacity={
                    scrollProgress < 0.25 || (scrollProgress >= 4.5 && hideSensitiveState) ? 1.0 : 0.0
                  }
                  strokeWidth={scrollProgress >= 4.5 ? 1 : 3}
                />
              </svg>
              <figcaption></figcaption>
            </div>
          </div>
        </div>
        <div
          ref={steps}
          className="relative translate-y-[calc(-100vh+120px)] pointer-events-none md:mt-96"
        >
          {triggers.map((trigger, index) => {
            return (
              <div
                key={`brooks-trigger-${trigger.key}`}
                data-step={index}
                className={`pointer-events-none step text-xl content-center p-5 md:px-20 relative h-screen text-${accentTextColor}`}
              >
                <p className="bg-brooksSecondary-translucent p-3 md:p-12 w-9/12">
                  {trigger}
                </p>
              </div>
            );
          })}
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  );
}
