import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import type { ChapterFigure } from "~/types/figureType";

interface Props {
  figure?: ChapterFigure;
  title?: string;
  sr?: string;
  alt?: string;
  title?: string;
  className?: string;
  loading?: boolean;
  hide?: boolean;
}

export default function FigureModal({ children, figure, loading, hide }: Props) {
  const [open, setOpen] = useState(false);
  const [interactiveOptions, setInteractiveOptions] = useState<object>({});
  const figureRef = useRef();
  const inColumn = figureRef.current?.parentElement.classList.contains('md:bias-1/2');

    useEffect(() => {
    if (!hide) {
      setInteractiveOptions({
        onClick: () => setOpen(open => !open),
        onKeyDown: ({ key }) => { if (key === "Enter") setOpen(open => !open) },
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
      className={inColumn ? "md:ml-24" : ""}
      {...interactiveOptions}
    >

      {children}

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 modal" onClose={setOpen} role="dialog">
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
                    <div className=" text-center mt-5 md:mt-0">
                      {figure.title && (
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                          dangerouslySetInnerHTML={{
                            __html: figure.title,
                          }}
                        />

                      )}
                      <div className="mt-2">
                        <img
                          className="mx-auto max-h-[80vh]"
                          src={figure ? `/images/${figure.chapter}/${figure.fileName}` : src}
                          alt={figure?.altText}
                          title={figure?.title}
                          loading={loading ?? "lazy"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-5 flex flex-col items-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm md:text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
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
