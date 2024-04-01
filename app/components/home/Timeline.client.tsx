import DraggableTimeline from "~/components/home/DraggableTimeline";
import OrderedTimeline from "~/components/home/OrderedTimeline";
import type { Dispatch, SetStateAction } from "react";
import type { TFigure } from "~/types/figureType";
import { TimelineType } from "~/components/home/timelineUtils";

interface Props {
  timelineType: TimelineType;
  selectedImage: TFigure;
  setSelectedImage: Dispatch<SetStateAction<TFigure>>;
  shouldShuffle: boolean;
  setShouldShuffle: Dispatch<SetStateAction<boolean>>;
  setTimelineType: Dispatch<SetStateAction<TimelineType>>;
}

export default function Timeline({
  timelineType,
  selectedImage,
  setSelectedImage,
  shouldShuffle,
  setShouldShuffle,
  setTimelineType,
}: Props) {
  return (
    <>
      <div className="flex flex-col">
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
          shouldShuffle={shouldShuffle}
        />
      ) : (
        <OrderedTimeline
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </>
  );
}
