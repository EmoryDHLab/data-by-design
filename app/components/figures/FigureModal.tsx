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
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { classNames } from "~/utils";
import { Caption } from "./Figure";
import Close from "../icons/Close";
import ChevronUp from "../icons/ChevronUp";
import IIIFViewer from "./IIIFViewer.client";
import type { TFigure } from "~/types/figureType";
import type { ReactNode } from "react";

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
  const [open, setOpen] = useState(false);
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
            setOpen(false);
          } else {
            setOpen(true);
          }
        },
        onKeyDown: ({ key }: { key: string }) => {
          if (key === "Enter") setOpen(true);
        },
        role: "button",
        tabIndex: 0,
      });
    } else {
      setInteractiveOptions({});
    }
  }, [hideSensitiveState, figure, setOpen, setInteractiveOptions]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      ref={figureRef}
      id={id}
      className={classNames(
        "md:mx-auto relative z-10",
        inColumn ? "md:ml-24" : "md:mt-8",
        className
      )}
      {...interactiveOptions}
    >
      {children}

      <Transition appear show={open}>
        <Dialog as="div" className="relative z-50" onClose={handleClose}>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 z-40 overflow-y-auto">
            <div className="flex min-h-full justify-center p-2 md:p-4 text-center items-center modal-backdrop">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="space-y-4 w-screen md:w-1/2 lg:w-[66vw] border bg-white p-6 rounded-xl">
                  <DialogTitle as="div" className="flex justify-end">
                    {figure?.title && (
                      <div
                        className="text-lg font-medium leading-6 text-gray-900 grow self-center px-3"
                        dangerouslySetInnerHTML={{
                          __html: figure.title,
                        }}
                      />
                    )}
                    <Button
                      onClick={() => setOpen(false)}
                      className="self-start"
                    >
                      <Close className="hover:text-offwhite text-offblack hover:fill-offblack" />
                    </Button>
                  </DialogTitle>
                  <div className="flex flex-col justify-between">
                    <IIIFViewer figure={figure} />
                    <Caption figure={figure} className="md:mb-2" />
                    <div className="mx-auto w-full rounded-2xl bg-white p-2">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <DisclosureButton
                              className={classNames(
                                "flex w-full justify-between rounded-lg",
                                `bg-${accentColor}`,
                                "px-4 py-2 text-left text-sm font-medium",
                                `text-${backgroundColor}`,
                                `hover:bg-${backgroundColor}/75`
                              )}
                            >
                              <span>Alt Text</span>
                              <ChevronUp
                                className={classNames(
                                  `text-${backgroundColor}`,
                                  "transition-transform",
                                  open ? "rotate-180 transform" : ""
                                )}
                              />
                            </DisclosureButton>
                            <DisclosurePanel
                              className="px-4 pb-2 pt-4 text-sm text-left"
                              dangerouslySetInnerHTML={{
                                __html: figure?.altText ?? "",
                              }}
                            />
                          </>
                        )}
                      </Disclosure>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
