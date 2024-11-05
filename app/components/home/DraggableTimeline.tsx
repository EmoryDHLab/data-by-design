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
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(selectedImage ? shuffledImages.indexOf(selectedImage) : 0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startPosition, setStartPosition] = useState<startPosition | undefined>(
    undefined
  );

  const [imagePositions, setImagePositions] = useState<
    { x: number; y: number; r: number }[]
  >([]);

  // useEffect(() => {
  //   if (selectedImage && !images.includes(selectedImage)) {
  //     images.splice(0, 0, selectedImage);
  //     setCurrentImageIndex(0);
  //   }
  // }, [selectedImage, images]);

  useEffect(() => {
    // setImages(randomTimelineImages(IMAGE_COUNT));
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
  }, [windowSize.width]);

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
            <image
              className={`cursor-pointer ${isSelected ? "outline outline-4 outline-red-500" : ""}`}
              id={`index-${index}`}
              style={{ cursor: "pointer" }}
              href={`https://iiif.ecds.io/iiif/3/dxd/${image.chapter}/${image.fileName}.tiff/full/150,/0/color.webp`}
              width={150}
              height={image.height && image.width ? Math.ceil(
                (image.height / image.width) * 150
              ) : 150}
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
