import CloverImage from "@samvera/clover-iiif/image";
import { useMemo, useState } from "react";
import type { Options } from "openseadragon";
import type { LabeledIIIFExternalWebResource } from "@samvera/clover-iiif/image";
import type { TFigure } from "~/types/figureType";
import { ClientOnly } from "remix-utils/client-only";

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
  modalOpen?: boolean;
  openSeadragonOptions?: Options;
}

const IIIFViewer = ({
  figure,
  modalOpen = true,
  openSeadragonOptions = {},
}: Props) => {
  const [tileSource, setTileSource] = useState<
    LabeledIIIFExternalWebResource | undefined
  >(undefined);

  useMemo(() => {
    if (figure) {
      const fetchSource = async () => {
        const result = await fetchTileSource(figure);
        setTileSource(result);
      };
      fetchSource();
    }
    console.log("🚀 ~ figure:", figure);
  }, [figure]);

  if (tileSource && modalOpen) {
    return (
      <div className="h-full bg-offblack w-full aspect-[1.75]">
        <ClientOnly>
          {() => (
            <CloverImage
              body={tileSource}
              isTiledImage
              openSeadragonConfig={{
                ...openSeadragonConfig,
                ...openSeadragonOptions,
              }}
            />
          )}
        </ClientOnly>
      </div>
    );
  }

  return null;
};

export default IIIFViewer;
