import ChapterDropdown from "~/components/ChapterDropdown";
import { useState } from "react";
import {Link} from "@remix-run/react";

export default function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  return (
    <div className="w-full bg-black flex justify-evenly pb-2 pt-2">
      <div className="font-william text-white text-2xl">
        <Link to="/">Data by Design</a>
      </div>
      <div className="flex justify-around w-3/5 font-sans text-white text-xl">
        <div
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
          className="font-sans text-white text-xl"
        >
          <div>Chapters</div>
          {isDropdownVisible && <ChapterDropdown />}
        </div>
        <Link to="/about" className="">
          About
        </Link>
      </div>
    </div>
  );
}
