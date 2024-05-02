import ChapterTitle from "~/components/ChapterTitle";

import Footer from "~/components/Footer";
import { ChapterContext } from "~/chapterContext";
import { duboisFootnotes } from "~/footnotes";

import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";
import CenteredLayout from "~/components/layout/CenteredLayout";

const sections = [{ title: "", id: "" }];

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

        <main id="main-content">
          <TwoColumnLayout>
            <Column className="pr-18">
              <p className="pt-16">
                {" "}
                <p className="pb-4">
                  <span className="font-dubois"> Citation </span>
                  <p>
                    <cite className="select-all">
                      L. Klein, T. Sharma, J. Varner, S. Li, M. Adams,  N. Yang, D. Jutan, J. Fu,
                      A. Mola,  Z. Fang, Y. Li, and S. Munro.
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
                  archival research for the project. She also wrote all of the words
                  that appear on the site.
                </p>
                <p className="py-2">
                  <span className="font-medium"> Tanvi Sharma </span> (NYU, MS
                  ‘23, Interactive Design and Media) is the lead designer on the
                  project. She designed the project website, including both
                  site-wide and page-specific interactions, as well as the
                  custom visualizations and other illustrations that appear on the site.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium"> Jay Varner </span> (Emory,
                  Center for Digital Scholarship) is the lead developer
                  on the project. He implemented most of the project website,
                  including the final versions of all of the interactive components
                  that appear throughout the site.{" "}
                </p>
                <p className="py-2">
                  <span className="font-medium"> Shiyao Li </span> (Emory, PhD
                  ‘26, Computer Science) prototyped the visualizations of the Voyages
                  data for the "Description of a Slave Ship" chapter, and the project team's data for the chapter about the making of the site.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium"> Margy Adams </span> (Emory, PhD
                  ‘25, English) wrote the alt-text for the project site, and
                  contributed research and ideas to the "Description of a Slave Ship"  chapter.
                </p>{" "}
                <p className="py-2">
                  {" "}
                  <span className="font-medium"> Nicholas Yang </span> (NYU, BA
                  ‘22, Computer Science) is a developer on the project
                  and former lead developer on the project. He implemented the
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
                  MEng ‘22, Computer Science) was a developer on the project. She built the components on the
                  project’s front page, including the interactive timeline, for
                  the project prototype and alpha versions of the site.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium"> Anna Mola </span>(Emory, BA
                  ‘22, Computer Science and Visual Arts) was a developer on the project. She built the components of
                  the Playfair chapter for the project’s alpha version.
                </p>{" "}
                <p className="py-2">
                  <span className="font-medium"> Zhou Fang </span> (Emory BA
                  ‘22, Quantitative Sciences) was a developer on the project. She built the image browser component
                  of the Du Bois chapter for the project’s alpha version.
                </p>
                <p className="py-2">
                  <span className="font-medium"> Yang Li </span> (Emory, Center
                  for Digital Scholarship) is a developer on the project. He built the chapter navigation
                  component for the project site, and contributed to the visualizations in the Du Bois chapter.
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
          <CenteredLayout>
            <div className="bg-duboisSecondary p-4 font-dubois text-xl lg:text-2xl flex justify-center items-center text-black mb-5">
              Previous Versions
            </div>
          </CenteredLayout>
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
