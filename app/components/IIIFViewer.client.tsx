import OpenSeadragon from "openseadragon";
import { useEffect, useRef, useState } from "react";
import {
  ArrowPathIcon,
  ArrowsPointingOutIcon,
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/16/solid";
import type { Options, TileSource, Viewer } from "openseadragon";

// const osdOptions: Options = {
// showNavigationControl: true,
// navigatorOpacity: 1,
// navigatorAutoFade: false,
// navigatorBorderColor: "deeppink",
// navigatorDisplayRegionColor: "deeppink",
// };

interface Props {
  figure: string;
  osdOptions: Options;
}

const IIIFViewer = ({ figure, osdOptions }: Props) => {
  const zoomInButtonRef = useRef<HTMLButtonElement>(null);
  const zoomOutButtonRef = useRef<HTMLButtonElement>(null);
  const fullScreenButtonRef = useRef<HTMLButtonElement>(null);
  const resetButtonRef = useRef<HTMLButtonElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const [osd, setOSD] = useState<Viewer | undefined>(undefined);

  useEffect(() => {
    const initViewer = async () => {
      const response = await fetch(
        `https://iip.readux.io/iiif/3/dxd/shanawdithit/${figure}.tiff/info.json`
      );

      const info: TileSource = await response.json();

      const viewer: Viewer = OpenSeadragon({
        id: "viewer",
        tileSources: [info],
        showNavigationControl: true,
        // @ts-ignore
        zoomOutButton: zoomOutButtonRef.current,
        // @ts-ignore
        zoomInButton: zoomInButtonRef.current,
        // @ts-ignore
        fullPageButton: fullScreenButtonRef.current,
        // @ts-ignore
        homeButton: resetButtonRef.current,
        ...osdOptions,
      });

      viewer.addControl(controlsRef.current ?? "controls", {
        anchor: OpenSeadragon.ControlAnchor.TOP_RIGHT,
        autoFade: true,
      });

      const controlsRefCopy = controlsRef.current;

      return { viewer, controlsRefCopy };
    };

    let viewer: Viewer | undefined = undefined;
    let controlsRefCopy: HTMLDivElement | null = null;

    initViewer().then((result) => {
      viewer = result.viewer;
      controlsRefCopy = result.controlsRefCopy;
      setOSD(viewer);
    });

    return () => {
      // @ts-ignore
      viewer?.removeControl(controlsRefCopy);
      viewer?.destroy();
    };
  }, [figure, osdOptions]);

  useEffect(() => {
    console.log("🚀 ~ IIIFViewer ~ osd:", osd);
  }, [osd]);

  return (
    <div className="w-ful p-16" ref={viewerContainerRef}>
      <div
        id="viewer"
        className="bg-offblack h-[80vh] w-[80vw] mx-auto mt-32 drop-shadow-md"
      ></div>
      <div
        ref={controlsRef}
        id="controls"
        className={`bg-offblack text-offwhite text-xs grid grid-cols-4 gap-4 p-2 rounded-md opacity-50 hover:opacity-100 ${
          osdOptions?.showNavigationControl ? "hidden" : ""
        }`}
      >
        <button ref={zoomInButtonRef} className="w-8">
          <MagnifyingGlassPlusIcon />
        </button>
        <button ref={zoomOutButtonRef} className="w-8">
          <MagnifyingGlassMinusIcon />
        </button>
        <button ref={fullScreenButtonRef} className="w-8">
          <ArrowsPointingOutIcon />
        </button>
        <button ref={resetButtonRef} className="w-8">
          <ArrowPathIcon />
        </button>
      </div>
    </div>
  );
};

export default IIIFViewer;
