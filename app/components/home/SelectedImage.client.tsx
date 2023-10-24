import type { TFigure } from "~/types/figureType";
import FigureObj from "../layout/FigureObj";

const SelectedImage = ({ selectedImage }: {selectedImage: TFigure}) => {
  if (selectedImage) {

    return (
      <div className="flex flex-col items-center">
        <FigureObj figure={selectedImage} className="pt-10" imageClassName="max-h-96 m-auto" captionClassName="hidden" />
        <div className=" py-5 w-full text-white text-left">
          <div className=" font-dubois text-xl">
            {selectedImage.title}
            <br></br>
            <div className="font-dubois italic text-base pt-2">
              by {selectedImage.artist} ({selectedImage.year})
            </div>
          </div>
          <div className="  py-2 w-5/6 text-stone-400 sm:text-sm sm:w-full text-sm">
            <span>{selectedImage.creditLine} </span>

            <span>{selectedImage.digitizedLine}</span>
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

  return <></>
}

export default SelectedImage;