import { useEffect, useState } from "react";
import DraggableTimeline from "~/components/home/DraggableTimeline";
import OrderedTimeline from "~/components/home/OrderedTimeline";
import { randomTimelineImages, TimelineType } from "./timelineUtils";
import { classNames } from "~/utils";
import type { Dispatch, SetStateAction } from "react";
import type { TFigure } from "~/types/figureType";

const IMAGE_COUNT = 30;

// One of the two timeline view toggles. The icon is a glyph from the DxD Icons
// font — "J" is shuffle, "K" is sort — so it carries normal-case, or an
// inherited text-transform would map the letter to a different icon. The glyph
// is hidden from screen readers because the label beneath it says the same
// thing, and aria-pressed reports which view is active.
//
// The timeline sits on the black background, so the active toggle is solid
// offwhite and the inactive one solid grey. Both glyphs are a filled disc with
// the symbol knocked out as a counter, so the background reads through the
// symbol and one glyph serves both states.
const ViewToggle = ({
  glyph,
  label,
  active,
  onClick,
}: {
  glyph: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={classNames(
      "flex flex-col items-center gap-1.5 m-2 cursor-pointer",
      active ? "text-offwhite" : "text-neutral-500",
    )}
  >
    <span className="font-icons normal-case text-5xl leading-none" aria-hidden>
      {glyph}
    </span>
    <span className="font-power font-bold uppercase text-xs tracking-widest">
      {label}
    </span>
  </button>
);

interface Props {
  selectedImage: TFigure | undefined;
  setSelectedImage: Dispatch<SetStateAction<TFigure | undefined>>;
}

const Timeline = ({ selectedImage, setSelectedImage }: Props) => {
  const [shuffledImages, setShuffledImages] = useState<TFigure[]>(
    randomTimelineImages(IMAGE_COUNT),
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
        <ViewToggle
          glyph="J"
          label="Shuffle"
          active={timelineType === TimelineType.Draggable}
          onClick={() => {
            setTimelineType(TimelineType.Draggable);
            setShouldShuffle(!shouldShuffle);
          }}
        />
        <ViewToggle
          glyph="K"
          label="Sort"
          active={timelineType === TimelineType.Ordered}
          onClick={() => setTimelineType(TimelineType.Ordered)}
        />
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
