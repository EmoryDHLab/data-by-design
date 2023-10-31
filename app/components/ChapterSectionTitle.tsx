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
      className="py-5 md:my-5 md:py-20 w-full"
    >
      <a
        href={`#${id}`}
        className={`bg-${accentColor} hover:bg-${accentColor}-translucent p-4 font-dubois text-xl lg:text-2xl flex justify-center items-center text-${accentTextColor}`}
      >
        <Hyperlink visibility={!isHovered ? "hidden" : ""} />{" "}
        <span className="px-4 text-center">{title}</span>
      </a>
    </CenteredLayout>
  );
}
