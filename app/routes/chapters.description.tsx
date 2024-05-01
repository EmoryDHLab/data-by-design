import { useState } from "react";
import ChapterTitle from "~/components/ChapterTitle";
import { ChapterContext } from "~/chapterContext";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import PullQuote from "~/components/PullQuote";
import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";
import CenteredLayout from "~/components/layout/CenteredLayout";
import Footer from "~/components/Footer";
import { descriptionFootnotes } from "~/footnotes";
import Quotation from "~/components/Quotation";
import InlineFootnote from "~/components/InlineFootnote";
import PlymouthCommitteeScrollytell from "~/components/description/plymouthCommitteeScrollytell/PlymouthCommitteeScrollytell";
import FootnotesList from "~/components/FootnotesList";
import SeraphiqueTour from "~/components/description/SeraphiqueTour";
import HoverText from "~/components/HoverText";
import FigureObj from "~/components/layout/FigureObj";

import figures from "~/data/figures/description.json";
import ClarksonSideBySideScrollytell from "~/components/description/ClarksonSideBySideScrollytell";
import { ClientOnly } from "remix-utils/client-only";
import VoyagesVis from "~/components/description/voyages/VoyagesVis.client";
import { chapterMeta } from "~/utils";
import ChapterBody from "~/components/layout/ChapterBody";
import VoyageScrollytell from "~/components/description/voyageScrollytell/VoyageScrollytell";
import Takeaways from "~/components/layout/Takeaways";
import ConsentToggle from "~/components/consent/Toggle";

import type { MetaFunction } from "@remix-run/node";
import type { HoverState, TVizAnchors } from "~/chapterContext";
import Ship from "~/components/description/Ship";

const chapterFigures = Object.values(figures);

export const meta: MetaFunction = () => {
  return chapterMeta("description");
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
    title: "Visualization Four",
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
        backgroundColor: "brooksPrimary",
        accentColor: "brooksSecondary",
        accentTextColor: "black",
        footnoteTextColor: "brooksPrimary",
        primaryTextColor: "white",
        footnotes: descriptionFootnotes,
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
        title="Every Datapoint a Person"
        subtitle="Description of a Slave Ship"
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
            It was a long and circuitous—and often painful—path that led Olaudah
            Equiano, the famed author and abolitionist, to London in January
            1777. According to his autobiography,{" "}
            <cite>
              The Interesting Narrative of the Life of Olaudah Equiano, or
              Gustavus Vassa, the African
            </cite>{" "}
            (1789), Equiano was born in the Igbo area of the Kingdom of Benin,
            in what is now southeastern Nigeria
            <InlineFootnote index={0} />. Kidnapped from his birthplace at the
            age of 11 and carried to the Atlantic coast, Equiano was then forced
            aboard a slave ship. There he encountered "a multitude of black
            people of every description chained together," the captives packed
            in quarters "so crowded that each had scarcely room to turn
            himself."
            <InlineFootnote index={1} /> Equiano was taken to Barbados and then
            to Virginia, where he was sold. He would remain enslaved for almost
            twenty years.
          </p>
          <p>
            By the time that Equiano settled in London, he had been free for
            over a decade; in 1766, Equiano had purchased himself, and therefore
            his freedom, with earnings from his personal trading business. But
            his experience of enslavement was never far from his mind. And so in
            the late 1780s, as the British antislavery movement began to
            coalesce, Equiano became increasingly involved in its activities.
            Through this abolitionist work, he became acquainted with Thomas
            Clarkson, a leading white abolitionist and key member of the London
            Committee of the Society for Effecting the Abolition of the Slave
            Trade (SEASE).
            <InlineFootnote index={2} /> So when, in early 1789, Clarkson
            received a copy of a diagram created by the Plymouth Committee of
            SEASE entitled, "Plan of an African Ship's Lower Deck with Negroes
            in the Proportion of Only One to a Ton," he knew exactly who he
            should ask to confirm the truth of what he saw.
            <InlineFootnote index={3} />
          </p>

          <Ship figure={figures["1-sof_slaveship"]} />

          <div
            id="consent-explain"
            className="flex flex-col text-lg md:text-xl md:flex-row space-x-6 md:space-x-6 lg:space-x-4 md:mb-8"
          >
            <div className="w-1/3 self-center text-center">
              <span
                className={`inline-flex items-center justify-center border h-auto w-auto border-offblack rounded-full bg-brooksSecondary hover:bg-brooksPrimary`}
              >
                <ConsentToggle
                  className="h-6 w-6 md:h-28 md:w-28 p-2"
                  id="big-toggle"
                />
              </span>
            </div>
            <div className="font-dubois text-lg md:text-2xl">
              <p className="font-bold">
                This chapter contains images of enslavement.
              </p>
              <p>
                This button will show or hide sensitive images. It will remain
                below throughout the chapter.
              </p>
            </div>
          </div>
          <p>
            The diagram that Clarkson showed to Equiano depicted the
            configuration of captive bodies in the hold of a slave ship—a "scene
            of horror almost inconceivable," as Equiano, in his autobiography,
            described his own first view into the hold, and that his fellow
            Black British antislavery activist Quobna Ottobah Cugoano, in his
            own treatise,{" "}
            <cite>
              Thoughts and Sentiments on the Evil and Wicked Traffic of the
              Slavery and Commerce of the Human Species
            </cite>{" "}
            (1787), recalled as such a trauma that he chose not to describe it
            at all.
            <InlineFootnote index={4} /> But in the diagram that Clarkson
            received from the Plymouth Committee, and that he shared with
            Equiano, Clarkson believed he'd found the key to conveying the depth
            of this inhumanity to his white compatriots. The diagram, which he
            would go on to revise and extend, and publish in March of that year
            as "Description of a Slave Ship," would create an "instantaneous
            impression of horror upon all who saw it," Clarkson later recalled,
            and compel them to join the abolitionist cause.
            <InlineFootnote index={5} />
          </p>
          <p>
            The "instantaneous impression of horror" that Clarkson hoped his
            diagram would prompt was, like all carefully-engineered viewing
            experiences, the result of countless hours of research and design.
            Given the actual words that Clarkson employed—and in particular, the
            "instantaneous impression"—it also safe to say that the diagram
            represented the culmination of over two centuries of thinking about
            the value of empirical evidence and the impact of giving it visual
            form.
            <InlineFootnote index={6} /> Indeed, the idea that evidence could be
            visualized as data, perceived by the eyes, and then processed into
            knowledge by the mind, coalesced from the contributions of
            empiricism in both theory and practice, as well as an increasingly
            wide array of examples of how numbers and the relationships among
            them could be abstracted into images that the eye could perceive.
          </p>
          <p>
            This intellectual genealogy is, as readers might recall, the first
            of the two stories of data visualization presented in this project's
            introduction. But in the "horror" that Clarkson engineered his chart
            to produce, the second story of data visualization—the one having to
            do with the uneasy alliance between slavery and data—also snaps into
            view. "Description of a Slave Ship" requires that we consider these
            two stories together, and in so doing, demonstrates the importance
            of this braided narrative for the history of the field. This
            expanded account underscores the tremendous power of data
            visualization to distill complex information such that insight can
            easily and efficiently emerge, while at the same time reminding
            us—both those who design visualizations and those who perceive
            them—how the abstraction that is required to efficiently generate
            insight always comes at the expense of additional detail—detail that
            data alone cannot convey.
          </p>
          <p>
            Setting "Description of a Slave Ship" at the center of the story we
            tell about the emergence of modern data visualization also reminds
            us that the context of any particular visualization always
            matters—and that context carries with it both social and political
            force. More basically, and more profoundly, Clarkson's "Description"
            reminds us that before there are data there are people—people who
            offer up their lives to be counted as data, or have their lives
            counted without their consent. The act of transforming people into
            data, and of putting that data on display, are both tremendous acts
            of power. And that power is not guaranteed to always be a benevolent
            force. Centering "Description of a Slave Ship" in the story we tell
            about the emergence of data visualization is thus long overdue, for
            it requires that we recognize the responsibility that comes with
            this power—the power of visualizing data—which frames what is
            possible for the viewer to know.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[0]}></ChapterSectionTitle>
        <CenteredLayout>
          <p className="first-paragraph">
            The original engraving that Clarkson showed to Equiano, and that
            provided him with the visual model for his own, is attributed to the
            Plymouth Committee as a collective. But it is generally believed
            that the image was designed by a single man: William Elford, the
            Committee's chairman and a veritable polymath. A banker by trade,
            Elford was also an acclaimed painter whose landscapes had shown at
            the Royal Academy of Arts, as well as an amateur scientist whose
            experiments had earned him membership in the Royal Society, the
            highest scientific honor of the time. (Locke, Boyle, Plot, and
            others mentioned in the Introduction were also members).
          </p>
          <p>
            Supplementing this range of skills was domain expertise: Elford had
            family ties to the Royal Navy, and as a result, had early access to
            a report being prepared by one of its naval captains. Earlier in the
            year, a group within the British Parliament had tasked the captain,
            Parrey, with investigating the ships docked in Liverpool that were
            involved in the transatlantic slave trade. This investigation took
            both quantitative and qualitative form; in addition to taking
            precise measurements of the ships and scrutinizing muster logs—lists
            of crew members aboard any particular ship—Parrey also interviewed
            the captains and sailors of the ships themselves, learning otherwise
            undisclosed information about the perils faced by both captives and
            crew.
          </p>
          <p>
            The art historian Cheryl Finley, whose book{" "}
            <cite>Committed to Memory: The Art of the Slave Ship Icon</cite>{" "}
            explores the origins and evolving significance of the "Description"
            in extensive detail, speculates that among the "most useful"
            artifacts from Parrey's report were the hand-drawn diagrams of the
            ships created by the captains themselves.
            <InlineFootnote index={7} /> Intended as "a type of visual shorthand
            apparently used to increase the efficiency of packing ships," for
            abolitionist viewers, these sketches likely became a graphic call to
            arms. Elford, for one, saw a direct visual depiction of the
            dehumanization that was required in order to reduce human lives into
            commodity goods on the part of slavery's profiteers.
          </p>
          <p>
            Readers have already been informed that the default settings for
            this chapter hide the visual details of the "Description," and the
            other sensitive images discussed here, until they are sufficiently
            prepared for what they might see. We made this choice because of the
            range of harms that can be brought about by engaging with the
            archive of slavery without warning, context, or consent. These harms
            may be retrospective, the result of "the uncertain line between
            witness and spectator" that scholars of slavery often walk, as
            literary scholar Saidiya Hartman has influentially written.
            <InlineFootnote index={8} /> They may also be expressed in the form
            of the desensitization brought about by evermore depictions of the
            "routinized violence of slavery," Hartman further explains.
            <InlineFootnote index={9} /> For viewers whose own ancestors were
            enslaved, such depictions can also exacerbate existing
            intergenerational trauma, as historian Jennifer Morgan describes.
            <InlineFootnote index={10} /> Those who choose to view Elford's
            version of the diagram may do so now by clicking the button at the
            bottom right. Or you may choose to continue to only read about the
            images of slavery included here.
          </p>
          <p>
            Indeed, Elford's diagram—the one that Equiano saw—is as viscerally
            affecting as it is visually impossible. Viewers see the ship from
            above, as if they are gods in the heavens. (We will return to what
            is, in fact, a "god trick" down below). The top deck of the ship has
            been removed, so that the viewer can see directly into the hold.
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
              These "scaled inequalities," as Black feminist theorist Hortense
              Spillers characterizes the figures, literalize the process of
              "dehumanizing, ungendering, and defacing" that the Middle Passage
              brought about. <InlineFootnote index={11} />
            </span>,
          ]}
        />

        <TwoColumnLayout>
          <Column shouldPin={true}>
            <p>
              Certain visual features help the plan achieve its impact. Most
              immediate is how the 297 figures, what Marcus Wood describes as a
              "mass of black human flesh," are set against the clean lines that
              indicate the bounds of the ship. The labels of each area, engraved
              in neat script, underscore the reduction in complexity that is
              intended by the diagram. Wood describes the design of the Plan in
              terms of an "awful rigor," underscoring how the "formality" of the
              figures "appears to deny [their] flesh and blood presence." But
              for Elford, this abstraction was perhaps part of the point.
            </p>

            <p>
              It is unknown as to whether Elford was familiar with an earlier,
              more literal depiction of a slave ship, the Marie Séraphique,
              which dates to around 1770. This image, "Plan, Profile, et
              Distribution du Navire La Marie Seraphique," commissioned by the
              ship's owner to commemorate the "successful" return of its first
              slaving voyage, presents{" "}
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
              human souls are drawn as nearly identical figures—what historian
              Marcus Wood, in reference to Spillers, describes as a "mass of
              black human flesh."
              <InlineFootnote index={15} /> The figures' collective rather than
              individual significance is further accentuated by their being set
              against the clean lines that indicate the bounds of the ship.
              <InlineFootnote index={16} /> The labels associated with each
              area, engraved in neat script, underscore this reduction in
              complexity—which is, of course, a reduction in humanity as well.
            </p>
            <p>
              It is here that the significance of the diagram for the larger
              practice of data visualization begins to cohere: Elford's design
              achieves its success because of its strategic use of abstraction.
              It represents the captives as almost proto-Isotypes, rather than
              individual people each with unique bodily features and expressions
              pointing to inner lives.
              <InlineFootnote index={17} /> In so doing, Elford "induce[s]
              viewers to think about the substance of the data" of the slave
              trade, to employ Tufte's language, rather than about anything
              else.
              <InlineFootnote index={18} /> Yet Elford achieves this singular
              focus by stripping away the individual lives behind each
              datapoint. These lives are, paradoxically, the very same that he
              designed his charts in order to support.
            </p>
            <p>
              Not all data visualizations take on this most odious episode in
              human history, of course. But this particular lesson about the
              chart's constitutive tension is one that can be more universally
              applied. The abstraction that is required to efficiently produce
              insight always—and <em>necessarily</em>—comes at the expense of
              the full complexity of the phenomenon that it represents. What
              should we do with this realization, either as viewer of data
              visualizations or as designers of them? The answer is not that we
              should reject visualization out of hand. Rather, it is that we
              must always consider what is lost in the process of visualizing
              data at the same time that we consider what is gained.
            </p>
            <PullQuote
              title="The abstraction that is required to produce insight always—and, necessarily—"
              subtitle="comes at the expense of the full complexity of the phenomenon that it represents."
            />
            <p>
              Elford's diagram also reminds us, with its subject most profound,
              that there are aspects of human experience that data visualization
              cannot and can never convey. No diagram can ever express the full
              extent of the brutality and degradation that was required to
              enforce the enslavement of otherwise equals. No diagram can ever
              fully communicate the "horror almost inconceivable," to return to
              Equiano's chilling words, to those who did not personally
              experience it; nor can any diagram appropriately convey the
              additional trauma that others, like Cugoano, chose to keep
              suppressed. As above, the lesson is not of the futility of
              visualizing data. It is, rather, one of hope: that with the image
              of the slave ship indelibly etched in our minds, we will keep the
              uses and limits of data visualization together in view. The power
              to produce an "instantaneous impression" in the eyes of viewers
              remains among the greatest strengths of data visualization.
              <InlineFootnote index={19} /> But as we consider this tremendous
              power, we must also—always—consider our responsibility for the
              insights that we design our visualizations in order to prompt, the
              knowledge they may lead to, and the detail and context—and in this
              case, the lives—that visualization alone cannot convey.
            </p>
          </Column>
          <Column shouldPin>
            <SeraphiqueTour figure={figures["2-1468px-Plan"]} />
          </Column>
        </TwoColumnLayout>

        <ChapterSectionTitle section={sections[1]} />

        <TwoColumnLayout>
          <Column shouldPin>
            <p className="first-paragraph">
              As Elford was scrutinizing the Parrey report, William Clarkston
              was pursuing his own research into the pernicious nature of the
              slave trade. Like Parrey, Clarkston began by transforming the
              available records into data. He visited merchant halls in order to
              examine the muster rolls stored there, and used them to compute
              mortality rates among the sailors aboard the ships. (The dangers
              of the slave trade to the sailors, who were predominantly white,
              would become a highly persuasive piece of evidence in the argument
              for its abolition.) While examining the muster rolls, Clarkson
              also covertly transcribed 20,000 of the sailors' names. He then
              sought out individual sailors—primarily those who had been
              mistreated or maimed—whom he thought might be willing to speak
              about the conditions aboard the ships (both those that they
              personally experienced and those of the captives that they
              observed).
              <InlineFootnote index={20} /> These efforts at an early form of
              mixed-methods research underscore Clarkson how understood the
              value of empirical evidence—qualitative as well as quantitative—in
              advancing his abolitionist claims.
            </p>
            <p>
              This view of the value of evidence of multiple forms, as well as
              the value of multiple forms of display, strongly influenced
              Clarkson's revisions to the original diagram. While Elford and the
              Plymouth Committee had first printed the diagram as a companion to
              a four-page abolitionist pamphlet, and later as a broadside
              version with the image at the top, it was Clarkson who insisted
              that the London Committee's version also include data tables. The
              tables included measurements of the ship, the Brooks, that had
              been used as a model for the diagram, and a conversion scale that
              indicated precisely how much square footage had been intended to
              be allocated to each captive on the chart. A second set of tables
              enabled a comparison between the number of captives who had
              actually been held on the original ship and the smaller number
              depicted in the diagram. This additional information was intended
              to "give a representation of the trade against which no complaint
              of exaggeration could be brought."
              <InlineFootnote index={21} /> It also underscores the fact that
              "Description of Slave Ship" was, like its predecessor, a data
              visualization. The "Description" has at times been dismissed from
              the visualization pantheon because of its political orientation,
              and because it is perceived to be an "infographic"—a direct
              representation of data—rather than an abstraction of more complex
              information. But "Description of a Slave Ship" in fact employs
              both of the grounding criteria of that era's definition of visual
              display: making "previously invisible phenomena subject to direct
              inspection," as Michael Friendly and Howard Wainer propose, and
              making those phenomena "palpable and concrete."
              <InlineFootnote index={22} />
            </p>
            <p>
              To wit: just as Clarkson's reintroduction of data to the chart
              underscored its basis in empirical evidence and buttressed its
              claims to the truth, so too did his visual modifications. More
              specifically, he shifted the view of the hold lower down the page,
              and added a series of cross-sections that showed additional views
              of the ship from the side. The inclusion of the cross sections
              drew from the conventions of naval architectural plans, which were
              by that time strongly established. This had the rhetorical effect
              of securing the chart's "graphic authority," as Marcus Wood
              describes it, in ways similar to how drawing new national borders
              on an existing map leveraged the power of its seemingly
              documentary form.
              <InlineFootnote index={23} /> Unlike a typical naval diagram—or,
              for that matter, a typical map—Clarkson's cross-sections also
              included people. These represented the captives themselves, whom
              Clarkson included as a way to show from multiple perspectives
              precisely how they were confined.
            </p>
          </Column>
          <Column shouldPin>
            <FigureObj figure={figures["4-description-1789"]} />
          </Column>
        </TwoColumnLayout>

        <ClarksonSideBySideScrollytell />

        <CenteredLayout>
          <p>
            Here we might recall how Elford's diagram depicted the captives'
            bodies with minimal differentiation, which scholars have largely
            interpreted as reflecting "an abolitionist cultural agenda which
            dictated that slaves were to be visualized in a manner which
            emphasized their total passivity and prioritized their status as
            helpless victims."
            <InlineFootnote index={24} /> In Clarkson's version, however, the
            captives are shown wearing loincloths. The men are shackled together
            in pairs, by both their hands and by their feet. The women, on the
            other hand, remain unbound, and with their breasts exposed.
            <InlineFootnote index={25} />
          </p>
          <p>
            The combined effect was a diagram that engaged the viewer through
            two very different epistemological registers, both at the same time.
            First, as a representation of the data that, through its use of
            naval convention, conveyed its graphical authority; and second, as
            an intentionally evocative graphic that was intended to elicit a
            combination of sympathy and shock.
            <InlineFootnote index={26} /> The desired result of the diagram,
            driven by empirical evidence and emotion, was that the viewer would
            perceive the "inhumanity of the trade" through both the eyes and the
            heart, and prompted by the "instantaneous impression" that it made
            on the senses, be compelled to act.
            <InlineFootnote index={27} />
          </p>
          <p>
            At this juncture one additional point becomes important to say in
            words: these viewers, like the captives themselves, also had a race:
            they were white, predominantly British and predominantly men, with
            lives far removed from the experience of enslavement. In point of
            fact, Clarkson had an even more specific audience in mind with his
            design: the Members of British Parliament, who were scheduled to
            vote on a motion to abolish the slave trade in several weeks' time.
            One of the London Committee's own members, William Wilberforce, was
            among them, and he believed, and even said as much, that if the MPs
            "could actually see one thousandth part of the evils of that
            practice which they have, for so many years, under one pretense or
            another, been prevailed on to suffer to be continued," they would
            quickly commit themselves to the abolitionist cause.
            <InlineFootnote index={28} />
          </p>
          <p>
            Here is where we will return to the idea of the "god trick,"
            mentioned earlier in this chapter, and explore its significance in
            fuller detail. The "god trick" is an idea developed by the feminist
            philosopher Donna Haraway, which they use to describe the false
            sense of neutrality that is conveyed through the default perspective
            of data visualization, the "view from above."
            <InlineFootnote index={29} /> The view from above can seem
            godlike—this is the "god" part of Haraway's term—but it is a "trick"
            because it preys upon our general tendency not to notice, let alone
            question, any perspective that adheres to the default. In this
            particular case, the seemingly godlike perspective is, in fact, the
            perspective of "predominantly white and male abolitionists and
            lawmakers," as sociologist Simone Browne observes.
            <InlineFootnote index={30} /> Browne analyzes Clarkson's
            "Description" in terms of the god trick, and employs it to
            underscore Haraway's primary point: while the "view from above" may
            seem like a view "from nowhere," it is in fact a view from
            somewhere—all viewpoints are.
            <InlineFootnote index={31} /> For Browne—and, we hope, for you now
            as well—the "Description" provides unassailable evidence of this
            fact.
          </p>
          <p>
            Given Clarkson's own writing on the subject, he would likely not
            disagree. Clarkson celebrated how the chart "brought forth tears of
            sympathy in behalf of the sufferers, and it fixed their sufferings
            in [the viewer's] heart."
            <InlineFootnote index={32} /> But Browne's analysis of the power
            relations embedded in the "Description," and more specifically, of
            "the primacy given in these abolitionist texts to white gazes and
            vantage points to the trauma of slavery," pushes us as twenty-first
            century viewers to see more. Looking closely, she explains:
          </p>
          <Quotation
            quote={
              <span>
                "One can see that each of the tiny black figures are not
                replicas of each other; rather, some have variously crossed
                arms, different gestures, or seem to turn to face one another,
                while some stare and look back at the gaze from nowhere, and in
                so being the Description of a Slave Ship can also be understood
                as depicting black looks and the trauma of Middle Passage as
                multiply experienced and survived."
                <InlineFootnote index={34} />
              </span>
            }
            byline={<span>Simone Browne</span>}
          />
          <p>
            Did Clarkson intend to depict the captives looking back at the
            viewer, challenging their gaze? Or was it just that, in his
            commitment to accurate representation, he could not but depict the
            captives' resistance
            <InlineFootnote index={35} /> in ways large and small? These
            questions lack definitive answers, but their possibilities are what
            matter more. What would it mean to visualize the experience of the
            Middle Passage from the perspective of the captives themselves? Is
            this a task that should be undertaken, and if so, by whom? What data
            would be required? Or, in the absence of data, what information
            might be marshaled instead? Should the visualization by one that
            anyone could access? Or is there some knowledge that should be kept
            from public view?
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[2]} />
        <CenteredLayout>
          <p className="first-paragraph">
            These were the very questions that I, Lauren, brought to the{" "}
            <cite>Data by Design</cite> project team. I also brought a dataset:
            a full download of the Trans-Atlantic Slave Trade Database, which
            (as of the time of this writing, in Spring 2024) contains records of
            36,150 unique slaving voyages that took place between the years 1514
            and 1866, resulting in the captivity and forced migration of an
            estimated 10.6 million souls.
            <InlineFootnote index={36} /> Ever since the first release of the
            database, in 1999 via CD-ROM, scholars and designers have attempted
            to give this powerful data visual form.
            <InlineFootnote index={37} /> Perhaps most prominently, in 2016,
            Andrew Kahn and Jamelle Bouie produced an animated visualization of
            the data for Slate, the online magazine, which depicted each of the
            20,528 voyages that were then in the database as small black dots
            that were seemingly pulled from the west coast of Africa to the
            Americas as if by magnetic force.
            <InlineFootnote index={38} /> While intended to "give sense of the
            scale of the trans-Atlantic slave trade across time, as well as the
            flow of transport and eventual destinations," the visualization was
            roundly critiqued by scholars of slavery for the god's eye
            perspective that it adopts. As literary scholar Britt Rusert
            asserts, "It's as if a series of ‘invisible hands' operate the
            trade," rather than specific people who should be condemned for
            their acts.
            <InlineFootnote index={39} /> Although she does not formulate her
            critique in these exact terms, what Rusert identifies is another
            version of the "god trick" at work.
          </p>
          <p>
            Reflecting on this visualization in the context of the questions
            posed above enabled our project team to clarify our task. We first
            considered the provenance of the dataset, and reflected on the fact
            that the shipping logs and other data tables that served as its
            primary sources were created by the enslavers, and not the enslaved.
            This reminded us of the power relations embedded in the data, those
            that could never be removed, as well as of how that power
            contributed to a range of omissions and gaps. We also reflected on
            our own subject positions, and the fact that, among the five of us
            collaborating on this particular visualization, only one of us had
            ancestors who had themselves been enslaved. This prompted a
            recognition on behalf of the group that there were certain stories
            about the data that we could not tell, and should be left for others
            to convey. Finally, we reflected on Jessica Marie Johnson's powerful
            statement that "there is nothing neutral, even in a digital
            environment, about doing histories of slavery."
            <InlineFootnote index={40} /> This called us back to the range of
            harms that can be brought about by engaging with this history, as
            discussed earlier in this chapter, and to how data visualization is
            not immune. We saw the potential for "second-order violence," as
            Hartman terms it, both in the act of reanimating a dataset that, in
            its original form, conscribed the people it represented to living
            death; and in the act of controlling the layout and motion of this
            dataset which itself documented the forced migration of so many.
            From this process, our goal became more refined. In order to honor
            the enslaved as they lived, and not as they were reduced to data, we
            would need a visual strategy for showing just how much about these
            lives the data could not and could never show.
          </p>
          <PullQuote title="To honor the enslaved as they lived, and not as they were reduced to data, we would need a visual strategy for showing just how much about these lives the data could not show." />
        </CenteredLayout>

        <VoyageScrollytell
          triggers={[
            <span key="490b6e1c">
              One variable included in the dataset, labeled “Resistance,” seemed
              to hold the key to this work.
            </span>,
            <span key="38d0f8a6">
              It contained seven categories for indicating the form of
              resistance that took place on any particular trip. Could we use
              the “Resistance” variable to create a visualization that, to
              recall Browne's phrase, “looked back at the gaze from nowhere”? We
              began by pulling out the voyages that had any form of “resistance”
              associated with them, as well as six of the more basic variables
              that were associated with each trip.
            </span>,
            <span key="8e1ece04">
              The additional variables we selected, the voyage's start date, its
              end date, the total number of individuals who “embarked” on the
              voyage, and the total number of the individuals who disembarked,
              would allow us to provide a basic picture of each of the 572
              voyages that contained a documented act of resistance.
              <InlineFootnote index={41} />
            </span>,
            <span key="442c2e00">
              Because our initial motivation was to visualize the dataset from
              the perspective of the enslaved, our design departed from a
              frequent observation made about the experience of the Middle
              Passage: that the captives did not experience time as linear while
              in the hold of the ship.
              <InlineFootnote index={42} />
            </span>,
            <span key="cd4ac8ca">
              Drawing visual inspiration from Harold Fisk's alluvial diagram of
              the Mississippi River, which, as artist and scholar Romi Morrison
              explains, “deemphasizes the linearity of the river” in favor of
              showing a comparative view of its various paths over time, we
              arrived at an idea to use bends and turns to represent the
              non-linearity of the Middle Passage.
              <InlineFootnote index={43} />
            </span>,
            <span key="156434b0">
              We also kept the vertical orientation of the visualization so as
              to ensure that the viewer could not interpret the paths of the
              voyages as corresponding to any actual location on a map.
            </span>,
            <span key="963d2d76">
              Borrowing the color palette from the Fisk diagram, but muting the
              colors so as to ensure that this visualization of an experience of
              trauma would not inadvertently become beautiful to perceive, we
              represented each voyage as a snaking line determined by the number
              of captives held on each ship.
            </span>,
            <span key="a2565c78">
              In the final visualization, the width at the top of each “bind,”
              as we came to call them, corresponds to the number of captives who
              departed from Africa on each ship. The width at the bottom
              corresponds to the number who arrived in the Americas having
              survived. The duration of each voyage is conveyed through the
              amplitude of each bind, but plotted from the side.
            </span>,
            <span key="d4c5b977">
              While Fisk's original design superimposes the floodplains of the
              Mississippi from all points in time on a single image, we chose to
              retain the start date of each voyage, since the rise and fall of
              the slave trade—and the resistance that met it throughout—remained
              important for us to convey. Here the binds are arranged
              chronologically, from the first recorded act of resistance aboard
              a slave ship in 1565, through the last in 1865.
            </span>,
            <span key="2356b657">
              Since the majority of the voyages lacked data on the month or day
              of departure, we grouped the voyages by year. While the visual
              effect of this decision is not visible when viewing the voyages as
              a whole.
            </span>,
            <span key="577fe346">
              Zooming in on a particular time span exposes these clusters for
              closer inspection.
            </span>,
            <span key="90c3c7eb">
              As an example, we might consider the time-span between 1756 and
              1766, the decade during which Olaudah Equiano was enslaved. Within
              each year, we can also see that the binds themselves overlap—what
              is called “occlusion” in visualization design. While generally
              viewed as a design problem, and something to avoid, we made the
              decision not to further space out the voyages because of viewing
              them together communicates the collective force of these acts of
              resistance, as well as the additional nuance that a single
              inclusion criterion—resistance or not—cannot convey.
            </span>,
            <span key="cf140bd8">
              The voyage that took Equiano from Benin to Barbados and on to
              Virginia is not pictured in this chart, however, for it did not
              include a form of resistance that was documented in the database.
              But it might have been included among the 35,504 additional
              voyages that the database currently contains.
            </span>,
            <span key="2deac1f9">
              With the additional voyages also plotted, the binds transform into
              life-affirming arteries within the sinews of human flesh.
              <InlineFootnote index={44} />
            </span>,
            <span key="1c73c2f3">
              But as evocative as this visual representation may be, there are
              many other forms of resistance, large and small, that this
              visualization does not convey.
            </span>,
            <span key="7ed03972">
              In his autobiography, for example, Equiano recalls observing acts
              of resistance aboard the ship that were set in motion, but
              ultimately “prevented by the ship's crew.” These acts of
              resistance likely had concrete effects, both for the crew which—in
              their need to suppress them—perhaps also attuned them to the
              odious nature of the acts in which they were engaged; and for the
              captives, who perhaps might have taken heart—or inspiration—in the
              possibilities to push back against their likely fate. But as
              unfinished acts of resistance, they would have gone unrecorded in
              the dataset.
            </span>,
            <span key="8562b8b3">
              We might also consider the myriad number of smaller acts of
              resistance, including those in which Equiano himself engaged. Upon
              first being captured, for example, Equiano described how he
              refused to eat; and when his captor attempted to give him a new
              name, depriving him of his identity and his Ibo roots, “I refused
              to answer to my new name,” Equiano explains.
              <InlineFootnote index={45} /> Equiano's more “quiet” forms of
              resistance, as Kevin Quashie might term them, were also real, and
              also meaningful, even as they remain difficult to represent as
              data ever at all.
            </span>,
            <span key="f754f6ea">
              It was here, again, that we turned to the power of data
              visualization to bring these quiet acts of resistance to light. In
              the final view, we display all 36,079 voyages with a color fill,
              implying that every single journey involved acts of
              resistance—some that are recorded in the dataset, some that took
              place but went unrecorded, and some that defied recording at all.
              What we were visualizing, our process allowed us to see, was not
              actually the slave trade, but the data it had left in its wake.
            </span>,
            <span key="c7a66f59">
              But as the additional voyages are layered into the frame, the
              viewer can no longer see clearly enough to deduce anything about a
              specific voyage. This is intentional, because the insight that we
              seek to prompt exceeds the data on display: that there are certain
              phenomena, such as the slave trade itself, which we can never
              fully understand.
            </span>,
          ]}
        />

        <ClientOnly>
          {() => (
            <VoyagesVis
              id="voyage-interactive"
              allVoyages
              fullColor
              // widthAdjust={1}
              interactive
            />
          )}
        </ClientOnly>

        <ChapterSectionTitle section={sections[3]} />
        <CenteredLayout>
          <p className="first-paragraph">
            While it would take another nine years—and, according to the
            Trans-Atlantic Slave Trade Database, an additional 1.5 million
            people or more forcibly separated from their homelands—for the
            British Parliament to formally abolish the slave trade, historians
            generally credit "Description of a Slave Ship," and Thomas Clarkson
            in particular, for a large part of the campaign's success.
            <InlineFootnote index={46} /> Clarkson himself likely contributed to
            this narrative; in 1808, one year after the formal Act of
            Parliament, he published a two-volume tome,{" "}
            <cite>
              The History of the Rise, Progress, and Accomplishment of the
              Abolition of the Slave Trade by the British Parliament
            </cite>
            , which provided his own first-hand account of British abolition.
            <InlineFootnote index={47} />
          </p>
          <p>
            Interspersed among the History's nearly 1,200 pages were four
            images—among them, a revised version of "Description of a Slave
            Ship," and a new visualization that Clarkson himself designed. It
            depicts the history of abolition in the form of a watery network.
            Each of the "springs and rivulets" is labeled with the name of a
            significant abolitionist. The streams are arranged from top to
            bottom, roughly according to time, with horizontal lines separating
            efforts that took place before 1650, 1700, 1740, and 1787,
            respectively. As the viewer follows the streams down the page, they
            converge into "two great political rivers, representing the
            abolitionist movement in England and America," and while outside of
            the bounds of the page, presumably meet in the sea.
            <InlineFootnote index={48} />
          </p>

          <FigureObj figure={figures["5-The_history_of_the_rise"]} />

          <p>
            On the surface, the metaphor of abolition as a network of streams
            and rivers flowing into a common sea may seem like an apt
            representation of a social movement which drew strength from
            countless individuals and collectives over an extended period of
            time. This resonance must have been intentional, given how Clarkson
            elsewhere analogized the British antislavery movement to the
            distributed functioning of a human body, with "every limb...
            essentially necessary for the completion of a perfect work."
            <InlineFootnote index={49} /> And yet, certain key contributors are
            missing from the chart. Most notably, the name of Olaudah Equiano,
            or of any other Black abolitionist, is nowhere to be found.
          </p>
          <PullQuote title="And yet, certain key contributors are missing from the chart. Most notably,  the name of Olaudah Equiano, or of any other Black abolitionist, is nowhere to be found." />
          <p>
            As with "Description of a Slave Ship," the question of audience
            returns to the fore. This chart was also not designed for those who
            were enslaved, but rather, for a white British viewership—those who
            sought to valorize their own role in the fight to end the slave
            trade. In his analysis of the image, Marcus Wood speculates that
            this goal—and its disconnection from the actual facts—is the source
            of the confusion that the visualization ultimately imparts.
            Clarkson's "attempt to create a self-sufficient cultural history for
            the cause requires a coherent descriptive model which is capable of
            overriding the heterogeneity of the names and writings he has
            furnished" in the text of his volume, Wood asserts, as it does of
            the composition of the movement overall.
            <InlineFootnote index={50} /> Here, the success of the movement
            "belong[s] to no single abolitionist but to a mysterious sea, into
            which, in a strange reversal of the generative metaphor, al`l the
            tributaries pour."
            <InlineFootnote index={51} /> The sea metaphor is further clouded by
            the role that actual water—namely, the Atlantic Ocean—played in the
            slave trade. Why would Clarkson use water—the very site of the
            dehumanization that enslavement brought about—as the anchoring
            metaphor of his account?
          </p>
          <PullQuote title="Why would Clarkson use water—the very site of the dehumanization that enslavement brought about—as the anchoring metaphor of his account?" />
          <p>
            But Clarkson was anchoring his diagram in some stable ground:
            namely, the then-prevalent use of water and streams to visually
            represent the passage of time. In Cartographies of Time, Daniel
            Rosenberg and Anthony Grafton position Clarkson's diagram as a
            direct adaptation of the ideas expressed by the German chronologer,
            Friedrich Strass, who had published his own widely circulated "Strom
            der Zeiten" (Stream of Time) only a few years earlier, in 1803.
            Translated into multiple languages, including English, and widely
            circulated across Europe and the United States, "Strom der Zeiten"
            was almost certainly a chart that Clarkson saw. But even if he did
            not, Clarkson clearly intuited how the water metaphor "gives greater
            liveliness to the ideas, and impresses events more forcibly on the
            mind, than the stiff regularity of the straight line," as William
            Bell, the English translator of Strass's chart, explained.
            <InlineFootnote index={53} />
          </p>
        </CenteredLayout>

        <CenteredLayout>
          <FigureObj
            className="md:grid grid-cols-2 gap-4"
            figures={[figures["6-stream"], figures["7-Bell"]]}
          />

          <p>
            Indeed, there is a version of the history of data visualization that
            need not be significantly reconfigured in order to provide Clarkson
            with a more prominent place. Many scholars, including Rosenberg and
            Grafton, have made the case that chronological charts such as those
            created by Strass and Bell, as well as their more linear
            antecedents, "cleared the way for statistical graphics" by
            introducing the idea of consistent scale.
            <InlineFootnote index={54} /> This argument is confirmed by the
            purported "pioneer" of statistical graphics himself, William
            Playfair, the subject of the next chapter, who praised the genre for
            "making space represent time," and for using "a line of proportional
            length and in a suitable position."
            <InlineFootnote index={55} /> As we will learn, Playfair described
            the purpose of his own visualizations in terms quite similar to
            Clarkson's: to unite "a number of separate ideas… under one simple
            impression of vision, and consequently, one act of memory."
            <InlineFootnote index={56} />{" "}
          </p>
          <PullQuote title="But to simply slot Clarkson into the standard history of the field would miss much of the point." />
          <p>
            But to simply slot Clarkson into the standard history of the field
            would miss much of the point. For Clarkson's visualizations, both
            "Description of a Slave Ship" and his map of abolition, matter as
            much for the questions that they provoke as they do the knowledge
            that they reveal. When we look closely at either the diagram or the
            map, we are prompted to ask what this "impression" conveys and what
            it omits. We must consider the perspectives of the people for whom
            these charts have been designed, the people who will benefit from
            looking, and the people who are merely looked upon. We must consider
            whose data is on view in any particular chart—and in the case of
            "Description of a Slave Ship, whose actual lives. And we must
            consider the potential for violence or harm that visualizing their
            data might, however inadvertently, bring about. These are not
            questions that Clarkson himself brings to the fore, but they are
            ones that we as twenty-first century viewers of his
            visualizations—and as designers of visualizations as well—should now
            be required to ask. If these questions seem weighty, it is because
            they are. Visualizations of data are indeed powerful, as the success
            of "Description of a Slave Ship" affirms. But it is precisely
            because of this power that we must continue to probe the nature of
            the insights that visualization can help to prompt, and the
            additional insights that it can never convey.{" "}
          </p>
          <PullQuote
            title="It also underscores how, if the goal of a visualization is to bring about change,"
            subtitle="then it must necessarily be accompanied by action."
          />
          <p>
            We will never know if these are some of the questions that Equiano
            posed to Clarkson upon seeing the original diagram, as there is no
            record of the conversation that transpired. Several weeks later,
            however, Equiano published a letter in{" "}
            <cite>The Public Advertiser</cite>, a prominent London newspaper, in
            which he acknowledged "having seen" the chart.
            <InlineFootnote index={57} /> Interestingly, Equiano does not
            comment directly on the image, choosing instead to affirm the work
            of the abolitionist movement overall. But I believe that we can
            still learn from Equiano's statement about what he saw. In the
            diagram, Equiano saw clear evidence that its designers sought to
            "contribute to so important a moral and religious duty as that of"
            ending the slave trade. But he also saw that the chart alone would
            not be enough. As a person who had himself been enslaved, Equiano
            understood first-hand that ending "one of the greatest evils now
            existing on earth" would require more than the chart alone could
            convey. And therein lies the final lesson of "Description of a Slave
            Ship" for visualization in the present. It has to do with the
            continued insistence that before there is data, there are
            people—people with lives that data alone cannot convey. It also
            underscores how, if the goal of a visualization is to bring about
            change, then it must necessarily be accompanied by action. To be
            sure, not all visualizations are designed to effect political
            change. And in fact, most visualizations are explicitly designed
            with the opposite goal—of focusing on what the data, itself, can
            reveal. But the example of "Description of a Slave Ship," which
            visualizes the most monumental of humanity's stakes, should
            underscore the responsibility that comes with the design of any
            visualization—and with the viewing of any visualization as well: to
            ask what knowledge it can point towards, and what it cannot show.
          </p>
        </CenteredLayout>
        <Takeaways
          forDesigners={[
            <span key="df782d45">
              Takeaway 1 Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </span>,
            <span key="6440631a">
              Takeaway 2 Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </span>,
            <span key="2f317172">
              Takeaway 3 Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </span>,
          ]}
          forViewers={[
            <span key="75cf526a">
              Takeaway 1 Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </span>,
            <span key="6d2691fc">
              Takeaway 2 Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </span>,
            <span key="9650286d">
              Takeaway 3 Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </span>,
          ]}
        />
      </ChapterBody>
      <CenteredLayout>
        <FootnotesList footnotes={descriptionFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
