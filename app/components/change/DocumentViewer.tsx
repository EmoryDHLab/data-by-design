import { useState } from "react";
import { classNames } from "~/utils";
import figures from "~/data/figures/change.json";
import Picture from "../figures/Picture";
import Figure from "../figures/Figure";
import type { TFigure as FigureType } from "~/types/figureType";
import SlideShow from "../layout/SlideShow";

type ImageSet = {
  [key: string]: FigureType[];
};

const imageSets: ImageSet = {
  setOne: [
    figures["863"],
    figures["864"],
    figures["865"],
    figures["866"],
    figures["867"],
    figures["868"],
    figures["869"],
    figures["870"],
    figures["871"],
    figures["872"],
    figures["873"],
    figures["874"],
    figures["875"],
    figures["876"],
    figures["877"],
    figures["878"],
    figures["879"],
    figures["880"],
    figures["881"],
    figures["882"],
    figures["883"],
    figures["884"],
    figures["885"],
    figures["886"],
    figures["887"],
    figures["888"],
    figures["889"],
    figures["890"],
    figures["891"],
    figures["892"],
    figures["893"],
    figures["894"],
    figures["895"],
    figures["896"],
    figures["897"],
    figures["898"],
  ],
  setTwo: [
    figures["899"],
    figures["900"],
    figures["901"],
    figures["902"],
    figures["903"],
    figures["904"],
    figures["905"],
    figures["906"],
    figures["907"],
    figures["908"],
    figures["909"],
    figures["910"],
    figures["911"],
    figures["912"],
    figures["913"],
    figures["914"],
    figures["915"],
    figures["916"],
    figures["917"],
    figures["918"],
    figures["919"],
    figures["920"],
    figures["921"],
    figures["922"],
    figures["923"],
    figures["924"],
    figures["925"],
  ],
};

export default function DocumentViewer() {
  const [selectedSet, setSelectedSet] = useState<string>("setOne");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedImage: FigureType = imageSets[selectedSet][selectedImageIndex];

  return (
    <div
      className="py-20 my-10 bg-black w-full flex flex-col items-center pb-10"
      id="doc-viewer"
    >
      <div className="hidden md:flex max-w-5xl">
        <div className="py-10 px-5 flex flex-col items-center w-1/6 space-y-5">
          <button
            onClick={() => {
              setSelectedSet("setOne");
            }}
            aria-hidden
            aria-label="Set One"
          >
            {selectedSet === "setOne" ? (
              <div className="space-y-5 max-w-[70px]">
                <img
                  src="/images/ui/stack1.png"
                  alt=""
                  role="presentation"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="w-full"
                  src="/images/ui/set1.png"
                  alt=""
                  role="presentation"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : (
              <div className="space-y-5 max-w-[70px]">
                <img
                  src="/images/ui/eyeframe.png"
                  alt=""
                  role="presentation"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="w-full"
                  src="/images/ui/set1.png"
                  alt=""
                  role="presentation"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
          </button>
          <button
            onClick={() => setSelectedSet("setTwo")}
            aria-hidden
            aria-label="Set Two"
          >
            {selectedSet === "setTwo" ? (
              <div className="space-y-5 max-w-[70px]">
                <img
                  src="/images/ui/stack2.png"
                  alt=""
                  role="presentation"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="w-full"
                  src="/images/ui/set2.png"
                  alt=""
                  role="presentation"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : (
              <div className="space-y-5 max-w-[70px]">
                <img
                  src="/images/ui/eyeframe.png"
                  alt=""
                  role="presentation"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="w-full"
                  src="/images/ui/set2.png"
                  alt=""
                  role="presentation"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
          </button>
        </div>
        <div>
          <div className="grid grid-cols-4 md:grid-cols-9 gap-8 py-5 px-20">
            {imageSets[selectedSet].map((figure, index) => (
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
                    "max-w-[70px] text-offwhite"
                  )}
                />
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center gap-8 h-[500px] mb-40">
            <button
              aria-label="Select previous image"
              onClick={() => {
                setSelectedImageIndex(
                  (i) =>
                    (i + imageSets[selectedSet].length - 1) %
                    imageSets[selectedSet].length
                );
              }}
            >
              <img
                className="w-[27.5px] h-[19.5px]"
                src="/images/ui/leftarrow.png"
                alt=""
                role="presentation"
                loading="lazy"
                decoding="async"
              />
            </button>

            <div className="flex flex-col items-center justify-start h-full pt-2">
              <Figure
                figure={selectedImage as FigureType}
                className="max-w-xs text-white"
                id={`doc-viewer-${selectedImage.fileName}`}
              />
            </div>

            <button
              aria-label="Select next image"
              onClick={() => {
                setSelectedImageIndex(
                  (i) => (i + 1) % imageSets[selectedSet].length
                );
              }}
            >
              <img
                className="w-[27.5px] h-[19.5px]"
                src="/images/ui/rightarrow.png"
                alt=""
                role="presentation"
                loading="lazy"
                decoding="async"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="block md:hidden bg-offblack text-offwhite w-full">
        <div className="h-screen">
          <p className=" font-power text-neutral-400 text-sm uppercase   pb-2 text-center">
            Set One
          </p>
          <SlideShow className="mb-4" figures={imageSets.setOne} />
        </div>
        <br></br>
        <div className="h-screen">
          <p className=" font-power text-neutral-400  text-sm uppercase  py-2 text-center">
            Set Two
          </p>
          <SlideShow className="" figures={imageSets.setTwo} />
        </div>
      </div>
    </div>
  );
}
