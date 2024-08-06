import CloverImage from "@samvera/clover-iiif/image";
import { useEffect, useState } from "react";
import type { Options } from "openseadragon";
import type { LabeledIIIFExternalWebResource } from "@samvera/clover-iiif/image";
import type { TFigure } from "~/types/figureType";

const fetchTileSource = async (figure: TFigure) => {
  const response = await fetch(
    `https://iip.readux.io/iiif/3/dxd/${figure.chapter}/${figure.fileName}.tiff/info.json`
  );
  const result = await response.json();
  result.service[0].id = result.id;
  return { ...result, tileFormat: "png" };
};

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
  modalOpen: boolean;
}

const IIIFViewer = ({ figure, modalOpen = true }: Props) => {
  const [tileSource, setTileSource] = useState<
    LabeledIIIFExternalWebResource | undefined
  >(undefined);

  useEffect(() => {
    if (figure) {
      const fetchSource = async () => {
        const result = await fetchTileSource(figure);
        setTileSource(result);
      };
      fetchSource();
    }
  }, [figure]);

  if (tileSource && modalOpen) {
    return (
      <div className="h-full bg-offblack w-full aspect-[1.75]">
        <CloverImage
          body={tileSource}
          isTiledImage
          openSeadragonConfig={openSeadragonConfig}
        />
      </div>
    );
  }

  return null;
};

export default IIIFViewer;
