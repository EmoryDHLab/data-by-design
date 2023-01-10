import imageData from "~/data/timelineImages.json";
import { Dispatch, SetStateAction } from "react";
import { Image } from "~/components/home/timelineUtils";

function groupByYear() {
  const imagesByYear: { [y: string]: Image[] } = {};
  for (const image of imageData) {
    if (imagesByYear[image.YEAR] === undefined) {
      imagesByYear[image.YEAR] = [];
    }
    imagesByYear[image.YEAR].push(image);
  }

  return imagesByYear;
}

const imagesByYear = groupByYear();

interface Props {
  setSelectedImage: Dispatch<SetStateAction<Image | undefined>>;
}

export default function OrderedTimeline({ setSelectedImage }: Props) {
  return (
    <div className="flex overflow-x-scroll space-x-10 h-96 py-10 px-5">
      {Object.entries(imagesByYear).map(([year, images]) => (
        <div style={{ minWidth: `${images.length * 10 + 150}px` }}>
          <h4 className="text-md text-left">{year}</h4>
          <div className="relative">
            {images.map((image, index) => (
              <img
                onClick={() => setSelectedImage(image)}
                className="absolute w-[150px]"
                style={{ left: `${index * 10}px`, top: "0" }}
                src={`/images/${image.CHAPTER}/${image.FILE_NAME}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
