import { EditablePeabodySquare } from "~/components/peabody/EditablePeabodySquare";
import { useState } from "react";
import { classNames } from "~/utils";

type Color = { label: string; rgb: string };

type Colors = Array<Color>;

const actorColors: Colors = [
  {
    label: "brown",
    rgb: "rgb(119,43,21)",
  },
  {
    label: "orange",
    rgb: "rgb(222,145,49)",
  },
  {
    label: "blue",
    rgb: "rgb(60,100,100)",
  },
  {
    label: "green",
    rgb: "rgb(68,108,73)",
  },
  {
    label: "yellow",
    rgb: "rgb(217,182,17)",
  },
  {
    label: "red",
    rgb: "rgb(209,42,5)",
  },
];

export default function PeabodySandbox() {
  const [currentColor, setCurrentColor] = useState<Color>(actorColors[0]);
  return (
    <div
      className="w-full bg-black py-10 flex flex-col items-center my-8 md:my-12"
      id="sandbox"
    >
      <div className="flex justify-around w-1/2 py-10">
        {actorColors.map((color) => (
          <span
            tabIndex={0}
            role="button"
            aria-label={`Select ${color.label}`}
            key={color.rgb}
            onClick={() => setCurrentColor(color)}
            onKeyUp={({ key }: { key: string }) => {
              if (key === "Enter") {
                setCurrentColor(color);
              }
            }}
            className={classNames(
              "w-5 h-5",
              currentColor.rgb === color.rgb && "border"
            )}
            style={{ backgroundColor: color.rgb }}
          />
        ))}
      </div>
      <div className="w-1/2">
        <EditablePeabodySquare currentColor={currentColor} />
        <hr className="mx-6 mt-11"></hr>
        <div className="w-full  text-white text-left flex flex-row gap-0 mt-1 py-6">
          <div className="flex-1  w-full mx-auto md:ml-6">
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
