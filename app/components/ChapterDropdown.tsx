import { Fragment } from "react";
import { Link } from "@remix-run/react";
import { Menu, Transition } from "@headlessui/react";
import { chapterMeta } from "~/data/chapterMeta";
import type { TChapterMeta, ChapterTitle } from "~/types/chapterMetaTags";

export default function ChapterDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left z-30">
      <div>
        <Menu.Button className="">CHAPTERS</Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 origin-top-right text-lg divide-gray-100 rounded-md shadow-md shadow-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="grid-wrapper w-max divide-y border">
            {Object.keys(chapterMeta as TChapterMeta).map((chapter, index) => (
              <Menu.Item key={chapter}>
                {({ active }) => (
                  <Link
                    className={`${
                      active ? "bg-playfairPrimary" : "bg-black"
                    } inline-block focus:bg-playfairPrimary hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5`}
                    to={`/chapters/${chapter}`}
                  >
                    {index == 0 ? "" : `${index}. `}
                    {chapterMeta[chapter as ChapterTitle].title}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
