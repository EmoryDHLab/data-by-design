import { useState } from "react";
import { Info } from "lucide-react";

export default function ImageTooltips() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Define tooltip positions and content
  const tooltips = [
    {
      id: 1,
      x: 55, // percentage from left
      y: 60, // percentage from top
      title: "Core Layer",
      description: "The innermost ring represents the foundation",
    },
    {
      id: 2,
      x: 58,
      y: 39,
      title: "Data Points 1",
      description: "Multiple data markers distributed across segments",
    },
    {
      id: 3,
      x: 75,
      y: 80,
      title: "Outer Ring",
      description: "Concentric circles showing progression",
    },
    {
      id: 4,
      x: 50,
      y: 20,
      title: "Section A",
      description: "Upper segment with specific metrics",
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
                {/* Marker Button */}
                <button
                  onMouseEnter={() => setActiveTooltip(tooltip.id)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onClick={() =>
                    setActiveTooltip(
                      activeTooltip === tooltip.id ? null : tooltip.id
                    )
                  }
                  className="relative z-10 w-3 h-3 bg-blue-600 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                ></button>

                {/* Tooltip Content */}
                {activeTooltip === tooltip.id && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-2xl border border-slate-200 p-4 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45"></div>
                    <h3 className="font-semibold font-power text-slate-900 mb-1">
                      {tooltip.title}
                    </h3>
                    <p className="text-sm font-neueMontreal text-slate-600">
                      {tooltip.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
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
