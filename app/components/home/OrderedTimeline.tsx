import imageData from "~/data/timelineImages.json";
import { useRef, useState } from "react";
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

interface Props {
  selectedImage: Image;
  setSelectedImage: Dispatch<SetStateAction<Image>>;
}

export default function OrderedTimeline({
  setSelectedImage,
  selectedImage,
}: Props) {
  const slider = useRef(undefined);
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const mouseDown = (pageX) => {
    setMouseIsDown(true);
    setStartX(pageX - slider.current.offsetLeft);
    setScrollLeft(slider.current.scrollLeft);
  };

  const mouseMove = (event) => {
    if (!mouseIsDown) return;
    event.preventDefault();
    const x = event.pageX - slider.current.offsetLeft;
    const walk = (x - startX) * 3;
    slider.current.scrollLeft = scrollLeft - walk;
  }

  return (
    <div
      ref={slider}
      className="flex overflow-x-scroll space-x-10 h-96 py-10 px-5"
      onMouseDown={({ pageX }) => mouseDown(pageX)}
      onMouseUp={() => setMouseIsDown(false)}
      onMouseMove={(event) => mouseMove(event)}
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
                  onClick={() => setSelectedImage(image)}
                  className={classNames(
                    "absolute w-[150px]",
                    isSelected && "border-4 border-red-500 rounded",
                  )}
                  style={{ left: `${index * 10}px`, top: "0", zIndex: isSelected ? images.length + 1 : index + 1 }}
                  src={`/images/${image.CHAPTER}/${image.FILE_NAME}`}
                  alt={image.FILE_NAME}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
