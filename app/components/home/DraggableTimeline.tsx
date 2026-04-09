import { useResizeObserver } from "~/hooks";
import { useRef, useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { TFigure } from "~/types/figureType";

type startPosition = {
  clientX: number;
  clientY: number;
};

const PART_ONE_START = 0;
const PART_ONE_HEIGHT = 484; // This is based on the container being 384px (h-96, or 24rem)

interface Props {
  selectedImage: TFigure | undefined;
  setSelectedImage: Dispatch<SetStateAction<TFigure | undefined>>;
  shuffledImages: TFigure[];
}

// Timeline of draggable documents arranged randomly
export default function DraggableTimeline({
  selectedImage,
  setSelectedImage,
  shuffledImages,
}: Props) {
  const { windowSize } = useResizeObserver();
  const svgRef = useRef<SVGSVGElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(
    selectedImage ? shuffledImages.indexOf(selectedImage) : 0,
  );
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startPosition, setStartPosition] = useState<startPosition | undefined>(
    undefined,
  );

  const [imagePositions, setImagePositions] = useState<
    { x: number; y: number; r: number }[]
  >([]);

  useEffect(() => {
    setImagePositions(
      Array.from({ length: 30 + 1 }, () => {
        const windowWidth = windowSize.width ?? 200;
        // Use the full width of container, accounting for button controls and image width
        const controlsWidth = 120; // Width of button controls
        const imageWidth = 200; // Approximate image width
        const availableWidth = Math.max(
          windowWidth - controlsWidth - imageWidth,
          600,
        );
        const x = controlsWidth + Math.random() * availableWidth;
        const y = Math.max(
          PART_ONE_START + Math.random() * (PART_ONE_HEIGHT + 50) - 150, // Reduce top offset to prevent cropping
          80, // Give images more room at the top to prevent cropping
        );
        const r = Math.random() * 60 - 30;
        return { x, y, r };
      }),
    );
  }, [windowSize.width, shuffledImages]);

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
        if (currentImageIndex < shuffledImages.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        } else {
          setCurrentImageIndex(0);
        }
        break;
      case "ArrowLeft":
        if (currentImageIndex > 1) {
          setCurrentImageIndex(currentImageIndex - 1);
        } else {
          setCurrentImageIndex(shuffledImages.length - 1);
        }
        break;
    }
  };

  useEffect(() => {
    setSelectedImage(shuffledImages[currentImageIndex]);
  }, [currentImageIndex, setSelectedImage, shuffledImages]);

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
      {shuffledImages.map((image, index) => {
        const isSelected =
          image.chapter === selectedImage?.chapter &&
          image.fileName === selectedImage?.fileName;
        return (
          <g key={image.fileName} id={image.fileName}>
            <foreignObject
              className={`cursor-pointer ${
                isSelected ? "outline outline-4 outline-red-500" : ""
              }`}
              id={`index-${index}`}
              width={200}
              height={
                image.height && image.width
                  ? Math.ceil((image.height / image.width) * 200)
                  : 200
              }
              transform={getTransform(index)}
              onMouseDown={() => {
                setIsDragging(true);
                setCurrentImageIndex(index);
              }}
            >
              <picture>
                <source
                  srcSet={`https://iiif.ecds.io/iiif/3/dxd%2f${image.chapter}%2f${image.fileName}.tiff/full/400,/0/default.png`}
                  type="image/webp"
                />
                <source
                  srcSet={`https://iiif.ecds.io/iiif/3/dxd%2f${image.chapter}%2f${image.fileName}.tiff/full/400,/0/default.jpg`}
                  type="image/jpeg"
                />
                <img
                  style={{ cursor: "pointer" }}
                  src={`/images/${image.chapter}/thumbnails/${image.fileName}.webp`}
                  alt={image.altText || image.cleanTitle || image.fileName}
                  width={200}
                  height={
                    image.height && image.width
                      ? Math.ceil((image.height / image.width) * 200)
                      : 200
                  }
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </picture>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}
