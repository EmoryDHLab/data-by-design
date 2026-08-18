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
import Figure from "~/components/figures/Figure";
import { chapterMetaTags } from "~/utils";
import Viz1 from "~/components/change/Viz1";
import Viz2 from "~/components/change/Viz2";
import Viz3 from "~/components/change/Viz3";
import ChapterBody from "~/components/layout/ChapterBody";
import Takeaways from "~/components/layout/Takeaways";
import ScrollytellTwo from "~/components/change/scrollytell_two/ScrollytellTwo";
import { chapterMeta } from "~/data/chapterMeta";
import type { MetaFunction } from "react-router";
import type { TVizAnchors, HoverState } from "~/chapterContext";

export const meta: MetaFunction = () => {
  return chapterMetaTags("change");
};

const sections = [
  {
    title: "Visualization and Countervisualization in the Paris Exposition Charts",
    id: "visualization-and-countervisualization",
  },
  {
    title: "Charts, Photographs, and the Limits of Facts",
    id: "charts-photographs-and-the-limits-of-facts",
  },
  {
    title: "Visualization for Liberation",
    id: "visualization-for-liberation",
  },
  {
    title: "Our Project’s Purpose",
    id: "our-projects-purpose",
  },
];

const visualizations: TVizAnchors[] = [
  {
    type: "visualization",
    id: "doc-viewer",
    title: "Document Viewer",
  },
  {
    type: "visualization",
    id: "viz-1",
    title: "Viz 1: Alumni Occupations",
  },
  {
    type: "scrollytell",
    id: "scrollytell-2",
    title: "Scrollytell Two",
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
      <ChapterBody>
        <CenteredLayout>
          <p className="first-paragraph">
            The last week of December 1899 had been cold and exceptionally
            rainy.
            <InlineFootnote index={0} />But on the day after Christmas, when
            Lula Iola Mack crossed the “high and narrow iron bridge” from the
            women’s dormitory to the main campus of Atlanta University, one of
            the nation’s flagship Black colleges, to begin the winter term of
            her senior year, she likely walked with a confident step.
            <InlineFootnote index={1} />Mack was beginning the term as one of
            the top students in her class. She had already been awarded high
            honors after her sophomore year—the only member of her class to
            receive such recognition—and she was on track to repeat the feat at
            graduation.
            <InlineFootnote index={2} />She’d spent the previous term learning
            a range of state-of-the-art methods for data collection and
            analysis, so she likely approached her additional coursework
            feeling well-prepared.
            <InlineFootnote index={3} />She was to undertake a project
            involving “a general survey of social conditions,” just as the
            course catalogue promised, and just as students had done the year
            before.
            <InlineFootnote index={4} />
          </p>
          <p>
            Little did Mack know—nor, for that matter, did her professor—that
            the scope and scale of this project was about to dramatically
            change. For the past several months, a Washington, DC-based lawyer
            and government official by the name of Thomas J. Calloway had been
            leading a letter-writing campaign with a single goal: for the
            United States to stage an “Exhibit of American Negroes” at the 1900{" "}
            <em>Exposition Universelle</em>, which was to be held in Paris the
            following spring.
            <InlineFootnote index={5} />
          </p>
          <p>
            On January 25, 1900—one month to the day after the winter term at
            Atlanta University had begun—Calloway received a financial
            commitment from the federal government.
            <InlineFootnote index={6} />He tasked Daniel A. P. Murray, then
            the Assistant Librarian of Congress, with assembling a set of books
            by Black writers to put on display. He also reached out to a
            college friend to work through what the “social” component of the
            exhibit should include.
            <InlineFootnote index={7} />This friend was Mack’s professor, none
            other than the esteemed sociologist, author, and activist W. E. B.
            Du Bois. And for the next three months, Mack, Du Bois, the three
            other students enrolled in his year-long sociology sequence, and an
            additional student—William Andrew Rogers—who had graduated the
            previous spring, threw themselves into the work that would
            culminate in a set of 63 (or 64) “plans, charts, and figures” for
            the Paris Exposition, as the event was also called.
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
                </p>
              </div>
            }
          />
          <p>
            And yet, when the story of the charts’ creation is told, it
            generally tends to follow an arc much like those of William
            Playfair, Charles Minard, and other “founders” and “fathers” of the
            field. The result is that Du Bois is celebrated for his singular
            achievement, but we fail to see the bigger picture—or the
            additional people—that allow us to understand the full significance
            of the charts. This is why the final historical chapter of this
            project is centered on Du Bois, his charts, and the students who
            helped to create them. As we will learn, Du Bois was required to
            recalibrate his confidence in the power of data visualization, and
            data analysis more broadly, as a result of the racism—and, in one
            particular moment, outright racial terror—that he personally faced.
            What he realized, in the end, was that he could not—and therefore
            did not—convey his call for change on his own.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[0]} />

        <TwoColumnLayout>
          <Column>
            <p className="first-paragraph">
              The 63 (or 64) poster-sized charts that Mack, Du Bois, and the
              other Atlanta University students made for the Paris Exposition
              were organized into two distinct sets. The first,{" "}
              <cite>The Georgia Negro: A Social Study</cite>, consisted of 36
              charts that visualized statistics related to the Black population
              of that state. Scholars generally believe that William Andrew
              Rogers, the student from the year before, was responsible for
              much of the design and implementation of this set of charts.
              <InlineFootnote index={9} />The second set,{" "}
              <cite>
                A Series of Statistical Charts Illustrating the Condition of the
                Descendants of Former Slaves Now in Residence in the United
                States of America
              </cite>
              , drew from several data sources, including the US Census, in
              order to put the Black population of the United States in
              national and international perspectives.
              <InlineFootnote index={10} />These charts are collectively
              attributed to “Negro Students of Atlanta University,” but nowhere
              does Du Bois credit any of these students by name.
              <InlineFootnote index={11} />
            </p>
            <p>
              For visualization researchers, focused on the charts themselves,
              this lack of direct attribution has made the identities of these
              students somewhat of a dead end. But for humanities scholars,
              particularly those trained in techniques for recovering meaning
              from fragmentary archives, this “archival silence,” as it is often
              called, is where the real work begins.
              <InlineFootnote index={12} />The lists and ledger books,
              catalogues and records—the bureaucratic and household detritus
              that, for most people, can be safely set to the side—are, for
              these scholars, the main focus of their research. Certainly
              they’ve been the main focus of mine.
              <InlineFootnote index={13} />In this particular case, it’s the
              annual{" "}
              <cite>
                Catalogue of the Officers and Students of Atlanta University
              </cite>
              —the same that Mack would have consulted for information about her
              sociology coursework at the start of the term—that points to the
              likely contributors to this set of charts: Mack along with three
              others—Henry Napoleon Lee, Edward Lee Simon, and William George
              Westmoreland. Why might this be true? Because they are the four
              students listed in the catalogue as the members of the Atlanta
              University Class of 1900.
              <InlineFootnote index={14} />
            </p>
          </Column>
          <Column shouldPin className="md:p-10">
            <Figure figure={figures["0504-georgia"]} />
          </Column>
        </TwoColumnLayout>

        <div id="doc-viewer">
          <DocumentViewer />
        </div>

        <CenteredLayout>
          <p>
            Because Du Bois’s year-long sociology course sequence was required
            of all Atlanta University seniors, we can safely assume that Mack,
            Lee, Simon, and Westmoreland all took his winter-term class.
            <InlineFootnote index={15} />We also know from extensive
            scholarship on Du Bois—and, again, from the catalogue itself—that
            the organizing principle of Du Bois’s pedagogy was to involve his
            students in the research (and requisite skills of data analysis)
            required to produce public-facing work.
            <InlineFootnote index={16} />When Du Bois received the invitation
            to contribute to the Paris Exposition, he canceled all of his
            winter-term classes except for his sociology course.
            <InlineFootnote index={17} />Presumably he identified a direct
            alignment between the course’s learning objectives and the work
            that creating the charts would entail. But perhaps even more than
            that, Du Bois recognized from the start that, both practically and
            conceptually, the work of creating the charts could not be
            completed alone.
          </p>

          <p className="text-center font-power text-xl">***</p>

          <p>
            The title chart of the <cite>Georgia Negro</cite> series—the set
            commonly attributed to Rogers—is often posited as a key to
            unlocking the significance of the charts as a whole. This is both
            because of its imagery—it depicts a pair of Mercator projections,
            one of Africa and the other of the Americas, showing the “routes of
            the African slave trade”—and because of its text. At the bottom of
            the chart, it reads: “The problem of the 20th century is the problem
            of the color line.” When these words reappeared three years later
            in <cite>The Souls of Black Folk</cite>, they would become “perhaps
            Du Bois’s most famous indictment of the centrality of race and
            racism to modern American sociopolitical life,” as architectural
            historian Mabel O. Wilson explains.
            <InlineFootnote index={18} />These words also function as a key to
            interpreting the actual colored lines of the charts. But I believe
            that the true key to the charts lies in the contributions of Du
            Bois’s students: Rogers, Lee, Simons, Westmoreland, and Mack. After
            all, each of them was already living with the effects of the color
            line every day.
          </p>
          <p>
            The period beginning in 1877, in the aftermath of Reconstruction,
            and running through the 1890s, when Du Bois’s students were in
            school, was characterized by state-level laws enforcing racial
            segregation through a combination of direct and indirect means. The
            effects of these laws, colloquially known as Jim Crow, were
            compounded by the rise of the Ku Klux Klan, and more generally by
            the legitimization of racial terror on behalf of Southern whites.
            The decade leading up to the Paris Exposition had been the most
            outwardly violent and oppressive since the end of the Civil War.
            <InlineFootnote index={19} />
          </p>
          <p>
            This was the same context that, just a few years earlier, had
            prompted the investigative journalist Ida B. Wells to compile the
            first comprehensive dataset on lynching, which she published as{" "}
            <cite>
              A Red Record: Tabulated Statistics and Alleged Causes of Lynchings
              in the United States
            </cite>{" "}
            in 1895—a form of counterdata collection more than a century before
            the term was coined. Wells, like Du Bois at the time, believed that
            the first step to eradicating this epidemic of racial terror would
            be to collect data, or “statistics” as they were known, that could
            document its scope and scale.
            <InlineFootnote index={20} />
          </p>
          <p>
            As the twentieth century unfolded, data and the (very often
            spurious) statistical claims that data enabled would become a
            primary means of racial surveillance, eugenic policy, and social
            control.
            <InlineFootnote index={21} />But in this particular moment, before
            the power of data and statistics had been fully consolidated in the
            hands of the state, the “very newness of these technologies also
            created loopholes” for Black and white data activists alike,
            literary scholar Autumn Womack explains.
            <InlineFootnote index={22} />This resulted in “enthusiasm and
            curiosity” and, in the case of Wells, Du Bois, and his students, the
            belief that data—when collected, analyzed, and communicated with
            accuracy and care—could bring the nation closer to the goals that
            its foundational documents proudly proclaimed.
            <InlineFootnote index={23} />
          </p>

          <p className="text-center font-power text-xl">***</p>

          <p>
            This combination of enthusiasm, curiosity, and conviction is clearly
            evident in the Paris Exposition charts. Intent on demonstrating the
            “progress and prospects” of Black Americans in spite of the
            constraints on their freedom they faced, Du Bois and his students
            took active steps to ensure that there would be no
            misinterpretation of the insights they hoped their charts would
            convey.
            <InlineFootnote index={24} />They carefully selected specific
            facets of each dataset, at times also devising novel visualization
            forms, so as to ensure that this message would be clear. The Black
            population of Georgia is shown to increase every decade; the number
            of Black children enrolled in school is similarly shown to be on
            the rise; land ownership is documented as growing nearly every year
            of the previous 25; and the assessed value of Black Georgians’
            property has exploded so exponentially that it requires a wholly
            new visual form—a bar chart curved into a spiral—for the most recent
            values to even fit on the page. These increasingly novel visual
            forms seem to ask viewers to imagine Black progress through the lens
            of Black creativity: what might come to be if the future of Black
            America, like the expressive possibilities of data visualization,
            were also not curtailed by convention and code?
          </p>

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
                Black children enrolled in public school; the number of acres
                of land owned by Black Georgians, with an overall form that
                resembles the shape of the state itself. Images courtesy of the
                Library of Congress, Prints &amp; Photographs Division,
                LC-DIG-ppmsca-33866, LC-DIG-ppmsca-33877, and
                LC-DIG-ppmsca-33881.
              </p>
            }
          />

          <Figure figure={figures["0508-value"]} />

          <p>
            The second set of charts—the set explicitly attributed to “Negro
            Students of Atlanta University”—continues to communicate this
            narrative of “progress and prospects.” This set is distinguished
            from the first by how it makes use of comparisons to other
            populations, as well as to other charts. As it turns out, Du Bois
            was carrying out his own survey work for the US Bureau of Labor
            Statistics at the same time as he was instructing his students in
            how to conduct the “survey of social conditions” that they would
            fold into the charts.
            <InlineFootnote index={25} />While we do not know whether the
            results of Du Bois’s surveys were ever incorporated into the larger
            statistical reports that the government released, the design of
            certain charts from the second set of charts makes clear that Du
            Bois and his students had the topic of federal data collection—and
            the information that the government lacked—plainly in their sights.
          </p>
          <p>
            In 1894, the chief geographer for the US Census, Henry Gannett, had
            released a pamphlet that compiled and visualized statistics on Black
            Americans on the basis of one hundred years of US Census data.
            <InlineFootnote index={26} />Among the charts was one labeled
            “Conjugal Condition of the Negro Element,” which Gannett marshaled
            in the service of a eugenicist argument about the relative weakness
            of the US Black population in relation to the white one.
            <InlineFootnote index={27} />For the Paris Exposition, Du Bois and
            his students recreated the Gannett chart as “Conjugal Condition of
            American Negroes according to Age Periods,” the 17th of their 27 (or
            28) charts. Seemingly akin to how, earlier in the century,
            abolitionists such as David Walker advocated that Black citizens
            read the racist arguments made by Thomas Jefferson, and other white
            people of the time, so as to be able to directly refute them, Du
            Bois enlisted his students in refuting Gannett’s arguments through
            the same form that had been used to advance them in the first place:
            the chart.
            <InlineFootnote index={28} />This is a clear instance of what we
            would call “countervisualization” today.
          </p>

          <Figure
            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 items-baseline"
            figures={[
              figures["0511-master-rbc-rbaapc-10601-0031"],
              figures["0513-db-conjugal"],
            ]}
            groupCaption={
              <p>
                Left: the chart of marriage statistics that appeared in Henry
                Gannett’s 1894 <cite>Statistics of the Negroes in the United
                States</cite>. Right: the chart created by Du Bois and his
                students, visualizing the Black population only, for the Paris
                Exposition. Images courtesy of the Library of Congress, Rare
                Book and Special Collections Division, and Prints &amp;
                Photographs Division, LC-DIG-ppmsca-33915.
              </p>
            }
          />

          <p>
            The illustrated edition of the 1890 census in which the Gannett
            chart also appeared, formally titled{" "}
            <cite>
              Statistical Atlas of the United States, Based on the Results of the
              Eleventh Census
            </cite>
            , had been published just a year earlier, in 1898, and must have
            also been a topic of classroom discussion. This is evident in the
            visual similarity between another chart that appears in the{" "}
            <cite>Statistical Atlas</cite>, “Growth of the Elements of the
            Population: 1790–1890,” and the graduated area chart, “The
            Amalgamation of White and Black Elements of the Population in the
            United States,” which immediately follows the “Conjugal Condition”
            chart in the student set. The notable difference, here, is the focus
            on the US Black population alone. There is no mistaking the reason
            for this focus: by mirroring the form of the chart in the{" "}
            <cite>Statistical Atlas</cite> but focusing on the Black population
            alone, the charts reinforce the idea Du Bois put into words later
            that year when recalling the exhibit in Paris: that this “small
            nation of people” within the larger United States, its triumphs and
            its challenges, deserved to have a national statistical atlas of its
            own.
            <InlineFootnote index={29} />
          </p>

          <Figure
            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 items-baseline"
            figures={[figures["0514-population"], figures["0515-916-amalg"]]}
          />
        </CenteredLayout>

        <ChapterSectionTitle section={sections[1]} />

        <CenteredLayout>
          <p className="first-paragraph">
            Today, the charts of the Paris Exposition are often shared as single
            images, embedded in social media posts, or—as in the case of{" "}
            <cite>W. E. B. Du Bois’s Data Portraits</cite>, bound as a dazzling,
            full-color book. But in their own time, the charts were intended to
            be viewed in relation to the other artifacts on display. There were
            the 200 books that had resulted from Murray’s attempt to include
            every Black-authored text that had been published to that point,
            along with a more complete 1,400-item bibliography. There were
            physical artifacts, including a bronze statuette of Frederick
            Douglass and a “remarkable” wood frame carved by a man who was
            formerly enslaved, among other examples of wood and metalwork from
            students and faculty at other Black colleges and industrial schools.
            <InlineFootnote index={30} />There was a three-volume compilation
            that Du Bois titled “Black Codes of Georgia,” which contained a
            catalogue of all of the discriminatory laws enacted in the state
            since the end of the Civil War—one of the few explicit
            acknowledgments in the exhibit of the harsh reality of being Black
            in the post-Reconstruction United States.
            <InlineFootnote index={31} />
          </p>
          <p>
            And then there were the photographs. The exhibit included over 500
            original prints documenting Black Americans at home, at work, and at
            school—including at Atlanta University, where a group of four women
            students were photographed on the steps of their classroom building.
            <InlineFootnote index={32} />Was one of these students Lula Iola
            Mack? Did any of these students live with Mack in the “plain four
            story brick building” that served as the women’s dorm, on the corner
            of West Hunter and Vine Streets?
            <InlineFootnote index={33} />Or could it be that these women were,
            instead, in the year below Mack—part of the Class of 1901, which
            included the largest cohort of women students at Atlanta University
            to that point in time? These questions are tantalizing, but they do
            not have answers—at least not that we know. We do know, however,
            what Du Bois was trying to accomplish by including photos like this
            in the exhibit: an overturning of “conventional American ideas”
            about what the nation’s Black citizenry looked like, what social and
            professional roles they occupied, and, in the case of these four
            women, what they were poised to achieve.
            <InlineFootnote index={34} />
          </p>

          <Figure figure={figures["0516-master-pnp-ppmsca-08700-08778u"]} />

          <p>
            The art historian Shawn Michelle Smith connects the Paris Exposition
            photographs to Du Bois’s idea of double consciousness, as
            articulated most famously in <cite>The Souls of Black Folk</cite> as
            “the sense of always looking at one’s self through the eyes of
            another.”
            <InlineFootnote index={35} />With the photographs, which not only
            featured Black people but were also created by them—the prominent
            Black photographer Thomas Askew took the Atlanta University shots—Du
            Bois sought to present to a predominantly white international
            audience a view of how Black Americans saw themselves.
            <InlineFootnote index={36} />When we see how the charts were
            installed alongside the photographs in Paris, it becomes all the
            more apparent that the charts were also pushing back against this
            double consciousness, albeit through a different visual form.
            <InlineFootnote index={37} />In direct comparison to the government
            statistics collected by Gannett, who was white, the charts created
            by Du Bois and his students can be interpreted as expressing their
            own assessment of the status of race and racism in America at the
            time.
          </p>
          <p>
            At the same time, Du Bois’s decision to pair the charts with the
            photographs also points to his awareness of the limits of what
            either medium—one quantitative, the other qualitative—could achieve
            on its own. While the photographs could document the richness of
            individual lives, they could not document the life of each of the
            nation’s Black citizens. Conversely, while the charts could present
            powerful evidence of broad trends, they could not expose the
            individuals behind the data. Considered as a complementary pair,
            however, the charts and the photographs recall another visual
            technology of that era, the stereoscope, whose form is suggested by
            the double-projection layout of the <cite>Georgia Negro</cite>’s
            introductory chart.
          </p>

          <Figure
            className="mix-blend-multiply"
            figure={figures["0517-perfecscope-zbHCp_orig-zoom"]}
          />

          <p>
            The stereoscope was a device that spliced together two photographs
            of the same scene, taken from slightly different viewpoints. When
            the photos were viewed simultaneously, one by each eye, the
            stereoscope created the illusion of three-dimensional depth.
            Similarly, I believe that Du Bois understood the charts and the
            photographs as two parts of a larger whole. While each was legible
            on its own, the more complete—and therefore more accurate—picture
            was gained by viewing the two components together. The stakes of
            this apperception were high. Both Du Bois’s students, and the people
            for whom they designed their charts, would be required to cultivate
            not only historical knowledge but also political consciousness: the
            conviction necessary to pair any insights prompted by the charts
            with a personal commitment to act.
          </p>

          <p className="text-center font-power text-xl">***</p>

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
            <InlineFootnote index={38} />
          </p>
          <p>
            But after only a year in Atlanta—and just a few months before he
            began to assemble the materials for the Paris Exposition—Du Bois
            experienced nothing less than an epistemological epiphany, and not
            in any positive sense of the term. It was brought about not by the
            introduction of any new published facts, but instead by his own
            firsthand evidence of how white supremacy would constrain any work
            that he might do. In <cite>Dusk of Dawn</cite>, Du Bois narrates
            this realization in almost metaphysical terms: “At the very time when
            my studies were most successful, there cut across this plan which I
            had as a scientist, a red ray which could not be ignored.”
            <InlineFootnote index={39} />
          </p>
          <p>
            This “red ray” was no abstraction. It had a specific and horrific
            source: the lynching of a man named Sam Hose, which had taken place
            just outside Atlanta, on April 23, 1899. Ten days before, Hose and
            his employer had gotten into an argument after Hose requested time
            off to visit his mother, who was sick. The argument spiraled out of
            control, resulting in the employer’s death; from there, rumors
            abounded.
            <InlineFootnote index={40} />Du Bois had the idea to write an essay
            about the incident for the <cite>Atlanta Constitution</cite>, the
            leading newspaper of the South. He recalls how he drafted a “careful
            and reasoned statement concerning the evident facts.”
            <InlineFootnote index={40} />But while
            walking from the Atlanta University campus to the newspaper
            office—he planned to deliver his statement in person—Du Bois learned
            of a gruesome new turn of events: Hose had been lynched, and his
            knuckles were rumored to be on display in a storefront that Du Bois
            himself would soon pass on his walk. Du Bois turned around and went
            home, his statement never to see the light of day.
            <InlineFootnote index={41} />
          </p>
          <p>
            While Du Bois’s desire to publish a statement on the “facts” of the
            case was extinguished at that point, he continued to
            contemplate—deeply—the larger function of his research. As he
            narrates:
          </p>

          <Quotation
            quote={
              <>
                Two considerations thereafter broke in upon my work and
                eventually disrupted it: first, one could not be a calm, cool,
                and detached scientist while Negroes were lynched, murdered, and
                starved; and secondly, there was no such definite demand for
                scientific work of the sort that I was doing.
                <InlineFootnote index={42} />
              </>
            }
            byline={
              <span>
                W. E. B. Du Bois, <cite>Dusk of Dawn</cite>
              </span>
            }
          ></Quotation>

          <p>
            He goes on to explain how, previously, he had “regarded it as
            axiomatic that the world wanted to learn the truth and if the truth
            was sought with even approximate accuracy and painstaking devotion,
            the world would gladly support the effort.”
            <InlineFootnote index={43} />But the violence brought about by
            centuries of white supremacy, Du Bois realized at that moment,
            demanded an epistemological charge greater than what could ever be
            learned through facts alone. Thus when he turned to the Paris
            Exposition in the next academic year, it was not facts or data, but
            instead the experience and effects of living within, continually
            resisting, and, in spite of it all, succeeding within a racist
            regime, that Du Bois must have encouraged his students to give
            visual form. They did so through the charts they designed that hung
            on the walls, and through the presence of their classmates pictured
            in the photographs—pointedly accompanied by the three volumes of
            Black Codes on the shelves.
            <InlineFootnote index={44} />
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[2]} />

        <CenteredLayout>
          <p className="first-paragraph">
            After graduation, Lula Iola Mack moved about two hundred miles south
            of Atlanta to Albany, Georgia, where she worked as a teacher for
            several years. In 1902, she married one Mr. F. H. Wilkins, and they
            spent the next decade together, moving around the southeast.
            <InlineFootnote index={45} />In 1907, they had a child, whom they
            named Marggette (or possibly Marguerite) Iolamarie.
            <InlineFootnote index={46} />
          </p>
          <p>
            After taking the year after graduation to work on the Paris
            Exposition charts, William Andrew Rogers also became a
            teacher—working for two years in Macon, Georgia, and then moving to a
            school in Petersburg, Virginia, where, in 1909, he also obtained a
            master’s degree.
            <InlineFootnote index={47} />Meanwhile, William George
            Westmoreland stayed in Atlanta, finding stable work as a mail
            carrier there.
            <InlineFootnote index={48} />Henry Napoleon Lee and Edward Lee
            Simon both moved to Memphis. While Simon became the superintendent
            of the printing department at the LeMoyne Institute there, Lee worked
            as a teacher in the industrial department of the same school. Both,
            evidently, were putting the design and printing skills that they had
            honed in the Atlanta University print shop to work.
            <InlineFootnote index={49} />
          </p>
          <p>
            The next year, Lee moved to Denver, then to Hot Springs, Arkansas,
            then back to Atlanta. In 1905, he was working in Macon, Georgia, as a
            teacher at the Ballard Normal School, along with several other alumni
            of Atlanta University who had found employment there. According to
            the annual Atlanta University <cite>Catalogues</cite>, which also
            include detailed alumni information—and from which these accounts are
            primarily drawn—Lee lived and worked in Macon until he passed away in
            1907, the same year that Mack’s daughter was born. Lee couldn’t have
            been much older than 25.
            <InlineFootnote index={50} />
          </p>

          <Figure figure={figures["0518-auc002catalog1908-cropped"]} />

          <p>
            Du Bois, by contrast, went on to live a long life, passing away at
            the age of 95 in Ghana, where he had moved two years earlier as the
            culmination of his increasingly anticolonial activism and ideas.
            <InlineFootnote index={51} />While he would continue to make charts
            and tables with his students until at least 1910, when he left
            Atlanta University to join the NAACP, he would never again create
            visualizations at the size or scale of the Paris Exposition charts.
            <InlineFootnote index={52} />Among Du Bois scholars, it is generally
            believed that the lynching of Sam Hose marked the beginning of the
            end of Du Bois’s conviction that data, and quantitative methods more
            broadly, would bring about the full extent of the social change that
            was so clearly required.
            <InlineFootnote index={53} />
          </p>

          <p className="text-center font-power text-xl">***</p>

          <p>
            Even as Du Bois himself may have shifted his own methods of inquiry
            and instruction from that point forward, going so far as to declare
            certain aspects of human nature “undiscovered and undiscoverable” by
            quantitative means, the charts that he and his students made for the
            Paris Exposition still can function, for us, as valuable guides. This
            is both for the visual strategies they employ, and for the issues of
            structural racism that they illuminate, which still demand our
            attention today.
            <InlineFootnote index={54} />These are chief among the reasons that
            Du Bois’s charts have joined William Playfair’s line graphs and bar
            charts (or perhaps even usurped their place) as a focus for
            visualization designers and artists today.
            <InlineFootnote index={55} />
          </p>
          <p>
            In 2017, for example, data journalist and visualization designer Mona
            Chalabi decided to recreate several of the charts from the Paris
            Exposition using contemporary data. She decided to draw her updated
            charts by hand. While visually dazzling, the picture of progress
            that they paint is, in Chalabi’s words, “bleak.”
            <InlineFootnote index={56} />In her analysis of the data on
            literacy levels in the US in 2010, as compiled by the National Center
            for Education Statistics, she discovered that “illiteracy among black
            Americans was still four times higher than it was for white
            Americans.” Her updating of the chart of “assessed value of household
            and kitchen furniture” owned by Black Georgians, which led her to US
            Census Bureau data on net worth, resulted in a picture that
            documented how, “for every dollar a black household in America has in
            net assets, a white household has 16.5 more.”
          </p>

          <Figure
            figure={figures["0519-chalabi-illiteracy"]}
            className="mx-2 md:mx-12 text-sm md:text-base"
          />
          <Figure
            figure={figures["0520-chalabi-worth"]}
            className="mx-2 mix-blend-multiply md:mx-12 text-sm md:text-base"
          />

          <p className="text-center font-power text-xl">***</p>

          <p>
            It is incredibly affecting to see some of the most distinctive of the
            charts recreated with contemporary data, and, even more, to see how
            certain trends have so sharply diverged from the narrative of
            “progress and prospects” that Du Bois and his students sought to
            convey. From the time that I first encountered Chalabi’s recreations
            and decided to incorporate them in this book, I have asked myself why
            they are so powerful—far more than even the most impressive of
            recreations of William Playfair’s iconic charts. To be sure, there is
            a sense of historiographic justice involved in seeing Du Bois and his
            students elevated to the level of Playfair. There is also some degree
            of visual novelty; even though the charts of the Paris Exposition
            have become increasingly well-known, their more unique visual forms
            are still employed far less than, say, a line graph or bar chart. But
            in the end, I think it comes down to the story they tell, both about
            the continued entrenchment of racial inequality, and about the
            strength and commitment of Du Bois’s and his students’ desire to
            change it.
          </p>
          <p>
            Of course, those personally experiencing the impact of such
            inequality do not need visualization to “reveal” its effects; they
            live with its effects every day.
            <InlineFootnote index={57} />This is the point made by another
            contemporary project based on Du Bois’s charts, by the artist and
            educator Mimi Ọnụọha, which will bring us toward this chapter’s
            close. “In Absentia” consists of six charts that reference the
            sequence and visual forms of the original charts. Their purpose is
            not to provide additional evidence of what is already known to be
            true, however. Instead, in Ọnụọha’s own words, the charts “form a
            meditation on interpretability, questioning why such a fact [about
            racism] should need proving.”
            <InlineFootnote index={58} />
          </p>
          <p>
            Ọnụọha’s charts follow a similar progression to those in the{" "}
            <cite>Georgia Negro</cite> series, also using typologies that recall
            the original charts. Maps in small multiples, similar to those that
            Rogers and Du Bois employed to begin the series, document the spatial
            relation between three seemingly unrelated events and phenomena: the
            Indigenous lands that were claimed by the US government through the
            Indian Removal Act of 1830; the locations in which “convict leasing”
            was practiced in the 1870s, when prisons required those they
            imprisoned to work for private companies, which bolstered prison
            profits but offered no compensation for the imprisoned workers
            themselves; and the states with, as of 2019, the highest
            incarceration rates in the country. (To this we might add the
            locations of immigrant detention centers that are currently being
            built.) But rather than continue to provide additional evidence of
            the unfolding legacy of slavery and dispossession, Ọnụọha employs
            some of the original series’s more experimental forms to offer
            commentary on the continual need for evidence. A chart that resembles
            the spiraling bar chart of the value of household possessions,
            discussed above, here consists of lines labeled “What,” “are we,”
            “trying to prove.” A final chart is simply a circle, fully shaded,
            labeled “A space for truths that cannot be shown.” The chart is
            titled “It Could Never Be Large Enough.”
          </p>

          <div className="sm:grid grid-cols-3 gap-4">
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
            In the context of Du Bois’s autobiographical writing about the
            difficulty of connecting facts and data with “the truth,” Ọnụọha’s
            use of this term speaks volumes. It reminds us—those of us who seek
            to create visualizations that bear witness to oppression, those of us
            who seek to design charts for change, and those of us eager to
            celebrate the innovative forms that result from both—that we often
            need no further evidence of what we already know to be true. If our
            ultimate goal is liberation—that is to say, the realization of a
            world in which all of us can equally thrive—then we very well may
            need to look to methods beyond visualization in order to achieve it.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[3]} />

        <CenteredLayout>
          <p className="first-paragraph">
            As our project team considered how we might inhabit Du Bois’s
            approach to visualization, we were keenly aware of the challenge it
            posed in relation to <cite>Data by Design</cite> as a whole.
            Throughout this site, we’ve presented abundant examples of the power
            of data visualization to change hearts and minds. Put directly: we
            believe in this power; it’s in large part what has brought (and has
            kept) our team together. But for the visualization component of this
            chapter, we were required to confront something new: the knowledge
            that this chapter’s central figure—Du Bois himself—had very clearly
            decided that visualization was not powerful enough to effect lasting
            change. Slowly, and not entirely without trepidation, we came to
            realize that any new visualization we might design for this chapter
            would have to confront this contradiction head on.
          </p>
          <p>
            This realization carried us back to the starting point of this
            chapter—and to the story of Lula Iola Mack and her Atlanta
            University classmates, with whom we’d always felt a close kinship as
            another student-centered visualization design team. We asked
            ourselves if we might be able to use our own visualization skills to
            prompt fresh insights about these other students’ lives, while
            simultaneously acknowledging the limits of what we in the present
            could know.
          </p>
          <p>
            In our research involving the Atlanta University{" "}
            <cite>Catalogues</cite>, from which we had surfaced the details of
            these five students’ lives, we had noticed a detail about the Paris
            Exposition charts that seemed to have gone unremarked upon: the count
            of the total number of graduates of Atlanta University that is
            featured (and visualized) on the second series’ introductory
            chart—330—matches exactly with the total number provided in a data
            table included in the 1898–1899 <cite>Catalogue</cite>, which had
            been published the year before and would have thus been the most
            recent catalogue that was available to Du Bois and his students for
            their work.
            <InlineFootnote index={59} />The data table also includes summary
            statistics about the 330 students’ occupations, and presumably served
            as the data source for the occupations pictured in the central pie
            chart that was displayed on the wall in Paris.
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
            We were enthralled with the possibility that the students who had
            collected, analyzed, and visualized the data that appeared in the
            charts—Mack, Westmoreland, Simon, and Lee—might also be included in
            the dataset itself. But there was one problem with this line of
            thinking: the data had been collected during the previous year, so it
            only included Rogers. It did not include the four seniors, who would
            graduate and become part of the alumni dataset the following spring.
            Our team had found its charge.
          </p>
          <p>
            While the students could not place themselves in the dataset, 125
            years later our project team could. Equipped with the tools of both
            archival research and visualization design, we could go further
            still: we could use visualization to connect their data, and the data
            of the 330 other Atlanta University graduates visualized in the
            central pie chart, to the stories suggested by the alumni listings.
          </p>
          <p>
            Illuminating the students’ stories felt especially important to me in
            my role as the leader of my own (majority) student project team. It
            also felt important to me in my own role as a student of the archive
            of slavery and the many, like Du Bois and his students, who lived in
            its wake. What I have learned from scholars of slavery, such as
            Saidiya Hartman, is that the lives of those who have not been
            “endowed with the gravity and authority of historical actor” are
            precisely those who should demand our attention today.
            <InlineFootnote index={60} />This is, after all, why I have placed
            so much emphasis on Lula Iola Mack in this chapter. It is because of
            my own deep-seated belief that it is in the lives of those most
            marginalized in the archive, as in the history of data visualization,
            that the most powerful stories can be found.
          </p>

          <p className="text-center font-power text-xl">***</p>

          <p>
            The task of bringing back Mack and her classmates to the center of
            the story was one we approached as a full project team. Tanvi first
            transcribed all of the names and associated information from the
            1898–1899 <cite>Catalogue</cite> into a spreadsheet. Then she
            designed an expanded version of the original pie chart with
            interactive datapoints representing each of the students in the
            original dataset.
          </p>
          <p>
            The members of the class of 1900 were placed in the chart according
            to the occupations they would assume upon graduation. In a meaningful
            echo of the student-led process of creating the original charts, Anna
            and Nicholas implemented Tanvi’s design, which Jay then finessed into
            its final form.
          </p>
        </CenteredLayout>

        <div id="viz-1" className="w-full max-w-7xl mx-auto">
          <Viz1 interactive />
        </div>

        <CenteredLayout>
          <p>
            Hovering on each dot in our expanded visualization reveals the
            person’s name, self-reported occupation, and place of residence.
            Additional categories represent the 35 alumni with no occupation
            provided and the 42 alumni who were recorded in the catalogue as
            “Deceased.”
          </p>
          <p>
            These details were our way to give more texture to the lives behind
            the data in the original chart—to the people whose education and
            accomplishments mattered so much to Du Bois and his students that
            they devoted the most prominent visualization in the entire set to
            them. (It should be noted that this chart was also used to raise
            money for the college; a call for funding appears below the image,
            ensuring similar opportunities for students ahead.)
          </p>

          <p className="text-center font-power text-xl">***</p>

          <p>
            But even as this visualization provided a more detailed picture of
            the students in the dataset—more “facts,” if you will—we knew from
            our research that this was not the only way in which these students
            contributed to Du Bois’s larger intellectual project. Du Bois was
            recruited to his professorial position in large part to assume
            direction of the Atlanta University Studies. These annual reports, on
            topics of Black American life ranging from business to religion to
            public health to crime, were presented each spring at a large public
            conference and, several weeks or months later, were published by
            Atlanta University’s in-house printing press for broader circulation.
            <InlineFootnote index={61} />The first had been published only two
            years before Du Bois’s arrival, but they had already become one of
            the school’s defining intellectual contributions. Not incidentally,
            some of the data collected for the studies can be found in visual
            form in the Paris Exposition charts.
            <InlineFootnote index={62} />
          </p>
          <p>
            In order to collect this data, as sociologist Aldon Morris has
            described, Du Bois enlisted not only his current students but all
            those who had ever taken his sociology course sequence. Together, the
            students and alumni constituted “two tiers of volunteer researchers,”
            Morris explains.
            <InlineFootnote index={63} />While the current class of seniors
            would prepare the surveys and, when the surveys were returned, help
            to analyze the results, it was members of the Atlanta University
            alumni network who, each year, became unofficial field site
            supervisors. Du Bois asked this ever-expanding group of graduates to
            further distribute the surveys in their own communities, and to
            ensure that they were completed and returned. This collaborative work
            became the basis for what Morris has retrospectively honored as the
            “Du Bois-Atlanta School of Sociology,” a means of formally
            recognizing the first data-driven sociology program in the United
            States.
            <InlineFootnote index={64} />
          </p>
          <p>
            To honor this network of alumni and the crucial role they played in
            contributing to Du Bois’s efforts at Black data collection, we
            returned to the form of the introductory chart. This time, however,
            we did not look to the Atlanta University <cite>Catalogues</cite> as
            our source of data; we looked to the Atlanta University Studies
            themselves. We had known that the study that Mack and her classmates
            produced after completing the charts for the Paris Exposition was,
            very appropriately, on the subject of college education.
            <InlineFootnote index={65} />We also knew that, a decade later, Du
            Bois had returned to the topic, conducting a follow-up study entitled{" "}
            <cite>The College-Bred Negro American</cite>, based on a new survey
            of all known living Black college graduates across the country. Per
            the published study, 800 responses were received.
            <InlineFootnote index={66} />
          </p>
          <p>
            Among the respondents were, presumably, many of the ten years of
            graduates of Atlanta University whom Du Bois had personally taught by
            that point—perhaps even Mack, who had since returned to her hometown
            of Athens, Georgia with her three-year-old daughter.
            <InlineFootnote index={67} />Few individual responses to the survey
            have been preserved, so we cannot know with any certainty whether
            Mack or any of her classmates chose to respond. But the study does
            contain a data table of all Atlanta University graduates to that
            point; Mack, Lee, Simon, Westmoreland, and Rogers were definitely
            counted in number if not credited by name.
          </p>
        </CenteredLayout>

        <ScrollytellTwo
          triggers={[
            <span key="94a7a3b2">
              We thus created an updated version of our initial chart with the
              additional data from the 1910 Atlanta University Study.
            </span>,
            <span key="94a7a3b3">
              In the original chart, a map at the top of the page informed
              viewers of the location of Atlanta University.
            </span>,
            <span key="63ba9abc">
              In our version, we added the locations of the 33 additional Black
              colleges also included in the study.
              <InlineFootnote index={68} />
            </span>,
            <span key="06e375fc">
              The location of Atlanta University (which is also, notably, the
              location of the majority of our own research team) is still marked
              with a star.
            </span>,
            <span key="f52202ee"></span>,
            <span key="5448c43e">
              We also expanded the pie chart. We documented all 3,856 of the
              Black college graduates described by the study, living or dead,
              whether they returned the survey or not.
            </span>,
            <span key="9b862bca">
              The 163 graduates of the “college course” at Atlanta University,
              whom Du Bois describes in the study in depth, are named in our
              chart. We once again used the alumni section of that year’s{" "}
              <cite>Catalogue</cite> to group the graduates by occupation and
              position them in the appropriate area of the pie chart.
            </span>,
            <span key="6bb49ec4">
              Mack is positioned as a “homemaker,” as she had stopped teaching
              for a time.
            </span>,
            <span key="9802732f">
              Westmoreland is positioned in “government service,” as he was
              still working as a mail carrier.
            </span>,
            <span key="590917b7">
              Simon and Rogers are positioned as “teachers.”
            </span>,
            <span key="d5f4d889">
              As in our own previous chart, we’ve added categories to represent
              those with unknown occupations,
            </span>,
            <span key="e00e084e">
              as well as those—at that point also including Lee—who were
              recorded as “Deceased.”
            </span>,
            <div
              key="239180fe"
              className="bg-changePrimary text-offwhite text-xl h-screen w-screen flex flex-col justify-center z-10 relative px-8 md:p-x48 lg:px-64"
            >
              <p className="mb-8 mt-0 tracking-wider leading-8">
                An additional 3,693 gray dots represent the graduates of the
                other 140 colleges included in the study, whose names and exact
                occupations we do not know.
                <InlineFootnote index={69} />(In addition to the 34 Black
                colleges, Du Bois also surveyed the Black graduates of 107
                predominantly white institutions.)
                <InlineFootnote index={70} />
              </p>
              <p className="tracking-wider leading-8">
                We used the counts of the occupations reported by the 800 survey
                respondents to calculate the approximate proportion of dots to
                place in each category, which we see as holding visual space for
                each graduate’s contributions to the study, even if we do not
                know their exact occupation or name.
              </p>
            </div>,
          ]}
        />

        <div id="viz-2" className="pb-16 md:pb-24">
          <Viz2 interactive={true}></Viz2>
        </div>

        <CenteredLayout>
          <p className="text-center font-power text-xl">***</p>
          <p>
            We do know something more about the students who returned the survey,
            however: we know a little about how they thought. The survey that Du
            Bois and the seniors in that year’s sociology course created and sent
            out across the United States—and that perhaps Mack in Athens, Simon
            in Memphis, Westmoreland in Atlanta, and Rogers in Petersburg,
            Virginia, helped to further distribute—did not just solicit
            information about the lives and accomplishments of graduates that
            could be aggregated as descriptive statistics; it also included four
            questions that encouraged long-form response.
          </p>
          <p>
            These included questions about the respondents’ reflections on their
            “early life and training,” their plans to educate their own children,
            the “chief hindrances” they had faced since graduation, and their
            “present practical philosophy in regard to the Negro race in
            America,” which was abbreviated in the published study as “philosophy
            of life.”
          </p>
          <p>
            To visualize this data, we were required to revise our chart yet
            again. Lauren and Tanvi used optical character recognition (OCR) to
            create a machine-readable dataset of the responses, and then
            hand-corrected any errors. Tanvi then designed the animation below.
            Jay then implemented the design, adapting a method developed by
            visualization designer Tommaso Elli, adding a second button to reveal
            the full response from which the short phase is drawn.
            <InlineFootnote index={71} />
          </p>
        </CenteredLayout>

        <div id="viz-3">
          <Viz3></Viz3>
        </div>

        <CenteredLayout>
          <p>
            The result is a visualization that at once draws directly from the
            original Paris Exposition charts and diverges sharply from them. We
            do not present all of the information it contains “at a glance,” to
            return to Du Bois’s original words. Instead, we’ve designed our
            interaction such that you must engage with the visualization at
            length, and with sustained attention, in order to derive insight from
            the data it contains. The data is also, quite intentionally, not
            quantitative. In a callback to the photographs presented alongside
            the charts in Paris, we chose to prioritize qualitative data instead.
            We see this decision as honoring Du Bois’s evolving view of the
            utility of visualization, as our design enables meaning-making from
            data of a variety of forms.
          </p>
          <p>
            We can also use this visualization to expand our own understanding of
            what visualization can do. Thinking back to chapter 1 and Thomas
            Clarkson’s “Description of a Slave Ship,” we can now see how his
            “immediate impression of horror” achieved some but not all of its
            goals. While it contributed to the halting of the actual traffic of
            human souls—a necessary step in the abolition of slavery—it did not
            halt the injustice that Du Bois and his students confronted a full
            century later and an ocean away.
            <InlineFootnote index={72} />The survey responses that they
            compiled, and are visualized here, testify to that fact. In
            visualizing these responses—and therefore, the unfinished struggle
            for racial justice that we now inherit—we are reminded of the task
            that, today, we all share. This task is to illuminate knowledge
            through all available methods, in the service of contributing to a
            more just and liberatory world.
          </p>
          <p>
            Just as Du Bois sought to show with his charts and photographs at the
            Paris Exposition, the visualizations presented in this project, taken
            together, seek to illustrate a deeper truth: that data visualization,
            while tremendously powerful and highly persuasive, still cannot stand
            on its own. Visualization must always be accompanied by additional
            methods of making knowledge, by an acknowledgment of the broader
            context of the work, and by a commitment to recognizing when we must
            look beyond our own expertise. This is how visualization leads to
            change: by serving not as sole arbiter of “the truth,” but as one
            vital method—among many—in bringing that truth to light.
          </p>
        </CenteredLayout>

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
      <CenteredLayout>
        <FootnotesList footnotes={powerFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
