import { ChapterContext } from "~/chapterContext";
import ChapterTitle from "~/components/ChapterTitle";
import Footer from "~/components/Footer";
import CenteredLayout from "~/components/layout/CenteredLayout";
import { shanawdithitFootnotes } from "~/footnotes";

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
