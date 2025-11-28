import { useEffect, useRef } from "react";

interface TracksVisualizationProps {
  text: string;
  lines?: string[];
  width?: number;
  height?: number;
  straightTextMode?: boolean;
}

export default function TracksVisualization({ 
  text, 
  lines = [],
  width = 700, 
  height = 700,
  straightTextMode = false
}: TracksVisualizationProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current && text) {
      // Update the text in the iframe
      const iframe = iframeRef.current;
      if (iframe.contentWindow && (iframe.contentWindow as any).updateTrackText) {
        (iframe.contentWindow as any).updateTrackText(text);
      }
      if (iframe.contentWindow && (iframe.contentWindow as any).updateReadableLines) {
        (iframe.contentWindow as any).updateReadableLines(lines);
      }
    }
  }, [text, lines]);

  useEffect(() => {
    if (iframeRef.current) {
      // Toggle straight text mode
      const iframe = iframeRef.current;
      if (iframe.contentWindow && (iframe.contentWindow as any).toggleStraightText) {
        (iframe.contentWindow as any).toggleStraightText();
      }
    }
  }, [straightTextMode]);

  const handleIframeLoad = () => {
    if (iframeRef.current && text) {
      // Set initial text and lines when iframe loads
      const iframe = iframeRef.current;
      setTimeout(() => {
        if (iframe.contentWindow && (iframe.contentWindow as any).updateTrackText) {
          (iframe.contentWindow as any).updateTrackText(text);
        }
        if (iframe.contentWindow && (iframe.contentWindow as any).updateReadableLines) {
          (iframe.contentWindow as any).updateReadableLines(lines);
        }
      }, 100);
    }
  };

  return (
    <div className="border border-gray-600 rounded overflow-hidden">
      <iframe
        ref={iframeRef}
        src="/tracks/index.html"
        width={width}
        height={height}
        style={{ border: 'none' }}
        onLoad={handleIframeLoad}
      />
    </div>
  );
}