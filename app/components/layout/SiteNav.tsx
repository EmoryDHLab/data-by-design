import { useEffect, useState } from "react";
import { Link, useNavigation } from "react-router";
import { chapterMeta } from "~/data/chapterMeta";
import MenuIcon from "../icons/Menu";
import CloseIcon from "../icons/Close";
import type { TChapterMeta } from "~/types/chapterMetaTags";

const SiteNav = () => {
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigation();

  useEffect(() => {
    setShow(false);
  }, [navigate]);

  useEffect(() => {
    window.addEventListener("keyup", ({ key }) => {
      if (key === "Escape") setShow(false);
    });
  }, []);

  return (
    <>
      <nav
        className={`flex flex-col md:flex-row bg-black/95 text-offwhite font-power fixed top-0 bottom-0 w-screen h-auto md:h-screen transition-transform duration-500 z-50  overflow-y-scroll md:overflow-y-hidden overflow-x-hidden md:pt-24 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full py-12 ps-8 md:ml-12 mt-12 md:mt-0">
          <h2 className="font-power uppercase tracking-[0.2em] text-xs md:text-sm text-neutral-400 pb-4">
            Data by Design
          </h2>
          <ol className="font-power font-bold leading-none tracking-wide text-2xl md:text-3xl">
            <li className="mb-3 md:mb-4">
              <Link
                to="/"
                className="inline-block transition-colors hover:text-imagePrimary focus:text-imagePrimary"
              >
                Home
              </Link>
            </li>
            <li className="mb-3 md:mb-4">
              <Link
                to="about"
                className="inline-block transition-colors hover:text-imagePrimary focus:text-imagePrimary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="events"
                className="inline-block transition-colors hover:text-imagePrimary focus:text-imagePrimary"
              >
                Events
              </Link>
            </li>
          </ol>
        </div>
        <div className="w-full flex flex-col min-h-0">
          <h2 className="font-power uppercase tracking-[0.2em] text-xs md:text-sm text-neutral-400 ps-8 md:ps-2 pb-3">
            Chapters
          </h2>
          <ol className="overflow-y-scroll w-full">
            {Object.keys(chapterMeta as TChapterMeta).map((chapter, index) => {
              return (
                <li
                  className="border-b border-dashed border-offwhite/20 focus:bg-imagePrimary hover:bg-imagePrimary"
                  key={chapter}
                >
                  <div className="flex items-center ">
                    <div className="grow">
                      <Link to={`/chapters/${chapter}`} className="block py-4">
                        {index < 2 || index >= 8 ? (
                          ""
                        ) : (
                          <div className="font-power uppercase tracking-[0.15em] text-[0.625rem] md:text-xs text-neutral-400 ps-8 md:ps-2 my-1">
                            Chapter {index - 1}
                          </div>
                        )}
                        <div className="capitalize flex flex-row items-center justify-between text-xl md:text-2xl ps-8 md:ps-2 pe-8">
                          <div className="flex-grow">{chapter}</div>
                        </div>
                      </Link>
                    </div>
                    <div className="font-icons normal-case p-5">b</div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
      <button
        title="Site Navigation"
        className="fixed right-6 top-10 text-white z-50 w-8 bg-gray-700 rounded-md"
        onClick={() => setShow(!show)}
      >
        {show ? <CloseIcon /> : <MenuIcon />}
      </button>
    </>
  );
};

export default SiteNav;
