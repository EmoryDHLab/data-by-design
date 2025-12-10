import { useState, useEffect } from "react";
import studentResponses from "~/data/power/studentResponses.json";
import TracksVisualization from "./TracksVisualization";

interface ResponseData {
  id: string;
  x: number;
  y: number;
  gender: string;
  selection: string;
  lines: string[];
}

interface StudentResponsesData {
  elt: ResponseData[];
  cedu: ResponseData[];
  hind: ResponseData[];
  pl: ResponseData[];
}

const categories = {
  elt: "Reports of early life and training",
  cedu: "How shall you educate your children? (i.e., to a trade, in College, in a profession, etc.)",
  hind: "What have been your chief hindrances? (i.e. how has prejudice or lack of opportunity worked in your case?)",
  pl: "Present practical philosophy in regard to the Negro race in America",
};

export default function Viz3() {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof categories>("elt");
  const [currentResponseIndex, setCurrentResponseIndex] = useState(0);
  const [isUnraveled, setIsUnraveled] = useState(false);
  const [straightTextMode, setStraightTextMode] = useState(false);
  const [viewAllMode, setViewAllMode] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 700, height: 700 });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth < 768 ? 350 : window.innerWidth < 1024 ? 500 : 700;
      const height = window.innerWidth < 768 ? 400 : window.innerWidth < 1024 ? 500 : 700;
      setWindowSize({ width, height });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const responses =
    (studentResponses as StudentResponsesData)[selectedCategory] || [];
  const currentResponse = responses[currentResponseIndex];

  const handlePrevious = () => {
    setCurrentResponseIndex((prev) =>
      prev > 0 ? prev - 1 : responses.length - 1
    );
  };

  const handleNext = () => {
    setCurrentResponseIndex((prev) =>
      prev < responses.length - 1 ? prev + 1 : 0
    );
  };

  const handleCategoryChange = (category: keyof typeof categories) => {
    setSelectedCategory(category);
    setCurrentResponseIndex(0);
    setViewAllMode(false);
  };

  const scrollToResponse = (index: number) => {
    setCurrentResponseIndex(index);
    setViewAllMode(false);
  };

  return (
    <div className="min-h-screen bg-[#2A2423] text-offwhite flex flex-col lg:flex-row max-w-none">
      {/* Left side - Question */}
      <div className="w-full lg:w-1/2 p-4 lg:p-8 flex flex-col justify-center">
        {/* Category selection */}
        <div className="mb-8">
          <div className="mb-6">
            {/* <h3 className="text-lg font-power mb-4 text-white">
              {categories[selectedCategory]}
            </h3> */}
          </div>

          <div className="space-y-3">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() =>
                  handleCategoryChange(key as keyof typeof categories)
                }
                className={`block w-full text-left p-3 rounded font-power font-bold transition-colors text-xl lg:text-3xl ${
                  selectedCategory === key
                    ? "text-white "
                    : "bg-transparent text-neutral-600 hover:text-white hover:bg-neutral-600"
                }`}
              >
                {selectedCategory === key ? (
                  <>
                    {label.split("(")[0].trim()}
                    {label.includes("(") && (
                      <span className="text-lg lg:text-xl font-normal">
                        {" (" + label.split("(")[1]}
                      </span>
                    )}
                  </>
                ) : (
                  label.split("(")[0].trim()
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Response count */}
        <div className="mb-6">
          <p className="text-sm text-gray-300 font-power">
            {responses.length} responses available
          </p>
        </div>
      </div>

      {/* Right side - Responses */}
      <div className="w-full lg:w-1/2 p-4 lg:p-8 flex flex-col justify-center">
        {viewAllMode ? (
          /* View All Mode - Scrollable list of all responses */
          <div className="flex flex-col h-[600px] md:h-[700px] lg:h-[800px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-power text-lg">
                All Responses ({responses.length})
              </h3>
              <button
                onClick={() => setViewAllMode(false)}
                className="px-4 py-2 bg-white text-black rounded font-power text-sm hover:bg-gray-200 transition-colors"
              >
                Back to Single View
              </button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {responses.map((response, index) => (
                <button
                  key={response.id}
                  onClick={() => scrollToResponse(index)}
                  className="w-full text-left p-4 bg-[#3A3433] rounded-lg hover:bg-[#4A4443] transition-colors border border-transparent hover:border-white/20"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400 font-power text-sm min-w-[2rem]">
                      {index + 1}.
                    </span>
                    <p className="text-white font-power text-sm md:text-base leading-relaxed line-clamp-4">
                      {response.lines && response.lines.length > 0
                        ? response.lines
                            .map((line) => line.replace(/<[^>]*>/g, "").trim())
                            .filter((line) => line.length > 0)
                            .join(" ")
                        : response.selection}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Single Response View */
          <>
            {/* Tracks Visualization */}
            <div className="relative mb-6 h-[400px] md:h-[500px] lg:h-[700px]">
              <div className={`transition-opacity duration-500 ease-in-out ${straightTextMode ? 'opacity-0' : 'opacity-100'}`}>
                <TracksVisualization
                  key={`${selectedCategory}-${currentResponseIndex}`}
                  text={currentResponse?.selection || ""}
                  width={windowSize.width}
                  height={windowSize.height}
                  straightTextMode={straightTextMode}
                />
              </div>

              {/* Readable Text Overlay */}
              <div className={`absolute inset-0 flex items-center justify-center bg-[#2A2423] transition-opacity duration-500 ease-in-out ${straightTextMode ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}>
                <div className="text-white font-power text-lg md:text-xl text-justify leading-tight max-w-[90%] select-text px-4">
                  {currentResponse && currentResponse.lines && currentResponse.lines.length > 0
                    ? currentResponse.lines
                        .map((line) => line.replace(/<[^>]*>/g, "").trim())
                        .filter((line) => line.length > 0)
                        .join(" ")
                    : currentResponse?.selection || ""}
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex flex-col items-center space-y-3">
              <div className="text-white font-power text-sm">
                {currentResponseIndex + 1} of {responses.length}
              </div>

              {/* Mobile: Stack buttons vertically */}
              <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-3 md:space-y-0 md:space-x-4">
                <div className="flex justify-between w-full md:w-auto space-x-4">
                  <button
                    onClick={handlePrevious}
                    disabled={responses.length === 0}
                    className="flex-1 md:flex-none px-4 py-3 md:py-2 bg-white text-black rounded font-power text-sm hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Previous
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={responses.length === 0}
                    className="flex-1 md:flex-none px-4 py-3 md:py-2 bg-white text-black rounded font-power text-sm hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next →
                  </button>
                </div>

                <div className="flex flex-col md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-2">
                  <button
                    onClick={() => setStraightTextMode(!straightTextMode)}
                    className="w-full md:w-auto px-4 py-3 md:py-2 bg-blue-600 text-white rounded font-power text-sm hover:bg-blue-700 transition-colors"
                  >
                    {straightTextMode ? "Show Track" : "Make Text Readable"}
                  </button>

                  <button
                    onClick={() => setViewAllMode(true)}
                    className="w-full md:w-auto px-4 py-3 md:py-2 bg-green-600 text-white rounded font-power text-sm hover:bg-green-700 transition-colors"
                  >
                    View All Responses
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
