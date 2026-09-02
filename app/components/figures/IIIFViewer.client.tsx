import CloverImage from "@samvera/clover-iiif/image";
import ClientOnly from "~/components/ClientOnly";
import type { Options } from "openseadragon";
import type { TFigure } from "~/types/figureType";

const openSeadragonConfig: Options = {
  showNavigator: false,
  showRotationControl: false,
  autoHideControls: true,
  controlsFadeLength: 10,
  maxImageCacheCount: 0,
  gestureSettingsMouse: {
    scrollToZoom: true,
    clickToZoom: true,
  },
};

interface Props {
  figure: TFigure;
  modalOpen?: boolean;
  openSeadragonOptions?: Options;
}

const IIIFViewer = ({
  figure,
  modalOpen = true,
  openSeadragonOptions = {},
}: Props) => {
  return (
    <div className="h-full bg-offblack w-full aspect-[1.75]">
      {modalOpen && (
        <ClientOnly>
          <CloverImage
            src={`https://iiif.ecds.io/iiif/3/${figure.fileName}.tiff`}
            isTiledImage
            openSeadragonConfig={{
              ...openSeadragonConfig,
              ...openSeadragonOptions,
            }}
          />
        </ClientOnly>
      )}
    </div>
  );
};

export default IIIFViewer;
