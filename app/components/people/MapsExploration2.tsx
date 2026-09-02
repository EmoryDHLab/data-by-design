import { useState } from "react";

export default function ImageTooltips() {
  const [activeTooltip, setActiveTooltip] = useState<number | undefined>(
    undefined,
  );

  // Define tooltip positions and content
  const tooltips = [
    {
      id: 0,
      x: 50,
      y: 54.5,
      title: "1810-1811",
      description: "Beothuk encounter David Buchan and his men",
    },
    {
      id: 1,
      x: 53,
      y: 51,
      title: "1818",
      description: "'Theft' of Peyton's boat",
    },
    {
      id: 2,
      x: 48.2,
      y: 46.2,
      title: "1819",
      description: "Attack on winter camp and campture of Demasduit",
    },
    {
      id: 3,
      x: 53.3,
      y: 59,
      title: "~1819-1914",
      description: "Grandfather tells John Paul his account",
    },
    {
      id: 4,
      x: 46,
      y: 38,
      title: "1829",
      description: "Shanawdithit creates her maps",
    },
    {
      id: 5,
      x: 63.2,
      y: 48.3,
      title: "1829",
      description: "Cormack annotates Shanawdithit’s maps",
    },
    {
      id: 6,
      x: 58.8,
      y: 38.5,

      title: "1871",
      description: "Peyton relates his narrative to Howley",
    },
    {
      id: 7,
      x: 63.2,
      y: 66.2,
      title: "1914",
      description: "Speck records John Paul’s narrative",
    },
    {
      id: 8,
      x: 63.7,
      y: 40.8,
      title: "1915",
      description: "Howley publishes his book",
    },
    {
      id: 9,
      x: 67.6,
      y: 46.5,
      title: "1915",
      description: "Howley redraws Shanawdithit’s maps",
    },
    {
      id: 10,
      x: 63.4,
      y: 73.7,
      title: "1922",
      description: "Speck publishes his book",
    },
    {
      id: 11,
      x: 71.3,
      y: 80.3,
      title: "2008",
      description: "Speck's book scanned and uploaded to Internet Archive",
    },
    {
      id: 12,
      x: 79.8,
      y: 25,
      title: "2021",
      description: "LK begins research on this chapter",
    },
    {
      id: 13,
      x: 85.4,
      y: 30.4,
      title: "2022",
      description: "TS begins designing visualizations for this chapter",
    },
    {
      id: 14,

      x: 41.5,
      y: 7.4,
      title: "2023",
      description: "LK visits The Rooms in St. John’s, Newfoundland",
    },
    {
      id: 15,

      x: 50,
      y: 6.8,
      title: "2024",
      description:
        "DxD team receives approval to include scanned image of map in this chapter",
    },
    {
      id: 16,
      x: 91.5,
      y: 34.5,
      title: "2025",
      description: "Chapter is complete",
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto">
        <div>
          {/* Image Container */}
          <div className="relative w-full rounded-xl overflow-hidden">
            {/* Replace this img src with your own image URL */}
            <img
              src="/images/chapters/people/2.png"
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
                  className="md:w-3 md:h-3 w-2 h-2 hover:w-3.5 hover:h-3.5 bg-gray-800  hover:bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
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
                    className="absolute z-50 w-64 bg-white rounded-lg shadow-lg border border-slate-200 p-4 pointer-events-none"
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
