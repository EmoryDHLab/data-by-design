import imageData from "~/data/timelineImages.json";
import { useWindowSize } from "~/hooks";
import { useCallback, useState } from "react";
import { DndProvider, useDrop, XYCoord } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TimelineImage from "~/components/TimelineImage";

const IMAGE_COUNT = 2;

function createInitialImageState(windowWidth: number) {
  let images: { [n: number]: object } = {};
  for (let i = 0; i < IMAGE_COUNT; i++) {
    while (true) {
      let randomIndex = Math.floor(Math.random() * imageData.length);
      if (!(randomIndex in images)) {
        const left = Math.floor(Math.random() * windowWidth);
        const top = Math.floor(Math.random() * 250);
        const transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;

        images[randomIndex] = {
          left,
          top,
          transform,
          index: randomIndex,
          image: imageData[randomIndex],
        };
        break;
      }
    }
  }

  return images;
}

interface Image {
  index: number;
  top: number;
  left: number;
}

export default function TimelineWrapper() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Timeline />
    </DndProvider>
  );
}

function Timeline() {
  const windowSize = useWindowSize();
  const [images, setImages] = useState(() =>
    createInitialImageState(windowSize.width || 500)
  );

  const moveImage = useCallback(
    (index: number, left: number, top: number) => {
      const newImages = { ...images };
      newImages[index] = { ...newImages[index], left, top };
      setImages(newImages);
    },
    [images, setImages]
  );

  const [, drop] = useDrop(
    () => ({
      accept: "IMAGE",
      drop(item: Image, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveImage(item.index, left, top);
        return undefined;
      },
    }),
    [moveImage]
  );

  return (
    <div ref={drop} className="w-full relative h-[500px]">
      {Object.values(images).map(({ index, left, top, transform }) => {
        const image = imageData[index];
        return (
          <TimelineImage
            key={index}
            index={index}
            left={left}
            top={top}
            transform={transform}
            image={image}
          />
        );
      })}
    </div>
  );
}
