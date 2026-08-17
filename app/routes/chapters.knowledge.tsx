import { Fragment, useState } from "react";
import SlideShow from "~/components/layout/SlideShow";
import ChapterTitle from "~/components/ChapterTitle";
import { ChapterContext } from "~/chapterContext";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import PullQuote from "~/components/layout/PullQuote";
import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";
import CenteredLayout from "~/components/layout/CenteredLayout";
import Footer from "~/components/Footer";
import HoverZoomPeabodySquare from "~/components/knowledge/HoverZoomPeabodySquare";
import InlineFootnote from "~/components/InlineFootnote";
import { processFootnotes } from "~/footnotes";
import PeabodySandbox from "~/components/knowledge/PeabodySandbox";
import FootnotesList from "~/components/FootnotesList";
import Scrollytell from "~/components/knowledge/PeabodyScrollytell";
import Quotation from "~/components/Quotation";
import Quiz from "~/components/knowledge/quiz/Quiz";
import PeabodyTimeline from "~/components/knowledge/PeabodyTimeline";
import LEDChart from "~/components/knowledge/LEDChart";
import figures from "~/data/figures/knowledge.json";
import Figure from "~/components/figures/Figure";
import { chapterMetaTags } from "~/utils";
import ChapterBody from "~/components/layout/ChapterBody";
import eventData from "~/data/process/eventData.json";
import PeabodyActors from "~/components/knowledge/PeabodyActors";
import TutorialKey from "~/components/knowledge/tutorial/TutorialKey";
import Takeaways from "~/components/layout/Takeaways";
import ClientOnly from "~/components/ClientOnly";
import { chapterMeta } from "~/data/chapterMeta";
import type { MetaFunction } from "react-router";
import type { HoverState, TVizAnchors } from "~/chapterContext";
import PeabodyBarGraph from "~/components/knowledge/PeabodyBarGraph";

export const meta: MetaFunction = () => {
  return chapterMetaTags("knowledge");
};

const sections = [
  {
    title: "The Value of Relational Knowledge",
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
        backgroundColor: "knowledgePrimary",
        accentColor: "knowledgeSecondary",
        footnoteTextColor: "imagePrimary",
        primaryTextColor: "black",
        accentTextColor: "black",
        footnotes: processFootnotes,
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
        title={chapterMeta.knowledge.title}
        subtitle={chapterMeta.knowledge.subtitle}
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
        <CenteredLayout>
          <p className="first-paragraph">
            Elizabeth Palmer Peabody was born within a year or two of
            Shanawdithit, in 1804.
            <InlineFootnote index={0} />But her life circumstances—stability
            of food and family, membership in the Boston intellectual elite,
            and status as a US-born settler woman—enabled her to live for
            nearly a century, over 65 years longer than Shanawdithit, who
            would die of tuberculosis several weeks after creating her maps.
            By the time that Peabody died, in 1894 at the age of 89, she had
            left her mark on a number of fields. The bookstore that she ran
            out of her home at 13 West Street, just off Boston Common,
            functioned as the de facto salon of the transcendentalist
            movement. She edited and published the first version of Henry
            David Thoreau’s essay on civil disobedience. She can also be
            credited with starting the first kindergarten in the United
            States, which opened on the other side of the Common, at 15
            Pinckney Street, in 1860. This was the same year that Abraham
            Lincoln would be elected President, South Carolina would secede
            from the Union, and the stage for the US Civil War would be near
            fully set.
            <InlineFootnote index={1} />
          </p>
          <p>
            But even just a few years before, this national crisis seemed far
            from inevitable—especially to Peabody, whose own antislavery
            consciousness had yet to fully coalesce—and so Peabody left her
            bookstore in the hands of a caretaker and set off to ride the
            rails. She traveled as far north as Rochester, New York; as far
            west as Louisville, Kentucky; and as far south as Richmond,
            Virginia, all to promote a pair of history textbooks she had
            recently written, <cite>The Polish-American System of Chronology</cite>{" "}
            (1850) and <cite>Chronological History of the United States</cite>{" "}
            (1856). In the textbooks, Peabody described a new method of
            visual learning—the Polish-American system, she came to call
            it—a method with data visualization at its core.
          </p>
        </CenteredLayout>

        <TwoColumnLayout>
          <Column shouldPin>
            <p>
              Peabody’s contributions to the development of data
              visualization are rarely recognized at the same level as her
              other achievements. But as this chapter will show, Peabody
              offered a transformative view of the uses and value of
              visualization—one that challenges the standard account of the
              field’s emergence, as well as the epistemological assumptions
              that, as a result, have become embedded in best practices
              today. As further evidence, consider how Peabody boarded the
              train that would take her on her national tour with not one but
              two versions of her charts: the first, the textbooks that she
              hoped to sell; and the second, a rolled-up set of charts
              between five and six feet long. These were large-scale replicas
              of the data visualizations that appeared in the books. Peabody
              identified the charts, with their vibrant geometric
              abstraction, as key components of her visual epistemology. The
              “painted centuries,” as she also sometimes described them,
              were “intended to do for the science of history what maps do
              for that of geography; and … [make it] easy to lay the
              foundations of historical knowledge in the minds of the young.”
              <InlineFootnote index={2} />
            </p>
            <p>
              Like William Playfair, Thomas Clarkson, and the other early
              proponents of data visualization whom we have met thus far,
              Peabody recognized the power of visual perception as a means of
              crystallizing the insights that lead to new knowledge. But she
              wielded this power in a very different way. She designed her
              charts to be abstract rather than indexical or concrete; to
              promote sustained reflection rather than immediate or intuitive
              understanding. And she did so with a clear goal in mind: to
              provoke a unique imaginative response in each viewer. Peabody’s
              charts thus offer an alternative to the dominant view of how
              visualization leads to new knowledge—of the “single view”
              advanced explicitly by Playfair and Clarkson, and implicitly by
              Cormack in his request that Shanawdithit produce her maps.
            </p>
            <p>
              As this chapter will argue, Peabody’s charts model a feminist
              epistemology <em>avant la lettre</em>—that is to say, before the
              term “feminist” carried much of the meaning that it has today.
              <InlineFootnote index={3} />I make this claim not because
              Peabody herself was a woman, although this chapter does explore
              some of the reasons for the gender skew of the history of the
              field. Rather, by repositioning the source of the insights that
              lead to new knowledge from the visualization itself to its
              interplay with the viewer, Peabody flattens the hierarchy that
              more commonly structures the relationship between the designer
              of a visualization and those who perceive (or interact with)
              it. As we will learn in this chapter, this is a fundamentally
              feminist move.
            </p>
            <p>
              In addition, in their strategic use of abstraction and the
              involvement of the whole body, Peabody’s charts challenge
              several additional hierarchies that remain entrenched in
              visualization design—particularly those that place purportedly
              “objective” representational strategies above those that
              encourage more affective and embodied ways of knowing. In their
              rejection of the belief that every phenomenon in the world can
              be easily captured and rendered visible by data, Peabody’s
              charts attune us to the multiple ways by which visualization
              can lead to new knowledge, as well as to the multiple ways in
              which we might understand the nature of knowledge itself.
            </p>
          </Column>
          <Column shouldPin>
            <Figure
              className="md:ml-24 md:grid grid-cols-2 gap-4"
              figures={[
                figures["0401-1500s"],
                figures["0402-1600s"],
                figures["0403-1700s"],
                figures["0404-1800s"],
              ]}
            />
          </Column>
        </TwoColumnLayout>

        <ChapterSectionTitle section={sections[0]} />
        <CenteredLayout className="pb-20">
          <p className="first-paragraph">
            Peabody’s method of visualizing events of historical significance
            was inspired by a system developed in Poland in the 1820s and
            ’30s by the educator Antoni Jażwiński, and popularized in
            subsequent decades by the military general (and erstwhile math
            teacher) Józef Bem.
            <InlineFootnote index={4} />The Polish system, as it was called,
            aimed to visually represent events in time through a grid
            overlaid with shapes and colors. In{" "}
            <cite>Cartographies of Time</cite>, Daniel Rosenberg and Anthony
            Grafton describe how the system “swept across Europe and North
            America” in the middle decades of the nineteenth century.
            <InlineFootnote index={5} />But Peabody first encountered it by
            chance: through a traveling lecturer who briefly boarded with her
            family on West Street. The boarder, a man named Joseph
            Podbielski, had come from Poland with copies of Bem’s charts,
            which he intended to promote on a lecture tour of the United
            States. Peabody became “captivated” by the charts, and she went
            on to devote several years of study to the Polish system,
            culminating with the development of her own modified version: the{" "}
            <cite>Polish-American system</cite> that prompted her national
            tour.
            <InlineFootnote index={6} />
          </p>
          <p>
            In <cite>The Polish-American System of Chronology</cite>, Peabody
            covers a tremendous temporal expanse: the period between 2500 BCE
            and what was then the present (1849 CE). But Peabody also saw the
            need for a textbook that focused exclusively on the United
            States. And so, shortly after the release of{" "}
            <cite>The Polish-American System</cite>, she began working on the
            book that would be published, in 1856, as{" "}
            <cite>Chronological History of the United States</cite>. This
            textbook contained the four full-color plates displayed at the
            start of this chapter; one for each of the centuries since the
            first European colonists set foot on Native land. As Peabody
            envisioned it, the basic exercise was to read a chapter of the
            textbook, which contained a narrative account of the events of a
            single century, and then work through a list of those same
            events that came at the conclusion of the chapter, matching each
            item with its visual representation on the corresponding chart.
          </p>
        </CenteredLayout>

        <Scrollytell
          triggers={[
            <p key={"2c8354f7"}></p>,

            <Fragment key={"6f989444"}>
              <p className="bg-[#9ae4c1cc] px-4 md:p-0">
                Peabody’s system borrows from Bem the idea of a numbered grid,
                with each year in a century marked out in its own square. The
                thick orange lines that we might interpret as horizontal and
                vertical axes do not serve that purpose; they are intended
                only as “landmarks to the eye,” Peabody explains.
                <InlineFootnote index={7} />
              </p>
            </Fragment>,

            <Fragment key={"33dfea32"}>
              <p className="bg-[#9ae4c1cc] px-4 md:p-0">
                Each “year-square” (Peabody’s term) is then subdivided into
                nine interior squares, with each location in the year-square
                corresponding to a particular type of historical event.
              </p>
            </Fragment>,

            <Fragment key={"e4503b65"}>
              <p className="bg-[#9ae4c1cc] px-4 md:p-0 mb-0 pb-2 md:pb-0">
                In Peabody’s system, as in Bem’s, the top left corner of the
                year-square—labeled 1 in this diagram—is the location for
                battles, sieges, and beginnings of wars. The top middle—labeled
                2—is the location for conquests, annexations, and unions. The
                top right—labeled 3—is the location for losses and disasters,
                and so on.
              </p>
              <TutorialKey />
              <p className="h-64 md:h-auto"></p>
            </Fragment>,

            <Fragment key={"52553732"}>
              <p className="bg-[#9ae4c1cc] px-4 md:p-0 mb-0">
                The events are also color-coded, indicating the various
                countries involved in a particular event. On this point, Peabody
                makes special note that she employs "a somewhat different, and,
                as it seems to me, a more expressive distribution of colors"
                than the original system.
                <InlineFootnote index={8} />
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
                For example, the square for 1607 is entirely burgundy, marking
                the settlement of Jamestown, the first permanent British colony
                in the Americas.
              </p>
              <div className="flex flex-wrap text-sm mt-6 gap-2 bg-[#9ae4c1cc] w-full md:w-auto px-4 pt-4 md:p-0">
                <PeabodyActors actor="England" />
              </div>
            </Fragment>,

            <Fragment key={"0d3e2774"}>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mb-0 pb-2 md:pb-4">
                In 1620, we see two events. More significant, for Peabody, is
                the settlement of Plymouth by the Pilgrims, as it creates a
                “C” shape around a small green (formerly “yellowish-green”)
                square.
              </p>
              <p className="bg-[#9ae4c1cc] ml-4 md:ml-0 my-0 pl-4 mb-2 text-sm uppercase border-l-2 border-processOrange">
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
                The green square marks the first enslaved Africans being
                brought to Jamestown, so shaded because they arrived aboard a
                Dutch ship. (This event is now recognized as taking place in
                1619; Peabody was off by one year.) Peabody was on the side of
                abolition though by no means its most radical proponent,
                especially at that point in her life; the year-square’s
                outsized ratio of burgundy to green reflects Peabody’s
                awareness of—if not an urgency about—the need to end slavery
                in the United States.
              </p>
              <p className="bg-[#9ae4c1cc] ml-4 md:ml-0 my-0 pl-4 mb-2 text-sm uppercase border-l-2 border-processOrange">
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
                Elsewhere on the charts, Peabody uses diagonals to show events
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
                Virginia. In her accompanying list of events, Peabody labels
                this the “Jamestown Massacre.” In the top left of the square
                is orange, the color for “Americans,” here representing the
                Powhatan and their position as instigators of this particular
                battle. In the bottom right is burgundy, representing the
                British settlers, in their position as besieged.
                {/* <!-- divide this one into two at the sentence break? --> */}
              </p>
              <p className="bg-[#9ae4c1cc] ml-4 md:ml-0 my-0 pl-4 mb-2 text-sm uppercase border-l-2 border-processOrange">
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
              <p className="bg-[#9ae4c1cc] ml-4 md:ml-0 my-0 pl-4 mb-2 text-sm uppercase border-l-2 border-processOrange">
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
                disasters, entirely orange. The corresponding text reads
                “Indians are conquered.”
              </p>
              <p className="bg-[#9ae4c1cc] ml-4 md:ml-0 my-0 pl-4 mb-2 text-sm uppercase border-l-2 border-processOrange">
                3. {eventData.eventTypes[2]}
              </p>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mt-0 md:mt-4 pt-4 text-sm">
                <PeabodyActors actor="Americas" />
              </p>
            </Fragment>,

            <Fragment key={"615d61e0"}>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mb-0 pb-2 md:pb-4">
                In the same year, we see another orange square in the bottom
                right, the position representing “deaths of remarkable
                individuals.” Peabody tells us this represents the death of
                Pocahontas, the daughter of Chief Powhatan himself.
                <InlineFootnote index={9} /> Returning to the overall view of
                the century, that orange square at once represents the power
                of commemoration and the insufficiency of a colored box to
                stand in for a human life, however saturated with color—and
                meaning—that box may be.
              </p>
              <p className="bg-[#9ae4c1cc] ml-4 md:ml-0 my-0 pl-4 mb-2 text-sm uppercase border-l-2 border-processOrange">
                9. {eventData.eventTypes[8]}
              </p>
              <p className="bg-[#9ae4c1cc] pl-4 md:pl-0 mt-0 md:mt-4 pt-4 text-sm">
                <PeabodyActors actor="Americas" />
              </p>
            </Fragment>,

            <p key={"6f6c2b69"} className="h-[50vh] md:h-auto"></p>,
          ]}
        />

        <TwoColumnLayout className="pt-20">
          <Column>
            <p>
              In keeping with the leading pedagogical theories of the day,
              students were expected to commit the charts to memory.
              <InlineFootnote index={10} />But Peabody’s approach diverged
              from the rote memorization that characterized most
              mid-nineteenth-century classrooms; her ultimate aim was for
              each student’s mental picture of past events to prompt a
              richer—and, crucially, a personally constructed—narrative of
              history. As young citizens of the world’s first representative
              democracy, on whose participation the future of the nation
              would soon depend, an understanding of the “origin and
              consequences” of past events would help guide their “own
              inevitable action” as each student became a “creator of its
              events” in adulthood—or so Peabody believed.
              <InlineFootnote index={11} />
            </p>
          </Column>
          <Column className="md:ml-12" shouldPin={true}>
            <HoverZoomPeabodySquare
              figure={figures["0405-Jazwinski-10588000"]}
            />
          </Column>
        </TwoColumnLayout>

        <PeabodyTimeline />

        <CenteredLayout className="pb-20">
          <p>
            The reality, however—now, as then—is that Peabody’s charts are
            nearly impossible to understand without first taking the time to
            learn how they work. This lengthy and difficult learning process
            might be viewed as a liability by those who champion the ease
            and efficiency of visualization. In defense of this assessment,
            consider what happens if we alter the representation of the
            events encoded in Peabody’s chart of the seventeenth century,
            making it a timeline rather than a grid. The progression of
            events over the course of the century is significantly more
            immediately legible than the top-to-bottom, left-to-right layout
            of her grid.
          </p>
          <p>
            But for Peabody, her charts’ near-total abstraction was
            precisely the point. She designed her charts to appeal to the
            senses directly, to provide what she called “outlines to the
            eye.”
            <InlineFootnote index={12} />Her hope was that, with the outline
            of history provided—and, crucially, only the outline—each viewer
            could fill in the missing parts of the story themselves.
            <InlineFootnote index={13} />The result would be not only a
            proliferation of historical narratives, originating in the mind
            of each viewer, but, very crucially, narratives that reflected
            their own interpretation of each chart.
          </p>
        </CenteredLayout>

        <PeabodyBarGraph />

        <ChapterSectionTitle section={sections[1]} />
        <TwoColumnLayout className="pb-20">
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
              <InlineFootnote index={14} />And on her own,
              Peabody continued to iterate on the teaching and learning
              materials associated with the Polish-American system.
            </p>
            <p>
              In 1870, Peabody began printing workbooks with sheets of blank
              charts—“blank centuries,” as she called them—so that students
              could themselves create the visualizations that they would
              then study. In the interaction below, we’ve adapted this
              workbook exercise for the screen. Be forewarned! Creating a
              chronological grid from scratch is exceptionally hard, as each
              of us can personally attest. For that reason, we created a
              button—“end” on the bottom right—to skip ahead.
            </p>
          </Column>
          <Column>
            <Figure figure={figures["0417-student3"]} />
          </Column>
        </TwoColumnLayout>

        <Quiz />

        <TwoColumnLayout className="pt-20">
          <Column>
            <p>
              Peabody’s nephew, Julian Hawthorne, who served as her first
              test subject, recalled how he remained “most inapt and
              grievous” at this exercise.
              <InlineFootnote index={15} />Surviving student copies of the{" "}
              <cite>Blank Centuries</cite> at the American Antiquarian
              Society, the Library Company of Philadelphia, Yale’s Beinecke
              Library, and Princeton’s Special Collections would seem to
              confirm Hawthorne’s experience. Each tends to follow a similar
              pattern: a page or two of grids filled out in earnest; then, in
              the next few pages, a series of attempts abandoned halfway; and
              then, for the remainder of the workbook, an obvious shift in
              purpose—either the grids are entirely blank, indicating the
              exercise abandoned, or they are consumed by doodles and
              drawings, becoming a canvas for pattern and play.
            </p>
            <p>
              Peabody would have likely been dismayed by such blatant
              disregard for her intentions; but it is also possible that she
              would have taken at least partial pleasure in these students’
              reimagined uses of her grids. After all, the difficulty of the
              Polish-American system was both a liability of the form and
              part of the point. Peabody first developed her method at a
              time when the nation’s future seemed to hang in balance. As
              the 1850s unfolded, especially after the passage of the
              Fugitive Slave Act galvanized those in the North, the
              magnitude of the nation’s political divisions became
              increasingly pronounced. Peabody herself came to recognize
              that the moral obligation of ending slavery would require an
              as-yet-envisioned political strategy—one that would entail a
              consideration all possible paths forward, as well as time for
              sustained effort and space for deep thought. Her goal with the
              Polish-American system was to create a framework, equal parts
              pedagogical and epistemological, through which this difficult
              thinking could take place.
            </p>
            <p className="text-center font-power text-xl">***</p>
            <p>
              The historical and political context that motivated Peabody to
              publish her textbooks is crucial for understanding both her
              ideas about the uses of visualization and the form that her
              visualizations take. We have already seen several other
              examples of this, including in Chapter Three, when we
              considered Emma Willard’s choice to put the outlines of US
              states in the background of her map. To probe the convergence
              of Peabody’s epistemology with her political ideology, let’s
              now consider one of Willard’s later charts, <cite>Temple of Time</cite>,
              which helpfully puts its own ideology right on the surface.
            </p>
            <p>
              Willard designed her <cite>Temple of Time</cite> in 1846 after
              nearly two decades of her own continual experimentation with
              ways of visualizing history. She explored the affordances of
              maps, as discussed in the previous chapter, and then a set of
              visualizations inspired by Alexander von Humboldt (who was
              himself inspired by the Colombian naturalist Francisco José de
              Caldas), and then the idea of a memory palace, as exemplified
              by <cite>Temple of Time</cite>.
              <InlineFootnote index={16} />
            </p>
            <p>
              In the chart, Willard depicts past centuries as the pillars
              that support the titular temple. Here, the nineteenth century
              is represented as an unfinished column, not yet able to
              support the weight of the past. On the ceiling of the temple,
              Willard catalogues key figures from each prior century, a
              revealing who’s who of statesmen, philosophers, discoverers,
              and poets. On the floor of the temple, she lays out the
              developments of major nation-states, their paths drawn as
              rivers subjected—like water levels—to the expansions and
              contractions of state power over time. Consistent with the
              narrative enacted by her maps, Willard places the path of the
              United States front and center. This river flows directly
              toward us, the viewers. The message is not subtle: we will be
              enveloped by the expanding influence of the United States in
              the years to come.
              <InlineFootnote index={17} />
            </p>
            <p>
              By contrast, the more abstract impression conveyed by
              Peabody’s chronological grids requires significant
              interpretation. But Peabody was designing her charts to serve
              as the basis for future knowledge, rather than as a document
              of what was known to that point. Her charts show us the
              generative possibilities of visualization strategies that
              invite in outside knowledge—those that allow viewers of
              visualizations, as well as designers of them, to bring in
              their own expertise.
              <InlineFootnote index={18} />With the addition of the
              workbooks, Peabody underscores her belief in this more
              participatory form of knowledge production. Her requirement
              that her students create their own charts challenges the
              typical hierarchy of knowledge-making, in which the designer
              of a visualization is inherently above those who view or
              otherwise interact with it. According to Peabody’s pedagogical
              process, it is the student who is authorized to <em>both</em>{" "}
              create <em>and</em> interpret the image, rather than the
              charts’ original designer—in this case, Peabody herself.
            </p>
          </Column>
          <Column shouldPin={true}>
            <Figure
              className="grid grid-cols-2 md:grid-cols-4 gap-2 md:ml-12"
              figures={[
                figures["0415-student1"],
                figures["0416-student2"],
                figures["0417-student3"],
                figures["0418-student4"],
                figures["0419-student5"],
                figures["0420-student6"],
                figures["0421-student7"],
                figures["0422-student8"],
              ]}
              groupCaption={
                <p className="font-neueMontreal text-sm leading-tight text-left col-span-full">
                  <cite>The Polish-American System </cite>
                  housed at the American Antiquarian Society. Courtesy of the
                  American Antiquarian Society. Photos by Lauren Klein.
                </p>
              }
            />
          </Column>
        </TwoColumnLayout>
        <CenteredLayout>
          <Figure figure={figures["0423-willard-temple"]} />
        </CenteredLayout>
        <ChapterSectionTitle section={sections[2]} />
        <CenteredLayout>
          <p className="first-paragraph">
            As part of her participatory pedagogy, Peabody also created
            larger “painted centuries,” or “mural charts” as she also
            sometimes described them, in order to guide classroom
            discussion.
            <InlineFootnote index={19} />These were the charts she traveled
            with on her national promotional tour, and by all accounts they
            were dazzling—triangles and squares of crimson, ochre, and
            forest green, set against a sharp black grid. In her version of
            a sales pitch, Peabody would “lay [a] chart down on the floor”
            and invite her would-be textbook adopters to sit around it and
            contemplate the colors and patterns that enveloped them.
            <InlineFootnote index={20} />
          </p>
          <p>
            While the experience of sitting on the floor to learn together,
            rather than in rows of wooden desks, was—to most adults—quite
            shocking, the pedagogical impact of this more collective and
            embodied form of learning was, as best we can gather, nothing
            short of transformative. “I have never known a system which
            placed the events of the history of all nations before the mind
            with such clearness, so little confusion, and so much
            permanency,” wrote Eliphalet Nott, then president of Union
            College, who participated in one of Peabody’s teaching
            demonstrations.
            <InlineFootnote index={21} />
          </p>
          <p>
            And yet, until one of Peabody’s mural charts was acquired,
            digitized, and put online by the David Rumsey Map Collection in
            2024, most scholars—including me—believed that this
            transformative experience would remain only second-hand.
            <InlineFootnote index={22} />Nott’s account notwithstanding, it
            was difficult to even get a sense of the charts’ basic features.
            <InlineFootnote index={23} />I doubted that I would ever see one
            in person, especially since a colleague who’d been researching
            another nineteenth-century woman chart-maker, Anne Laura Clarke,
            sent me a photo of how he’d found Clarke’s own large-scale
            charts: brittle and water-damaged in her sister’s family’s attic.
            <InlineFootnote index={24} />Peabody’s parents had only rented
            their West Street home; there would be no attic discovery for
            me.
          </p>
        </CenteredLayout>
        <TwoColumnLayout>
          <Column shouldPin={true}>
            <p>
              But Peabody’s embodied pedagogy seemed, to me, so primed for
              the present that I could not let the idea of the mural charts
              go. In my research group, working with multiple cohorts of
              students over multiple years, we sought to reimagine the
              mural charts for today.
              <InlineFootnote index={25} />We wanted our users to be able to
              engage their bodies even more directly; we decided that our
              “Floor Chart,” as we came to call it, would respond to touch.
              To do this, we created a three-foot-by-three-foot touch matrix
              made of strips of copper tape.
              <InlineFootnote index={26} />Above it, a layer of quilted
              fabric, also created by members of my lab, held in place
              strips of individually addressable LEDs.
              <InlineFootnote index={27} />The result was a grid that could
              be toggled (or preprogrammed) to display the events listed in
              the <cite>Chronological History</cite>—or any others that have
              transpired in the intervening years. In this way, users could
              engage with the past using their hands.
            </p>
            <p>
              The Floor Chart project required expertise in a range of
              domains, from electronics prototyping to signal processing to
              circuit board design. It also required a truly tremendous
              amount of physical labor. Each yard-long strip of copper tape
              needed to be perfectly aligned, lest a small misalignment at
              one end result in a significant gap at the other. Each of the
              nine hundred square-shaped holes of the spacer for the touch
              matrix was required to be cut out by hand, as laser-cutting
              would have released harmful toxins. Each electrical connection
              had to be soldered, tested, and then—in almost all
              cases—soldered again, to ensure that the circuit remained
              intact. As much as an exercise in physical fabrication—a
              delight to my Georgia Tech students—the project became an
              exercise in the physicality of work itself. It called us back
              to the focus that is required of any project that is made by
              human hands, and the resultant fatigue.
              <InlineFootnote index={28} />
            </p>
          </Column>
          <Column>
            <Figure
              figures={[
                figures["0424-Caldas-AJB03_M0514"],
                figures["0425-Caldas-AJB03_M0526"],
                figures["0426-Caldas-AJB03_M0529"],
              ]}
              className="md:ml-12"
              groupCaption={
                <p className="font-neueMontreal text-sm leading-tight text-left col-span-full">
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
              also called me back to another historical detail related to
              Peabody’s original charts: the fact that she did not only
              demonstrate the charts as part of her sales pitch; as an
              additional incentive, she also promised an original mural
              chart to any teacher who purchased copies of her textbooks for
              their entire class. Writing to a friend in 1850, Peabody
              revealed that she was “aching from the fatigue of making
              Charts for the Schools who will take the book.” The letter
              continues:
            </p>

            <Quotation
              quote={
                <>
                  Every school must have a mural chart—&amp; there is but one
                  way of making them (until they can be made by ten thousands)
                  &amp; that is by stencilling [<em>sic</em>]. … I can do one a
                  day. But I must sell them cheap. … To day I worked 15
                  hours—only sitting down to take my meals—&amp; so I have
                  done all week—so much fatigue stupefies one—but as soon as
                  it is adopted in a few towns I shall be able to hire someone
                  to do this drudgery for me.
                  <InlineFootnote index={29} />
                </>
              }
              byline="Elizabeth Peabody, Letter to Samuel Gray Ward, September 1850"
            ></Quotation>

            <p>
              While the digitized mural chart in the David Rumsey Map
              Collection appeared online as if by magic, letters like these
              help to attest to the intensity of the physical labor that was
              required to produce the original charts.
              <InlineFootnote index={30} />With its reference to the
              “stencilling” through which Peabody created her colorful
              symbols, as well as to its characterization of the tasks
              involved as “drudgery,” the letter also exposes the gendered
              dimensions of Peabody’s knowledge work.
            </p>
            <p>
              It is not a coincidence that the fabrication of the mural
              charts involved what is plainly legible as “women’s work,” and
              that these same charts were scarcely preserved. The status
              hierarchy of work aligns with the social hierarchy of gender
              that persists, still, in the United States. Work that is
              performed outside the home is valued, both culturally and
              monetarily, over work that is performed within it. Work that
              is perceived as more rigorous or more professional—like, for
              instance, the political economy that functioned as Playfair’s
              primary trade—is valued, again, both culturally and
              monetarily, over work that is perceived as more intuitive or
              more domestic—like, for instance, the teaching that functioned
              as Peabody’s main employment. Even within the art world,
              creative work that is perceived as high art is valued above
              work perceived as craft.
              <InlineFootnote index={31} />
            </p>
          </Column>
          <Column>
            <Figure
              className="md:ml-12"
              figures={[
                figures["0431-clarke-1-4000BC-ps-30x43-2"],
                figures["0432-Tattered map in attic"],
              ]}
            />
          </Column>
        </TwoColumnLayout>

        <CenteredLayout>
          <p>
            These gendered divisions of labor are among the primary reasons
            that Peabody’s mural charts did not enter officially sanctioned
            archives at the time of their creation. They are also among the
            same reasons that her charts have not (yet) been centered in our
            typical telling of the rise of modern data visualization. But
            think about how Peabody’s approach diverges from someone like
            Willard’s or William Playfair’s, and how generative that
            divergence can be. It is not, after all, that Peabody did not
            recognize the power of visualization. In point of fact, she also
            sought to create an “instantaneous impression” with her charts,
            to recall the goal shared by Willard and Playfair alike. It is,
            rather, that Peabody saw the power of creating that
            impression—along with perceiving it—as an experience that could
            be <em>shared</em>.
          </p>
          <PullQuote
            quote="Who else are we missing when we fail to include charts like Peabody's in the stories we tell about the emergence of data visualization?"
            subquote=""
          />
          <p>
            And in these omissions, what possible future approaches to
            visualization design are we also not (yet) able to see?
          </p>
          <p>
            To this point, most contemporary viewers, when seeing Peabody’s
            charts for the first time, observe that they look like paintings
            by Piet Mondrian, the famous Dutch modernist. But Peabody’s own
            account of making the mural charts brings to mind a second point
            of reference, which is not painting but quilting—an art form,
            traditionally practiced by women, that has long been relegated
            to the world of “folk art” and craft.
            <InlineFootnote index={32} />
          </p>

          <Figure
            className="grid grid-cols-2 items-center middle-full gap-x-4"
            figures={[
              figures["0428-am1829-phelps-67941-d-p1"],
              figures["0429-Willard-4545001"],
            ]}
            groupCaption={
              <>
                <p className="font-neueMontreal text-sm leading-tight text-left col-span-full">
                  <strong>Left:</strong> "Housetop," by Rachel Carey George, ca.
                  1935.
                </p>
                <p className="font-neueMontreal text-sm leading-tight text-left col-span-full">
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
            The area of Alabama known as Gee’s Bend, a small, rural Black
            community, 35 miles south of Selma, traces its roots to a cotton
            plantation established there in the early nineteenth century.
            The quilts created in Gee’s Bend have been valued by its
            residents for generations, both for their formal features and
            for the family histories that they encode. But the quilts have
            only recently begun to be recognized by art historians as
            representing an alternate stream of modernist aesthetics.
            <InlineFootnote index={33} />Recent exhibitions at the Whitney
            Museum and the Turner Contemporary lend additional weight to the
            claim that the quilts “predate like-minded works by their more
            famous abstract art cousins.”
            <InlineFootnote index={34} />
          </p>

          <p>
            To be clear, the life experiences of the Gee’s Bend
            quilters—Black women who pursued their art while enslaved, and
            have continued that art through slavery’s perpetual wake—could
            not be farther removed from those of Peabody, a white woman well
            established in Boston’s intellectual elite. But the creative
            work of the Gee’s Bend quilters, as distinguished historian Elsa
            Barkley Brown has shown, offers a model that might bring
            together these complementary perspectives.
          </p>
          <p>
            Drawing inspiration from the quilts’ “polyrhythmic,
            ‘nonsymmetrical,’ and nonlinear” patterns, Barkley Brown
            advocates for a continual “pivoting” of what we think of as the
            center—that is, not decentering one perspective in favor of
            another but instead intentionally and continually shifting the
            focus from one perspective to the next.
            <InlineFootnote index={35} />The result of this strategy, which
            Barkley Brown devised in her own history classroom, is
            capacious and multifold: it allows the artifacts and experiences
            under analysis to be understood in the context of their own
            creation, and it allows the students performing this
            interpretive work to “become the voices of authority in their
            own education.”
            <InlineFootnote index={36} />Ultimately, Barkley Brown concludes
            that when done right, “the class is a quilt. It is precisely the
            contrast which organizes the whole and holds it together.”
            <InlineFootnote index={37} />
          </p>
          <p>
            What if we understood the history of visualization as a quilt?
            This is what Barkley Brown’s pedagogical theory suggests, and
            what my own research group literally fabricated. So consider the
            surprise that greeted me, along with no small degree of
            pleasure, upon discovering that a quilt created by Loretta
            Pettway, another Gee’s Bend quilter, graces the cover of Edward
            Tufte’s most recent book, <cite>Seeing with Fresh Eyes</cite>{" "}
            (2020). We must all learn to see such quilts, like Peabody’s
            charts, as systems of knowledge-making.
            <InlineFootnote index={38} />Even more, as Katherine McKittrick
            advises, we must understand these systems in relation to each
            other.
            <InlineFootnote index={39} />
          </p>
          <p>
            In the case of Peabody and the Gee’s Bend quilters, their
            connection is very clearly asymmetrical, the result of
            differences in race and class, physical and economic mobility,
            social and cultural status, and more. But it is also forged
            across their shared methods. Both employ shape and color to
            represent and recall past events: the quilters in order to
            commemorate a community’s ancestors and their stories; and
            Peabody, as we have learned, in order to craft new narratives
            about the nation’s defining historical events. Both also rely
            upon sense perception—and more specifically the tactile
            experiences of the body—to assimilate visual display into
            knowledge. Whether enveloping oneself in a quilt or gathering
            together around a mural chart, the result is a more embodied
            encounter with the object—and with the events of the past that
            the object seeks to commemorate and to convey.
          </p>
          <p>
            Barkley Brown reminds us that the Gee’s Bend quilts are
            “illustrative of a particular way of seeing, of ordering the
            world.”
            <InlineFootnote index={40} />We might again extend this
            assertion to data visualization. With a wider awareness of the
            multiple ways of seeing the world, a broader range of methods
            for ordering its data, and a more acute sense of the relations
            among them, we can begin to expand the basis of what we
            presently know, and—as Peabody envisioned—open up additional
            possibilities for future knowledge.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[3]} />
        <CenteredLayout>
          <p className="first-paragraph">
            Both Peabody's chronological grids and the Gee's Bend quilts point
            us to the epistemological possibilities of more immersive—and more
            prolonged—visualization experiences. They also point us to the
            possibilities that emerge when we place visualization midway
            through the process of knowledge production, rather than at its
            end. This early use of exploratory data visualization prompts yet
            more questions about who is authorized to produce knowledge, both
            in the design of visualizations and in their interpretation.
          </p>
          <p>
            Here, for a final time, we might draw from Peabody's example of
            encouraging multiple perspectives, placed in relation to the Gee's
            Bend quilters, so as to articulate a claim for the field of
            visualization overall: that as researchers, designers, and viewers
            alike, we must expand the range of sources—and the range of
            people—whom we enable to make knowledge claims. How can we better
            recognize the people who we are currently excluding? How might
            Peabody's efforts—as well as how they were circumscribed—help to
            elevate our own attempts to reckon with the relational nature of
            all that we know?
          </p>
          <p>
            As we move into the final historical chapter of this book, which
            centers on the charts that W. E. B. Du Bois and his students
            designed for the 1900 Paris Exposition, we will continue to
            explore the power of data visualization to support larger
            narratives: of peoples, of nations, and of the field. We will also
            consider how Du Bois grappled with the limits of what could be
            learned from visualization alone. Here, Peabody's "knowledge
            system" will become valuable once again, because it authorizes us
            to support multiple narratives—and multiple methods—rather than
            one single view. In the end, the most liberatory version of this
            system, as we seek to evoke in the final chart of this chapter, is
            that when presented with only the outlines of history, we might
            take it upon ourselves to color them in.
          </p>
        </CenteredLayout>
        <PeabodySandbox />
        <Takeaways
          forDesigners={[
            <span key="df782d45">
              Draw inspiration from multiple ways of knowing
            </span>,
            <span key="6440631a">
              Empower viewers in the process of knowledge production
            </span>,
            <span key="2f317172">
              Design for more complete knowledge, not total knowledge
            </span>,
            <span key="2f317173">
              Probe the history of visualization for future ideas
            </span>,
          ]}
          forViewers={[
            <span key="75cf526a">
              Remember that histories are shaped by power
            </span>,
            <span key="6d2691fc">
              Expand your ideas about what visualization includes
            </span>,
            <span key="9650286d">Recognize that you can create knowledge</span>,
            <span key="2f317175">
              Ask whose knowledge is missing from what you see
            </span>,
          ]}
        />
      </ChapterBody>
      <CenteredLayout>
        <FootnotesList footnotes={processFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
