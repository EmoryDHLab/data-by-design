import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { classNames } from "~/utils";
import { Caption } from "./Figure";
import Close from "../icons/Close";
import ChevronUp from "../icons/ChevronUp";
import IIIFViewer from "./IIIFViewer.client";
import type { TFigure } from "~/types/figureType";
import type { ReactNode } from "react";
import ClientOnly from "~/components/ClientOnly";

interface Props {
  figure: TFigure;
  src?: string;
  alt?: string;
  className?: string;
  loading?: "eager" | "lazy";
  children?: ReactNode;
  id: string;
}

export default function FigureModal({
  children,
  figure,
  className,
  id,
}: Props) {
  const { backgroundColor, accentColor, hideSensitiveState } =
    useContext(ChapterContext);
  const [isOpen, setIsOpen] = useState(false);
  const [interactiveOptions, setInteractiveOptions] = useState<object>({});
  const figureRef = useRef<HTMLDivElement>(null);
  // FIXME: There has to be better way?
  const inColumn =
    figureRef.current?.parentElement?.classList.contains("md:bias-1/2");

  useEffect(() => {
    if (!hideSensitiveState || !figure.sensitive) {
      setInteractiveOptions({
        onClick: ({ target }: { target: HTMLElement }) => {
          if (target.classList.contains("modal-backdrop")) {
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        },
        onKeyDown: ({ key }: { key: string }) => {
          if (key === "Enter") setIsOpen(true);
        },
        role: "button",
        tabIndex: 0,
      });
    } else {
      setInteractiveOptions({});
    }
  }, [hideSensitiveState, figure, setIsOpen, setInteractiveOptions]);

  return (
    <div
      ref={figureRef}
      id={id}
      className={classNames(
        "md:mx-auto relative",
        inColumn ? "md:ml-24" : "md:mt-8",
        className
      )}
      {...interactiveOptions}
    >
      {children}

      <Dialog
        as="div"
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-2 transition duration-300 ease-out data-[closed]:opacity-0 z-50"
        open={isOpen}
        transition
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 w-screen overflow-y-auto p-2">
          <div className="flex min-h-full items-center justify-center modal-backdrop py-4">
            <DialogPanel className="space-y-4 w-screen md:w-1/2 lg:w-[66vw] max-h-[95vh] border bg-offblack text-white p-4 rounded-xl flex flex-col">
              <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
                <div className="flex-1 min-h-0 overflow-hidden relative">
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/75 rounded-full p-2 transition-colors"
                    title="Close"
                  >
                    <span className="sr-only">Close Button</span>
                    <Close className="text-white h-4 w-4" />
                  </Button>
                  <ClientOnly>
                    <IIIFViewer figure={figure} modalOpen={isOpen} />
                  </ClientOnly>
                </div>
                <div className="flex-shrink-0 space-y-4 mt-4">
                  {figure?.title && (
                    <div
                      className="text-sm md:text-base font-bold leading-2 text-white"
                      dangerouslySetInnerHTML={{
                        __html: figure.title,
                      }}
                    />
                  )}
                  <Caption figure={figure} className="md:mb-2" />
                  <div className="mx-auto w-full rounded-2xl bg-transparent ">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            className="flex items-center gap-2 text-left text-sm font-medium text-gray-400 hover:text-white transition-colors group"
                          >
                            <span>Alt Text</span>
                            <ChevronUp
                              className={classNames(
                                "text-gray-400 group-hover:text-white w-4 h-4",
                                "transition-all",
                                open ? "rotate-180 transform" : ""
                              )}
                            />
                          </DisclosureButton>
                          <DisclosurePanel
                            className=" pb-2 pt-4 text-sm text-left text-white max-h-32 overflow-y-auto"
                            dangerouslySetInnerHTML={{
                              __html: figure?.altText ?? "",
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
    </div>
  );
}
