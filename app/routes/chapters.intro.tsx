import { useState } from "react";
import ChapterTitle from "~/components/ChapterTitle";
import { ChapterContext } from "~/chapterContext";
import { chapterMetaTags } from "~/utils";

import CenteredLayout from "~/components/layout/CenteredLayout";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import InlineFootnote from "~/components/InlineFootnote";
import Footer from "~/components/Footer";
import { introFootnotes } from "~/footnotes";
import FootnotesList from "~/components/FootnotesList";
import figures from "~/data/figures/intro.json";
import peopleFigures from "~/data/figures/people.json";
import imageFigures from "~/data/figures/image.json";
import Figure from "~/components/figures/Figure";
import ChapterBody from "~/components/layout/ChapterBody";
import { chapterMeta } from "~/data/chapterMeta";
import FigureModal from "~/components/figures/FigureModal";
import Picture from "~/components/figures/Picture";
import TeozacoalcoScrollytell from "~/components/intro/TeozacoalcoScrollytell";
import type { TVizAnchors } from "~/chapterContext";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return chapterMetaTags("intro");
};

const sections = [
  {
    title: "Visualization and Power",
    id: "visualization-and-power",
  },
  {
    title: "What is Visualization?",
    id: "what-is-visualization",
  },
  {
    title: "An Expanded Origin Story",
    id: "an-expanded-origin-story",
  },
  {
    title: 'What is "Modern" about Modern Data Visualization?',
    id: "what-is-modern-about-modern-data-visualization",
  },
  {
    title: "The Charts in our Story",
    id: "the-charts-in-our-story",
  },
  {
    title: "Towards a Liberatory Practice of Data Visualization",
    id: "towards-a-liberatory-practice-of-data-visualization",
  },
];

const visualizations: TVizAnchors[] = [];

export default function IntroPage() {
  const [showFootnotes, setShowFootnotes] = useState<boolean>(false);
  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "imagePrimary",
        primaryTextColor: "black",
        accentColor: "imageSecondary",
        accentTextColor: "imageSecondary",
        footnoteTextColor: "imagePrimary",
        footnotes: introFootnotes,
        sections,
        showFootnotes,
        setShowFootnotes,
        chapterFigures: Object.values(figures),
        visualizations,
      }}
    >
      <ChapterTitle
        title={chapterMeta.intro.title}
        subtitle={chapterMeta.intro.subtitle}
      />
      <ChapterBody>
        <CenteredLayout>
          <p className="first-paragraph">
            Even from the highest point in town—the bell tower of the church of
            San Pedro Teozacoalco—it was impossible to see farther than a few
            kilometers in any direction. The two major mountain ranges that run
            along each of Mexico’s coasts converge in the region—what is today
            the Mexican state of Oaxaca—resulting in a “geological jumble” of
            tree-covered peaks and scrub-filled valleys, punctuated only by the
            occasional vertiginous cliff.
            <InlineFootnote index={0} />The year was 1580, according to the
            Spanish.
            <InlineFootnote index={1} />But the Ñudzahui (Mixtec) people had
            been navigating this terrain for millennia. The ridgelines that
            separated the main town of Teozacoalco from its 13 smaller
            dependencies were as familiar to the Ñudzahui as the backs of their
            hands. Even the growing number of Spanish colonial officials and
            other citizens of the Crown settling in the area had at least a
            general sense of the lay of the land. While this terrain could be
            learned through experience, there was still no way to see it all at
            once—not by those who climbed to the top of the bell tower, and
            certainly not by those like King Philip II of Spain, who would
            never set foot on the North American continent during his
            lifetime. Which was why the king—or, more accurately, his royal
            cosmographer—had requested a map.
          </p>

          <Figure figure={figures["0001-teozalcoalco"]} />

          <p>
            The cosmographer was hoping the king would benefit from something
            that most people, today, take for granted: that by visualizing the
            region’s complex terrain, he would gain immediate insight into the
            land over which he sought to rule.
            <InlineFootnote index={2} />The map he requested would take more
            than a year to research and design, and another three years to
            travel across the Atlantic. Now, nearly four hundred and fifty
            years after its creation, the “Mapa de Teozacoalco,” as it has come
            to be called, exemplifies the central argument of this book: that
            visualization is a tremendous form of power.
          </p>
          <p>
            In today’s world, we experience this power in ways large and
            small. It’s what pulls us into colorful charts of election
            returns, which show us quickly and clearly which candidate has
            prevailed. It’s what fills us with despair—or alternately,
            determination—when we encounter a graph of global temperatures’
            upward rise. It’s what tells us to evacuate from the path of a
            hurricane when we see our town or city inside a shaded danger
            zone; or simply to move to another room of the house when we see
            that our cell coverage has shrunk to a single bar.
          </p>
          <p>
            This power is real, and it is remarkably effective. Data
            visualization communicates complex information easily and
            efficiently. It enables meaningful patterns to emerge from data
            that is too complicated, too diffuse, or too subtle to otherwise
            see. At its best, this power is deployed in the service of new
            knowledge. Computer science researchers who study visualization
            often describe it as a tool to prompt insight, by which they mean
            the sparks of recognition that lead to a deeper understanding of
            the topic or issue at hand.
            <InlineFootnote index={3} />In the present moment, awash in data
            of myriad forms, this insight is immensely valuable. It helps us
            cut through the noise, directing us to what truly matters within
            an otherwise overwhelming data sea. It also doesn’t hurt that so
            many visualizations are, quite simply, beautiful. Some are
            literally works of art! To wit, Fernanda Bertini Viégas and Martin
            Wattenberg’s “Wind Map,” first released on the web in 2012, has
            been exhibited at New York’s Museum of Modern Art.
          </p>
          <Figure
            figure={figures["0002-windmap"]}
            className="mix-blend-multiply
            "
          />
          <p>
            But the allure of visualization is inseparable from its danger.
            Because maps and charts (and their interactive analogues) all
            promise ease and efficiency, they mask their own complexity. And
            as data visualization has become a primary means by which we gain
            insight about the world, we have come to see these images simply
            as <em>the way things are</em>, rather than what they actually
            represent, which is a set of specific design decisions made by
            specific people, in specific places and times, and for specific
            purposes.
            <InlineFootnote index={4} />But the reality is that the choices
            made when visualizing data are nearly as significant as the data
            itself.
          </p>
          <p>
            Which brings us back to the “Mapa de Teozacoalco.” The creator of
            this particular map was an Indigenous painter whose name was
            surely known to his family and friends, although it went
            unrecorded on the map itself. As a result, the Ñudzahui man’s name
            has been lost to time. But his work secures his place in a long
            lineage of visualization designers that also includes British
            antislavery activists, Scottish political economists, US women
            educators, and many more. Each of these figures, as we’ll learn
            over the course of this book, recognized the tremendous power of
            data visualization and wielded it to their deliberate aims.
            <InlineFootnote index={5} />
          </p>
          <p>
            As we journey from the era of the mapmaker across two hundred
            years of political, philosophical, and scientific thought, we
            will also learn how the power of visualization is, always, a
            double-edged sword.
            <InlineFootnote index={6} />By placing each map or chart that we
            encounter in its particular context, we will absorb a fundamental
            truth: that visualization is only as powerful as how and by whom
            it is put to use. And as we meet designers whose own life
            experiences taught them just how easily data visualization could
            effect harm—that same Ñudzahui painter, along with a Beothuk
            captive and a man you might have heard of by the name of W.E.B. Du
            Bois—we will come to recognize the power, and responsibility, that
            we hold as designers and viewers of data visualizations ourselves.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[0]} />
        <CenteredLayout>
          <p className="first-paragraph">
            It would take somewhere between one and three years for the “Mapa
            de Teozacoalco” to travel back across the Atlantic; a 1583
            document signed by the royal cosmographer indicates his receipt of
            the map in a folder of “maps and plans” returned from New Spain.
            <InlineFootnote index={7} />But there is no equivalent record that
            can attest to whether the king ever saw the map, let alone what
            insight he might have gained. Because of his place in history,
            however, we do know a great deal about his worldview: shaped by a
            Renaissance education; focused on questions of land and resources;
            and fixated on financial gain.
            <InlineFootnote index={8} />
          </p>
        </CenteredLayout>
        <TeozacoalcoScrollytell
          triggers={[
            <span key="a1f0c9e2">
              This gives us some sense of the parts of the map that likely
              struck the king’s eye.
            </span>,
            <span key="b2e1d8f3">
              Perhaps the bold brown footpaths that indicate the region’s
              major roads?
            </span>,
            <span key="c3d2e7a4">
              Or the vinelike turquoise lines that reflect its many rivers?
            </span>,
            <span key="d4c3f6b5">
              He would also have likely noted the numerous mountain ranges,
            </span>,
            <span key="e5b4a5c6">
              and the churchlike icons that represent each of the towns in
              the larger community, or yuhuiayu.
              <InlineFootnote index={9} />
            </span>,
            <span key="f6a59416">
              But what of the bell tower of San Pedro Teozacoalco, depicted
              inside the circle on the upper left, atop which our own story
              began? Examining the map from a continent away, would the king
              have seen how this icon was intended to indicate the elevated
              status of the town of Teozacoalco, both as a colonial center
              and an enduring site of Native rule?
              <InlineFootnote index={10} />
            </span>,
            <span key="0798d327">
              <span className="block mb-8">
                And would he have known how to interpret the map’s circular
                projection, intended to signify the yuhuiayu’s unity and
                wholeness, largely unfamiliar to European viewers, but
                typical of Mesoamerican mapping techniques of the time?
              </span>
              <span>
                In truth, we cannot know precisely how the king might have
                interpreted the map. But informed by the scholarship on
                Ñudzahui history and culture, we can intuit at least a little
                about what the mapmaker wanted him to see.
              </span>
            </span>,
            <span key="18c7b238">
              <span className="block mb-8">
                Consider the pairs of figures that rise up from the main
                town, plotted just to the right of the bell tower icon. These
                pairs represent the ruling lineage of the yuhuiayu. The
                bottom, we know from extensive research on the subject, is
                the start of the third dynasty of Teozacoalco.
              </span>
              <span>
                The dynasties continue upward through six generations to the
                unmarried male heir, pictured alone at the top of the line,
                who was likely the Native ruler of Teozacoalco at the time.
              </span>
            </span>,
            <span key="29b6a149">
              <span className="block mb-8">
                Scholars of Ñudzahui history have verified the accuracy of
                this genealogical diagram, as they have the longer family
                lines that appear on the left side of the page.
                <InlineFootnote index={11} />
              </span>
              <span className="block mb-8">
                But they have also documented something more: that there was
                not only significance to the information encoded in these
                diagrams; there was also significance to the manner in which
                the figures were drawn.
              </span>
              <span className="block mb-8">
                For the vertical genealogical structure that would have been
                legible to the Spanish king was not how the Ñudzahui people
                themselves understood their own history, as historian Yanna
                Yannakakis explains.
              </span>
              <span className="block mb-8">
                In a culture in which marriages across ruling families were
                employed to forge political alliances and to build
                collective strength, the Ñudzahui conceived of the
                relationships among the ruling families of the region more
                as a network than as the simpler parallel lines depicted on
                the map.
              </span>
              <span>
                By drawing these lineages as visibly distinct from each
                other, even as their genealogies were known to be deeply
                intertwined, the mapmaker was very deliberately representing
                the history of his people in a visual language that the king
                of Spain—his intended viewer—could easily understand.
                <InlineFootnote index={12} />
              </span>
            </span>,
          ]}
        />
        <ChapterSectionTitle section={sections[1]} />
        <CenteredLayout>
          <p className="first-paragraph">
            The “Mapa de Teozacoalco” is just one example of what can be
            gained by placing a map or chart in the specific context of its
            creation, and throughout this project, we will encounter many
            more. But before we proceed, it is worth pausing to consider the
            concept of visualization itself. One of the most interesting
            things to note is that, despite its present ubiquity, the term
            “visualization” has only recently entered into widespread use.
            <InlineFootnote index={13} />Well through the nineteenth century,
            most visual representations of data were described, at least in
            English, simply as “charts.” A chart could refer to a maritime
            map—indeed, this was where the term originated, in the late
            sixteenth century, via the Latin <em>charta</em> and the French{" "}
            <em>charte</em>.<InlineFootnote index={14} />Or a chart could
            describe a historical timeline, as in British polymath Joseph
            Priestley’s “A Chart of Biography” (1765) or “A New Chart of
            History” (1769), which circulated widely across England and
            America in the second half of the eighteenth century.
            <InlineFootnote index={15} />Still further, “chart” could
            reference the genre of statistical diagrams that proliferated
            throughout the nineteenth century, in England and France and
            especially in the United States, as government officials and
            private citizens alike attempted to make visual sense of the vast
            troves of data generated by the decennial census.
            <InlineFootnote index={16} />
          </p>
          <p>
            Some people still prefer the term “chart” for its clarity and
            ease of use. This is the main reason that I, too, use the word
            “chart” interchangeably with “visualization.”
            <InlineFootnote index={17} />In point of fact, it was only in the
            1990s, when visualization research began to emerge as a subfield
            of computer science, that this term began to enter into
            conversation at all.
            <InlineFootnote index={18} />For at least a decade, the term
            denoted something quite specific: “the use of computer-supported,
            interactive, visual representations of data to amplify
            cognition,” as Stuart Card, Jock Mackinlay, and Ben Shneiderman
            explain.
            <InlineFootnote index={19} />They also emphasized the
            distinctions among visualizations of data of different forms.
            <InlineFootnote index={20} />But over the years, these
            distinctions have come to matter less and less, as visualizations
            have increasingly made use of multiple sources of data, and
            multiple visual and interactive forms.
          </p>
          <Figure figure={figures["0004-table"]} />
          <p>
            Perhaps as a reflection of this evolution of the field, Tamara
            Munzner, in the definition that she offers in her also
            now-canonical textbook, <em>Visualization Analysis and Design</em>{" "}
            (2014), shifts the emphasis of the term from the <em>type</em> of
            data being visualized to the <em>task</em> for which any
            particular visualization is designed.
            <InlineFootnote index={21} />And over the past several years,
            visualization researchers have expanded the scope of
            visualization further still. The field has seen the introduction
            of practices such as <em>data physicalization</em>, which
            involves the creation of three-dimensional representations of
            data that can be explored with the whole body; tasks such as
            externalizing “hunches” about errors in a dataset, involving the
            creation of a web toolkit that enables users to draw over existing
            visualizations; and frameworks such as “visualization vibes,”
            which open space for viewers and researchers alike to acknowledge
            the feelings (or, if you want to be academic about it, “affective
            responses”) they have about particular visual aesthetics.
            <InlineFootnote index={22} />As these examples suggest, it has
            become increasingly clear that visualization research, as a
            field, is now capacious enough to include a wide range of forms
            and approaches.
          </p>
          <p>
            And yet it matters to me that these numerous forms and approaches
            are not just included in the ever-widening category of
            “visualization,” but are specifically recognized as forms of and
            approaches to <em>data</em> visualization. I will readily admit
            that my motivation is, in large part, a reflection of my feminist
            ethos, and my knowledge of how narrow definitions have long been
            used to exclude women and people of color from technical fields.
            <InlineFootnote index={23} />But I am also motivated by what I
            see all around me in the world today: an expanding array of
            visual representations that, creatively and compellingly, make
            use of <em>data</em> of a variety of forms. Pulitzer Prize-winning
            data journalist Mona Chalabi is now sharing—on her Instagram
            feed—hand-drawn visualizations on topics as far-ranging as the
            history of labor strikes or the number of journalists killed in
            Gaza. Professional (and also award-winning) visualization
            designers Giorgia Lupi and Stefanie Posavec famously published a
            book of a year’s worth of visualizations of the data of their
            daily lives, which they drew on postcards with pencils and
            markers and sent to each other in the mail. Data scientist and
            designer Shirley Wu created a website to draw attention to the
            underrepresentation of women artists from Hong Kong on Wikipedia.
            The site looks like a stylized ink painting, but in its
            overlapping pastel peaks in fact encodes an abundance of
            information: about the length of each artist’s Wikipedia entry,
            the number of references the article contains, and its citation
            count, all of which the user can interact with and explore. A
            team of artists and activists known as AMBOS (Art Made Between
            Opposite Sides) visited all 18 of the official border crossings
            between the US and Mexico and created an 18-strand khipu, with
            each knot representing a commuter crossing the border that day.
            The artist-technologist Annina Ruest went so far as to create a
            machine to print pie charts with data about the gender gap in
            STEM fields on actual edible pies. The list is near-infinite, but
            the question remains the same: are these not data visualizations,
            all?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <Figure
              showCaption={false}
              className="md:col-span-2"
              figure={figures["0006-usworkers"]}
            />
            <Figure
              showCaption={false}
              className="md:row-span-2"
              figure={figures["0008-deardata"]}
            />
            <Figure
              showCaption={false}
              className="md:col-span-2"
              figure={figures["0007-hkwomen"]}
            />
            <Figure showCaption={false} figure={figures["0009-borderquipu1"]} />
            <Figure showCaption={false} figure={figures["0010-borderquipu2"]} />
            <Figure showCaption={false} figure={figures["0011-ruest"]} />
            <p className="font-neueMontreal text-xs md:text-sm leading-5 text-left mt-3 md:mt-6 mb-6 md:mb-12 col-span-full">
              Examples of data visualization, clockwise from top left: Mona
              Chalabi, "US Workers on Strike\" (2023); Shirley Wu, "Hong Kong
              Artists, Women" (2020); Stephanie Posavec, "A Week of Clocks,"
              from Giorgia Lupi and Stephanie Posavec, Dear Data (2016), Ambos
              Project, Border Quipu / Quipu Fronterizo (2016-2018, and Annina
              Ruest, "A Piece of the Pie Chart" (2017).
            </p>
          </div>
          <p>
            This is the reason that I use the terms “visualization” and “data
            visualization” interchangeably here. With that said, I am far
            less interested in terminological questions than I am with asking
            how we—as viewers, designers, and researchers alike—understand
            the work that data visualization actually <em>does</em>. I
            therefore define visualization, which is also data visualization,
            which is also data <em>communication</em>, as any visual
            representation of data that contributes to knowledge.
            <InlineFootnote index={24} />This definition is intentionally
            broad. It includes representations of data that are both static
            and dynamic, both images and interactions. They can be made by
            computers or by hand, and presented in a wide range of mediums and
            platforms—from rag paper to phone screens to Ruest’s edible pies.
            They do, ideally, “amplify cognition,” as Card et al. helpfully
            specify. They might also “help people carry out tasks more
            effectively,” as Munzner pointedly states. But as we will learn
            over the course of this project, additional knowledge can also
            sometimes lead to additional uncertainty, or to an increased
            awareness of the knowledge that will forever remain out of reach.
            A visualization might prompt a user to refuse—rather than carry
            out—their initial task. Or it might be designed for personal
            reflection, without a specific task in mind. In the case of a
            visualization that appears in nature, like the rings of a tree,
            it might not even be designed by a person at all!
            <InlineFootnote index={25} />
          </p>
          <p>
            Which is all to say that if we care about data visualization, and
            especially about innovations of form and content and process that
            push forward our ideas about what visualization can do, then we
            should embrace a definition of data visualization that includes
            rather than excludes, and that does not seek to erect barriers
            based on the type or size of data being visualized, the
            particular methods employed, the visualization’s medium or
            platform, its intended purpose or audience, the backgrounds or
            credentials of its designers, or any other seemingly sharp but in
            reality quite fuzzy lines.
            <InlineFootnote index={26} />Put another way: I intentionally use
            the term “data visualization” as capaciously as those in the
            eighteenth century used the term “chart.” In my view, this is an
            affordance of the term: a feature, not a bug.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[2]} />
        <CenteredLayout className="pb-20">
          <p className="first-paragraph">
            In the very same year that the Ñudzahui mapmaker was weighing his
            power as the creator of a map for a king, Galileo Galilei, whose
            famed observations about the moon and the planets would soon help
            to usher in the modern scientific age, had just entered his first
            year of medical school. Already bored by his coursework, but—in a
            relatable moment—not yet prepared to tell his parents that he no
            longer wanted to become a doctor, Galileo turned his attention
            from the front of the lecture hall to the ceiling, contemplating a
            swinging chandelier.
            <InlineFootnote index={27} />His subsequent observations about the
            pendulum form would, like his astronomical experiments, go on to
            inspire an entire area of scientific inquiry. But considering
            these contributions in relation to the “Mapa de Teozacoalco”
            underscores a point no less profound: that Galileo’s mathematical
            musings were far more closely connected to the mapmaker’s project
            than he could then know.
          </p>
          <p>
            When the story of the emergence of modern data visualization is
            told, it often eases in through Galileo and the other key figures
            of the Scientific Revolution.
            <InlineFootnote index={28} />The vast scientific advances of the
            sixteenth and seventeenth centuries, across astronomy, physics,
            mathematics, biology, chemistry, and more, were bound together by
            their belief in the value of knowledge gained through empirical
            evidence. Put another way, the “revolution” of the Scientific
            Revolution was this: knowledge was no longer just handed down from
            heaven, divinely received, but was something that people—real
            people, not God—could create themselves.
            <InlineFootnote index={29} />
          </p>
          <p>
            While this empirical evidence could be registered by any of the
            senses, the sense of sight was the most valued.
            <InlineFootnote index={30} />After all, it was by observing the
            night sky that Galileo, having successfully negotiated with his
            parents to shift his studies from medicine to astronomy and math,
            was able to confirm the phases of Venus and the existence of
            mountains on the moon. Fifty years later, in England, Robert Boyle
            developed his law describing the relationship between the
            pressure and volume of air by recording his observations about
            his self-fashioned “air pump” and inviting members of the public
            to do the same.
            <InlineFootnote index={31} />The profundity of these experiments,
            combined with the empiricist philosophies that would soon be
            articulated by Enlightenment thinkers such as Francis Bacon, John
            Locke, and David Hume, provided both the evidence and the
            epistemological framework for more and more people to understand
            vision as a lens through which to create knowledge.
            <InlineFootnote index={32} />
          </p>
          <Figure
            className="grid mix-blend-multiply
            grid-cols-1 md:grid-cols-2 items-center"
            figures={[figures["0012-anon"], figures["0013-oresme"]]}
            groupCaption={
              <p>
                Two prominent examples of proto-data visualizations, first
                surfaced by Howard Funkhauser in 1937 and (justifiably!)
                celebrated through the present day. Little is known about the
                image on the left, an anonymous tenth-century diagram of the
                changing locations of constellations in the night sky. On the
                right is a set of fourteenth-century charts of the relationships
                between quantities created by French philosopher Nichole Oresme.
              </p>
            }
          />
          <p>
            While there had been earlier examples of chartlike forms, it was
            none other than René Descartes who first had the idea of
            “representing points, lines, and geometric figures by equations
            that could be visualized in diagrams and used to solve problems.”
            <InlineFootnote index={33} />Descartes was a vocal critic of
            empiricism. But even as his mathematical diagrams were intended to
            support deduction—that is, the process of moving from the abstract
            to the particular, as opposed to the inductive approach favored by
            Bacon and Locke—a crucial conceptual leap had been made. With
            Descartes’s examples as a guide, a growing number of people began
            to plot other forms of numerical data, such as barometric
            pressure (Robert Plot), mortality statistics (Christiaan
            Huygens), and soil temperature (Johann Lambert).
            <InlineFootnote index={34} />
          </p>
          <div
            className="grid grid-cols-1 mix-blend-multiply
 md:grid-cols-2 items-center gap-2 md:gap-4"
          >
            <Figure figure={figures["0014-plot"]} showCaption={false} />
            <Figure figure={figures["0015-lambert"]} showCaption={false} />
            <Figure
              className="md:col-span-2"
              figure={figures["0016-playfair"]}
              showCaption={false}
            />
            <p className="md:col-span-2 font-neueMontreal text-xs md:text-sm leading-5 text-left mt-3 md:mt-6 mb-6 md:mb-12">
              Clockwise from top left: An early graph of daily barometric
              pressure in Oxford, England, that appears in Robert Plot's
              "History of the Weather" (1685); three graphs from Lambert's
              Hygrometric Studies, which show the relationship between air,
              water, heat, and evaporation; and William Playfair's "Chart of all
              the import and exports to and from England from the year 1700 to
              1782," from the third edition of the Commercial and Political
              Atlas (1801).
            </p>
          </div>

          <p>
            Indeed, nearly all extant histories of data visualization converge
            from this point on. William Playfair, the Scottish political
            economist whose work opened my own eyes to the rich history of
            data visualization, takes center stage in an account of heroic
            innovation and singular achievement. Hailed as the “father” of
            modern data visualization, Playfair’s graphs and charts constitute
            the earliest of a small set of examples that are consistently
            upheld as evidence of visualization’s first “golden age.”
            <InlineFootnote index={35} />Other well-known examples include the
            British physician John Snow, whose “most worthy” epidemiological
            maps, created in the mid-1850s, are often credited with
            identifying the mechanism of cholera transmission (erroneously so,
            as both the mechanism and the mapping technique were previously
            known);
            <InlineFootnote index={36} />the British nurse and statistician
            Florence Nightingale, whose coxcomb charts of the casualties of
            the Crimean War (1858) provided visual evidence of the preventable
            nature of the majority of battlefield deaths;
            <InlineFootnote index={37} />and the French civil engineer
            Charles Minard, whose famed chart of Napoleon’s failed Russian
            campaign (1869) prompted Edward Tufte to proclaim it perhaps “the
            best statistical graphic ever drawn.”
            <InlineFootnote index={38} />
          </p>
          <p>
            With this triumphal account, reinforced in the visualization
            literature for decades, it is easy to leave the Ñudzahui mapmaker
            far behind. But there are several significant connections between
            the ideas and examples that prompted the emergence of modern data
            visualization and the project of European colonial expansion that
            prompted the map made for the king. For one, colonialism was
            functionally dependent on data visualization, in the form of
            mapping, both to provide navigational aids to would-be explorers
            and to assert claims over the land and resources they sought to
            possess. In fact, some of the earliest known examples of “data
            maps” were enlisted for these purposes, such as the 1686 diagram
            of trade winds created by Edmond Halley, of Halley’s comet fame,
            which was based on observations from his own time spent in the
            South Atlantic.
          </p>
        </CenteredLayout>
        <Figure
          className="mx-2  md:mx-12 text-sm md:text-base"
          captionClassName="mx-12"
          figure={figures["0017-halley"]}
        />
        <CenteredLayout className="pt-20">
          <p>
            Halley’s trade wind diagram has been heralded by Edward Tufte,
            among others, as among the earliest examples of “placing a
            measured quantity on the map’s surface at the intersection of two
            threads [of latitude and longitude] instead of the name of a
            city.”
            <InlineFootnote index={39} />But with the colonial context of its
            creation layered in, we can now not only recognize the{" "}
            <em>what</em> and <em>how</em> of the map’s innovation, but also
            begin to see the <em>why</em>. For Halley himself, most likely,
            the reason was the expansion of science; but for King Charles II
            of England who sponsored the mission—it was the expansion of his
            empire.
            <InlineFootnote index={40} />Always seeking new opportunities to
            acquire land and resources so as to extract additional profit for
            the English Crown, the king saw very clearly how this goal would
            first require detailed and accurate knowledge about where, and
            how, those resources could be found.
            <InlineFootnote index={41} />
          </p>
          <p>
            This practical dependency on data and mapping, and the tools and
            methods of measurement that were required to produce them, had
            long been a hallmark of the European colonial project. It is not
            an exaggeration to say that this process of quantifying local
            knowledge as data and collating it into tables and charts was
            often an early step in a longer process of dispossession and,
            ultimately, death. The devastation that the Ñudzahui mapmaker was
            required to reckon with over his lifetime was endemic: of the
            estimated fifty to one hundred million people who inhabited the
            lands we now call the Americas before the time of first contact,
            only one-fifth to one-tenth remained by the end of the seventeenth
            century, when Halley created his trade wind map.
            <InlineFootnote index={42} />It would take until the early
            twentieth century for the Indigenous population of the Americas
            to begin to rise.
            <InlineFootnote index={43} />
          </p>
          <p>
            But there is also a conceptual convergence between this
            furthering of European empire and the rise of empiricism. For the
            request that resulted in the “Mapa de Teozacoalco” was, as it
            turns out, one of many. Since the king was unable to directly
            observe the geography of the colonies he sought to govern, his
            cosmographer had not only requested this particular map; he had
            issued a large-scale survey to every single locality claimed by
            the Spanish Crown—over 200 of them, stretching as far south as
            modern-day Peru.
            <InlineFootnote index={44} />He asked questions about terrain,
            natural resources, and demographics, and he elicited quantitative
            as well as qualitative responses. As a result, the{" "}
            <em>Relaciones geográficas</em>, as the survey would come to be
            known, has earned the distinction of being the first (recognized)
            statistical study of the Americas.
            <InlineFootnote index={45} />
          </p>
          <p>
            The public had yet to experience the “avalanche of printed
            numbers” that, as historian of science Ian Hacking has famously
            described, heralded the start of the modern statistical age.
            <InlineFootnote index={46} />But the efforts of the Spanish king
            were of a piece with those of other European colonial rulers who
            sought to gain knowledge about their territorial holdings, and the
            people who lived there, by collecting data. Put more directly:
            King Philip II approached the task of gaining knowledge about his
            colonies by a method very similar to how Galileo approached the
            sky—that is to say, through empirical evidence. His motivation for
            the <em>Relaciones</em> reflected his belief that data derived
            from direct observation, enhanced by visual representations of
            the same, would lead to more complete knowledge of his domain.
          </p>
          <p>
            At this juncture, I can imagine some objections. Certainly, not
            all visualizations are colonial. And what of all the valuable
            scientific knowledge that empiricism helped to usher in? Should we
            throw away our knowledge of the seas and stars and planets and
            plants in one fell swoop? The answers to these questions are
            easy: correct and no. The methodological similarity between how
            King Philip II approached the task of gaining knowledge about his
            colonies and how Galileo approached the sky should heighten our
            awareness of how much it matters to ask—and, crucially, to
            answer—questions about the purposes of any particular
            visualization project we might view or undertake: What is the
            nature of the knowledge that it has been designed to surface? To
            whom does that knowledge belong? For what purposes will it be put
            to use? Guided by whose values? And for whose goals? While we
            cannot change the fact that the roots of modern data visualization
            are enmeshed in the European colonial project, we can move forward
            with a different charge: to view any future visualization that we
            encounter, and to approach any we may design, with intention and
            care—to ask what knowledge it is intended to lead toward, and what
            additional context is required to bring that knowledge to light.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[3]} />
        <CenteredLayout>
          <p className="first-paragraph">
            The “Mapa de Teozacoalco” is not, of course, the earliest instance
            of data visualization that we know. We have already discussed a
            contemporary example of khipu—a system that derives from the
            Inkan empire, or Tawantinsuyu, which employs knots on colored
            strings to track data about people, land, and resources;
            archaeologists have found examples of khipu that date to as early
            as 2600 BCE.
            <InlineFootnote index={47} />Earlier still, in Mesopotamia,
            archaeologists have uncovered clay tablets dating from between
            3100 and 2900 BCE that employed proto-cuneiform combined with
            numerical symbols to record information about the distribution of
            grain. And a recent project out of Peking University employed
            state-of-the-art image detection techniques to identify around
            180,000 examples of historical visualizations from China, the
            earliest dating to 550 BCE—a project explicitly intended as a
            corrective to the dominant “Eurocentric view.”
            <InlineFootnote index={48} />
          </p>
          <p>
            These images join previously celebrated examples from that
            region, such as the set of ivory counting rods (ca. 475–221 BCE)
            found in Chang’an, Shaanxi province, that represented groups of
            numbers so as to assist in complex math. Or, contemporaneous with
            the focus of this project, we might consider the official 1838
            shogunal map from Japan, which employed both points and polygons
            to map the locations of villages and checkpoints; or the ca. 1850
            Jain diagram of Jambudvīpa, which condenses philosophical,
            spiritual, and cosmological information into a poster-sized
            fabric sheet.
            <InlineFootnote index={49} />As these examples collectively
            attest, societies from all over the world have long recognized the
            generative potential unleashed by translating quantitative
            information into visual form.
          </p>
          <Figure
            className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-baseline"
            figures={[
              figures["0018-quipu"],
              figures["0019-rods"],
              figures["0020-cuneiform"],
            ]}
            groupCaption={
              <p>
                Examples of data visualization that predate our story. Left to
                right: an example of Inkan khhipu; Chinese counting rods
                recently discovered in Changsha, Hunan Provence; and a
                proto-cuneiform tablet documenting the distribution of grain.
              </p>
            }
          />
          <p>
            This global history, even in highly abridged form, prompts a key
            question: what do I mean by the phrase “modern data
            visualization”? The term “modern,” here, seems to be doing a lot
            of work. Indeed, it is a term that is both deeply problematic and,
            as we’ll see, essential to understanding the world we inhabit
            today. In its most general sense, “modernity” describes the
            period of time ushered in during the sixteenth century,
            corresponding with the major transformations in science,
            philosophy, and governance, among others, that have just been
            discussed. Modernity is also implicitly (and at times explicitly)
            European.
            <InlineFootnote index={50} />This geographical constraint is, of
            course, exclusionary. But what and who are excluded also tell us a
            lot.
          </p>
          <p>
            More specifically, this “modern” way of thinking—which included
            the celebration of human reason, the articulation of individual
            rights and political liberties, and the development of the
            contemporary nation-state, among other things—was, paradoxically,
            accompanied by a narrowing of which types of humans were capable
            of exercising reason, or enjoying rights and liberties, or other
            protections of the state. As decades of scholarship have
            shown—it is not a coincidence that today’s racial and gender
            hierarchies also solidified during that time.
            <InlineFootnote index={51} />This moment was fundamentally
            destabilizing. It followed, then, psychologically as much as
            philosophically, that many of the same thinkers who first worked
            to valorize human reason and the virtues of self-governance would
            move on to consider questions about which humans they thought,
            more precisely, exemplified these ideals. It is depressing, but
            not surprising, that the people they identified as best
            exemplifying these ideals were people just like themselves:
            European, white, and male.
          </p>
          <p>
            These modern thinkers, with their philosophies and their flaws,
            have profoundly shaped the world we live in today. But one of the
            major methodological contributions of scholarship on the
            Enlightenment and its reverberations throughout the world has
            been to show how there are always <em>counterhistories</em> that
            can be surfaced if we look closely enough. These are histories
            that run alongside the dominant account, with each actor, and
            each moment, called in to challenge or otherwise destabilize the
            story that is generally told.
            <InlineFootnote index={52} />The history of modern data
            visualization (always, as you can now understand, with scare
            quotes implied) has not yet received this counterhistorical
            treatment. <em>Data by Design</em> is, in no small part, an
            attempt to remedy that.
          </p>
          <p>
            Indeed, we have already begun to recognize the tremendous power in
            choosing how to visualize data; there is similarly tremendous
            power in choosing how to tell a story. For there are many paths
            that take us from any starting point to any finish. Some of these
            paths, like the dominant story of visualization’s rise, are
            well-worn and familiar, while others, like the Ñudzahui
            mapmaker’s, are far less trafficked, and still others have not yet
            begun to be explored. These less-trodden paths are powerful
            because they lead us to worlds not yet or not yet fully realized.
            These worlds may very well be preferable to the present one, but
            for them to be achieved will require us, in the words of
            sociologist Ruha Benjamin, to push “beyond the constraints of what
            we think, and are told, is politically possible.”
            <InlineFootnote index={53} />These are precisely the worlds I seek
            to open up with this project: worlds of possibility for the
            practice of data visualization, and for no less than the way we
            understand knowledge—worlds of possibility that encourage a more
            liberatory future for us all.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[4]} />
        <CenteredLayout>
          <p className="first-paragraph">
            Our story follows a chronological arc from the final years of the
            eighteenth century, up to the turn of the twentieth century, when
            this particular age of data visualization begins to crest.
            <InlineFootnote index={54} />This chronology is paralleled by a
            methodological progression: as the chapters advance, each also
            considers an additional aspect of the practice of data
            visualization: data, image, people, knowledge, change (as in
            social or political change), and labor (as in the actual work of
            visualization design).
          </p>
          <p>
            Chapter 1 begins with an indelible image, “Plan of an African
            Ship’s Lower Deck” (ca. 1789), which visualizes the data of the
            slave trade by depicting each anguished body that the numbers
            represent. Here we learn how racial capitalism was (and remains)
            what authorizes colonial powers to continue to accumulate wealth
            and resources, and in the process to enforce a view of objects,
            actions, and even people as “goods” that can be converted into
            data and reduced to a price.
            <InlineFootnote index={55} />This path demands that those who
            design visualizations, and those who view them, consistently
            consider what is made visible in relation to what is not. In this
            particular case, what is made visible is horror at scale. What
            remains unseen is the full humanity of the lives that the data
            represents.
          </p>
          <p>
            With this key tension of data firmly in place, the clean data
            lines of William Playfair’s time series charts—the subject of
            chapter 2—become far more complex. Analyzing Playfair’s charts
            alongside the text that introduces the third (and most widely
            circulated) edition of his <em>Commercial and Political Atlas</em>{" "}
            (1801) confirms how the political instability brought about by the
            age of revolutions, as much as an adherence to Enlightenment
            empiricism, inspired his influential visualization techniques. By
            recreating Playfair’s charts with a contemporary visualization
            library, D3, we further show how the data lines of his
            charts—so often upheld for their objectivity and precision—in
            fact embellish the story told by the data alone.
          </p>
          <p>
            Chapter 3 moves from England and Scotland to North America, where
            the central examples of all subsequent chapters are placed. Here
            we meet Shanawdithit, a Beothuk woman who created a series of maps
            in the final months before her death, in British captivity, in
            1829. The argument I make here is both more subdued than the
            previous chapters’ and more profound: that all visualizations
            that we create—and not just those explicitly enlisted in the
            service of empire—can be refracted through a colonial frame.
          </p>
          <p>
            If the emphasis of chapter 3 is the limits of current
            visualization practices, chapter 4 opens the door to the future
            possibilities. Its focus is on the chronological grids of
            educator and editor Elizabeth Palmer Peabody, who employed color
            and position in order to represent historical events in time.
            Peabody’s charts, as described in her{" "}
            <em>Polish-American System of Cartography</em> (1850) and
            documented in her <em>Chronological History of the United States</em>{" "}
            (1856), were designed to be abstract rather than intuitive, to
            promote sustained reflection rather than immediate insight, and to
            provoke a unique imaginative response in each viewer. These
            epistemological principles diverge sharply from the ideas about
            knowledge acquisition that have shaped visualization best
            practices to this point.
            <InlineFootnote index={56} />
          </p>
          <p>
            Chapter 5 takes us to the century’s close, considering the charts
            designed by the esteemed sociologist W.E.B. Du Bois and his team
            of students from Atlanta University, including one young woman
            named Lula Iola Mack. Recently reclaimed by historians of data
            visualization as a corrective to otherwise white and Eurocentric
            accounts, the charts created for the 1900 Paris Exposition in
            fact tell a more complex story—one that acknowledges the power of
            visualization and simultaneously admits its limits. By exploring
            the charts in the context of Du Bois’s writing on race and racism
            and his sociological theory, and by recreating them in ways that
            account for the students whose knowledge and labor helped to
            shape them, we close with a reassertion—through both text and
            image—of how data visualization, the conceptual conditions of its
            emergence, and its political consequences, are fundamentally
            intertwined. Drawing a discussion of race, data, and political
            agency into the present, the chapter concludes with an optimistic
            consideration of what data visualizations can accomplish once we
            learn to recognize—and account for—both its uses and its limits.
            Indeed, visualization can do more than reveal the significance of
            data; it can bear witness to instances of oppression, it can
            render visible more just futures; and it can—if intentionally
            designed—hold space for what cannot be conveyed through data
            alone.
          </p>
          <p>
            A concluding chapter homes in on the issue of labor, a
            through-line of the project overall. It takes as its focus not
            the history of visualization but its practice in the present, in
            the form of the making of the project you are exploring now. The
            final chapter thus represents our attempt to document our work
            and credit all contributors, while providing the first extended
            example (in addition to the more self-contained examples across
            the site) of how the lessons of <em>Data by Design</em> can inform
            contemporary visualization practice.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[5]} />
        <CenteredLayout>
          <p className="first-paragraph">
            As previously mentioned, we are a team of visualization designers,
            software engineers, and humanities researchers. As such, we do
            many kinds of work. But our efforts are linked by a common goal:
            of advancing a practice of visualization interpretation and
            design that is honest about its origins, intentional in its
            purpose, and attentive to a range of contexts, both historical
            and contemporary. Our desired outcome is to contribute to the
            transformation not merely of “best practice” but—as audacious as
            it may sound—of the baseline conditions of our unequal world.
          </p>

          <p>
            From the very first story we tell in this introduction, of the
            “Mapa de Teozacoalco” and its intrinsic power as a data
            visualization—as well as the power wielded by its maker and the
            power it accorded to the Spanish king—we examine the role that
            visualization can play in this transformative project. Even more,
            we seek to show how this project has already begun. It is not a
            coincidence that, as we move through the major examples that
            structure this project, we also move through some of the major
            struggles for social justice that define this era: the British
            abolitionist movement, the US Civil War, and Black
            Reconstruction, among several others. For just as data, its
            collection, and its visual display have long been wielded as
            weapons by powerful actors, they have just as often been wielded
            to push back.
          </p>

          <p>
            More concretely, we believe we can work toward a liberatory
            practice of data visualization when we insist upon historical
            contextualization, conceptual theorization, and detailed
            analysis—that is to say, when we embrace a <em>humanistic</em>{" "}
            approach to visualization design. As difficult as it may be to
            accept that data is not always beautiful, and visualization is
            not always (or ever) a neutral art, it does us nothing to dismiss
            this basic truth. As we will demonstrate across this site, there
            is no single dataset nor any single visual or interactive form
            that can give us a completely objective picture of the phenomenon
            we seek to explore. This realization, however, is not a reason to
            reject visualization. On the contrary, it is through the
            continued pursuit of learning more—a pursuit that involves the
            identification of <em>both</em> new sources of knowledge{" "}
            <em>and</em> additional and perhaps unfillable gaps—that we
            arrive at the most complete understanding of the topic at hand.
          </p>

          <p>
            What you will encounter in the chapters to come, at their core,
            stories—stories told through visualization and told through
            words. Taken together, these stories seek to expand our
            understanding of the history of data visualization so that we can
            shape its future. My strongest hope for this project, shared by
            the entire team, is that you will come away from{" "}
            <em>Data by Design</em> with new ways of viewing visualization,
            with all that the term entails. If you are a designer, I also
            hope you will come away with new methods for structuring your
            design processes, and new contexts for putting both visualization
            and process to use. For while we will learn that visualization{" "}
            <em>on its own</em> is rarely enough to achieve the goal of a more
            just and equal world, we will also learn how additional
            knowledge-making practices and processes can amplify each other,
            working together to achieve this goal we share.
          </p>

          <p>
            Some of the stories we tell in this book are dispiriting. We have
            already begun to see how the history of data visualization
            directly intersects with the histories of slavery, capitalism,
            and colonialism. But in surfacing this history, our goal is not
            to suppress the use of visualization or to limit its future
            growth. On the contrary, we seek a more informed and more
            intentional—and, as a result, a more precise and effective—practice
            of data visualization, both in our own work and in yours. This
            practice is one that prioritizes the particularities of each
            dataset, that considers its social, political, and historical
            context, and that attends to the people who made it possible. It
            is one that, moreover, continually recalls the power—and
            therefore the responsibility—that we hold as designers and
            viewers of visualizations ourselves.
          </p>
        </CenteredLayout>
      </ChapterBody>
      <CenteredLayout>
        <FootnotesList footnotes={introFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
