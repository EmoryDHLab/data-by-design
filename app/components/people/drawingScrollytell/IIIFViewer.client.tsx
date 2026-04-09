import OpenSeadragon from "openseadragon";
import { useEffect, useRef, useState } from "react";
import type { Options, TileSource, Viewer } from "openseadragon";

interface Props {
  figure: string;
  scrollProgress: number;
}

const osdOptions: Options = {
  showZoomControl: false,
  showFullPageControl: false,
  showHomeControl: false,
  showNavigator: true,
  navigatorAutoFade: false,
  animationTime: 5,
  navigatorDisplayRegionColor: "#fb9318",
  mouseNavEnabled: false,
};

const IIIFViewer = ({ figure, scrollProgress }: Props) => {
  const viewerContainerRef = useRef<HTMLDivElement>(
    document.createElement("div"),
  );
  const viewerRef = useRef<Viewer | undefined>(undefined);
  const [osd, setOSD] = useState<Viewer | undefined>(undefined);

  useEffect(() => {
    const initViewer = async () => {
      const response = await fetch(
        `https://iiif.ecds.io/iiiiif/3/dxd%2fople/${figure}.tiff/info.json`,
      );

      const info: TileSource = await response.json();

      viewerRef.current?.destroy();

      viewerRef.current = OpenSeadragon({
        element: viewerContainerRef.current,
        tileSources: [info],
        ...osdOptions,
      });

      viewerRef.current.navigator.element.classList.add(
        "duration-1000",
        "transition-opacity",
        "opacity-0",
      );
      setOSD(viewerRef.current);
    };

    initViewer();

    return () => {
      viewerRef.current?.destroy();
      viewerRef.current = undefined;
    };
  }, [figure]);

  useEffect(() => {
    switch (true) {
      case scrollProgress < 1:
        viewerRef.current?.setMouseNavEnabled(false);
      case scrollProgress >= 1 && scrollProgress <= 2:
        viewerRef.current?.viewport.panTo(
          new OpenSeadragon.Point(0.7188385493768735, 0.4972938512246431),
        );
        viewerRef.current?.viewport.zoomTo(5.159780351999999);
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        viewerRef.current?.setMouseNavEnabled(false);
        break;
      case scrollProgress >= 2 && scrollProgress <= 3:
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        viewerRef.current?.viewport.panTo(
          new OpenSeadragon.Point(0.24222051942640613, 0.3844618819642727),
          false,
        );
        viewerRef.current?.viewport.zoomTo(2.0736);
        break;
      case scrollProgress >= 3 && scrollProgress <= 4:
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        viewerRef.current?.viewport.panTo(
          new OpenSeadragon.Point(0.5955321823876885, 0.241167595912629),
          false,
        );
        viewerRef.current?.viewport.zoomTo(9.841851071303127);
        break;
      case scrollProgress >= 4 && scrollProgress <= 5:
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        viewerRef.current?.viewport.panTo(
          new OpenSeadragon.Point(0.188242050880771, 0.19818732218542576),
          false,
        );
        viewerRef.current?.viewport.zoomTo(6.687075336191998);
        break;
      case scrollProgress >= 5 && scrollProgress <= 6:
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        viewerRef.current?.viewport.panTo(
          new OpenSeadragon.Point(0.8193386053978049, 0.2573826949479137),
          false,
        );
        viewerRef.current?.viewport.zoomTo(11.614404145077721);
        break;
      case scrollProgress >= 6 && scrollProgress <= 7:
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        viewerRef.current?.viewport.panTo(
          new OpenSeadragon.Point(0.5006641373527644, 0.16022488474264154),
          false,
        );
        viewerRef.current?.viewport.zoomTo(3.8896404485347955);
        break;
      case scrollProgress >= 7 && scrollProgress <= 8:
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        viewerRef.current?.viewport.panTo(
          new OpenSeadragon.Point(0.6400570005410656, 0.29101118609510107),
          false,
        );
        viewerRef.current?.viewport.zoomTo(8.065558434081751);
        break;
      case scrollProgress >= 8 && scrollProgress <= 8.75:
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        viewerRef.current?.viewport.panTo(
          new OpenSeadragon.Point(0.8001552893113767, 0.27226857830922),
          false,
        );
        viewerRef.current?.viewport.zoomTo(9.6786701208981);
        viewerRef.current?.setMouseNavEnabled(false);
        break;

      default:
        viewerRef.current?.setMouseNavEnabled(true);
        viewerRef.current?.viewport.goHome();
        viewerRef.current?.navigator.element.classList.remove("opacity-100");
        break;
    }
  }, [scrollProgress, osd]);

  return (
    <div className="h-[calc(100vh-80px)] mt-20 my-auto flex flex-col mr-4">
      <div ref={viewerContainerRef} className="aspect-[1.2]"></div>
    </div>
  );
};

export default IIIFViewer;
