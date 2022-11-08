import type { ReactNodeLike } from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "~/theme";

interface Props {
  children: ReactNodeLike;
}

export default function ChapterSectionTitle({ children }: Props) {
  const { backgroundColor } = useContext(ThemeContext);
  return (
    <div className="relative">
      <div
        className={`opacity-50 bg-${backgroundColor} w-full h-full absolute`}
      />
      <div className="p-4 relative font-william font-bold text-xl lg:text-4xl flex justify-center items-center">
        <span>{children}</span>
      </div>
    </div>
  );
}
