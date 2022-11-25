import type { ReactNodeLike } from "prop-types";
import { useContext } from "react";
import { ChapterContext } from "~/theme";
import CenteredLayout from "./layout/CenteredLayout";

interface Props {
  children: ReactNodeLike;
}

export default function ChapterSectionTitle({ children }: Props) {
  const { accentColor } = useContext(ChapterContext);
  return (
    <CenteredLayout className="py-32 w-full">
        <div className={`bg-${accentColor} p-4 font-william text-xl lg:text-3xl flex justify-center items-center`}>
          <span>{children}</span>
      </div>
    </CenteredLayout>
  );
}

// Backticks create a template string. Template string allow you to put variable in the string. You have to tell react this is an expression with curly braces.