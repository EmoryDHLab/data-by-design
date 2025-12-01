import { useState } from "react";

export default function ImageTooltips() {
  const [activeTooltip, setActiveTooltip] = useState<number | undefined>(
    undefined
  );

  // Define tooltip positions and content
  const tooltips = [
    {
      id: 0,
      x: 49.2,
      y: 53.2,
      title: "",
      description: "Birch Tree Grows from seed",
    },
    {
      id: 1,
      x: 50,
      y: 55.7,
      title: "1810-1811",
      description: "Beothuk encounter David Buchan and his men",
    },
    {
      id: 2,
      x: 50.7,
      y: 51,
      title: "1818",
      description: "Beothuk observe Peyton and his men from lookout tree",
    },
    {
      id: 3,
      x: 52.6,
      y: 52.3,
      title: "1818",
      description: "'Theft' of Peyton's boat",
    },
    {
      id: 4,

      x: 48.2,
      y: 48.2,
      title: "1819",
      description: "Attack on winter camp and capture of Demasduit",
    },
    {
      id: 5,
      x: 52.8,
      y: 59.8,
      title: "~1819-1914",
      description: "Grandfather tells John Paul his account",
    },
    {
      id: 6,
      x: 54.3,
      y: 46.7,
      title: "~1819-1914",
      description: "Shanawdithit tells Peyton about the lookout tree",
    },
    {
      id: 7,
      x: 46.4,
      y: 40.8,
      title: "1829",
      description: "Shanawdithit creates her maps",
    },
    {
      id: 8,
      x: 61.4,
      y: 50,
      title: "1829",
      description: "Cormack annotates Shanawdithit’s maps",
    },
    {
      id: 9,
      x: 57.5,
      y: 41.3,
      title: "1871",
      description: "Peyton relates his narrative to Howley",
    },
    {
      id: 10,
      x: 63,
      y: 66,
      title: "1914",
      description: "Speck photographs lookout tree (spruce) at Beothuk Point",
    },
    {
      id: 11,
      x: 60,
      y: 68,
      title: "1914",
      description: "Speck climbs lookout tree (spruce) at Beothuk Point ",
    },
    {
      id: 12,
      x: 58,
      y: 70,
      title: "1914",
      description: "Speck records John Paul’s narrative",
    },
    {
      id: 13,
      x: 61.8,
      y: 43.3,
      title: "1915",
      description: "Howley publishes his book",
    },
    {
      id: 14,
      x: 65,
      y: 48,
      title: "1915",
      description: "Howley redraws Shanawdithit’s maps",
    },
    {
      id: 15,
      x: 61.6,
      y: 72.9,
      title: "1922",
      description: "Speck publishes his book",
    },
    {
      id: 16,
      x: 68.5,
      y: 78.8,
      title: "2008",
      description: "Speck's book scanned and uploaded to Internet Archive",
    },
    {
      id: 17,
      x: 76.7,
      y: 29.5,
      title: "2021",
      description: "LK begins research on this chapter",
    },
    {
      id: 18,

      x: 77.58,
      y: 79.3,
      title: "2021",
      description: "LK sees Speck's photos of lookout tree (spruce)",
    },
    {
      id: 19,
      x: 80.8,
      y: 33.9,
      title: "2022",
      description: "TS begins designing visualizations for this chapter",
    },
    {
      id: 20,

      x: 42.4,
      y: 13.2,

      title: "2023",
      description: "LK visits The Rooms in St. John’s, Newfoundland",
    },
    {
      id: 21,
      x: 50,
      y: 12.6,
      title: "2024",
      description:
        "DxD team receives approval to include scanned image of map in this chapter",
    },
    {
      id: 22,

      x: 80.7,
      y: 29.7,
      title: "2024",
      description: "LK sees clouds across lake in St. John’s ",
    },
    {
      id: 23,
      x: 76,
      y: 23.5,
      title: "2025",
      description: "DxD team interprets Speck's photos for this chapter",
    },
    {
      id: 24,
      x: 86.1,
      y: 37.4,
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
              src="/images/people/extras/3.png"
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
                      activeTooltip === tooltip.id ? undefined : tooltip.id
                    )
                  }
                  className="md:w-2 md:h-2 w-2 h-2  hover:w-2.5 hover:h-2.5 bg-blue-900  hover:bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
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

          {/* Instructions */}
          <div className="mt-6 p-4 rounded-lg flex flex-row border-blue-100">
            <div>
              <img
                src="/images/people/extras/key.png"
                alt="Annotated diagram"
                className="w-auto h-60 object-cover"
              />
            </div>
            <div className=" py-6 font-power  text-sm">
              <ul>
                <li className="pb-2"> All sources</li>
                <li className="pb-2"> Speck</li>
                <li className="pb-2">Howley</li>
                <li className="pb-3"> Shanawdithit</li>
                <li className="pb-3"> Unrecorded history</li>
                <li className="pb-3"> Recorded history</li>
                <li className="">Source </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
