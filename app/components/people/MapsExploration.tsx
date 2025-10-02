import { useState } from "react";
import { Info } from "lucide-react";

export default function ImageTooltips() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Define tooltip positions and content
  const tooltips = [
    {
      id: 1,
      x: 54,
      y: 51.2,
      title: "1818",
      description: "Ship theft",
    },
    {
      id: 2,
      x: 56.2,
      y: 48.3,
      title: "1819",
      description: "Attack on winter camp and campture of Demasduit",
    },
    {
      id: 3,
      x: 58.2,
      y: 38.9,
      title: "~1819-1914",
      description: "Grandfather tells John Paul his account",
    },
    {
      id: 4,
      x: 64.8,
      y: 50,
      title: "1829",
      description: "Shanawdithit creates maps",
    },
    {
      id: 5,
      x: 53.7,
      y: 71,
      title: "1871",
      description: "Peyton relates narrative ",
    },
    {
      id: 6,
      x: 56.6,
      y: 74.5,
      title: "1914",
      description: "John Paul's narrative is recorded",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Interactive Image Tooltips
          </h1>
          <p className="text-slate-600 mb-8">
            Hover over the info icons to see details about different areas
          </p>

          {/* Image Container */}
          <div className="relative w-full aspect-square bg-slate-100 rounded-xl overflow-hidden">
            {/* Replace this img src with your own image URL */}
            <img
              src="/images/people/Untitled_Artwork.png"
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
                  onMouseLeave={() => setActiveTooltip(null)}
                  onClick={() =>
                    setActiveTooltip(
                      activeTooltip === tooltip.id ? null : tooltip.id
                    )
                  }
                  className="w-3 h-3 bg-black hover:bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
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
                    className="absolute z-50 w-64 bg-white rounded-lg shadow-2xl border border-slate-200 p-4 pointer-events-none"
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

          {/* Instructions */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-blue-900">
              <strong>Tip:</strong> You can customize the tooltip positions by
              adjusting the x and y values in the tooltips array. Values are
              percentages (0-100) from the top-left corner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
