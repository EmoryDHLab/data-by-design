import { useState } from "react";
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
  };

  return (
    <div className="min-h-screen bg-[#2A2423] text-offwhite flex max-w-none">
      {/* Left side - Question */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
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
                className={`block w-full text-left p-3 rounded font-power font-bold  transition-colors text-3xl ${
                  selectedCategory === key
                    ? "text-white "
                    : "bg-transparent text-neutral-600 hover:text-white hover:bg-neutral-600"
                }`}
              >
                {selectedCategory === key ? (
                  <>
                    {label.split("(")[0].trim()}
                    {label.includes("(") && (
                      <span className="text-xl font-normal">
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
      <div className="w-1/2 p-8 flex flex-col justify-center">
        {/* Response card stack */}

        {/* Tracks Visualization */}
        <div className="relative mb-6 h-[700px]">
          <TracksVisualization 
            key={`${selectedCategory}-${currentResponseIndex}`}
            text={currentResponse?.selection || ""} 
            lines={currentResponse?.lines || []}
            width={700} 
            height={700}
            straightTextMode={straightTextMode}
          />
        </div>

        {/* Navigation controls */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={responses.length === 0}
            className="px-4 py-2 bg-white text-black rounded font-power text-sm hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            � Previous
          </button>

          <div className="flex items-center gap-4">
            <div className="text-white font-power text-sm">
              {currentResponseIndex + 1} of {responses.length}
            </div>
            <button
              onClick={() => setStraightTextMode(!straightTextMode)}
              className="px-4 py-2 bg-blue-600 text-white rounded font-power text-sm hover:bg-blue-700 transition-colors"
            >
              {straightTextMode ? "Show Track" : "Make Text Readable"}
            </button>
          </div>

          <button
            onClick={handleNext}
            disabled={responses.length === 0}
            className="px-4 py-2 bg-white text-black rounded font-power text-sm hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next �
          </button>
        </div>
      </div>
    </div>
  );
}
