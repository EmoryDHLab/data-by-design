import { useState } from "react";
import { classNames } from "~/utils";
import figures from "~/data/figures/shanawdithit.json";
import Picture from "../layout/Picture";
import FigureObj from "../layout/FigureObj";
import type { TFigure as FigureType } from "~/types/figureType";

const images: FigureType[] = [
  figures["Willard0"],
  figures["Willard1"],
  figures["Willard2"],
  figures["Willard3"],
  figures["Willard4"],
  figures["Willard5"],
  figures["Willard6"],
  figures["Willard7"],
  figures["Willard8"],
  figures["Willard9"],
];

export default function DocumentViewer() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedImage: FigureType = images[selectedImageIndex];

  return (
    <div
      className="py-10 my-10 bg-black w-full flex flex-col items-center pb-10"
      id="willard-maps"
    >
      <div className="max-w-5xl flex">
        <div>
          <div className="grid grid-cols-4 md:grid-cols-5 gap-8 py-5 px-20">
            {images.map((figure, index) => (
              <button
                key={`doc-viewer-${figure.fileName}`}
                aria-label={`Select ${figure.fileName}`}
                onClick={() => {
                  setSelectedImageIndex(index);
                }}
              >
                <Picture
                  figure={figure}
                  className={classNames(
                    index === selectedImageIndex &&
                      "p-1 hover:border-white-700 border-solid border-white border-2 rounded-md",
                    "max-w-[70px]"
                  )}
                />
              </button>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <FigureObj
              figure={selectedImage as FigureType}
              className="max-w-md text-white"
              id={`doc-viewer-${selectedImage.fileName}`}
            />
            <div className="flex text-white justify-around w-full">
              <button
                aria-label="Select previous image"
                onClick={() => {
                  setSelectedImageIndex(
                    (i) => (i + images.length - 1) % images.length
                  );
                }}
              >
                <img
                  className="w-[27.5px] h-[19.5px] mt-5"
                  src="/images/ui/leftarrow.png"
                  alt=""
                />
              </button>

              <button
                aria-label="Select next image"
                onClick={() => {
                  setSelectedImageIndex((i) => (i + 1) % images.length);
                }}
              >
                <img
                  className="w-[27.5px] h-[19.5px] mt-5"
                  src="/images/ui/rightarrow.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
