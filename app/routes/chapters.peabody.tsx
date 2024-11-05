import { Fragment, useState } from "react";
import SlideShow from "~/components/layout/SlideShow";
import ChapterTitle from "~/components/ChapterTitle";
import { ChapterContext } from "~/chapterContext";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import PullQuote from "~/components/PullQuote";
import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";
import CenteredLayout from "~/components/layout/CenteredLayout";
import Footer from "~/components/Footer";
import PromotionalTourMap from "~/components/peabody/PromotionalTourMap.client";
import HoverText from "~/components/HoverText";
import HoverZoomPeabodySquare from "~/components/peabody/HoverZoomPeabodySquare";
import InlineFootnote from "~/components/InlineFootnote";
import { peabodyFootnotes } from "~/footnotes";
import PeabodySandbox from "~/components/peabody/PeabodySandbox";
import FootnotesList from "~/components/FootnotesList";
import Scrollytell from "~/components/peabody/PeabodyScrollytell";
import Quotation from "~/components/Quotation";
import Quiz from "~/components/peabody/quiz/Quiz";
import PeabodyBarGraph from "~/components/peabody/PeabodyBarGraph";
import LEDChart from "~/components/peabody/LEDChart";
import figures from "~/data/figures/peabody.json";
import Figure from "~/components/figures/Figure";
import { chapterMeta } from "~/utils";
import ChapterBody from "~/components/layout/ChapterBody";
import eventData from "~/data/peabody/eventData.json";
import PeabodyActors from "~/components/peabody/PeabodyActors";
import TutorialKey from "~/components/peabody/tutorial/TutorialKey";
import type { MetaFunction } from "@remix-run/node";
import type { HoverState, TVizAnchors } from "~/chapterContext";
import Takeaways from "~/components/layout/Takeaways";
import { ClientOnly } from "remix-utils/client-only";

export const meta: MetaFunction = () => {
  return chapterMeta("peabody");
};

const sections = [
  {
    title: "The Value of Multiple Perspectives",
    id: "the-value-of-multiple-perspectives",
  },
  {
    title: "The Epistemological Stakes of Interaction",
    id: "the-epistemological-stakes-of-interaction",
  },
  {
    title: "The Gendered Archive of Data Visualization",
    id: "the-gendered-archive-of-data-visualization",
  },
  {
    title: "The Visualization Work To Come",
    id: "the-visualization-work-to-come",
  },
];

const visualizations: TVizAnchors[] = [
  {
    type: "figures",
    id: "promo-tour",
    title: "Promotional Tour",
  },
  {
    type: "scrollytell",
    id: "tutorial",
    title: "Tutorial",
  },
  {
    type: "visualization",
    id: "timeline",
    title: "Timeline",
  },
  {
    type: "visualization",
    id: "quiz",
    title: "Quiz",
  },
  {
    type: "scrollytell",
    id: "scrolly-led-chart",
    title: "LED Chart,",
  },
  {
    type: "visualization",
    id: "sandbox",
    title: "Sandbox",
  },
];

const chapterFigures = Object.values(figures);

export default function PeabodyPage() {
  const [hoverState, setHoverState] = useState<HoverState>(undefined);
  const [showFootnotes, setShowFootnotes] = useState<boolean>(false);

  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "peabodyPrimary",
        accentColor: "peabodySecondary",
        footnoteTextColor: "playfairPrimary",
        primaryTextColor: "black",
        accentTextColor: "black",
        footnotes: peabodyFootnotes,
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
        title="The Work of Knowledge"
        subtitle="Elizabeth Palmer Peabody's Chronological Grids"
      />
      <ChapterBody>
        <CenteredLayout>
          <Quotation
            quote={
              <>
                We have explored only a small part of the history of data
                visualization. What possibilities can we imagine when we expand
                our view of the past?
              </>
            }
          />
        </CenteredLayout>
        <TwoColumnLayout>
          <Column shouldPin={true}>
            <p className="first-paragraph">
              Elizabeth Palmer Peabody was born in 1804, within only a year or
              two of Shanawdithit. But her life circumstances—the stability of
              food and family, her membership in the Boston intellectual elite,
              and the gift of good health—enabled her to live for nearly a
              century. By the time that she died, in 1894, she left her mark on
              any number of fields. But in the early 1850s, at the prime of her
              life, Peabody set out from her home in Boston to ride the rails.
              She traveled as far north as{" "}
              <HoverText hoverState="Rochester">Rochester, NY</HoverText>; as
              far west as{" "}
              <HoverText hoverState="Louisville">Louisville, KY</HoverText>; and
              as far south as{" "}
              <HoverText hoverState="Richmond">Richmond, VA</HoverText>, in
              order to promote the pair of history textbooks she had recently
              written, <cite>The Polish-American System of Chronology</cite>{" "}
              (1850) and{" "}
              <cite>A Chronological History of the United States</cite> (1856).
              In the textbooks, Peabody described a new method of visual
              learning—the Polish-American system, she came to call it—a method
              with data visualization at its core.
            </p>
            <p>
              Today, Peabody is still most widely recognized for her proximity
              to more famous men—in particular, to the writers of the American
              Renaissance, such as Ralph Waldo Emerson and Nathaniel Hawthorne,
              and to early champions of educational reform, such as Bronson
              Alcott and Horace Mann. <InlineFootnote index={0} /> She is
              certainly not accorded a prominent place in any major history of
              data visualization. But her contributions to each of these areas,
              including visualization, were substantial. The bookstore that she
              ran out of her home, at Boston's 13 West Street, functioned as the
              de facto salon for the transcendentalist movement. She edited and
              published the first version of Henry David Thoreau's essay on
              civil disobedience. She can be credited with starting the first
              kindergarten in the United States. And, as this chapter will
              assert, she offered a transformative view of the uses and value of
              data visualization, one which challenges the teleological account
              of the field's emergence, as well as the epistemological
              assumptions that—as a result of this account—have become embedded
              in the field. <InlineFootnote index={1} />
            </p>
          </Column>
          <Column shouldPin>
            <ClientOnly>{() => <PromotionalTourMap />}</ClientOnly>
          </Column>
        </TwoColumnLayout>

        <SlideShow
          className="block md:hidden bg-peabodyPrimary w-full py-10"
          figures={[
            figures["railroadscaled"],
            figures["rochester"],
            figures["louisville"],
            figures["richmond"],
          ]}
        />

        <CenteredLayout>
          <PullQuote
            title="Peabody designed her charts to be abstract rather than intuitive;"
            subtitle="to promote sustained reflection rather than immediate insight. "
          />
        </CenteredLayout>

        <TwoColumnLayout>
          <Column shouldPin>
            <p>
              An additional anecdote helps to elaborate this point. When Peabody
              boarded the train at Kneeland Street Station, on the southern edge
              of downtown, along with boxes of the textbooks that she hoped to
              sell, she also traveled with a rag-paper roll between five and six
              feet long. The roll was comprised of a stack of large-scale
              replicas of the data visualizations, pictured above, that appeared
              in the books. Peabody identified the charts, with their vibrant
              geometric abstraction, as key components of her visual
              epistemology. As she later recalled, the charts were “intended to
              do for the science of history what maps do for that of geography;
              and… [make it] easy to lay the foundations of historical knowledge
              in the minds of the young.” <InlineFootnote index={2} /> Like
              Thomas Clarkson, William Playfair, and other early proponents of
              data visualization, Peabody recognized the power of visual
              perception to crystalize the insight that leads to new knowledge.
              But she wielded that power in a very different way. Peabody
              designed her charts to be abstract rather than intuitive; to
              promote sustained reflection rather than immediate insight. And
              she did so with a clear goal in mind: to provoke a unique
              imaginative response in each viewer.
            </p>
            <p>
              In this way, Peabody and her charts offer an epistemological
              alternative to the dominant view of how visualization leads to new
              knowledge—the one advanced explicitly by Clarkson and Playfair,
              and implicitly by Cormack in his request that Shanawdithit produce
              her charts. As this chapter will show, Peabody's is a feminist
              epistemology <em>avant le lettre</em>. This is not because Peabody
              herself was a woman—although this chapter will also discuss some
              of the reasons for the gender skew of the history of the field.
              Rather, by repositioning the source of the insights that lead to
              new knowledge from the visualization itself to its interplay with
              the viewer, she flattens the hierarchy that more commonly
              structures the relationship between the designer of a
              visualization and those who perceive it. This is a feminist
              theoretical move, as we have already begun to explore through the
              lens of the “god trick” in Chapter One.
            </p>
            <p>
              But in addition, Peabody's strategic use of abstraction, and—as we
              have already begun to learn through the example of her “mural
              charts,” as she called her large-scale visualizations—her
              involvement of the whole body, Peabody's charts challenge
              additional hierarchies that remain entrenched in visualization
              design, particularly those that place purportedly “objective”
              representational strategies above those that encourage more
              affective and embodied ways of knowing. This is also a feminist
              move; in their rejection of the belief that every phenomenon in
              the world can be easily captured and rendered visible by data,
              Peabody's charts attune us to the multiple ways by which
              visualization can lead to new knowledge, as well as to the
              multiple ways in which we might understand the nature of knowledge
              itself.
            </p>
            <p>
              These are not small contributions. And yet, there is more we might
              learn from Peabody and her charts. If there is an overarching
              lesson of this chapter, it is that they are but one set of
              examples of the many missing figures—and many missing forms—that
              we might incorporate into the story we tell about the emergence of
              modern data visualization. Here we might also recall the idea of
              starting with the shuffle, from this project's Introduction, and
              remind ourselves that we can—and should—always shuffle again. For
              the impact of this action is profound: it contributes not only to
              an ever-expanding set of examples that enrich our sense of the
              history of data visualization, but also an expanded set of
              possibilities for shaping its future.
            </p>
          </Column>
          <Column shouldPin>
            <Figure
              className="md:ml-24 md:grid grid-cols-2 gap-4"
              figures={[
                figures["fig1-1500s-rect"],
                figures["fig2-1600s-rect"],
                figures["fig3-1700s-rect"],
                figures["fig4-1800s-rect"],
              ]}
            />
          </Column>
        </TwoColumnLayout>

        <ChapterSectionTitle section={sections[0]} />
        <CenteredLayout>
          <p className="first-paragraph">
            Peabody's method of visualizing events of historical significance
            was inspired by a system developed in Poland in the 1820s, and
            popularized in subsequent decades by the military general (and
            erstwhile math teacher) Jósef Bem.
            <InlineFootnote index={3}></InlineFootnote>
            Bem's system employed a grid overlaid with shapes and colors to
            visually represent events in time. In{" "}
            <cite>Cartographies of Time: A History of the Timeline</cite>,
            Daniel Rosenberg and Anthony Grafton describe how the system "swept
            across Europe and North America" in the middle decades of the
            nineteenth century.
            <InlineFootnote index={4}></InlineFootnote>
            But Peabody first encountered the system by chance: through a
            traveling lecturer who briefly boarded with her family on West
            Street. The boarder, a man named Joseph Podbielski, had come from
            Poland with copies of Bem's charts, which he intended to promote on
            a lecture tour of the United States. While he soon departed the
            family's residence, Peabody remained "captivated" by the charts,
            according to one of her biographers, Bruce Ronda.
            <InlineFootnote index={5}></InlineFootnote>
            She went on to devote several years to a study of the Polish System,
            culminating with the development of her own modified version: the
            <cite> Polish-American System </cite>
            that prompted her own national tour.
          </p>
          <p>
            In <cite>The Polish-American System of Chronology</cite> , Peabody
            covers a tremendous expanse of time: the period between 2500 BCE and
            the present (1849 CE). But Peabody also saw the need for a textbook
            that focused exclusively on the United States, and that went into
            more detail than she could cover in a textbook on world history. And
            so, shortly after the release of the{" "}
            <cite>Polish-American System</cite>, she began working on the book
            that would be published, in 1856, as{" "}
            <cite>A Chronological History of the United States</cite>. This
            textbook contained the four full-color plates displayed above; one
            for each of the centuries since the first European colonizers set
            foot on Native American land. As Peabody envisioned it, the basic
            exercise was to read a chapter of the textbook, which contained a
            narrative account of the events of a single century, and then match
            each item in the list of events that concluded the chapter with its
            visual representation on the corresponding chart.
          </p>
        </CenteredLayout>

        <Scrollytell
          triggers={[
            <p key={"2c8354f7"}></p>,

            <Fragment key={"6f989444"}>
              <p className="bg-[#9ae4c1cc] px-4 md:p-0">
                Peabody’s system borrows from Bem the idea of a numbered grid,
                with each year in a century marked out in its own square.
              </p>
            </Fragment>,

            <Fragment key={"33dfea32"}>
              <p className="bg-[#9ae4c1cc] px-4 md:p-0">
                She also borrows the idea of subdividing each square, so that
                each of the nine interior squares corresponds to a particular
                type of historical event.
              </p>
            </Fragment>,

            <Fragment key={"e4503b65"}>
              <p className="bg-[#9ae4c1cc] px-4 md:p-0 mb-0 pb-2 md:pb-0">
                In the Polish-American system, as in Bem’s, the top left corner
                is the space for wars, battles, and sieges; in the top middle is
                the space for conquests and unions; in the top right is the
                space for losses and divisions, and so on.
              </p>
              <TutorialKey />
              <p className="h-64 md:h-auto"></p>
            </Fragment>,

            <Fragment key={"52553732"}>
              <p className="bg-[#9ae4c1cc] px-4 md:p-0 mb-0">
                The events are also color-coded, indicating the various
                countries involved in a particular event. On this point, Peabody
                makes special note that she employs "a somewhat different, and,
                as it seems to me, a more expressive distribution of colors."
                <InlineFootnote index={6} />
              </p>
              <div className="flex flex-wrap text-sm gap-2 bg-[#9ae4c1cc] w-full md:w-auto px-4 pt-4 md:p-0 mt-6 md:mt-4">
                <PeabodyActors century={1600} />
              </div>
            </Fragment>,

            <Fragment key={"8ffd6ede"}>
              <p className="bg-[#9ae4c1cc] px-4 pb-4 md:p-0 mb-0">
                When an entire year is shaded a single color, it indicates an
                event of such magnitude or complexity that the other events in
                that year literally pale in comparison.
              </p>
              <p className="bg-[#9ae4c1cc] px-4 md:px-0 md:py-2 my-0">
                For example, the square for 1607 is entirely red, marking the
                settlement of Jamestown, the first permanent British colony in
                the Americas.
              </p>
              <div className="flex flex-wrap text-sm mt-6 gap-2 bg-[#9ae4c1cc] w-full md:w-auto px-4 pt-4 md:p-0">
                <PeabodyActors actor="England" />
              </div>
            </Fragment>,

            <Fragment key={"0d3e2774"}>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mb-0 pb-2 md:pb-4">
                In 1620, we see two events. More significant, for Peabody, is
                the settlement of Plymouth by the Pilgrims.
              </p>
              <p className="bg-[#9ae4c1cc] ml-4 md:ml-0 my-0 pl-4 mb-2 text-sm uppercase border-l-2 border-peabodyOrange">
                2. {eventData.eventTypes[1]}
              </p>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mt-0 md:mt-4 pt-4 text-sm">
                <PeabodyActors actor="England" />{" "}
                <PeabodyActors
                  actor="Holland"
                  className="opacity-75 text-black"
                />
              </p>
            </Fragment>,

            <Fragment key={"9b41ae5d"}>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mb-0 pb-2 md:pb-4">
                But she also marks the first enslaved Africans being brought to
                Jamestown, shaded in teal to indicate that they arrived aboard a
                Dutch ship. On the side of abolition but by no means its most
                radical proponent, the square's outsized ratio of red to teal
                reflects Peabody's awareness of—if not an urgency about—the need
                to end slavery in the United States.
              </p>
              <p className="bg-[#9ae4c1cc] ml-4 md:ml-0 my-0 pl-4 mb-2 text-sm uppercase border-l-2 border-peabodyOrange">
                6. {eventData.eventTypes[5]}
              </p>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mt-0 md:mt-4 pt-4 text-sm">
                <PeabodyActors
                  actor="England"
                  className="opacity-75 text-black"
                />{" "}
                <PeabodyActors actor="Holland" />
              </p>
            </Fragment>,

            <Fragment key={"25c869c2"}>
              <p className="bg-[#9ae4c1cc] px-4 md:px-0 md:py-2 my-0">
                Elsewhere on the chart, Peabody uses diagonals to show events
                that involve two or more nations.
              </p>
              <div className="flex flex-wrap text-sm mt-6 gap-2 bg-[#9ae4c1cc] w-full md:w-auto px-4 pt-4 md:p-0">
                <PeabodyActors actor="England" />{" "}
                <PeabodyActors actor="Americas" />{" "}
                <PeabodyActors actor="Holland" />
              </div>
            </Fragment>,

            <Fragment key={"fd6e81bb"}>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mb-0 pb-2 md:pb-4">
                In 1622, we see a representation of the series of deadly
                conflicts between the Powhatan people and the Jamestown
                settlers. First, in the position that indicates battles, sieges,
                and beginnings of war, we see the attack by the Powhatan on the
                Jamestown colony that John Smith documented in his history of
                Virginia. Peabody labels this the “Jamestown Massacre.” In the
                top left of the square is gold, the color for the Americas, here
                representing the Powhatan and their position as initiators of
                this particular battle. In the bottom right is red, representing
                the British settlers, in their position as besieged.
                {/* <!-- divide this one into two at the sentence break? --> */}
              </p>
              <p className="bg-[#9ae4c1cc] ml-4 md:ml-0 my-0 pl-4 mb-2 text-sm uppercase border-l-2 border-peabodyOrange">
                1. {eventData.eventTypes[0]}
              </p>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mt-0 md:mt-4 pt-4 text-sm">
                <PeabodyActors actor="England" />{" "}
                <PeabodyActors actor="Americas" />
              </p>
            </Fragment>,

            <Fragment key={"01f4d21b"}>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mb-0 pb-2 md:pb-4">
                In the next square over—the position that indicates conquests,
                annexations, and unions—the colors are reversed, indicating
                retaliation by the British on the Powhatan. In the textbook,
                this is labeled “Assault on Powhatan Settlements.”
              </p>
              <p className="bg-[#9ae4c1cc] ml-4 md:ml-0 my-0 pl-4 mb-2 text-sm uppercase border-l-2 border-peabodyOrange">
                2. {eventData.eventTypes[1]}
              </p>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mt-0 md:mt-4 pt-4 text-sm">
                <PeabodyActors actor="England" />{" "}
                <PeabodyActors actor="Americas" />
              </p>
            </Fragment>,

            <Fragment key={"0291a8ab"}>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mb-0 pb-2 md:pb-4">
                Peabody shades the final square in the row, for losses and
                disasters, entirely gold. The accompanying text reads “Indians
                are conquered.”
              </p>
              <p className="bg-[#9ae4c1cc] ml-4 md:ml-0 my-0 pl-4 mb-2 text-sm uppercase border-l-2 border-peabodyOrange">
                3. {eventData.eventTypes[2]}
              </p>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mt-0 md:mt-4 pt-4 text-sm">
                <PeabodyActors actor="Americas" />
              </p>
            </Fragment>,

            <Fragment key={"615d61e0"}>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mb-0 pb-2 md:pb-4">
                In the same year, we see a teal square in the bottom left, the
                position representing “deaths of remarkable individuals.”
                Peabody tells us this represents the death of Pocahontas, the
                daughter of Chief Powhatan himself. It is unclear as to why this
                square is shaded in the color representing Holland, as Peabody
                indicates in the text that she died in England. Another
                inconsistency is the year of death, which scholars now date five
                years earlier, to 1617.
              </p>
              <p className="bg-[#9ae4c1cc] ml-4 md:ml-0 my-0 pl-4 mb-2 text-sm uppercase border-l-2 border-peabodyOrange">
                9. {eventData.eventTypes[8]}
              </p>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mt-0 md:mt-4 pt-4 text-sm">
                <PeabodyActors actor="Holland" />
              </p>
            </Fragment>,

            <p key={"6f6c2b69"} className="h-[50vh] md:h-auto"></p>,
          ]}
        />

        {/* <!-- add in this text with the final grid: Returning to the overall view of the century, that teal square at once represents the power of commemoration and the insufficiency of a colored box standing for a human life, however overlayed with meaning as it may be.  --> */}

        <TwoColumnLayout>
          <Column>
            <p>
              Chronology—or, the study of events in time—is not, of course, the
              same as historiography—the study of how history is written. But in
              Peabody's mind, the one led to the other: "If you have the dates
              here [on the charts] represented perfectly by heart," as she
              explains in the introduction to students included in the{" "}
              <cite>Chronological History</cite>, "events are so connected in
              the narrative of history."
              <InlineFootnote index={7}></InlineFootnote>
              In keeping with the leading pedagogical theories of the day, which
              emphasized mental recall, students were expected to commit the
              charts to memory.
              <InlineFootnote index={8}></InlineFootnote>
              But Peabody's approach diverged from the rote memorization that
              characterized most mid-nineteenth-century classrooms in that her
              ultimate aim was for each student's mental picture of past events
              to prompt a richer—and, crucially, and
              individually-constructedn—narrative of history. For Peabody, the
              power of this personal narrative of history was immense: it could
              show "the origin and consequences of national action"; and for the
              US in particular—the world's first representative democracy—it
              could instruct "every one what to do and what to leave undone, in
              his own inevitable action," as a necessary participant in their
              own governance.
              <InlineFootnote index={9}></InlineFootnote>
            </p>
            <p>
              Far from an antiquated line of thinking, Peabody's belief in the
              catalyzing effects of chronology remains deeply embedded in US
              culture today. As a prominent example, one might consider the
              efforts of <cite>New York Times</cite> journalist Nikole
              Hannah-Jones to replace 1776 with 1619—<i>contra</i>&nbsp;
              Peabody, the year the first enslaved Africans actually arrived in
              Virginia—as the starting point for the history of the United
              States. The goal of this revised origin point, as Hannah-Jones
              explains in the visual feature that introduces the 1619 Project,
              is to "reframe the country's history by placing the consequences
              of slavery and the contributions of black Americans at the very
              center of our national narrative."
              <InlineFootnote index={10}></InlineFootnote>
              This recentered narrative would ideally, in turn—in a view
              endorsed by the <cite>Times</cite> editorial board—prepare US
              citizens of all races "for a more just future."
              <InlineFootnote index={11}></InlineFootnote>
            </p>
            <p>
              But it is not only the narrative of the nation's founding that can
              benefit from a recentering of the enduring costs of its legacy of
              slavery, or of the contributions made by its Black citizens. In
              her acclaimed recent book,{" "}
              <cite>Dear Science and Other Stories</cite>, Black studies scholar
              Katherine McKittrick takes on the project not of history but of
              science, explaining how an account that centers Black people,
              Black life, and Blackness more broadly can reveal the
              "asymmetrically connected knowledge systems" that structure modern
              scientific inquiry.
              <InlineFootnote index={12}></InlineFootnote>
              For McKittrick, an awareness of the range of related yet unequally
              weighted knowledge-making systems is what enables her own vision
              of a liberatory Black science to unfold. But the truth is that all
              of our ways of knowing are shaped by asymmetrical power, and data
              visualization is no exception. We have already seen a related
              argument in Chapter One, which engaged feminist philosopher Donna
              Haraway's ideas about the “god trick.”{" "}
              <InlineFootnote index={13}></InlineFootnote> Crucially for
              Haraway, as for McKittrick, our awareness of how knowledge is{" "}
              <em>situated</em>, as Haraway would say (or how knowledge is{" "}
              <em>relational</em>, as perhaps would McKittrick), does not
              diminish the validity of what we presently know, nor does it
              foreclose any future knowledge-making.{" "}
              <InlineFootnote index={14}></InlineFootnote> On the contrary,
              these more nuanced understandings of the perspectives and places
              from which knowledge is made are precisely those on which, to
              quote Haraway, “the possibility of sustained, rational, objective
              inquiry rests.” <InlineFootnote index={15}></InlineFootnote>
            </p>
          </Column>
          <Column className="md:ml-12" shouldPin={true}>
            <HoverZoomPeabodySquare figure={figures["fig2-1600s-rect"]} />
          </Column>
        </TwoColumnLayout>

        <CenteredLayout>
          <PullQuote
            title="Our ways of knowing are all shaped by asymmetrical power-"
            subtitle="and data visualization is no exception."
          />
          <p>
            With a renewed sense of the value of multiple perspectives in
            contributing to what we know, we might return to Peabody's
            chronological charts with the observation that few
            twenty-first-century viewers—or, for that matter, nineteenth-century
            ones—could have intuited the significance of the events encoded in
            the charts without first taking the time to learn how the system
            worked.
            <InlineFootnote index={16}></InlineFootnote>
            This lengthy and difficult learning process might be viewed as a
            liability by those who continue to champion the ease and efficiency
            of visualization; or those who maintain that data visualization is
            best deployed to amplify already existing thought processes. In
            support of this perspective, consider the representation of the
            events encoded in Peabody's chart of the seventeenth century as a
            timeline, shown just below. The progression of events over the
            course of the century, culminating in a series of wars and
            rebellions in the late 1680s and early 1690s, becomes much more
            immediately legible as compared to the top-to-bottom, left-to-right
            layout of the grid.
          </p>
          <p>
            But for Peabody, her charts' near-total abstraction was precisely
            the point. She designed her charts to appeal to the senses directly,
            to provide what she called "outlines to the eye."
            <InlineFootnote index={17}></InlineFootnote>
            Her hope was that, by providing the outline of history—and,
            crucially, only the outline—each viewer could fill in the missing
            parts of the story themselves.
            <InlineFootnote index={18}></InlineFootnote>
            The result would be a proliferation of historical narratives, one
            originating in the mind of each viewer, and reflecting their own
            interpretation of the chart. Anticipating claims about both the
            situated and relational nature of knowledge production, Peabody's
            visualization system relocates the source of the insight that leads
            to new knowledge from the image to the viewer. What's more, it
            affirms each interpretation of each image as an additional source
            through which our collective knowledge can continue to grow.
          </p>
        </CenteredLayout>

        <PeabodyBarGraph />

        <ChapterSectionTitle section={sections[1]} />
        <TwoColumnLayout>
          <Column>
            <p className="first-paragraph">
              Peabody was a lifelong proponent of what might be described today
              as participatory learning. In the early 1860s, as the nation
              became increasingly consumed by the Civil War, Peabody found
              personal comfort in a recommitment to early childhood education.
              Her kindergarten—as mentioned, the first of its kind in the United
              States—which she opened with her sister, Mary Tyler Mann, served
              as a proving ground for her innovative pedagogical ideas. With her
              sister, she also published a series of essays documenting the
              theories they enacted in the classroom.
              <InlineFootnote index={19}></InlineFootnote> And on her own,
              Peabody continued to iterate on the teaching and learning
              materials associated with the Polish-American system.
            </p>
            <p>
              In 1870, Peabody began printing workbooks with sheets of blank
              charts—"blank centuries,” as she called them—so that students
              could themselves create the visualizations that they would then
              study. In the interaction below, we've adapted this participatory
              process for the screen. But be forewarned, the exercise of
              creating a chronological chart from scratch is quite hard, as each
              of us on the project team can personally confirm. On the bottom
              left of the screen, you can also click “end” to skip ahead.
            </p>
          </Column>
          <Column>
            <Figure figure={figures["ch4-blank-chart"]} />
          </Column>
        </TwoColumnLayout>

        <Quiz />

        <TwoColumnLayout>
          <Column>
            <p>
              If you, like all of us, found this exercise virtually impossible,
              rest assured that the difficulty level was high for students of
              the nineteenth century as well. Peabody's nephew, Julian
              Hawthorne, who served as her first test subject, recalled that she
              “labored during some years to teach me all the leading dates of
              human history,” but that he nevertheless remained “most inapt and
              grievous” throughout the process.
              <InlineFootnote index={20}></InlineFootnote>
              The evidence in the archive confirms this first-hand account. At
              the American Antiquarian Society, the Library Company of
              Philadelphia, Yale's Beinecke Library, and Princeton's Special
              Collections can be found multiple copies of Peabody's workbooks,
              many of which I've personally paged through over the course of
              conducting research for this project. The workbooks all tend to
              follow a similar pattern: a page or two of grids filled out in
              earnest; then a series of attempts abandoned halfway; and then a
              shift in purpose, the grid becoming a canvas for pattern and
              unbridled play.
            </p>
            <p>
              Again, the difficulty of the Polish-American system is both a
              liability of the form and also the point. Peabody first developed
              her method at a time when the nation's future seemed to hang in
              balance. The second half of the 1840s had brought an increased
              awareness of the nation's growing sectarianism, as well as its
              range of social ills--albeit with a (mostly) optimistic view about
              the potential of its governing structures to address these
              challenges. But as the 1850s unfolded, the magnitude of these
              challenges became increasingly more pronounced. Even as her
              privilege protected her from having to enter the political fray,
              Peabody recognized that the task of resolving the underlying issue
              of sectarianism, not to mention the moral obligation of ending
              slavery, posed a degree of difficulty of the highest order.
              Peabody understood, moreover, that any successful resolution of
              these conflicts would require a consideration of a range of
              possible paths forward, as well as sustained effort and deep
              thought.
            </p>
            <PullQuote
              title="By prompting her students to create new narratives of the past, "
              subtitle="they would also imagine alternative possible futures."
            />
            <p>
              Peabody’s goal with the Polish-American system was to create a
              framework, equal parts pedagogical and epistemological, through
              which this difficult thinking could take place. “The old world is
              covered with bad institutions which men have created, very often
              with positively good intentions, but on false notions, or, at
              least, without large and profound ideas,” she explains in the
              preface to the <cite>Chronological History</cite>. “Whether the
              new world shall estimate and sift out these evils, or repeat these
              mistakes, depends on young Americans, who are now sitting in
              schoolrooms all over the country, unconscious of their powers and
              consequent responsibilities.”
              <InlineFootnote index={22}></InlineFootnote>
              Her hope was that the act of creating the chronological charts,
              rather than simply studying them, would prompt both
              self-reflection and new ideas. Put another way: Peabody hoped that
              by prompting her students to create new narratives of the past,
              they would also imagine alternative possible futures.
            </p>
            <p>
              The historical and political context that provided Peabody with
              the motivation to publish her textbooks is crucial for
              understanding both her ideas about the uses of visualization, and
              the form that her visualizations take. We have already seen
              several other examples of this. In Chapter Two, we learned how
              Playfair's time-series charts were born of a desire to communicate
              a big picture view to “men of high rank” who did not have time to
              concern themselves with the details. In Chapter Three, we
              considered how Emma Willard's choice to put a map of the United
              States in the background of her visualization of the sizes and
              location of Indigenous peoples accorded it the status of
              established fact, rather than its still-contested reality. So as
              to continue to draw out the convergence of Peabody's epistemology
              with her pedagogy and her political ideology, we will now turn to
              one of Willard's later charts which helpfully puts its own
              ideology on the surface.
            </p>
            <p>
              Willard's
              <cite>Temple of Time</cite>, which she designed in 1846 after
              nearly two decades of continual experimentation with ways of
              visualizing history, depicts past centuries as the pillars that
              support the titular temple. In the chart, the nineteenth century
              is represented as an unfinished column, not yet stable enough to
              support the weight of the past. On the ceiling of the temple,
              Willard catalogues key figures from each prior century, including
              statesmen, philosophers, discoverers, and poets. On the floor of
              the temple, she lays out the developments of major nation-states,
              their paths drawn as rivers subjected—like water levels—to the
              expansions and contractions of state power over time. Consistent
              with the narrative enacted by her maps, Willard places the path of
              the United States front and center. From the perspective of the
              viewer, this river flows directly towards them, enfolding them in
              the expanding influence of the United States: the future to come.
              <InlineFootnote index={23}></InlineFootnote>
            </p>
          </Column>
          <Column shouldPin={true}>
            <Figure
              className="grid grid-cols-2 md:grid-cols-4 gap-2 md:ml-12"
              figures={[
                figures["ch4-5"],
                figures["ch4-6"],
                figures["ch4-7"],
                figures["ch4-8"],
                figures["ch4-9"],
                figures["ch4-10"],
                figures["ch4-11"],
                figures["ch4-12"],
              ]}
              groupCaption={
                <p>
                  <cite>The Polish-American System</cite>
                  housed at the American Antiquarian Society. Courtesy of the
                  American Antiquarian Society. Photos by Lauren Klein.
                </p>
              }
            />
          </Column>
        </TwoColumnLayout>
        <CenteredLayout>
          <Figure figure={figures["ch4-13-willard"]} />
          <p>
            While sharply divergent from Peabody's charts in terms of visual
            form, Peabody nevertheless identified Willard as a major source of
            inspiration, crediting Willard with creating "the most ingenious
            chart ever besides [her own] invented."
            <InlineFootnote index={24}></InlineFootnote>
            As for Willard, her stated influences included Joseph Priestley's{" "}
            <cite>New Chart of History</cite>, from 1796, among the most
            circulated charts of its time; and Playfair's
            <cite>Commercial and Political Atlas</cite>, which we have already
            discussed in depth. According to historian Susan Schulten, Willard
            appreciated the efficiency of Playfair's charts, but felt that they
            gave "little sense of the
            <em>dimension,</em> such as the relative importance of periods or
            the subjective experience of time."
            <InlineFootnote index={25}></InlineFootnote>
            From our vantage in the present, it is still safe to say that
            Playfair's import-export charts do not provide a sense of the
            subjective experience of time. But they remain just as interpretable
            today as they were at the time of their making—one of Playfair's
            primary aims, as you might recall.
          </p>
          <p>
            By contrast, the more abstract impression first conveyed by
            Peabody's chronological grids requires additional interpretation.
            Her configuration of her data not according to the cartesian grid (
            <em>pace</em> Playfair) but instead as a visual text, designed to be
            read from left to right, top to bottom, underscores her interpretive
            intent. (What might seem to be x-y axes that divide each image into
            quadrants are instead, as Peabody explains, only intended to serve
            as visual anchor points in an otherwise unstructured field.) This,
            too, was intentional. Peabody designed her charts to serve as the
            basis for future knowledge, rather than that knowledge's definitive
            source.
          </p>
          <p>
            With the addition of the workbooks, which enabled the students to
            create their own charts, Peabody underscores her belief in a more
            participatory form of knowledge production as well. Her requirement
            that we participate challenges the typical hierarchy of
            knowledge-making, in which the designer of a visualization is
            inherently above those who view (or interact) with it. According to
            Peabody's pedagogical process, it is the student who is authorized
            to both create and interpret the image, rather than the original
            designer—in this case, Peabody herself. If there is a single message
            that is communicated by Peabody's charts, it is that their meaning
            is not fixed. Rather, they impress upon the viewer a sense of
            responsibility—first for developing informed interpretations of the
            colors, shapes, and positions that they perceive, and then for
            designing their own course of future action.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[2]} />
        <CenteredLayout>
          {/* <Column> */}
            <p className="first-paragraph">
              An additional aspect of Peabody's participatory pedagogy were the
              “mural charts,” or “painted centuries” as she also sometimes
              described them, that she created in order to center classroom
              discussion. <InlineFootnote index={26}></InlineFootnote> These
              were the charts she traveled with on her national promotional
              tour, as mentioned at the outset of this chapter, and by all
              accounts they were dazzling: triangles and squares of crimson,
              ochre, and forest green, set against a sharp black grid. In her
              version of a sales pitch, Peabody would “lay [a] chart down on the
              floor” and invite her would-be textbook adopters to sit around it
              and contemplate the colors and patterns they perceived.
              <InlineFootnote index={27}></InlineFootnote>
            </p>
            <p>
              The pedagogical impact of this embodied interaction was, as best
              we can gather, nothing short of transformative. “I have never
              known a system which placed the events of the history of all
              nations before the mind with such clearness, so little confusion,
              and so much permanency,” wrote Eliphalet Nott, then president of
              Union College, who participated in one of Peabody's teaching
              demonstrations.
              <InlineFootnote index={28}></InlineFootnote>
              Anticipating a decidedly twenty-first-century view of the value of
              data visceralization, Peabody staged an encounter with the data
              that involved the whole body. This was an interaction that, she
              hoped, would in turn stimulate the imagination to new heights.
              Indeed, if visualization is to continue to offer “richer
              understandings [of data] that enable researchers to ask bolder
              questions,” as esteemed visualization researcher Ben Shneiderman
              asserts, then the mural chart seems to represent an early
              apotheosis.
              <InlineFootnote index={29}></InlineFootnote>
            </p>
            <p>
              And yet, because the mural charts were not valued as objects of
              knowledge in their own time, not a single one has been preserved.
              <InlineFootnote index={30}></InlineFootnote>
              Scholars even remain uncertain as to many of their basic features.
              Peabody's biographer, Bruce Ronda, speculates that they “must have
              been much larger than even folio size.”
              <InlineFootnote index={31}></InlineFootnote>
              And while he does not provide any more specificity, Peabody's
              nephew Julian's recollection of the “huge, colored charts” which
              “hung on the walls of our sitting room” offers a first-hand
              account of the impression they made.
              <InlineFootnote index={32}></InlineFootnote>
              As an additional datapoint, one might consider the “poster-sized
              timelines” created by Peabody's contemporary, Anne Laura Clarke,
              who created her timelines with the help of her sister, also named
              Elizabeth, to accompany a series of lectures on history which she
              delivered across the country. (Clarke's charts were not acquired
              by an archive but instead kept in her sister's attic, where they
              remain today. )<InlineFootnote index={33}></InlineFootnote>
            </p>
          {/* </Column> */}
          {/* <Column className="md:ml-12" shouldPin={true}>
            <Figure
              className="grid grid-cols-2 gap-4 md:ml-12"
              figures={[figures["ch4-clarke1"], figures["ch4-clarke2"]]}
              groupCaption={
                <>
                  <p>
                    <strong>Left:</strong> One of the timelines created by Anne
                    Laura Clarke, as explored by Granville Ganter in his essay
                    on Clarke's traveling lectures.
                  </p>
                  <p>
                    <strong>Right:</strong> Another timeline as it was first
                    encountered by Ganter. Photos by Granville Ganter. Courtesy
                    of Granville Ganter.
                  </p>
                </>
              }
            />
          </Column> */}
        </CenteredLayout>
        <TwoColumnLayout>
          <Column shouldPin={true}>
            <p>
              The absence of Peabody's mural charts from the archive prompted me
              to reimagine Peabody's embodied pedagogy for the present.
              <InlineFootnote index={34}></InlineFootnote>
              Working with my research group, in a team that involved multiple
              cohorts of students over multiple years, we first created a
              three-foot by three-foot touch matrix made of strips of copper
              tape.
              <InlineFootnote index={35}></InlineFootnote>
              The matrix works like a computer keyboard, with columns and rows
              of conductive material--in this case, the copper tape--separated
              by foam spacer. When a person presses on a square of the grid, the
              two layers of copper tape touch each other, creating a connection.
              Above the touch matrix sits a cloth topper, also fabricated by
              members of the lab, that approximates the visual features of
              Peabody’s original charts.
              <InlineFootnote index={36}></InlineFootnote>
              The topper holds in place a series of strips of individually
              addressable LEDs, resulting in a 30 x 30 grid that can be
              programmed to display her “painted centuries.” While Peabody used
              a stick to point to specific events on the grid, our “Floor
              Chart,” as we named our project, responds to touch; users can
              press on individual squares in order to cycle through the possible
              colors of each chart, allowing them to engage multiple senses in
              the creation of chronological charts of their own.
            </p>
            <p>
              The Floor Chart project required expertise in a range of domains,
              from electronics prototyping to signal processing to circuit board
              design. It also required a truly tremendous amount of physical
              labor. Each yard-long strip of copper tape needed to be perfectly
              aligned, lest a small misalignment at one end result in a
              significant gap at the other. Each of the nine-hundred
              square-shaped holes of the membrane layer of the touch matrix was
              required to be cut out by hand, as laser-cutting the holes would
              have released harmful toxins. Each electrical connection was
              required to be soldered, tested, and then—in almost all
              cases—soldered again, to ensure that the circuit remained intact.
              As much as an exercise in physical fabrication, the project became
              an exercise in the physicality of work itself—of the focus that is
              required, and the resultant fatigue, of any large-scale project
              that is made by human hands.
            </p>
            <PullQuote
              title="Who else are we missing"
              subtitle="when we fail to include examples like these in the stories we tell about the emergence of data visualization?"
            />
          </Column>
          <Column>
            <Figure
              figures={[
                figures["ch4-15-fc-touch"],
                figures["ch4-16-fc-led-boards"],
                figures["ch4-18-rendering"],
              ]}
              className="md:ml-12"
              groupCaption={
                <p>
                  The layers of the touch interface, built with copper tape and
                  a foam spacer; the assembled touch interface; a view of the
                  modular circuit boards for communicating with the LEDs; a
                  rendering of the completed Floor Chart; the LEDs displayed on
                  top of the quilted chart. Photos by Lauren Klein.
                </p>
              }
            />
          </Column>
        </TwoColumnLayout>

        <TwoColumnLayout>
          <Column shouldPin={true}>
            <p>
              The tedious, time-intensive nature of the Floor Chart project
              provides another path of connection back to Peabody's original
              mural charts. For she did not only demonstrate the charts as part
              of her sales pitch; as an additional incentive, she also promised
              an original mural chart to any teacher who purchased copies of her
              textbooks for their entire class. Writing to a friend in 1850,
              Peabody revealed that she was “aching from the fatigue of making
              Charts for the Schools who will take the book.” The letter
              continues:
            </p>

            <Quotation
              quote={
                <>
                  Every school must have a mural chart—&amp; there is but one
                  way of making them (until they can be made by ten thousands)
                  &amp; that is by stenciling [<em>sic</em>]... I can do one a
                  day. But I must sell them cheap… To day I worked 15 hours—only
                  sitting down to take my meals—&amp; so I have done all week—so
                  much fatigue stupefies one—but as soon as it is adopted in a
                  few towns I shall be able to hire someone to do this drudgery
                  for me.
                </>
              }
              byline="Elizabeth Peabody,Letter to Samuel Gray Ward, September 1850"
            ></Quotation>

            <p>
              While we cannot change the fact that we no longer have access to
              the mural charts themselves, letters like these help to attest to
              the physical labor that was required to produce them. With its
              reference to the “stencilling” through which Peabody created her
              colorful symbols, as well as to its characterization of the tasks
              involved as “drudgery,” the letter also exposes the gendered
              dimensions of Peabody's knowledge work.
            </p>
            <p>
              It's not a coincidence that the fabrication of the mural charts
              involved what is now plainly legible as “women's work,” and that
              these same charts were not preserved. Then as now, the status
              hierarchy of work aligns with the social hierarchy of gender, at
              least in an Anglo-Western context. Work that is performed outside
              the home is valued, both culturally and monetarily, over work that
              is performed within it. Work that is perceived as more rigorous,
              or more professional—like, for instance, the political economy
              that functioned as Playfair's primary trade—is valued, again, both
              culturally and monetarily, over work that is perceived as more
              intuitive, or more domestic—like, for instance, the teaching that
              functioned as Peabody's main employ. Even within the art world,
              creative work that is perceived as high art is valued above work
              perceived as craft.
              <InlineFootnote index={37}></InlineFootnote>
            </p>
            <p>
              These gendered divisions of labor are among the primary reasons
              that Peabody's mural charts never entered the archive. And they
              are the same reasons that her charts have not (yet) been centered
              in the account of the rise of modern data visualization that is
              most commonly told. But who else are we missing when we fail to
              include examples like these in the stories we tell about the
              emergence of data visualization? And what possible future
              approaches to visualization design are we foreclosing, either
              intentionally or inadvertently, when we do?
            </p>
            <p>
              It is now uncontroversial to assert that the work of women has
              been crucial to the development of most scholarly disciplines and
              professional fields, even if the value of that work is still often
              only recovered after the fact.{" "}
              <InlineFootnote index={38}></InlineFootnote> While the obvious
              turn, here, may be to the women “computers” who were the first
              computer programmers, I would like to retain a focus on the
              charts' formal innovation. To wit: most contemporary viewers, when
              seeing Peabody's charts for the first time, observe that they look
              like paintings by Piet Mondrian, the famous Dutch modernist. To be
              sure, Peabody's charts strongly resemble Mondrian's own bold,
              colorful, geometric grid. But Peabody's self-account of the work
              involved in making the mural charts brings to mind a second point
              of reference, which is not painting but quilting: an artform
              traditionally practiced by women, and that has long been relegated
              to the world of “folk art” and craft.
              <InlineFootnote index={39}></InlineFootnote>
            </p>
          </Column>
          <Column>
            <LEDChart />
          </Column>
        </TwoColumnLayout>

        <CenteredLayout>
          <Figure
            className="grid grid-cols-2 items-center middle-full gap-x-4"
            figures={[
              figures["ch4-19-rachel-carey-george"],
              figures["ch4-20-gbq-q030-06"],
            ]}
            groupCaption={
              <>
                <p>
                  <strong>Left:</strong> "Housetop," by Rachel Carey George, ca.
                  1935.
                </p>
                <p>
                  <strong>Right:</strong> "Housetop" variation, design by Mary
                  Lee Bendolph. 1998, quilted by Essie Bendolph Pettaway, 2001.
                  Photos courtesy of Tinwood Media.
                </p>
                <p>
                  <em>Permissions pending.</em>
                </p>
              </>
            }
          />
          <p>
            Pictured above are two quilts from the area of Alabama known as
            Gee's Bend, a small, rural Black community, 35 miles south of Selma,
            that can trace its roots to a cotton plantation that was established
            there in the early nineteenth century. While valued by the residents
            of Gee's Bend for centuries, both for their formal features and for
            the family histories that they encode, the quilts have only recently
            begun to be recognized by art historians as key contributors to the
            development of modernist art.
            <InlineFootnote index={40}></InlineFootnote>
            Exhibitions at the Whitney Museum in New York, in 2002; the Turner
            Contemporary in London, in 2019; and others, have confirmed how the
            quilts "predate like-minded works by their more famous abstract art
            cousins."
            <InlineFootnote index={41}></InlineFootnote>
          </p>
          <p>
            As Black women who pursued their art while enslaved, and have
            continued to persist through slavery's perpetual wake, the life
            experiences of the Gee's Bend quilters could not be farther removed
            from those of Peabody, a white woman protected by her family's
            membership in Boston's intellectual elite. But the creative work of
            the Gee's Bend quilters, as distinguished historian Elsa Barkley
            Brown has shown, offers a model that can help to bring together
            these complementary perspectives. Drawing inspiration from their
            “polyrhythmic, 'nonsymmetrical,'' and nonlinear” patterns, Barkley
            Brown advocates for a continual “pivoting” of the center—that is,
            not decentering one perspective in favor of another but instead
            intentionally and continually shifting the focus from one
            perspective to the next.{" "}
            <InlineFootnote index={42}></InlineFootnote> The result of this
            strategy, which Barkley Brown devised for her own history classroom,
            is capacious and multifold: it allows the artifacts and experiences
            under analysis to be understood in the context of their own
            creation, and it allows the students performing this interpretive
            work to “become the voices of authority in their own education.”{" "}
            <InlineFootnote index={43}></InlineFootnote> Ultimately, Barkley
            Brown concludes that when done right, “the class is a quilt. It is
            precisely the contrast which organizes the whole and holds it
            together.”
            <InlineFootnote index={44}></InlineFootnote>
          </p>
          <p>
            We might similarly come to understand history as a quilt—as Brown
            strongly implies and as our project team has literally fabricated.
            But our work—and now I speak as a "we" in the general sense, on
            behalf of scholars of data visualization and those who design
            them—is far from complete. Consider the surprise that greeted
            me—along with no small degree of pleasure—upon discovering that a
            quilt created by Loretta Pettway, one of the Gee's Bend quilters,
            graces the cover of Edward Tufte's most recent book,{" "}
            <cite>Seeing with Fresh Eyes</cite>
            (2020). More than merely a compelling image—"unorthodox, fresh,
            amazing" is the extent of how Tufte describes it in the text—we must
            learn to see Pettaway's quilt, like Peabody's chart, as a system of
            knowledge making.
            <InlineFootnote index={45}></InlineFootnote>
            These two systems of knowledge-making, moreover, helpfully converge.
            Both employ shape and color in order to represent and recall past
            events: the quilts in order commemorate a community's ancestors and
            their stories; and the charts, as we have learned, in order to craft
            new narratives about the nation's defining historical events. Both
            also rely upon sense perception—and more specifically, the tactile
            experiences of the body—in order to assimilate visual display into
            knowledge. Whether enveloping oneself in a quilt, or gathering
            together around a mural chart, the result is a more immersive
            encounter with the object—and with the events of the past that the
            object seeks to commemorate, on the one hand; or on the other,
            convey.
          </p>
          <p>
            Barkley-Brown reminds us that these quilts are "illustrative of a
            particular way of seeing, of ordering the world."
            <InlineFootnote index={46}></InlineFootnote>
            We might extend this assertion to data visualization. The images and
            interactions that we create reflect our own ways of seeing and
            ordering the world. This fact does not invalidate the insights that
            they prompt, or the knowledge that they help us to acquire. On the
            contrary, it informs the knowledge that any particular visualization
            helps bring to light. With a wider awareness of the multiple ways of
            seeing the world, and a wider range of methods for ordering its
            data, we can enrich the basis of what we presently know, and—as
            Peabody envisioned—open up new possibilities for future knowledge.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[3]} />
        <CenteredLayout>
          <p className="first-paragraph">
            Since the outset of this project, I have argued for the additional
            inspiration we might find, and the knowledge we might gain, by
            expanding the history of data visualization to include a wider range
            of forms and figures. From Peabody and from the Gee's Bend quilters,
            we are pointed to the meaning-making capacity of geometric
            abstraction, and to the epistemological possibilities of more
            immersive—and more prolonged—visualization experiences. We are also
            pointed to the possibilities opened up by placing visualization
            midway through the process of knowledge production, rather than at
            its end, as we are to questions about who is authorized to produce
            knowledge from the start. Here we might expand Peabody's view of the
            value of bringing together multiple perspectives, enhanced by the
            example of the Gee's Bend quilts, into a broader claim about the
            need to expand the range of sources—and the range of people—who we
            enable, as visualization designers, to make knowledge claims.
            Following the theories and approaches of the scholars introduced in
            this chapter, including Donna Haraway, Katherine McKittrick, and
            Elsa Barkley Brown, we might employ Peabody's pedagogy in our own
            work as a path to understanding the situated and relational nature
            of all that we know.
          </p>
          <p>
            Finally, we might employ Peabody's data creations—both the textbooks
            and workbooks that are preserved in the archive, and the mural
            charts that are not—in order to reflect upon the range of labor that
            is involved in knowledge work, and the range of people who perform
            it. As we move into the final chapter of this book, which centers on
            the charts that W.E.B. Du Bois and his students designed for the
            1900 Paris Exposition, we will continue to explore how we might
            value the full range of labor that contributes to the creation of
            data visualizations, how we might honor all of those we rely upon to
            perform this work, and how we might ensure that their contributions
            are no longer erased from history. As we move forward in time,
            Peabody's visual method becomes valuable once again, because it
            authorizes us as viewers, as students, as designers, and as
            researchers, to fill in the details of the stories that we can only
            perceive in the abstract. Peabody's hope, which we might carry
            forward, is that when presented with the outlines of history, we
            might take it upon ourselves to color them in.
          </p>
        </CenteredLayout>
        <PeabodySandbox />
        <Takeaways
          forDesigners={[
            <span key="df782d45">
              Commit to a capacious definition of what counts as knowledge
            </span>,
            <span key="6440631a">
              Commit to a capacious definition of what counts as visualization
            </span>,
            <span key="2f317172">
              Consider who might be missing from the field of visualization
            </span>,
            <span key="2f317173">Consider the reasons why</span>,
          ]}
          forViewers={[
            <span key="75cf526a">
              Focus on supporting the process of knowledge production
            </span>,
            <span key="6d2691fc">
              Enable interactions among multiple representational forms (text,
              image, etc)
            </span>,
            <span key="9650286d">
              Consider alternatives to ease and efficiency
            </span>,
            <span key="2f317175">
              Consider modes of representing data beyond the visual form
            </span>,
          ]}
        />
      </ChapterBody>
      <CenteredLayout>
        <FootnotesList footnotes={peabodyFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
