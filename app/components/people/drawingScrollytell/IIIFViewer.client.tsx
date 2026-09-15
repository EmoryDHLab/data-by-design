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

// How long each scroll-triggered pan/zoom takes to complete, in ms.
const TWEEN_DURATION = 2500;

// Cubic ease-in: starts slow and accelerates toward the end. This is the
// opposite of OpenSeadragon's own built-in pan/zoom animation.
function easeInCubic(t: number) {
  return t * t * t;
}

const IIIFViewer = ({ figure, scrollProgress }: Props) => {
  const viewerContainerRef = useRef<HTMLDivElement>(
    document.createElement("div"),
  );
  const viewerRef = useRef<Viewer | undefined>(undefined);
  const tweenRef = useRef<number | undefined>(undefined);
  const tweenTargetRef = useRef<
    { x: number; y: number; zoom: number } | undefined
  >(undefined);
  const [osd, setOSD] = useState<Viewer | undefined>(undefined);

  const animateViewportTo = (
    targetCenter: OpenSeadragon.Point,
    targetZoom: number,
  ) => {
    const viewport = viewerRef.current?.viewport;
    if (!viewport) return;

    // (Re)Start the tween when only when target changes
    const prevTarget = tweenTargetRef.current;
    if (
      prevTarget &&
      prevTarget.x === targetCenter.x &&
      prevTarget.y === targetCenter.y &&
      prevTarget.zoom === targetZoom
    ) {
      return;
    }
    tweenTargetRef.current = {
      x: targetCenter.x,
      y: targetCenter.y,
      zoom: targetZoom,
    };

    // Cancel any tween already running, e.g. fast scrolling.
    if (tweenRef.current !== undefined) {
      cancelAnimationFrame(tweenRef.current);
    }

    const startCenter = viewport.getCenter();
    const startZoom = viewport.getZoom();
    const startTime = performance.now();

    const step = (now: number) => {
      const t = Math.min(1, (now - startTime) / TWEEN_DURATION);
      const eased = easeInCubic(t);

      viewport.panTo(
        new OpenSeadragon.Point(
          startCenter.x + (targetCenter.x - startCenter.x) * eased,
          startCenter.y + (targetCenter.y - startCenter.y) * eased,
        ),
        true,
      );
      viewport.zoomTo(
        startZoom + (targetZoom - startZoom) * eased,
        undefined,
        true,
      );

      tweenRef.current = t < 1 ? requestAnimationFrame(step) : undefined;
    };

    tweenRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const initViewer = async () => {
      const response = await fetch(
        `https://iiif.ecds.io/iiif/3/${figure}.tiff/info.json`,
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

      tweenTargetRef.current = undefined;

      setOSD(viewerRef.current);
    };

    initViewer();

    return () => {
      if (tweenRef.current !== undefined) {
        cancelAnimationFrame(tweenRef.current);
        tweenRef.current = undefined;
      }
      viewerRef.current?.destroy();
      viewerRef.current = undefined;
    };
  }, [figure]);

  useEffect(() => {
    switch (true) {
      case scrollProgress < 1:
        viewerRef.current?.setMouseNavEnabled(false);
      case scrollProgress >= 1 && scrollProgress <= 2:
        animateViewportTo(
          new OpenSeadragon.Point(0.7188385493768735, 0.4972938512246431),
          5.159780351999999,
        );
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        viewerRef.current?.setMouseNavEnabled(false);
        break;
      case scrollProgress >= 2 && scrollProgress <= 3:
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        animateViewportTo(
          new OpenSeadragon.Point(0.24222051942640613, 0.3844618819642727),
          2.0736,
        );
        break;
      case scrollProgress >= 3 && scrollProgress <= 4:
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        animateViewportTo(
          new OpenSeadragon.Point(0.5955321823876885, 0.241167595912629),
          9.841851071303127,
        );
        break;
      case scrollProgress >= 4 && scrollProgress <= 5:
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        animateViewportTo(
          new OpenSeadragon.Point(0.188242050880771, 0.19818732218542576),
          6.687075336191998,
        );
        break;
      case scrollProgress >= 5 && scrollProgress <= 6:
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        animateViewportTo(
          new OpenSeadragon.Point(0.8193386053978049, 0.2573826949479137),
          11.614404145077721,
        );
        break;
      case scrollProgress >= 6 && scrollProgress <= 7:
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        animateViewportTo(
          new OpenSeadragon.Point(0.5006641373527644, 0.16022488474264154),
          3.8896404485347955,
        );
        break;
      case scrollProgress >= 7 && scrollProgress <= 8:
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        animateViewportTo(
          new OpenSeadragon.Point(0.6400570005410656, 0.29101118609510107),
          8.065558434081751,
        );
        break;
      case scrollProgress >= 8 && scrollProgress <= 8.75:
        viewerRef.current?.navigator.element.classList.add("opacity-100");
        animateViewportTo(
          new OpenSeadragon.Point(0.8001552893113767, 0.27226857830922),
          9.6786701208981,
        );
        viewerRef.current?.setMouseNavEnabled(false);
        break;

      default:
        // Stop any running tween so it doesn't interfere with goHome().
        if (tweenRef.current !== undefined) {
          cancelAnimationFrame(tweenRef.current);
          tweenRef.current = undefined;
        }
        tweenTargetRef.current = undefined;
        viewerRef.current?.setMouseNavEnabled(true);
        viewerRef.current?.viewport.goHome();
        viewerRef.current?.navigator.element.classList.remove("opacity-100");
        break;
    }
  }, [scrollProgress, osd]);

  return <div ref={viewerContainerRef} className="aspect-[1.2]"></div>;
};

export default IIIFViewer;
