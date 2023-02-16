import { useState } from "react";
import { Link } from "@remix-run/react";

const CHAPTERS = [
  {
    link: "brooks",
    title: "Every Datapoint a Person"
  },
  {
    link: "playfair",
    title: "Visualization as Argument"
  },
  {
    link: "peabody",
    title: "The Work of Knowledge"
  },
  {
    link: "dubois",
    title: "Between Data and Truth"
  },
  {
    link: "shanawdithit",
    title: "Narratives of Possession"
  },
  {
    link: "labour",
    title: "Labour"
  },
]

export default function ChapterDropdown({ children }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const keyUp = (key) => {
    switch (key) {
      case "Enter":
        setIsDropdownVisible(!isDropdownVisible);
        break;
      case "Escape":
        setIsDropdownVisible(false);
    }
  }

  return (
    <div
      role="button"
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
      onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      onKeyUp={({ key }) => keyUp(key)}
      tabIndex={0}
    >
      {children}
      <menu
        className={`absolute border divide-y text-white ${isDropdownVisible ? "visible" : "hidden"}`}
      >
        {CHAPTERS.map((chapter, index) => (
          <li
            key={index}
            className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5"
          >
            <Link to={`/chapters/${chapter.link}`}>{chapter.title}</Link>
          </li>
        ))}
      </menu>
    </div>
  );
}
