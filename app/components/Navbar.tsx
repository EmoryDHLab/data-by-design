import ChapterDropdown from "~/components/ChapterDropdown";
import { useState } from "react";
import { Link } from "@remix-run/react";
import { classNames } from "~/utils";

export default function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  return (
    <div className="w-full bg-black flex justify-evenly pb-2 pt-2 z-1">
      <div className="font-william text-white text-2xl">
        <Link to="/">Data by Design</Link>
      </div>
      <div className="flex justify-around w-3/5 font-sans text-white text-xl">
        <div
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
          className={classNames(
            "font-sans text-white text-xl px-5 pb-4",
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
