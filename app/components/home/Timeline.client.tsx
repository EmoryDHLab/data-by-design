import { useState } from "react";
import DraggableTimeline from "~/components/home/DraggableTimeline";
import OrderedTimeline from "~/components/home/OrderedTimeline";
import type { Image } from "./timelineUtils";
import imageData from "~/data/timelineImages.json";
import { Link } from "@remix-run/react";
import Figure from "../layout/Figure";

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
    <div>
      <div className="sm:grid bg-black text-white text-center sm:grid-cols-14 sm:grid-rows-30 font-dubois pt-10 sm:pt-32">
        <div className="  col-start-1 col-span-10 justify-center">
          <h1 className="text-3xl text-center">TIMELINE</h1>
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

        <div className="flex flex-col items-center col-start-11 col-span-4 bg-nightingale_blue sm:p-16 pb-5 pt-10">
          <div className="flex flex-col items-center">
            <Figure
              className="w-2/5 md:w-4/5"
              src={`/images/${selectedImage.CHAPTER}/${selectedImage.FILE_NAME}`}
              alt={selectedImage.ALT_TEXT}
            />
            <div className="caption text-center sm:pt-5 py-3 w-5/6 sm:text-lg sm:w-full text-sm">
              <div className="text-lg">
                {selectedImage.TITLE}
                <br></br>
                <div className="font-dubois italic text-base pt-4">
                  by {selectedImage.ARTIST} ({selectedImage.YEAR})
                </div>
              </div>
              <div className="font-sans text-sm p-4">
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
      </div>
    </div>
  );
}
