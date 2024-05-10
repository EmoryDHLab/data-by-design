import { useEffect, useState } from "react";
import DraggableTimeline from "~/components/home/DraggableTimeline";
import OrderedTimeline from "~/components/home/OrderedTimeline";
import { randomTimelineImages, TimelineType } from "./timelineUtils";
import type { Dispatch, SetStateAction } from "react";
import type { TFigure } from "~/types/figureType";

const IMAGE_COUNT = 30;

interface Props {
  selectedImage: TFigure | undefined;
  setSelectedImage: Dispatch<SetStateAction<TFigure | undefined>>;
}

const Timeline = ({ selectedImage, setSelectedImage }: Props) => {
  const [shuffledImages, setShuffledImages] = useState<TFigure[]>(
    randomTimelineImages(IMAGE_COUNT)
  );
  const [shouldShuffle, setShouldShuffle] = useState<boolean>(false);
  const [timelineType, setTimelineType] = useState(TimelineType.Draggable);

  useEffect(() => {
    setShuffledImages(randomTimelineImages(IMAGE_COUNT));
  }, [shouldShuffle]);

  useEffect(() => {
    setSelectedImage(shuffledImages[0]);
  }, [shuffledImages, setSelectedImage]);

  return (
    <>
      <div className="flex flex-col px-4">
        <button
          onClick={() => {
            setTimelineType(TimelineType.Draggable);
            setShouldShuffle((shouldShuffle) => !shouldShuffle);
          }}
          type="button"
        >
          <img
            className="w-14 m-2"
            src={
              timelineType === TimelineType.Draggable
                ? "/images/ui/shuffle_click.png"
                : "/images/ui/shuffle_unclick.png"
            }
            alt="Shuffle"
          />
        </button>
        <button
          type="button"
          onClick={() => setTimelineType(TimelineType.Ordered)}
        >
          <img
            className="w-14 m-2"
            src={
              timelineType === TimelineType.Ordered
                ? "/images/ui/sort_selected.png"
                : "/images/ui/sort_unselected.png"
            }
            alt="Sort"
          />
        </button>
      </div>

      {timelineType === TimelineType.Draggable ? (
        <DraggableTimeline
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          shuffledImages={shuffledImages}
        />
      ) : (
        <OrderedTimeline
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </>
  );
};

export default Timeline;
