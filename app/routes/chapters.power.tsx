import ChapterTitle from "~/components/ChapterTitle";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import InlineFootnote from "~/components/InlineFootnote";
import DocumentViewer from "~/components/power/DocumentViewer";
import Footer from "~/components/Footer";
import { ChapterContext } from "~/chapterContext";
import { powerFootnotes } from "~/footnotes";
import { useState } from "react";
import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";
import CenteredLayout from "~/components/layout/CenteredLayout";
import FootnotesList from "~/components/FootnotesList";
import figures from "~/data/figures/power.json";
import Quotation from "~/components/Quotation";
import HoverText from "~/components/HoverText";
import HoverImages1 from "~/components/power/HoverImages1";
import HoverImages2 from "~/components/power/HoverImages2";
import DoubleSlideShow from "~/components/power/DoubleSlideShow";
import Figure from "~/components/figures/Figure";
import SlideShow from "~/components/layout/SlideShow";
import { chapterMetaTags } from "~/utils";
import StudentCharts from "~/components/power/StudentCharts";
import ChapterBody from "~/components/layout/ChapterBody";
import Takeaways from "~/components/layout/Takeaways";
import ChartOneScrollytell from "~/components/power/duboisScrollytell/ChartOneScrollytell";
import ChartTwoScrollytell from "~/components/power/duboisScrollytell/ChartTwoScrollytell";
import ChartThreeScrollytell from "~/components/power/duboisScrollytell/ChartThreeScrollytell";
import { chapterMeta } from "~/data/chapterMeta";
import type { MetaFunction } from "react-router";
import type { TVizAnchors, HoverState } from "~/chapterContext";

export const meta: MetaFunction = () => {
  return chapterMetaTags("power");
};

const sections = [
  {
    title: "The Argument of Visualization, Reimagined",
    id: "the-argument-of-visualization-reimagined",
  },
  {
    title: "Charts, Photographs, and Facts ",
    id: "charts-photographs-and-facts",
  },
  {
    title: "Du Bois, Truth, and Visualization Today",
    id: "du-bois-truth-and-visualization-today",
  },
  {
    title: "The Work that Visualization Can Do",
    id: "the-work-that-visualization-can-do",
  },
];

const visualizations: TVizAnchors[] = [
  {
    type: "figures",
    id: "hover1",
    title: "Charts",
  },
  {
    type: "figures",
    id: "hover2",
    title: "Charts",
  },
  {
    type: "visualization",
    id: "side-by-side",
    title: "Side by Side",
  },
  {
    type: "visualization",
    id: "student-charts",
    title: "Student Charts",
  },
  {
    type: "visualization",
    id: "doc-viewer",
    title: "Document Viewer",
  },
  {
    type: "scrollytell",
    id: "scrollytell-1",
    title: "Scrollytell One",
  },
  {
    type: "scrollytell",
    id: "scrollytell-2",
    title: "Scrollytell Two",
  },
  {
    type: "scrollytell",
    id: "scrollytell-3",
    title: "Scrollytell Three",
  },
];

const chapterFigures = Object.values(figures);

export default function DuboisChapter() {
  const [hoverState, setHoverState] = useState<HoverState>(undefined);
  const [showFootnotes, setShowFootnotes] = useState<boolean>(false);

  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "powerPrimary",
        primaryTextColor: "white",
        accentColor: "powerSecondary",
        footnoteTextColor: "powerPrimary",
        footnotes: powerFootnotes,
        hoverState,
        setHoverState,
        chapterFigures,
        visualizations,
        sections,
        showFootnotes,
        setShowFootnotes,
      }}
    >
      <ChapterTitle
        title={chapterMeta.power.title}
        subtitle={chapterMeta.power.subtitle}
      />
      {/* <div className="chapter-body container"> */}
      <ChapterBody>
        <CenteredLayout>
          <p className="first-paragraph py-10">
            The last week of December 1899 had been cold and exceptionally
            rainy. <InlineFootnote index={0} /> But on the day after Christmas,
            when Lula Iola Mack crossed the “high and narrow iron bridge” from
            the women’s dormitory to the main campus of Atlanta University, one
            of the nation’s flagship Black colleges, to begin the winter term of
            her senior year, she likely walked with a confident step.
            <InlineFootnote index={1} /> She had already been awarded high
            honors after her sophomore year—the only member of her class to
            receive such recognition—and she was on track to repeat the feat
            when honors would be bestowed again at graduation.
            <InlineFootnote index={2} /> As she’d already concluded her
            preparatory coursework in sociology the previous term, having
            learned a range of state-of-the-art methods for data collection and
            analysis, she likely approached the first day of class feeling calm
            and prepared for what she thought would come next: a project
            involving “a general survey of social conditions,” just as the
            course was described in the
            <cite>
              Catalogue of the Officers and Students of Atlanta University
            </cite>
            , which served as every student’s main reference text, and just as
            the course had been structured the year before.{" "}
            <InlineFootnote index={3} />
          </p>

          <p>
            Little did Mack know—or, for that matter, did her professor—that the
            shape of the 1899-1900 winter-term sociology course was about to
            dramatically change. Since the previous fall, a Washington, DC-based
            lawyer and government official by the name of Thomas J. Calloway had
            been leading a letter-writing campaign with a simple if ambitious
            goal: the 1900 <em>Exposition Universelle</em> would be staged in
            Paris the following spring, and Calloway was determined that the
            United States should install an “Exhibit of American Negroes,” which
            would stand alongside the other celebratory displays of national
            might and ingenuity that were typical of World’s Fairs at the time.{" "}
            <InlineFootnote index={4} />
          </p>
          <p>
            On January 25th, 1900—one month to the day after the winter term at
            Atlanta University had begun—Calloway received a financial
            commitment from the federal government and began to plan the exhibit
            in earnest. <InlineFootnote index={5} /> He tasked Daniel A.P.
            Murray, then the Assistant Librarian of Congress, with assembling a
            set of books by Black writers to put on display, while reaching out
            to a college friend to conceptualize the “social study” he also had
            in mind. <InlineFootnote index={6} />
            This friend was Mack’s professor, none other than the esteemed
            sociologist, author, and activist W.E.B. Du Bois. And for the next
            three months, Mack, Du Bois, the three other students enrolled in
            his year-long sociology sequence, and an additional student—William
            Andrews Rogers—who had graduated the previous spring, threw
            themselves into the work that would culminate in a set of “plans,
            charts, and figures” for the Paris Exposition, as the event was also
            called. <InlineFootnote index={7} /> Once installed in the southeast
            corner of the Palace of Social Economy, the charts would be viewed
            over fifty million visitors from around the world who would travel
            to Paris over the course of the Exposition’s seven-month run.{" "}
            <InlineFootnote index={8} />
          </p>
        </CenteredLayout>
        <div className="flex md:flex-row flex-col max-w-5xl ">
          <div className="basis-1/2">
            <Figure
              figure={figures["paris-expo-loc"]}
              className="mx-2 md:mx-12 text-sm md:text-base"
              captionClassName="text-center"
            />
          </div>
          <div className="basis-1/2">
            <Figure
              figure={figures["Group-XVI-floorplan"]}
              className="mx-2 md:mx-12 text-sm md:text-base"
              captionClassName="mx-12"
            />
          </div>
        </div>
        <CenteredLayout>
          <p>
            The 63 (or 64) poster-sized charts that Mack, Du Bois, and the other
            Atlanta University students made for the Paris Exposition were
            organized into two sets, as visually compelling as they were
            sociologically profound. <InlineFootnote index={9} /> The first,
            <cite>The Georgia Negro: A Sociological Study</cite>, consisted of
            36 charts visualizing statistics related to the Black population of
            that state. Scholars generally believe that Rogers, the graduate
            from the year before, was responsible for much of the design and
            implementation of this set of charts. <InlineFootnote index={10} />
            The second set,
            <cite>
              A Series of Statistical Charts Illustrating the Condition of the
              Descendants of Former Slaves Now in Residence in the United States
              of America
            </cite>
            , drew from several data sources, including the US Census, in order
            to put the Black population of the United States in national and
            international perspectives.
            <InlineFootnote index={11} /> These are the charts that are
            generally attributed to Du Bois’s sociology students, although Du
            Bois does not credit them by name.
            <InlineFootnote index={12} />
          </p>

          <p>
            Photos of the exhibit show shelves lined end-to-end with the books
            collected by Murray. The top of the bookcase, at counter height, is
            stacked with more books, pamphlets, and other artifacts—including
            some of the charts—intended to be perused. Above the bookcase are
            more charts, along with photographs and additional artifacts, each
            encased in a picture frame or swing-out vitrine and installed in
            three dense rows. Looking left, right, or center; up, down, or
            straight ahead, visitors would perceive the bright colors and bold
            patterns of what scholars Whitney Battle-Baptiste and Britt Rusert
            evocatively characterized as <cite>Du Bois’s Data Portraits</cite>,
            as they titled in their landmark 2017 book.
            <InlineFootnote index={13} /> Now recovered and reincorporated into
            the history of data visualization, the charts have captivated a new
            generation of visualization designers and enthusiasts who see in
            them evidence of how visualization can be enlisted in the service of
            justice while also advancing the formal possibilities of the field.
          </p>

          <p>
            And yet, in a visualization context, when the story of the charts is
            generally told, it tends to follow an arc that much like that of
            William Playfair, Charles Minard, and other “founders” and “fathers”
            of the field. This results in Du Bois being celebrated for his
            singular achievement without the additional credit—or context—that
            allows us to understand the full significance of the charts. To be
            sure, just like Playfair’s line graphs, Minard’s flow map, and so
            many deservedly iconic charts, the charts created for the Paris
            Exposition exemplify the power of visualization to expose
            significant patterns and trends, in Du Bois’s own words, “at a
            glance.” <InlineFootnote index={14} /> In the case of these charts
            in particular, they expose a compelling trend: the growth and
            progress of Black Americans in spite of the intensity of the
            “prejudice” (Du Bois’s term for racism) that they still faced.
            <InlineFootnote index={15} /> But as a scholar who was then
            pioneering the idea of mixed-methods research, and—put plainly—as a
            Black man in the United States, Du Bois was as attuned to the limits
            of visualization as he was to its uses. His scholarly expertise and
            lived experience both pointed to the fact that visualization
            <em>on its own</em>could not hope to convey a complete picture of
            the progress of Black Americans to date, just as visualization
            <em>on its own </em> could not create the change that that would be
            required to achieve a true experience of freedom.
          </p>
          <p>
            This is the reason that <cite>Data by Design</cite> concludes with a
            chapter on Du Bois, his charts, and the students who helped to
            create them: to show how data visualization is best understood as
            one method, among many, that can be together enlisted in the service
            of social change. Indeed, if this book began by considering the
            power of data visualization to change the mind of a King, it now
            concludes with an example of its power to change the minds of the
            people—that is to say, of a wide range of viewers, with a wide range
            of perspectives, who are not always aligned in their values or
            goals. As we will learn over the course of this chapter, Du Bois was
            required to recalibrate his own confidence in the power of data
            visualization, and data analysis more broadly, as a result of the
            racism—at, in one particular moment, outright racial terror—that he
            personally faced. But in the end, it is the example of Du Bois
            <em>through his students</em> that leads us closer to reaching the
            goals we all share: of striving for more complete knowledge, the
            pursuit of the truth, and a more just, informed, and equitable
            world.
          </p>
          <p>
            By illustrating the importance of placing visualization in its
            social and political context, by emphasizing how lived experience
            can enhance scholarly expertise, and by remaining open to additional
            methods of making knowledge, the charts of the Paris Exposition
            place us on a path to a more liberatory practice of visualization
            design. More than that, by reminding us of the power that each of us
            holds in choosing how to tell a story—about the charts designed by
            Du Bois and his students, about the broader history of data
            visualization, and through the charts that we ourselves design—this
            chapter seeks to affirm our responsibility as both designers and
            viewers,sources and subjects, and students and teachers, modeling
            how we can each pursue greater knowledge and social change from our
            particular place in the world.
          </p>
        </CenteredLayout>

        {/* This sections layout needs to be figured out  */}
        <ChapterSectionTitle section={sections[0]} />

        <CenteredLayout>
          <p>
            Lula Mack and the other students who co-created the charts—Henry
            Napoleon Lee, Edward Lee Simon, and William George
            Westmoreland—would have needed to wait until Du Bois returned from
            Paris in order to learn how their charts were installed.{" "}
            <InlineFootnote index={16} /> It’s unknown as to whether any of them
            ever saw the photograph of the exhibit, above, which was published
            in an article written by Du Bois that first appeared in the November
            1900 issue of the <cite>American Monthly Review of Reviews.</cite>
            <InlineFootnote index={17} /> But having worked so intensely on the
            charts for the months leading up to the show, the students would
            have known the charts’ contents in intimate detail. After all, they
            had not only designed the visualizations; they had also compiled the
            data.
          </p>

          <p>
            The organizing principle of Du Bois’s year-long sociology sequence
            was to involve his students in the research (and requisite skills of
            data analysis) required to produce the Atlanta University Studies.
            These annual reports, on topics of Black American life ranging from
            business to religion to public health to crime, were presented each
            spring at a large public conference and, several weeks or months
            later, published by Atlanta University’s in-house printing press for
            broader circulation. <InlineFootnote index={18} />
            In fact, Du Bois was recruited to Atlanta University in large part
            to assume direction of the studies. The first was published only two
            years before his arrival, but they had already become one of the
            school’s defining intellectual contributions. William Andrews Rogers
            had contributed to the study the previous year.{" "}
            <InlineFootnote index={19} /> This is likely why Du Bois recruited
            Rogers to help design the first set of charts, on the Black
            population of Georgia. Meanwhile, Mack, Lee,Simon, and Westmoreland
            were likely the primary contributors to the second set of charts, on
            the Black population of the US overall.
            <InlineFootnote index={20} />
          </p>
        </CenteredLayout>

        <DocumentViewer />

        <CenteredLayout>
          <p>
            In the exhibition space, Du Bois mounted the introductory chart of
            each set—a title page of sorts—directly at eye-level against the far
            wall. Clearly, Du Bois wanted these charts to be seen. In the
            center-left position was the introductory chart of
            <cite>The Georgia Negro</cite>
            series, comprised of a pair of Mercator projections, one of Africa
            and the other of the Americas, their connection indicated by lines
            that link key locations. Shading in yellow, black, and brown that
            suggests additional thematic relationships. As the key below the
            image clarifies, what are depicted are the “routes of the African
            slave trade.” Two epigraphs fill what would otherwise be empty space
            at the bottom of the chart. The first makes the expository aim of
            the series explicit: “to illustrate the development of the American
            Negro in a single typical state of the United States.” The second
            advances its argument: “The problem of the 20th century is the
            problem of the color line.”
          </p>

          <p>
            These words would reappear three years later in{" "}
            <cite>The Souls of Black Folk</cite>, where they would become
            “perhaps Du Bois’s most famous indictment of the centrality of race
            and racism to modern American sociopolitical life,” as architectural
            historian Mabel O. Wilson explains. <InlineFootnote index={21} />
            But one of Du Bois’s students—Rogers, most likely—was the first to
            set these lines in type. More than that, these students were living
            with the effects of the color line every day. In the aftermath of
            Reconstruction and the end of federal support for the laws and
            policies that would support Black Americans as full and equal
            citizens, the period beginning in 1877 and running through the 1890s
            was characterized by state-level laws enforcing racial segregation
            through a combination of direct and indirect means. The effects of
            these laws, colloquially known as Jim Crow, were compounded by the
            rise of the Ku Klux Klan (which had been founded in 1865, on the eve
            of emancipation) and more generally, by the legitimization of racial
            terror on behalf of Southern whites. In point of fact, the decade
            leading up to the Paris Exposition had been the most outwardly
            violent and oppressive since the end of the Civil War.
            <InlineFootnote index={22} />
          </p>
          <p>
            This was the same context that, just a few years earlier, had
            prompted the investigative journalist Ida B. Wells to compile the
            first comprehensive dataset on lynching, which she published as
            <cite>
              A Red Record: Tabulated Statistics and Alleged Causes of Lynchings
              in the United States in 1895
            </cite>
            . A form of counterdata collection from more than a century before
            the term was coined, Wells—like Du Bois at the time—believed that
            the first step to eradicating this epidemic of racial terror would
            be to collect data, or “statistics” as they were known at the time,
            that could document its scope and scale.
            <InlineFootnote index={23} />
          </p>
          <p>
            Of course, as the twentieth century unfolded, data and the (very
            often spurious) statistical claims that data enabled would become a
            primary means of racial surveillance, eugenic policy, and social
            control. <InlineFootnote index={24} /> But in this particular
            moment, before the power of data and statistics had been fully
            consolidated in the hands of the state, the “very newness of these
            technologies also created loopholes” for Black and white data
            activists alike, literary scholar Autumn Womack explains.
            <InlineFootnote index={25} />
            This resulted in “enthusiasm and curiosity” and, in the case of
            Wells, Du Bois, and likely his students as well, the belief that
            data—when collected, analyzed, and communicated with accuracy and
            care—could bring the nation closer to the goals of “life, liberty,
            and the pursuit of happiness” that its foundational documents
            proudly proclaimed. <InlineFootnote index={26} />
          </p>
        </CenteredLayout>

        {/* // Maybe below text should be Two Col*/}
        <CenteredLayout>
          <p>
            This combination of enthusiasm, curiosity, and conviction is clearly
            evident in the charts. Intent on demonstrating the "progress and
            prospects" of Black Americans in spite of the constraints on their
            freedom they faced, Du Bois and his students took active steps to
            ensure that there would be no misinterpretation of the insights they
            hoped that their charts would convey.
            <InlineFootnote index={27} /> They carefully selected specific
            facets of each dataset, at times also devising novel visualization
            forms, so as to ensure that this message would be clear. The Black
            population of Georgia is shown to increase every decade; the number
            of Black children enrolled in school is similarly shown to be on the
            rise; land ownership is documented as growing nearly every year of
            the previous twenty-five; and the assessed value of Black Georgians'
            property has exploded so exponentially that it requires a wholly new
            visual form—a bar chart curved into a spiral—for the most recent
            values to even fit on the page. Indeed, the increasingly novel
            visual forms that characterize the sequencing of the charts also
            seem to ask viewers to imagine Black progress through the lens of
            Black creativity: what might come to be if the future of Black
            America, like the expressive possibilities of data visualization,
            were also not curtailed by convention and code?
          </p>
          {/* // Insert 3 charts  */}

          {/* // Insert Spiral Chart  */}
          <p>
            Consider, for example, how the first several charts in the series
            make use of familiar visual strategies—maps, bar charts, and line
            graphs—in order to introduce the exhibition's international
            viewership to the state of Georgia and its significance as an object
            of study. But the visual style shifts into new terrain once the
            focus on Georgia's Black residents has been established. A
            comparative representation of the places where Georgia's Black
            citizens reside is where Du Bois and his students introduce their
            iconic spiral, for example, bringing together aspects of the bar
            chart and the line chart along with this new form of circular graph
            in order to animate the increasing presence of Black people
            throughout the state. In this context, it seems doubly significant
            that the green and blue lines at the top of the chart mirror the
            path of the northern border of the state of Georgia before zigging
            and zagging out of known geographical space; the state would be
            wholly transformed if its Black citizens could fully flourish, this
            form seems to suggest.
            <InlineFootnote index={28} />
          </p>
          {/* // Insert ZigZag Chart  */}
          <p>
            In a later chart in the series, which documents the decrease in the
            rate of "illiteracy" in the years between 1860 and 1900, the team
            makes use of what graphic designer (and <cite>Data by Design</cite>
            contributor) Silas Munro describes as a "lattice-like arrangement,"
            in which an otherwise standard bar is folded at a right angle in
            order to accentuate the decreasing rate of illiteracy over time.
            <InlineFootnote index={29} /> As a result of the fold, the dark
            shading, and the fact that the time-scale on the y-axis has been
            adjusted so as to display a constant slope, the viewer cannot but
            perceive the data's clear downward trend. Of <em>course</em> Black
            Americans had achieved significant progress since the abolition of
            slavery, Du Bois and his students seem to want to convey. But what
            else might be possible—in terms of contributions to visualization
            design as to the nation—if these students and all Black Americans
            could engineer their own charts, and their futures, unconstrained by
            the "color line"?
          </p>
          {/* // Insert Modified Bar  Chart  */}
          <p>
            The second set of charts—the set more often attributed to Du Bois's
            students—continues to communicate this narrative of "progress and
            prospects" against the backdrop the color line. This set is
            distinguished from the first for how it makes use of comparisons to
            other populations, as well as to other charts. At the same time that
            Du Bois was teaching his students how to conduct "a general survey
            of social conditions" and analyze its results, as the course
            catalogue described the focus of his winter term course, Du Bois was
            himself carrying out survey work for the US Bureau of Labor
            Statistics.
            <InlineFootnote index={30} /> While it remains unknown as to whether
            the results of these surveys were ever incorporated into the larger
            statistical reports that the government released, the design of
            certain charts from the Paris Exposition make clear that Du Bois and
            his students had the topic of federal data collection—and the
            information that the government lacked—plainly in their sights.
          </p>
          <p>
            In 1894, the chief geographer for the US Census, Henry Gannett, had
            released a pamphlet that compiled and visualized statistics on Black
            Americans on the basis of one hundred years of US Census data.
            <InlineFootnote index={31} /> Among the charts was one labeled,
            "Conjugal Condition of the Negro Element," which Gannett marshalled
            in the service of a eugenicist argument about the relative weakness
            of the US Black population in relation to the white one.
            <InlineFootnote index={32} /> (A similar chart of the entire US
            population appears in the illustrated edition of 1890 US Census,
            also overseen by Gannett).
            <InlineFootnote index={33} /> For the Paris Exposition, Du Bois and
            his students recreate the original Gannett chart as "Conjugal
            Condition of American Negroes according to Age Periods" as the
            seventeenth of their twenty-seven charts. Seemingly akin to how,
            earlier in the century, abolitionists such as David Walker advocated
            that Black citizens read the racist arguments made by Thomas
            Jefferson, and other white people of the time, so as to be able to
            directly refute them—or, as might be termed "counter-visualization"
            today—Du Bois seemingly sought to enlist his students in refuting
            Gannett's arguments through the same form that had been used to
            advance them in the first place: the chart.
            <InlineFootnote index={34} />
          </p>
          {/* // Insert 3 charts  */}
          <p>
            The illustrated edition of the 1890 census in which the Gannett
            chart also appeared, formally titled
            <cite>
              Statistical Atlas of the United States, based on the results of
              the eleventh census
            </cite>
            , had been published just a year earlier, in 1898, and must have
            also been a topic of classroom discussion. This is evident in the
            visual similarity between a chart that appears in the
            <cite>Atlas</cite>, "Growth of the Elements of the Population:
            1790-1890," and the graduated area chart, "The Amalgamation of White
            and Black elements of the population in the United States," which
            immediately follows the "Conjugal Condition" chart in the student
            set. The notable difference, here, is the focus on the US Black
            population alone. Whereas in Gannett's version, the white
            population—titled "native stock"—is in the center of the diagram, Du
            Bois and his students shift the frame to focus on the Black
            population, which in this version is shaded black, so as to command
            the visual attention it deserves. A thin jagged line at the top,
            grid lines that extend off the side of the page, and the label (but
            no associated statistics for) "whites," are that remain in the
            students' chart as visual indicators of what has been excluded. But
            there is no mistaking the reason why the white population has been
            excluded here: by mirroring the form of the chart in the
            <cite>Atlas</cite>, but focusing on the Black population alone, the
            charts reinforce the idea Du Bois put into words later that year
            when recalling the show: that this "small nation of people" within
            the larger United States, its triumphs and its challenges, deserved
            to have a national statistical atlas of its own.
            <InlineFootnote index={35} />
          </p>

          {/* // Insert 2 charts side by side */}
        </CenteredLayout>

        <TwoColumnLayout>
          <Column>
            <p>
              Indeed, in this chart and the others that diverge by
              then-conventional visualization techniques is evidence of an
              additional argument that—like Playfair's charts—is made through
              the intentional choice of visual form. This has to do with the
              as-yet-realized possibilities for Black life if it were supported
              in its flourishing, rather than be actively suppressed. Consider
              how the first several charts in the series make use of familiar
              visual strategies—maps, bar charts, and line graphs—in order to
              introduce the exhibition's international viewership to the state
              of Georgia and its significance as an object of study. But the
              visual style shifts into new terrain once the focus on Georgia's
              Black residents has been established.{" "}
              <HoverText hoverState="City" className="font-medium">
                A comparative representation of the places where Georgia's Black
                citizens reside{" "}
              </HoverText>
              is where Du Bois introduces his iconic spiral, for example,
              bringing together aspects of the bar chart and the line chart
              along with this new form of circular graph in order to animate the
              increasing presence of Black people throughout the state. In a
              later chart in the series, which documents{" "}
              <HoverText hoverState="Illiteracy" className="font-medium">
                the decrease in illiteracy rates in the years between 1860 and
                1900
              </HoverText>{" "}
              , Du Bois makes use of what graphic designer (and contributor to
              this project) Silas Munro describes as a “lattice-like
              arrangement,” in which an otherwise standard bar is folded at a
              right angle in order to further accentuate the decreasing rate of
              illiteracy over time. Du Bois elaborates upon this technique in a
              later chart, which{" "}
              <HoverText hoverState="Owners" className="font-medium">
                compares the numbers of Black property owners, and the value of
                their properties, in two Georgia cities
              </HoverText>{" "}
              , building upon his own visual language to represent the progress
              that had been achieved by the Black residents of Georgia in spite
              of the efforts of their white compatriots.
            </p>
            <p>
              Compared to the easily interpretable “picture of the past” that
              Playfair designed his time-series charts to convey, the sequence
              of{" "}
              <HoverText hoverState="Value" className="font-medium">
                increasingly novel visual forms
              </HoverText>{" "}
              that characterizes the <em>Georgia Negro</em> series charts seems
              to ask viewers to imagine future Black progress through the lens
              of Black creativity: what might come to be if the future of Black
              America, like the expressive possibilities of data visualization,
              were also not curtailed by convention and code. Of course Black
              Americans had already excelled through all normative measures, the
              more typical charts easily confirmed. But what else might be
              possible—in terms of contributions to visualization design, or to
              the nation—if Black Americans could engineer their own charts, and
              their futures, unconstrained by the “color line”?
            </p>
          </Column>
          <Column shouldPin className="md:p-10">
            <HoverImages1 />
          </Column>
        </TwoColumnLayout>
        <SlideShow
          className="block md:hidden bg-black text-white w-full py-10 mb-8"
          figures={[
            figures["ch5-03-georgia"],
            figures["ch5-04a-city"],
            figures["ch5-04b-illiteracy"],
            figures["ch5-04c-owners"],
            figures["ch5-06a-letter"],
          ]}
        />

        <TwoColumnLayout>
          <Column>
            <p className="first-paragraph">
              Du Bois continues to affirm these imaginative possibilities
              through the graphical innovation of the second series of charts,
              which focuses on the “condition of the descendants of former
              African slaves now resident in the United States of America,” as
              its introductory chart explains. In this series, Du Bois was also
              joined by his students as co-designers, as a later section of this
              chapter will further explore. Here, what is significant is how, in
              documenting the upward progress of Black Americans in a national
              and international context, Du Bois and his students make use of
              comparisons to other populations—and to other charts—in order to
              affirm a narrative of progress and possibility with respect to
              Black Americans' social, intellectual, and economic lives.
            </p>

            {/* <p>
             They also make use of{" "}
              <HoverText hoverState="Countries" className="font-medium">
                comparisons to other populations,
              </HoverText>{" "}
              both within the United States and abroad, in order to challenge
              racist assumptions about Black Americans' social, intellectual,
              and economic lives. As with the first series of charts, this
              series begins with several charts{" "}
              <HoverText hoverState="Occupations" className="font-medium">
                focused on population,
              </HoverText>{" "}
              <HoverText hoverState="Freedom" className="font-medium">
                before moving on to explore themes related to employment,
              </HoverText>{" "}
              education, and{" "}
              <HoverText hoverState="Newspapers" className="font-medium">
                economics,
              </HoverText>{" "}
              as well as social, cultural, and religious life.
            </p> */}

            <p>
              A clear but unnamed interlocutor in this series is the US Federal
              Government, which for each of the three previous national
              censuses, had created a statistical atlas that visualized the data
              collected at national scale. The most recent of these atlases,
              based on the 1890 Census, had been published only two years
              earlier, in 1898. Most famous today for its visual depiction of
              the closing of the American frontier—a symbol to the
              settler-colonial nation that its goals of “manifest destiny” had
              run its course, and to Native peoples that their displacement was
              complete—the <cite>Statistical Atlas of the United States</cite> ,
              based on the results of the eleventh census in its own time was
              motivated by a more pedagogical goal: “popularizing and extending
              the study of statistics.”
              <InlineFootnote index={8}></InlineFootnote>
            </p>
            <p>
              The atlas was overseen by the then-chief geographer for the US
              Geological Survey, Henry Gannett, and was comprised of 409 maps
              and diagrams. The sequence began, just as Du Bois's did, by
              introducing viewers to the statistics on population{" "}
              <HoverText hoverState="Map" className="font-medium">
                statistics on population
              </HoverText>{" "}
              T. Through by-then-standard bar charts, pie charts, and line
              graphs, as well as its own creative use of pattern and visual
              form, the atlas included, for example, a{" "}
              <HoverText hoverState="Populations" className="font-medium">
                prototypical bump chart that ranked each state according to its
                population
              </HoverText>{" "}
              ; a map that illustrated{" "}
              <HoverText hoverState="Gender" className="font-medium">
                {" "}
                the spatial distribution of the nation's male population
              </HoverText>{" "}
              ; and another that illustrated{" "}
              <HoverText hoverState="Race" className="font-medium">
                the spatial distribution of the nation's Black population.
              </HoverText>{" "}
              . (Another chart used
              <HoverText hoverState="Race-Distribution" className="font-medium">
                area charts in small multiples in order to compare certain
                states' Black and white populations
              </HoverText>{" "}
              ).
            </p>

            <p>
              While race was certainly of concern in the census—indeed, it
              remains one of the lighting rod issues of the census even today—it
              was not the <cite>Statistical Atlas's </cite>
              main concern. Reading further into the intent conveyed through the
              sequence of maps, after an early series of charts that visualize
              the nation's Black population, the focus of the atlas shifts,
              turning first to
              <HoverText hoverState="Foreign" className="font-medium">
                {" "}
                the nation's immigrant population{" "}
              </HoverText>{" "}
              before expanding outward to consider other features altogether:
              <HoverText hoverState="Age-Sex" className="font-medium">
                {" "}
                the population's age and gender breakdown
              </HoverText>{" "}
              , the country's increasingly diverse
              <HoverText hoverState="Religion" className="font-medium">
                religious groupings
              </HoverText>{" "}
              , the
              <HoverText hoverState="Occupation" className="font-medium">
                occupations of its inhabitants
              </HoverText>
              , and more.
            </p>
          </Column>
          <Column shouldPin>
            <HoverImages2 />
          </Column>
        </TwoColumnLayout>

        <SlideShow
          className="block md:hidden bg-black text-white w-full py-10 mb-8"
          figures={[
            figures["ch5-05a-countries"],
            figures["ch5-05a-countries"],
            figures["ch5-05b-occupations"],
            figures["ch5-05c-freedom"],
            figures["ch5-05d-newspapers"],
            figures["ch5-06b-map"],
            figures["ch5-04d-value"],
            figures["ch5-07a-populations"],
            figures["ch5-07b-gender"],
            figures["ch5-07c-race"],
            figures["ch5-07d-race-distrib"],
            figures["ch5-07e-foreign"],
            figures["ch5-07f-age-sex"],
            figures["ch5-07g-religion"],
            figures["ch5-07h-occupation"],
          ]}
        />

        <TwoColumnLayout>
          <Column shouldPin>
            <p>
              Du Bois's charts were clearly influenced by the{" "}
              <em>Statistical Atlas</em>. Several of his own diagrams mirror the
              form of those created for the atlas. Du Bois's graduated area
              chart of “The Amalgamation of White and Black elements of the
              population in the United States,” for example, takes the same
              visual form as the chart in the <em>Statistical Atlas</em>{" "}
              depicting “Growth of the Elements of the Population: 1790-1890.”
              Similarly, the combined area and bar chart form that Du Bois
              employs for his chart of “Conjugal Condition of American Negroes
              according to Age Periods” is the very same as the chart in the{" "}
              <em>Statistical Atlas</em> depicting “Conjugal Condition of the
              Population by Age and Sex, in proportion to the total number of
              each group.” The notable difference within each pair is, of
              course, Du Bois's focus on the Black population alone. And for Du
              Bois, this difference in data was the point: the nation's Black
              population was itself diverse, and it was thriving. By adopting
              the visual typologies of the Statistical Atlas in order to make
              his claims, Du Bois underscores his textual argument about the
              “small nation of people” within the larger United States by
              creating a national statistical atlas of their own.
            </p>
          </Column>
          <Column>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:ml-24">
              <Figure figure={figures["ch5-08a-population"]} />
              <Figure figure={figures["916"]} />
              <Figure figure={figures["ch5-08c-conjugal"]} />
              <Figure figure={figures["ch5-08d-db-conjugal"]} />
            </div>
          </Column>
        </TwoColumnLayout>

        <ChapterSectionTitle section={sections[2]} />
        <CenteredLayout>
          <p>
            Today, the charts of the Paris Exposition are often shared as single
            images, embedded in a post on social media, or—as in the case of{" "}
            <cite>W.E.B. Du Bois's Data Portraits</cite>, bound as a dazzling,
            full-color book. But in their own time, the charts were intended to
            be viewed in relation to the other artifacts on display. There were
            the 200 books that had resulted from Murray's attempt to include
            every Black-authored text that had been published to that point,
            along with a more complete 1,400 item bibliography. There were
            physical artifacts, including a bronze statuette of Frederick
            Douglass and a "remarkable" wood frame carved by a man who was
            formerly enslaved, among other examples of wood and metalwork from
            students and faculty at the Tuskegee and Hampton Institutes, and
            other Black colleges and industrial schools.
            <InlineFootnote index={36} /> There was a three-volume compilation
            that Du Bois titled "Black Codes of Georgia," which contained a
            catalog of all of the discriminatory laws enacted in the state since
            the end of the Civil War, one of the few explicit acknowledgements
            in the exhibit of the harsh reality of being Black in the
            post-Reconstruction United States.
            <InlineFootnote index={37} />
          </p>
          <p>
            And then there were the photographs—and photographs there were. The
            exhibit included over 500 original prints documenting Black
            Americans at home, at work, and at school—including at Atlanta
            University, where a group of four women students were photographed
            on the steps of their classroom building. Was one of these students
            Lula Mack? Were these the four women students of the Class of 1901,
            who were then juniors, representing the largest cohort of women
            students at Atlanta University to that point? Alternately, or in
            addition, did any of these women students live with Mack in the
            "plain four story brick building" on the corner of West Hunter and
            Vine Streets that served as the women's dorm?
            <InlineFootnote index={38} /> We cannot answer these questions with
            certainty, but we can say what Du Bois (or more accurately, the
            photographer Thomas Askew) was trying to achieve with this shot: an
            overturning of "conventional American ideas" about what the nation's
            Black citizenry looked like, what social and professional roles they
            occupied, and in the case of these four women, what they had yet to
            achieve.
            <InlineFootnote index={39} />
          </p>

          {/* Insert Image of women  */}
          <p>
            The art historian Shawn Michelle Smith connects the Paris Exposition
            photographs to Du Bois's idea of double consciousness, as
            articulated most famously in <cite>The Souls of Black Folk</cite> as
            "the sense of always looking at one's self through the eyes of
            another."
            <InlineFootnote index={40} /> With the photographs, which not only
            featured Black people but were also created by them, Du Bois sought
            to present to a predominantly white international audience a view of
            how Black Americans saw themselves.
            <InlineFootnote index={41} /> When we see how the charts were
            installed alongside the photographs, it becomes all the more
            apparent that the charts are also pushing back against this double
            consciousness, albeit through a different visual form.
            <InlineFootnote index={42} /> In direct comparison to the government
            statistics collected by Gannett, who was white, the charts created
            by Du Bois and his students can be interpreted as expressing their
            own assessment of the status of race and racism in America at the
            time.
          </p>
          <p>
            At the same time, Du Bois's decision to pair the charts with the
            photographs also points to his awareness of the limits of what
            either medium—the one quantitative, the other qualitative—could
            achieve on its own. While the photographs could document the
            richness of individual lives, they could not possibly document the
            life of every one of the nation's Black citizens. Conversely, while
            the charts could present powerful evidence of generalized trends,
            they could not expose the individual people behind the data, nor
            could they express the individual stories that reflected the warp
            and weft of each person's life. Considered as a complementary pair,
            however, the charts and the photographs recall another visual
            technology of that era, the stereoscope, whose form is suggested by
            the double-projection layout of the <cite>Georgia Negro</cite>'s
            introductory chart.
          </p>
          {/* 
          Insert Image of Stereoscope */}
          <p>
            The stereoscope was a device that spliced together two views of the
            same image, one in each eye, creating the illusion of
            three-dimensional depth. Similarly, Du Bois understood the charts
            and the photographs as two parts of a larger whole. While each was
            legible on its own, the more complete and therefore more accurate
            picture was gained by viewing the two components together. This
            might be interpreted as another version of the epistemological
            pluralism that Elizabeth Palmer Peabody had explored nearly a
            half-century earlier with her workbooks and variously-sized
            charts—notably, also in work with students. But for Du Bois, Mack,
            Rogers, and the rest, the stakes were far higher than for Peabody's
            pupils, whose futures as white citizens were secure. Du Bois's
            students—and the people for whom they designed their charts—would be
            required to cultivate not only historical knowledge but also
            political consciousness: the conviction necessary to pair any new
            insight prompted by the charts with a personal commitment to act.
          </p>
          <p>
            Du Bois had yet to reveal to his students that he had himself been
            engaged in a process of epistemological soul-searching since moving
            to Atlanta, which by February or March of 1900 had become
            particularly intense. As he recalls in his 1940 autobiography,{" "}
            <cite>Dusk of Dawn</cite>, he had moved to Atlanta full of optimism
            and ambition: "I was going to study the facts, any and all facts,
            concerning the American Negro and his plight, and by measurement and
            comparison and research, work up to any valid generalization which I
            could."
            <InlineFootnote index={43} /> Here we see the strength of Du Bois's
            belief in the power of "facts"—the more facts the better—when they
            could analyzed and aggregated to point towards larger claims.
          </p>
          <p>
            But after only a year in Atlanta—and just a few months before he
            began to assemble the materials for the Paris Exposition—Du Bois
            experienced nothing less than an epistemological epiphany, and not
            in any positive sense of the term. It was brought about not by the
            introduction of any new method but instead by his own first-hand
            evidence of how white supremacy constrained any and all of the work
            that he might do. In <cite>Dusk of Dawn</cite>, Du Bois narrates
            this realization in almost metaphysical terms: "At the very time
            when my studies were most successful, there cut across this plan
            which I had as a scientist, a red ray which could not be ignored."
            <InlineFootnote index={44} />
          </p>
          <p>
            This "red ray" was no abstraction. It had a specific and horrific
            source: the lynching of a man named Sam Hose, which had taken place
            just outside of Atlanta, on April 23, 1899. Ten days before, Hose
            and his employer had gotten into an argument after Hose requested
            time off to visit his mother, who was sick. The argument spiraled
            out of control, resulting in the employer's death; from there,
            rumors abounded.
            <InlineFootnote index={45} /> Du Bois had the idea to write an essay
            about the incident for the <cite>Atlanta Constitution</cite>, the
            leading newspaper of the South. He intended to approach it as he
            would any other inquiry: through a social-scientific lens. He
            recalls how drafted a "careful and reasoned statement concerning the
            evident facts."
            <InlineFootnote index={46} /> But while walking from the Atlanta
            University campus to the newspaper office—he planned to deliver his
            draft in person—Du Bois learned of a gruesome new turn of events:
            Hose had been lynched, and his knuckles were rumored to be on
            display in a storefront that Du Bois himself would soon pass on his
            walk. Du Bois turned around and went home, his essay never to see
            the light of day.
            <InlineFootnote index={47} />
          </p>
          <p>
            While Du Bois's desire to publish a statement on the "facts" of the
            case was extinguished at that point, he continued to
            contemplate—deeply—the larger function of his research. As he
            narrates in <cite>Dusk of Dawn</cite>:
          </p>
          <Quotation
            quote={
              <span>
                Two considerations thereafter broke in upon my work and
                eventually disrupted it: first, one could not be a calm, cool,
                and detached scientist while Negroes were lynched, murdered, and
                starved; and secondly, there was no such definite demand for
                scientific work of the sort that I was doing. I regarded it as
                axiomatic that the world wanted to learn the truth and if the
                truth was sought with even approximate accuracy and painstaking
                devotion, the world would gladly support the effort.
              </span>
            }
            byline={
              <>
                <span>
                  W.E.B. Du Bois, <cite>Dusk of Dawn</cite>, pp. 67-8.
                </span>
              </>
            }
          ></Quotation>
          <p>
            From these lines—which Du Bois echoes in an autobiographical audio
            interview recorded in 1961—it becomes clear that he emerged from the
            incident with a greater awareness of the limits of his data-driven
            approach to advancing knowledge. He goes on to explain how,
            previously, he had "regarded it as axiomatic that the world wanted
            to learn the truth and if the truth was sought with even approximate
            accuracy and painstaking devotion, the world would gladly support
            the effort."
            <InlineFootnote index={49} /> But the violence brought about by
            centuries of white supremacy, Du Bois realized at that moment,
            demanded an epistemological charge greater than what could ever be
            learned—or communicated—through facts alone. Thus when he turned to
            the Paris Exhibition in the next academic year, it was not facts or
            data, but instead the experience and effects of living within,
            continually resisting, and in spite of it all, succeeding within a
            racist regime—that Du Bois must have encouraged his students to give
            visual form. They did this through the charts they designed that
            hung on the walls, and through the presence of their classmates—and
            perhaps themselves—pictured in the photographs, pointedly
            accompanied by the three volumes of Black Codes on the shelves.
            <InlineFootnote index={50} />
          </p>
        </CenteredLayout>
        {/* 
        <section
          className="text-white bg-black w-screen py-10 my-12"
          id="side-by-side"
        >
          <DoubleSlideShow />
        </section> */}

        <ChapterSectionTitle section={sections[3]} />
        <CenteredLayout>
          <p className="first-paragraph">
            After graduation, Lula Iola Mack moved about two hundred miles south
            of Atlanta to Albany, Georgia, where she worked as a teacher for
            several years. In 1902, she married one Mr. F.H. Wilkins, and they
            spent the next decade together, moving around the southeast.
            <InlineFootnote index={51} /> In 1907, they had a child, Marggette
            (or Marguerite) Iolamarie.
            <InlineFootnote index={52} /> Meanwhile, William George Westmoreland
            stayed in Atlanta, finding stable work as a mail carrier there.
            <InlineFootnote index={53} /> Henry Napoleon Lee and Edward Lee
            Simon both moved to Memphis. While Simon became the superintendent
            of the printing department at the LeMoyne Institute there, Lee
            worked as a teacher in the industrial department of the same school;
            both, evidently, were putting the design and printing skills that
            they had honed in the Atlanta University print shop to work.
            <InlineFootnote index={54} /> The next year, Lee moved to Denver,
            then to Hot Springs, Arkansas, then back to Atlanta. In 1905, he was
            working in Macon, Georgia, as a teacher at the Ballard Normal
            School, along with several other alumni of Atlanta University who
            had found employment there. According to the annual Atlanta
            University <cite>Catalogues</cite>, which also list alumni
            information—and from which all of these accounts are drawn—Lee lived
            and worked in Macon until he passed away in 1907, the same year that
            Mack's child was born. He couldn't have been much older than
            twenty-five.
            <InlineFootnote index={55} />
          </p>
          {/* Insert Image of Catalogue */}
          <p>
            Du Bois, by contrast, went on to live a long life, passing away at
            the age of ninety five in Ghana, where he had moved two years
            earlier as the culmination of his increasingly anticolonial activism
            and ideas.
            <InlineFootnote index={56} /> While he would continue to make charts
            and tables with his students for the Atlanta University Studies
            until at least 1910, he would never again create visualizations at
            the size or scale of the Paris Exposition charts.
            <InlineFootnote index={57} /> Among Du Bois scholars, it is
            generally believed that the lynching of Sam Hose marked the
            beginning of the end of Du Bois's conviction that data, and
            quantitative methods more broadly, would bring about the full extent
            of the change that was so clearly required.
            <InlineFootnote index={58} />
          </p>
          <p>
            But even as Du Bois may have shifted his own methods of inquiry and
            instruction from that point forward, going so far as to declare
            certain aspects of human nature "undiscovered and undiscoverable" by
            quantitative means, the charts that he and his students made for the
            Paris Exposition continue to function as valuable guides—not only
            for the issues of structural racism that they illuminate, which
            still require our attention, but also for the visual strategies they
            employ.
            <InlineFootnote index={59} /> These are among the reasons that the
            Paris Exposition charts have joined William Playfair's line graphs
            and bar charts (or perhaps even usurped them) as a focus for
            visualization designers and artists today, who have variously sought
            to recreate or reimagine the charts with a variety of libraries,
            mediums, and tools.
            <InlineFootnote index={60} />
          </p>
          <p>
            In 2017, for example, data journalist and visualization designer
            Mona Chalabi, herself inspired by a series of paintings by the
            visual artist Theaster Gates, decided to recreate several of the
            charts from the Paris Exposition using contemporary data. Attempting
            to adhere as closely as possible to the original methods, Chalabi
            decided to draw her updated charts by hand. While similarly
            dazzling, the picture of progress that they paint is, in Chalabi's
            words, "bleak."
            <InlineFootnote index={61} /> In her analysis of the data on
            literacy levels in the US in 2010, as compiled by the National
            Center for Education Statistics, she discovered that "illiteracy
            among black Americans was still four times higher than it was for
            white Americans." Her updating of the chart of "assessed value of
            household and kitchen furniture" owned by Black Georgians, which led
            her to US Census Bureau data on net worth, resulted in a picture
            that documented how, "for every dollar a black household in America
            has in net assets, a white household has 16.5 more."
          </p>
          <Figure
            figure={figures["ch5-16b-chalabi"]}
            className="mx-2 md:mx-12 text-sm md:text-base"
            captionClassName="mx-12"
          />
          <Figure
            figure={figures["chalabi-net-worth"]}
            className="mx-2 md:mx-12 text-sm md:text-base"
            captionClassName="mx-12"
          />
          <p>
            Seeing some of the most distinctive of the charts recreated with
            contemporary data, and even more, seeing how certain trends have so
            sharply diverged from the narrative of progress that Du Bois and his
            students sought to convey, is incredibly affecting. From the time
            that I first encountered Chalabi's recreations and decided to
            incorporate them into this book, I have asked myself why I find them
            to be so powerful—far more so than even the most impressive of
            recreations of William Playfair's iconnic charts. To be sure, there
            is a sense of historiographic justice involved in seeing Du Bois and
            his students elevated to the level of Playfair. There is also some
            degree of visual novelty; even though the charts of the Paris
            Exposition have become increasingly well-known, their more unique
            visual forms, such as the lattice and spiral above, are still
            employed far less often than, say, a line graph or bar chart. But in
            the end, I think it comes down to the story they tell—about the
            continued entrenchment of racial inequality—and about the strength
            and commitment of Du Bois's desire to change it. By contrast, we can
            only speculate as to any change that Playfair sought to bring about
            (or guard against) with his charts. For the field of data
            visualization, the absence of any visually discernable motivation
            for making the charts—that is to say, their purported
            objectivity—has long been one of their most celebrated features. But
            I believe that we lose out on much of the insight-producing power of
            visualization—or, worse, risk prompting inaccurate or otherwise
            misleading insights in our viewers—when we do not begin the design
            process by acknowledging our own goals.
          </p>
          <p>
            As another example inspired by Du Bois and his students that makes
            its goals explicit, consider the series of interactive
            visualizations created by the Dignity + Debt Network and the VizE
            Lab for Ethnographic Data Visualization at Princeton, which were
            designed to expose racial disparities in student loan debt in the
            United States.
            <InlineFootnote index={62} /> One visualization tool enables users
            to enter the amount they originally borrowed, and see that amount
            compared to the average principal for each major racial and ethnic
            group. The tool makes use of animation to draw a Du Boisian spiral
            in real-time, and when the user's loan amount is entered, an
            additional line in the spiral, in red, is drawn. Whereas in the
            original chart, the spiral form and the use of red for the largest
            value focuses the viewer on the increasing nature of the trend, the
            same color here, combined with the animation, emphasizes the
            increasing and increasingly constraining effects of the burden of
            student loan debt. Nevertheless, it shares with the original chart a
            clear sense of purpose. In this case, the purpose is conveyed in the
            form of a calculator positioned below the chart, which allows the
            user to compare their current interest rate to others and in the
            process, informs them as to how a change in rate or monthly payment
            amount could lead to a different payoff date or total amount owed.
            On the "About" page, this purpose is made more explicit:
            visualizations "are able to reveal what might be either changed or
            strengthened through policy and individual action."
            <InlineFootnote index={63} />
          </p>
          <Figure
            figure={figures["dignity-and-debt"]}
            className="mx-2 md:mx-12 text-sm md:text-base"
            captionClassName="mx-12"
          />
          <p>
            It is important to acknowledge that individual action is not the
            same as policy or structural change. In addition, it is important to
            recognize how, very often, those experiencing the negative effects
            of, for example, student loan debt, do not need additional data to
            prove to them the existence of the problem they face, nor do the
            need visualization to "reveal" its nature; they live with the
            problem every day.
            <InlineFootnote index={64} /> This is a point made by another
            project based on Du Bois's charts, by the artist and educator Mimi
            Ọnụọha. "In Absentia" consists of six charts that reference the
            sequence and visual forms of the original charts. Their purpose is
            not to provide additional evidence of what is already known to be
            true, however. Instead, in Ọnụọha's own words, the charts "form a
            meditation on interpretability, questioning why such a fact [about
            racism] should need proving."
            <InlineFootnote index={65} />
          </p>
          <p>
            Ọnụọha's charts follow a similar progression to those in the{" "}
            <cite>Georgia Negro</cite> series, in styles that recall the
            typologies of the original charts. Maps in small multiples, similar
            to those that Du Bois and his students employed to begin the series,
            document the spatial relation between three seemingly unrelated
            events and phenomena: the Indigenous lands that were claimed by the
            US government through the Indian Removal Act of 1830; the locations
            in which "convict leasing" was practiced in the 1870s; (this was the
            practice of prisons profiting by requiring those they imprisoned to
            work for private companies with no compensation for the imprisoned
            themselves; and the states with, as of 2019, the highest
            incarceration rates in the country. (To this we might add the
            locations of immigrant detention centers that are currently being
            built.) But rather than continue to provide additional evidence of
            the unfolding legacy of slavery and dispossession, Ọnụọha employs
            some of the series's more experimental forms to offer commentary on
            the continual need for evidence. A chart that resembles the
            spiraling bar-chart of the value of household possessions, discussed
            above, here consists of lines labeled "What," "are we," trying to
            prove." A final chart is simply a circle, fully shaded, labeled "A
            space for truths that cannot be shown." The chart is titled, "It
            Could Never Be Large Enough."
          </p>
          <div className="sm:grid grid-cols-3 gap-4 ">
            <Figure
              figure={figures["onuoha1"]}
              className="mx-2 md:mx-12 text-sm md:text-base"
            />

            <Figure
              figure={figures["onuoha2"]}
              className="mx-2 md:mx-12 text-sm md:text-base"
            />

            <Figure
              figure={figures["onuoha3"]}
              className="mx-2 md:mx-12 text-sm md:text-base"
            />
          </div>
          <p>
            In the context of Du Bois's autobiographical writing about the
            difficulty of connecting data with "the truth," Ọnụọha's use of this
            term speaks volumes. It reminds us—both those of us who seek to
            create visualizations that bear witness to oppression, and those of
            us eager to celebrate the images that result—that we often need no
            further evidence of what we already know to be true.
            <InlineFootnote index={66} /> If our ultimate goal, moreover, is
            lasting change, then we very well may need to look to methods beyond
            visualization in order to reach it. Some of these methods, like the
            photographs that accompanied the charts at the Paris Exposition, can
            complement visualization without much adjustment. But others may
            require that we recalibrate our own very deeply-held beliefs—as did
            Du Bois in the wake of the lynching of Sam Hose—about how knowledge
            is best produced and shared, and who is best positioned to produce
            and share it.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[3]} />

        <CenteredLayout>
          <p>
            As our project team considered how we might inhabit Du Bois’s
            revised approach to his research methods, and commit ourselves to
            pursue the greater knowledge that became his goal, we also knew that
            we could not claim to understand the full extent of the charge that
            Du Bois experienced upon hearing the news of Sam Hose’s murder. By
            the same token, we recognized that we could not uniformly, as a
            group, understand the effects of anti-Black racism first-hand.{" "}
            <InlineFootnote index={27}></InlineFootnote> But there was an
            experience that we shared with Du Bois and his students: the fact
            that we, too, were a majority-student visualization team. And among
            the lessons that we had learned from our own process of creating the
            visualizations for this site is that each contributor to the project
            has their own story, one which helps to further contextualize the
            visualizations they helped to create—and, therefore, augments the
            insights that it prompts. We wondered if there might be additional
            context we might uncover if we brought our own range of methods and
            disciplinary expertise to bear on the student creators of the
            charts—and, in turn, what additional knowledge this context might
            help to prompt.
          </p>

          <p>
            As have others, we noted the fact that the introductory chart of the
            second series of charts, the one with national focus, credited the
            charts' creation to “Negro students under the direction of Atlanta
            University.” We found it additionally intriguing that the
            visualization below the introductory text visualized data about
            Atlanta University students as well.
          </p>

          <Figure
            figure={figures["ch5-12-series"]}
            className="mx-2 md:mx-12 text-sm md:text-base"
            captionClassName="mx-12"
          />
        </CenteredLayout>

        {/* Here is where the first scrollytell will be*/}
        <ChartOneScrollytell
          triggers={[
            <div key="5cab8b07"></div>,
            <div key="59880c59">
              <p>
                As have others, we noted the fact that the introductory chart of
                the second series of charts, the one with national focus,
                credited the charts’ creation to “Negro students under the
                direction of Atlanta University.”
              </p>
            </div>,
            <div key="5151297c">
              <p>
                We found it additionally intriguing that the visualization below
                the introductory text visualized data about Atlanta University
                students as well.
              </p>
            </div>,
            <div key="c05853e8">
              <p>
                The pie chart at the center of the image gives visual form to
                the occupations of 330 graduates of Atlanta University, all
                those who had graduated from one of its three degree programs
                since its founding in 1867 through 1898, the year before the
                chart was made.
              </p>
            </div>,
            <div key="621891f0">
              <p>
                The slices of the pie correspond to four categories of
                occupation and professional field–teachers, ministers,
                government service, and business–as well as additional
                categories for “other professions” and “house wives”—that the
                graduates would go on to pursue.
              </p>
            </div>,
            <div key="ba410bc0">
              <p>
                While Du Bois does not disclose the source of his data on the
                chart, the number of graduates matches exactly with the number
                of alumni listed in the 1898-1899 Catalogue of the Officers and
                Students of Atlanta University, which Lauren had consulted in
                her background research. The total graduates and occupations for
                each type of degree—college, normal, and theological—are
                summarized in a data table at the end of the book.
              </p>
            </div>,
            <div key="88c7a06f">
              <p>
                In the pages before the table appears, the alumni are listed by
                degree, and then according to their year of graduation,
                alphabetically by name, along with their current occupation and
                place of residence.
              </p>
            </div>,
            <div key="83071a27">
              <p>
                Scanning the page which records the earliest graduates of
                Atlanta University provides fleeting glimpses into their lives.
                (1) William Henry Crogman, class of 1876, stayed in Atlanta to
                become a professor at Clark University. (2) Samuel Benjamin
                Morse moved to Savannah, 250 miles away on the Georgia coast, to
                become a music teacher. (3) London Humes Waters was deceased.
              </p>
            </div>,
            <div key="62bc6638">
              <p>
                To bring these traces back into the chart itself, Tanvi first
                transcribed all of the names and associated information from the
                scanned version of the catalog into a spreadsheet.
              </p>
            </div>,
            <div key="ea89f8d3">
              <p>
                Then, on the basis of Tanvi’s design, Anna and Nick recreated
                the original chart, placing the 255 alumni with known
                occupations in the appropriate section of the pie.
              </p>
            </div>,
            <div key="da9219cf">
              <p>
                Hovering on each dot reveals the person’s name, occupation, and
                place of residence. Additional categories represent the 35
                alumni with unknown occupations, and the 42 alumni who were
                recorded in the catalog as “Deceased.”
              </p>
            </div>,
            <div key="f358e08a">
              <p>
                These are the actual people behind the data in the original pie
                chart, those whose education and accomplishments mattered so
                much to Du Bois that he devoted the majority of the space of the
                chart itself to testify to them, and to issue a call for
                additional funding that would ensure such opportunities for
                students ahead.
              </p>
            </div>,
            <div key="0a538c37"></div>,
          ]}
        />

        <CenteredLayout>
          <p className="first-paragraph">
            But these were not the same students who themselves created the
            charts. Their identities are more difficult to pinpoint with
            precision. An article from the May 1900{" "}
            <cite>Atlanta University Bulletin</cite> describes how the work “was
            done entirely by Negroes--Dr. Du Bois and his assistants, most of
            whom are Atlanta University graduates.”{" "}
            <InlineFootnote index={28}></InlineFootnote> Du Bois himself
            provides only a bit more detail, recalling in his third and final
            autobiographical text, written late in life, “I got a couple of my
            best students and put a series of facts into charts,” resulting in
            the “most interesting set of drawings” that were displayed in Paris.{" "}
            <InlineFootnote index={29}></InlineFootnote> And while he goes on to
            describe the contents of the charts as well as how “the details of
            finishing these fifty or more charts, in colors, with accuracy, was
            terribly difficult with little money, limited time, and not too much
            encouragement,” he does not name any of the students who seemingly
            helped to ease this challenging task.
          </p>
          <p>
            Newspaper reportage does name one former student, William Andrew
            Rogers, as responsible for having “executed” the charts, and the
            1899-1900 Catalogue of the Officers and Students confirms this role,
            listing Rogers's occupation as “Work on Paris Exhibit.”{" "}
            <InlineFootnote index={30}></InlineFootnote> (Rogers had graduated
            the previous year.) But “based on the volume of the designs, each
            piece's complexity and detail, and the compressed project timeline,”
            as Silas Munro confirms, “it seems implausible that Rogers and Du
            Bois worked alone to complete the project.”{" "}
            <InlineFootnote index={31}></InlineFootnote> The fact that the first
            set of charts are more sophisticated in their visual design, and
            more professional in their execution, suggests that Rogers and Du
            Bois might have worked on the first series together, while enlisting
            other students in the design and execution of the second set of
            charts.
          </p>

          <Figure
            figure={figures["1899-grads"]}
            className="mx-2 md:mx-12 text-sm md:text-base"
            captionClassName="mx-12"
          />

          <p>
            If this were true, it would not have been the first time that Du
            Bois enlisted his own students in a collaborative research project.
            Among the defining intellectual contributions of the early years of
            Atlanta University were the Atlanta University Studies, annual
            data-driven reports on specific areas of Black life that were
            presented each spring at a large public conference. In fact, Du Bois
            was recruited to the university in large part to assume direction of
            the studies, which had begun only two years before his arrival. To
            complete this work, Du Bois drew from “two tiers of volunteer
            researchers,” as sociologist Aldon Morris explains: recent graduates
            of HBCUs across the nation, and his own graduate and undergraduate
            students. <InlineFootnote index={32}></InlineFootnote> Their work
            together became the basis for what Morris names the Du Bois-Atlanta
            School of Sociology, the first “scientific,” or data-driven,
            sociology program in the United States.
          </p>

          <p>
            Among the innovations of the Du Bois-Atlanta school was its required
            coursework. Long before any elite university offered training in
            data collection or analysis methods, Du Bois instructed his students
            in a full year of such methods, culminating in a term of applied
            research on “the social and economic conditions of the American
            Negro” during their senior year.{" "}
            <InlineFootnote index={33}></InlineFootnote> While there is minimal
            evidence as to the specific research tasks these students performed,
            it is generally acknowledged that this coursework was the mechanism
            by which Du Bois prepared his students for the roles they would play
            after graduation as unofficial field sites for the data collection
            required to continue to produce the annual reports.{" "}
            <InlineFootnote index={34}></InlineFootnote>
          </p>

          <p>
            Several of the charts displayed in the Paris Exposition make use of
            the data that was collected for the study,{" "}
            <cite>The College-Bred Negro</cite>, that would be published later
            that year. The data on the Atlanta University graduates that is
            visualized in the opening chart, for example, is the same that
            appears in the published report. Thus while the specific
            contributions of individual students remain lost to time, we can
            look up the names of the students who were enrolled in Du Bois's
            sociology course that year in the corresponding <em>Catalogue</em>.
            There were four: Henry Napoleon Lee, Lula Iola Mack, Edward Lee
            Simon, and William George Westmoreland. A slightly revised version
            of the chart above includes these names, positioned outside of the
            pie itself, closest to the occupation that—according to their own
            alumni records—they would soon take on.
          </p>

          {/* add in chart w/ extra four students here? or put at left */}

          <p>
            But the role of these students in Du Bois's sociological project—and
            is pedagogical legacy—was not limited to their assistance with
            collection and analysis of the data that appeared on the charts, or
            whatever their role in visualizing that data might have been. In the
            1909-1910 academic year, Du Bois and a new team of students
            undertook a follow-up study to the College-Bred Negro, based on a
            survey of 3856 Black college graduates across the country. Among the
            responses were 163 graduates of the “college course” of Atlanta
            University-including the five students who contributed to the making
            of the original chart. A decade on, their lives had become data that
            further testified to the enduring value of Du Bois's pedagogical
            aims.
          </p>
        </CenteredLayout>

        {/* start of second scrollytell */}
        <ChartTwoScrollytell
          triggers={[
            <div key="5b68ea84"></div>,
            <div key="94a7a3b2">
              <p>
                In this expanded chart that visualizes the data from the 1910
                Atlanta University Study, the colorful map that informs the
                viewer of the location of Atlanta University has been expanded
                to include the locations of the 140 additional colleges also
                included in the study.
              </p>
            </div>,
            <div key="63ba9abc">
              <p>
                As in the original, the location of Atlanta University is marked
                with a star.
              </p>
            </div>,
            <div key="1a7c90eb">
              <p>
                In this pie chart, the 163 graduates of Atlanta University as of
                1909 with known occupations (as determined by the alumni section
                of the 1909-1910 catalog) are positioned in the appropriate area
                of the pie chart. Additional categories represent the nine
                graduates with unknown occupations, and the 21 graduates who
                were recorded as “Deceased.”
              </p>
            </div>,
            <div key="5448c43e">
              <p>
                An additional 3693 gray dots represent the graduates of the
                other 140 colleges included in the study whose names were not
                recorded as data. They are placed in the appropriate area as
                determined by the summary statistics of occupations included in
                the study. These dots hold space for these students’
                contributions to the study, even if we do not know their names.
              </p>
            </div>,
            <div key="06e375fc">
              <p>
                Here we can see the five students who contributed to the
                original charts, now placed in the area corresponding to the
                profession they held in 1909.
              </p>
              <ol className="list-decimal list-outside ml-4">
                <li className="py-2">
                  Lula Iola Mack became a housewife, married to a Mr. F.H.
                  Wilkins, and was living in the city of Athens, Georgia.
                </li>
                <li className="py-2">
                  Edward Lee Simon became a supervisor of industrial work in the
                  Memphis Public Schools.
                </li>
                <li className="py-2">
                  William George Westmoreland stayed in Atlanta, working as a
                  mail carrier.
                </li>
                <li className="py-2">
                  Henry Napoleon Lee, three years earlier, in 1907, was
                  deceased.
                </li>
              </ol>
            </div>,
            <div key="9b862bca">
              <p>Hover over the dots to data for each individual student</p>
            </div>,
            <div key="14dafa36"></div>,
          ]}
        />
        <CenteredLayout>
          <p>
            There is little more that we can learn about Lee's abbreviated life
            from the extant data. The catalogs of the years after the Paris
            Exposition show that, evidently, Lee moved to Memphis with Edward
            Lee Simon immediately upon graduation. While Simon became the
            superintendent of the printing department at LeMoyne Institute, Lee
            worked as a teacher in the industrial department of the same school.
            The next year, he moved to Denver, then to Hot Springs, Arkansas,
            then back to Atlanta. In 1905, he was working in Macon, Georgia, as
            a teacher at the Ballard Normal School, along with several other
            alumni of Atlanta University who had found employment there.
            According to the catalog, Lee lived and worked in Macon until he
            passed away.
          </p>

          <p>
            There are many questions we might think to ask about Lee and his
            abbreviated life—about his reasons for traveling the country, about
            his experiences in those far-flung locals, and his relationships
            with the other Atlanta University alumni who welcomed him as a
            colleague when he returned to his home state. But the answers to
            these questions are not found in the extant data. This truth, to
            return to Onuoha's formulation, is likely not recorded as data at
            all.
          </p>
          <p>
            Yet there are other truths we might gesture towards with our
            visualization work. In addition to the quantitative data presented
            in the 1910 Atlanta University Study, there was also data that was
            qualitative in form.
          </p>
        </CenteredLayout>

        {/* start of third scrollytell */}
        <ChartThreeScrollytell
          triggers={[
            <span key="386100cc"></span>,
            <span key="1119d19f">
              The survey that Du Bois and the seniors in that year’s sociology
              course created, and sent out across the United States, in addition
              to soliciting information about their lives and accomplishments
              that could be compiled as statistics, also included four questions
              that encouraged long-form response.
            </span>,
            <span key="8a675777">
              These included their thoughts on their own “early life and
              training,” their plans to educate their children, the “chief
              hindrances” they had faced, and their “present practical
              philosophy in regard to the Negro race in America,” which was
              abbreviated in the published study as “philosophy of life.”
            </span>,
            <span key="ffe08fa4">
              About 800 responses to the survey were received, which were
              published in the 1910 study.
            </span>,
            <span key="9fdc6bc3">
              We visualize these four sets of responses here. Each of the
              responses are represented as a dot, placed under the appropriate
              question.
            </span>,
            <span key="4a7176fc">
              Clicking each dot displays a key phrase from the response it
              represents.
            </span>,
            <span key="d957876f">
              Clicking on the phrase reveals the full response from which it is
              drawn, providing a window into that person’s thoughts even as they
              remain unnamed.
            </span>,
            <span key="94ea0708">
              Thus we close this chapter, and this project, with our own
              contribution to Du Bois’s project: a visualization of the
              meaning-making power of data, which we hope also holds space to
              acknowledge the limits of what data--and, by extension, data
              visualization--could do.
            </span>,
            <span key="65225a73"></span>,
          ]}
        />

        <StudentCharts figure={figures["ch5-12-series"]} />

        <Takeaways
          forDesigners={[
            <span key="df782d45">
              Always recall the power of visualization (again)
            </span>,
            <span key="6440631a">
              Consider when that power should be aligned with political goals
            </span>,
            <span key="2f317172">
              Consider how to combine visualization with a commitment to act
            </span>,
            <span key="2f317173">
              Reorient towards a goal of knowledge or justice, not visualization
              itself
            </span>,
          ]}
          forViewers={[
            <span key="75cf526a">
              Align your visualization projects with your values
            </span>,
            <span key="6d2691fc">
              Honor and credit the contributions of each team member
            </span>,
            <span key="9650286d">
              Consider how to combine visualization with other knowledge-making
              forms
            </span>,
            <span key="9650286e">
              Know that change also requires a commitment to act
            </span>,
          ]}
        />
      </ChapterBody>
      {/* </div> */}
      <CenteredLayout>
        <FootnotesList footnotes={powerFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
