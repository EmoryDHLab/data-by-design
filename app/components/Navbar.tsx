import ChapterDropdown from "~/components/ChapterDropdown";
import { Link } from "@remix-run/react";
import { classNames } from "~/utils";
import { useWindowScroll } from "@uidotdev/usehooks";

export default function Navbar() {
  const [{ y }] = useWindowScroll();

  return (
    <nav
      className={classNames(
        "fixed text-white w-full z-50 duration-700 transition-colors",
        y > 30 && "bg-black"
      )}
    >
      <ul className="w-3/4 flex items-center justify-around py-1 md:py-2">
        <li className="font-dubois md:text-2xl text-xl px-0 md:px-2 inline-block">
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
      </ul>
    </nav>
  );
}
