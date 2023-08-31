import { useState } from "react";
import { classNames } from "~/utils";
import figures from "~/data/figures/dubois.json";
import Picture from "../layout/Picture";
import FigureObj from "../layout/FigureObj";
import type { Figure as FigureType } from "~/types/figureType";

type ImageSet = {
  [key: string]: FigureType[]
}

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
  }

export default function DocumentViewer() {
  const [selectedSet, setSelectedSet] = useState<string>('setOne');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedImage: FigureType = imageSets[selectedSet][selectedImageIndex];

  return (
    <div className="py-10 my-10 bg-black w-full flex flex-col items-center pb-10">
      <div className="max-w-5xl flex">
        <div className="py-10 px-5 flex flex-col items-center w-1/6 space-y-5">
          <button
            onClick={() => {
              setSelectedSet('setOne');
            }}
          >
            {selectedSet === 'setOne' ? (
              <div className="space-y-5 max-w-[70px]">
                <img src="/images/dubois/stack1.png" alt="" />
                <img className="w-full" src="/images/dubois/set1.png" alt="" />
              </div>
            ) : (
              <div className="space-y-5 max-w-[70px]">
                <img src="/images/dubois/eyeframe.png" alt="" />
                <img className="w-full" src="/images/dubois/set1.png" alt="" />
              </div>
            )}
          </button>
          <button onClick={() => setSelectedSet('setTwo')}>
            {selectedSet === 'setTwo' ? (
              <div className="space-y-5 max-w-[70px]">
                <img src="/images/dubois/stack2.png" alt="" />
                <img className="w-full" src="/images/dubois/set2.png" alt="" />
              </div>
            ) : (
              <div className="space-y-5 max-w-[70px]">
                <img src="/images/dubois/eyeframe.png" alt="" />
                <img className="w-full" src="/images/dubois/set2.png" alt="" />
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
                    "max-w-[70px]"
                  )}
                />
              </button>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <FigureObj figure={selectedImage as FigureType} className="max-w-xs text-white" />
            <div className="flex text-white justify-around w-full">
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
                  className="w-[27.5px] h-[19.5px] mt-5"
                  src="/images/dubois/leftarrow.png"
                  alt=""
                />
              </button>

              <button
                aria-label="Select next image"
                onClick={() => {
                  setSelectedImageIndex(
                    (i) => (i + 1) % imageSets[selectedSet].length
                  );
                }}
              >
                <img
                  className="w-[27.5px] h-[19.5px] mt-5"
                  src="/images/dubois/rightarrow.png"
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
