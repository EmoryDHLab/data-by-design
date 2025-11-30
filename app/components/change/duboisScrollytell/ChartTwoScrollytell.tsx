import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ScrollytellContext } from "~/scrollytellContext";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import StudentChartTwo from "../StudentChartTwo";
import { useDeviceContext } from "~/hooks";
import type { ReactElement } from "react";

function ChartTwoScrollytell({ triggers }: { triggers: ReactElement[] }) {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [activeStudent, setActiveStudent] = useState<string | undefined>(
    undefined
  );
  const [interactive, setInteractive] = useState<boolean>(false);
  const [highlightOccupations, setHighlightOccupations] = useState<string[]>([]);
  const [showConnections, setShowConnections] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<string | null>(null);
  const steps = useRef<HTMLDivElement>(null);
  const { isMobile } = useDeviceContext();

  const minScrollProgress = 10.5;

  useEffect(() => {
    switch (true) {
      // Initial state - show overview
      case scrollProgress < minScrollProgress + 1:
        setActiveStudent(undefined);
        setHighlightOccupations([]);
        setShowConnections(false);
        setShowImage(null);
        break;
        
      // Show image 899.webp for trigger 94a7a3b3
      case scrollProgress >= minScrollProgress + 1 && scrollProgress < minScrollProgress + 2:
        setActiveStudent(undefined);
        setHighlightOccupations([]);
        setShowConnections(true);
        setShowImage("899.webp");
        break;
        
      // Highlight pie chart phase  
      case scrollProgress >= minScrollProgress + 2 && scrollProgress < minScrollProgress + 3:
        setActiveStudent(undefined);
        setHighlightOccupations(["Teaching", "Government Service"]);
        setShowConnections(false);
        setShowImage(null);
        break;
        
      // Show Atlanta University graduates
      case scrollProgress >= minScrollProgress + 3 && scrollProgress < minScrollProgress + 3.5:
        setActiveStudent(undefined);
        setHighlightOccupations([]);
        setShowConnections(false);
        break;
        
      // Highlight specific occupations gradually
      case scrollProgress >= minScrollProgress + 3.5 && scrollProgress < minScrollProgress + 3.75:
        setActiveStudent(undefined);
        setHighlightOccupations(["Teaching"]);
        setShowConnections(false);
        break;
        
      case scrollProgress >= minScrollProgress + 3.75 && scrollProgress < minScrollProgress + 4:
        setActiveStudent(undefined);
        setHighlightOccupations(["Teaching", "House Wives"]);
        setShowConnections(false);
        break;
        
      // Individual student highlights
      case scrollProgress >= minScrollProgress + 4 && scrollProgress < minScrollProgress + 4.2:
        setActiveStudent("Lula Iola");
        setHighlightOccupations(["House Wives"]);
        setShowConnections(false);
        break;
        
      case scrollProgress >= minScrollProgress + 4.2 && scrollProgress < minScrollProgress + 4.4:
        setActiveStudent("Edward Lee");
        setHighlightOccupations(["Deceased"]);
        setShowConnections(false);
        break;
        
      case scrollProgress >= minScrollProgress + 4.4 && scrollProgress < minScrollProgress + 4.6:
        setActiveStudent("William George");
        setHighlightOccupations(["Government Service"]);
        setShowConnections(false);
        break;
        
      case scrollProgress >= minScrollProgress + 4.6 && scrollProgress < minScrollProgress + 4.8:
        setActiveStudent("Henry Napoleon");
        setHighlightOccupations(["Teaching"]);
        setShowConnections(false);
        setInteractive(false);
        break;
        
      // Show all students together
      case scrollProgress >= minScrollProgress + 4.8 && scrollProgress < minScrollProgress + 5:
        setActiveStudent(undefined);
        setHighlightOccupations(["Teaching", "Government Service", "House Wives", "Deceased"]);
        setShowConnections(false);
        setInteractive(false);
        break;
        
      // Enable interaction
      case scrollProgress >= minScrollProgress + 5:
        setActiveStudent(undefined);
        setHighlightOccupations([]);
        setShowConnections(false);
        setInteractive(true);
        break;
        
      default:
        setActiveStudent(undefined);
        setHighlightOccupations([]);
        setShowConnections(false);
        setShowImage(null);
        break;
    }
  }, [scrollProgress]);

  return (
    <ScrollytellContext.Provider value={{ scrollProgress }}>
      <ScrollytellWrapper
        setScrollProgress={setScrollProgress}
        triggers={triggers}
        steps={steps}
        className="w-screen"
        bgColor="changePrimary"
      >
        <div
          className="flex flex-col md:flex-row justify-between"
          id="scrollytell-2"
        >
          <div className="sticky p-8 md:p-0 top-0 h-min bias-full w-full md:bias-1/2 md:w-1/2 md:order-last">
            <div
              className={`bg-changePrimary h-[calc(100vh-80px)] mt-20 my-auto flex flex-col mr-4`}
            >
              <StudentChartTwo
                id="student-chart-two-scrolly"
                interactive={interactive}
                topOffset={isMobile ? 150 : 0}
                highlightChart={
                  scrollProgress >= minScrollProgress + 2 &&
                  scrollProgress <= minScrollProgress + 3
                }
                highlightMap={showConnections}
                activeStudent={activeStudent}
                showExtra={
                  scrollProgress >= minScrollProgress + 3 &&
                  scrollProgress <= minScrollProgress + 5
                }
                highlightOccupations={highlightOccupations}
                showConnections={showConnections}
              />
            </div>
          </div>

          <div
            ref={steps}
            className="bias-full w-full md:bias-1/2 md:w-2/5 relative"
          >
            {triggers.map((trigger, index) => {
              return (
                <div
                  key={`brooks-trigger-${trigger.key}`}
                  data-step={index}
                  className={`pointer-events-none step text-xl content-center relative h-screen text-${accentTextColor}`}
                >
                  <div
                    className={`p-6 m-0 md:m-16 text-offwhite md:p-0 bg-${
                      index == 0 || index == triggers.length - 1
                        ? ""
                        : "changePrimary-translucent"
                    } w-full md:w-9/12`}
                  >
                    {trigger}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollytellWrapper>
    </ScrollytellContext.Provider>
  );
}

export default ChartTwoScrollytell;
