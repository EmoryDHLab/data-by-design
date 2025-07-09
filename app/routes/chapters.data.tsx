import { useState } from "react";
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
import VoyagesVis from "~/components/data/voyages/VoyagesVis.client";
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
    title: "A Chart of This Chapter ",
    id: "chart-of-the-chapter",
  },
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
    id: "visualizing-resistance ",
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
            It was a long and circuitous—and often painful—path that, in January
            of 1777, led Olaudah Equiano to London. The famed author and
            abolitionist was born in the Igbo area of the Kingdom of Benin, in
            what is now southeastern Nigeria.
            <InlineFootnote index={0} /> Kidnapped from his birthplace at the
            age of 11 and carried to the Atlantic coast, he was then forced
            aboard a slave ship. There Equiano encountered “a multitude of black
            people of every description chained together,” as he recalled in his
            autobiography, the captives packed in quarters “so crowded that each
            had scarcely room to turn himself.”
            <InlineFootnote index={1} /> He was taken to Barbados and then to
            Virginia, where he was sold. Equiano would remain enslaved for
            almost twenty years.
          </p>
          <p>
            By the time that Equiano settled in London, he had been free for
            over a decade; in 1766, Equiano had purchased himself, and therefore
            his freedom, with earnings from his personal trading business. But
            his experience of enslavement was never far from his mind. And so in
            the late 1780s, as the British antislavery movement began to
            coalesce, Equiano grew increasingly involved. Through this work, he
            became acquainted with Thomas Clarkson, a leading white abolitionist
            and key member of the London Committee of the Society for Effecting
            the Abolition of the Slave Trade (SEAST).
            <InlineFootnote index={2} /> When, in early 1789, Clarkson received
            a copy of a diagram created by the Plymouth Committee of SEAST
            entitled, “Plan of an African Ship’s Lower Deck with Negroes in the
            Proportion of Only One to a Ton,” he knew exactly who he should ask
            to confirm the truth of what he saw.
            <InlineFootnote index={3} />
          </p>

          <p>
            The diagram that Clarkson showed to Equiano depicted the
            configuration of captive bodies in the hold of a slave ship—a “scene
            of horror almost inconceivable,” as Equiano, in his autobiography,
            described his own first view into the hold. Indeed, Equiano’s friend
            and fellow antislavery activist Quobna Ottobah Cugoano had
            internalized his similar experience as such a trauma that, in his
            own 150-page treatise on the subject, he chose not to describe it at
            all.
            <InlineFootnote index={4} /> But in the diagram that Clarkson
            received from the Plymouth Committee, and that he shared with
            Equiano, Clarkson believed he’d found the key to conveying the depth
            of this inhumanity to his white compatriots. The diagram, which
            Clarkson would go on to revise and extend, and publish in March of
            that year as “Description of a Slave Ship,” would create an
            “instantaneous impression of horror upon all who saw it,” he later
            recalled, and compel them to join the abolitionist cause.
            <InlineFootnote index={5} />
          </p>

          {/* blur-none does not transition, that's whats up with the blur-[0px] */}
          <div className="flex justify-center w-96 m-auto">
            <img
              className={`h-96 p-4 drop-shadow-md transition-all duration-1000 ${
                hideSensitiveState ? "blur-md" : "blur-[0px]"
              }`}
              src="/public/images/intro/Thomas_Clarkson_by_Carl_Frederik_von_Breda.jpg"
              alt=""
            />
            <img
              className={`h-96 p-4 drop-shadow-md transition-all duration-1000 ${
                hideSensitiveState ? "blur-md" : "blur-[0px]"
              }`}
              src="/public/images/intro/Equiano-D8546.jpg"
              alt=""
            />
          </div>
          <p className="font-bold block md:hidden ms-8 text-lg">
            This chapter contains images of enslavement.
          </p>

          <div
            id="consent-explain"
            className="flex text-lg md:text-xl flex-row ms-8 md:ms-0 space-x-6 lg:space-x-4 md:mb-8"
          >
            <div className="w-auto md:w-1/3 self-start mb-auto md:self-center text-right md:text-center">
              <span
                className={`inline-flex justify-start md:justify-center border h-auto w-auto border-offblack rounded-full bg-dataSecondary hover:bg-dataPrimary`}
              >
                <ConsentToggle
                  className="h-16 w-16 md:h-28 md:w-28 p-0.5 md:p-2"
                  id="big-toggle"
                />
              </span>
            </div>
            <div className="font-power text-lg md:text-2xl">
              <p className="font-bold hidden md:block">
                This chapter contains images of enslavement.
              </p>
              <p>
                This button will show or hide sensitive images. It will remain
                below throughout the chapter.
              </p>
            </div>
          </div>
          <p>
            The “instantaneous impression of horror” that Clarkson hoped his
            diagram would prompt was, like all carefully-engineered viewing
            experiences, the result of countless hours of research and design.
            Given Clarkson’s choice of words—in particular, the “instantaneous
            impression”—it is safe to say that the diagram represented the
            culmination of over two centuries of thinking about the value of
            empirical evidence and the impact of giving it visual form.
            <InlineFootnote index={6} /> As we have just learned in the
            Introduction, the idea that quantitative information could be
            visualized as data, perceived by the eyes, and then processed into
            knowledge, had been steadily coalescing from the earliest
            expressions of empiricist philosophy, and from an increasingly wide
            range of examples of how information could be abstracted into images
            that the eye could perceive.
          </p>

          <p>
            Indeed, this intellectual genealogy easily aligns with the standard
            story we tell about the origins of modern data visualization. But
            with the “horror” that Clarkson engineered his chart to produce, its
            expanded origin story—the one which also includes its connections to
            colonialism and, as we will learn in this chapter, slavery—also
            enters the frame. SEAST’s powerful slave ship diagrams require that
            we account for this additional context, and in so doing, demonstrate
            the importance of a braided narrative for our understanding of the
            field. This expanded account of visualization’s origins underscores
            its tremendous power to distill complex information such that
            insight can easily and efficiently emerge. At the same time, it
            reminds us—both those who design visualizations and those who
            perceive them—how the abstraction that is required to efficiently
            produce this insight always, and necessarily, comes at the expense
            of additional detail.
          </p>
          <p>
            Setting SEAST’s diagrams at the center of the story we tell about
            the emergence of modern data visualization also reminds us that the
            context of any particular visualization always matters—and that
            context carries with it both social and political force. More
            basically, and more profoundly, these diagrams remind us that before
            there is data there are people—people who contribute to the
            production of data, and people who themselves become data, not
            always with consent. As we will see as this chapter unfolds, the act
            of transforming people into data, and of putting that data on
            display, are both acts of power. But that power is not guaranteed to
            be a benevolent force. Centering SEAST’s visualization work in the
            story we tell about data visualization is thus long overdue, for it
            demands that we recognize the responsibility that comes with the
            power of visualizing data—the power to frame what is possible to
            see, and therefore to know.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[0]}></ChapterSectionTitle>
        <CenteredLayout>
          <p className="first-paragraph">
            This chapter focuses on data, the basis of all visualization work.
            Through an extended analysis of SEAST’s “Plan of an African
            Ship”—the version of the chart that Equiano saw—we explore the
            tradeoffs between abstraction and detail that every designer must
            consider as they choose how to give their data visual form. We
            further consider the potential for violence and harm when dealing
            with data that derives from such a horrific source. Here we look for
            guidance from scholars of slavery, who have long contended with the
            violence that their historical data encodes. We conclude this
            section with a consideration of what data cannot and can never
            convey.
          </p>
          <p>
            We then turn to Clarkson’s version of the chart, “Description of a
            Slave Ship,” and the multiple sources of data, among evidence of
            other forms, that he compiled in order to create his chart. We delve
            into his design strategy, which was informed by his awareness of
            just how powerful and persuasive it could be to present data in a
            seemingly neutral and objective form. Drawing connections to
            feminist philosopher Donna Haraway’s formulation of the “god trick,”
            which they employ to critique contemporary visualization examples
            for the gods-eye view that they so often adopt, we come to see how
            the design of Clarkson’s diagram was far from neutral, and in fact
            encoded a particular perspective—as does each and every chart. The
            lesson for us as twenty-first century viewers and designers is,
            however, not to dismiss Clarkson’s chart (or any) out of hand.
            Rather, it is to recognize our responsibility to ask
            questions—always—about for and by whom any chart has been designed.
          </p>
          <p>
            We carry this lesson about power and perspective into a discussion
            of a visualization sequence that we, the{" "}
            <cite>Data by Design </cite>project team, have ourselves designed.
            Far from throwing stones from glass houses, our team takes on the
            challenge of visualizing the data of enslavement head-on. More
            specifically, we seek to visualize the data included in the
            Trans-Atlantic Slave Trade Database, a decades-long project to
            compile a comprehensive dataset of every slaving voyage known to
            have taken place.
            <InlineFootnote index={7} /> We discuss how the questions raised by
            Clarkson’s image, and Elford’s, shaped our attempt to use the power
            of visualization to prompt generative new insights about the data
            the slave trade left in its wake. We discuss the theories and
            examples that informed our design decisions, and conclude by
            presenting our own visualization in its final interactive form—one
            that infuses a degree of humanity back into the data while also
            underscoring what data cannot hope to show.{" "}
          </p>
          <p>
            We then return to the standard story of visualization’s emergence
            with these lessons about uses and limits, and power and perspective,
            at top of mind. What we learn with this expanded story (and we
            include ourselves, the project team, in this “we” as well) is why it
            matters so much to ask by and for whom any chart that we encounter
            has been designed. We learn to consider the context of every chart
            that we engage with, and what additional meaning it might provide.
            We also learn that if our goal is social or political impact, or
            other forms of real-world change, then we also require real-world
            action so as to best achieve this goal. Above all, what we learn
            from this chapter is how much responsibility we carry, as designers
            and viewers of visualizations alike. It remains our responsibility
            to ask what insights we can prompt with data visualization, and what
            insights neither visualization nor data can show.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[1]}></ChapterSectionTitle>
        <CenteredLayout>
          <p className="first-paragraph">
            The original engraving that Clarkson showed to Equiano, and that
            provided him with the visual model for his own, is attributed to the
            Plymouth Committee as a collective. But it is generally believed
            that the image was designed by a single man: William Elford, the
            Committee’s chairman and a veritable polymath. A banker by trade,
            Elford was also an acclaimed painter whose landscapes had shown at
            the Royal Academy of Arts, as well as an amateur scientist whose
            experiments had earned him membership in the Royal Society, the
            highest scientific honor of the time. (Locke, Boyle, Plot, and
            others mentioned in the Introduction were also members).
          </p>
          <p>
            Supplementing this range of skills was domain expertise and class
            privilege: Elford had family ties to the Royal Navy, and as a
            result, had early access to a report being prepared by one of its
            naval captains. Earlier in the year, a group within the British
            Parliament had tasked the captain, Parrey, with investigating the
            ships docked in Liverpool that were involved in the transatlantic
            slave trade. <InlineFootnote index={8} /> This investigation took
            both quantitative and qualitative form; in addition to taking
            precise measurements of the ships and scrutinizing muster
            rolls—lists of crew members aboard any particular ship—Parrey also
            interviewed the captains and sailors of the ships themselves,
            learning otherwise undisclosed information about the perils faced by
            both captives and crew.
          </p>
          <p>
            The art historian Cheryl Finley, whose book{" "}
            <cite>Committed to Memory: The Art of the Slave Ship Icon</cite>{" "}
            explores the origins and evolving significance of these charts in
            extensive detail, speculates that among the “most useful” artifacts
            from Parrey’s report were the hand-drawn diagrams of the ships
            created by the captains themselves. <InlineFootnote index={9} />{" "}
            Intended as “a type of visual shorthand apparently used to increase
            the efficiency of packing ships,” these sketches, for abolitionist
            viewers, likely became a graphic call to arms.{" "}
            <InlineFootnote index={10} /> Elford, for one, saw a direct visual
            depiction of the dehumanization that was required in order to reduce
            human lives into commodity goods on the part of slavery’s
            profiteers.
          </p>
          <p>
            As you have already experienced, we made the decision to hide the
            visual details of Elford’s “Plan,” and the other sensitive images
            discussed in this chapter, until our viewers could be more prepared
            for what they might see. We made this choice because of the range of
            harms that can be brought about by engaging with the archive of
            slavery without warning, context, or consent. These harms may be
            retrospective, in the influential words of literary scholar Saidiya
            Hartman, the result of “the uncertain line between witness and
            spectator” that scholars of slavery often must walk.
            <InlineFootnote index={11} /> They may also carry into the future,
            in the form of the desensitization brought about by evermore
            depictions of the “routinized violence of slavery,” as Hartman
            further explains.
            <InlineFootnote index={12} /> For viewers whose own ancestors were
            enslaved, such depictions can also exacerbate existing
            intergenerational trauma, as historian Jennifer Morgan describes.{" "}
            <InlineFootnote index={13} /> Those who choose to view Elford’s
            version of the diagram may do so now by clicking the toggle at the
            top left. Or you may choose to continue to read generalized
            descriptions of the images of slavery included here.
          </p>
          <p>
            As some of you may have also already experienced, we provide a
            parallel choice for visitors to this site who rely on alt-text. In
            this case the toggle switches between generalized and detailed
            descriptions of the images. Both modes of encounter are supported by
            a form of progressive disclosure, a concept formulated by Silas
            Munro, a member of our project team, characterized by a gradual
            introduction of the individual elements of each image, so that the
            reader is not subjected to the same experience of immediate horror
            that SEAST originally intended to produce with their charts. While
            this decision runs counter to the Society’s original goal, our
            encounter with these images over two hundred years after they were
            first shown serves a different purpose: to understand how their
            designers were able to leverage a combination of abstraction and
            detail in order to achieve their catalyzing effects. Even
            progressively disclosed, these charts remain as viscerally affecting
            as they are visually impossible. In the original Elford diagram—the
            one that Equiano saw—viewers see the ship from above, as if they are
            gods in the heavens. The top deck of the ship has been removed, so
            that the viewer can see directly into the hold. (Down below, we will
            return to this strategy of what is, in fact, a “god trick,” as
            Haraway describes.)
          </p>
        </CenteredLayout>

        <PlymouthCommitteeScrollytell
          triggers={[
            <span key="07226c6e">
              The hold is divided into six distinct areas.
            </span>,
            <span key="a400ea46">
              The largest area, in the bow of the ship, and which occupies the
              entire right half of the diagram, is labeled the "Mens room," and
              depicts 120 male bodies in four rows of thirty.
            </span>,
            <span key="e6184ce7">
              In the middle is a narrow column labeled "Boys room" and depicts
              shorter male figures in six rows of twelve.
            </span>,
            <span key="aebd268b">
              To its left is the larger "Womens room," depicting figures the
              same size as the adult men, but with breasts. They are depicted in
              four rows of twenty-one, representing 84 women total.
            </span>,
            <span key="b1f566ad">
              At the stern is the "Girls Room," the figures shorter and squatter
              than the boys, arranged in three rows of ten.
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
              We do not know with certainty whether Elford was familiar with an
              earlier, more literal depiction of a slave ship, the Marie
              Séraphique, which dates to around 1770. This image, “Plan,
              Profile, et Distribution du Navire La Marie Seraphique,”
              commissioned by the ship’s owner to commemorate the “successful”
              return of its first slaving voyage, presents a
              <HoverText hoverState="hold">a view of the hold—and</HoverText>{" "}
              the captives within it—as one of{" "}
              <HoverText hoverState="crossSections">
                four cross-sections of each of the ship
              </HoverText>
              . The image also includes a{" "}
              <HoverText hoverState="watercolor">
                watercolor of the ship arriving into Loango
              </HoverText>{" "}
              , in what is now Republic of Congo, where the 312 captives were
              first purchased by the French captain,as well as{" "}
              <HoverText hoverState="tables">
                data tables that sort them by gender and age
              </HoverText>
              , as well as by whether or not they survived.
              <InlineFootnote index={12} />
            </p>

            {/* // revise text to match new writing here  */}
            <p>
              This "Plan" is shocking in its attempt at realism. Unlike the
              "cartoon figures" in Elford's diagram, as Spillers also describes
              them, the captives depicted here are each individually drawn.
              <InlineFootnote index={13} /> They are shown lying on their sides.{" "}
              <HoverText hoverState="nakedPeople">
                Most are naked, but several are clothed
              </HoverText>
              . The{" "}
              <HoverText hoverState="shackledMen">men are shackled</HoverText>
              —some with their arms and legs shackled to each other; others
              shackled to two-by-two.{" "}
              <HoverText hoverState="nursingMother">One woman</HoverText>
              nurses a child.
            </p>
            {/* // revise text to match new writing here  */}

            <p>
              Regardless of whether Elford saw this particular chart, he clearly
              considered what he would give visual form and what he would not.
              As evidence, consider how, in contrast to the diagram of the Marie
              Séraphique, the two areas of Elford's diagram labeled "store room"
              are left blank, even as they were presumably packed with same
              <HoverText hoverState="nonhumanCargo">
                barrels and other dry goods
              </HoverText>{" "}
              that were required to sustain the captives and crew. Here, the
              white space of the store rooms instead emphasizes the diagram's
              rhetorical point: that the slave trade primarily entailed the
              packing of people as cargo aboard a ship.
              <InlineFootnote index={14} />{" "}
            </p>
            <p>
              At the same time, Elford could not but himself also participate in
              this process of dehumanization, however inadvertently. A large
              part of how the diagram achieves its visual impact is how its 297
              human souls are drawn as nearly identical figures—what literary
              scholar Marcus Wood describes as a “mass of black human flesh.”
              <InlineFootnote index={17} /> The figures’ collective rather than
              individual significance is further accentuated by their being set
              against the clean lines of the ship <InlineFootnote index={18} />{" "}
              The labels associated with each area, engraved in neat script,
              underscore this reduction in complexity—which is, of course, a
              reduction in humanity as well.
            </p>
            <p>
              It is here that the significance of the diagram for the larger
              practice of data visualization begins to cohere: Elford’s design
              achieves its success because of its strategic use of abstraction.
              It represents the captives as almost proto-Isotypes, rather than
              individual people with unique bodily features and distinct inner
              lives
              <InlineFootnote index={19} /> In so doing, Elford “induce[s] the
              viewer to think about the substance” of the data of the slave
              trade, to employ Edward Tufte’s language of graphical excellence,
              rather than specific people on specific ships.
              <InlineFootnote index={20} /> Yet Elford achieves his visual
              <span className="italic">tour-de-force</span> by stripping away
              the individual lives behind each datapoint—the lives that,
              paradoxically, he designed his charts in order to support.
            </p>
            <p>
              Not all data visualizations take on this most odious episode in
              human history, of course. But the Plan’s lesson about the
              irresolvable tension between abstraction and detail is one that we
              can apply to visualization as a whole. Put another way: the
              abstraction that is required to efficiently prompt insight
              <em>always</em>—and just as important, <em>necessarily</em>—comes
              at the expense of the full detail of what it seeks to represent.
              What should we do about this tension, either as viewers of
              visualizations or as designers of them? The answer is not that we
              should reject visualization out of hand. It is, rather, that we
              must always consider what is lost in the process of visualizing
              data at the same time that we consider what is gained.
            </p>
            <PullQuote
              quote="The abstraction that is required to produce insight always—and, necessarily—"
              subquote="comes at the expense of the full complexity of the phenomenon that it represents."
            />
            <p>
              “Plan of an African Ship” also reminds us, with its subject most
              profound, that there are always aspects of human experience that
              visualization cannot convey. No diagram can ever express the full
              extent of the brutality and degradation that was required to
              enforce the enslavement of otherwise equals. No diagram can ever
              fully communicate the “horror almost inconceivable”—to return to
              Equiano’s chilling words—to those who did not personally
              experience it; nor can any diagram appropriately convey the
              additional trauma that others, like Cugoano, chose to keep
              suppressed. As above, the lesson is not of the futility of
              visualizing data. It is, rather, one of hope: that with the image
              of the slave ship indelibly etched in our minds, we will keep both
              the power and limits of data visualization together in view.
            </p>
            <p>
              Indeed, the power to produce an “instantaneous impression” in the
              eyes of viewers remains among the greatest strengths of data
              visualization. In <cite>Data Feminism</cite>, Catherine D’Ignazio
              and I quote visualization designer Fernanda Viégas—who created the
              “Wind Map” that appears in this book’s Introduction—in describing
              this strength as a “superpower.” <InlineFootnote index={21} /> Her
              words could not be more revealing. Because just as we consider
              this tremendous power, we must also consider our responsibility
              for the insights that we design our visualizations to produce,
              just as we do for the detail and context—and in this case, the
              lives—that visualization on its own cannot convey.
            </p>
          </Column>
          <Column shouldPin>
            <SeraphiqueTour figure={figures["2-1468px-Plan"]} />
          </Column>
        </TwoColumnLayout>

        <ChapterSectionTitle section={sections[2]} />

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
              <InlineFootnote index={22} />
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
              <InlineFootnote index={23} />
            </p>
            <p>
              Clarkson’s attention to the strategic deployment of data also
              underscores the fact that “Description of Slave Ship” was, like
              its predecessor, a data visualization. The SEAST diagrams have at
              times been dismissed from the visualization pantheon because of
              their explicit political objectives, which go against the
              presumption of visualization’s neutrality—a myth we will continue
              to dismantle in Chapter 2.
              <InlineFootnote index={24} /> They are also sometimes left
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
              <InlineFootnote index={25} />
            </p>
            <p>
              To wit: just as Clarkson’s reintroduction of data to the chart
              underscored its basis in empirical evidence and buttressed its
              claims to the truth, so too did his visual modifications. More
              specifically, he shifted the view of the hold lower down the page,
              and added a series of cross-sections that showed additional views
              of the ship from the side. The inclusion of the cross sections
              drew from the conventions of naval architectural plans, which were
              by that time strongly established. This had the rhetorical effect
              of securing the chart’s “graphic authority,” as Marcus Wood
              describes it, in ways similar to how drawing new national borders
              on an existing map leverages the power of its seemingly
              documentary form.
              <InlineFootnote index={26} /> Unlike a typical naval diagram,
              however, Clarkson’s cross-sections also included people. These
              represented the captives themselves, whom Clarkson included as a
              way to show from multiple perspectives precisely how they were
              confined.
            </p>
          </Column>
          <Column shouldPin>
            <Figure figure={figures["4-description-1789"]} />
          </Column>
        </TwoColumnLayout>

        <ClarksonSideBySideScrollytell />

        <CenteredLayout>
          <p>
            Here we might recall how Elford’s diagram depicted the captives’
            bodies with minimal differentiation, which scholars have largely
            interpreted as reflecting “an abolitionist cultural agenda which
            dictated that slaves were to be visualized in a manner which
            emphasized their total passivity and prioritized their status as
            helpless victims.”
            <InlineFootnote index={27} /> In Clarkson’s version, however, the
            captives are shown wearing loincloths, among other additional
            elements of visual detail. The men are shackled together in pairs,
            by both their hands and by their feet. The women, on the other hand,
            remain unbound, and with their breasts exposed.
            <InlineFootnote index={28} />
          </p>
          <p>
            The combined effect of these changes was a diagram that engaged the
            viewer through two very different epistemological registers, both at
            the same time. First, as a representation of the data that, through
            its use of naval convention, conveyed its graphical authority; and
            second, as an intentionally evocative graphic that was intended to
            elicit a combination of sympathy and shock. The desired result of
            the diagram, driven by both empirical evidence and emotion, was that
            the viewer would perceive the “inhumanity of the trade” through the
            eyes and the heart, and prompted by the “instantaneous impression”
            that it made on the senses, be compelled to act.
            <InlineFootnote index={29} />
          </p>
          <p>
            At this point, one previously unstated detail must now be made
            explicit: these viewers, like the captives, also had a race. They
            were white, predominantly British and predominantly men, with lives
            far removed from the experience of enslavement. In fact, Clarkson
            had an even more specific audience in mind with his design: the
            Members of British Parliament, who were scheduled to vote on a
            motion to abolish the slave trade in several weeks’ time. One of the
            London Committee’s own members, William Wilberforce, was among them,
            and he believed, and even said as much, that if the MPs “could
            actually <span className="italic">see</span> one thousandth part of
            the evils of that practice which they have, for so many years, under
            one pretense or another, been prevailed on to suffer to be
            continued,” they would quickly commit themselves to the abolitionist
            cause.
            <InlineFootnote index={30} />
          </p>
          <p>
            Here is where we will return to the idea of the “god trick,”
            mentioned at the outset of this chapter, and explore its
            significance in fuller detail. The “god trick” is an idea developed
            by the feminist philosopher Donna Haraway, which they use to
            describe the false sense of neutrality that is conveyed through the
            default perspective of data visualization, the “view from above.”
            <InlineFootnote index={31} />
            The view from above can seem godlike—this is the “god” part of
            Haraway’s term—but it is a “trick” because it preys upon our general
            tendency not to notice, let alone question, any perspective that
            adheres to the default. In this particular case, the seemingly
            godlike perspective is, in fact, the perspective of “predominantly
            white and male abolitionists and lawmakers,” as sociologist Simone
            Browne observes.
            <InlineFootnote index={32} /> In her field-defining work on race and
            surveillance, Browne analyzes Clarkson’s “Description” in terms of
            the god trick, and employs it to underscore Haraway’s primary point:
            while the “view from above” may seem like a view “from nowhere,” it
            is in fact a view from somewhere—all viewpoints are.
            <InlineFootnote index={33} /> For Browne—and, we hope, for you now
            as well—the “Description” provides unassailable evidence of this
            fact.
          </p>
          <p>
            Given Clarkson’s own writing on the subject, he would likely not
            disagree with Browne’s assessment of his intended audience. Clarkson
            celebrated how the chart “brought forth tears of sympathy in behalf
            of the sufferers, and it fixed their sufferings in [the viewer’s]
            heart.”
            <InlineFootnote index={34} />
            But Browne’s analysis of the power relations embedded in the
            “Description,” and more specifically, of “the primacy given in these
            abolitionist texts to white gazes and vantage points to the trauma
            of slavery,” pushes us as twenty-first century viewers, with our
            more nuanced understanding of how power is refracted along racial
            lines, to see even more
            <InlineFootnote index={35} /> Looking closely:
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
                <InlineFootnote index={36} />
              </span>
            }
            byline={<span>Simone Browne</span>}
          />
          <p>
            Did Clarkson intend to depict the captives looking back at the
            viewer, challenging their gaze? Or was it just that, in his
            commitment to accurate representation, he could not help but also
            depict the captives’ resistance,
            <InlineFootnote index={37} />
            in ways both large and small? These questions lack definitive
            answers, but their possibilities are what matter more. What would it
            mean to visualize the experience of the Middle Passage from the
            perspective of the captives themselves? Is this a task that should
            be undertaken, and if so, by whom? What data would be required? Or,
            in the absence of data, what information—or what context—might be
            marshalled instead? What new knowledge—if any—might this
            visualization bring to light? And for whom might this be new
            knowledge, and for whom might this, instead, further perpetuate
            harm?
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[3]} />
        <CenteredLayout>
          <p className="first-paragraph">
            These were the very questions that I, Lauren, brought to the{" "}
            <cite>Data by Design</cite> project team. I also brought a dataset:
            a full download of the Trans-Atlantic Slave Trade Database, which
            (as of the time of this writing, in Spring 2024) contains records of
            36,150 unique slaving voyages that took place between the years 1514
            and 1866, resulting in the captivity and forced migration of an
            estimated 10.6 million souls.
            <InlineFootnote index={38} /> Ever since the first release of the
            database, in 1999 via CD-ROM, scholars and designers have attempted
            to give this powerful data visual form.
            <InlineFootnote index={39} /> Perhaps most prominently, in 2016,
            Andrew Kahn and Jamelle Bouie produced an animated visualization of
            the data for Slate, the online magazine, which depicted each of the
            20,528 voyages that were then in the database as small black dots
            that were seemingly pulled from the west coast of Africa to the
            Americas as if by magnetic force.
            <InlineFootnote index={40} /> While intended to "give sense of the
            scale of the trans-Atlantic slave trade across time, as well as the
            flow of transport and eventual destinations," the visualization was
            roundly critiqued by scholars of slavery for the god's eye
            perspective that it adopts. As literary scholar Britt Rusert
            asserts, "It's as if a series of ‘invisible hands' operate the
            trade," rather than specific people who should be condemned for
            their acts.
            <InlineFootnote index={41} /> Although she does not formulate her
            critique in these exact terms, what Rusert identifies is another
            version of the "god trick" at work.
          </p>
          <p>
            Passage might be possible, enabled us to clarify our task. We first
            considered the provenance of the dataset, and contemplated how the
            shipping logs and other data tables that served as its primary
            sources were created by the enslavers, and not the enslaved. This in
            turn reminded us of the power relations embedded in the data, those
            that could never be removed, as well as of how that power
            contributed to a range of omissions and gaps. We also considered our
            own subject positions, and the fact that, among the five of us
            collaborating on this particular visualization, only one of us could
            point to ancestors who had themselves been enslaved. This prompted a
            recognition on behalf of the group that there were certain stories
            about the data that were not ours to tell, and following Hartman,
            should be left for others to convey. Finally, we returned to Jessica
            Marie Johnson’s powerful statement, in her “Markup Bodies” essay,
            that “there is nothing neutral, even in a digital environment, about
            doing histories of slavery.”
            <InlineFootnote index={42} /> This called us back to the range of
            harms that can be brought about by engaging with this history, as
            discussed earlier in this chapter, and to how data visualization is
            not immune. We saw the potential for “second-order violence,” as
            Hartman terms it, both in the act of reanimating a dataset that, in
            its original form, conscribed the people it represented to living
            death; and in the act of controlling the layout and motion of this
            dataset which itself documented the forced migration of so many.
            From this process, our goal became more refined. In order to better
            represent the enslaved as they lived, and not further reinforce how
            they were reduced to data, we would need a visual strategy that
            could draw out meaningful facets of the dataset while also
            reinforcing just how much about each life the data could not show.
            <InlineFootnote index={43} />
          </p>
          <PullQuote quote="To honor the enslaved as they lived, and not as they were reduced to data, we would need a visual strategy for showing just how much about these lives the data could not show." />
        </CenteredLayout>

        <VoyageScrollytell
          triggers={[
            <span key="490b6e1c">
              We began our prototyping process, as many do, by examining the
              summary statistics of our dataset. But having articulated our
              ethical framework and our design goals, few facets of the
              data—counts of ships and people, and, more chillingly,
              prices—seemed seemed to hold any possibility for being reframed in
              ways that would not further reinscribe the violence of the
              original numbers, as Johnson and others have intoned. However, one
              variable, labeled “resistance,” seemed to provide a small opening
              that we thought we could further extend. It contained seven
              different subcategories of resistance that might have taken place
              on any particular journey. These included attempts at insurrection
              while at sea, both those that were successful and those that were
              thwarted while underway; attacks on the ship (or larger fleet)
              while on shore; and unspecified acts of resistance undertaken by
              “three or more” of captives at a single time. Could we use this
              “resistance” variable to create a visualization that, to recall
              Browne’s phrase, “looked back at the gaze from nowhere”?
            </span>,
            <span className="block" key="38d0f8a6">
              However, one variable, labeled “resistance,” seemed to provide a
              small opening that we thought we could further extend.
            </span>,
            <span className="block" key="8e1ece04">
              It contained seven different subcategories of resistance that
              might have taken place on any particular journey. These included
              attempts at insurrection while at sea, both those that were
              successful and those that were thwarted while underway; attacks on
              the ship (or larger fleet) while on shore; and unspecified acts of
              resistance undertaken by “three or more” of captives at a single
              time.
            </span>,
            <span className="block" key="442c2e00">
              Could we use this “resistance” variable to create a visualization
              that, to recall Browne’s phrase, “looked back at the gaze from
              nowhere”?
            </span>,
            <span className="block" key="cd4ac8ca">
              We began by pulling out the voyages that had any form of
              resistance associated with them, as well as six of the more basic
              variables that were associated with each journey. The additional
              variables we selected—the voyage’s start date, its end date, the
              total number of individuals who “embarked” on the voyage, and the
              total number of the individuals who disembarked—would allow us to
              provide a basic picture of each of the 572 voyages that contained
              a documented act of resistance.
            </span>,
            <span className="block" key="156434b0">
              Because our initial motivation was to visualize the dataset from
              the perspective of the enslaved, our design process began by
              focusing on a frequent observation made about the experience of
              the Middle Passage: that the captives did not experience time as
              linear while in the hold of the ship.
            </span>,
            <span className="block" key="963d2d76">
              Drawing visual inspiration from Harold Fisk’s alluvial diagram of
              the Mississippi River, which, as artist and scholar Romi Morrison
              explains, “deemphasizes the linearity of the river” in favor of
              showing a comparative view of its various paths over time, we
              decided to use bends and turns to represent the non-linearity of
              the Middle Passage.
            </span>,
            <span className="block" key="a2565c78">
              We retained the vertical orientation of the Fisk diagram so as to
              ensure that the viewer could not interpret the paths of the
              voyages as corresponding to any actual location on a map.
            </span>,
            <span key="d4c5b977">
              <span className="block mb-8">
                We then represented each voyage as a snaking line, its color
                randomly selected from our Fisk-inspire palette, but its width
                precisely determined by the number of captives held on the ship.
              </span>
              <span className="block">
                Shiyao Li, the primary computer science visualization researcher
                on our project team, had the idea to call these rivulets
                “binds,” since what they represented was not the freedom of
                movement that comes with flowing water, but its opposite: a form
                of bondage often described as “living death.”
              </span>
            </span>,
            <span className="block" key="2356b657">
              In the final visualization, the width at the top of each bind
              corresponds to the number of captives who departed from any
              location in Africa. The width at the bottom corresponds to the
              number who arrived in the Americas having survived.
            </span>,
            <span className="block" key="577fe346">
              The duration of each voyage is conveyed through the amplitude of
              each bind, but plotted from side-to-side. Encoded in this way, the
              longer voyages have wider sideways curves, and the shorter voyages
              narrower and more direct paths.
            </span>,
            <span key="90c3c7eb">
              <span className="block mb-8">
                While Fisk’s original design superimposes the floodplains of the
                Mississippi from all points in time on a single image, we chose
                to retain the start and end date of each voyage, since the rise
                and fall of the slave trade—and the resistance that met it
                throughout—seemed important for us to still convey.
              </span>
              <span className="block">
                In our visualization, the binds are arranged chronologically,
                from the first recorded act of resistance aboard a slave ship in
                1565, through the last in 1865. Since the majority of the
                voyages lacked data on the month or day of departure, we grouped
                the voyages by year. While the visual effect of this decision is
                not visible when viewing the voyages all at once, zooming in on
                a particular time span exposes these clusters for closer
                inspection.
              </span>
            </span>,
            <span className="block" key="cf140bd8">
              While the visual effect of this decision is not visible when
              viewing the voyages all at once,
            </span>,
            <span className="block" key="2deac1f9">
              Zooming in on a particular time span exposes these clusters for
              closer inspection.
            </span>,
            <span className="block" key="1c73c2f3">
              But as evocative as this visual representation may be, there are
              many other forms of resistance, large and small, that this
              visualization does not convey.
            </span>,
            <span className="block" key="7ed03972">
              As an example, we might consider the time-span between 1756 and
              1766, the decade during which Olaudah Equiano was enslaved. Within
              each year, we can also see that the binds themselves overlap—what
              is called “occlusion” in visualization design. While generally
              viewed as a design problem, and something to avoid, we made the
              decision not to further separate the voyages because viewing them
              together communicates their collective force.
            </span>,
            <span className="block" key="8562b8b3">
              The voyage that took Equiano from Benin to Barbados and on to
              Virginia is not pictured in this chart, however, because it did
              not include a form of resistance that was documented in the
              database. But it might have been included among the 35,578
              additional voyages that the database currently contains.
            </span>,
            <span className="block" key="f754f6ea">
              This was our inspiration to plot these voyages alongside the
              “resistance” voyages, so as to further trouble the distinction
              between the voyages that included documented acts of resistance
              and those that did not. With these additional voyages plotted,
              distinguished from the resistance voyages by their lack of color
              fill, we observed a visual transformation we had not intended, but
              that nevertheless aligned with our conceptual goals: the binds
              were transformed into life-affirming arteries, enclosed within the
              sinews of human flesh.
            </span>,
            <span className="block" key="c7a66f59">
              As evocative as this image may be, there are many other forms of
              resistance, large and small, that it does not represent.
            </span>,
            <span className="block" key="0b8820f6">
              In his autobiography, for example, Equiano recalls observing acts
              of resistance aboard the ship that were set in motion, but
              ultimately “prevented by the ship’s crew.” These acts of
              resistance likely had concrete effects, both for the crew which—in
              their need to suppress them—perhaps also attuned them to their own
              complicity; and for the captives, who perhaps might have taken
              heart in—or inspiration from—the possibility of pushing back
              against their likely fate. But as unfinished acts of resistance,
              they would have gone unrecorded in the dataset, as they did not
              meet its criteria for resistance or not.
            </span>,
            <span className="block" key="8f72225a">
              We might also consider the myriad number of smaller acts of
              resistance, including those in which Equiano himself engaged. Upon
              first being captured, for example, Equiano described how he
              refused to eat; and when his captor attempted to rename him,
              depriving him of his identity and his Ibo roots, “I refused to
              answer to my new name,” Equiano explains. Equiano’s more “quiet”
              forms of resistance, as literary scholar Kevin Quashie might term
              them, were also real, and also meaningful, even as they remain
              difficult to represent as data at all.
            </span>,
            <span className="block" key="c68f1d3b">
              In our final interactive view, which you can soon explore, we
              decided to leverage the power of visualization to amplify these
              otherwise quiet acts. In the final view, we decided to display all
              36,150 voyages with a color fill, selected from the same color
              palette as the original visualization of only the resistance
              voyages. The implication of this choice, we hope, is clear: that
              every single journey documented in the TAST database involved acts
              of resistance: some that are recorded as “resistance,” some that
              took place but went unrecorded as data, and some that defied
              recording at all. What we were visualizing in the end, our process
              allowed us to see, was not actually the Middle Passage, but the
              data it had left in its wake.
            </span>,
            <span className="block" key="cdd173c9">
              In order to underscore this point, we drew from an array of common
              visualization techniques. But we did not use them in the way that
              they are most often employed. For example, instead of providing an
              overview first, and then “details on demand,” our visualization
              inverts this process. We begin with the details of the
              “resistance” voyages, but as the additional voyages are layered
              into the frame, the viewer can no longer see clearly enough to
              deduce anything about a specific voyage. This is intentional,
              because the insight that we seek to prompt exceeds the data on
              display: it is that there are certain phenomena, such as the
              profound and personal trauma of the experience of the Middle
              Passage, which we can never fully understand.
            </span>,
          ]}
        />

        <ClientOnly>
          <VoyageVisContainer>
            <>
              <VoyagesVis
                id="voyage-interactive"
                allVoyages
                fullColor
                interactive
                axisBg="bg-offwhite"
                border={false}
                className="scale-x-90"
              />
            </>
          </VoyageVisContainer>
        </ClientOnly>

        <ChapterSectionTitle section={sections[4]} />
        <CenteredLayout>
          <p className="first-paragraph">
            While it would take another nine years for the British Parliament to
            formally abolish the slave trade —and, according to the
            Trans-Atlantic Slave Trade Database, an additional 1.5 million
            people or more forcibly separated from their homelands—historians
            generally credit “Description of a Slave Ship,” and Thomas Clarkson
            in particular, for playing a significant part in the campaign’s
            success.
            <InlineFootnote index={49} /> Clarkson himself likely contributed to
            this narrative; in 1808, one year after the formal Act of
            Parliament, he published a celebratory two-volume tome,
            <cite>
              The History of the Rise, Progress, and Accomplishment of the
              Abolition of the Slave Trade by the British Parliament
            </cite>
            , which provided his own first-hand account of British abolition.
            <InlineFootnote index={50} />
          </p>
          <p>
            Interspersed among the <cite>History’s </cite> nearly 1,200 pages
            were four images. Among them was a revised version of “Description
            of a Slave Ship,” and a new visualization that Clarkson himself
            designed. It depicts the history of abolition in the form of a
            watery network. Each of the “springs and rivulets” is labeled with
            the name of a significant abolitionist. The streams are arranged
            from top to bottom, roughly according to time, with horizontal lines
            separating efforts that took place before 1650, 1700, 1740, and
            1787, respectively. As the viewer follows the streams down the page,
            they converge into “two great political rivers, representing the
            abolitionist movement in England and America” (which, while outside
            of the bounds of the page, presumably meet somewhere in the
            Atlantic).
            <InlineFootnote index={48} />
          </p>

          <Figure figure={figures["5-The_history_of_the_rise"]} />

          <p>
            On the surface, the metaphor of abolition as a network of streams
            and rivers flowing into a common sea may seem like an apt
            representation of a social movement which drew strength from
            countless individuals and collectives over an extended period of
            time. This resonance must have been intentional, given how Clarkson
            elsewhere analogized the British antislavery movement to the
            distributed functioning of a human body, with “every limb...
            essentially necessary for the completion of a perfect work.”
            <InlineFootnote index={51} />
            And yet, Clarkson’s sense of “completion” is irrevocably flawed:
            certain key contributors are missing from his chart. Most notably,
            the name of Olaudah Equiano, or of any other Black abolitionist, is
            nowhere to be found.
          </p>
          <PullQuote quote="And yet, certain key contributors are missing from the chart. Most notably,  the name of Olaudah Equiano, or of any other Black abolitionist, is nowhere to be found." />
          <p>
            As with “Description of a Slave Ship,” the question of audience
            returns to the fore. This chart was also not designed for those who
            were enslaved, but rather, for a white British viewership—those who
            sought to valorize their own role in the fight to end the slave
            trade. In his analysis of the image, Marcus Wood speculates that
            this goal—and its disconnection from the actual facts—is the source
            of the confusion that the visualization ultimately imparts.
            Clarkson’s “attempt to create a self-sufficient cultural history for
            the cause requires a coherent descriptive model which is capable of
            overriding the heterogeneity of the names and writings he has
            furnished” in the text of his volume, Wood asserts.
            <InlineFootnote index={52} /> Indeed, Clarkson’s account overrides
            the same heterogeneity of the figures involved in the abolitionist
            movement overall. It follows then, that in his diagram, the success
            of the movement “belong[s] to no single abolitionist but to a
            mysterious sea, into which, in a strange reversal of the generative
            metaphor, all the tributaries pour.”
            <InlineFootnote index={53} /> he sea metaphor is further clouded by
            the role that actual water—namely, the Atlantic Ocean—played in the
            slave trade. Why would Clarkson use water—the very site of the
            dehumanization that was required of the condition of enslavement—as
            the anchoring metaphor of his chart?
          </p>
          <PullQuote quote="Why would Clarkson use water—the very site of the dehumanization that enslavement brought about—as the anchoring metaphor of his account?" />
          <p>
            As it turns out, Clarkson was anchoring his diagram in some stable
            ground: namely, the then-prevalent use of water and streams to
            visually represent the passage of time. In Cartographies of Time,
            Daniel Rosenberg and Anthony Grafton position Clarkson’s diagram as
            a direct adaptation of the ideas expressed by the German
            chronologer, Friedrich Strass, who had published his own widely
            circulated “Strom der Zeiten” (Stream of Time) only a few years
            earlier, in 1803. Translated into multiple languages, including
            English, and widely circulated across Europe and the United States,
            “Strom der Zeiten” was almost certainly a chart that Clarkson saw.
            Even if he did not, Clarkson clearly intuited how the water metaphor
            “gives greater liveliness to the ideas, and impresses events more
            forcibly on the mind, than the stiff regularity of the straight
            line,” as William Bell, the English translator of Strass’s chart,
            explained
            <InlineFootnote index={54} />
          </p>
        </CenteredLayout>

        <CenteredLayout>
          <Figure
            className="md:grid grid-cols-2 gap-4"
            figures={[figures["6-stream"], figures["7-Bell"]]}
          />

          <p>
            Indeed, there is a version of the history of data visualization
            that, without too much reconfiguring, provides Clarkson with a more
            prominent place. Many scholars, including Rosenberg and Grafton,
            have made the case that chronological charts such as those created
            by Strass and Bell, as well as their more linear antecedents,
            “cleared the way for statistical graphics” by introducing the idea
            of consistent scale.
            <InlineFootnote index={55} /> This argument is confirmed by the
            purported “pioneer” of statistical graphics himself, William
            Playfair, the subject of the next chapter, who praised the genre for
            “making space represent time,” and for using “a line of proportional
            length and in a suitable position.”
            <InlineFootnote index={56} /> As we will learn, Playfair described
            the purpose of his own visualizations in terms quite similar to
            Clarkson's: to unite “a number of separate ideas… under one simple
            impression of vision, and consequently, one act of memory.”
            <InlineFootnote index={57} />{" "}
          </p>
          <PullQuote quote="But to simply slot Clarkson into the standard history of the field would miss much of the point." />
          <p>
            But to simply slot Clarkson into the standard history of the field
            would miss this chapter’s main point. For Clarkson’s visualizations,
            both “Description of a Slave Ship” and his map of abolition, matter
            for the questions as much as the insights they prompt. When we ask
            about the perspectives of the people for whom these charts have been
            designed, the people who will benefit from looking, and the people
            who are merely looked at, we begin to see whose data is truly on
            view in any particular chart. And when we consider that additional
            context, and the potential for violence or harm, that a
            visualization might, however inadvertently, bring about, we come to
            see the responsibility we hold as viewers of data visualizations—and
            as designers of them as well. If these considerations seem weighty,
            it is because they are. Visualizations of data are indeed powerful,
            as the political efficacy and emotional charge of “Description of a
            Slave Ship” both affirm. But it is precisely because of this power
            that we must continue to probe the nature of the insights that
            visualization can prompt, and of each of our roles in bringing them
            to light.
          </p>
          <PullQuote
            quote="It also underscores how, if the goal of a visualization is to bring about change,"
            subquote="then it must necessarily be accompanied by action."
          />
          <p>
            We will never know if Equiano posed questions like these to Clarkson
            upon seeing the original diagram; there is no record of the
            conversation that transpired. Several weeks later, however, Equiano
            published a letter in
            <cite>The Public Advertiser</cite>, a prominent London newspaper, in
            which he acknowledged “having seen” the chart.
            <InlineFootnote index={58} /> Interestingly, Equiano does not
            comment directly on the image, choosing instead to affirm the work
            of the abolitionist movement overall. But I believe that we can
            still learn from Equiano’s statement about what he saw. In the
            diagram, Equiano saw clear evidence that its designers sought to
            “contribute to so important a moral and religious duty as that of”
            ending the slave trade. But he also saw that the chart alone would
            not be enough. As a person who had himself been enslaved, Equiano
            understood first-hand that ending “one of the greatest evils now
            existing on earth” would require more than the chart alone could
            convey.
          </p>
          <p>
            With this statement we return, for a final time, to this chapter’s
            epigraph—about how before there is data, there are people—people
            with lives that data alone cannot convey. With the story of Equiano
            lending specific context to this claim, we can now also see how, if
            the goal of any particular visualization is to bring about change,
            then it must necessarily be accompanied by action. We will return to
            this topic in the chapters to come, as we consider the ways that
            design processes (Chapter 3) and design outputs (Chapter 5) can
            better serve the people whose ongoing struggles for equality and
            justice we seek to support with our work. Here, however, we seek to
            make a broader point, since not all visualizations are designed with
            a goal of liberation in mind, and that is perfectly fine. In fact,
            most visualizations are designed with a more focused goal of
            eliciting insight about a specific dataset, or through a specific
            visual or interactive form. In these contexts as well—and perhaps
            even more—placing the example of the SEAST diagrams at the center of
            the story we tell about the emergence of modern data visualization
            matters deeply. For the diagrams do not ask but{" "}
            <span className="italic">demand </span>that we recognize the
            responsibility that comes with designing and viewing data
            visualizations. By attempting to picture the most monumental of
            humanity’s stakes, the SEAST diagrams serve as a constant reminder
            to always ask about the forms of knowledge that visualization can
            point towards—and what it cannot show.
          </p>
        </CenteredLayout>
        <Takeaways
          forDesigners={[
            <span key="df782d45">
              Balance between abstraction and detail with intention
            </span>,
            <span key="6440631a">
              Ask who may benefit and who may be harmed
            </span>,
            <span key="2f317172">Probe any missing data and ask why</span>,
            <span key="2f317173">
              Own your responsibility for framing what viewers can know
            </span>,
          ]}
          forViewers={[
            <span key="75cf526a">
              Reckon with the power of data visualization
            </span>,
            <span key="6d2691fc">
              Ask for and by whom any visualization has been designed
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
