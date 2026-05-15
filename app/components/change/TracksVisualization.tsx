import { useEffect, useRef } from "react";

interface TracksVisualizationProps {
  text: string;
  width?: number;
  height?: number;
  straightTextMode?: boolean;
}

export default function TracksVisualization({
  text,
  width = 700,
  height = 700,
  straightTextMode = false,
}: TracksVisualizationProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current && text) {
      // Update the text in the iframe
      const iframe = iframeRef.current;
      if (
        iframe.contentWindow &&
        (iframe.contentWindow as any).updateTrackText
      ) {
        (iframe.contentWindow as any).updateTrackText(text);
      }
    }
  }, [text]);

  useEffect(() => {
    if (iframeRef.current) {
      // Toggle straight text mode
      const iframe = iframeRef.current;
      if (
        iframe.contentWindow &&
        (iframe.contentWindow as any).toggleStraightText
      ) {
        (iframe.contentWindow as any).toggleStraightText();
      }
    }
  }, [straightTextMode]);

  const handleIframeLoad = () => {
    if (iframeRef.current && text) {
      // Set initial text when iframe loads
      const iframe = iframeRef.current;
      setTimeout(() => {
        if (
          iframe.contentWindow &&
          (iframe.contentWindow as any).updateTrackText
        ) {
          (iframe.contentWindow as any).updateTrackText(text);
        }
      }, 100);
    }
  };

  return (
    <div className="flex justify-center overflow-hidden">
      <iframe
        ref={iframeRef}
        src="/tracks/index.html"
        width={width}
        height={height}
        scrolling="no"
        style={{ border: "none", overflow: "hidden", display: "block" }}
        onLoad={handleIframeLoad}
      />
    </div>
  );
}
