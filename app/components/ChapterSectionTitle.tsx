import { useContext, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import CenteredLayout from "./layout/CenteredLayout";
import { spacesToHyphens } from "~/utils";
import Hyperlink from "~/components/icons/Hyperlink";

interface Props {
  title: string;
}

export default function ChapterSectionTitle({ title }: Props) {
  const { accentColor, accentTextColor } = useContext(ChapterContext);
  const [isHovered, setIsHovered] = useState(false);
  const id = spacesToHyphens(title);
  return (
    <CenteredLayout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id={id}
      className={`bg-${accentColor} w-8/12 md:my-12`}
      role="button"
      tabIndex={0}
    >
      <a
        href={`#${id}`}
        className={`hover:bg-${accentColor}-translucent p-4 font-dubois text-xl lg:text-2xl flex justify-center items-center text-${accentTextColor}`}
      >
        <Hyperlink className="md:mr-4 hidden md:block" visibility={isHovered ? "" : "hidden"} />
        <span className="text-center">{title}</span>
        <span
          className="md:ml-4 md:w-9 hidden md:block"
        >{" "}
      </span>

      </a>
    </CenteredLayout>
  );
}
