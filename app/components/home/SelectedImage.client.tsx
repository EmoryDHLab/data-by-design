import type { TFigure } from "~/types/figureType";
import FigureObj from "../layout/FigureObj";

const SelectedImage = ({ selectedImage }: { selectedImage: TFigure }) => {
  if (selectedImage) {
    // TODO: Be able to reset margin on the figure tag in the modal
    return (
      <div className="flex flex-col items-start z-40 px-3 mb-2">
        <FigureObj
          figure={selectedImage}
          className="pt-10 m-0"
          imageClassName="h-96 m-auto text-left"
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

          <div className="  py-2 w-5/6 text-stone-400 md:text-sm md:w-full text-sm">
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
