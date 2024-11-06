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
import { ClientOnly } from "remix-utils/client-only";

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
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0 z-50"
        open={isOpen}
        transition
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 w-screen overflow-y-auto p-4">
          <div className="flex min-h-full items-center justify-center modal-backdrop">
            <DialogPanel className="space-y-4 w-screen md:w-1/2 lg:w-[66vw] border bg-offblack text-white p-6 rounded-xl">
              <DialogTitle as="div" className="flex justify-end">
                {figure?.title && (
                  <div
                    className="text-sm md:text-lg font-medium leading-6 grow self-center px-3"
                    dangerouslySetInnerHTML={{
                      __html: figure.title,
                    }}
                  />
                )}
                <Button onClick={() => setIsOpen(false)} className="self-start">
                  <Close className="hover:text-offwhite text-offwhite hover:fill-offblack" />
                </Button>
              </DialogTitle>
              <div className="flex flex-col justify-between h-full">
                <ClientOnly>
                  {() => <IIIFViewer figure={figure} modalOpen={isOpen} />}
                </ClientOnly>
                <Caption figure={figure} className="md:mb-2" />
                <div className="mx-auto w-full rounded-2xl bg-white p-2">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <DisclosureButton
                          className={classNames(
                            "flex w-full justify-between rounded-lg text-offblack",
                            `bg-${accentColor}`,
                            "px-4 py-2 text-left text-sm font-medium",
                            // `text-${backgroundColor}`,
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
                          className="px-4 pb-2 pt-4 text-sm text-left text-offblack"
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
          </div>
        </div>
      </Dialog>
    </div>
  );
}
