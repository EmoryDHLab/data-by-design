import ChapterTitle from "~/components/ChapterTitle";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import InlineFootnote from "~/components/InlineFootnote";
import DocumentViewer from "~/components/change/DocumentViewer";
import Footer from "~/components/Footer";
import { ChapterContext } from "~/chapterContext";
import { powerFootnotes } from "~/footnotes";
import { useState } from "react";
import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";
import CenteredLayout from "~/components/layout/CenteredLayout";
import FootnotesList from "~/components/FootnotesList";
import figures from "~/data/figures/change.json";
import Quotation from "~/components/Quotation";
import HoverText from "~/components/HoverText";
import HoverImages1 from "~/components/change/HoverImages1";
import HoverImages2 from "~/components/change/HoverImages2";
import DoubleSlideShow from "~/components/change/DoubleSlideShow";
import Figure from "~/components/figures/Figure";
import SlideShow from "~/components/layout/SlideShow";
import { chapterMetaTags } from "~/utils";
import StudentCharts from "~/components/change/StudentCharts";
import Viz1 from "~/components/change/Viz1";
import Viz3 from "~/components/change/Viz3";
import Viz2 from "~/components/change/Viz2";
import Viz4 from "~/components/change/Viz4";

import StudentChartThreeV2 from "~/components/change/StudentChartThree";
import ChapterBody from "~/components/layout/ChapterBody";
import Takeaways from "~/components/layout/Takeaways";
import ChartOneScrollytell from "~/components/change/duboisScrollytell/ChartOneScrollytell";
import ChartTwoScrollytell from "~/components/change/duboisScrollytell/ChartTwoScrollytell";
import ChartThreeScrollytell from "~/components/change/duboisScrollytell/ChartThreeScrollytell";
import { chapterMeta } from "~/data/chapterMeta";
import type { MetaFunction } from "react-router";
import type { TVizAnchors, HoverState } from "~/chapterContext";

export const meta: MetaFunction = () => {
  return chapterMetaTags("change");
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
    title: "Scrollytell",
  },
  {
    type: "scrollytell",
    id: "scrollytell-3",
    title: "Scrollytell Three",
  },
  {
    type: "visualization",
    id: "viz-1",
    title: "Viz 1: Alumni Occupations",
  },
  {
    type: "visualization",
    id: "viz-2",
    title: "Viz 2: Survey Respondents",
  },
  {
    type: "visualization",
    id: "viz-3",
    title: "Viz 3: Student Responses",
  },
];

const chapterFigures = Object.values(figures);

export default function DuboisChapter() {
  const [hoverState, setHoverState] = useState<HoverState>(undefined);
  const [showFootnotes, setShowFootnotes] = useState<boolean>(false);

  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "changePrimary",
        primaryTextColor: "white",
        accentColor: "changeSecondary",
        footnoteTextColor: "changePrimary",
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
        title={chapterMeta.change.title}
        subtitle={chapterMeta.change.subtitle}
      />
      {/* <div className="chapter-body container"> */}
      <ChapterBody>
        <CenteredLayout>
          <p className="first-paragraph">
            The last week of December 1899 had been cold and exceptionally
            rainy. <InlineFootnote index={0} /> But on the day after Christmas,
            when Lula Iola Mack crossed the “high and narrow iron bridge” from
            the women’s dormitory to the main campus of Atlanta University, one
            of the nation’s flagship Black colleges, to begin the winter term of
            her senior year, she likely walked with a confident step.
            <InlineFootnote index={1} />
            She had already been awarded high honors after her sophomore
            year—the only member of her class to receive such recognition—and
            she was on track to repeat the feat when honors would be bestowed
            again at graduation.
            <InlineFootnote index={2} />
            As she’d already concluded her preparatory coursework in sociology
            the previous term, having learned a range of state-of-the-art
            methods for data collection and analysis, she likely approached the
            first day of class feeling calm and prepared for what she thought
            would come next: a project involving “a general survey of social
            conditions,” just as the course was described in the{" "}
            <cite>
              Catalogue of the Officers and Students of Atlanta University{" "}
            </cite>
            , which served as every student’s main reference text, and just as
            the course had been structured the year before.
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
            might and ingenuity that were typical of World’s Fairs at the time.
            <InlineFootnote index={4} />
          </p>
          <p>
            On January 25th, 1900—one month to the day after the winter term at
            Atlanta University had begun—Calloway received a financial
            commitment from the federal government and began to plan the exhibit
            in earnest.
            <InlineFootnote index={5} />
            He tasked Daniel A.P. Murray, then the Assistant Librarian of
            Congress, with assembling a set of books by Black writers to put on
            display, while reaching out to a college friend to conceptualize the
            “social study” he also had in mind.
            <InlineFootnote index={6} />
            This friend was Mack’s professor, none other than the esteemed
            sociologist, author, and activist W.E.B. Du Bois. And for the next
            three months, Mack, Du Bois, the three other students enrolled in
            his year-long sociology sequence, and an additional student—William
            Andrews Rogers—who had graduated the previous spring, threw
            themselves into the work that would culminate in a set of “plans,
            charts, and figures” for the Paris Exposition, as the event was also
            called.
            <InlineFootnote index={7} />
            Once installed in the southeast corner of the Palace of Social
            Economy, the charts would be viewed over fifty million visitors from
            around the world who would travel to Paris over the course of the
            Exposition’s seven-month run.
            <InlineFootnote index={8} />
          </p>
          <Figure
            figures={[
              figures["0501-paris-expo-loc"],
              figures["0502-Group-XVI-floorplan"],
            ]}
            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-baseline"
            captionClassName=""
            groupCaption={
              <div>
                <p>
                  Left: A photograph of the “Exhibit of American Negroes” at the
                  1900 Exposition Universelle.
                </p>
                <p>
                  Right: The floor plan of the Place of Social Economy; the
                  exhibit was installed in the south-east corner of the hall.
                </p>{" "}
              </div>
            }
          />

          <p>
            The 63 (or 64) poster-sized charts that Mack, Du Bois, and the other
            Atlanta University students made for the Paris Exposition were
            organized into two sets, as visually compelling as they were
            sociologically profound. <InlineFootnote index={9} /> The first,{" "}
            <cite>The Georgia Negro: A Sociological Study</cite>, consisted of
            36 charts visualizing statistics related to the Black population of
            that state. Scholars generally believe that Rogers, the graduate
            from the year before, was responsible for much of the design and
            implementation of this set of charts. <InlineFootnote index={10} />
            The second set,{" "}
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
            <em>on its own</em> could not hope to convey a complete picture of
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

        <CenteredLayout className="pb-20">
          <p className="first-paragraph">
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

        <CenteredLayout className="pt-20">
          <p>
            In the exhibition space, Du Bois mounted the introductory chart of
            each set—a title page of sorts—directly at eye-level against the far
            wall. Clearly, Du Bois wanted these charts to be seen. In the
            center-left position was the introductory chart of{" "}
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
            first comprehensive dataset on lynching, which she published as{" "}
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
            evident in the charts. Intent on demonstrating the “progress and
            prospects” of Black Americans in spite of the constraints on their
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
            rate of “illiteracy” in the years between 1860 and 1900, the team
            makes use of what graphic designer (and <cite>Data by Design</cite>{" "}
            contributor) Silas Munro describes as a “lattice-like arrangement,”
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
            the “color line”?
          </p>
          {/* // Insert Modified Bar  Chart  */}
          <p>
            The second set of charts—the set more often attributed to Du Bois's
            students—continues to communicate this narrative of “progress and
            prospects” against the backdrop the color line. This set is
            distinguished from the first for how it makes use of comparisons to
            other populations, as well as to other charts. At the same time that
            Du Bois was teaching his students how to conduct “a general survey
            of social conditions” and analyze its results, as the course
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
            "Conjugal Condition of the Negro Element,” which Gannett marshalled
            in the service of a eugenicist argument about the relative weakness
            of the US Black population in relation to the white one.
            <InlineFootnote index={32} /> (A similar chart of the entire US
            population appears in the illustrated edition of 1890 US Census,
            also overseen by Gannett).
            <InlineFootnote index={33} /> For the Paris Exposition, Du Bois and
            his students recreate the original Gannett chart as “Conjugal
            Condition of American Negroes according to Age Periods” as the
            seventeenth of their twenty-seven charts. Seemingly akin to how,
            earlier in the century, abolitionists such as David Walker advocated
            that Black citizens read the racist arguments made by Thomas
            Jefferson, and other white people of the time, so as to be able to
            directly refute them—or, as might be termed “counter-visualization”
            today—Du Bois seemingly sought to enlist his students in refuting
            Gannett's arguments through the same form that had been used to
            advance them in the first place: the chart.
            <InlineFootnote index={34} />
          </p>
          {/* // Insert 3 charts  */}
          <p>
            The illustrated edition of the 1890 census in which the Gannett
            chart also appeared, formally titled{" "}
            <cite>
              Statistical Atlas of the United States, based on the results of
              the eleventh census
            </cite>
            , had been published just a year earlier, in 1898, and must have
            also been a topic of classroom discussion. This is evident in the
            visual similarity between a chart that appears in the{" "}
            <cite>Atlas</cite>, “Growth of the Elements of the Population:
            1790-1890,” and the graduated area chart, “The Amalgamation of White
            and Black elements of the population in the United States,” which
            immediately follows the “Conjugal Condition” chart in the student
            set. The notable difference, here, is the focus on the US Black
            population alone. Whereas in Gannett's version, the white
            population—titled “native stock”—is in the center of the diagram, Du
            Bois and his students shift the frame to focus on the Black
            population, which in this version is shaded black, so as to command
            the visual attention it deserves. A thin jagged line at the top,
            grid lines that extend off the side of the page, and the label (but
            no associated statistics for) “whites,” are that remain in the
            students' chart as visual indicators of what has been excluded. But
            there is no mistaking the reason why the white population has been
            excluded here: by mirroring the form of the chart in the{" "}
            <cite>Atlas</cite>, but focusing on the Black population alone, the
            charts reinforce the idea Du Bois put into words later that year
            when recalling the show: that this “small nation of people” within
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
              {/* <HoverText hoverState="City" className="font-medium"> */}A
              comparative representation of the places where Georgia's Black
              citizens reside {/* </HoverText> */}
              is where Du Bois introduces his iconic spiral, for example,
              bringing together aspects of the bar chart and the line chart
              along with this new form of circular graph in order to animate the
              increasing presence of Black people throughout the state. In a
              later chart in the series, which documents{" "}
              {/* <HoverText hoverState="Illiteracy" className="font-medium"> */}
              the decrease in illiteracy rates in the years between 1860 and
              1900
              {/* </HoverText>{" "} */}, Du Bois makes use of what graphic
              designer (and contributor to this project) Silas Munro describes
              as a “lattice-like arrangement,” in which an otherwise standard
              bar is folded at a right angle in order to further accentuate the
              decreasing rate of illiteracy over time. Du Bois elaborates upon
              this technique in a later chart, which{" "}
              {/* <HoverText hoverState="Owners" className="font-medium"> */}
              compares the numbers of Black property owners, and the value of
              their properties, in two Georgia cities
              {/* </HoverText>{" "} */}, building upon his own visual language
              to represent the progress that had been achieved by the Black
              residents of Georgia in spite of the efforts of their white
              compatriots.
            </p>
            <p>
              Compared to the easily interpretable “picture of the past” that
              Playfair designed his time-series charts to convey, the sequence
              of {/* <HoverText hoverState="Value" className="font-medium"> */}
              increasingly novel visual forms
              {/* </HoverText>{" "} */}
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
            {/* <HoverImages1 /> */}
            <Figure figure={figures["0504-georgia"]} />
          </Column>
        </TwoColumnLayout>

        <CenteredLayout>
          <Figure
            figures={[
              figures["0505-866-population"],
              figures["0506-877-schools"],
              figures["0507-881-land"],
            ]}
            className="grid grid-cols-1 md:grid-cols-3 gap-2 mdp:gap-4"
            groupCaption={
              <p>
                Left to right: The Black population of Georgia; the number of
                Black children enrolled in public school; the number of acres of
                land owned by Black Georgians, with an overall form that
                resembles the shape of the state itself. Images courtesy of the
                Library of Congress, Prints & Photographs Division,
                LC-DIG-ppmsca-33866, LC-DIG-ppmsca-33877, and
                LC-DIG-ppmsca-33881.
              </p>
            }
          />

          <Figure figure={figures["0508-value"]} />

          <p className="first-paragraph">
            Du Bois continues to affirm these imaginative possibilities through
            the graphical innovation of the second series of charts, which
            focuses on the “condition of the descendants of former African
            slaves now resident in the United States of America,” as its
            introductory chart explains. In this series, Du Bois was also joined
            by his students as co-designers, as a later section of this chapter
            will further explore. Here, what is significant is how, in
            documenting the upward progress of Black Americans in a national and
            international context, Du Bois and his students make use of
            comparisons to other populations—and to other charts—in order to
            affirm a narrative of progress and possibility with respect to Black
            Americans' social, intellectual, and economic lives.
          </p>

          <Figure figure={figures["0509-city"]} />

          <p>
            A clear but unnamed interlocutor in this series is the US Federal
            Government, which for each of the three previous national censuses,
            had created a statistical atlas that visualized the data collected
            at national scale. The most recent of these atlases, based on the
            1890 Census, had been published only two years earlier, in 1898.
            Most famous today for its visual depiction of the closing of the
            American frontier—a symbol to the settler-colonial nation that its
            goals of “manifest destiny” had run its course, and to Native
            peoples that their displacement was complete—the{" "}
            <cite>Statistical Atlas of the United States</cite> , based on the
            results of the eleventh census in its own time was motivated by a
            more pedagogical goal: “popularizing and extending the study of
            statistics.”<InlineFootnote index={8}></InlineFootnote>
          </p>
          <p>
            The atlas was overseen by the then-chief geographer for the US
            Geological Survey, Henry Gannett, and was comprised of 409 maps and
            diagrams. The sequence began, just as Du Bois's did, by introducing
            viewers to the statistics on population statistics on population T.
            Through by-then-standard bar charts, pie charts, and line graphs, as
            well as its own creative use of pattern and visual form, the atlas
            included, for example, a prototypical bump chart that ranked each
            state according to its population ; a map that illustrated the
            spatial distribution of the nation's male population ; and another
            that illustrated the spatial distribution of the nation's Black
            population. . (Another chart used area charts in small multiples in
            order to compare certain states' Black and white populations ).
          </p>

          <Figure figure={figures["0510-illiteracy"]} />

          <p>
            While race was certainly of concern in the census—indeed, it remains
            one of the lighting rod issues of the census even today—it was not
            the <cite>Statistical Atlas's </cite> main concern. Reading further
            into the intent conveyed through the sequence of maps, after an
            early series of charts that visualize the nation's Black population,
            the focus of the atlas shifts, turning first to the nation's
            immigrant population before expanding outward to consider other
            features altogether: the population's age and gender breakdown , the
            country's increasingly diverse religious groupings , the occupations
            of its inhabitants , and more.
          </p>
        </CenteredLayout>

        {/* <SlideShow
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
        /> */}

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
              <Figure
                figure={figures["0511-master-rbc-rbaapc-10601-0031"]}
                showCaption={false}
              />
              <Figure
                figure={figures["0512-conjugal-cropped"]}
                showCaption={false}
              />
              <Figure
                className="col-span-2 max-h-80"
                figure={figures["0513-db-conjugal"]}
                showCaption={false}
                imageClassName="h-full w-auto"
              />
            </div>
            <figcaption className="font-neueMontreal text-xs md:text-sm leading-5 text-left mt-3 md:mt-6 mb-6 md:mb-12 col-span-full">
              Left to right: The chart of marriage statistics that appeared in
              Henry Gannett’s 1894 Statistics of the Negroes in the United
              States; a visually similiar chart of mariage statistics of all
              races that appeared in the illustrated edition of the 1890 census,
              also edited by Gannett; and the chart created by Du Bois and his
              students, again visualizing the Black population only, that was
              created for the Paris Exibition. Images courtesy of the Library of
              Congress, Rare Book and Special Collections Division; Geography
              and Map Division; and Prints & Photographs Division,
              LC-DIG-ppmsca-33915.
            </figcaption>
          </Column>
        </TwoColumnLayout>

        <ChapterSectionTitle section={sections[2]} />
        <CenteredLayout>
          <p className="first-paragraph">
            Today, the charts of the Paris Exposition are often shared as single
            images, embedded in a post on social media, or—as in the case of{" "}
            <cite>W.E.B. Du Bois's Data Portraits</cite>, bound as a dazzling,
            full-color book. But in their own time, the charts were intended to
            be viewed in relation to the other artifacts on display. There were
            the 200 books that had resulted from Murray's attempt to include
            every Black-authored text that had been published to that point,
            along with a more complete 1,400 item bibliography. There were
            physical artifacts, including a bronze statuette of Frederick
            Douglass and a “remarkable” wood frame carved by a man who was
            formerly enslaved, among other examples of wood and metalwork from
            students and faculty at the Tuskegee and Hampton Institutes, and
            other Black colleges and industrial schools.
            <InlineFootnote index={36} /> There was a three-volume compilation
            that Du Bois titled “Black Codes of Georgia,” which contained a
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
            “plain four story brick building” on the corner of West Hunter and
            Vine Streets that served as the women's dorm?
            <InlineFootnote index={38} /> We cannot answer these questions with
            certainty, but we can say what Du Bois (or more accurately, the
            photographer Thomas Askew) was trying to achieve with this shot: an
            overturning of “conventional American ideas” about what the nation's
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
            “the sense of always looking at one's self through the eyes of
            another.”
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

          <Figure
            className="mix-blend-multiply"
            figure={figures["0517-perfecscope-zbHCp_orig-zoom"]}
          />
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
            and ambition: “I was going to study the facts, any and all facts,
            concerning the American Negro and his plight, and by measurement and
            comparison and research, work up to any valid generalization which I
            could.”
            <InlineFootnote index={43} /> Here we see the strength of Du Bois's
            belief in the power of “facts”—the more facts the better—when they
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
            this realization in almost metaphysical terms: “At the very time
            when my studies were most successful, there cut across this plan
            which I had as a scientist, a red ray which could not be ignored.”
            <InlineFootnote index={44} />
          </p>

          <p>
            This “red ray” was no abstraction. It had a specific and horrific
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
            recalls how drafted a “careful and reasoned statement concerning the
            evident facts.”
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
            While Du Bois's desire to publish a statement on the “facts” of the
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
            previously, he had “regarded it as axiomatic that the world wanted
            to learn the truth and if the truth was sought with even approximate
            accuracy and painstaking devotion, the world would gladly support
            the effort.”
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
            certain aspects of human nature “undiscovered and undiscoverable” by
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
            words, “bleak.”
            <InlineFootnote index={61} /> In her analysis of the data on
            literacy levels in the US in 2010, as compiled by the National
            Center for Education Statistics, she discovered that “illiteracy
            among black Americans was still four times higher than it was for
            white Americans.” Her updating of the chart of “assessed value of
            household and kitchen furniture” owned by Black Georgians, which led
            her to US Census Bureau data on net worth, resulted in a picture
            that documented how, “for every dollar a black household in America
            has in net assets, a white household has 16.5 more.”
          </p>
          <Figure
            figure={figures["0519-chalabi-illiteracy"]}
            className="mx-2 md:mx-12 text-sm md:text-base"
          />
          <Figure
            figure={figures["0520-chalabi-worth"]}
            className="mx-2 mix-blend-multiply md:mx-12 text-sm md:text-base"
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
            On the “About” page, this purpose is made more explicit:
            visualizations “are able to reveal what might be either changed or
            strengthened through policy and individual action.”
            <InlineFootnote index={63} />
          </p>
          <Figure
            figure={figures["0521-dignity-and-debt"]}
            className="mx-2 md:mx-12 text-sm md:text-base"
            captionClassName="mx-12"
          />
          <p>
            It is important to acknowledge that individual action is not the
            same as policy or structural change. In addition, it is important to
            recognize how, very often, those experiencing the negative effects
            of, for example, student loan debt, do not need additional data to
            prove to them the existence of the problem they face, nor do the
            need visualization to “reveal” its nature; they live with the
            problem every day.
            <InlineFootnote index={64} /> This is a point made by another
            project based on Du Bois's charts, by the artist and educator Mimi
            Ọnụọha. “In Absentia” consists of six charts that reference the
            sequence and visual forms of the original charts. Their purpose is
            not to provide additional evidence of what is already known to be
            true, however. Instead, in Ọnụọha's own words, the charts “form a
            meditation on interpretability, questioning why such a fact [about
            racism] should need proving.”
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
            in which “convict leasing” was practiced in the 1870s; (this was the
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
            above, here consists of lines labeled What," "are we," trying to
            prove." A final chart is simply a circle, fully shaded, labeled “A
            space for truths that cannot be shown.” The chart is titled, “It
            Could Never Be Large Enough.”
          </p>
          <div className="sm:grid grid-cols-3 gap-4 ">
            <Figure
              figure={figures["0522-onuoha1"]}
              className="mx-2 md:mx-12 text-sm md:text-base"
            />

            <Figure
              figure={figures["0523-onuoha2"]}
              className="mx-2 md:mx-12 text-sm md:text-base"
            />

            <Figure
              figure={figures["0524-onuoha3"]}
              className="mx-2 md:mx-12 text-sm md:text-base"
            />
          </div>
          <p>
            In the context of Du Bois's autobiographical writing about the
            difficulty of connecting data with “the truth,” Ọnụọha's use of this
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
          <p className="first-paragraph">
            As our project team considered how we might inhabit Du Bois’s
            approach to visualization, we were unsure of how to proceed in light
            of his changed views about the utility of data and “facts.” We were
            certain about one thing, however: we did not want to simply recreate
            Du Bois’s charts wholesale. We thus returned to our own focal point
            for this chapter: the students whose contributions had been effaced,
            and asked ourselves what other stories about their lives we might be
            able to use visualization to tell.
          </p>

          <p>
            In all of our research involving the Atlanta University 
            <em>Catalogues</em>, which we had used to surface many of the
            details about the students' lives, we had noticed another detail
            about the charts that seemed to have gone unremarked upon in the
            existing scholarship: the count of the total number of graduates of
            Atlanta University—330—matches exactly with the total number
            provided in a data table included in the <em>Catalogue</em> {" "}
            published the previous year.
            <InlineFootnote index={67} /> The table includes counts of everyone
            who had graduated from one of the university's three degree programs
            since its founding, in 1867, as well as summary statistics about
            their occupations. Presumably, this table was how Du Bois and his
            students had determined the occupations pictured in the pie chart:
            teachers, ministers, government service, and business; a catch-call
            category for “other professions” below those top four; and then
            “house wives,” the shorthand selected for the category of “Married
            Women not otherwise designated” in the original data table.
            <InlineFootnote index={68} />
          </p>

          <Figure
            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-baseline"
            figures={[figures["0525-899-series"], figures["0526-data-table"]]}
            groupCaption={
              <p>
                Left: {figures["0525-899-series"].caption} Right:{" "}
                {figures["0526-data-table"].caption}
              </p>
            }
          />

          <p>
            We were enthralled with the idea that the students who had
            collected, analyzed, and visualized the data that appeared in the
            charts—Mack, Westmorland, Simon, and Lee—were also included in the
            data they visualized. But there was one problem with this particular
            line of thinking: the data had been collected the year before, so it
            did not include the four seniors, who would graduate—and become part
            of the dataset—the following spring.
          </p>
          <p>
            These students could not place themselves in the dataset; but this
            was a task that our project team could take on. More than that, we
            could connect the data to richer stories—those suggested by the
            individual alumni listings that also appeared in the book.
          </p>
          <p>
            To bring these stories back into the chart itself, Tanvi first
            transcribed all of the names and associated information from the
            1898-99 <em>Catalogue</em> into a spreadsheet. Then, she designed an
            expanded version of the original chart in which datapoints
            representing each of the students in the original dataset, as well
            as the four members of the Class of 1900 who had contribute to the
            creation of the original chart, were placed in the appropriate slice
            of a pie. It was not lost on us that our work was also student-led:
            Anna and Nicholas implemented Tanvi's design, which Jay later
            finessed into its final form.
          </p>
        </CenteredLayout>

        <div id="viz-1" className="my-8 md:my-12 w-full max-w-7xl mx-auto">
          <Viz1 interactive />
        </div>
        <CenteredLayout>
          <p>
            Hovering on each dot of our expanded visualization reveals the
            person's name, self-reported occupation, and place of residence.
            Additional categories represent the 35 alumni with no occupation
            provided, and the 42 alumni who were recorded in the catalog as
            “Deceased.” These were the lives behind the data in the original
            chart, those whose education and accomplishments mattered so much to
            Du Bois and his students that they devoted the central image of the
            chart to testify to them (and, in turn, as justification for the
            call for funding that appears below the image, ensuring similar
            opportunities for students ahead).
          </p>
          <p>
            But even as this visualization provided a more detailed picture—more
            “facts,” if you will—of the students in the dataset, we knew from
            our research that this was not the only way in which the students of
            Atlanta University contributed to Du Bois's larger intellectual
            project. In order to acquire the data for each Atlanta University
            Study, as sociologist Aldon Morris has described, Du Bois drew not
            only from his current students, but from all those who had ever
            taken his three-part course. Together, the students and alumni
            constituted “two tiers of volunteer researchers,” Morris explains.
            <InlineFootnote index={69} /> While the current class of seniors
            would prepare the surveys and, when returned, help to analyze the
            results, it was members of the Atlanta University alumni network
            who, each year, became unofficial field-site supervisors as they
            were asked to further distribute the surveys in their own
            communities and ensure that they were completed and returned. This
            collaborative work became the basis for what Morris has
            retrospectively honored as the “Du Bois-Atlanta School of
            Sociology,” a means of formally recognizing the first data-driven
            sociology program in the United States.
            <InlineFootnote index={70} />
          </p>
          <p>
            Was there a way to testify to these students' role in this
            monumental achievement, even as we could not trace them to any
            particular location or source? We returned to the form of the
            introductory chart. This time, however, we did not look to the
            Atlanta University <em>Catalogues</em> as our source of data; we
            looked to the Atlanta University Studies themselves. We had known
            that the study that the Class of 1900 ultimately produced was,
            appropriately, on the subject of college education.
            <InlineFootnote index={71} /> We also knew that, during the 1909-10,
            Du Bois had returned to the topic, conducting a follow-up study
            entitled <em>The College-Bred Negro American</em>, based on a new
            survey of all known living Black college graduates across the
            country. Per the published report, 800 responses were received.
            <InlineFootnote index={72} />
          </p>
          <p>
            Among the responses were, presumably, many graduates of Atlanta
            University whom Du Bois had personally taught—perhaps even Mack, who
            had by that point returned with her daughter to her hometown of
            Athens, Georgia; or some of the others who had contributed to the
            original study and charts. In the end, we cannot know with certainty
            who, specifically, responded to the survey, as few individual
            responses have been preserved. But we do know that Mack, along with
            Lee, Simon, Westmoreland, and Rogers, were counted in the
            descriptive statistics about Atlanta University graduates that were,
            once again, featured prominently in the report. Our project team had
            found its final charge.
          </p>
          <p></p>
        </CenteredLayout>

    

        <ChartTwoScrollytell
          triggers={[
            <span key="94a7a3b2">
              We created an expanded version of our initial chart with the
              additional data from the 1910 study.
            </span>,
            <span key="94a7a3b3">
              In the original, a map at the top of the page informs the viewer
              of the location of Atlanta University. We added the locations of
              the 140 additional colleges also included in the follow-up report.
            </span>,

            <span key="63ba9abc">
              In our chart, the location of Atlanta University (which is also,
              notably, the location of the majority of our own research team) is
              still marked with a star.
            </span>,
            <span key="1a7c90eb">
              In this pie chart, the 133 graduates of Atlanta University as of
              1909 with known occupations (as determined by the alumni section
              of the 1909-1910 catalog) are positioned in the appropriate area
              of the pie chart. Additional categories represent the nine
              graduates with unknown occupations, and the 21 graduates who were
              recorded as “Deceased.”
            </span>,

            <span key="06e375fc">
              We also expanded the pie chart. In this version, we document all
              3,856 of the Black college graduates described by the study,
              living or dead, whether they returned the survey or not. The 163
              graduates of the “college course” at Atlanta University, whom Du
              Bois describes in the study in depth, are named in our chart. We
              once again used the alumni section of that year's{" "}
              <em>Catalogue</em> to position the graduates in the appropriate
              area of the pie chart. Mack is positioned as a “house wife.”
              Westmoreland is positioned in “government service.” Simon and
              Rogers are positioned as “teachers.” As in our own previous chart,
              we've added categories to represent those with unknown
              occupations, as well as those—at that point also including Lee—who
              were recorded as “Deceased.
            </span>,

            <span key="5448c43e">
              An additional 3,693 gray dots represent the graduates of the other
              140 colleges included in the study, whose names and exact
              occupations we do not know. <InlineFootnote index={73} />
              We used the counts of the occupations reported by the 800 survey
              respondents to calculate the approximate proportion of dots to
              place in each category, which we see as holding visual space for
              each graduate's contributions to the study, even if we do not know
              their exact occupation or name.
            </span>,
            <span key="9b862bca"></span>,
          ]}
        />
        <div id="viz-2">
          <Viz2 interactive={true}></Viz2>
        </div>
        <CenteredLayout className="mt-20">
          <p>
            We do know something more about the students who returned the
            survey, however: we know what they thought. In addition to the
            quantitative data that was collected and presented in the published
            study, there was also data that was qualitative in form. The survey
            that Du Bois and the seniors in that year's sociology course created
            and sent out across the United States, and that perhaps Mack, Simon,
            Westmoreland, and Rogers, helped to further distribute, did not just
            solicit information about the lives and accomplishments of graduates
            that could be compiled as statistics; it also included four
            questions that encouraged long-form response.
          </p>
          <p>
            These included the respondents' reflections on their “early life and
            training,” their plans to educate their own children, the “chief
            hindrances” they had faced since graduation, and their “present
            practical philosophy in regard to the Negro race in America,” which
            was abbreviated in the published study as “philosophy of life.” This
            information seemed, to us, a reflection of Du Bois's own desire to
            arrive at the truth through additional, qualitative means. We saw
            then that our chart required revision, again, to incorporate this
            data into the picture we wanted to show. Lauren and Tanvi used
            optical character recognition (OCR) to create a machine-readable
            dataset of the responses, and then hand-corrected any errors. In
            place of the pie chart that occupied the center of our previous
            chart, we plotted dots representing each of these responses,
            color-coded by the question at hand. Adapting a method of
            interaction developed by visualization designer Tommaso Elli and his
            team, also involving long-form textual data, we designed a mechanism
            such that clicking each dot displays a key phrase from the response
            it represents.
            <InlineFootnote index={74} /> (Lauren was the one to select these
            phrases). Clicking again on the phrase reveals the full response
            from which it is drawn. We see these textual responses as
            contributing to our goal of more complete knowledge about these
            students' lives, even as their specific source remains unnamed.
          </p>
        </CenteredLayout>
        <div id="viz-3">
          <Viz3></Viz3>
        </div>
        <CenteredLayout className="pt-20">
          <p>
            The result is a visualization that at once draws directly from the
            original Paris Exposition charts, and diverges sharply from it. We
            do not present all of the information it contains “at a glance,” to
            return to Du Bois' original words. Instead, the user must interact
            with the image at length, and with sustained effort, in order to
            derive insight from the information it contains. The information is
            also, for the most part, not quantitative. Instead, in a callback to
            the photographs presented alongside the charts in Paris, it consists
            of qualitative response. We do not know which of these responses, if
            any, can be attributed to Mack, Simon, Westmoreland, or Rogers,
            although there are some tantalizing echoes of the stories they might
            have told. Like Mack, several respondents report having daughters.
            On the subject of education, one writes: “I plan to give her a
            college education in southern, eastern and European institutions.”
            “I shall teach the importance of attainment of the highest possible
            type of culture and refinement and the importance of possessing
            something that people who have money want,” another proclaims. “I
            will try to educate my children according to their inclinations. I
            am not partial," writes a third.
          </p>
          <p>
            Were any of these respondents Mack herself? We will never be able to
            say.
            <InlineFootnote index={75} /> But we can still use this
            visualization to expand our knowledge about the “small nation of
            people” it seeks to represent if we allow it to direct us from the
            chart to additional sources, and additional methods, that we might
            enlist in the unfinished project of working towards change. Thinking
            back to where we began our own story—with Thomas Clarkson and his
            “Description of a Slave Ship,” discussed in Chapter 1—we might
            reflect upon how his “immediate impression of horror” contributed to
            abolition in the context these accounts from individuals an ocean
            and a century away. Their testimony confirms the progress that had
            indeed been made, as well as the work that undeniably remained. Here
            we might come to see both visualizations—the one prompting immediate
            insight, and the other requiring sustained thought—as contributing
            to a shared task: of illuminating knowledge through all available
            methods so that the necessary change can take place. Just as Du Bois
            sought to show with his charts and photographs at the Paris
            Exposition, these visualizations, together, illustrate a deeper
            truth: while very often valuable, visualizations cannot stand on
            their own. They must be accompanied by additional methods of
            knowledge-making, broader context, and a commitment to look beyond
            our own expertise when our own methods fall short. This is data
            visualization's essential role: not to serve a sole arbiter of “the
            truth," but as one vital method among many in bringing that truth to
            light.
            <InlineFootnote index={76} />
          </p>
        </CenteredLayout>



    {/* <Viz4 interactive={true}></Viz4> */}
        <Takeaways
          forDesigners={[
            <span key="df782d45">
              Connect your visualization with the world it represents
            </span>,
            <span key="6440631a">
              Consider when change should be your goal
            </span>,
            <span key="2f317172">
              Explore how to combine visualization with other methods
            </span>,
            <span key="2f317173">
              Teach the next generation to continue the work
            </span>,
          ]}
          forViewers={[
            <span key="75cf526a">
              Combine visualization with other sources of insight
            </span>,
            <span key="6d2691fc">
              Always aspire to more complete knowledge
            </span>,
            <span key="9650286d">Recognize when knowledge demands change</span>,
            <span key="9650286e">
              Know that change requires a commitment to act
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
