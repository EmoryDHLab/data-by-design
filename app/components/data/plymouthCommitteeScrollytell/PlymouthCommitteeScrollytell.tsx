import { useContext, useMemo, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "../../ScrollytellWrapper";
import Areas from "./Areas";
import { paths } from "./paths";
import Labels from "./Labels";
import type { ReactElement } from "react";

function getFocusShapeSize(scrollProgress: number) {
  switch (true) {
    case scrollProgress < 0.5:
      return { x: 645, y: 0, width: 0, height: 291 };
    // Men
    case scrollProgress >= 0.5 && scrollProgress < 1.5:
      return { x: 380, y: 0, width: 265, height: 291 };
    // Boys
    case scrollProgress >= 1.5 && scrollProgress < 2.5:
      return { x: 300, y: 0, width: 345, height: 291 };
    // Women
    case scrollProgress >= 2.5 && scrollProgress < 3.5:
      return { x: 155, y: 0, width: 490, height: 291 };
    // Girls
    case scrollProgress >= 3.5 && scrollProgress < 4.5:
      return { x: 95, y: 0, width: 550, height: 291 };
    default:
      return { x: 25, y: 0, width: 618, height: 291 };
  }
}

function getFadeShape(scrollProgress: number) {
  switch (true) {
    // Men
    case scrollProgress < 2.5:
      return {
        fadeShapeSize: { x: 385, y: 0, width: 265, height: 291 },
        fadeBorder: "m385,66 l0,150",
      };
    // Boys
    case scrollProgress >= 2.5 && scrollProgress < 3.5:
      return {
        fadeShapeSize: { x: 305, y: 0, width: 345, height: 291 },
        fadeBorder: "m305,70 l0,146",
      };
    // Women
    case scrollProgress >= 3.5 && scrollProgress < 4.5:
      return {
        fadeShapeSize: { x: 160, y: 0, width: 490, height: 291 },
        fadeBorder: "m160,85 l0,122",
      };
    default:
      return {
        fadeShapeSize: { x: 645, y: 0, width: 0, height: 291 },
        fadeBorder: "m160,85 l0,122",
      };
  }
}

// The "fade" mask/path is a dark cover over the currently-focused deck
// section, separate from the blur filter and the Labels text overlay. It
// should only ever show while sensitive content is being hidden.
function getFadeOpacity(scrollProgress: number, hideSensitiveState?: boolean) {
  if (!hideSensitiveState) return 0.0;
  if (scrollProgress < 1.5) return 0.0;
  return 1.0;
}

export default function PlymouthCommitteeScrollytell({
  triggers,
}: {
  triggers: ReactElement[];
}) {
  const { accentTextColor, hideSensitiveState } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const steps = useRef<HTMLDivElement>(null);

  const focusShapeSize = useMemo(
    () => getFocusShapeSize(scrollProgress),
    [scrollProgress],
  );
  const { fadeShapeSize, fadeBorder } = useMemo(
    () => getFadeShape(scrollProgress),
    [scrollProgress],
  );
  const fadeOpacity = useMemo(
    () => getFadeOpacity(scrollProgress, hideSensitiveState),
    [scrollProgress, hideSensitiveState],
  );

  const scrollytellContextValue = useMemo(
    () => ({ scrollProgress }),
    [scrollProgress],
  );

  return (
    <ScrollytellContext.Provider value={scrollytellContextValue}>
      <ScrollytellWrapper
        bgColor="dataSecondary"
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
          <div className="mb-12">
            <div className="w-11/12 m-auto">
              <svg
                viewBox="0 0 713.52 291.12"
                className="w-full md:h-full mt-12 md:mt-0"
              >
                <filter id="ship-blur">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
                </filter>
                <image
                  filter={hideSensitiveState ? "url(#ship-blur)" : ""}
                  href="/images/chapters/0103b-africanship.jpg"
                  width="2973"
                  height="1213"
                  transform="scale(.24)"
                  x={0}
                  y={-0.45}
                />
                <g>
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
                    className="fill-dataSecondary"
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
                      hideSensitiveState ? "dataSecondary" : "offblack"
                    } opacity-${fadeOpacity * 100}`}
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
                    scrollProgress < 0.25 ||
                    (scrollProgress >= 4.5 && hideSensitiveState)
                      ? 1.0
                      : 0.0
                  }
                  strokeWidth={scrollProgress >= 4.5 ? 1 : 3}
                />
              </svg>
              <figcaption className="mt-2 text-offblack/80 text-sm">
                The first published version of the slave ship diagram,{" "}
                <cite>
                  Plan of an African Ship’s Lower Deck with Negroes in the
                  Proportion of Only One to a Ton,
                </cite>{" "}
                created by the Plymouth Committee of the Society for Effecting
                the Abolition of the Slave Trade in England in 1788. © Religious
                Society of Friends (Quakers) in Britain.
              </figcaption>
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
                <p className="bg-dataSecondary-translucent p-3 md:p-12 w-9/12">
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
