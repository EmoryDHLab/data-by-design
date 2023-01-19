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
  const [shouldShuffle, setShouldShuffle] = useState(false);

  return (
    <div className="text-white text-center font-duboisWide text-3xl p-10 bg-black">
      <h1>TIMELINE</h1>
      <div className="flex justify-center p-3">
        <button
          onClick={() => {
            setTimelineType(TimelineType.Draggable);
            setShouldShuffle((shouldShuffle) => !shouldShuffle);
          }}
        >
          <img
            className="w-14 m-2"
            src={
              timelineType === TimelineType.Draggable
                ? "/images/ui/shuffle_click.png"
                : "/images/ui/shuffle_unclick.png"
            }
          />
        </button>
        <button onClick={() => setTimelineType(TimelineType.Ordered)}>
          <img
            className="w-14 m-2"
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
          shouldShuffle={shouldShuffle}
        />
      ) : (
        <OrderedTimeline
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
      <div className="bg-brooksSecondary flex sm:flex-row flex-col items-center sm:p-10 pt-10">
        <img
          className="sm:w-2/5 w-4/5"
          src={`/images/${selectedImage.CHAPTER}/${selectedImage.FILE_NAME}`}
        />
        <div className="sm:p-20 pt-10 pb-20 font-dubois sm:w-3/5 w-full text-black text-left">
          <div className="text-3xl p-5">
            {selectedImage.TITLE}
            <br></br>
            <div className="font-dubois italic text-xl pt-4">
              by {selectedImage.ARTIST} ({selectedImage.YEAR})
            </div>
          </div>
          <div className="font-sans text-lg p-4">
            <span>{selectedImage.CREDIT} </span>
            <br></br>
            <span>{selectedImage.DIGITIZED}</span>
          </div>
          <Link
            to={`/chapters/${selectedImage.CHAPTER}`}
            className="text-lg p-5"
          >
            GO TO CHAPTER →
          </Link>
        </div>
      </div>
    </div>
  );
}
