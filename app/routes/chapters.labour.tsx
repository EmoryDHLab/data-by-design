import { ChapterContext } from "~/chapterContext";
import ChapterTitle from "~/components/ChapterTitle";
import { chapterMeta } from "~/utils";
import type { V2_MetaFunction } from "@remix-run/node";
import { laborFootnotes } from "~/footnotes";
import CenteredLayout from "~/components/layout/CenteredLayout";
import PeopleVersions from "~/components/labor/PeopleVersions.client";
import Footer from "~/components/Footer";
import { ClientOnly } from "remix-utils";

export const meta: V2_MetaFunction = () => {
  return chapterMeta("labour");
}

export default function LabourPage() {
  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "laborPrimary",
        accentColor: "laborPrimary",
        footnoteTextColor: "laborPrimary",
        footnotes: laborFootnotes,
      }}
    >
      <ChapterTitle
        title="Building Data By Design"
        subtitle="The Making And Remaking Of This Site"
      />
      <CenteredLayout>
        <p>content</p>
      </CenteredLayout>
      <ClientOnly>
        {() => <PeopleVersions /> }
      </ClientOnly>
      <Footer />
    </ChapterContext.Provider>
  );
}
