import { useEffect, useState } from "react";
import { Link, useNavigation } from "react-router";
import { chapterMeta } from "~/data/chapterMeta";
import type { TChapterMeta } from "~/types/chapterMetaTags";
import MenuIcon from "../icons/Menu";
import CloseIcon from "../icons/Close";

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
        className={`flex flex-col md:flex-row bg-black/95 text-offwhite font-power fixed top-0 bottom-0 w-screen h-auto md:h-screen transition-transform duration-500 z-50 overflow-y-scroll md:overflow-y-hidden overflow-x-hidden md:pt-24 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ol className="w-full text-2xl ps-8 mt-12 md:mt-0">
          <li className="mb-4">
            <Link to="/">DxD</Link>
          </li>
          <li className="">
            <Link to="about">About</Link>
          </li>
        </ol>
        <ol className="overflow-y-scroll w-full">
          {Object.keys(chapterMeta as TChapterMeta).map((chapter, index) => {
            return (
              <li
                className="mb-2 border-b border-dashed border-offwhite/20 pb-2 focus:bg-imagePrimary hover:bg-imagePrimary"
                key={chapter}
              >
                <Link to={`/chapters/${chapter}`} className="">
                  {index < 2 || index >= 8 ? (
                    ""
                  ) : (
                    <div className="text-xs pt-2 ps-8 md:ps-2">
                      Chapter {index - 1}
                    </div>
                  )}
                  <div className="capitalize flex flex-row md:text-xl pt-2 ps-8 md:ps-2">
                    <div className="flex-grow">{chapter}</div>
                    <div className="font-icons normal-case me-8">b</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
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
