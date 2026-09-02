import { useState } from "react";
import { classNames } from "~/utils";
import figures from "~/data/figures/people.json";
import Picture from "../figures/Picture";
import Figure from "../figures/Figure";
import type { TFigure as FigureType } from "~/types/figureType";

const images: FigureType[] = [
  figures["0314-Willard0"],
  figures["0315-willard1"],
  figures["0316-willard2"],
  figures["0317-willard3"],
  figures["0318-willard4"],
  figures["0319-willard5"],
  figures["0320-willard6"],
  figures["0321-willard7"],
  figures["0322-willard8"],
  figures["0323-willard9"],
];

const DocumentViewer = () => {
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
                    "max-w-[70px]",
                  )}
                />
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center gap-8 h-[500px] pb-8">
            <button
              aria-label="Select previous image"
              onClick={() => {
                setSelectedImageIndex(
                  (i) => (i + images.length - 1) % images.length,
                );
              }}
            >
              <img
                className="w-[27.5px] h-[19.5px]"
                src="/images/ui/leftarrow.png"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </button>

            <div className="flex flex-col items-center justify-start h-full pt-8">
              <Figure
                figure={selectedImage as FigureType}
                className="max-w-md text-white"
                id={`doc-viewer-${selectedImage.fileName}`}
                imageClassName="w-auto object-contain"
              />
            </div>

            <button
              aria-label="Select next image"
              onClick={() => {
                setSelectedImageIndex((i) => (i + 1) % images.length);
              }}
            >
              <img
                className="w-[27.5px] h-[19.5px]"
                src="/images/ui/rightarrow.png"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
