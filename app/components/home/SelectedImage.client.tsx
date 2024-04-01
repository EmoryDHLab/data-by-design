import type { TFigure } from "~/types/figureType";
import FigureObj from "../layout/FigureObj";

const SelectedImage = ({ selectedImage }: { selectedImage: TFigure }) => {
  if (selectedImage) {
    return (
      <div className="flex flex-col items-center z-40 px-3 pb-2">
        <FigureObj
          figure={selectedImage}
          className="pt-10"
          imageClassName="max-h-96 m-auto"
          captionClassName="hidden"
        />
        <div className=" p-4 w-full text-white text-left bg-black/75">
          <div
            className=" font-dubois text-xl"
            dangerouslySetInnerHTML={{
              __html: selectedImage.title ?? "",
            }}
          />

          <div
            className="font-dubois italic text-base pt-2"
            dangerouslySetInnerHTML={{
              __html:
                `by ${selectedImage.artist} (${selectedImage.year})` ?? "",
            }}
          />

          <div className="  py-2 w-5/6 text-stone-400 sm:text-sm sm:w-full text-sm">
            <span
              dangerouslySetInnerHTML={{
                __html: selectedImage.creditLine ?? "",
              }}
            />
            <span
              dangerouslySetInnerHTML={{
                __html: selectedImage.digitizedLine ?? "",
              }}
            />
          </div>
          {/* <Link
            to={`/chapters/${selectedImage.CHAPTER}`}
            className="text-base font-dubois  pt-6"
          >
            GO TO CHAPTER →
          </Link> */}
        </div>
      </div>
    );
  }

  return <></>;
};

export default SelectedImage;
