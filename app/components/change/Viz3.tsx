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
  const [unravelingIndex, setUnravelingIndex] = useState<number | null>(null);
  const [hiddenKnot, setHiddenKnot] = useState<number | null>(null);
  const [ravelingIndex, setRavelingIndex] = useState<number | null>(null);
  const [showBigViz, setShowBigViz] = useState(true);

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
    setHiddenKnot(null);
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
              {/* Background mini-knots for navigation */}
              <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
                <style>{`
                  @keyframes unravel-stroke {
                    0% { stroke-dashoffset: 0; opacity: 1; }
                    80% { opacity: 0.3; }
                    100% { stroke-dashoffset: -350; opacity: 0; }
                  }
                  @keyframes ravel-stroke {
                    0% { stroke-dashoffset: 350; opacity: 0; }
                    20% { opacity: 0.3; }
                    100% { stroke-dashoffset: 0; opacity: 1; }
                  }
                `}</style>
                {responses.map((_, index) => {
                  const seed = index * 137.508;
                  const left = ((seed * 7.3) % 86) + 4;
                  const top = ((seed * 3.7) % 82) + 6;
                  const rotation = ((seed * 2.1) % 70) - 35;
                  const size = 50 + (index % 4) * 10;
                  const isActive = index === currentResponseIndex;
                  const isUnraveling = unravelingIndex === index;

                  // Procedurally generate a unique knot path per category+index
                  // using a simple seeded pseudo-random number generator
                  const catOffset = { elt: 0, cedu: 1000, hind: 2000, pl: 3000 }[selectedCategory] || 0;
                  const hash = (index + 1) * 2654435761 + catOffset;
                  const rand = (n: number) => {
                    const v = Math.sin(hash * 0.001 + n * 127.1) * 43758.5453;
                    return v - Math.floor(v); // 0..1
                  };

                  // Generate 4-6 control point clusters for the knot
                  const numLoops = 3 + Math.floor(rand(0) * 3); // 3-5 loops
                  const points: number[][] = [];

                  // Entry point (bottom-left area)
                  points.push([rand(1) * 15, 75 + rand(2) * 20]);

                  // Interior tangle points — each loop crosses back
                  for (let k = 0; k < numLoops; k++) {
                    const t = (k + 1) / (numLoops + 1);
                    // Alternate sides to create crossings
                    const baseX = 15 + t * 65;
                    const baseY = 20 + rand(10 + k * 3) * 60;
                    // Control points that swing wide to create loops
                    const swingX = baseX + (rand(20 + k) - 0.5) * 40;
                    const swingY = baseY + (rand(30 + k) - 0.5) * 40;
                    points.push([
                      Math.max(5, Math.min(95, swingX)),
                      Math.max(5, Math.min(95, swingY)),
                    ]);
                  }

                  // Exit point (top-right area)
                  points.push([85 + rand(3) * 15, rand(4) * 20]);

                  // Build the path with cubic beziers between points
                  let d = `M${points[0][0].toFixed(1)},${points[0][1].toFixed(1)}`;
                  for (let k = 1; k < points.length; k++) {
                    const prev = points[k - 1];
                    const curr = points[k];
                    // Generate unique control points per segment
                    const cp1x = prev[0] + (rand(40 + k * 7) - 0.3) * 45;
                    const cp1y = prev[1] + (rand(50 + k * 7) - 0.6) * 50;
                    const cp2x = curr[0] + (rand(60 + k * 7) - 0.7) * 45;
                    const cp2y = curr[1] + (rand(70 + k * 7) - 0.4) * 50;
                    d += ` C${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${curr[0].toFixed(1)},${curr[1].toFixed(1)}`;
                  }

                  const isRaveling = ravelingIndex === index;
                  const isHidden = hiddenKnot === index && !isRaveling;
                  if (isHidden) return null;

                  return (
                    <button
                      key={`nav-knot-${index}`}
                      onClick={() => {
                        if (unravelingIndex !== null) return;
                        // Bring back old knot with ravel-in animation
                        const oldHidden = hiddenKnot;
                        if (oldHidden !== null && oldHidden !== index) {
                          setRavelingIndex(oldHidden);
                          setTimeout(() => setRavelingIndex(null), 400);
                        }
                        setUnravelingIndex(index);
                        setShowBigViz(false);
                        setTimeout(() => {
                          setHiddenKnot(index);
                          setCurrentResponseIndex(index);
                          setUnravelingIndex(null);
                          setTimeout(() => setShowBigViz(true), 150);
                        }, 400);
                      }}
                      className={`absolute pointer-events-auto cursor-pointer ${
                        isActive ? "z-10" : "z-0"
                      }`}
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        transform: `rotate(${rotation}deg)`,
                      }}
                      title={`Response ${index + 1}`}
                    >
                      <svg
                        width={size}
                        height={size}
                        viewBox="0 0 100 100"
                        overflow="visible"
                        className={`transition-opacity duration-300 ${
                          isActive
                            ? "opacity-70"
                            : "opacity-20 hover:opacity-55"
                        }`}
                      >
                        <path
                          d={d}
                          stroke={isActive ? "#fff" : "#ccc"}
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray={isUnraveling || isRaveling ? "350" : "none"}
                          style={isUnraveling ? {
                            animation: "unravel-stroke 400ms ease-in forwards",
                          } : isRaveling ? {
                            animation: "ravel-stroke 400ms ease-out forwards",
                          } : undefined}
                        />
                      </svg>
                    </button>
                  );
                })}
              </div>

              {/* Tracks viz */}
              <div className={`relative z-[1] transition-opacity duration-500 ease-in-out ${straightTextMode || !showBigViz ? 'opacity-0' : 'opacity-100'}`}>
                <TracksVisualization
                  key={`${selectedCategory}-${currentResponseIndex}`}
                  text={currentResponse?.selection || ""}
                  width={windowSize.width}
                  height={windowSize.height}
                  straightTextMode={straightTextMode}
                />
              </div>

              {/* Pin button — floats over the viz
              <button
                onClick={() => setStraightTextMode(!straightTextMode)}
                className={`absolute z-[3] transition-all duration-300 group ${
                  straightTextMode
                    ? "top-3 right-3"
                    : "bottom-3 right-3"
                }`}
                title={straightTextMode ? "Unpin — release the string" : "Pin flat — make text readable"}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-all duration-300 ${
                    straightTextMode
                      ? "stroke-white rotate-0 opacity-90"
                      : "stroke-gray-500 rotate-45 opacity-40 group-hover:opacity-80 group-hover:stroke-white"
                  }`}
                >
                  <line x1="12" y1="17" x2="12" y2="22" />
                  <path d="M5 17h14" />
                  <path d="M7.5 17l1-7h7l1 7" />
                  <path d="M9.5 10V5.5a2.5 2.5 0 0 1 5 0V10" />
                </svg>
              </button>
              */}

              {/* Pinned / readable text overlay */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-[#2A2423] transition-all duration-500 ease-in-out ${straightTextMode ? 'opacity-100 z-[2]' : 'opacity-0 pointer-events-none'}`}
              >
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
