import ChapterDropdown from "~/components/ChapterDropdown";
import { useState } from "react";
import { Link } from "@remix-run/react";
import { classNames } from "~/utils";

export default function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  return (
    <div className="fixed w-full bg-black flex items-center justify-evenly sm:pb-2 sm:pt-2 py-2 sm:py-0 z-20">
      <div className="font-dubois text-white sm:text-2xl text-xl px-2 sm:px-0">
        <Link to="/">Data by Design</Link>
      </div>
      <div className="flex items-center justify-around w-3/5 font-sans text-white sm:text-xl">
        <div
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
          className={classNames(
            "font-sans px-5",
            isDropdownVisible ? "text-playfairSecondary" : ""
          )}
        >
          <div>Chapters</div>
          {isDropdownVisible && <ChapterDropdown />}
        </div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
