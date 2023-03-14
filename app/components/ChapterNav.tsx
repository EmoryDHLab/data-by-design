import { Link } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "~/chapterContext";

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
}

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

const icon = (type) => {
  switch (type) {
    case "scrollytell":
      return "g"
    case "figure":
      return "a"
    case "visualization":
      return "h"
    default:
      return "i"
  };
};

interface Props {
  anchors: object;
  progress: float;
}
export function ChapterNav({ anchors, progress }: Props) {
  const { accentColor, backgroundColor, docHeightState, setDocHeightState } = useContext(ChapterContext);
  const [ documentHeight, setDocumentHeight ] = useState<number>(calcDocumentHeight());
  const [ documentWidth, setDocumentWidth ] = useState<number>(calcDocumentWidth());
  const [ anchorMap, setAnchorMap ] = useState<array>([]);

  useEffect(() => {
    const anchorPositions = [];
    if (anchors) {
      for (const anchor of Object.keys(anchors)) {
        const { top } = anchors[anchor].ref.current.getBoundingClientRect();
        const offset = ((top + window.scrollY) + 138) / documentHeight * 100;
        anchorPositions.push({
          offset,
          type: anchors[anchor].type,
          hash: anchors[anchor].ref.current.id
        });
      }
    }
    setAnchorMap(anchorPositions)
  }, [anchors, setAnchorMap, documentHeight]);

  // The Scrollama instance dies when the overall document height changes
  // like when images are lazyloaded. We could, and maybe should, make
  // the image containers the size of the image. Maybe later...
  const resizeObserver = new ResizeObserver(() => {
      setDocumentWidth(calcDocumentWidth);
      setDocumentHeight(calcDocumentHeight);
    }
  );
  resizeObserver.observe(document.body);
  resizeObserver.observe(document.documentElement);

  useEffect(() => {
    setDocHeightState(docHeightState => docHeightState + 1);
  }, [setDocHeightState, documentHeight]);


  useEffect(() => {
    setDocumentHeight(calcDocumentHeight());
    setDocumentWidth(calcDocumentWidth());
  }, [docHeightState, setDocumentHeight, setDocumentWidth]);

  return (
    <nav className={`w-[75vw] z-10 sticky top-[48px] bg-${accentColor} text-black mx-auto h-6`}>
      <div className={`bg-${backgroundColor} h-4 relative left-0 top-0 h-full`} style={{width: `${progress * 100}%`}}>
        </div>

        {anchorMap.map((anchor, index) => {
          return (
            <span key={index} className="relative -top-6 transition" style={{left: `${anchor.offset}%`}}>
              <Link to={`#${anchor.hash}`} className="font-icons">
                {icon(anchor.type)}
              </Link>
            </span>
          )
        })}
    </nav>
  )
}