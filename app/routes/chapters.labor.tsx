import { ChapterContext } from "~/chapterContext";
import ChapterTitle from "~/components/ChapterTitle";
import { chapterMeta } from "~/utils";
import type { MetaFunction } from "@remix-run/node";
import { laborFootnotes } from "~/footnotes";
import CenteredLayout from "~/components/layout/CenteredLayout";
import PeopleVersions from "~/components/labor/peopleVersions/PeopleVersions.client";
import Footer from "~/components/Footer";
import { ClientOnly } from "remix-utils/client-only";
import Treemap from "~/components/labor/treemap/Treemap.client";

export const meta: MetaFunction = () => {
  return chapterMeta("labor");
};

const sections = [
  {
    title: "",
    id: "",
  },
];

export default function LabourPage() {
  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "laborPrimary",
        accentColor: "laborPrimary",
        footnoteTextColor: "laborPrimary",
        footnotes: laborFootnotes,
        sections,
      }}
    >
      <ChapterTitle
        title="Building Data By Design"
        subtitle="The Making And Remaking Of This Site"
      />
      <CenteredLayout>
        <p>content</p>
      </CenteredLayout>
      <ClientOnly>{() => <PeopleVersions />}</ClientOnly>
      <CenteredLayout>
        <p>more content</p>
        <p>more content</p>
        <p>more content</p>
        <p>more content</p>
        <p>more content</p>
      </CenteredLayout>
      <ClientOnly>{() => <Treemap />}</ClientOnly>
      <Footer />
    </ChapterContext.Provider>
  );
}
