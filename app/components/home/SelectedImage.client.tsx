import { useEffect } from "react";
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
        <picture>
          <source
            srcSet={`https://iiif.ecds.io/iiif/3/dxd/${selectedImage.chapter}/${selectedImage.fileName}.tiff/full/,256/0/color.webp`}
          />
          <source
            srcSet={`https://iiif.ecds.io/iiif/3/dxd/${selectedImage.chapter}/${selectedImage.fileName}.tiff/full/,256/0/color.jpg`}
          />
          <img
            src={`https://iiif.ecds.io/iiif/3/dxd/${selectedImage.chapter}/${selectedImage.fileName}.tiff/full/,256/0/color.jpg`}
            alt={
              selectedImage.altText?.replace(/(<i>|<\/i>)/gi, '"') ??
              selectedImage.title?.replace(/(<i>|<\/i>)/gi, '"') ??
              ""
            }
            title={
              selectedImage.title?.replace(/(<i>|<\/i>)/gi, '"') ??
              selectedImage.fileName
            }
          />
        </picture>

        <figcaption className="w-full text-white text-left max-w-lg">
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
            />{" "}
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
