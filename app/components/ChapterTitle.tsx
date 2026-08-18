import { Link } from "react-router";
import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import { spacesToHyphens, classNames } from "~/utils";

interface Props {
  title: string;
  subtitle: string;
}

export default function ChapterTitle({ title, subtitle }: Props) {
  const { sections } = useContext(ChapterContext);
  // Pages without section anchors (Preface, Epilogue, Events) have no nav to
  // sit beside the title, so the title gets the full width and is centered.
  const navSections = sections?.length ? sections : undefined;

  return (
    <header
      id={spacesToHyphens(title)}
      className={classNames(
        "root bg-black w-full flex flex-col items-center md:min-h-[657px] px-6 py-16 md:py-12",
        navSections
          ? "md:items-center md:grid md:grid-cols-2 md:gap-12 lg:gap-24 md:pl-16 lg:pl-32 md:pr-12 lg:pr-16"
          : "md:justify-center md:px-16 lg:px-32"
      )}
    >
      <div
        className={classNames(
          "text text-white w-full",
          navSections
            ? "text-center md:text-left lg:pl-16"
            : "text-center max-w-4xl"
        )}
      >
        <h1 className="font-power font-bold text-4xl md:text-5xl lg:text-7xl mb-6 md:mb-8">
          {title}
        </h1>
        <h2 className="font-power font-light text-xl md:text-2xl">
          {subtitle}
        </h2>
      </div>
      {navSections && (
        <nav
          aria-label="Chapter sections"
          className="w-full text-offwhite font-powerWide mt-12 md:mt-0"
        >
          <div className="text-neutral-400 tracking-wider text-xs md:text-sm uppercase pb-3">
            In this chapter
          </div>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {navSections.map((section, index) => (
              <li key={section.id}>
                <Link
                  to={`#${section.id}`}
                  className="group flex items-baseline gap-4 py-4 transition-colors hover:text-white text-neutral-200"
                >
                  <span className="font-power text-sm text-neutral-500 tabular-nums shrink-0 w-8">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-power flex-1 text-base md:text-lg">
                    {section.title}
                  </span>
                  <span
                    aria-hidden
                    className="font-icons text-neutral-500 transition-transform group-hover:translate-x-1"
                  >
                    b
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
