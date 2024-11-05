import { useEffect, useRef, useState } from "react";
import type {
  Dispatch,
  SetStateAction,
  MouseEvent,
  KeyboardEvent,
} from "react";
import type { TFigure } from "~/types/figureType";
import { classNames } from "~/utils";
import { timelineImages } from "./timelineUtils";

const imageData: TFigure[] = timelineImages();

function groupByYear() {
  const imagesByYear: { [y: string]: TFigure[] } = {};
  for (const image of imageData) {
    if (imagesByYear[image.year] === undefined) {
      imagesByYear[image.year] = [];
    }
    imagesByYear[image.year].push(image);
  }

  return imagesByYear;
}

const imagesByYear = groupByYear();

const sortedImages: TFigure[] = imageData.sort((a, b) => a.year - b.year);

interface Props {
  selectedImage: TFigure | undefined;
  setSelectedImage: Dispatch<SetStateAction<TFigure | undefined>>;
}

export default function OrderedTimeline({
  setSelectedImage,
  selectedImage,
}: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(
    selectedImage ? sortedImages.indexOf(selectedImage) : 0
  );
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (!selectedImage) return;
    const selectedImageSelector = `img[src="https://iiif.ecds.io/iiif/3/dxd/${selectedImage.chapter}/${selectedImage.fileName}.tiff/full/150,/0/default.jpg`;
    if (!sliderRef.current) return;
    sliderRef.current
      .querySelector<HTMLElement>(selectedImageSelector)
      ?.focus();
    sliderRef.current
      .querySelector<HTMLElement>(selectedImageSelector)
      ?.scrollIntoView({ block: "end", behavior: "smooth", inline: "center"});
  }, [selectedImage]);

  const mouseDown = (pageX: number) => {
    if (!sliderRef.current) return;
    setMouseIsDown(true);
    setStartX(pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // Fake sideways scroll with dragging the mouse.
  const mouseMove = (event: MouseEvent) => {
    if (!mouseIsDown || !sliderRef.current) return;
    event.preventDefault();
    const x = event.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const updateSelected = (image: TFigure) => {
    setCurrentImageIndex(sortedImages.indexOf(image));
  };

  const toStart = () => {
    setSelectedImage(sortedImages[0])
    setCurrentImageIndex(0);
  }

  const toEnd = () => {
    setSelectedImage(sortedImages[sortedImages.length - 1])
    setCurrentImageIndex(sortedImages.length - 1);
  }

  const moveRight = () => {
    setSelectedImage(sortedImages[currentImageIndex + 1])
    setCurrentImageIndex(currentImageIndex + 1);
  }

  const moveLeft = () => {
    setSelectedImage(sortedImages[currentImageIndex - 1])
    setCurrentImageIndex(currentImageIndex - 1);
  }

  const keyUp = (event: KeyboardEvent, image: TFigure) => {
    event.preventDefault();
    const { key, shiftKey } = event;
    switch (key) {
      case "ArrowRight":
        if (currentImageIndex < imageData.length - 1) {
          moveRight()
        } else {
          toStart()
        }
        break;
      case "ArrowLeft":
        if (currentImageIndex > 0) {
          moveLeft()
        } else {
          toEnd()
        }
        break;
      case "Tab":
        if (shiftKey) {
          moveLeft()
        } else {
          moveRight()
        }
        break;
    }
  };

  return (
    <div
      ref={sliderRef}
      className="flex overflow-x-scroll space-x-10 h-96 py-10 px-5 w-full ml-3 focus:outline-none"
      role="button"
      onMouseDown={({ pageX }) => mouseDown(pageX)}
      onMouseUp={() => setMouseIsDown(false)}
      onMouseMove={(event) => mouseMove(event)}
      tabIndex={0}
      onKeyDown={(event) => event.preventDefault()}
      onKeyUp={(event) => event.preventDefault()}
    >
      {Object.entries(imagesByYear).map(([year, images]) => (
        <div key={year} style={{ minWidth: `${images.length * 10 + 150}px` }}>
          <h4 className="text-base text-left">{year}</h4>
          <div className="relative">
            {images.map((image, index) => {
              const isSelected =
                selectedImage?.chapter === image.chapter &&
                selectedImage?.fileName === image.fileName;
              return (
                <button
                  key={`otl-${image.fileName}`}
                  tabIndex={0}
                  onClick={() => updateSelected(image)}
                  onFocus={() => setSelectedImage(sortedImages[currentImageIndex])}
                  onKeyUp={(event) => keyUp(event, image)}
                >
                  <picture>
                    <source srcSet={`https://iiif.ecds.io/iiif/3/dxd/${image.chapter}/${image.fileName}.tiff/full/150,/0/default.webp`} type="image/webp" />
                    <source srcSet={`https://iiif.ecds.io/iiif/3/dxd/${image.chapter}/${image.fileName}.tiff/full/150,/0/default.png`} type="image/png" />
                    <source srcSet={`https://iiif.ecds.io/iiif/3/dxd/${image.chapter}/${image.fileName}.tiff/full/150,/0/default.jpg`} type="image/jpg" />
                    <img
                      className={classNames(
                        "absolute w-[150px] min-h-36 min-w-36 border border-red-400 bg-offwhite",
                        isSelected && "border-4 border-red-500"
                      )}
                      style={{
                        left: `${index * 10}px`,
                        top: "0",
                        zIndex: isSelected ? images.length + 1 : index + 1,
                      }}
                      src={`https://iiif.ecds.io/iiif/3/dxd/${image.chapter}/${image.fileName}.tiff/full/150,/0/default.jpg`}
                      alt={image.altText ?? ""}
                      width={150}
                      height={image.height && image.width ? Math.ceil(
                        (image.height / image.width) * 150
                      ) : 150}
                    />
                  </picture>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
