import { ChapterContext } from "~/chapterContext";
import ChapterTitle from "~/components/ChapterTitle";
import Footer from "~/components/Footer";
import CenteredLayout from "~/components/layout/CenteredLayout";
import { shanawdithitFootnotes } from "~/footnotes";
import { chapterMeta } from "~/utils";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return chapterMeta("shanawdithit");
}

export default function ShanawdithitPage() {
  return (
      <ChapterContext.Provider
        value={{
          backgroundColor: "shanawdithitPrimary",
          primaryTextColor: "white",
          accentColor: "shanawdithitPrimary",
          footnoteTextColor: "shanawdithitPrimary",
          footnotes: shanawdithitFootnotes,
        }}
      >
        <ChapterTitle
          title="Narratives of Possession"
          subtitle="Shanawdithit's Narrative Maps"
        />
        <CenteredLayout>
          <p>
            Content can go here.
          </p>
        </CenteredLayout>
        <Footer />
      </ChapterContext.Provider>
  );
}
