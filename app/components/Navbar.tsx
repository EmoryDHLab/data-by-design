import ChapterDropdown from "~/components/ChapterDropdown";
import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="fixed text-white w-full bg-black flex items-center justify-evenly py-0 md:py-2 z-20">
      <li className="font-dubois sm:text-2xl text-xl px-0 md:px-2 inline-block">
        <Link to="/">Data by Design</Link>
      </li>
      <li className="inline-block font-dubois text-sm tracking-wider">
        <ChapterDropdown>CHAPTERS</ChapterDropdown>
      </li>
      <li className="inline-block">
        <Link to="/about" className="font-dubois text-sm tracking-wider">
          ABOUT
        </Link>
      </li>
    </nav>
  );
}
