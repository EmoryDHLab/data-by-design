import imageData from "~/data/timelineImages.json";
import { useEffect, useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Image } from "~/components/home/timelineUtils";
import { classNames } from "~/utils";

function groupByYear() {
  const imagesByYear: { [y: string]: Image[] } = {};
  for (const image of imageData) {
    if (imagesByYear[image.YEAR] === undefined) {
      imagesByYear[image.YEAR] = [];
    }
    imagesByYear[image.YEAR].push(image);
  }

  return imagesByYear;
}

const imagesByYear = groupByYear();

const sortedImages = imageData.sort((a, b) => parseFloat(a.YEAR) - parseFloat(b.YEAR))

interface Props {
  selectedImage: Image;
  setSelectedImage: Dispatch<SetStateAction<Image>>;
}

export default function OrderedTimeline({
  setSelectedImage,
  selectedImage,
}: Props) {
  const sliderRef = useRef(undefined);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    sliderRef.current?.focus();
  }, [sliderRef]);

  useEffect(() => {
    const selectedImageSelector = `img[src="/images/${selectedImage.CHAPTER}/${selectedImage.FILE_NAME}`;
    sliderRef.current?.querySelector(selectedImageSelector)?.focus();
  }, [sliderRef, selectedImage]);

  useEffect(() => {
    setSelectedImage(sortedImages[currentImageIndex]);
    // TODO: Rethink after homepage design changes
    // sliderRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [setSelectedImage, currentImageIndex, sliderRef]);

  const mouseDown = (pageX) => {
    setMouseIsDown(true);
    setStartX(pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // Fake sideways scroll with dragging the mouse.
  const mouseMove = (event) => {
    if (!mouseIsDown) return;
    event.preventDefault();
    const x = event.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    sliderRef.
    current.scrollLeft = scrollLeft - walk;
  };

  const updateSelected = (image) => {
    setCurrentImageIndex(sortedImages.indexOf(image));
  };

  const keyUp = (event) => {
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
                selectedImage.CHAPTER === image.CHAPTER &&
                selectedImage.FILE_NAME === image.FILE_NAME;
              return (
                <img
                  role="button"
                  key={index}
                  tabIndex={0}
                  onClick={() => updateSelected(image)}
                  onFocus={() => setSelectedImage(image)}
                  className={classNames(
                    "absolute w-[150px]",
                    isSelected && "border-4 border-red-500",
                  )}
                  style={{ left: `${index * 10}px`, top: "0", zIndex: isSelected ? images.length + 1 : index + 1 }}
                  src={`/images/${image.CHAPTER}/${image.FILE_NAME}`}
                  alt={image.ALT_TEXT}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
