import ChapterTitle from "~/components/ChapterTitle";

import Footer from "~/components/Footer";
import { ChapterContext } from "~/chapterContext";
import { aboutFootnotes } from "~/footnotes";
import InlineFootnote from "~/components/InlineFootnote";

import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";
import CenteredLayout from "~/components/layout/CenteredLayout";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import { pageMetaTags } from "~/utils";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () =>
  pageMetaTags({
    title: "About: Data by Design",
    description:
      "About the site and the project behind Data by Design: how to read it, who made it, and the advisory board that guided it.",
    path: "/about",
  });

const sections = [
  {
    title: "About this Site",
    id: "about-this-site",
  },
  {
    title: "About this Project",
    id: "about-this-project",
  },
  {
    title: "Advisory Board",
    id: "advisory-board",
  },
  {
    title: "Previous Versions",
    id: "previous-versions",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-offwhite">
      <ChapterContext.Provider
        value={{
          backgroundColor: "changePrimary",
          accentColor: "changeSecondary",
          footnoteTextColor: "changePrimary",
          primaryTextColor: "white",
          footnotes: aboutFootnotes,
          sections,
        }}
      >
        <ChapterTitle title="About" subtitle="" />

        <main id="main-content" className="pb-36">
          <ChapterSectionTitle section={sections[0]}></ChapterSectionTitle>
          <CenteredLayout>
            <h2 className="text-lg font-powerWide uppercase">Compatibility</h2>
            <p>
              This site is best experienced on a computer. If you’re on a phone
              or small tablet, some interactive visualization features may not
              work. In those cases, we show a static version of the
              visualization and suggest switching to a computer to explore the
              interactive version when time allows.
            </p>
            <h2 className="text-lg font-powerWide uppercase">Accessibility</h2>
            <p>
              We have designed this site to be accessible to blind and
              low-vision users. All images and interactions are accompanied by
              alt-text. We provide two versions: one shorter and more
              traditional, and the other longer and more conceptual. Inspired by
              art historian Tina Campt’s idea of “listening to images,” as
              discussed in Chapter 6, this longer version emphasizes the
              resonance of the image with the argument expressed in the text.
              The long alt-text is the default version for the site. To switch
              to the short version, click the toggle located at the top-left of
              each chapter.
            </p>
            <p>
              Chapter 1, which contains sensitive images, also contains an
              option for sensitive alt-text.
            </p>
            <h2 className="text-lg font-powerWide uppercase">References</h2>
            <p>
              Clicking on any inline reference (a number with a circle around
              it)     <InlineFootnote index={0} />will expand the reference inline with the text. Should you
              want to expand all of the references at once, click the “show
              references” toggle on the top-left of each chapter. Should you
              prefer to wait until the end of the chapter to view the
              references, they also appear at the bottom of the page.
            </p>
           
            <h2 className="text-lg font-powerWide uppercase">Navigation</h2>
            <p>
              We are under no illusions: these chapters are long! Should you
              wish to navigate (or link) directly to a specific part of the
              chapter, you can use the chapter navigation bar at the top of the
              page. Icons indicate archival images{" "}
              <span className="font-icons text-xl">a</span>, new visualizations{" "}
              <span className="font-icons text-xl">h</span>, interactive features{" "}
              <span className="font-icons text-xl">g</span>. Hovering over each icon
              will display the
              feature’s title. Clicking the icon will take you to that part of
              the chapter. A navigation bar displays your reading progress.
            </p>
            <p>
              Clicking the site navigation icon, which remains sticky on the top
              right, just below the chapter navigation bar, will allow you to
              move between chapters.
            </p>
            <h2 className="text-lg font-powerWide uppercase">The Archive</h2>
            <p>
              As with any creative project, so much of our work ended up on the
              proverbial cutting-room floor. The good news is that, on the
              internet, this work can still find a home! Our “archive” (in
              quotes because it is not actually an archive in the formal
              definition of the term) is our home for these prototypes and other
              creative explorations.
            </p>
            <h2 className="text-lg font-powerWide uppercase">The Stack</h2>
            <p>
              For more information about the libraries, tools, and processes
              that contributed to this site, please consult Chapter 6, “Labor.”
            </p>
          </CenteredLayout>

          <ChapterSectionTitle section={sections[1]}></ChapterSectionTitle>

          <CenteredLayout>
            <p>
              Data by Design, a project of the Emory Digital Humanities Lab, was
              created by an interdisciplinary team of faculty, staff, students,
              and professionals, collaborating across two continents, three
              states, and four institutions. We write about this collaboration
              in depth in the “Labor” chapter. More information about each
              contributor is below.
            </p>
            <p>
              Lauren Klein (Emory, Departments of Data & Decision Sciences and
              English) is the director of the project and conducted all of the
              historical and archival research. She also wrote most of the words
              that appear on the site.
            </p>
            <p>
              Tanvi Sharma (NYU, MS ‘23, Interactive Design and Media) is the
              lead designer on the project. She designed the project website,
              including both site-wide and page-specific interactions, as well
              as the custom visualizations and other illustrations. She also
              coauthored the “Labor” chapter.
            </p>
            <p>
              Jay Varner (Emory, Center for Digital Scholarship) is the lead
              developer on the project. He implemented most of the project
              website, including the final versions of all of the interactive
              components that appear throughout the site. He also contributed to
              the writing of the “Labor” chapter.
            </p>
            <p>
              Margy Adams (Emory, PhD ‘25, English) wrote the alt-text for the
              project site, and contributed research and ideas to the "Data"
              chapter. She also coauthored the “Labor” chapter.
            </p>
            <p>
              Shiyao Li (Emory, PhD ‘26, Computer Science) prototyped the
              visualizations for the "Data" and “Labor” chapters. He also
              contributed to the writing of the “Labor” chapter.
            </p>
            <p>
              Nicholas Yang (NYU, BA ‘22, Computer Science) is a developer on
              the project and former lead developer on the project. He
              implemented the "Introduction" and led the migration from Vue to
              React.
            </p>
            <p>
              Dan Jutan (Georgia Tech, BS ‘24, Computer Science) was the first
              lead developer on the project. He built the project prototype and
              alpha version of the site, including most interactive components.
            </p>
            <p>
              Jianing Fu (Georgia Tech, BS ‘21, Computer Science, Univ. of
              California, Berkeley, MEng ‘22, Computer Science) was a developer
              on the project. She built the components on the project’s front
              page, including the interactive timeline, for the project
              prototype and alpha versions of the site.
            </p>
            <p>
              Anna Mola (Emory, BA ‘22, Computer Science and Visual Arts) was a
              developer on the project. She built the components of the Playfair
              chapter for the project’s alpha version.
            </p>
            <p>
              Zhou Fang (Emory BA ‘22, Quantitative Sciences) was a developer on
              the project. She built the image browser component of the Change
              chapter for the project’s alpha version.
            </p>
            <p>
              Yang Li (Emory, Center for Digital Scholarship) is a developer on
              the project. He built the chapter navigation component for the
              project site, and contributed to the visualizations in the Change
              chapter.
            </p>
            <p>
              Silas Munro (Polymode) created the initial design concept for the
              site. Also at Polymode, Edgar Casarin and Brian Johnson
              contributed valuable ideas and feedback.
            </p>
          </CenteredLayout>

          <ChapterSectionTitle section={sections[2]}></ChapterSectionTitle>
          <CenteredLayout>
            <p>
              Following the community review, the Data by Design project team
              convened an advisory board to help parse the community feedback
              and contribute additional domain expertise. Advisory board members
              also participated in a manuscript workshop, and offered feedback
              on subsequent revisions. The members of the advisory board, in
              alphabetical order, are: Derya Akbaba, Alberto Cairo, Catherine
              D’Ignazio, Alex Gil, Laura Harjo, Jessica Marie Johnson, Matthew
              Jones, Miriah Meyer, and Britt Rusert.
            </p>
          </CenteredLayout>

          <ChapterSectionTitle section={sections[3]}></ChapterSectionTitle>
          <div className="mb-32">
            <div>
              <details>
                <summary className="text-xl  font-power py-2  mx-12 md:ml-[26rem] md:py-5 ">
                  Project Beta (2023-2025)
                </summary>
                <CenteredLayout>
                  <p>
                    The beta version of Data by Design was released in 2025 as
                    part of our open community review. It evolved out of the
                    project alpha, and was created by the faculty and students
                    associated with the Emory Digital Humanities Lab, in
                    collaboration with the{" "}
                    <a href="https://digitalscholarship.emory.edu/">
                      Emory Center for Digital Scholarship
                    </a>
                    and the design firm{" "}
                    <a href="https://www.polymode.studio/">Polymode</a>. The
                    project roles are the same as listed above.
                  </p>
                </CenteredLayout>
              </details>
            </div>
            <div className="">
              <details>
                <summary className="text-xl  font-power py-2  mx-12 md:ml-[26rem] md:py-5 ">
                  Project alpha (2021-2023){" "}
                </summary>
                {/* ALPHA  */}
                <TwoColumnLayout>
                  <Column className="pr-18">
                    <p>
                      <span className="font-power"> Citation </span>
                      <span className="select-all">
                        L. Klein, T. Sharma, D. Jutan, N. Yang, J. Fu, A. Mola,
                        Z. Fang, and S. Monro. <cite>Data by Design.</cite> 2023
                        alpha.
                      </span>
                    </p>
                    <p className="font-power  pt-5"> Code </p>
                    <p>https://github.com/EmoryDHLab/2021-data-by-design</p>
                    <p className="font-power pt-5 uppercase">
                      Project director: Lauren Klein
                    </p>
                    <p className="font-power pt-5 uppercase"> Designers: </p>
                    Tanvi Sharma (NYU, MS Interactive Design and Media ‘23),
                    <p>Silas Monro (Polymode)</p>
                    <p className="font-power pt-5 uppercase">
                      {" "}
                      Developers:{" "}
                    </p>{" "}
                    <p>Dan Jutan (Georgia Tech, BS Computer Science ‘24),</p>
                    <p> Nicholas Yang (NYU, BA Computer Science ‘22),</p>
                    <p>
                      {" "}
                      Jianing Fu (Georgia Tech, BS ‘21, Computer Science, Univ.
                      of California, Berkeley, MEng ‘22, Computer Science),{" "}
                    </p>
                    <p>
                      Anna Mola (Emory BA ‘22, Computer Science and Visual Art),
                    </p>
                    <p> Zhou Fang (Emory BA ‘22, Quantitative Sciences)</p>
                  </Column>
                  <Column className="px-3">
                    <p>
                      The alpha version of Data by Design was created between
                      2021 and 2023 by the faculty and students associated with
                      the Emory Digital Humanities Lab (formerly the Georgia
                      Tech Digital Humanities Lab), in collaboration with the
                      design firm Polymode. Lauren Klein directed the project
                      and conducted the historical and archival research for the
                      project. She also wrote the text for the site. Tanvi
                      Sharma was the lead designer on the project. She
                      prototyped the project website, designing both site-wide
                      and page-specific interactions, as well as the custom
                      visualizations that appear on the site. Dan Jutan was the
                      first lead developer on the project, between 2021 and
                      2022. He designed the site architecture, both frontend and
                      backend, and implemented both site-wide and page-specific
                      components, including those that appear on the Peabody
                      chapter page. Nicholas Yang joined the team as developer
                      and then lead developer on the project. He implemented the
                      components that appear on the Du Bois chapter page, as
                      well as several additional site-wide components. Jianing
                      Fu built the components on the project’s front page,
                      including the interactive timeline. Anna Mola built the
                      components of the Playfair chapter. Zhou Fang built the
                      image browser component of the Du Bois chapter. Silas
                      Munro created the initial design concept for the site.
                    </p>
                  </Column>
                </TwoColumnLayout>
              </details>
            </div>
            <div>
              <details>
                <summary className="text-xl  font-power py-2  mx-12 md:ml-[26rem] md:py-5 ">
                  Project prototype (2018-2021)
                </summary>
                <TwoColumnLayout>
                  <Column className="pr-18">
                    <p className="pb-4">
                      <span className="font-power"> Credits Citation </span>
                    </p>
                    <p>
                      <span className="select-all">
                        L. Klein, D. Jutan, J. Fu, Q. Tian, and A. Hayward.{" "}
                        <cite>Data by Design.</cite> 2021 prototype.
                      </span>
                    </p>
                    <p className="font-power"> Code </p>
                    <p>https://github.com/EmoryDHLab/2020-data-by-design</p>
                    <p className="font-power pt-5  uppercase">
                      {" "}
                      Project director:
                    </p>{" "}
                    <p>Lauren Klein</p>
                    <p className="font-power pt-5 uppercase"> Designer: </p>
                    <p>Qing Tian (Georgia Tech, MS Digital Media ‘19) </p>
                    <p className="font-power pt-5 uppercase">
                      {" "}
                      Developers:{" "}
                    </p>{" "}
                    <p>Dan Jutan (Georgia Tech, BS Computer Science ‘24), </p>
                    <p>Jianing Fu (Georgia Tech, BS ‘21, Computer Science), </p>
                    <p>Adam Hayward (Georgia Tech, BS Computer Science ‘19)</p>
                  </Column>
                  <Column className="px-3">
                    <span className="font-normal">
                      <p className="py-5">
                        <span className="">
                          The prototype for Data by Design was created between
                          2018 and 2021 by the faculty and students associated
                          with the Georgia Tech Digital Humanities Lab. Lauren
                          Klein directed the project and conducted the
                          historical and archival research for the project. She
                          also wrote the text for the site. Qing Tian was the
                          lead designer on the project. She designed the front
                          page as well as the custom page navigation for each of
                          the chapter pages. Adam Hayward, was the first lead
                          developer on the project between 2018 and 2019. He
                          designed the initial site architecture and implemented
                          the layout and visualizations for the Peabody chapter.
                          Dan Jutan took over as lead developer between 2019 and
                          2021, expanding the site architecture, both frontend
                          and backend, building a Google Docs-based authoring
                          system, and implementing a range of site-wide and
                          page-specific components. Jianing Fu built the
                          components on the project’s front page, including the
                          interactive timeline.
                        </span>
                      </p>
                    </span>
                  </Column>
                </TwoColumnLayout>
              </details>
            </div>
          </div>
        </main>
        <Footer />
      </ChapterContext.Provider>
    </div>
  );
}
