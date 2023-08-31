import ChapterTitle from "~/components/ChapterTitle";
import { chapterMeta } from "~/utils";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return chapterMeta("labour");
}

export default function LabourPage() {
  return (
    <div>
      <ChapterTitle
        title="Building Data By Design"
        subtitle="The Making And Remaking Of This Site"
      />
    </div>
  );
}
