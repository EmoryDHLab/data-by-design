import { DragPreviewImage, useDrag } from "react-dnd";

interface Props {
  index: number;
  left: number;
  top: number;
  transform: string;
  image: {
    CHAPTER: string;
    FILE_NAME: string;
  };
}

export default function TimelineImage({
  index,
  image,
  left,
  top,
  transform,
}: Props) {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: "IMAGE",
      item: { index, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [index, left, top]
  );

  if (isDragging) {
    return (
      <div>
        <div ref={drag} />
        <DragPreviewImage
          connect={preview}
          src={`/images/${image.CHAPTER}/${image.FILE_NAME}`}
        />
      </div>
    );
  }
  return (
    <div>
      <img
        ref={drag}
        className="absolute w-[150px] cursor-pointer"
        style={{ left, top, transform }}
        src={`/images/${image.CHAPTER}/${image.FILE_NAME}`}
      />
      <DragPreviewImage
        connect={preview}
        style={{ position: "absolute", width: "150px" }}
        src={`/images/${image.CHAPTER}/${image.FILE_NAME}`}
      />
    </div>
  );
}
