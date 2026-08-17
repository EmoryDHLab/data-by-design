import { useState, lazy, Suspense } from "react";
import ChapterTitle from "~/components/ChapterTitle";
import { ChapterContext } from "~/chapterContext";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import PullQuote from "~/components/layout/PullQuote";
import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";
import CenteredLayout from "~/components/layout/CenteredLayout";
import Footer from "~/components/Footer";
import { dataFootnotes } from "~/footnotes";
import Quotation from "~/components/Quotation";
import InlineFootnote from "~/components/InlineFootnote";
import PlymouthCommitteeScrollytell from "~/components/data/plymouthCommitteeScrollytell/PlymouthCommitteeScrollytell";
import FootnotesList from "~/components/FootnotesList";
import SeraphiqueTour from "~/components/data/SeraphiqueTour";
import HoverText from "~/components/HoverText";
import Figure from "~/components/figures/Figure";

import figures from "~/data/figures/data.json";
import ClarksonSideBySideScrollytell from "~/components/data/ClarksonSideBySideScrollytell";
import ClientOnly from "~/components/ClientOnly";

const VoyagesVis = lazy(
  () => import("~/components/data/voyages/VoyagesVis.client")
);
import { chapterMetaTags } from "~/utils";
import ChapterBody from "~/components/layout/ChapterBody";
import VoyageScrollytell from "~/components/data/voyageScrollytell/VoyageScrollytell";
import Takeaways from "~/components/layout/Takeaways";
import ConsentToggle from "~/components/consent/Toggle";
import { chapterMeta } from "~/data/chapterMeta";
import VoyageVisContainer from "~/components/data/voyages/VoyageVisContainer";

import type { MetaFunction } from "react-router";
import type { HoverState, TVizAnchors } from "~/chapterContext";

const chapterFigures = Object.values(figures);

export const meta: MetaFunction = () => {
  return chapterMetaTags("data");
};

const sections = [
  {
    title: "Insight and Abstraction ",
    id: "insight-and-abstraction",
  },
  {
    title: "Graphical Authority and the God Trick",
    id: "graphical-authority-and-the-god-trick",
  },
  {
    title: "Visualizing Resistance ",
    id: "visualizing-resistance",
  },
  {
    title: "The Alternate Streams of Data Visualization",
    id: "the-alternate-streams-of-data-visualization",
  },
];

const visualizations: TVizAnchors[] = [
  {
    type: "visualization",
    id: "consent-explain",
    title: "Consent explainer.",
  },
  {
    type: "scrollytell",
    id: "scrollytell1",
    title: "Scrollytell One",
  },
  {
    type: "scrollytell",
    id: "scrollytell2",
    title: "Scrollytell Two",
  },
  {
    type: "visualization",
    id: "voyage-interactive",
    title: "Resistance Voyages",
  },
  {
    type: "scrollytell",
    id: "voyage-scrollytell",
    title: "Scrollytell 3",
  },

];

export default function BrooksPage() {
  const [hoverState, setHoverState] = useState<HoverState>(undefined);
  const [hideSensitiveState, setHideSensitiveState] = useState<boolean>(true);
  const [showFootnotes, setShowFootnotes] = useState<boolean>(false);

  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "dataPrimary",
        accentColor: "dataSecondary",
        accentTextColor: "black",
        footnoteTextColor: "dataPrimary",
        primaryTextColor: "white",
        footnotes: dataFootnotes,
        chapterFigures,
        visualizations,
        disclosure: true,
        hoverState,
        setHoverState,
        hideSensitiveState,
        setHideSensitiveState,
        sections,
        showFootnotes,
        setShowFootnotes,
      }}
    >
      <ChapterTitle
        title={chapterMeta.data.title}
        subtitle={chapterMeta.data.subtitle}
      />

      <ChapterBody>
        <CenteredLayout>
          <Quotation
            quote={
              <>
                Before there are data, there are people. People who offer up
                their lives as data — or whose lives become data without
                consent.
              </>
            }
          />
          <p className="first-paragraph">
            It was a long and circuitous—and often painful—path that, in
            January of 1777, led Olaudah Equiano to London. The famed author
            and abolitionist was born in the Igbo area of the kingdom of
            Benin, in what is now southeastern Nigeria.
            <InlineFootnote index={0} />Kidnapped from his birthplace at the
            age of 11 and carried to the Atlantic coast, he was then forced
            aboard a slave ship. There Equiano encountered “a multitude of
            black people of every description chained together,” as he
            recalled in his autobiography.
            <InlineFootnote index={1} />He was taken to Barbados and then to
            Virginia, where he was sold. Equiano would remain enslaved for
            almost 20 years.
          </p>
          <p>
            By the time that Equiano settled in London, he had been free for
            over a decade; in 1766, Equiano had purchased himself, and
            therefore his freedom, with earnings from his personal trading
            business. But his experience of enslavement was never far from
            his mind. And so in the late 1780s, as the British antislavery
            movement began to coalesce, Equiano grew increasingly involved.
            Through this activism Equiano became acquainted with Thomas
            Clarkson, a leading white abolitionist and key member of the
            London Committee of the Society for Effecting the Abolition of
            the Slave Trade (SEAST).
            <InlineFootnote index={2} />Thus when, in early 1789, Clarkson
            received a copy of a diagram created by the Plymouth Committee of
            SEAST entitled “Plan of an African Ship’s Lower Deck with Negroes
            in the Proportion of Only One to a Ton,” he knew exactly whom he
            should ask to confirm the truth of what he saw.
            <InlineFootnote index={3} />
          </p>

          <p>
            The diagram that Clarkson showed to Equiano depicted the
            configuration of captive bodies in the hold of a slave ship—a
            “scene of horror almost inconceivable,” as Equiano, in his
            autobiography, described his own first view into the hold.
            Indeed, Equiano’s friend and fellow antislavery activist Quobna
            Ottobah Cugoano had internalized his similar experience as such a
            trauma that, in his own 150-page treatise on the subject, he
            chose not to describe it at all.
            <InlineFootnote index={4} />But in the diagram that Clarkson
            received from the Plymouth Committee, and that he shared with
            Equiano, Clarkson believed he’d found the key to conveying the
            depth of this inhumanity to his white compatriots. The diagram,
            which Clarkson would go on to revise and extend, publishing it in
            March of that year as “Description of a Slave Ship,” would
            create an “instantaneous impression of horror upon all who saw
            it,” he later recalled, and would compel them to join the
            abolitionist cause.
            <InlineFootnote index={5} />
          </p>

          {/* blur-none does not transition, that's whats up with the blur-[0px] */}
          <div className="flex justify-center w-96 pt-12 m-auto">

            <img
              className={`h-96 p-4 drop-shadow-md transition-all duration-1000 ${
                hideSensitiveState ? "blur-md" : "blur-[0px]"
              }`}
              src={`/images/${figures["0102-equiano"].chapter}/${figures["0102-equiano"].fileName}.jpg`}
              alt=""
            />
          </div>

          <div
            id="consent-explain"
            className="flex text-lg md:text-xl flex-row items-center ms-8 md:ms-0 pt-12 space-x-6 md:mb-8"
          >
            <div className="w-auto md:w-1/6 flex justify-center">
              <span className={`inline-flex justify-center`}>
                <ConsentToggle
                  className="h-12 w-12 md:h-20 md:w-20 p-0.5 md:p-2"
                  id="big-toggle"
                />
              </span>
            </div>
            <div
              id="toggle-description"
              className="font-power md:w-4/6 text-lg leading-tight md:text-xl"
            >
              <p className="  md:block">
                <span className="font-bold prose">
                  {" "}
                  This chapter contains images of enslavement.{" "}
                </span>{" "}
                This button will show or hide sensitive images. It will remain
                below throughout the chapter.
              </p>
            </div>
          </div>
          <p>
            The “instantaneous impression of horror” that Clarkson hoped his
            diagram would prompt was, like all carefully engineered viewing
            experiences, the result of countless hours of research and
            design. Given Clarkson’s choice of words—in particular, the
            “instantaneous impression”—it is safe to say that the diagram
            represented the culmination of over two centuries of thinking
            about the value of empirical evidence and the impact of giving it
            visual form.
            <InlineFootnote index={6} />As we learned in the introduction,
            the idea that quantitative information could be visualized as
            data, perceived by the eyes, and then processed into knowledge
            had been steadily coalescing from the earliest expressions of
            empiricist philosophy, and from an increasingly wide range of
            examples of how information could be abstracted into images that
            the eye could perceive.
          </p>

          <p>
            This intellectual genealogy in fact easily aligns with the
            standard story we tell about the origins of modern data
            visualization. But with the “horror” that Clarkson engineered his
            chart to produce, the expanded origin story of visualization—the
            one that includes its connections to colonialism and, as we will
            learn in this chapter, slavery—also enters the frame. This
            expanded origin story underscores its tremendous power to
            distill complex information such that insight can easily and
            efficiently emerge. At the same time, it reminds us—both those
            who design visualizations and those who perceive them—how the
            abstraction that is required to efficiently produce this insight
            always, and <em>necessarily</em>, comes at the expense of
            additional detail.
          </p>
          <p>
            SEAST’s slave ship diagrams remind us that before there is data
            there are people—people who contribute to the production of
            data, and people who themselves become data, not always with
            consent. As we will see as this chapter unfolds, the act of
            transforming people into data, and of putting that data on
            display, are both acts of power. But that power is not
            guaranteed to be a benevolent force. Centering SEAST’s
            visualization work in the story we tell about data visualization
            is therefore long overdue, because it requires that we recognize
            the responsibility that comes with the power of visualizing
            data—the power to frame what it is possible to see, and thus to
            know.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[0]}></ChapterSectionTitle>
        <CenteredLayout className="pb-20">
          <p className="first-paragraph">
            The original engraving Clarkson showed to Equiano is attributed
            to the Plymouth Committee as a collective, but is generally
            believed to have been designed by a single man: William Elford,
            the Committee’s chairman and a veritable polymath. A banker by
            trade, Elford was also an acclaimed painter who had shown at the
            Royal Academy of Arts and an amateur scientist who had been
            elected to the Royal Society, the highest scientific honor of the
            time.
          </p>
          <p>
            Supplementing this range of skills were both domain expertise and
            class privilege: Elford had family ties to the Royal Navy, and as
            a result had early access to a report being prepared by one of
            its naval captains. Earlier in the year, a group within the
            British Parliament had tasked the captain, Parrey, with
            investigating the ships docked in Liverpool that were involved in
            the transatlantic slave trade.
            <InlineFootnote index={7} />This investigation took both
            quantitative and qualitative form; in addition to taking precise
            measurements of the ships and scrutinizing muster rolls—lists of
            crew members aboard any particular ship—Parrey also interviewed
            the captains and sailors of the ships themselves, learning
            otherwise undisclosed information about the perils faced by both
            captives and crew.
          </p>
          <p>
            The art historian Cheryl Finley, whose{" "}
            <cite>Committed to Memory</cite> explores the origins and
            evolving significance of these charts in detail, speculates that
            among the “most useful” artifacts from Parrey’s report were the
            hand-drawn diagrams of the ships created by the captains
            themselves.
            <InlineFootnote index={8} />Intended as “a type of visual
            shorthand apparently used to increase the efficiency of packing
            ships,” these sketches, for their abolitionist viewers, likely
            became a graphic call to arms.
            <InlineFootnote index={9} />Elford, for one, saw a direct visual
            depiction of the dehumanization that was required in order to
            reduce human lives into commodity goods on the part of slavery’s
            profiteers.
          </p>
          <p>
            As you have already experienced, we made the decision to hide the
            visual details of Elford’s “Plan,” and the other sensitive images
            discussed in this chapter, until you could be more prepared for
            what you might see. We made this choice because of the range of
            harms that can be brought about by engaging with the archive of
            slavery without warning, context, or consent.
            <InlineFootnote index={10} />If you would now like to see
            Elford’s version of the diagram, you can do so by clicking the
            toggle at the bottom right of the screen. Or you may choose to
            continue to see the blurred-out images, accompanied by
            generalized descriptions of what the images show.
          </p>
          <p>
            As some of you have also already experienced, we provide a
            parallel choice for those of you who rely on alt-text to process
            visual media. In this case, the toggle at the top left of the
            page switches between generalized and detailed descriptions of
            the images. Both modes of encounter are informed by the concept
            of <em>progressive disclosure</em>, an idea formulated by Silas
            Munro, a member of our project team. By this he means a mode of
            presentation that gradually introduces individual elements of
            the most sensitive images included this chapter, so that the
            reader is not subjected to the same experience of visceral and
            immediate horror that SEAST intended with their charts. While
            this decision runs counter to the Society’s original goal, our
            encounter with these images over two hundred years after they
            were first shown serves a different purpose: to understand how
            the charts’ designers were able to leverage a combination of
            abstraction and detail in order to achieve their catalyzing
            effects.
          </p>
          <p>
            Even progressively disclosed, the diagrams remain as viscerally
            affecting as they are visually impossible. In the original
            Elford diagram—the one on the previous set of pages, and that
            Equiano saw—viewers see the ship from above, as if they are gods
            in the heavens. The top deck of the ship has been removed, so
            that the viewer can see directly into the hold. (Later we will
            return to this strategy of what is, in fact, a “god trick,” as
            feminist philosopher Donna Haraway describes.)
          </p>
        </CenteredLayout>

        <PlymouthCommitteeScrollytell
          triggers={[
            <span key="07226c6e">
              The hold is divided into four main areas.
            </span>,
            <span key="a400ea46">
              The largest, in the bow of the ship, and which occupies the
              entire right half of the diagram, is labeled the “Mens room,”
              and depicts 120 men’s bodies in four rows of 24. Another 24
              figures fit into the curved space closest to the front of the
              bow.
            </span>,
            <span key="e6184ce7">
              In the middle is a narrow area labeled “Boys room” which
              depicts shorter figures in five rows of 12.
            </span>,
            <span key="aebd268b">
              To its left is the larger “Womens room,” depicting figures the
              same size as the adult men, but with breasts. They are depicted
              in four rows of 21, representing 84 women in total.
            </span>,
            <span key="b1f566ad">
              At the stern is the “Girls Room,” the figures shorter and
              squatter than the boys, arranged in three rows of 10.
            </span>,
            <span key="d90523c5">
              Together, these “scaled inequalities,” as Black feminist theorist
              Hortense Spillers describes them, literalize the process of
              “dehumanizing, ungendering, and defacing” at the heart of the
              Middle Passage.
              <InlineFootnote index={11} />
            </span>,
          ]}
        />

        <TwoColumnLayout>
          <Column shouldPin={true}>
            <p>
              We do not know with certainty whether Elford was familiar with
              an earlier, more literal depiction of a slave ship, the Marie
              Séraphique, which dates to around 1770. This image, commissioned
              by the ship’s owner to commemorate the “successful” return of
              its first slaving voyage, presents{" "}
              <HoverText hoverState="hold">
                a view of the hold—and
              </HoverText>{" "}
              the captives within it—as one of{" "}
              <HoverText hoverState="crossSections">
                four plans of the ship’s levels
              </HoverText>
              . The image also includes a{" "}
              <HoverText hoverState="watercolor">
                watercolor of the ship arriving in Loango
              </HoverText>
              , in what is now the Republic of Congo, where the 312 captives
              were first purchased by the French captain, as well as{" "}
              <HoverText hoverState="tables">
                data about the voyage presented in what was by then standard
                tabular form
              </HoverText>
              .<InlineFootnote index={12} />Beside a table breaking down
              counts of various “items of trade” sits another, in
              near-identical form, labeled “Products of Loango.” The numbers
              here refer to people, sorted by gender and age and whether or
              not they survived the voyage.
            </p>

            <p>
              This visual presentation of people as data—a literal headcount,
              as project team member Margy Adams has observed—reinforces the
              claims made by historians of slavery, such as Jessica Marie
              Johnson, that data itself “is the evidence of terror, and the
              idea of data as fundamental and objective information … obscures
              rather than reveals the scene of the crime.”
              <InlineFootnote index={13} />Unlike the “cartoon figures” in
              Elford’s diagram, as Spillers describes them, the captives in
              this image are each individually drawn.
              <InlineFootnote index={14} />They are shown lying on their
              sides.{" "}
              <HoverText hoverState="nakedPeople">
                Most are naked, but several are clothed.
              </HoverText>{" "}
              The{" "}
              <HoverText hoverState="shackledMen">men are shackled</HoverText>
              —some with their arms and legs shackled to each other; others
              shackled two by two.{" "}
              <HoverText hoverState="nursingMother">One woman</HoverText>{" "}
              nurses a child.
            </p>

            <p>
              Whether or not Elford saw this particular “Plan,” he clearly
              considered what he would give visual form—and also what he
              would not. In contrast to the diagram of the Marie Séraphique,
              the two areas of Elford’s diagram labeled “store room” are left
              blank, even as they were presumably similarly packed with{" "}
              <HoverText hoverState="nonhumanCargo">
                barrels and other dry goods
              </HoverText>
              . The white space of the storerooms instead emphasizes the
              rhetorical point of Elford’s diagram: that nothing was more
              important than the packing of <em>people</em> as cargo on
              these ships.
              <InlineFootnote index={15} />
            </p>
            <p>
              At the same time, Elford could not but participate in this
              process of dehumanization, however inadvertently. A large part
              of how the diagram achieves its visual impact is the way its
              294 human souls are drawn as nearly identical figures—what
              literary scholar Marcus Wood describes as a “mass of black
              human flesh.”
              <InlineFootnote index={16} />The figures’ collective rather
              than individual significance is further accentuated by their
              being set against the clean outlines of the ship.
              <InlineFootnote index={17} />The labels associated with each
              area, engraved in neat script, accentuate this reduction in
              complexity—which is, of course, a reduction in humanity as
              well.
            </p>
            <p>
              It is here that the significance of the diagram for the larger
              practice of data visualization begins to cohere: Elford’s
              design achieves its success because of its strategic use of
              abstraction. It represents the captives as almost
              proto-Isotypes, rather than individual people with unique
              bodily features and distinct inner lives.
              <InlineFootnote index={18} />In so doing, he “induce[s] the
              viewer to think about the substance” of the data of the slave
              trade, to employ Edward Tufte’s language of graphical
              excellence, rather than specific people on specific ships.
              <InlineFootnote index={19} />Yet Elford achieves his visual
              tour de force by stripping away the individual lives behind
              each datapoint—the lives that, paradoxically, he designed his
              charts in order to support.
            </p>
            <p>
              What should we do about this unavoidable tension, either as
              viewers of visualizations or as designers of them? The answer
              is not that we should reject visualization out of hand. It is,
              rather, that we must always consider what is lost in the
              process of visualizing data at the same time as we consider
              what is gained.
            </p>
            <PullQuote
              quote="The abstraction that is required to produce insight always—and, necessarily—"
              subquote="comes at the expense of the full complexity of the phenomenon that it represents."
            />
            <p>
              “Plan of an African Ship’s Lower Deck” also reminds us, with
              its subject most profound, that there are always aspects of
              human experience that visualization cannot convey. No diagram
              can ever express the full extent of the brutality and
              degradation that was required to enforce the enslavement of
              otherwise equals. No diagram can ever fully communicate the
              “horror almost inconceivable”—to return to Equiano’s chilling
              words—to those who did not personally experience it; nor can
              any diagram appropriately convey the additional trauma that
              others, like Cugoano, chose to keep suppressed. But the
              lesson, here, is not of the futility of visualizing data. It
              is, rather, one of hope: that with the image of the slave ship
              indelibly etched in our minds, we will keep both the power and
              limits of data visualization together in view.
            </p>
            <p>
              The power to produce an “instantaneous impression” remains
              among visualization’s greatest strengths—what Fernanda Viégas,
              who created the “Wind Map” that appears in this book’s
              introduction, calls its “superpower.”
              <InlineFootnote index={20} />But just as we consider that
              power, we must also consider our responsibility for the
              insights that our visualizations produce, as we do for the
              detail and context—and in this case, the lives—that
              visualizations on their own cannot convey.
            </p>
          </Column>
          <Column shouldPin>
            <SeraphiqueTour figure={figures["0103-marieseraphique"]} />
          </Column>
        </TwoColumnLayout>

        <ChapterSectionTitle section={sections[1]} />

        <TwoColumnLayout>
          <Column shouldPin>
            <p className="first-paragraph">
              As William Elford was scrutinizing the Parrey report, Thomas
              Clarkson was pursuing his own research into the pernicious nature
              of the slave trade. Like Parrey, Clarkson began by transforming
              the available records into data. He visited merchant halls in
              order to examine the muster rolls stored there, and used them to
              compute mortality rates among the sailors aboard the ships. (The
              dangers of the slave trade to the sailors, who were predominantly
              white, would become a highly persuasive piece of evidence in the
              argument for its abolition.) While examining the muster rolls,
              Clarkson also covertly transcribed 20,000 of the sailors’ names.
              He then sought out individual sailors—primarily those who had been
              mistreated or maimed—whom he thought might be willing to speak
              about the conditions aboard the ships (both those that they
              personally experienced and those of the captives that they
              observed). These efforts at an early form of counterdata
              collection, complemented by what was, in effect, mixed-methods
              research, underscore how Clarkson understood the value of
              empirical evidence—qualitative as well as quantitative—in
              advancing his abolitionist claims.
              <InlineFootnote index={21} />
            </p>

            <p>
              Clarkson’s awareness of the value of evidence of multiple forms,
              and of the value of multiple forms of display, strongly influenced
              his revisions to the original diagram. While Elford and the
              Plymouth Committee had first printed the diagram as a companion to
              a four-page abolitionist pamphlet, and later as a broadside
              version with the image at the top, it was Clarkson who insisted
              that the London Committee’s version also include data tables. The
              tables included measurements of the ship, the <cite>Brooks</cite>,
              that had been used as a model for the diagram, and a conversion
              scale that indicated precisely how much square footage had been
              intended to be allocated to each captive on the chart. A second
              set of tables enabled a comparison between the number of captives
              who had actually been held on the original ship and the smaller
              number depicted in the diagram. This additional information was
              intended to “give a representation of the trade against which no
              complaint of exaggeration could be brought.”{" "}
              <InlineFootnote index={22} />
            </p>
            <p>
              Clarkson’s attention to the strategic deployment of data also
              underscores the fact that “Description of Slave Ship” was, like
              its predecessor, a data visualization. The SEAST diagrams have at
              times been dismissed from the visualization pantheon because of
              their explicit political objectives, which go against the
              presumption of visualization’s neutrality—a myth we will continue
              to dismantle in Chapter 2.
              <InlineFootnote index={23} />They are also sometimes left
              unconsidered altogether because they are often presumed to picture
              the data of one specific ship—that is to say, a form of direct
              rather than abstract representation. But Clarkson’s extensive
              commentary on his methodological choices makes clear that his
              “Description,” like Elford’s “Plan,” involved a synthesis of data
              from multiple sources. More than that, it satisfies both of the
              core criteria of that era’s definition of data visualization, as
              Michael Friendly and Howard Wainer propose: making “previously
              invisible phenomena subject to direct inspection,” and making
              those phenomena “palpable and concrete.”
              <InlineFootnote index={24} />
            </p>
          </Column>
          <Column shouldPin>
            <Figure figure={figures["0104-description"]} />
          </Column>
        </TwoColumnLayout>

        <ClarksonSideBySideScrollytell />

        <CenteredLayout>
          <p>
            The combined effect of these changes was a diagram that engaged
            the viewer through two very different epistemological registers,
            both at the same time: first, as a representation of the data
            that, through its use of naval convention, conveyed its graphical
            authority; and second, as an intentionally evocative graphic that
            was intended to elicit a combination of sympathy and shock. The
            desired result was that the viewer would perceive the
            “inhumanity of the trade” through the eyes and the heart at the
            same time and, prompted by the “instantaneous impression” that
            it made on the senses, be compelled to act.
            <InlineFootnote index={28} />
          </p>
          <p>
            At this point, one previously unstated detail must now be made
            explicit: these viewers, like the captives, had a race. They
            were white, predominantly British and predominantly men, with
            lives far removed from the experience of enslavement. In fact,
            Clarkson had an even more specific audience in mind: the members
            of the British Parliament, scheduled to vote on a motion to
            abolish the slave trade in several weeks’ time. One of the
            London Committee’s own members, William Wilberforce, was among
            them, and he believed, and said as much, that if the MPs “could
            actually <em>see </em>one thousandth part of the evils of that
            practice which they have, for so many years, under one pretense
            or another, been prevailed on to suffer to be continued,” they
            would quickly commit themselves to the abolitionist cause.
            <InlineFootnote index={29} />
          </p>
          <p>
            Here is where we return to the idea of the “god trick,”
            mentioned at the outset of this chapter. The “god trick” is an
            idea developed by Donna Haraway to describe the false sense of
            neutrality conveyed through the default perspective of data
            visualization, the “view from above.”
            <InlineFootnote index={30} />The view from above can seem
            godlike, but it is a “trick” because it preys upon our general
            tendency not to notice, let alone question, any perspective that
            adheres to the default. In this particular case, the seemingly
            godlike perspective is, in fact, the perspective of
            “predominantly white and male abolitionists and lawmakers,” as
            sociologist Simone Browne observes.
            <InlineFootnote index={31} />
          </p>
          <p>
            Given Clarkson’s own writing on the subject, he would likely not
            disagree with Browne’s assessment of his intended audience.
            Clarkson celebrated how his chart “brought forth tears of
            sympathy in behalf of the sufferers, and it fixed their
            sufferings in [the viewer’s] heart.”
            <InlineFootnote index={32} />But Browne’s analysis of “the
            primacy given in these abolitionist texts to white gazes and
            vantage points to the trauma of slavery,” pushes us, as
            twenty-first-century viewers, to see even more.
            <InlineFootnote index={33} />Looking closely:
          </p>
          <Quotation
            quote={
              <span>
                One can see that each of the tiny black figures are not replicas
                of each other; rather, some have variously crossed arms,
                different gestures, or seem to turn to face one another, while
                some stare and look back at the gaze from nowhere, and in so
                being the <cite> Description of a Slave Ship</cite> can also be
                understood as depicting black looks and the trauma of Middle
                Passage as multiply experienced and survived.
                <InlineFootnote index={34} />
              </span>
            }
            byline={<span>Simone Browne</span>}
          />
          <p>
            Did Clarkson intend to depict the captives looking back at the
            viewer, challenging their gaze? Or was it just that, in his
            commitment to accurate representation, he could not help
            depicting the captives’ resistance, in ways both large and
            small? These questions lack definitive answers, but their
            possibilities are what matter more. What would it mean to
            visualize the experience of the Middle Passage from the
            perspective of the captives themselves? What new knowledge, if
            any, might this visualization bring to light? And for whom might
            this, instead, further perpetuate harm?
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[2]} />
        <CenteredLayout>
          <p className="first-paragraph">
            These were the very questions that I, Lauren, brought to the{" "}
            <cite>Data by Design</cite> project team. I also brought a
            dataset: a full download of the transatlantic portion of the
            Voyages Database, which (as of spring 2026) contains records of
            36,150 unique slaving voyages that took place between the years
            1514 and 1866, resulting in the captivity and forced migration of
            an estimated 10.6 million souls.
            <InlineFootnote index={35} />
          </p>
          <p>
            Ever since the first release of the database, in 1999 via
            CD-ROM, scholars and designers have attempted to give this
            powerful data visual form.
            <InlineFootnote index={36} />Perhaps most prominently, in 2016,
            Andrew Kahn and Jamelle Bouie produced an animated visualization
            of the data for <cite>Slate</cite>, the online magazine, which
            depicted each of the 20,528 voyages then in the database as
            small black dots seemingly pulled from the west coast of Africa
            to the Americas as if by magnetic force.
            <InlineFootnote index={37} />The visualization was roundly
            critiqued by scholars of slavery for the god’s-eye perspective
            that it adopts. As literary scholar Britt Rusert asserts, “It’s
            as if a series of ‘invisible hands’ operate the trade,” rather
            than specific people who should be condemned for their acts.
            <InlineFootnote index={38} />Although she does not formulate her
            critique in these exact terms, what Rusert identifies is another
            version of the “god trick” at work.
            <InlineFootnote index={39} />
          </p>
          <p>
            Reflecting on this visualization, as we considered whether a
            different depiction of the Middle Passage might be possible,
            enabled us to clarify our task. We first considered the
            provenance of the dataset, and contemplated how the shipping
            logs and other data tables that served as its primary
            sources—like the table associated with the plan of the{" "}
            <cite>Marie Séraphique</cite>—were created by the enslavers and
            not the enslaved. This reminded us of the power relations
            embedded in the data, and of how that power contributed to a
            range of omissions and gaps. We also considered our own subject
            positions, and the fact that, among the five of us collaborating
            on this particular visualization, only one of us was connected
            to ancestors who had themselves been enslaved. This prompted a
            recognition on behalf of the group that there were certain
            stories about the data that were not ours to tell, and,
            following scholar of slavery Saidiya Hartman, should be left for
            others to convey.
          </p>
          <p>
            Finally, we returned to Jessica Marie Johnson’s powerful
            statement, in her “Markup Bodies” essay, that “there is nothing
            neutral, even in a digital environment, about doing histories of
            slavery.”
            <InlineFootnote index={40} />This called us back to the range of
            harms that can be brought about by engaging with this history, as
            discussed earlier in this chapter, and to how data visualization
            is not immune. We saw the potential for “second-order violence,”
            as Hartman terms it, both in reanimating a dataset that in its
            original form conscribed the people it represented to living
            death, and in controlling the layout and motion of data
            documenting the forced migration of so many. In order to better
            represent the enslaved as they lived, and not further reinforce
            how they were reduced to data, we would need a visual strategy
            that could draw out meaningful facets of the dataset while
            simultaneously reinforcing just how much about each life the
            data could not show.
            <InlineFootnote index={41} />
          </p>
          <PullQuote quote="To honor the enslaved as they lived, and not as they were reduced to data, we would need a visual strategy for showing just how much about these lives the data could not show." />
        </CenteredLayout>

        <VoyageScrollytell
          triggers={[
            <span key="490b6e1c">
              We began our prototyping process, as many do, by examining the
              summary statistics of our dataset. But few facets of the
              data—counts of ships and people, and, more chillingly,
              prices—seemed to hold any possibility of being productively
              reframed.
              <InlineFootnote index={42} />
            </span>,
            <span className="block" key="38d0f8a6">
              One variable, however, labeled “resistance,” seemed to provide
              an opening.
            </span>,
            <span className="block" key="8e1ece04">
              It contained seven subcategories of resistance that might have
              taken place on any particular journey. Could we use it to
              create a visualization that “looked back at the gaze from
              nowhere”?
            </span>,
            <span className="block" key="cd4ac8ca">
              We began by pulling out the voyages that had any form of
              resistance associated with them, as well as six of the more
              basic variables that were associated with each journey.
            </span>,
            <span className="block" key="156434b0">
              Because our motivation was to visualize the dataset from the
              perspective of the enslaved, our design process began by
              focusing on a frequent observation: that the captives did not
              experience time as linear while in the hold of the ship.
              <InlineFootnote index={43} />
            </span>,
            <span className="block" key="963d2d76">
              Drawing visual inspiration from Harold Fisk’s alluvial diagram
              of the Mississippi River, we decided to use bends and turns to
              represent the nonlinearity of the Middle Passage.
              <InlineFootnote index={44} />
            </span>,
            <span className="block" key="a2565c78">
              We retained the diagram’s vertical orientation so that the
              paths could not be read as corresponding to any actual location
              on a map.
            </span>,
            <span className="block" key="e7a1c4b9"></span>,
            <span key="d4c5b977">
              <span className="block mb-8">
                We represented each voyage as a snaking line, its color
                randomly selected from our Fisk-inspired palette.
              </span>
              <span className="block">
                Shiyao Li, the primary computer science researcher on our
                team, had the idea to call these rivulets “binds,” since what
                they represented was not the freedom of movement that comes
                with flowing water, but its opposite: a form of bondage often
                described as “living death.”
                <InlineFootnote index={45} />
              </span>
            </span>,
            <span className="block" key="2356b657">
              The width at the top of each bind corresponds to the number of
              captives who were taken from any location in Africa. The width
              at the bottom corresponds to the number who arrived in the
              Americas having survived.
            </span>,
            <span className="block" key="577fe346">
              The duration of each voyage is conveyed through the amplitude of
              each bind, but plotted from side to side. Encoded in this way,
              the longer voyages have wider sideways curves, and the shorter
              voyages narrower and more direct paths.
            </span>,
            <span className="block" key="90c3c7eb">
              While Fisk’s original design superimposes the floodplains of
              the Mississippi from all points in time on a single image, we
              chose to retain the start and end date of each voyage, since
              the rise and fall of the slave trade—and the resistance that
              met it throughout—seemed like a crucial feature of the data to
              convey.
            </span>,
            <span className="block" key="b3f8d1c2">
              In our visualization, the binds are arranged chronologically,
              from the first recorded act of resistance aboard a slave ship
              in 1565, on the far left, through the last in 1865, on the far
              right. Since the majority of the voyages lacked data on the
              month or day of departure, we grouped the voyages by year.
            </span>,
            <span className="block" key="cf140bd8">
              The visual effect of this decision is not visible when viewing
              the voyages all at once. But zooming in on a single timespan
              exposes these clusters for closer inspection.
            </span>,
            <span className="block" key="7ed03972">
              Consider the time span between 1756 and 1766, the decade during
              which Olaudah Equiano was enslaved. Within each year, we can see
              that the binds overlap—what is called “occlusion” in
              visualization design. Occlusion is generally viewed as
              something to avoid. But we made the decision to not further
              separate the voyages, since viewing them together communicates
              their collective force.
            </span>,
            <span className="block" key="8562b8b3">
              The voyage that took Equiano from Benin to Barbados and on to
              Virginia is not pictured in this chart, however, because it did
              not include a form of resistance that was documented in the
              dataset.
            </span>,
            <span key="f754f6ea">
              <span className="block mb-8">
                But it might have been included among the 35,578 additional
                voyages that the dataset contains. This was our inspiration
                to plot these voyages alongside the “resistance” voyages,
                further troubling the distinction between the voyages that
                included documented acts of resistance and those that did
                not.
              </span>
              <span className="block mb-8">
                With these additional voyages plotted, distinguished from the
                others by their lack of color fill, we observed a visual
                transformation that we had not intended, but that aligned
                with our conceptual goals: the binds were transformed into
                life-affirming arteries, enclosed within the sinews of human
                flesh.
                <InlineFootnote index={46} />
              </span>
              <span className="block">
                As evocative as this visualization may be, there are many
                other forms of resistance that it still does not represent.
              </span>
            </span>,
            <span className="block" key="0b8820f6">
              In his autobiography, for example, Equiano recalls observing
              acts of resistance that were set in motion but ultimately
              “prevented by the ship’s crew.” These acts of resistance likely
              had concrete effects, both for the captives and for the crew.
              But as unfinished acts of resistance, they would have gone
              unrecorded in the dataset, as they did not meet its criteria
              for inclusion.
            </span>,
            <span key="8f72225a">
              <span className="block mb-8">
                We might also consider the myriad smaller acts of resistance,
                including those in which Equiano himself engaged. Upon first
                being captured, for example, Equiano refused to eat; and when
                his captor attempted to rename him, depriving him of his
                identity and his Ibo roots, he explains, “I refused to answer
                to my new name.”
                <InlineFootnote index={47} />
              </span>
              <span className="block">
                These more “quiet” forms of resistance, as literary scholar
                Kevin Quashie might term them, were also real, and also
                meaningful, even as they remain difficult to represent as
                data at all.
                <InlineFootnote index={48} />
              </span>
            </span>,
            <span className="block" key="c68f1d3b">
              In our final view, we decided to leverage the power of
              visualization to amplify these quiet acts. We display all
              36,150 voyages with a color fill, selected from the same color
              palette as the visualization of only the resistance voyages.
              The implication of this choice, we hope, is clear: that every
              single journey documented in the Voyages Database involved acts
              of resistance—some that were recorded as “resistance” voyages,
              some that took place but went unrecorded as “resistance,” and
              some that defied recording at all.
            </span>,
            <span className="block" key="a5c2e9f0">
              What we were visualizing in the end, our process allowed us to
              see, was not actually the Middle Passage, but the data it had
              left in its wake.
            </span>,
            <span key="cdd173c9">
              <span className="block mb-8">
                To underscore this point, we drew from common visualization
                techniques. But we did not use them in common ways. Instead
                of providing an overview first, and then “details on
                demand,” our visualization inverts this process. We begin
                with the details of the “resistance” voyages, but as the
                additional voyages are layered in, the viewer can no longer
                see clearly enough to deduce anything about a specific
                voyage.
              </span>
              <span className="block">
                This is intentional, because the insight that we seek to
                prompt exceeds the data on display. Our insight is this:
                that there are certain phenomena, such as the trauma of the
                Middle Passage, that we—in the present—can never fully
                understand.
              </span>
            </span>,
          ]}
        />

        <div id="voyage-interactive">
          <ClientOnly>
            <VoyageVisContainer>
              <Suspense
                fallback={<div className="p-4">Loading visualization...</div>}
              >
                <div className="scale-90 md:scale-100 origin-top">
                  <VoyagesVis
                    allVoyages
                    fullColor
                    interactive
                    axisBg="bg-offwhite"
                    border={false}
                    className="md:scale-x-90"
                  />
                </div>
              </Suspense>
            </VoyageVisContainer>
          </ClientOnly>
        </div>

        <ChapterSectionTitle section={sections[3]} />
        <CenteredLayout>
          <p className="first-paragraph">
            While it would take another nine years for the British Parliament
            to formally abolish the slave trade—and, according to the Voyages
            Database, an additional 1.5 million people or more forcibly
            separated from their homelands—historians generally credit
            “Description of a Slave Ship,” and Thomas Clarkson in particular,
            for playing a significant part in the campaign’s success.
            <InlineFootnote index={49} />Clarkson himself likely contributed
            to this narrative; in 1808, one year after the formal Act of
            Parliament, he published a celebratory two-volume tome,
            <cite>
              The History of the Rise, Progress, and Accomplishment of the
              Abolition of the Slave Trade by the British Parliament
            </cite>
            , which provided his own firsthand account of British abolition.
            <InlineFootnote index={50} />
          </p>
          <p>
            Interspersed among the <cite>History’s</cite> nearly 1,200 pages
            were four images. Among them were a revised version of
            “Description of a Slave Ship” and a new visualization that
            Clarkson himself designed. It depicts the history of abolition in
            the form of a watery network. Each of the “springs and rivulets”
            is labeled with the name of a significant abolitionist. The
            streams are arranged from top to bottom, roughly according to
            time, with horizontal lines separating efforts that took place
            before 1650, 1700, 1740, and 1787, respectively. As the viewer
            follows the streams down the page, they converge into “two great
            political rivers, representing the abolitionist movement in
            England and America,” which, while outside of the bounds of the
            page, presumably meet somewhere in the Atlantic.
            <InlineFootnote index={51} />
          </p>

          <Figure figure={figures["0113-history"]} />

          <p>
            On the surface, the metaphor of abolition as a network of
            streams and rivers flowing into a common sea may seem like an
            apt representation of a social movement which drew strength from
            countless individuals and collectives over an extended period of
            time. And yet, Clarkson’s sense of the movement’s “completion” is
            irrevocably flawed: certain key contributors are missing from his
            chart. Most notably, the name of Olaudah Equiano, or of any other
            Black abolitionist, is nowhere to be found.
          </p>
          <PullQuote quote="And yet, certain key contributors are missing from the chart. Most notably,  the name of Olaudah Equiano, or of any other Black abolitionist, is nowhere to be found." />
          <p>
            As with “Description of a Slave Ship,” the question of audience
            returns to the fore. This chart was also not designed for those
            who were enslaved, but rather for a white British
            viewership—those who sought to valorize their own role in the
            fight to end the slave trade. Marcus Wood questions Clarkson’s
            “strange reversal” of an otherwise easily interpretable visual
            metaphor—flowing water—which, in Clarkson’s hands, seems to
            suggest that the success of the movement should be attributed
            not to any human actor but instead to a “mysterious sea.”
            <InlineFootnote index={52} />The water metaphor is further
            clouded by the role that actual water—namely, the Atlantic
            Ocean—played in the slave trade. Why would Clarkson use the
            ocean—the very site of the dehumanization that was required of
            the condition of enslavement—as the anchoring metaphor of his
            abolitionist chart?
          </p>
          <PullQuote quote="Why would Clarkson use water—the very site of the dehumanization that enslavement brought about—as the anchoring metaphor of his account?" />
          <p>
            As it turns out, Clarkson was anchoring his diagram in some
            stable ground: namely, the then-prevalent use of water and
            streams to visually represent the passage of time. In{" "}
            <cite>Cartographies of Time</cite>, Daniel Rosenberg and Anthony
            Grafton position Clarkson’s diagram as a direct adaptation of the
            ideas expressed by the German chronologer Friedrich Strass, who
            had published his own widely circulated “Strom der Zeiten”
            (Stream of Time) only a few years earlier, in 1803.
            <InlineFootnote index={53} />Widely circulated across Europe and
            the United States, “Strom der Zeiten” was almost certainly a
            chart that Clarkson saw. Even if not, he clearly intuited how the
            water metaphor “gives greater liveliness to the ideas, and
            impresses events more forcibly on the mind, than the stiff
            regularity of the straight line,” as William Bell, the English
            translator of Strass’s chart, explains.
            <InlineFootnote index={54} />
          </p>
        </CenteredLayout>

        <CenteredLayout>
          <Figure
            className="md:grid grid-cols-2 gap-4"
            imageClassName="h-full"
            figures={[figures["0114-stream"], figures["0115-bell"]]}
          />

          <p>
            Indeed, there is a version of the history of data visualization
            that, without too much reconfiguring, provides Clarkson with a
            more prominent place. Many scholars, including Rosenberg and
            Grafton, have made the case that chronological charts such as
            those created by Strass and Bell, as well as their more linear
            antecedents, “cleared the way for statistical graphics” by
            introducing the idea of consistent scale.
            <InlineFootnote index={55} />This argument is confirmed by the
            purported “pioneer” of statistical graphics himself, William
            Playfair, the subject of the next chapter, who praised the genre
            for “making space represent time,” and for using “a line of
            proportional length and in a suitable position.”
            <InlineFootnote index={56} />As we will learn, Playfair described
            the purpose of his own visualizations in terms quite similar to
            Clarkson’s: to unite “a number of separate ideas … under one
            simple impression of vision, and consequently, one act of
            memory.”
            <InlineFootnote index={57} />
          </p>
          <PullQuote quote="But to simply slot Clarkson into the standard history of the field would miss much of the point." />
          <p>
            But to simply slot Clarkson into the standard history would miss
            this chapter’s point: his visualizations matter for the
            questions as much as the insights they prompt. When we ask about
            the perspectives of the people for whom these charts have been
            designed, the people who will benefit from looking at them, and
            the people who are merely looked at, we begin to see whose data
            is truly on view in any particular chart. And when we consider
            that additional context, and the potential for violence or harm,
            that a visualization might, however inadvertently, bring about,
            we come to see the responsibility that we hold as viewers of
            data visualizations—and as designers of them as well.
          </p>
          <PullQuote
            quote="It also underscores how, if the goal of a visualization is to bring about change,"
            subquote="then it must necessarily be accompanied by action."
          />
          <p>
            We will never know if Equiano posed questions like these to
            Clarkson upon seeing the original “Plan”; there is no record of
            the contents of the conversation that transpired. Several weeks
            later, however, Equiano published a letter in{" "}
            <cite>The Public Advertiser</cite>, a prominent London newspaper,
            in which he acknowledged “having seen” the Plymouth Committee’s
            chart.
            <InlineFootnote index={58} />Equiano does not comment directly on
            the image, choosing instead to affirm the abolitionist movement
            overall. But I believe that we can still learn from his statement
            about what he saw. By offering his statement, Equiano confirms
            that he saw clear evidence that the chart’s designers sought to
            “contribute to so important a moral and religious duty as that
            of” ending the slave trade. But he also communicates his belief
            that the chart alone would not be enough to complete the task. As
            a person who had himself been enslaved, Equiano understood
            firsthand that ending “one of the greatest evils now existing on
            earth” would require more than a single chart.
          </p>
          <p>
            With this statement we return to this chapter’s epigraph: before
            there is data, there are people, with lives that data alone
            cannot convey. Equiano’s story lets us see, too, that if the goal
            of a visualization is to bring about change, it must necessarily
            be accompanied by action. We will return to this topic in the
            chapters to come, as we consider the ways that design processes
            (chapter 3) and design outputs (chapter 5) can better serve the
            people whose struggles for justice and dignity we seek to
            support. Here, however, we seek to make a broader point, since
            not all visualizations are designed with a goal of liberation in
            mind, and that is perfectly fine. Placing the SEAST diagrams at
            the center of the story we tell about the emergence of modern
            data visualization matters in these other contexts as well—and
            perhaps even more. For the SEAST diagrams do not ask but{" "}
            <em>demand</em> that we recognize the responsibility that comes
            with designing and viewing data visualizations. By attempting to
            picture the most monumental of humanity’s stakes, the SEAST
            diagrams serve as a constant reminder to always ask about the
            forms of knowledge that a visualization can illuminate—and what
            it cannot show.
          </p>
        </CenteredLayout>
        <Takeaways
          forDesigners={[
            <span key="df782d45">Balance abstraction and detail</span>,
            <span key="6440631a">
              Ask who may benefit and who may be harmed
            </span>,
            <span key="2f317172">
              Probe any missing data and ask why it is missing
            </span>,
            <span key="2f317173">
              Own your responsibility for framing what we can know
            </span>,
          ]}
          forViewers={[
            <span key="75cf526a">
              Reckon with the power of visualization
            </span>,
            <span key="6d2691fc">
              Ask for and by whom the visualization was designed
            </span>,
            <span key="9650286d">
              Consider the context of the data being visualized
            </span>,
            <span key="9650286e">
              Remember that there is always more than data alone can show
            </span>,
          ]}
        />
      </ChapterBody>
      <CenteredLayout>
        <FootnotesList footnotes={dataFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
