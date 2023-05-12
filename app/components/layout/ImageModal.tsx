import { Fragment, useContext, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { Dialog, Transition } from "@headlessui/react";
import { EyeSlashIcon } from '@heroicons/react/24/outline'
import type { ChapterFigure } from "~/types/figureType";

interface Props {
  figure?: ChapterFigure;
  title?: string;
  sr?: string;
  alt?: string;
  title?: string;
  className?: string;
  loading?: boolean;
}

export default function ImageModal({ figure, alt, className, src, title, loading }: Props) {
  const [open, setOpen] = useState(false);
  const { hideSensitiveState } = useContext(ChapterContext);

  if (figure?.sensitive && hideSensitiveState) {
    return (
      <section className="grid grid-cols-1 place-items-center border-4 border-[#8C20E1] bg-[#D9D9D9]">
        <EyeSlashIcon
          className="h-36 absolute my-auto mx-auto"
          stroke="#8C20E1"
          strokeOpacity={0.75}
        />
        <img
          className="opacity-0"
          src={`/images/${figure.chapter}/${figure.fileName}`}
          alt={figure.altText ?? alt}
          title={figure.title ?? title}
        />
      </section>
    );
  }

  return (
    <>
      <img
        role="button"
        src={figure ? `/images/${figure.chapter}/${figure.fileName}` : src}
        alt={figure?.altText ?? alt}
        title={figure?.title ?? title}
        className={className}
        loading={loading ?? "lazy"}
        onClick={() => setOpen(true)}
        // onLoad={() => setDocHeightState(docHeightState => docHeightState + 1)}
      />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                      {title && (
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          {figure?.title ?? title}
                        </Dialog.Title>
                      )}
                      <div className="mt-2">
                        <img
                          className="mx-auto"
                          src={figure ? `images/${figure.chapter}/${figure.fileName}` : src}
                          alt={figure?.altText ?? alt}
                          title={figure?.title ?? title}
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
    </>
  );
}
