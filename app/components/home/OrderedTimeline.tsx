import imageData from "~/data/figures/timeLine.json";
import { useEffect, useRef, useState } from "react";
import type { Dispatch, SetStateAction, MouseEvent, KeyboardEvent } from "react";
import type { TFigure } from "~/types/figureType";
import { classNames } from "~/utils";

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

const sortedImages: TFigure[] = imageData.sort((a, b) => a.year - b.year)

interface Props {
  selectedImage: TFigure;
  setSelectedImage: Dispatch<SetStateAction<TFigure>>;
}

export default function OrderedTimeline({
  setSelectedImage,
  selectedImage,
}: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (!selectedImage) return;
    const selectedImageSelector = `img[src="/images/${selectedImage.chapter}/${selectedImage.fileName}.jpg`;
    if (!sliderRef.current) return;
    sliderRef.current.querySelector<HTMLElement>(selectedImageSelector)?.focus();
  }, [selectedImage]);

  useEffect(() => {
    setSelectedImage(sortedImages[currentImageIndex]);
    // TODO: Rethink after homepage design changes
    // sliderRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [setSelectedImage, currentImageIndex, sliderRef]);

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

  const keyUp = (event: KeyboardEvent) => {
    const { key } = event;
    switch (key) {
      case 'ArrowRight':
        if (currentImageIndex < imageData.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        } else {
          setCurrentImageIndex(0);
        }
        break;
      case 'ArrowLeft':
        if (currentImageIndex > 0) {
          setCurrentImageIndex(currentImageIndex - 1);
        } else {
          setCurrentImageIndex(imageData.length - 1);
        }
        break;
      }
    event.preventDefault();
  }

  return (
    <div
      ref={sliderRef}
      className="flex overflow-x-scroll space-x-10 h-96 py-10 px-5"
      role="button"
      onMouseDown={({ pageX }) => mouseDown(pageX)}
      onMouseUp={() => setMouseIsDown(false)}
      onMouseMove={(event) => mouseMove(event)}
      onKeyDown={keyUp}
      tabIndex={0}
      // TODO: Rethink after homepage design changes
      // onFocus={() => sliderRef.current.scrollIntoView({ block: "end" })}

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
                <img
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                  role="button"
                  key={`otl-${image.fileName}`}
                  tabIndex={0}
                  onClick={() => updateSelected(image)}
                  onFocus={() => setSelectedImage(image)}
                  onKeyUp={() => setSelectedImage(image)}
                  className={classNames(
                    "absolute w-[150px]",
                    isSelected && "border-4 border-red-500",
                  )}
                  style={{ left: `${index * 10}px`, top: "0", zIndex: isSelected ? images.length + 1 : index + 1 }}
                  src={`/images/${image.chapter}/${image.fileName}.jpg`}
                  alt={image.altText ?? ''}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
