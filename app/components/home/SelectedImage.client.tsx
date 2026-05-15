import FigureModal from "../figures/FigureModal";
import type { TFigure } from "~/types/figureType";

const SelectedImage = ({
  selectedImage,
}: {
  selectedImage: TFigure | undefined;
}) => {
  if (selectedImage) {
    // TODO: Be able to reset margin on the figure tag in the modal
    return (
      <FigureModal
        figure={selectedImage}
        id={`selected-image-${selectedImage.fileName}`}
      >
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <picture className="flex-shrink-0 w-[480px] h-[320px] flex items-center justify-center">
            <source
              srcSet={`https://iiif.ecds.io/iiif/3/dxd%2f${selectedImage.chapter}%2f${selectedImage.fileName}.tiff/full/,320/0/color.png`}
            />
            <source
              srcSet={`https://iiif.ecds.io/iiif/3/dxd%2f${selectedImage.chapter}%2f${selectedImage.fileName}.tiff/full/,320/0/color.jpg`}
            />
            <img
              src={`https://iiif.ecds.io/iiif/3/dxd%2f${selectedImage.chapter}%2f${selectedImage.fileName}.tiff/full/,320/0/color.jpg`}
              alt={
                selectedImage.altText?.replace(/(<i>|<\/i>)/gi, '"') ??
                selectedImage.title?.replace(/(<i>|<\/i>)/gi, '"') ??
                ""
              }
              title={
                selectedImage.title?.replace(/(<i>|<\/i>)/gi, '"') ??
                selectedImage.fileName
              }
              className="max-w-full max-h-full object-contain"
            />
          </picture>

          <figcaption className="w-[28rem] flex-shrink-0 text-white text-left">
            <p
              className="font-power text-lg"
              dangerouslySetInnerHTML={{
                __html: selectedImage.title ?? "",
              }}
            />
            <p
              className="font-power italic text-base"
              dangerouslySetInnerHTML={{
                __html: `by ${selectedImage.artist} (${selectedImage.year})`,
              }}
            />
            <p className="text-stone-400 md:text-sm md:w-full text-sm">
              <span
                dangerouslySetInnerHTML={{
                  __html: selectedImage.creditLine ?? "",
                }}
              />{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: selectedImage.digitizedLine ?? "",
                }}
              />
            </p>
          </figcaption>
        </div>
      </FigureModal>
    );
  }

  return <></>;
};

export default SelectedImage;
