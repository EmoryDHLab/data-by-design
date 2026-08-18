import { useState } from "react";
import ChapterTitle from "~/components/ChapterTitle";
import { ChapterContext } from "~/chapterContext";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";
import ProjectTimelineInteractive from "~/components/image/projectTimeline/ProjectTimelineInteractive";
import Figure from "~/components/figures/Figure";
import CenteredLayout from "~/components/layout/CenteredLayout";
import PlayfairScrollytell from "~/components/image/RecreationScrollytell";
import Footer from "~/components/Footer";
import InlineFootnote from "~/components/InlineFootnote";
import { imageFootnotes } from "~/footnotes";
import FootnotesList from "~/components/FootnotesList";
import Quotation from "~/components/Quotation";
import figures from "~/data/figures/image.json";
import { chapterMetaTags } from "~/utils";
import ChapterBody from "~/components/layout/ChapterBody";
import Takeaways from "~/components/layout/Takeaways";
import { chapterMeta } from "~/data/chapterMeta";
import type { MetaFunction } from "react-router";
import type { HoverState, TVizAnchors } from "~/chapterContext";
import LineSegmentsScrollytell from "~/components/image/LineSegmentsScrollytell";
import Error from "~/components/image/Error";
import HoverText from "~/components/HoverText";

export const meta: MetaFunction = () => {
  return chapterMetaTags("image");
};

const sections = [
  {
    title: "The Value of Visualization",
    id: "the-value-of-visualization",
  },
  {
    title: "The Politics of Playfair’s Charts",
    id: "the-politics-of-playfairs-charts",
  },
  {
    title: "Playfair’s Charts in the Present",
    id: "playfairs-charts-in-the-present",
  },
  {
    title: "Reframing the Power of Playfair’s Charts",
    id: "reframing-the-power-of-playfairs-charts",
  },
];

const visualizations: TVizAnchors[] = [
  {
    type: "scrollytell",
    id: "playfair-scrollytell",
    title: "Playfair Scrollytell",
  },
  {
    type: "visualization",
    id: "project-timeline-interactive",
    title: "Project Timeline Interactive",
  },
  {
    type: "scrollytell",
    id: "line-segments-scrollytell",
    title: "Recreating the Data Lines",
  },
];

const chapterFigures = Object.values(figures);

export default function PlayfairPage() {
  const [hoverState, setHoverState] = useState<HoverState>(undefined);
  const [showFootnotes, setShowFootnotes] = useState<boolean>(false);

  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "imagePrimary",
        primaryTextColor: "black",
        accentColor: "imageSecondary",
        footnoteTextColor: "imagePrimary",
        footnotes: imageFootnotes,
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
        title={chapterMeta.image.title}
        subtitle={chapterMeta.image.subtitle}
      />
      <ChapterBody>
        <CenteredLayout>
          <Quotation
            quote={
              <>
                Data visualization has never been neutral or objective. There is
                a meaning — and an argument — conveyed through each visual
                design.
              </>
            }
          />
          <p className="first-paragraph">
            We can only imagine the choice words William Playfair exclaimed when
            he realized the{" "}
            <HoverText hoverState="showError">error</HoverText> that he had
            engraved into his most recent chart, “Exports &amp; Imports to and
            from all North-America.” It was 1801, 12 years since SEAST first
            published “Plan of an African Ship’s Lower Deck” and 15 since
            Playfair had published the first edition of{" "}
            <cite>The Commercial and Political Atlas</cite>, in which an early
            version of his own chart first appeared. Engraving was then, as now,
            an incredibly time-consuming process. Albrecht Dürer, the
            Renaissance printmaker credited with elevating engraving to an art
            form, took over three months to complete his famed{" "}
            <cite>Knight, Death, and Devil</cite> (1513), a print not much
            larger than an iPad. In the case of Playfair, however, it was not
            merely the time he had invested in producing the 28 plates for the
            third edition of his <cite>Atlas</cite>; it was also the expense.
          </p>

          <Error>
            <p>
              Today, William Playfair, who lived from 1759 to 1823, is widely
              celebrated for his leading role in the development of modern data
              visualization. His bar charts, pie charts, and time series charts
              are often heralded as among the earliest of their kind.
              <InlineFootnote index={0} />In his own time, however, Playfair
              remained “largely unacknowledged” for his innovations.
              <InlineFootnote index={1} />More to the point, he was almost
              always nearly broke.
              <InlineFootnote index={2} />So while Playfair chose to commission
              one of the most skilled engravers in all of London, Samuel John
              Neele, to produce the plates for his book, he also likely
              requested that Neele work at speed so as to minimize the costly
              detailing and other flourishes for which he was known. It is
              hypothesized that Neele engraved the charts’ decoration, framing,
              titles, and other lettering, leaving Playfair—who had previously
              trained as an engineer—to engrave the lines of imports and exports
              by himself.
              <InlineFootnote index={3} />
            </p>
          </Error>
        </CenteredLayout>

        <CenteredLayout>
          <Figure
            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-center"
            classNames={["", "", "md:col-span-2"]}
            figures={[
              figures["0202-buache"],
              figures["0203-playfair-scotland"],
              figures["0204-playfair-pie"],
            ]}
            groupCaption={
              <p className="md:col-span-2 font-neueMontreal text-xs md:text-sm leading-5 text-left mb-6 md:mb-12 col-span-full">
                Top left: “A bar chart from 1770 created by the French mapmaking
                team of Philippe Buache and Guillaume de L’Isle. William
                Playfair included a less ornate bar chart in his Commerical and
                Political Atlas, and returned the form later in life.” Image
                from the David Rumsey Map Collection courtesy Stanford
                University Libraries. Digitized by the David Rumsey Map
                Collection, Cartography Associates. Top right: “The bar chart
                included in the first edition of Playfair's Commercial and
                Political Atlas, considered one of the first examples of the bar
                chart form.” Image courtesy of Wikimedia Commons. Bottom:
                Playfair’s “Chart Representing the Extent, Population &amp;
                Revenues, of the Principal Nations in Europe, after the Division
                of Poland &amp; Treaty of Luneville,” published in the
                Statistical Breviary (1801). The pie charts included in this
                volume are considered the first of their kind. Image courtesy of
                Wikimedia Commons.
              </p>
            }
          />
          <p>
            To produce engravings like Playfair’s, a thin copper plate is first
            coated with a “ground.” Typically, this is a layer of wax or
            varnish, chalk, or soot. Using a stylus, the engraver traces an
            outline of the design in mirror image into the ground. The wax (or
            equivalent) layer is then removed, but a faint impression remains,
            which the engraver then uses as a guide to carve the image into the
            copper plate. The image is engraved with a metal tool called a
            burin, which, somewhat counterintuitively, is held still while the
            engraver rotates the underlying plate.
            <InlineFootnote index={4} />Playfair’s error was thus a common one, a
            slip of a tired hand. It wouldn’t even be very noticeable once the
            colored paint was overlayed. But neither of those excuses would have
            made it more tolerable to the man who was already, by his own
            account, “long anxious” to be acknowledged for the “invention” of
            what we now call data visualization.
            <InlineFootnote index={5} />Unlike the array of software platforms
            and programming libraries used to create visualizations today, each
            of which allow for infinite revision—at least until the product
            ships—the engraving process employed by Playfair resulted in an image
            that was irreversibly inscribed into copper. Considering the time and
            money also invested, it might as well have been set in proverbial
            stone.
          </p>
          <p>
            This chapter takes up the processes involved in transforming data
            into image, both material and conceptual, in order to continue our
            exploration of the relationship between data and its visual display.
            For everyday viewers, it can be tempting to assume that any
            particular visualization—or, at least, any good one—offers a direct
            representation of the data underneath; that its visual form is
            neutral; and that what we’re looking at reflects an objective view of
            the data at hand. In the interest of full disclosure, I will admit
            that I, a person who should know better, still sometimes find myself
            seduced by the “aura of objectivity” that visualizations so often
            convey.
            <InlineFootnote index={6} />But that feeling of objectivity is often
            carefully engineered, as the SEAST ship diagrams of chapter 1 have
            begun to show. Turning now to Playfair’s time-series charts, so often
            upheld as the epitome of neutral and objective form, we will together
            come to see how human hands—and human decisions—shape the design of
            each and every chart.
          </p>
          <p>
            By examining the material processes by which Playfair created his
            charts, together with his writing, this chapter will surface the
            range of decisions that contributed to the charts in their final
            form. More than that, this chapter will show how these decisions
            reflected Playfair’s personal view about the value of visualization
            and the people who, he believed, could best benefit from it. Very
            crucially, this perspective on the uses of visualization does not
            invalidate the insights that Playfair’s charts so clearly and
            efficiently convey. On the contrary, it opens up to a lesson more
            profound: about how the practice of visualization is always shaped by
            specific people, their tools and processes, and the ideas that
            underlie them, just as much as it is by the specific dataset being
            given visual form.
            <InlineFootnote index={7} />
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[0]} />

        <TwoColumnLayout>
          <Column>
            <p className="first-paragraph">
              The charts that William Playfair created for his{" "}
              <cite>Commercial and Political Atlas</cite> have long appeared to
              speak for themselves. Their bold data lines, enhanced by
              hand-tinted color fills and set against sharp black gridlines,
              suggest nothing less than statistical certainty. Perhaps for this
              reason, Playfair did not intend to include his charts’ underlying
              data in the <cite>Atlas</cite>. It was only after soliciting
              feedback from James Watt, inventor of the steam engine—and a man
              for whom Playfair worked in his youth—that he decided to render the
              data associated with his charts in tabular form. “It might be
              proper,” Watt advised, “to give in letter press the Tables from
              which the Charts have been constructed … for the charts now seem to
              rest on your own authority, and it will naturally be enquired from
              whence you have derived your intelligence.”
              <InlineFootnote index={8} />
            </p>
            <p>
              Watt’s concern reveals what Playfair’s charts conceal: they are not
              transparent windows into economic or political truths. Rather, they
              are visual interpretations of overall trends—trends that require
              statistical validation to be confirmed. In response to Watt’s
              comments, Playfair thus dutifully compiled data tables to accompany
              each of his charts, which documented the figures he’d “derived from
              the papers and books” of the London custom house, and he included
              these as appendices in the first and second editions of the book.
              <InlineFootnote index={9} />
            </p>
            <p>
              But by the book’s third edition, Playfair had gained enough
              confidence in the form and function of his charts that he no longer
              felt obligated to include the associated data tables, as Watt had
              initially advised. Having reflected on the value of his
              contributions in the 15 years since the book’s first edition,
              Playfair had come to see the function of his charts as quite
              distinct from that of the associated data, or “Figures,” as he
              termed them.
              <InlineFootnote index={10} />In the introduction to the third
              edition, he explains:
            </p>

            <Quotation
              quote={
                <>
                  The advantage proposed by this method, is not that of giving a
                  more accurate statement than by Figures, but it is to give a
                  more simple and permanent idea of the gradual progress and
                  comparative amounts, at different periods, by presenting to the
                  eye a figure, the proportions of which correspond with the
                  amount of the sums intended to be expressed.
                  <InlineFootnote index={11} />
                </>
              }
              byline="William Playfair, The Commercial and Political Atlas, 3rd ed."
            ></Quotation>

            <p>
              In his explanation—which was required because so few of his readers
              had ever seen a data visualization before—Playfair is explicit
              about the fact that his charts are “not more accurate” than his
              data tables. Rather, he understands the value of his charts as
              offering a different contribution: the ability to impart a “more
              simple and permanent idea.” As in Thomas Clarkson’s writing,
              discussed in chapter 1, here we also see the strong influence of
              Enlightenment empiricism.
              <InlineFootnote index={12} />Playfair asserts that his charts will
              present an image “to the eye,” in keeping with the Lockean view of
              how sensory experience—and vision in particular—serves as the
              substrate from which knowledge is formed. This image, as he further
              explains, is one that can then be processed by the mind into a
              “simple, accurate, and permanent idea.”
              <InlineFootnote index={13} />
            </p>
            <p>
              Along these lines, we might also recall Clarkson’s stated aim of
              creating an “immediate impression.” Similarly, Playfair expresses
              his hope that “a sufficiently distinct impression will be made, to
              remain unimpaired for a time, and the idea which does remain will
              be simple and complete.”
              <InlineFootnote index={14} />This statement encapsulates Playfair’s
              ideas about how visualization leads to knowledge—in short, his
              epistemological theory. For Playfair, visualization prompts
              insights that are “distinct” from the insights that derive from
              scanning data tables, or from the statistical analysis of same. The
              knowledge that visualization leads toward is “more simple,” but it
              is also easier to understand. As a result, it is easier to
              remember—and valuable in its own right.
              <InlineFootnote index={15} />
            </p>
            <p>
              Playfair’s goal of presenting a “simple and complete” idea, over
              and above any particular data point, is visible in the revisions
              that he made to “Exports &amp; Imports to and from all
              North-America” for the third edition of the <cite>Atlas</cite>.
              <InlineFootnote index={16} />
            </p>
          </Column>
          <Column className="md:ml-12" shouldPin={true}>
            <Figure figure={figures["0205-am1787pla-741-q-24"]} />
            <Figure figure={figures["0206-am1787pla-741-q-65"]} />
          </Column>
        </TwoColumnLayout>

        <span id={visualizations[0].id}>
          <PlayfairScrollytell
            triggers={[
              <span key="1218601d"></span>,
              <span key="149fff42">
                The tables in the first and second editions of the Atlas 1786.
              </span>,
              <span key="eac31668">1787</span>,
              <span key="7e80c3fc">
                For the years between 1700 and 1770, there is only data for each
                decade.
              </span>,
              <span key="6830c50a">
                The tables in the first and second editions of the{" "}
                <cite>Atlas</cite> include annual data for the years between
                1770 and 1782.
              </span>,
              <span key="5bd252c7">
                For the years between 1700 and 1770, there is only data for each
                decade.
              </span>,
              <span key="8340a9d4">
                He shaded the area between the two data lines in order to
                illustrate the balance of trade between the two nations.
                Stippled dots indicate periods of time when the amount of
                imports from North America to England exceeded the amount of
                exports from England to North America. Diagonal lines indicate
                the times when exports from England to North America exceeded
                imports.
              </span>,
              <span key="8ceb9cdd">
                In the accompanying chart, Playfair includes both major and
                minor gridlines along the y-axis of the chart, but he includes
                minor gridlines along the x-axis only for the twelve years for
                which he possesses annual data. Presumably, this indicates the
                greater granularity of those years’ data.
              </span>,
              <span key="8e121b42">
                In the third edition of the <cite>Atlas</cite>, however, these
                minor gridlines disappear—along with the data tables.
              </span>,
              <span key="585d79be">
                Playfair extends the endpoint of the x-axis to 1800—what was
                then the present. In addition, the data-lines become less
                precise. The lines of imports and exports also become
                smoother--a reflection of either his desire to convey a more
                “simple” idea, or his improved engraving technique, or both.
              </span>,
              <span key="dab6327f">
                In this edition, he also makes significant improvements to the
                charts’ design. He replaces the hachure and stippled dots
                employed in the second edition to indicate the difference
                between the periods of trade in favor of and against England
                with hand-stained color.
              </span>,
              <span key="55b81857">
                He (or more likely, the master-engraver Neele) also placed the
                titles in oval superimposed upon the chart, rather than above,
                and decided to remove the explanatory notes about the charts’
                scale.
              </span>,
              <span key="56df66b8">
                He labeled the axes and modified the scale markers of the
                charts—each of which also improved legibility.
              </span>,
              <span key="a74c7264">
                The overall effect was to solidify the authority of the “simple
                and complete idea” that he envisioned from the start.
              </span>,
              <span key="e6a1c5ea"></span>,
            ]}
          />
        </span>

        <CenteredLayout className="pt-20">
          <p>
            We can still marvel at Playfair’s striking images—perhaps even more
            so after we recognize the range of circumstances that contributed to
            their final form. But we must also consider the limits of the visual
            epistemology that they encode. This is one that, in many ways, has
            been carried directly forward from Playfair to the present, in our
            continued belief that clarity and efficiency are what will lead us to
            the most objective knowledge.
            <InlineFootnote index={20} />But complete objectivity is an illusory
            goal. This is the reason that I find so much significance in the
            error engraved in Playfair’s chart; it endures as a reminder of the
            person who created it, and the decisions that person—William
            Playfair—personally made.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[1]} />

        <TwoColumnLayout>
          <Column>
            <p className="first-paragraph">
              Playfair created his charts at a time of intense political change,
              matched only by the intensity of his personal financial struggles.
              At the time that Playfair released the third edition of the{" "}
              <cite>Atlas</cite>, the French Revolution had only just come to an
              end. Playfair himself had lived in Paris for six years after the
              initial publication of the <cite>Atlas</cite>, first riding high on
              his reputation—Louis XVI reportedly “expressed great satisfaction”
              in his charts—and then on the profits from a series of business
              schemes.
              <InlineFootnote index={21} />But in 1792, after a surge of
              anti-aristocratic violence, including an assault on a close friend
              that took place right outside his door, Playfair was forced to
              return to England—and to his writing career.
              <InlineFootnote index={22} />
            </p>
            <p>
              Upon his return to writing, perhaps predictably, Playfair’s
              finances began to decline.
              <InlineFootnote index={23} />With the exception of his 1795{" "}
              <cite>History of Jacobinism</cite>, informed by his experience in
              France, Playfair’s writing did not earn him the attention, or the
              profit, that he believed he deserved. A series of failed business
              ventures in the second half of the 1790s—most ignominiously, the
              loss of an entire bank—culminated in personal bankruptcy. Thus when
              Playfair explains, in the preface to the third edition, that he has
              “chosen the present moment” to rerelease his charts, he is referring
              to a moment of both political uncertainty and personal upheaval—the
              latter, by all accounts, more acutely felt.
              <InlineFootnote index={24} />
            </p>
            <p>
              Playfair would go to debtor’s prison shortly after the publication
              of the third edition of the <cite>Atlas</cite>. He would never see
              the book’s proceeds, which would go to his creditors instead.
              <InlineFootnote index={25} />But the extent of his financial
              distress makes his continued faith in the power of data
              visualization all the more affecting. He still vehemently believed
              that his work could make an intervention on a global stage—a means
              of countering the instability that the age of revolutions had
              brought about. “The minds of men, the boundaries of nations, their
              laws and relations with one another, are all in a state of change,”
              he writes in the third edition’s preface.
              <InlineFootnote index={26} />While he cannot (or will not) say
              whether “war and contention” or “art and commerce” will ultimately
              prevail, he sees this uncertainty as further underscoring the
              enduring value of his charts. As he explains:
            </p>

            <Quotation
              quote={
                <>
                  If [a future of war] turns out so, a picture of the past will be
                  a valuable thing, if, on the contrary, commerce should still
                  continue its progress, this will make the first part of a great
                  whole, which, when completed on some future day, will be a most
                  valuable work.
                  <InlineFootnote index={27} />
                </>
              }
              byline="William Playfair, The Commercial and Political Atlas, 3rd ed."
            ></Quotation>

            <p>
              From these lines, it would seem that Playfair thinks his charts can
              not only capture a clear “picture of the past,” but also retain
              their significance in a range of possible future scenarios. Their
              simplicity, as it turns out, is a key feature. It is by minimizing
              complexity—and not, per today’s adage, visualizing it—that,
              according to Playfair, “valuable” and enduring knowledge is made.
              <InlineFootnote index={28} />Returning to the engraving error in
              “Exports &amp; Imports in all of North America,” it may well be
              that Playfair was not perturbed at all. The chart still communicated
              all the information that Playfair intended, which in the end was not
              dependent upon the accuracy of any particular data point but only a
              general trend.
            </p>
          </Column>
          <Column shouldPin>
            <Figure figure={figures["0212-minard"]} />
          </Column>
        </TwoColumnLayout>

        <CenteredLayout>
          <p className="text-center font-power text-xl">***</p>
        </CenteredLayout>

        <TwoColumnLayout>
          <Column>
            <p>
              Setting aside Playfair’s feelings about the error for the moment, a
              pair of more portentous questions remain: for whom is this
              particular “picture of the past” truly valuable, and why must a
              “simple” picture be the one that remains? As Playfair continues to
              elaborate the impetus behind the “form and manner” of his charts, he
              makes clear that his intended audience is not “any person” in the
              world, but rather a narrower demographic: “men of high rank, or
              active business.”
              <InlineFootnote index={29} />These men, he continues, “can only pay
              attention to general outlines; nor is attention to particulars of
              use.”
              <InlineFootnote index={30} />
            </p>
            <p>
              It is not an overstatement to say that when I first read these
              lines, I was stopped in my tracks. Before my own exploration of the{" "}
              <cite>Atlas</cite>, I’d been aware of many ways of visualizing
              data—from the most intentionally evocative to the most
              matter-of-fact. Along this spectrum, I’d always assumed that
              unembellished line graphs were among the most neutral of possible
              visual forms. Of course I’d read the research.
              <InlineFootnote index={31} />I’d even contributed some of my own.
              <InlineFootnote index={32} />But I was not expecting William
              Playfair, of all people, to be the one to say the quiet part out
              loud.
            </p>
            <p>
              Playfair’s explanation makes it incontrovertibly clear that line
              graphs have a politics. More than that, his writing reveals that he
              has made certain assumptions of his own. By designing his charts for
              elite men and other businesspeople, Playfair presumes that their
              concerns are not with complexity, or with personal impact. His own
              life experience had confirmed for him firsthand how, for the truly
              moneyed class, rank and resources consistently shielded them from
              any fallout from an unexpected turn of financial events. The
              knowledge that is recorded and visualized in Playfair’s{" "}
              <cite>Commercial and Political Atlas</cite> is useful to them
              precisely because it is simple; because it allows people like them
              to ignore any details that might otherwise cloud their view.
              <InlineFootnote index={33} />
            </p>
            <p>
              It is here that we might return to two strands of the argument made
              in chapter 1. First, the god trick. Whereas with Clarkson’s chart,
              the god trick was deployed in order to enhance the persuasive force
              of his image, in Playfair’s case it was wielded to <em>hide</em> the
              politics of his chart. We do not think to ask about his intended
              viewer because we are so seduced by the “aura of objectivity” that
              the chart conveys. Second, we might return to our discussion of the
              tradeoff between abstraction and detail. Per his writing, Playfair
              clearly considered this tradeoff as he prepared to publish the third
              edition of his <cite>Atlas</cite>, and came away on the side of
              abstraction. But from our vantage in the present, we might also
              consider the detail—what, in the lines quoted above, Playfair
              describes as “the particulars”—that he abstracted away. Consulting
              disaggregated data sources on British trade for the same time
              period, from the ledger books of the London custom house, it becomes
              clear that the “particulars” to which Playfair chose not to give
              visual form are, in no small part, people: the enslaved human labor
              which the “balance of trade” of the British empire depended upon.
              <InlineFootnote index={34} />
            </p>
            <p>
              Looking closely at these custom house ledgers, now digitized and
              made available online via the British National Archives, offers a
              sobering reminder of the violence brought about by reducing people
              to commodity form. It is not a coincidence that this is the second
              chapter, of two thus far, in which data tables such as these have
              appeared. The production of data is, in many ways, the logic of
              capitalism laid bare: the idea that people and goods can be easily
              exchanged when both are reduced to a price.
            </p>
            <p>
              The intentional abstraction of Playfair’s charts supports this easy
              exchange. As evidence, consider the chart that directly precedes the
              chart of North America, the one for the West Indies. It is only in
              the final paragraph of the two-page explanation of the chart that
              Playfair connects the balance of trade that favors England to the
              “lives and freedom of the much injured, and wretched inhabitants of
              Africa.”
              <InlineFootnote index={35} />In the much longer and more impassioned
              account of the chart of North American trade, Playfair does not
              mention slavery at all.
              <InlineFootnote index={36} />
            </p>
            <p>
              For Playfair—and, it would seem, for the “men of high rank” for whom
              he has designed his charts—it is the failure of Great Britain to
              hold onto its American colonies, and the loss of profit and power
              that came with it, that is the more important insight to convey. The
              chart’s design reflects this assessment, and explicitly so. There
              are no captive bodies, in contrast to the SEAST ship diagrams.
              Instead, Playfair’s brightly colored data lines emphasize the
              “numbers” ruined and the “fortune” lost. The exclusion of
              “particulars”—of <em>people</em>—is what makes the chart’s
              interpretation quick and “easy.” Thinking back to chapter 1, if
              “Plan of an African Ship’s Lower Deck” represents one side of modern
              data visualization’s initial coin, then this chart is its opposing
              face.
            </p>
          </Column>
          <Column shouldPin>
            <Figure figure={figures["0215-playfair-indies"]} />
            <Figure figure={figures["0213-periscopic"]} />
            <Figure figure={figures["0214-activeshooters"]} />
          </Column>
        </TwoColumnLayout>

        <CenteredLayout>
          <p className="text-center font-power text-xl">***</p>
          <p>
            To be clear: very few of the myriad people who employ time series
            charts today do so with the same politics or aspirations as William
            Playfair. But they—and we—would be well served by more fully
            recognizing the politics that shaped the charts’ original design, as
            this politics—even if we do not share it—continues to shape our design
            choices today. An expanded knowledge of Playfair’s politics can push
            us to consider not only the knowledge that can be gained from a
            “simple” view, but also the people who stand to benefit the most from
            it. More broadly, what we gain from our newfound knowledge of the
            politics of Playfair’s charts is a constant reminder that there is
            never not meaning conveyed through the decision to give data visual
            form. It is either communicated through the inclusion of context and
            detail, or it is implied through the decision not.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[2]} />

        <TwoColumnLayout>
          <Column>
            <p className="first-paragraph">
              Perhaps because of the prominent role that Playfair now occupies in
              the story of visualization’s emergence, his charts are frequently
              replicated with current libraries and tools. When I first began to
              notice this phenomenon, it struck me as akin to the art world model
              of imitating a masterwork: an exercise undertaken by a younger
              artist in order to learn by doing from a famed forebear, and in the
              process provide evidence of their own emergent skill.
              <InlineFootnote index={38} />But as visualization researcher Jo Wood
              explains, there is another reason why recreating historical examples
              with contemporary tools remains a useful exercise. “It helps both to
              understand the expressive capabilities of the [new] package as well
              as focus on the details of design choices that have been made in the
              original,” he explains.
              <InlineFootnote index={39} />
            </p>
            <p>
              As an example, let’s return to the chart that began this chapter,
              Playfair’s “Exports and Imports to and from all North-America,”
              which we recreated for the scrollytell sequence at the start of this
              chapter. Perhaps most significantly, we could not begin our process
              as Playfair had, drawing his data lines freehand. Because we were
              using D3, the popular JavaScript-based visualization library, we
              were required to possess a dataset before we could produce anything
              that we could see.
              <InlineFootnote index={40} />We thus consulted the data tables
              included in the first and second editions of the <cite>Atlas</cite>{" "}
              and typed them up in a file format that was usable by D3. Only then
              were we able to create a prototype for our design.
            </p>
            <p>
              The sequence of this process—first data, then image—is more than
              merely pragmatic; as we have just asserted, it also represents an
              epistemological claim. Whereas Playfair saw his charts as offering
              something different than what data could convey, the designers of D3
              were guided by a more contemporary view: that visualizations should
              be directly linked to the data they represent. The three Ds of D3
              stand for “data-driven documents.” This claim is also reflected in
              the library’s underlying architecture; for visualization designers,
              D3’s low-level linkage between the dataset and the web page’s basic
              building blocks results in greater control over the data and its
              visual representation, as well as greater efficiency when rendering
              the data in visual form. But it also represents the culmination of
              an epistemological evolution that has traveled far from William
              Playfair’s original ideas: of the value of visualization as distinct
              from the data it represents.
            </p>
            <p>
              The idea that visualization should directly follow from the data has
              taken decades if not centuries to evolve. Contemporary visualization
              researchers often point to Jacques Bertin’s{" "}
              <cite>Sémiologie graphique</cite>, first published in French in 1967
              and translated into English in 1983, as the first formalization of
              what’s come to be known as the <em>encoding-decoding model</em>: the
              idea that visualization should entail a process of encoding the data
              with “visual variables,” which the viewer would then use their mind
              to decode.
              <InlineFootnote index={41} />Later, Leland Wilkinson’s{" "}
              <cite>Grammar of Graphics</cite> (1999) would extend Bertin’s
              encoding-decoding model, introducing specific rules for mapping data
              to a range of visual representations, including colors and scales.
              <InlineFootnote index={42} />This more structured approach was what,
              in turn, enabled Hadley Wickham to operationalize a grammar of
              graphics in ggplot2 (“grammar” and “graphics” are the two g’s in the
              name), another software library that remains in widespread use
              today.
              <InlineFootnote index={43} />While there is more nuance to each of
              these approaches that could be further explored, the point of
              linking them together here is to show the consolidation of an
              epistemological view—quite distinct from William Playfair’s—of how
              visualization produces knowledge by directly translating the
              information documented in a particular dataset into visual form.
              <InlineFootnote index={44} />
            </p>
            <p>
              In the case of our implementation of Playfair’s chart, however,
              translating the original data into image was only the beginning.
              While it generally takes only a single line of D3 code to draw a path
              from one point to the next, Playfair’s data lines contained more
              detail than were recorded in his data tables. Because our goal was
              to recreate Playfair’s chart with fidelity to the original image, and
              not to the data tables that Playfair himself removed, we needed a way
              to convert his data lines back into more detailed data that we could
              then plot.
            </p>
          </Column>
          <Column shouldPin>
            <Figure figure={figures["0216-playfair-wheat"]} />
            <Figure figure={figures["0217-camoes"]} />
          </Column>
        </TwoColumnLayout>

        <CenteredLayout>
          <Figure figure={figures["0218-wood"]} />
        </CenteredLayout>

        <span id={visualizations[2].id}>
          <LineSegmentsScrollytell
            triggers={[
              <span key="0dec3ef1"></span>,
              <span key="3d7009ac">
                1. D3 Rendering of what Playfair’s data alone looks like when
                plotted w/ D3 interpolating paths.
              </span>,
              <span key="6125bb46">2. Overlay onto original image </span>,
              <span key="7acf0c9e">
                3. Expand to include uncropped scan from LCP
              </span>,
              <span key="96d84379">4. Tanvi’s path over scan in Figma</span>,
              <span key="34853e5e">
                5. Image of just path w/ points accentuated (also screenshot
                from Figma)
              </span>,
              <span key="242462af">
                6. Some sort of nice way of showing the 4 SVG paths as data
                (screenshot or something?) – or just showing how one of the
                circles becomes a coordinate pair?
              </span>,
              <span key="3aa2a407">show path again</span>,
              <span key="1ccdb8e8">interpolate into digital recreation</span>,
              <span key="f21de6d9">
                9. Final slide that is the same as the final recreation from
                first scrollytell.
              </span>,
              <span key="4a1acf89"></span>,
            ]}
          />
        </span>

        <span id={visualizations[1].id}>
          <ProjectTimelineInteractive>
          <p>
            If this process seems convoluted, that is a large part of the point. It
            underscores the degree to which D3 depends on data, as well as the
            degree to which, more broadly, the knowledge that we gain from
            visualization today is presumed to depend on the data underneath. This
            is for the most part a welcome development; we would not want our
            viewers, or ourselves, to derive faulty conclusions from what we see.
            But as our elaborate process of scanning and tracing and vectorizing
            helps to show, there are additional aspects of knowledge
            production—those that do not derive from data—that are encoded in the
            act of visualization itself. Just as we must contextualize and
            interpret Playfair’s original charts, so too must we remind ourselves
            to contextualize and interpret the range of visualizations that we
            encounter in the world today—as well as the range of tools we use to
            create them. This is what will lead not only to knowledge that is more
            accurate but—to return again to the words of William Playfair—knowledge
            that is more complete.
          </p>
          </ProjectTimelineInteractive>
        </span>

        <ChapterSectionTitle section={sections[3]} />

        <TwoColumnLayout>
          <Column>
            <p className="first-paragraph">
              Throughout his life, Playfair longed to be recognized for his
              innovations. In 1787, one year after the initial publication of the{" "}
              <cite>Commercial and Political Atlas</cite>, he authored a fictional
              dialogue between two of his heroes: Benjamin Franklin, whom,
              presumably, he admired for his ingenuity; and Joseph II, Holy Roman
              Emperor, whom, presumably, he admired for his power. Here, too,
              Playfair could not resist indulging a fiction of his own: an
              endorsement, on the part of Franklin, of his method of visual
              display. In the dialogue, Playfair writes in the voice of Franklin:
              “I have begun to practice the mode here, and it throws light on the
              state of our accounts, as if by inspiration, one minute giving a much
              clearer idea of the matter, than whole days and weeks without this
              simple invention.”
              <InlineFootnote index={45} />
            </p>
            <p>
              The reality, of course, was that it would take decades if not
              centuries for Playfair’s “simple invention” to achieve the level of
              recognition that he craved. Playfair’s charts were largely forgotten
              until the 1860s, when, according to the influential
              twentieth-century economist John Maynard Keynes, they were borrowed
              by his own economic forebear, William Stanley Jevons, to illustrate
              a statistical atlas of his own.
              <InlineFootnote index={46} />Even then, the charts themselves
              remained out of sight. Jevons never published his atlas; the only
              visual record is four sketches now held in his personal archive. But
              a draft of Jevons’s text was evidently circulated among the British
              statistical elite, where it—and, by extension, Playfair—won praise
              from none other than the statistician and eugenicist Karl Pearson,
              who, in a series of lectures on “The Geometry of Statistics,”
              credited Playfair as the “father” of the field we call visualization
              today.
              <InlineFootnote index={47} />
            </p>
            <p>
              For Edward Tufte, himself often credited as a father of the field,
              Playfair’s charts epitomize the “graphical excellence” that Tufte has
              devoted his own life’s work to promoting: a visual style
              characterized by the qualities of “clarity, precision, and
              efficiency,” conveyed through a sparse, minimal aesthetic and an
              intentional absence of “chartjunk.”
              <InlineFootnote index={48} />In the context of Playfair’s own view
              about the value of visualization, it seems fitting that the enduring
              value of his charts has nothing to do with the underlying data, and
              everything to do with the “form and manner” in which they were
              created.
            </p>
            <p>
              But by elevating Playfair’s charts to this level of prominence,
              without also elevating anything about the context of their creation,
              we risk conflating his “simple and complete view” with a simple and
              complete view of visualization itself. As this chapter has sought to
              underscore, the act of visualizing data is never simple, nor is any
              resultant image ever fully complete. The invisible politics of
              Playfair’s charts, surfaced through his writing, should serve as a
              reminder—just as enduring as his images—to always ask questions about
              what we are looking at, as well as what we are not.
            </p>
            <p>
              What we now know to be missing from Playfair’s charts can push us
              forward. It can open us up to the idea that knowledge itself is never
              complete. Our collective task thus becomes to continually seek out{" "}
              <em>more</em> knowledge, knowledge that can fill in gaps. This is,
              once again, why I find so much significance in the error engraved in
              “Exports &amp; Imports to and from all North-America.” With a slip of
              the hand that took less than a second, and that resulted in a line a
              hair-width wide, we are provided with an open window into a range of
              contexts—personal, political, and philosophical—that informed the
              creation of Playfair’s iconic chart.
            </p>
          </Column>
          <Column shouldPin className="md:ms-12">
            <Figure figure={figures["0224-playfair1787"]} />
            <Figure figure={figures["0225-jevons002"]} />
            <Figure figure={figures["0226-jevons001"]} />
          </Column>
        </TwoColumnLayout>

        <Takeaways
          forDesigners={[
            <span key="img-d-1">Acknowledge your decision-making power</span>,
            <span key="img-d-2">
              Question the impulse to adhere to the default
            </span>,
            <span key="img-d-3">
              Consider the capabilities and constraints of your chosen tools
            </span>,
            <span key="img-d-4">
              Ask who will view your visualization and what they need to know
            </span>,
          ]}
          forViewers={[
            <span key="img-v-1">Reject visualization’s aura of objectivity</span>,
            <span key="img-v-2">
              Ask for what purposes each chart has been designed
            </span>,
            <span key="img-v-3">
              Consider what is rendered visible and what is not
            </span>,
            <span key="img-v-4">
              Recognize the decisions that guide visualization work
            </span>,
          ]}
        />
      </ChapterBody>
      <CenteredLayout>
        <FootnotesList footnotes={imageFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
