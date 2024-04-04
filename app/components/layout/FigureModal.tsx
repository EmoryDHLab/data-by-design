import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import { Caption } from "./FigureObj";
import type { TFigure } from "~/types/figureType";
import type { ReactNode } from "react";
import Close from "../icons/Close";
import ChevronUp from "../icons/ChevronUp";

interface Props {
  figure?: TFigure;
  src?: string;
  alt?: string;
  className?: string;
  loading?: "eager" | "lazy";
  hide?: boolean;
  children?: ReactNode;
}

export default function FigureModal({
  children,
  src,
  figure,
  loading,
  hide,
  className,
}: Props) {
  const { backgroundColor, accentColor } = useContext(ChapterContext);
  const [open, setOpen] = useState(false);
  const [interactiveOptions, setInteractiveOptions] = useState<object>({});
  const figureRef = useRef<HTMLElement>(null);
  // FIXME: There has to be better way?
  const inColumn =
    figureRef.current?.parentElement?.classList.contains("md:bias-1/2");

  useEffect(() => {
    if (!hide) {
      setInteractiveOptions({
        onClick: () => setOpen((open) => !open),
        onKeyDown: ({ key }: { key: string }) => {
          if (key === "Enter") setOpen((open) => !open);
        },
        role: "button",
        tabIndex: 0,
      });
    } else {
      setInteractiveOptions({});
    }
  }, [hide, figure, setOpen, setInteractiveOptions]);

  return (
    <figure
      ref={figureRef}
      className={`md:mx-auto ${inColumn ? "md:ml-24" : "md:mt-8"} ${
        className ?? ""
      }`}
      {...interactiveOptions}
    >
      {children}

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 modal" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full justify-center p-2 md:p-4 text-center items-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-0 md:translate-y-4 scale-95 md:scale-[none]"
                enterTo="opacity-100 translate-y-0 scale-100 md:scale-[none]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 scale-100 md:scale-[none]"
                leaveTo="opacity-0 translate-y-0 md:translate-y-4 scale-95 md:scale-[none]"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-6 md:px-4 md:pt-5 md:pb-4 text-left shadow-xl transition-all my-8 md:my-0 w-screen md:w-auto max-w-4xl md:max-w-auto">
                  <div>
                    <div className="text-center mt-5 md:mt-0">
                      <div className="flex flex-auto items-stretch">
                        {figure?.title && (
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900 grow self-center"
                            dangerouslySetInnerHTML={{
                              __html: figure.title,
                            }}
                          />
                        )}
                        <div className="mr-4">
                          <button
                            type="button"
                            className="w-4"
                            onClick={() => setOpen(false)}
                            aria-label="Close"
                            title="Close"
                          >
                            <Close className="hover:text-offwhite text-offblack hover:fill-offblack" />
                          </button>
                        </div>
                      </div>
                      <figure>
                        <picture className="mt-2">
                          <source
                            srcSet={`/images/${figure?.chapter}/${figure?.fileName}.webp`}
                          />
                          <source
                            srcSet={`/images/${figure?.chapter}/${figure?.fileName}.jpg`}
                          />
                          <img
                            className="mx-auto max-h-[80vh]"
                            src={
                              figure
                                ? `/images/${figure.chapter}/${figure.fileName}.jpg`
                                : src
                            }
                            alt={figure?.altText ?? ""}
                            title={figure?.title ?? ""}
                            loading={loading ?? "lazy"}
                          />
                        </picture>
                        <Caption figure={figure} className="md:mb-2" />

                        <div className="mx-auto w-full rounded-2xl bg-white p-2">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className={`flex w-full justify-between rounded-lg bg-${accentColor} px-4 py-2 text-left text-sm font-medium text-${backgroundColor} hover:bg-${backgroundColor}/75 `}
                                >
                                  <span>Alt Text</span>
                                  <ChevronUp
                                    className={`text-${backgroundColor} transition-transform ${
                                      open ? "rotate-180 transform" : ""
                                    }`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-left">
                                  {figure?.altText}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                      </figure>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </figure>
  );
}
