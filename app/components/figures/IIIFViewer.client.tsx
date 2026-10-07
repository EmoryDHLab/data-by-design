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
  loadTilesWithAjax: true,
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
            // Clover falls back to a fresh random id on every render, and uses
            // it as its viewer's React key and in its zoom buttons' element
            // ids. So any re-render — toggling short/long alt text, say —
            // remounted OpenSeadragon and reloaded the image, and left the
            // buttons out of step with the viewer. A stable id, made safe for
            // an element id, keeps one viewer per figure.
            instanceId={`iiif-${figure.fileName.replace(/[^A-Za-z0-9_-]/g, "-")}`}
            openSeadragonConfig={{
              ...openSeadragonConfig,
              degrees: figure.rotation ?? 0,
              ...openSeadragonOptions,
            }}
          />
        </ClientOnly>
      )}
    </div>
  );
};

export default IIIFViewer;
