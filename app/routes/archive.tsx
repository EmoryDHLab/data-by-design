import ChapterTitle from "~/components/ChapterTitle";
import { ChapterContext } from "~/chapterContext";
import CenteredLayout from "~/components/layout/CenteredLayout";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import ProjectTimelineInteractive from "~/components/image/projectTimeline/ProjectTimelineInteractive";
import Footer from "~/components/Footer";
import { pageMetaTags } from "~/utils";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return pageMetaTags({
    title: "Archive: Data by Design",
    description:
      "Visualizations and prototypes built for Data by Design that no longer appear in the chapters themselves.",
    path: "/archive",
  });
};

const sections = [
  {
    title: "Contribution Timeline",
    id: "contribution-timeline",
  },
];

export default function ArchivePage() {
  return (
    <div className="bg-offwhite">
      <ChapterContext.Provider
        value={{
          backgroundColor: "imagePrimary",
          accentColor: "imageSecondary",
          footnoteTextColor: "imagePrimary",
          primaryTextColor: "black",
          footnotes: [],
        }}
      >
        <ChapterTitle
          title="Archive"
          subtitle="Visualizations that no longer appear in the chapters"
        />

        <main id="main-content" className="chapter-body pb-36">
          <ChapterSectionTitle section={sections[0]} />
          <CenteredLayout>
            <p>
              An interactive account of who contributed what, and when, to the
              recreation of Playfair’s charts. It was built for the{" "}
              <cite>Image</cite> chapter and is kept here for reference.
            </p>
          </CenteredLayout>
          <span id={sections[0].id}>
            <ProjectTimelineInteractive>
              <></>
            </ProjectTimelineInteractive>
          </span>
        </main>
        <Footer />
      </ChapterContext.Provider>
    </div>
  );
}
