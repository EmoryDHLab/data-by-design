import { useState } from "react";
import figures from "~/data/figures/people.json";

export default function ImageTooltips() {
  const [activeTooltip, setActiveTooltip] = useState<number | undefined>(
    undefined,
  );

  // Define tooltip positions and content
  const tooltips = [
    {
      id: 1,
      x: 56.8,
      y: 50.5,
      title: "1818",
      description: "'Theft' of Peyton's boat",
    },
    {
      id: 2,
      x: 56.5,
      y: 63.5,
      title: "1819",
      description: "Attack on winter camp and capture of Demasduit",
    },
    {
      id: 3,
      x: 45,
      y: 35.6,
      title: "1829",
      description: "Shanawdithit creates her maps ",
    },
    {
      id: 4,
      x: 72.3,
      y: 40.4,
      title: "1871",
      description: "Peyton relates his narrative",
    },
    {
      id: 5,
      x: 73.6,
      y: 78,
      title: "~1819-1914",
      description: "Grandfather tells John Paul his account ",
    },
    {
      id: 6,
      x: 81.6,
      y: 80.8,
      title: "1914",
      description: "John Paul's narrative is recorded",
    },
  ];

  return (
    <div className="min-h-screen z-90 p-8">
      <div className="max-w-5xl mx-auto">
        <div>
          {/* Image Container */}
          <div className="relative w-full rounded-xl overflow-hidden">
            <img
              src={`/images/chapters/${figures["0301a"].fileName}.webp`}
              alt="Annotated diagram"
              className="w-full h-full object-cover"
            />

            {/* Tooltip Markers */}
            {tooltips.map((tooltip) => (
              <div
                key={tooltip.id}
                className="absolute"
                style={{
                  left: `${tooltip.x}%`,
                  top: `${tooltip.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <button
                  onMouseEnter={() => setActiveTooltip(tooltip.id)}
                  onMouseLeave={() => setActiveTooltip(undefined)}
                  onClick={() =>
                    setActiveTooltip(
                      activeTooltip === tooltip.id ? undefined : tooltip.id,
                    )
                  }
                  className="w-4 h-4 bg-gray-800  hover:bg-gray-800 text-white rounded-full  flex items-center justify-center transition-colors duration-200"
                ></button>
              </div>
            ))}

            {/* Tooltip Content - Rendered separately with higher z-index */}
            {tooltips.map((tooltip) => {
              // Check if tooltip would be cut off at bottom (if y position > 70%)
              const isNearBottom = tooltip.y > 70;

              return (
                activeTooltip === tooltip.id && (
                  <div
                    key={`tooltip-${tooltip.id}`}
                    className="absolute z-50 w-64 bg-white rounded-lg border border-slate-200 p-4 pointer-events-none"
                    style={{
                      left: `${tooltip.x}%`,
                      top: isNearBottom
                        ? `calc(${tooltip.y}% - 20px)`
                        : `calc(${tooltip.y}% + 20px)`,
                      transform: isNearBottom
                        ? "translate(-50%, -100%)"
                        : "translateX(-50%)",
                    }}
                  >
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-slate-200 rotate-45 ${
                        isNearBottom
                          ? "bottom-0 translate-y-1/2 border-r border-b"
                          : "-top-2 border-l border-t"
                      }`}
                    ></div>
                    <h3 className="font-semibold font-power text-slate-900 mb-1">
                      {tooltip.title}
                    </h3>
                    <p className="text-sm font-neueMontreal text-slate-600">
                      {tooltip.description}
                    </p>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
