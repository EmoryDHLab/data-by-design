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
    <>
      <div className="sm:grid bg-black text-white sm:grid-cols-14 sm:grid-rows-30  pt-10 sm:pt-5">
        <div className="flex flex-col items-center col-start-11 col-span-4 bg-nightingale_blue sm:p-10 pb-5 pt-20">
          <div className="flex flex-col items-center">
            <Figure
              className="w-3/5 sm:w-full pt-10"
              src={`/images/${selectedImage.CHAPTER}/${selectedImage.FILE_NAME}`}
              alt={selectedImage.ALT_TEXT}
            />
            <div className=" pb-5 w-full text-white text-left">
              <div className=" font-dubois text-xl">
                {selectedImage.TITLE}
                <br></br>
                <div className="font-dubois italic text-base pt-2">
                  by {selectedImage.ARTIST} ({selectedImage.YEAR})
                </div>
              </div>
              <div className="  py-2 w-5/6 sm:text-base sm:w-full text-sm">
                <span>{selectedImage.CREDIT} </span>
                <br></br>
                <span>{selectedImage.DIGITIZED}</span>
              </div>
              <Link
                to={`/chapters/${selectedImage.CHAPTER}`}
                className="text-base font-dubois  pt-6"
              >
                GO TO CHAPTER →
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:row-start-1 sm:col-start-1 sm:col-end-11 sm:grid sm:grid-cols-5 sm:4 pl-6 sm:pl-0 sm:row-span-8">
          <div className="pt-20 font-bold text-5xl sm:text-frontTitle sm:col-start-1 font-dubois  sm:col-span-4 sm:row-span-1 z-10 leading-veryTight sm:pl-24">
            <span className="sm:hidden">DATA BY DESIGN</span>
            <span className="hidden sm:inline sm:pt-10">DATA BY</span>{" "}
            <span className="hidden sm:ml-32 sm:inline">DESIGN</span>
          </div>
          <div className="sm:text-3xl text-xl font-dubois font-normal sm:font-normal  col-start-3 col-span-2 pt-3 row-start-2">
            An Interactive History
            <br /> of Data Visualization
            <br />
            <span className="font-light pt-5">1786-1900</span>
            <div className="pt-10">
              {/* <h1>TIMELINE</h1> */}
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
          </div>
        </div>
      </div>

      <div className="text-white text-center font-duboisWide text-3xl p-10 bg-black">
        <div className="flex justify-center p-3"></div>
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
    </>
  );
}
