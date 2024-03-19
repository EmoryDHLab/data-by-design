import { useContext, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import CenteredLayout from "./layout/CenteredLayout";
import Hyperlink from "~/components/icons/Hyperlink";
import type { TChapterSection } from "~/chapterContext";

interface Props {
  section: TChapterSection;
}

export default function ChapterSectionTitle({ section }: Props) {
  const { backgroundColor } = useContext(ChapterContext);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <CenteredLayout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id={section.id}
      className={`my-6 md:my-12 items-center`}
      role="button"
      tabIndex={0}
    >
      <a
        href={`#${section.id}`}
        className={`py-4 font-dubois text-xl lg:text-3xl flex text-center`}
      >
        <Hyperlink
          className={`stroke-${backgroundColor} hover:stroke-${backgroundColor} hidden md:block w-12`}
          strokeOpacity={isHovered ? 1 : 0.75}
        />
        <h3 className="text-center w-full">{section.title}</h3>
      </a>
    </CenteredLayout>
  );
}
