import { useContext } from "react";
import { ChapterContext } from "~/chapterContext";
import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export default function NoteLink({ href, children }: Props) {
  const { footnoteTextColor } = useContext(ChapterContext);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline decoration-${footnoteTextColor} hover:text-${footnoteTextColor}`}
    >
      {children}
    </a>
  );
}
