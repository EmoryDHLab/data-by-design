import ChapterTitle from "~/components/ChapterTitle";

import Footer from "~/components/Footer";
import { ChapterContext } from "~/chapterContext";
import { duboisFootnotes } from "~/footnotes";

import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";
import CenteredLayout from "~/components/layout/CenteredLayout";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";

const sections = [
  {
    title: "About this Review",
    id: "about-this-review",
  },
  {
    title: "About this Project",
    id: "about-this-project",
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
          backgroundColor: "duboisPrimary",
          accentColor: "duboisSecondary",
          footnoteTextColor: "duboisPrimary",
          primaryTextColor: "white",
          footnotes: duboisFootnotes,
          sections,
        }}
      >
        <ChapterTitle title="About" subtitle="" />

        <ChapterSectionTitle section={sections[0]}></ChapterSectionTitle>
        <main id="main-content pb-36">
          <CenteredLayout>
            <p className="first-paragraph py-10">
              Welcome to the community review for <em>Data by Design</em>, and
              thank you for your generosity and time. The review period for this
              draft will close on June 14th, 2024, although the ability to leave
              comments will still be available after that point.
            </p>

            <p>
              We chose to invite community feedback on this draft for several
              reasons. First, Lauren's prior experience with open community
              review while she and Catherine were drafting{" "}
              <em>Data Feminism</em> was among the most meaningful sources of
              feedback that they received while writing and revising the book.
              Readers were overwhelmingly generous with their comments-and their
              tough critiques–in ways that neither of us could have anticipated.
              This feedback greatly enriched the revision process and made the
              book so much better as a result.
            </p>

            <p>
              Second, this project takes on some difficult topics-some that
              certain members of our project team have studied, and others that
              certain members have directly experienced, but in no cases do we
              claim perfect knowledge or understanding about. In both our words
              and our design choices, we have almost certainly made mistakes. As
              a team, we have always sought to be reflexive and accountable-both
              to each other and to you, our readers, who we include in our
              community as well. We hope to learn from you about places where
              we've gotten things wrong, and about how we can do better.
            </p>

            <p>
              Finally, this is a project that aspires to speak to multiple
              audiences. These include visualization designers and researchers,
              data journalists and data scientists, and activists, organizers,
              and others who work with data and visualization as part of their
              jobs. Additional audiences include students and scholars from a
              range of academic fields, including digital humanities, literary
              and cultural studies, women's and gender studies, critical race
              studies, Indigenous studies, media studies, information
              science/studies, STS, and HCI, among others. We welcome your help
              in pointing out any places that may require additional
              explanation, that are missing crucial context, or where
              theoretical concepts are not clearly explained. 
            </p>

            <p>
              One of the mantras of this project team is that direct and
              critical words are a generous act. We interpret them as a vote of
              confidence in our ability to hear them and be transformed by them.
            </p>

            <p>
              Please email Lauren at{" "}
              <a href="mailto:lauren.klein@emory.edu">lauren.klein@emory.edu</a>{" "}
              with any comments that can't be registered via Hypothesis, or that
              you would rather not publicly disclose.
            </p>

            <p>
              Thank you, once again,<br></br>
              Lauren Klein, on behalf of the <em>Data by Design</em> project
              team
              <br></br>
              Tanvi Sharma, Jay Varner, Shiyao Li, Margy Adams, Nick Yang, Dan
              Jutan, Jianing Fu, Anna Mola, Zhou Fang, Yang Li, and Silas Munro
              <br></br>
              May 1, 2024
            </p>
          </CenteredLayout>

          <ChapterSectionTitle section={sections[1]}></ChapterSectionTitle>

          <TwoColumnLayout>
            <Column className="pr-18" shouldPin>
              <p className="pt-16">
                {" "}
                <p className="pb-4">
                  <span className="font-dubois"> Citation </span>
                  <p>
                    <cite className="select-all">
                      L. Klein, T. Sharma, J. Varner, S. Li, M. Adams, N. Yang,
                      D. Jutan, J. Fu, A. Mola, Z. Fang, Y. Li, and S. Munro.
                      Data by Design. 2024 public beta.
                    </cite>
                  </p>
                </p>
                <p>
                  <p className="font-dubois"> Code </p>
                  https://github.com/EmoryDHLab/data-by-design
                </p>
              </p>
            </Column>
            <Column className="px-3">
              <p className="pt-16 first-paragraph leading-7">
                Data by Design, a project of the Emory Digital Humanities Lab,
                was created by an interdisciplinary team of faculty, staff,
                students, and professionals, collaborating across two
                continents, three states, and four institutions.
              </p>
              <span className="font-normal">
                <p className="py-2">
                  <span className="font-medium"> Lauren Klein </span> (Emory,
                  Departments of Quantitative Theory & Methods and English) is
                  the director of the project and conducted the historical and
                  archival research for the project. She also wrote all of the
                  words that appear on the site.
                </p>
                <p className="py-2">
                  <span className="font-medium"> Tanvi Sharma </span> (NYU, MS
                  ‘23, Interactive Design and Media) is the lead designer on the
                  project. She designed the project website, including both
                  site-wide and page-specific interactions, as well as the
                  custom visualizations and other illustrations that appear on
                  the site.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium"> Jay Varner </span> (Emory,
                  Center for Digital Scholarship) is the lead developer on the
                  project. He implemented most of the project website, including
                  the final versions of all of the interactive components that
                  appear throughout the site.{" "}
                </p>
                <p className="py-2">
                  <span className="font-medium"> Shiyao Li </span> (Emory, PhD
                  ‘26, Computer Science) prototyped the visualizations of the
                  Voyages data for the "Description of a Slave Ship" chapter,
                  and the project team's data for the chapter about the making
                  of the site.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium"> Margy Adams </span> (Emory, PhD
                  ‘25, English) wrote the alt-text for the project site, and
                  contributed research and ideas to the "Description of a Slave
                  Ship" chapter.
                </p>{" "}
                <p className="py-2">
                  {" "}
                  <span className="font-medium"> Nicholas Yang </span> (NYU, BA
                  ‘22, Computer Science) is a developer on the project and
                  former lead developer on the project. He implemented the
                  "Introduction" and led the migration from Vue to React.{" "}
                </p>{" "}
                <p className="py-2">
                  {" "}
                  <span className="font-medium">Dan Jutan </span> (Georgia Tech,
                  BS ‘24, Computer Science) was the first lead developer on the
                  project. He built the project prototype and alpha version of
                  the site, including most interactive components.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium">Jianing Fu </span> (Georgia
                  Tech, BS ‘21, Computer Science, Univ. of California, Berkeley,
                  MEng ‘22, Computer Science) was a developer on the project.
                  She built the components on the project’s front page,
                  including the interactive timeline, for the project prototype
                  and alpha versions of the site.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium"> Anna Mola </span>(Emory, BA
                  ‘22, Computer Science and Visual Arts) was a developer on the
                  project. She built the components of the Playfair chapter for
                  the project’s alpha version.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium"> Zhou Fang </span> (Emory BA
                  ‘22, Quantitative Sciences) was a developer on the project.
                  She built the image browser component of the Du Bois chapter
                  for the project’s alpha version.
                </p>
                <p className="py-2">
                  <span className="font-medium"> Yang Li </span> (Emory, Center
                  for Digital Scholarship) is a developer on the project. He
                  built the chapter navigation component for the project site,
                  and contributed to the visualizations in the Du Bois chapter.
                </p>
                <p className="py-2">
                  <span className="font-medium"> Silas Munro </span> (Polymode)
                  created the initial design concept for the site.
                </p>
                <p className="py-2">
                  {" "}
                  Also at Polymode,{" "}
                  <span className="font-medium">Edgar Casarin</span> and{" "}
                  <span className="font-medium">Brian Johnson</span> contributed
                  valuable ideas and feedback.
                </p>
              </span>
            </Column>
          </TwoColumnLayout>

          <ChapterSectionTitle section={sections[2]}></ChapterSectionTitle>

          <div>
            <details>
              <summary className="text-xl  font-dubois py-2  mx-12 md:ml-[26rem] md:py-5 ">
                Project alpha (2021-2023){" "}
              </summary>
              {/* ALPHA  */}
              <TwoColumnLayout>
                <Column className="pr-18">
                  <p>
                    <p>
                      <span className="font-dubois"> Citation </span>
                      <p>
                        <cite className="select-all">
                          L. Klein, T. Sharma, D. Jutan, N. Yang, J. Fu, A.
                          Mola, Z. Fang, and S. Monro.{" "}
                          <cite>Data by Design.</cite> 2023 alpha.
                        </cite>
                      </p>
                      <p>
                        <p className="font-dubois  pt-5"> Code </p>
                        https://github.com/EmoryDHLab/2021-data-by-design
                      </p>
                    </p>
                    <p>
                      {" "}
                      <p className="font-dubois pt-5 uppercase">
                        {" "}
                        Project director:
                      </p>{" "}
                      Lauren Klein
                    </p>
                    <p>
                      <p className="font-dubois pt-5 uppercase"> Designers: </p>
                      Tanvi Sharma (NYU, MS Interactive Design and Media ‘23),
                      <p>Silas Monro (Polymode)</p>
                    </p>
                    <p>
                      <p className="font-dubois pt-5 uppercase">
                        {" "}
                        Developers:{" "}
                      </p>{" "}
                      Dan Jutan (Georgia Tech, BS Computer Science ‘24),
                      <p> Nicholas Yang (NYU, BA Computer Science ‘22),</p>
                      <p>
                        {" "}
                        Jianing Fu (Georgia Tech, BS ‘21, Computer Science,
                        Univ. of California, Berkeley, MEng ‘22, Computer
                        Science),{" "}
                      </p>{" "}
                      <p>
                        {" "}
                        Anna Mola (Emory BA ‘22, Computer Science and Visual
                        Art),
                      </p>
                      <p> Zhou Fang (Emory BA ‘22, Quantitative Sciences)</p>
                    </p>
                  </p>
                </Column>
                <Column className="px-3">
                  <p>
                    <span className="">
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
                    </span>
                  </p>
                </Column>
              </TwoColumnLayout>
            </details>
          </div>
          <div>
            <details>
              <summary className="text-xl  font-dubois py-2  mx-12 md:ml-[26rem] md:py-5 ">
                Project prototype (2018-2021)
              </summary>
              <TwoColumnLayout>
                <Column className="pr-18">
                  <p>
                    {" "}
                    <p className="pb-4">
                      <span className="font-dubois"> Credits Citation </span>
                      <p>
                        <cite className="select-all">
                          L. Klein, D. Jutan, J. Fu, Q. Tian, and A. Hayward.{" "}
                          <cite>Data by Design.</cite> 2021 prototype.
                        </cite>
                      </p>
                    </p>
                    <p>
                      <p className="font-dubois"> Code </p>
                      https://github.com/EmoryDHLab/2020-data-by-design
                    </p>
                  </p>
                  <p>
                    <p>
                      {" "}
                      <p className="font-dubois pt-5  uppercase">
                        {" "}
                        Project director:
                      </p>{" "}
                      Lauren Klein
                    </p>
                    <p>
                      <p className="font-dubois pt-5 uppercase"> Designer: </p>
                      Qing Tian (Georgia Tech, MS Digital Media ‘19){" "}
                    </p>
                    <p>
                      <p className="font-dubois pt-5 uppercase">
                        {" "}
                        Developers:{" "}
                      </p>{" "}
                      Dan Jutan (Georgia Tech, BS Computer Science ‘24),{" "}
                      <p>
                        Jianing Fu (Georgia Tech, BS ‘21, Computer Science),{" "}
                      </p>
                      <p>
                        Adam Hayward (Georgia Tech, BS Computer Science ‘19)
                      </p>
                    </p>
                  </p>
                </Column>
                <Column className="px-3">
                  <span className="font-normal">
                    <p className="py-5">
                      <span className="">
                        The prototype for Data by Design was created between
                        2018 and 2021 by the faculty and students associated
                        with the Georgia Tech Digital Humanities Lab. Lauren
                        Klein directed the project and conducted the historical
                        and archival research for the project. She also wrote
                        the text for the site. Qing Tian was the lead designer
                        on the project. She designed the front page as well as
                        the custom page navigation for each of the chapter
                        pages. Adam Hayward, was the first lead developer on the
                        project between 2018 and 2019. He designed the initial
                        site architecture and implemented the layout and
                        visualizations for the Peabody chapter. Dan Jutan took
                        over as lead developer between 2019 and 2021, expanding
                        the site architecture, both frontend and backend,
                        building a Google Docs-based authoring system, and
                        implementing a range of site-wide and page-specific
                        components. Jianing Fu built the components on the
                        project’s front page, including the interactive
                        timeline.
                      </span>
                    </p>
                  </span>
                </Column>
              </TwoColumnLayout>
            </details>
          </div>
        </main>
        <Footer />
      </ChapterContext.Provider>
    </div>
  );
}
