import type { ReactNodeLike } from "prop-types";
import { useContext } from "react";
import { ChapterContext } from "~/theme";
import CenteredLayout from "./layout/CenteredLayout";

interface Props {
  children: ReactNodeLike;
}

export default function ChapterSectionTitle({ children }: Props) {
  const { accentColor, accentTextColor } = useContext(ChapterContext);
  return (
    <CenteredLayout className="py-20 w-full">
      <div
        className={`bg-${accentColor} p-4 font-dubois text-xl lg:text-2xl flex justify-center items-center text-${accentTextColor}`}
      >
        <span>{children}</span>
      </div>
    </CenteredLayout>
  );
}

// Backticks create a template string. Template string allow you to put variable in the string. You have to tell react this is an expression with curly braces.
