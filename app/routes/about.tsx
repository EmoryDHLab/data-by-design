import ChapterTitle from "~/components/ChapterTitle";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import InlineFootnote from "~/components/InlineFootnote";

import Footer from "~/components/Footer";
import { ChapterContext } from "~/theme";
import { duboisFootnotes } from "~/footnotes";

import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";
import CenteredLayout from "~/components/layout/CenteredLayout";

import IntroSentence from "~/components/IntroSentence";

export default function AboutPage() {
  return (
    <div>
      <ChapterContext.Provider
        value={{
          backgroundColor: "duboisPrimary",
          accentColor: "duboisSecondary",
          footnoteTextColor: "duboisPrimary",
          primaryTextColor: "white",
          footnotes: duboisFootnotes,
        }}
      >
        <ChapterTitle title="About" subtitle="" />

        <TwoColumnLayout>
          <Column className="pr-20">
            <p className="pt-16">
              {" "}
              <p className="pb-4">
                <span className="font-dubois"> Credits Citation </span>
                <p>
                  <cite className="select-all">
                    L. Klein, T. Sharma, J. Varner, N. Yang, D. Jutan, J. Fu, A.
                    Mola, Z. Fang, S. Li, M. Adams, Y. Li, and S. Munro. Data by
                    Design. 2023 public beta.
                  </cite>
                </p>
              </p>
              <p>
                <p className="font-dubois"> Code </p>
                https://github.com/EmoryDHLab/data-by-design
              </p>
              <p className="font-dubois"> © 2023 </p>
            </p>
          </Column>
          <Column className="px-6">
            <p className="pt-16 ">
              <IntroSentence
                letter=" D"
                sentence=" ata by Design, a project of the Emory Digital Humanities Lab, was created by an interdisciplinary team of faculty, staff, students, and professionals, collaborating across two continents, three states, and four institutions. "
              ></IntroSentence>
            </p>
            <p>
              <span className="font-normal">
                <p className="py-2">
                  <span className="font-medium"> Lauren Klein </span> (Emory,
                  Departments of Quantitative Theory & Methods and English) is
                  the director of the project and conducted the historical and
                  archival research for the project. She also wrote the text
                  that appears on the site.
                </p>
                <p className="py-2">
                  <span className="font-medium"> Tanvi Sharma </span> (NYU, MS
                  ‘23, Interactive Design and Media) is the lead designer on the
                  project. She prototyped the project website, designing both
                  site-wide and page-specific interactions, as well as the
                  custom visualizations that appear on the site.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium"> Jay Varner </span> (Emory,
                  Center for Digital Scholarship) is the current lead developer
                  on the project. He implemented many of the project’s
                  interactive components, including the scrollytell mechanism
                  that appears throughout the site.{" "}
                </p>
                <p className="py-2">
                  {" "}
                  <span className="font-medium"> Nicholas Yang </span> (NYU, BS
                  ‘22, Computer Science) is a current developer on the project
                  and former lead developer on the project. He designed and
                  implemented the current site architecture and implemented many
                  of the project’s interactive components, including the
                  visualizations and other interactive features that appear on
                  the front page as well as in the Du Bois chapter. He also led
                  the migration from Vue to React.{" "}
                </p>{" "}
                <p className="py-2">
                  {" "}
                  <span className="font-medium">Dan Jutan </span> (Georgia Tech,
                  BS ‘24, Computer Science) was the first lead developer on the
                  project, and built the project prototype and alpha version of
                  the site.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium">Jianing Fu </span> (Georgia
                  Tech, BS ‘21, Computer Science, Univ. of California, Berkeley,
                  MEng ‘22, Computer Science) built the components on the
                  project’s front page, including the interactive timeline, for
                  the project prototype and alpha versions of the site.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium"> Anna Mola </span>(Emory, BA
                  ‘22, Computer Science and Visual Arts) built the components of
                  the Playfair chapter for the project’s alpha version. Zhou
                  Fang (Emory BA ‘22, Quantitative Sciences) built the image
                  browser component of the Du Bois chapter for the project’s
                  alpha version.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium"> Shiyao Li </span> (Emory, PhD
                  ‘26, Computer Science) built the visualization of the Voyages
                  data for the Brooks chapter.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium"> Margy Adams </span> (Emory, PhD
                  ‘25, English) wrote the alt-text for the project site.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium"> Yang Li </span> (Emory, Center
                  for Digital Scholarship) built the chapter navigation
                  component for the project site. Silas Munro (Polymode) created
                  the initial design concept for the site.
                </p>
              </span>

              <span className="font-normal">
                {" "}
                But any small comfort that might have brought about by the start
                of the school year and the return to a teaching routine would
                soon evanesce as Du Bois found himself pulled into an unexpected
                new project, one that had the potential to put his research to
                date on a major international stage.
              </span>
            </p>
          </Column>
        </TwoColumnLayout>
        <ChapterSectionTitle color="bg-duboisPrimary">
          Previous Versions
        </ChapterSectionTitle>
        <CenteredLayout>
          <span className="font-normal">
            {" "}
            This “systematic and compact form” was, of course, data
            visualization&mdash;a technique that he’d studied during his time in
            Germany, and which he’d perfected in his groundbreaking study,{" "}
          </span>
          <span className="font-normal italic">The Philadelphia Negro</span>
          <span className="font-normal">
            , published just one year earlier.
          </span>
        </CenteredLayout>
        <Footer backgroundColor="bg-duboisPrimary" textColor="text-white" />
      </ChapterContext.Provider>
    </div>
  );
}
