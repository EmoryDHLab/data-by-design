import { useResizeObserver } from "~/hooks";
import { useRef, useState, useEffect } from "react";
import { randomTimelineImages } from "./timelineUtils";
import type { Dispatch, SetStateAction } from "react";
import type { TFigure } from "~/types/figureType";

type startPosition = {
  clientX: number;
  clientY: number;
};

const IMAGE_COUNT = 30;
const PART_ONE_START = 0;
const PART_ONE_HEIGHT = 484; // This is based on the container being 384px (h-96, or 24rem)

interface Props {
  selectedImage: TFigure;
  setSelectedImage: Dispatch<SetStateAction<TFigure>>;
  // Dumb hack to shuffle timeline
  shouldShuffle: boolean;
}

// Timeline of draggable documents arranged randomly
export default function DraggableTimeline({
  selectedImage,
  setSelectedImage,
  shouldShuffle,
}: Props) {
  const { windowSize } = useResizeObserver();
  const svgRef = useRef<SVGSVGElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startPosition, setStartPosition] = useState<startPosition | undefined>(
    undefined
  );

  const [imagePositions, setImagePositions] = useState<
    { x: number; y: number; r: number }[]
  >([]);

  const [images, setImages] = useState<TFigure[]>(
    randomTimelineImages(IMAGE_COUNT)
  );

  if (selectedImage && !images.includes(selectedImage)) {
    images.splice(0, 0, selectedImage);
  }

  useEffect(() => {
    setImages(randomTimelineImages(IMAGE_COUNT));
    setImagePositions(
      Array.from({ length: 30 + 1 }, () => {
        const windowWidth = windowSize.width ?? 200;
        const x = Math.random() * (windowWidth - 300);
        const y = Math.max(
          PART_ONE_START + Math.random() * PART_ONE_HEIGHT - 200,
          70
        );
        const r = Math.random() * 60 - 30;
        return { x, y, r };
      })
    );
  }, [windowSize.width, shouldShuffle]);

  function getTransform(index: number) {
    const position = imagePositions[index];
    if (position) {
      const { x, y, r } = position;
      return `translate(${x},${y}) rotate(${r})`;
    }
    return "";
  }

  function moveDraggedImage({
    clientX,
    clientY,
  }: {
    clientX: number;
    clientY: number;
  }) {
    if (isDragging) {
      if (!startPosition) {
        setStartPosition({ clientX, clientY });
        return;
      }
      setStartPosition({ clientX, clientY });
      const moveX = clientX - startPosition.clientX;
      const moveY = clientY - startPosition.clientY;
      imagePositions[currentImageIndex].x += moveX;
      imagePositions[currentImageIndex].y += moveY;
    }
  }

  const keyUp = (key: string) => {
    switch (key) {
      case "ArrowRight":
        if (currentImageIndex < images.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        } else {
          setCurrentImageIndex(0);
        }
        break;
      case "ArrowLeft":
        if (currentImageIndex > 1) {
          setCurrentImageIndex(currentImageIndex - 1);
        } else {
          setCurrentImageIndex(images.length - 1);
        }
        break;
    }
  };

  useEffect(() => {
    setSelectedImage(images[currentImageIndex]);
  }, [currentImageIndex, setSelectedImage, images]);

  // Move the selected image to the top of the pile. I don't love this
  useEffect(() => {
    if (!svgRef.current || !selectedImage) return;
    const imageToFront = svgRef.current.getElementById(selectedImage.fileName);
    if (imageToFront) {
      svgRef.current?.appendChild(svgRef.current.removeChild(imageToFront));
    }
  }, [selectedImage]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="120%"
      onMouseMove={moveDraggedImage}
      onMouseUp={() => {
        setIsDragging(false);
        setStartPosition(undefined);
      }}
      onKeyUp={({ key }) => keyUp(key)}
      // Scroll the timeline up to show reveal image detail above
      // TODO: Rethink after homepage design changes
      // onFocus={() => svgRef.current.scrollIntoView({ block: "end" })}
      tabIndex={0}
      className="relative z-10 right-0 focus:outline-none"
      style={{ bottom: "39px" }}
    >
      {images.map((img, index) => {
        const isSelected =
          img.chapter === selectedImage?.chapter &&
          img.fileName === selectedImage?.fileName;
        return (
          <g key={img.fileName} id={img.fileName}>
            <image
              className={isSelected ? "outline outline-4 outline-red-500" : ""}
              id={`index-${index}`}
              style={{ cursor: "pointer" }}
              href={`/images/${img.chapter}/${img.fileName}.jpg`}
              width={150}
              transform={getTransform(index)}
              onMouseDown={() => {
                setIsDragging(true);
                setCurrentImageIndex(index);
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}
