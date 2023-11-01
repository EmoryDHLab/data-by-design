import { useResizeObserver } from "~/hooks";
import { useRef, useState, useEffect } from "react";
import { timelineImages } from "./timelineUtils";
import type { Dispatch, SetStateAction } from "react";
import type { TFigure } from "~/types/figureType";

const imageData = timelineImages();

interface TimelineState {
  imageSliceStart: number;
  imagePositions: { x: number; y: number; r: number }[];
  draggedImage: { index: number } | undefined;
}

type startPosition = {
  clientX: number;
  clientY: number;
};

const IMAGE_COUNT = 30;
const PART_ONE_START = 40;
const PART_ONE_HEIGHT = window.innerHeight / 2;

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

  const [{ imageSliceStart, imagePositions }, setState] =
    useState<TimelineState>(() => ({
      imageSliceStart: Math.floor(Math.random() * 30),
      imagePositions: [],
      draggedImage: undefined,
    }));

  const images = imageData.slice(
    imageSliceStart,
    imageSliceStart + IMAGE_COUNT
  );

  useEffect(() => {
    setState((state) => ({
      ...state,
      imagePositions: Array.from({ length: IMAGE_COUNT }, () => {
        const windowWidth = windowSize.width ?? 200;
        const x = Math.random() * (windowWidth - 200);
        const y = PART_ONE_START + Math.random() * (PART_ONE_HEIGHT - 200);
        const r = Math.random() * 60 - 30;
        return { x, y, r };
      }),
    }));
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
      setState((state) => ({ ...state, imagePositions: [...imagePositions] }));
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
      height="50vh"
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
    >
      {images.map((img, index) => {
        const isSelected =
          img.chapter === selectedImage?.chapter &&
          img.fileName === selectedImage?.fileName;
        return (
          <g key={img.fileName} id={img.fileName}>
            <image
              className={isSelected ? "outline outline-4 outline-red-500" : ""}
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
