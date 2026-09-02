import { useContext } from "react";
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

interface Props {
  figure: TFigure;
  isOpen: boolean;
  onClose: () => void;
}

export default function FigureLightbox({ figure, isOpen, onClose }: Props) {
  const { preferShortAltText, setPreferShortAltText } =
    useContext(AltTextContext);

  const altText = preferShortAltText
    ? figure?.altText ?? figure?.altTextLong ?? ""
    : figure?.altTextLong ?? figure?.altText ?? "";

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
          <DialogPanel className="space-y-4 w-screen md:w-1/2 lg:w-[66vw] max-h-[95vh] border bg-offblack text-white p-4 rounded-xl flex flex-col">
            <DialogTitle as="div" className="flex justify-end flex-shrink-0">
              <Button onClick={onClose} className="self-start" title="Close">
                <span className="sr-only">Close Button</span>
                <Close className="hover:text-offwhite hover:bg-white text-offwhite hover:fill-offblack text-lg h-6 w-6" />
              </Button>
            </DialogTitle>
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <div className="flex-1 min-h-0 overflow-hidden">
                {figure.iiif && (
                  <IIIFViewer figure={figure} modalOpen={isOpen} />
                )}
              </div>
              <div className="flex-shrink-0 space-y-4 mt-4">
                {figure?.title && (
                  <div
                    className="text-sm md:text-base font-bold leading-2 text-white"
                    dangerouslySetInnerHTML={{ __html: figure.title }}
                  />
                )}
                <Caption figure={figure} className="md:mb-2" />
                <div className="mx-auto w-full rounded-2xl bg-transparent ">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <div className="flex items-center justify-between gap-4">
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
                        </div>
                        <DisclosurePanel
                          className=" pb-2 pt-4 text-sm text-left text-white max-h-32 overflow-y-auto"
                          dangerouslySetInnerHTML={{
                            __html: altText,
                          }}
                        />
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
