import ChapterDropdown from "~/components/ChapterDropdown";
import { Link, useRouteError } from "react-router";
import { classNames } from "~/utils";
import { useWindowScroll } from "@uidotdev/usehooks";

export default function Navbar() {
  const [{ y }] = useWindowScroll();
  const error = useRouteError();

  return (
    <nav
      className={classNames(
        "fixed text-white w-full z-50 duration-700 transition-colors",
        (y || 0) > 30 || error ? "bg-black" : ""
      )}
    >
      <ul className="w-3/4 flex items-stretch justify-around py-1 md:py-2 h-10">
        <li className="flex items-center">
          <Link to="/" className="font-power md:text-2xl text-xl h-full flex items-center hover:bg-white/10 px-3 rounded transition-colors">DxD</Link>
        </li>
        <li className="flex items-center">
          <ChapterDropdown />
        </li>
        <li className="flex items-center">
          <Link to="/about" className="font-power text-sm tracking-wider h-full flex items-center hover:bg-white/10 px-3 rounded transition-colors">
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
