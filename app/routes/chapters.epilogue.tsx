import { useState } from "react";
import ChapterTitle from "~/components/ChapterTitle";
import { ChapterContext } from "~/chapterContext";
import { chapterMetaTags } from "~/utils";

import CenteredLayout from "~/components/layout/CenteredLayout";
// import InlineFootnote from "~/components/InlineFootnote";
import Footer from "~/components/Footer";
import { epilogueFootnotes } from "~/footnotes";
import FootnotesList from "~/components/FootnotesList";
import ChapterBody from "~/components/layout/ChapterBody";
import { chapterMeta } from "~/data/chapterMeta";
import type { TVizAnchors } from "~/chapterContext";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return chapterMetaTags("intro");
};

const visualizations: TVizAnchors[] = [];

export default function EpiloguePage() {
  const [showFootnotes, setShowFootnotes] = useState<boolean>(false);
  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "offwhite",
        primaryTextColor: "black",
        accentColor: "imagePrimary",
        accentTextColor: "peopleSecondary",
        footnoteTextColor: "imagePrimary",
        footnotes: epilogueFootnotes,
        showFootnotes,
        setShowFootnotes,
        visualizations,
      }}
    >
      <ChapterTitle
        title={chapterMeta.epilogue.title}
        subtitle={chapterMeta.epilogue.subtitle}
      />
      <ChapterBody>
        <CenteredLayout>
          <p className="first-paragraph"></p>
        </CenteredLayout>
      </ChapterBody>
      <CenteredLayout>
        <FootnotesList footnotes={epilogueFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
