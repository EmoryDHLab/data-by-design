import { Link } from "@remix-run/react";
import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import { spacesToHyphens } from "~/utils";

interface Props {
  title: string;
  subtitle: string;
}

export default function ChapterTitle({ title, subtitle }: Props) {
  const { sections } = useContext(ChapterContext);

  return (
    <header
      id={spacesToHyphens(title)}
      className="root bg-black h-screen md:h-[657px] flex flex-col justify-center items-center w-full lg:grid lg:grid-cols-2 lg:gap-24 lg:pl-32"
    >
      <div className="text text-white text-center md:text-left lg:pl-16 my-5">
        <h1 className="font-dubois font-bold text-3xl lg:text-7xl mb-8 lg:mb-8">
          {title}
        </h1>
        <h2 className="font-dubois font-light text-2xl lg:text-2xl">
          {subtitle}
        </h2>
      </div>
      <nav className="hidden lg:block text-offwhite font-duboisWide">
        <div className="border-b-2 border-b-white uppercase w-2/3 pb-2">
          Section
        </div>
        <ul className="mt-4">
          {sections.map((section) => {
            return (
              <li key={section.id} className="py-2">
                <Link className="hover:underline" to={`#${section.id}`}>
                  {section.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
