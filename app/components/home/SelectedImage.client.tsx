import type { TFigure } from "~/types/figureType";
import FigureModal from "../layout/FigureModal";
import Picture from "../layout/Picture";

const SelectedImage = ({ selectedImage }: { selectedImage: TFigure }) => {
  if (selectedImage) {
    // TODO: Be able to reset margin on the figure tag in the modal
    return (
      <FigureModal figure={selectedImage}>
        <Picture
          figure={selectedImage}
          className="mx-0 pl-0 max-h-[30vh] pointer-events-auto"
          center={false}
        />
        <figcaption className="w-full text-white text-left bg-black/75">
          <p
            className="font-dubois text-lg"
            dangerouslySetInnerHTML={{
              __html: selectedImage.title ?? "",
            }}
          />
          <p
            className="font-dubois italic text-base"
            dangerouslySetInnerHTML={{
              __html:
                `by ${selectedImage.artist} (${selectedImage.year})` ?? "",
            }}
          />
          <p className="text-stone-400 md:text-sm md:w-full text-sm">
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
          </p>
        </figcaption>
      </FigureModal>
    );
  }

  return <></>;
};

export default SelectedImage;
