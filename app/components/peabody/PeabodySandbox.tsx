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
];

export default function PeabodySandbox() {
  const [currentColor, setCurrentColor] = useState(actorColors[0]);
  return (
    <div className="w-full bg-black py-10 flex flex-col items-center">
      <div className="flex justify-around w-1/2 py-10">
        {actorColors.map((color) => (
          <span
            key={color}
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
        <hr className="mx-6 mt-11"></hr>
        <div className="w-full  text-white text-left flex flex-row gap-0 mt-1 py-6">
          <div className="flex-1  w-full mx-auto md:ml-0 md:ml-6">
            <h3 className="mb-4 font-dubois text-xl pt-6 md:text-3xl">Play</h3>
            <h4 className="mb-6 font-dubois font-light text-base md:text-xl">
              The Peabody Chart for fun
            </h4>
          </div>
          <div className="flex-1  pt-6 ">
            {" "}
            <p className="font-dubois text-base italic font-bold small-caps">
              {" "}
              How to play
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
