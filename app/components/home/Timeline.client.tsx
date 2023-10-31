import DraggableTimeline from "~/components/home/DraggableTimeline";
import OrderedTimeline from "~/components/home/OrderedTimeline";
import type { Dispatch, SetStateAction } from "react";
import type { Image} from "~/components/home/timelineUtils";
import { TimelineType } from "~/components/home/timelineUtils";

interface Props {
  timelineType: TimelineType;
  selectedImage: Image;
  setSelectedImage: Dispatch<SetStateAction<Image>>;
  shouldShuffle: boolean;
}

export default function Timeline({
  timelineType,
  selectedImage,
  setSelectedImage,
  shouldShuffle,
}: Props) {
  return (
    <div className="text-white text-center font-duboisWide text-3xl p-10 bg-black hidden md:block">
      <div className="flex items-center border-white border-dashed border-y-2 w-full">
        <h1 className="-rotate-90 h-[20px]">TIMELINE</h1>
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
      </div>
    </div>
  );
}
