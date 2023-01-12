import imageData from "~/data/timelineImages.json";
import { useWindowSize } from "~/hooks";
import type { Dispatch, MouseEvent, SetStateAction } from "react";
import { useState, useEffect, useRef } from "react";
import { Image } from "~/components/home/timelineUtils";

interface TimelineState {
  imageSliceStart: number;
  imagePositions: { x: number; y: number; r: number }[];
  draggedImage: { index: number } | undefined;
}

const IMAGE_COUNT = 30;
const PART_ONE_START = 40;
const PART_ONE_HEIGHT = 600;

interface Props {
  selectedImage: Image;
  setSelectedImage: Dispatch<SetStateAction<Image>>;
}

// Timeline of draggable documents arranged randomly
export default function DraggableTimeline({
  selectedImage,
  setSelectedImage,
}: Props) {
  const windowSize = useWindowSize();
  const draggableImageRef = useRef<number | undefined>(undefined);
  const [{ imageSliceStart, imagePositions }, setState] =
    useState<TimelineState>(() => ({
      imageSliceStart: Math.floor(Math.random() * 30),
      imagePositions: [],
      draggedImage: undefined,
    }));

  useEffect(() => {
    setState((state) => ({
      ...state,
      imagePositions: Array.from({ length: IMAGE_COUNT }, () => {
        const windowWidth = windowSize.width ?? 200;
        const x = Math.random() * (windowWidth - 100);
        const y = PART_ONE_START + Math.random() * (PART_ONE_HEIGHT - 200);
        const r = Math.random() * 60 - 30;

        return { x, y, r };
      }),
    }));
  }, [windowSize.width]);

  function getTransform(index: number) {
    const position = imagePositions[index];
    if (position) {
      const { x, y, r } = position;
      return `translate(${x},${y}) rotate(${r})`;
    }
    return "";
  }

  function moveDraggedImage() {
    if (draggableImageRef.current) {
      imagePositions[draggableImageRef.current].x = event.clientX - 100;
      imagePositions[draggableImageRef.current].y = event.clientY - 180;
      setState((state) => ({ ...state, imagePositions: [...imagePositions] }));
    }
  }

  return (
    <svg
      width="100%"
      height="600px"
      onMouseMove={moveDraggedImage}
      onMouseUp={() => {
        draggableImageRef.current = undefined;
      }}
    >
      {imageData
        .slice(imageSliceStart, imageSliceStart + IMAGE_COUNT)
        .map((img, index) => {
          const isSelected =
            img.CHAPTER === selectedImage.CHAPTER &&
            img.FILE_NAME === selectedImage.FILE_NAME;
          return (
            <g key={img.FILE_NAME}>
              <image
                className={isSelected ? "border-4 border-red-500 rounded" : ""}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(img)}
                href={`/images/${img.CHAPTER}/${img.FILE_NAME}`}
                width={150}
                transform={getTransform(index)}
                onMouseDown={() => {
                  draggableImageRef.current = index;
                }}
              />
            </g>
          );
        })}
    </svg>
  );
}
