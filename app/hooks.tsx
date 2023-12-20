import { useEffect, useState } from "react";
import tailwindConfig from "../tailwind.config";

type TWindowSize = {
  width: number | undefined,
  height: number | undefined
}

type TViewportSize = {
  windowSize: TWindowSize,
  documentSize: TWindowSize,
  mainContentSize: TWindowSize & { topOffset: number | undefined },
}

const calcDocumentHeight = () => {
  const bodyEl = document.body;
  const htmlEl = document.documentElement;

  return Math.max(
    bodyEl.scrollHeight,
    bodyEl.offsetHeight,
    htmlEl.clientHeight,
    htmlEl.scrollHeight,
    htmlEl.offsetHeight
  );
};

const calcDocumentWidth = () => {
  const bodyEl = document.body;
  const htmlEl = document.documentElement;

  return Math.max(
    bodyEl.scrollWidth,
    bodyEl.offsetWidth,
    htmlEl.clientWidth,
    htmlEl.scrollWidth,
    htmlEl.offsetWidth
  );
};

export function useResizeObserver() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [viewportSize, setViewportSize] = useState<TViewportSize>({
    windowSize: {
      width: undefined,
      height: undefined,
    },
    documentSize: {
      width: undefined,
      height: undefined,
    },
    mainContentSize: {
      width: undefined,
      height: undefined,
      topOffset: undefined,
    },
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const mainContentElement = document.getElementById("main-content");
      // Set window width/height to state
      setViewportSize({
        windowSize: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        documentSize: {
          width: calcDocumentWidth(),
          height: calcDocumentHeight(),
        },
        mainContentSize: {
          width: mainContentElement?.clientWidth,
          height: mainContentElement?.clientHeight,
          topOffset: window.scrollY + (mainContentElement?.getBoundingClientRect().top || 0)
        }
      });
    }

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Add ResizeObserver. This will update when someone resizes
    // their browser window or when elements, like images, load
    // and resize the document height.
    // window.addEventListener("resize", handleResize);
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    resizeObserver.observe(document.body);
    resizeObserver.observe(document.documentElement);

    // Disconnect observer on cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, []); // Empty array ensures that effect is only run on mount

  return viewportSize;
}

export function useDeviceContext() {
  const { windowSize } = useResizeObserver();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    if (!windowSize.width) return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (windowSize.width <= parseInt(tailwindConfig.theme?.screens?.sm)) {
      setIsMobile(true);
      setIsDesktop(false);
    } else {
      setIsMobile(false);
      setIsDesktop(true);
    }
  }, [windowSize, setIsDesktop, setIsMobile]);

  return { isMobile, isDesktop };
}