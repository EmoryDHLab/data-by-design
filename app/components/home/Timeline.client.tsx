import { useState } from "react";
import DraggableTimeline from "~/components/home/DraggableTimeline";
import OrderedTimeline from "~/components/home/OrderedTimeline";
import type { Image } from "./timelineUtils";
import imageData from "~/data/timelineImages.json";
import { Link } from "@remix-run/react";

enum TimelineType {
  Draggable,
  Ordered,
}

export default function Timeline() {
  const [timelineType, setTimelineType] = useState(TimelineType.Draggable);
  const [selectedImage, setSelectedImage] = useState<Image>(
    () => imageData[Math.floor(Math.random() * imageData.length)]
  );

  return (
    <div className="text-white text-center font-dubois text-3xl py-4">
      <h1>TIMELINE</h1>
      <div className="flex justify-center">
        <button onClick={() => setTimelineType(TimelineType.Draggable)}>
          <img
            className="w-10"
            src={
              timelineType === TimelineType.Draggable
                ? "/images/ui/shuffle_click.png"
                : "/images/ui/shuffle_unclick.png"
            }
          />
        </button>
        <button onClick={() => setTimelineType(TimelineType.Ordered)}>
          <img
            className="w-10"
            src={
              timelineType === TimelineType.Ordered
                ? "/images/ui/sort_selected.png"
                : "/images/ui/sort_unselected.png"
            }
          />
        </button>
      </div>
      {timelineType === TimelineType.Draggable ? (
        <DraggableTimeline
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      ) : (
        <OrderedTimeline
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
      <div className="bg-brooksSecondary flex p-10">
        <img
          className="w-2/5"
          src={`/images/${selectedImage.CHAPTER}/${selectedImage.FILE_NAME}`}
        />
        <div className="p-20 font-dubois w-3/5 text-black text-left">
          <div className="text-3xl p-5">
            {selectedImage.TITLE}
            <br></br>
            <div className="font-italic text-xl">
              by {selectedImage.ARTIST} ({selectedImage.YEAR})
            </div>
          </div>
          <div className="font-sans text-lg p-5">
            <span>{selectedImage.CREDIT} </span>
            <br></br>
            <span>{selectedImage.DIGITIZED}</span>
          </div>
          <Link
            to={`/chapters/${selectedImage.CHAPTER}`}
            className="text-lg p-5"
          >
            Go to chapter -&gt;
          </Link>
        </div>
      </div>
    </div>
  );
}
