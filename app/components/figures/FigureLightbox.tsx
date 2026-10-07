import { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Tooltip } from "react-tooltip";
import { AltTextContext } from "~/altTextContext";
import { classNames } from "~/utils";
import { Caption } from "./Figure";
import Close from "../icons/Close";
import ChevronUp from "../icons/ChevronUp";
import IIIFViewer from "./IIIFViewer.client";
import type { TFigure } from "~/types/figureType";
import Picture from "./Picture";

interface Props {
  figure: TFigure;
  isOpen: boolean;
  onClose: () => void;
}

// Long alt text used to scroll inside a 128px box, a few words at a time.
// Instead it shows six lines, with "Show more" when there is more: expanded,
// it takes the room it needs and the image above (flex-1, min-h-0) shrinks to
// make it, scrolling only past 40vh so the image never disappears entirely.
// max-w-prose and text-pretty keep the lines to a reading length and stop the
// last one being a lone word, as with the event descriptions.
const AltTextBody = ({ html }: { html: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  // A different description (another figure, or short/long switched) starts
  // collapsed again.
  useEffect(() => setExpanded(false), [html]);

  // Measured while clamped, since that's the only state in which overflow
  // means anything; re-measured as the lightbox resizes and rewraps the text.
  useEffect(() => {
    const el = ref.current;
    if (!el || expanded) return;
    const measure = () => setOverflows(el.scrollHeight > el.clientHeight + 1);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [html, expanded]);

  return (
    <>
      <div
        ref={ref}
        className={classNames(
          "text-sm text-left text-white max-w-prose text-pretty",
          expanded ? "max-h-[40vh] overflow-y-auto pr-2" : "line-clamp-6",
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {(overflows || expanded) && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 text-xs text-gray-400 underline hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </>
  );
};

export default function FigureLightbox({ figure, isOpen, onClose }: Props) {
  const { preferShortAltText, setPreferShortAltText } =
    useContext(AltTextContext);

  const altText = preferShortAltText
    ? figure?.altText ?? figure?.altTextLong ?? ""
    : figure?.altTextLong ?? figure?.altText ?? "";

  const hasShortAndLong =
    !!figure?.altText &&
    !!figure?.altTextLong &&
    figure.altText.trim() !== figure.altTextLong.trim();

  return (
    <Dialog
      as="div"
      className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-2 transition duration-300 ease-out data-[closed]:opacity-0 z-50"
      open={isOpen}
      transition
      onClose={onClose}
    >
      <div className="fixed inset-0 w-screen overflow-y-auto p-2">
        <div className="flex min-h-full items-center justify-center modal-backdrop py-4">
          {/* The close button sits in the corner rather than on a row of its
              own above the image, which cost 40px of height that the
              description below can use instead. */}
          <DialogPanel className="relative w-screen md:w-1/2 lg:w-[66vw] max-h-[95vh] border bg-offblack text-white p-4 rounded-xl flex flex-col">
            <DialogTitle as="div" className="absolute top-2 right-2 z-10">
              <Button
                onClick={onClose}
                className="block rounded bg-offblack/80 p-1"
                title="Close"
              >
                <span className="sr-only">Close Button</span>
                <Close className="hover:text-offwhite hover:bg-white text-offwhite hover:fill-offblack text-lg h-6 w-6" />
              </Button>
            </DialogTitle>
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <div className="flex-1 min-h-0 overflow-hidden">
                {figure.deepZoom ? (
                  <IIIFViewer figure={figure} modalOpen={isOpen} />
                ) : (
                  <Picture figure={figure} />
                )}
              </div>
              {/* Two columns from md: what the image is on the left, and the
                  alt text describing what it shows beside it, open by default
                  so the two can be read together. The four pieces sit in one
                  grid so they top-align in pairs — the title level with the
                  "Alt Text" header, the caption level with the alt text — and
                  stay level when there is no title. The header sits at the
                  foot of its row (self-end), so a title that wraps to several
                  lines doesn't leave a gap between it and its text. Stacked on mobile, in
                  source order. Disclosure renders no element of its own, so
                  its header and panel are grid cells like the others. */}
              <div className="flex-shrink-0 mt-4 grid grid-cols-1 gap-y-4 md:gap-y-3 md:grid-cols-2 md:gap-x-12 lg:gap-x-16 md:items-start">
                {figure?.title && (
                  <div
                    className="md:col-start-1 md:row-start-1 text-sm md:text-base font-bold leading-2 text-white"
                    dangerouslySetInnerHTML={{ __html: figure.title }}
                  />
                )}
                {/* Same reading length and last-line balancing as the alt
                    text; passed here so captions in the chapters are left as
                    they are. !my-0 because the grid's gap spaces it. */}
                <Caption
                  figure={figure}
                  className="md:col-start-1 md:row-start-2 !my-0 max-w-prose text-pretty"
                />
                <Disclosure defaultOpen>
                  {({ open }) => (
                    <>
                      <div className="md:col-start-2 md:row-start-1 md:self-end flex items-center justify-between gap-4">
                        <DisclosureButton className="flex items-center gap-2 text-left text-sm font-medium text-gray-400 hover:text-white transition-colors group">
                          <span>Alt Text</span>
                          <ChevronUp
                            className={classNames(
                              "text-gray-400 group-hover:text-white w-4 h-4",
                              "transition-all",
                              open ? "rotate-180 transform" : "",
                            )}
                          />
                        </DisclosureButton>
                        {/* Only offered when there are two different
                            descriptions to switch between. */}
                        {hasShortAndLong && (
                          <>
                            <button
                              type="button"
                              aria-pressed={preferShortAltText}
                              onClick={() =>
                                setPreferShortAltText((prev) => !prev)
                              }
                              className="flex-shrink-0 text-xs text-gray-400 underline hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
                              data-tooltip-id={`alt-text-toggle-${figure.fileName}`}
                              data-tooltip-content={
                                preferShortAltText
                                  ? "Display longer alt text for images."
                                  : "Display shorter alt text for images."
                              }
                              data-tooltip-class-name={"z-50"}
                            >
                              {preferShortAltText
                                ? "Show long description"
                                : "Show short description"}
                            </button>
                            <Tooltip id={`alt-text-toggle-${figure.fileName}`} />
                          </>
                        )}
                      </div>
                      <DisclosurePanel className="md:col-start-2 md:row-start-2">
                        <AltTextBody html={altText} />
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
