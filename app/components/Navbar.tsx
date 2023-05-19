import ChapterDropdown from "~/components/ChapterDropdown";
import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="fixed text-white w-full bg-black z-20">
      <div className="w-3/4 flex items-center justify-around py-1 md:py-2">
        <li className="font-dubois sm:text-2xl text-xl px-0 md:px-2 inline-block">
          <Link to="/">DxD</Link>
        </li>
        <li className="inline-block font-dubois text-sm tracking-wider">
          <ChapterDropdown />
        </li>
        <li className="inline-block">
          <Link to="/about" className="font-dubois text-sm tracking-wider">
            ABOUT
          </Link>
        </li>
      </div>
    </nav>
  );
}
