import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import { EyeSlashIcon } from '@heroicons/react/24/outline'

const triggers = [
  <span key="ac19f869">Clarkson created a series of cross-sections that showed each deck from above.</span>,
  <span key="f63d8f0c">From the side—cross-sections that, like the Plymouth Committee's "Plan," included human figures intended to indicate how the captives were confined.</span>,
  <span key="a87bda1c">The result was a set of schematics that carried with them the connotations of accuracy and precision that were associated with the naval diagrams of the time, and yet also enlisted what Ian Baucom characterizes as a "sympathetic grammar" intended to draw those who viewed the chart to the antislavery cause.</span>,
  <span key="94a7a3b2">Clarkson's revised chart, entitled "Description of a Slave Ship," was—like the original "Plan,"--accompanied by explanatory text.</span>,
  <span key="63ba9abc">In addition to the text, Clarkson also included a set of tables intended to reinforce the factual nature of the evidence visualized above.</span>,
  <span key="1a7c90eb"> The first table shows measurements of the actual ship, along with a scale that indicated how they corresponded to the image.</span>,
  <span key="5448c43e">There was a small tablet that presented information about the number of captives that had actually been held on the ship.</span>,
  <span key="06e375fc">The final table presented a comparison between the number of actual captives and those pictured on the diagram, making clear that while the image is informed by data, it is not a direct representation of those numbers and lives.</span>,
  <span key="9b862bca"></span>
]

function ClarksonScrollytell() {
  const { accentTextColor, hideSensitiveState } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [scale, setScale] = useState<number>(1.0);
  const [translateY, setTranslateY] = useState<number>(20);
  const [translateX, setTranslateX] = useState<number>(0);
  const steps = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hideSensitiveState) return;

    switch(true) {
      case (scrollProgress  < 6.5):
        setScale(3.0);
        setTranslateY(215)
        setTranslateX(0)
        break;
      // Cross-sections
      case (scrollProgress >= 6.5 && scrollProgress < 7.5):
        setScale(3.0);
        setTranslateY(800)
        setTranslateX(0)
        break;
      // Side Cross-section
      case (scrollProgress >= 7.5 && scrollProgress < 8.5):
        setScale(2.75);
        setTranslateY(-750)
        setTranslateX(0)
        break;
      // Title
      case (scrollProgress >= 8.5 && scrollProgress < 9.5):
        setScale(3.0);
        setTranslateY(1000)
        setTranslateX(0)
        break;
      // Tables
      case (scrollProgress >= 9.5 && scrollProgress < 10.5):
        setScale(2.75);
        setTranslateY(-750)
        setTranslateX(0)
        break;
      // Table 1
      case (scrollProgress >= 10.5 && scrollProgress < 11.5):
        setScale(5.0);
        setTranslateY(-700)
        setTranslateX(600)
        break;
        // Table 2
      case (scrollProgress >= 11.5 && scrollProgress < 12.5):
        setScale(8.0);
        setTranslateY(-1000)
        setTranslateX(600)
        break;
      // Table 3
      case (scrollProgress >= 12.5 && scrollProgress < 13.5):
        setScale(10.0);
        setTranslateY(-450)
        setTranslateX(200)
        break;
    default:
      setScale(1.0);
      setTranslateY(0)
      setTranslateX(0)
    }
  }, [scrollProgress, hideSensitiveState]);

  return (
    <ScrollytellContext.Provider value={{ scrollProgress }}>
      <ScrollytellWrapper
        setScrollProgress={setScrollProgress}
        triggers={triggers}
        steps={steps}
        className="w-screen"
        bgColor="brooksSecondary"
      >
        <div
          className={`cursor-pointer sticky pt-16 md:pt-0 top-0 h-screen grid grid-cols-1 md:content-end order-first`}
          id="scrollytell2"
        >
          <div className="mb-6">
            <div className="w-11/12 mx-auto">
              <svg
                viewBox="0 0 2000 2534"
                className={`w-full transition-[height] duration-1000 ${scrollProgress >= 13.5 ? "h-[80vh]" : "h-[50vh]"}`}
              >
                <image
                  href="/images/brooks/4-description-1789.jpg"
                  className={`transition-all origin-center duration-1000  opacity-${hideSensitiveState ? 0 : 100}`}
                  style={{
                    transform: `scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`
                  }}
                  width={2000}
                  height={2534}
                  x={0}
                  y={0}
                />
                <g className={`transition-opacity origin-center duration-1000  opacity-${hideSensitiveState ? 100 : 0}`}>
                  <rect
                    width={2000}
                    height={2534}
                    fill="#D9D9D9"
                    stroke-width={55}
                    className="stroke-brooksPrimary fill-brooksSecondary"
                  ></rect>
                  <EyeSlashIcon
                    strokeOpacity={0.75}
                    className="stroke-brooksPrimary w-1 h-1"
                    height={800}
                    y="33%"
                  />
                </g>
              </svg>
              <figcaption></figcaption>
            </div>
            <div className={`text-3xl relative md:bottom-0 ml-4 text-black hidden md:${scrollProgress >= 13.5 ? "hidden" : "block"}`} tabIndex={-1}>↓</div>
          </div>
        </div>
        <div className="relative translate-y-[calc(-100vh+120px)] pointer-events-none md:mt-96" ref={steps}>
          {triggers.map((trigger, index) => {
            return (
              <div
                key={`brooks-trigger-${trigger.key}`}
                data-step={index}
                className={`pointer-events-none step text-xl content-center p-5 md:px-20 relative h-${index == 8 ? "[50vh]" : "screen"} text-${accentTextColor}`}
              >
                <p className={`bg-${index != 8 ? "brooksSecondary-translucent" : ""} p-3 md:p-12 w-9/12`}>
                  {trigger}
                </p>
              </div>
            )
          })}
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  )
}

export default ClarksonScrollytell;