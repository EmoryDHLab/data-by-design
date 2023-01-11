import { EditablePeabodySquare } from "~/components/peabody/EditablePeabodySquare";
import { useState } from "react";
import { classNames } from "~/utils";

const actorColors = [
  "rgb(119,43,21)",
  "rgb(222,145,49)",
  "rgb(60,100,100)",
  "rgb(68,108,73)",
  "rgb(217,182,17)",
  "rgb(209,42,5)",
  "rgb(209,42,5)",
];

export default function PeabodySandbox() {
  const [currentColor, setCurrentColor] = useState(actorColors[0]);
  return (
    <div className="w-full bg-black py-10 flex flex-col items-center">
      <div className="flex justify-around w-1/2 py-10">
        {actorColors.map((color) => (
          <span
            onClick={() => setCurrentColor(color)}
            className={classNames(
              "w-5 h-5",
              currentColor === color && "border"
            )}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="w-1/2">
        <EditablePeabodySquare currentColor={currentColor} />
      </div>
    </div>
  );
}
