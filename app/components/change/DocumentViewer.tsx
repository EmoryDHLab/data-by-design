import { useState } from "react";
import Carousel from "nuka-carousel";
import { classNames } from "~/utils";
import figures from "~/data/figures/change.json";
import Picture from "../figures/Picture";
import Figure from "../figures/Figure";
import FigureModal from "../figures/FigureModal";
import ClientOnly from "~/components/ClientOnly";
import type { TFigure as FigureType } from "~/types/figureType";

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

// Matches a trailing Library of Congress call number, e.g. "LC-DIG-ppmsca-33863."
const LC_CALL_NUMBER = /^(.*\S)\s+(LC-[A-Za-z]+-[A-Za-z0-9-]+\.?)\s*$/;

function CreditLine({ text }: { text: string }) {
  const match = text.match(LC_CALL_NUMBER);
  if (!match) return <>{text}</>;
  const [, lead, callNumber] = match;
  return (
    <>
      {lead} <span className="md:block">{callNumber}</span>
    </>
  );
}

function PlateCaption({ figure }: { figure: FigureType }) {
  return (
    <figcaption className="mt-4 px-6 mx-auto max-w-md text-center">
      {figure.title && (
        <span className="block font-power text-base leading-snug text-offwhite">
          {figure.title}
        </span>
      )}
      {figure.creditLine && (
        <span className="block font-sans text-xs leading-relaxed text-neutral-400 mt-2">
          <CreditLine text={figure.creditLine} />
        </span>
      )}
    </figcaption>
  );
}

export default function DocumentViewer() {
  const [selectedSet, setSelectedSet] = useState<string>("setOne");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [mobileSlideIndex, setMobileSlideIndex] = useState(0);

  const selectedImage: FigureType = imageSets[selectedSet][selectedImageIndex];

  return (
    <div
      className="my-10 bg-offblack w-full min-h-screen flex flex-col items-center justify-center"
      id="doc-viewer"
    >
      <div className="hidden md:grid grid-cols-[auto_1fr_1fr] max-w-7xl w-full h-screen items-center">
        {/* Column 1: Set selectors */}
        <div className="py-10 px-5 flex flex-col items-center space-y-12">
          <button
            onClick={() => {
              setSelectedSet("setOne");
              setSelectedImageIndex(0);
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
            onClick={() => {
              setSelectedSet("setTwo");
              setSelectedImageIndex(0);
            }}
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

        {/* Column 2: Image grid */}
        <div className="py-5 px-8 overflow-y-auto">
          <div className="grid grid-cols-6 gap-4">
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
                    "max-w-[70px] text-offwhite",
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Column 3: Selected image with caption (full height) */}
        <div className="flex flex-col items-center justify-center h-full px-8">
          <div className="flex items-center gap-4">
            <button
              aria-label="Select previous image"
              onClick={() => {
                setSelectedImageIndex(
                  (i) =>
                    (i + imageSets[selectedSet].length - 1) %
                    imageSets[selectedSet].length,
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

            <Figure
              figure={selectedImage as FigureType}
              className="max-w-sm text-white"
              id={`doc-viewer-${selectedImage.fileName}`}
              showCaption={false}
            />

            <button
              aria-label="Select next image"
              onClick={() => {
                setSelectedImageIndex(
                  (i) => (i + 1) % imageSets[selectedSet].length,
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
          <PlateCaption figure={selectedImage} />
          <p className="font-sans text-xs text-neutral-400 text-center mt-3">
            Plate {selectedImageIndex + 1} / {imageSets[selectedSet].length}
          </p>
        </div>
      </div>
      <div className="block md:hidden bg-offblack text-offwhite w-full py-8">
        {/* Set switcher (reuses desktop UI assets) */}
        <div
          className="flex justify-center items-end gap-10 px-6 mb-6"
          role="tablist"
          aria-label="Document set"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedSet === "setOne"}
            aria-label="Set One"
            onClick={() => {
              setSelectedSet("setOne");
              setSelectedImageIndex(0);
              setMobileSlideIndex(0);
            }}
            className="flex flex-col items-center space-y-3 max-w-[60px] min-h-11"
          >
            <img
              src={
                selectedSet === "setOne"
                  ? "/images/ui/stack1.png"
                  : "/images/ui/eyeframe.png"
              }
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
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={selectedSet === "setTwo"}
            aria-label="Set Two"
            onClick={() => {
              setSelectedSet("setTwo");
              setSelectedImageIndex(0);
              setMobileSlideIndex(0);
            }}
            className="flex flex-col items-center space-y-3 max-w-[60px] min-h-11"
          >
            <img
              src={
                selectedSet === "setTwo"
                  ? "/images/ui/stack2.png"
                  : "/images/ui/eyeframe.png"
              }
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
          </button>
        </div>

        {/* Plate counter */}
        <p
          className="font-sans text-xs text-neutral-400 text-center mb-6"
          aria-live="polite"
        >
          Plate {mobileSlideIndex + 1} / {imageSets[selectedSet].length}
        </p>

        {/* Carousel — uncontrolled; remounts on set change to reset to slide 0 */}
        <ClientOnly>
          <Carousel
            key={selectedSet}
            afterSlide={(i: number) => setMobileSlideIndex(i)}
            renderCenterLeftControls={({ previousSlide }) => (
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous plate"
                className="font-icons text-3xl ml-1 min-w-11 min-h-11 flex items-center justify-center text-offwhite/80 hover:text-offwhite"
              >
                c
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next plate"
                className="font-icons text-3xl mr-1 min-w-11 min-h-11 flex items-center justify-center text-offwhite/80 hover:text-offwhite"
              >
                b
              </button>
            )}
            renderBottomCenterControls={() => <></>}
            // Progress bar — disabled for now
            // renderBottomCenterControls={() => (
            //   <div
            //     className="w-32 h-0.5 bg-neutral-700 rounded-full overflow-hidden mt-3"
            //     aria-hidden
            //   >
            //     <div
            //       className="h-full bg-offwhite transition-all duration-300"
            //       style={{
            //         width: `${
            //           ((selectedImageIndex + 1) /
            //             imageSets[selectedSet].length) *
            //           100
            //         }%`,
            //       }}
            //     />
            //   </div>
            // )}
            wrapAround
          >
            {imageSets[selectedSet].map((figure, idx) => (
              <figure key={figure.fileName} className="text-center px-12">
                <FigureModal
                  figure={figure}
                  id={`mobile-doc-${figure.fileName}`}
                >
                  <picture>
                    <source
                      srcSet={`/images/chapters/${figure.fileName}.webp`}
                    />
                    <source
                      srcSet={`/images/chapters/${figure.fileName}.jpg`}
                    />
                    <img
                      className="max-h-96 mx-auto max-w-xs"
                      src={`/images/chapters/${figure.fileName}.jpg`}
                      alt={figure.altText ?? ""}
                      title={figure.title ?? ""}
                      loading={idx === mobileSlideIndex ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </picture>
                </FigureModal>
                <PlateCaption figure={figure} />
              </figure>
            ))}
          </Carousel>
        </ClientOnly>
      </div>
    </div>
  );
}
