import { useState } from "react";
import ChapterTitle from "~/components/ChapterTitle";
import { ChapterContext } from "~/chapterContext";
import { chapterMeta } from "~/utils";

import CenteredLayout from "~/components/layout/CenteredLayout";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import InlineFootnote from "~/components/InlineFootnote";
import Footer from "~/components/Footer";
import { introFootnotes } from "~/footnotes";
import FootnotesList from "~/components/FootnotesList";
import figures from "~/data/figures/intro.json";
import Figure from "~/components/figures/Figure";
import ChapterBody from "~/components/layout/ChapterBody";
import type { TVizAnchors } from "~/chapterContext";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return chapterMeta("intro");
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
        backgroundColor: "offwhite",
        primaryTextColor: "black",
        accentColor: "playfairPrimary",
        accentTextColor: "white",
        footnoteTextColor: "playfairPrimary",
        footnotes: introFootnotes,
        sections,
        showFootnotes,
        setShowFootnotes,
        chapterFigures: Object.values(figures),
        visualizations,
      }}
    >
      <ChapterTitle
        title="Introduction"
        subtitle="A Prehistory of Visualization and Power"
      />
      <ChapterBody>
        <CenteredLayout>
          <p className="first-paragraph">
            Even from the highest point in town—the belltower of the Church of
            San Pedro Teozacoalco—it was impossible to see farther than a few
            kilometers any direction. The two major mountain ranges that run
            along each of Mexico's coasts converge in the region—what is today
            more commonly known as Oaxaca—resulting in a "geological jumble" of
            tree-covered peaks and scrub-filled valleys, punctuated only by the
            occasional vertiginous cliff
            <InlineFootnote index={0} /> The year was 1580, and the Ñudzahui
            (Mixtec) people had been navigating this terrain for millennia; the
            ridgelines that separated the main town of Teozacoalco from its
            thirteen smaller dependencies were as familiar to them as the backs
            of their hands. Even the Spanish colonial officials and other
            citizens of the Crown who, over the previous few decades, had been
            increasingly settling in the region had at least a general sense of
            the lay of the land. But while this terrain could be learned through
            experience, there was no way to see it all at once—not by those who
            climbed to the top of the belltower, and certainly not by those like
            King Phillip II of Spain, who would never set foot on the North
            American continent during his lifetime. Which was why the King—or,
            more accurately, his royal cosmographer—had requested a map.
          </p>

          <Figure figure={figures.placeholder1} />

          <p>
            The cosmographer was hoping the King would benefit from something we
            now treat as a matter of course: that by visualizing the region's
            complex terrain, he would gain immediate insight into the land over
            which he sought to rule
            <InlineFootnote index={1} /> In this way, the "Mapa de Teozacoalco,"
            as the map made for the King has come to be called, encapsulates the
            central argument of this book: that visualization is a tremendous
            form of power. This is true both because of the knowledge that
            visualization helps to surface, and because of the people who decide
            how to put that knowledge to use. In today's world, we experience
            this power in ways large and small. It's what pulls us into colorful
            charts of election returns, which show us quickly and clearly which
            candidate has prevailed. It's what fills us with despair—or,
            alternately, determination—when we encounter a visualization of
            global temperatures' upward rise. It's what tells us to evacuate
            from the path of a hurricane when we see our zip code inside of a
            shaded danger zone; or simply move to another room when we notice
            that our cell coverage has shrunk to a single bar.
          </p>
          <p>
            This power is real, and it is remarkably effective. Where data
            visualization excels is in its ability to communicate complex
            information easily and efficiently, to enable meaningful patterns to
            emerge from data that is too complicated, too diffuse, or too subtle
            to otherwise see. At its best, this power is deployed in the service
            of new knowledge. Computer science researchers who study
            visualization often describe it as a tool to prompt insight, by
            which they mean the sparks of recognition that lead to a deeper
            understanding of the topic or issue at hand
            <InlineFootnote index={2} /> In the present moment, awash in data of
            myriad forms, this insight is immensely valuable. Visualization
            helps us cut through the noise, directing us to what really matters
            within an otherwise overwhelming data sea. It also doesn't hurt that
            so many are, quite simply, beautiful; some are literally works of
            art! To wit, Fernanda Bertini Viégas and Martin Wattenberg's "Wind
            Map," first released on the web in 2012, now hangs in the third
            floor gallery of New York's Museum of Modern Art.
          </p>
          <Figure figure={figures.placeholder2} />
          <p>
            But the allure of visualization is precisely its danger. Because
            maps and charts (and their interactive analogues) all promise ease
            and efficiency—and because, in our information-dense society, these
            are qualities that we crave—they mask their own complexity. Indeed,
            as data visualization has become a primary means by which we gain
            insight about the world, we have naturalized many of its conventions
            as the way things are, rather what they actually really are, which
            is specific design decisions made by specific people, in specific
            places and times, and for specific purposes
            <InlineFootnote index={3} /> Put another way: we too often assume
            that visualization is a transparent method, one that lets us simply
            see through to the significance of the data underneath. But the
            reality is that the act of visualizing data also carries
            significance—about specific design decisions to be sure, but also
            about the specific contexts in which those decisions were made.
          </p>
          <p>
            Which brings us back to the "Mapa de Teozacoalco," and the colonial
            context in which it was made. What we will learn from the creator of
            this particular map, a Ñudzahui painter whose name was once known,
            as we will from British antislavery activists, Scottish political
            economists, US women educators, and many more, is how they
            recognized the tremendous power of data visualization and wielded it
            to their specific aims
            <InlineFootnote index={4} /> As we journey from the sixteenth
            century through two hundred years of political, philosophical, and
            scientific thought in order to arrive at visualization's so-called
            "modern age," we will also learn how the power of visualization is,
            in fact, a double-edged sword
            <InlineFootnote index={5} /> By placing each map or chart that we
            encounter in its particular context, we will absorb a fundamental
            truth: that visualization is only as powerful as how and by whom it
            is put to use. And as we meet designers whose own life experiences
            taught them just how easily data visualization could effect
            harm—that same Ñudzahui painter, along with a Beothuk captive and a
            man you might have heard of by the name of W.E.B. Du Bois—we will
            come to recognize our own power, and responsibility, as designers
            and viewers of data visualizations ourselves. Again and again, we
            will marvel at the beauty and efficacy of charts created centuries
            before our time, while we also come to see the additional
            significance— and the additional power—that enters in from outside
            of the frame.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[0]} />
        <CenteredLayout>
          <p>
            It would take somewhere between one and three years for the "Mapa de
            Teozacoalco" to travel back across the Atlantic; a 1583 document
            signed by the royal cosmographer indicates his receipt of the map in
            a folder of "maps and plans" returned from New Spain
            <InlineFootnote index={6} /> But there is no equivalent record that
            can attest to whether the King ever saw the map, let alone what
            insight he might have acquired. On the basis of what we know about
            his viewing perspective, however—European, educated, and elite;
            focused on questions of land and resources; and fixated on financial
            gain— we can speculate about which parts of the map might have first
            struck his eye. Perhaps the bold brown footpaths that indicate the
            region's major roads? Or the vine-like turquoise lines that reflect
            its many rivers? (Lest they be confused as embellishment, note that
            they are populated every-so-often by a scaley white fish.) The King
            would also likely have noted the numerous mountain ranges, and the
            church-like icons that represent each of the towns in the larger
            community, or yuhuiayu
            <InlineFootnote index={7} /> Evidently, these icons were plotted so
            precisely in relation to the map's natural features that they have
            been used by present-day archaeologists to pinpoint the locations of
            these historical towns.
            <InlineFootnote index={8} /> But would the King have noted the
            belltower, the feature added to icon representing the town of
            Teozacoalco to indicate its status as a colonial center as well as
            an enduring seat of Native lordship? Would he have known how to
            interpret the map's circular projection, intended to signify the
            yuhuiayu's unity and wholeness, largely unfamiliar to European
            viewers, but typical of Mesoamerican mapping techniques of the time?
          </p>
          <p>
            We need not further speculate about how the King might have
            interpreted the map, because the map itself contains evidence of how
            and by whom it was intended to be seen. Consider the pairs of
            figures that rise up from the main town of Teozacoalco, plotted
            inside the circle on the upper-left, just to the side of the church
            and its belltower. These represent the ruling lineage of the{" "}
            <em>yuhuiayu</em>, beginning at the bottom with the start of the
            third dynasty of Teozacoalco, and continuing upward through six
            generations to the unmarried male heir, pictured alone at the top of
            the stack; this was likely the Native ruler of Teozacoalco at the
            time.
            <InlineFootnote index={9} />
          </p>
          <p>
            Scholars of Ñudzahui history have documented each of the figures in
            this genealogical diagram, as they have the longer family lines that
            appear on the left of the page.
            <InlineFootnote index={10} /> But they have also documented
            something more: that there was not only significance to the
            information encoded in these diagrams; there was also significance
            to the manner in which they were drawn. For the vertical
            genealogical structure that would have been legible to the Spanish
            King was not how the Ñudzahui people themselves understood their own
            history, as historian Yanna Yannakakis explains. In a culture in
            which marriages across ruling families were employed to forge
            political alliances, and to build collective strength, the Ñudzahui
            conceived of the relationships among the ruling families of the
            region as more of a network, rather than two discrete lines. By
            depicting these lineages as visibly distinct from each other, even
            as their genealogies were known to be deeply intertwined, the
            mapmaker was thus deliberately representing the history of his
            people in a visual language designed for the King of Spain—his
            intended viewer—to easily understand.
            <InlineFootnote index={11} />
          </p>
          <p>
            [ ADD IN CLOSE-UPS OF LINES ON LEFT AND LINE EXTENDING FROM TOWN]
          </p>
          <p>
            This is just one example of what can be gained by placing a map or
            chart in the specific context of its creation, and over the course
            of this book, we will encounter many more. By considering the "men
            of active business, or high rank" for whom, in
            late-eighteenth-century London, some of the very first line graphs
            and bar charts were designed; or the members of the Atlanta
            University Class of 1900 who found themselves, in the Fall semester
            of their senior year, sprinting to create a set of sixty-four charts
            that would travel to the Exposition Universelle in Paris in several
            months' time, we will come to see how additional context serves only
            to enhance —rather than detract from—the knowledge that
            visualization allows us to gain. Among my strongest hopes for this
            book is that you, the reader, come away with unassailable evidence
            of how additional context makes our interpretation of any particular
            visualization more accurate, and our knowledge of its subject more
            complete. For increased accuracy of interpretation, and greater
            overall knowledge, should be goals we all share.
          </p>
          <p>
            But the "Mapa de Teozacoalco" also underscores this book's
            argument—what, outside of the humanities, might just be called its
            main point. This argument has to do with the power that data
            visualization commands. As has been stated at least once already,
            and will become a constant refrain, this power derives both from
            data visualization as a set of methods, and from the people who
            decide how to put those methods to use. For the Ñudzahui mapmaker
            was not merely employing his knowledge of European representational
            strategies for ease and efficiency of interpretation; there were
            also profound personal and political stakes. By 1580, when he set
            his brush to the page, the Ñudzahui people had already endured
            several generations of colonial rule. Whereas the earliest decades
            after Spanish occupation, beginning in the 1520s, had been
            characterized by negotiations of governing power between Spanish
            colonial officials and the Native ruling elite, King Phillip II's
            ascendance to the throne, in 1556, was soon followed by a
            proliferation of laws intended to increase Spanish control over the
            Native population, and Spanish profit from Native land. Considered
            alongside the deadly epidemic that had been raging across the region
            for the previous few years, accelerating the already devastating
            effects of European disease, the mapmaker would have needed no
            additional indicator of the urgency of his charge. It was not merely
            to respond to a royal decree; it was to create a visual record that
            could clearly and unequivocally attest to his own people's enduring
            sovereignty and claims to the land.
            <InlineFootnote index={12} />
          </p>
          <p>
            Here, visualization, power, and context come together, illustrating
            how the intrinsic capabilities of data visualization are inflected
            by specific design decisions—decisions that are, in turn, influenced
            by the specific context (and the broader one) in which those
            decisions were made. While it may be tempting to hold onto a belief
            that it is possible to employ data visualization in a neutral
            capacity, the argument of this book is, again, that context and
            power always enter in. Very crucially, this argument does not
            delegitimize the use or function of data visualization. On the
            contrary, it shows how much more we can do with data visualization
            when we recognize its power, and make our own decisions—about both
            design and interpretation— with our knowledge of this power in clear
            view.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[1]} />
        <CenteredLayout>
          <p>
            Before moving forward, it is worth pausing to address a set of
            questions that have been to this point left unaddressed: What do I
            mean when I say "visualization"? Is there a difference between data
            visualization and visualization of other forms? And on that basis,
            is the map at the center of our inquiry even a visualization at all?
          </p>
          <p>
            First, visualization. One of the most interesting things to note
            about this term is that, despite its present ubiquity, it has only
            recently entered into widespread use.
            <InlineFootnote index={13} /> Well through the nineteenth century,
            most visual representations of data were described simply as
            "charts." Some people still prefer this term for its clarity and
            ease of use, and this is the main reason that I, too, employ the
            general language of charts and graphs throughout this book.
            <InlineFootnote index={14} /> Other terms I use, mainly for
            variety's sake, include variations on the term "graphics." This
            nomenclature derives primarily from the major twentieth century
            historians and theorists of data visualization—the American
            mathematician Howard Grey Funkhouser, whose 1937 essay on the
            "Historical Development of the Graphical Representation of
            Statistical Data" represents the first modern account of the history
            of data visualization; the French cartographer Jacques Bertin, whose
            structuralist approach to data visualization, as expounded in his
            landmark book, Sémiologie graphique (1967), continues to influence
            the teaching and practice of data visualization today; and the
            American statistician Edward Tufte, whose canonical Visual Display
            of Quantitative Information (1983) employs the term "data graphics"
            to distinguish his particular purview, to name just a few.
            <InlineFootnote index={15} />
          </p>
          <p>
            Notably, none of these men (and yes they were all men) use the term
            "visualization" at all. It was only in the 1990s, when visualization
            research began to emerge as a subfield of computer science, that the
            term "visualization" even began to enter into conversation—first
            only in academic circles, and later in the mainstream.
            <InlineFootnote index={16} /> In visualization research, which
            remains a thriving field, the term still denotes something quite
            specific: "the use of computer-supported, interactive, visual
            representations of data to amplify cognition," as Stuart Card, Jock
            Mackinlay, and Ben Shneiderman state in their influential textbook
            on the subject.
            <InlineFootnote index={17} />
            Further clarifying that "information visualization" (what, over the
            years, has become synonymous with "data visualization" in this
            narrow sense) is a subset of the more general category of
            visualization, one defined by the use of "abstract data" as opposed
            to data of other forms, the authors establish visualization as
            necessarily computational, predicated on interactivity, and employed
            in the service of advancing knowledge.
            <InlineFootnote index={18} />
          </p>
          <Figure figure={figures.placeholder3} />
          <p>
            I find this definition helpful for how it highlights the specific
            contributions of the field of visualization research. At the same
            time, it is too narrow for the range of artifacts I explore in this
            book; none (or at least none of the historical ones) were created
            with computational tools, nor are any "interactive" in a
            contemporary sense of that term. And while I appreciate the
            distinction between "abstract" and "scientific" data in theory—it is
            useful to be able to recognize the conceptual distinction between,
            for example, the number five being plotted on a number-line and the
            relative degree of access to reproductive rights in each US state
            being represented by a five-color scale—I have found that this
            conceptual distinction often breaks down in practice, especially as
            visualizations increasingly make use of multiple sources of data and
            multiple visual and/or interactive forms. As a result, I have come
            to see the distinction between abstract and scientific—or what I
            would call more generally representational data—as more of a sliding
            scale. I therefore reject any binary distinction between data
            visualization and visualization of other forms, and for this reason
            use the terms somewhat interchangeably in this book.
            <InlineFootnote index={19} />
          </p>

          <p>
            "After Roe Fell: Abortion Laws by State," an interactive
            visualization of abortion access across the United States, in which
            the degree of access is mapped to a five-color scale. Visualization
            created by the Center for Reproductive Rights. Screenshot by Lauren
            Klein.
            <a href="https://reproductiverights.org/maps/abortion-laws-by-state/">
              https://reproductiverights.org/maps/abortion-laws-by-state/
            </a>
          </p>
          <p>
            While I could point to recent trends in the field of visualization
            research to support this more inclusive definition, or observe that
            narrow definitions have long been used to exclude women and people
            of color from technical fields, my primary evidence for this
            decision comes from the empirical truth that this definition of data
            visualization is simply too limited to encompass the full range of
            what most people understand as data visualization today. Pulitzer
            Prize-winning data journalist Mona Chalabi is now releasing
            hand-drawn visualizations on topics as far ranging as the history of
            labor strikes to the casualties of the current war in Gaza on her
            Instagram feed; professional (and also award-winning) visualization
            designers Giorgia Lupi and Stephanie Posavec famously published a
            book of a year's worth of visualizations of the data of their daily
            lives, which they drew on postcards with pencils and markers, and
            sent to each other in the mail; data scientist and designer Shirley
            Wu created an interactive website to draw attention to the
            underrepresentation of women artists from Hong Kong on Wikipedia,
            that first presents as a stylized ink painting, but in fact encodes
            information about the length of the article about each artist, the
            number of references the article contains, and its citation count,
            in its overlapping pastel peaks; the team of artists and activists
            associated with the AMBOS project visited all eighteen of the
            official border crossings between the US and Mexico and created an
            18-strand quipu, with each knot formed by a commuter crossing the
            border that day; and artist- technologist Annina Ruest created a
            machine to print pie charts with data about the gender gap in STEM
            fields on actual edible pies. Are these not data visualizations? If
            not, what else might they be called?
          </p>

          <Figure
            figures={[
              figures.placeholder4,
              figures.placeholder4,
              figures.placeholder4,
              figures.placeholder4,
              figures.placeholder4,
              figures.placeholder4,
              figures.placeholder4,
            ]}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:ml-12"
            groupCaption={
              <p>
                Examples of data visualization, clockwise from top left: Mona
                Chalabi, "US Workers on Strike\" (2023); Shirley Wu, "Hong Kong
                Artists, Women" (2020); Stephanie Posavec, "A Week of Clocks,"
                from Giorgia Lupi and Stephanie Posavec, Dear Data (2016), Ambos
                Project, Border Quipu / Quipu Fronterizo (2016-2018, and Annina
                Ruest, "A Piece of the Pie Chart" (2017).
              </p>
            }
          />
          <p>
            More generally, I am less interested in asking what is or is not a
            data visualization as I am in asking how we—as viewers, designers,
            and researchers alike—understand the work that data visualization
            actually does. My definition of data visualization is, therefore,
            intentionally capacious. It includes representations of data that
            are both static and dynamic, both images and interactions. They can
            be made by computers or by hand, and presented on platforms as far
            ranging from rag-paper to phone screens to Ruest's edible pies. They
            do, ideally, "amplify cognition" if that phrase is taken to mean
            "the acquisition or use of knowledge," as Card et al. helpfully
            specify. But as we will learn over the course of this book,
            additional knowledge can also sometimes lead to additional
            uncertainty, or to an increased awareness of knowledge that will
            forever remain out of reach. I see a place for visualizations that
            prompt these forms of insight as well. Put another way: I
            intentionally use the term "data visualization" as capaciously as
            those in the eighteenth century used the term "chart." In my view,
            this is a feature of the term and not a bug. If we care about data
            visualization, and especially about innovations of form (and content
            and process) that push forward our ideas about what visualization
            can do, then we should embrace a definition of data visualization
            that includes rather than excludes, and that does not seek to erect
            barriers based on the type or size of data being visualized, the
            particular methods employed, the visualization's medium or platform,
            its intended purpose or audience, the backgrounds or credentials of
            its designers, or any other seemingly sharp but in reality quite
            fuzzy lines.
            <InlineFootnote index={20} />
          </p>
          <p>
            Which brings me back around to the "Mapa de Teozacoalco," and how it
            fits into this discussion of terminology and scope. It remains true
            that, in spite of a general trend to focus on the purpose of data
            visualization as a practice rather than as a set of images or
            interactions, the question of what distinguishes a map from a data
            visualization can still bring some scholars to blows. For the
            reasons outlined above, I ask for your grace in attempting to
            delicately sidestep this debate. Because what we learn from the
            "Mapa de Teozacoalco," as we do from almost any other map or chart
            that we encounter in the world, is how the practice of data
            visualization is both technical and contextual, both abstract and
            representational, entailing decisions based on a wide range of input
            and influences. We learn how the purpose of visualization may indeed
            be to prompt insight, but that insight is rarely limited to what is
            contained by the data alone. From the (more) representational
            components of the "Mapa de Teozacoalco," like its roads and
            mountains, from its (more) abstract ones, like its genealogical
            diagrams, and from the context that enters into the map from outside
            of its circular frame, what we ultimately learn is to ask additional
            questions: about the uses and limits of the knowledge that the chart
            was designed to lead towards, and about the range of forces of power
            that shape any decision to give complex information visual form.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[2]} />
        <CenteredLayout>
          <p>
            In the very same year that the Ñudzahui mapmaker was weighing what
            power he might wield as the creator of a map for the King of Spain,
            Galileo Galilei—whose famed observations about the moon and the
            planets would soon help to usher in the modern scientific age—had
            just entered his first year of medical school at the University of
            Pisa. Already bored by his coursework, but not yet prepared to tell
            his parents that he no longer wanted to become a doctor, Galileo
            turned his attention from the front of the lecture hall to the
            ceiling, contemplating a swinging chandelier.
            <InlineFootnote index={21} /> His subsequent observations about the
            pendulum form would, like his astronomical experiments, go on to
            inspire an entire area of scientific inquiry. But considering these
            contributions in relation to the mapmaker's map underscores a point
            no less profound: that the epistemological project in which Galileo
            was engaged was far more closely connected to the "Mapa de
            Teozacoalco" than he could then know.
          </p>
          <p>
            When the story of the emergence of modern data visualization is
            told, it often begins with Galileo and other key figures associated
            with the Scientific Revolution.
            <InlineFootnote index={22} /> The numerous scientific advances of
            the sixteenth and seventeenth centuries, across astronomy, physics,
            mathematics, biology, chemistry, and more, were bound together by
            their belief in the value of knowledge gained through empirical
            evidence—that is to say, through evidence gained through
            experimentation, observation, and other forms of direct sensory
            experience. Knowledge was no longer just handed down from heaven,
            divinely received, but was something that people—real people, not
            God—could create themselves.
            <InlineFootnote index={23} />
          </p>
          <p>
            While this empirical evidence could be registered by any of the
            senses, the sense of sight retained the primary status that it had
            long enjoyed.
            <InlineFootnote index={24} /> After all, it was by observing the
            night sky that Galileo, having successfully negotiated with his
            parents to shift his studies from medicine to astronomy and math,
            was able to confirm the phases of Venus and the existence of
            mountains on the moon. Fifty years later, in England, in an
            experiment canonized by historians of science (albeit less memorable
            to students of high-school chemistry) it would be by recording his
            observations about his self-fashioned "air pump," and inviting
            members of the public to do the same, that Robert Boyle developed
            his law describing the relationship between the pressure and volume
            of air.
            <InlineFootnote index={25} /> These experiments' clear contributions
            to scientific knowledge, combined with the empiricist philosophies
            that would soon be articulated by Enlightenment thinkers such as
            Francis Bacon, John Locke, and David Hume, provided both the
            evidence and the epistemological framework for more and more people
            to consider how they might acquire knowledge through what they saw.
            <InlineFootnote index={26} />
          </p>
          <Figure figure={figures.placeholder5} />
          <p>
            While there had been earlier examples of chart-like forms—an
            anonymous tenth-century diagram of the changing locations of
            constellations in the night sky, and a set of fourteenth- century
            charts of the relationships between quantities created by French
            philosopher Nichole Oresme are often cited—it was none other than
            René Descartes, a vocal critic of empiricism, who first had the idea
            of "representing points, lines, and geometric figures by equations
            that could be visualized in diagrams and used to solve problems," as
            Michael Friendly and Howard Wainer, in A History of Data
            Visualization & Graphic Communication, explain.
            <InlineFootnote index={27} /> But even as Descartes's diagrams were
            intended to support deduction—that is, the process of moving from
            the abstract to the particular—as opposed to the inductive approach
            favored by the empiricists, a crucial conceptual leap had been made.
            With Descartes's examples (if not his epistemology) as a guide, a
            growing number of people—including the perfectly named Robert Plot,
            who was also, incidentally, credited with discovering (but not
            identifying) the first dinosaur bone—began to plot other forms of
            numerical data, such as barometric pressure (Plot's subject),
            mortality statistics (Christiaan Huygens's), soil temperature
            (Johann Lambert's), and financial data (William Playfair's).
            <InlineFootnote index={28} /> And so with this expanding array of
            visual reference points, a growing abundance of data, and an
            increasingly pervasive empiricist worldview—to many, the pinnacle of
            Enlightenment thought—the flowering of data visualization was set to
            begin.
          </p>
          <Figure
            figures={[
              figures.placeholder4,
              figures.placeholder2,
              figures.placeholder3,
            ]}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:ml-12"
            groupCaption={
              <p>
                Clockwise from top left: An early graph of daily barometric
                pressure in Oxford, England, that appears in Robert Plot's
                "History of the Weather" (1685); three graphs from Lambert's
                Hygrometric Studies, which show the relationship between air,
                water, heat, and evaporation; and William Playfair's "Chart of
                all the import and exports to and from England from the year
                1700 to 1782," from the third edition of the Commercial and
                Political Atlas (1801).
              </p>
            }
          />

          <p>
            With this clear and compact story, we would seem to have left the
            Ñudzahui mapmaker far behind. But this is where our alternate story
            in fact converges quite directly with the standard account. For
            there are several significant connections between the ideas and
            examples that prompted the emergence of modern data visualization,
            and the project of European colonial expansion that prompted the map
            made for the King. For one, colonialism was functionally dependent
            on data visualization, in the form of mapping, both in order to
            provide navigational aids to would-be explorers, and to assert
            claims over the land and resources they sought to possess. In fact,
            some of the earliest known examples of "data maps" were enlisted for
            these purposes, such as the 1686 diagram of trade winds created by
            Edmond Halley, of Halley's Comet fame, which was based on
            observations from his own time spent in the south Atlantic sea.
            (Halley dropped out of college for two years in order to live on the
            island of Saint Helena, about two thousand miles off the coast of
            Angola).
          </p>
          <p>
            Halley's trade-wind diagram has been heralded by Edward Tufte, among
            others, as among the earliest examples of "placing a measured
            quantity on the map's surface at the intersection of two threads [of
            latitude and longitude] instead of the name of a city."
            <InlineFootnote index={29} /> (There is that attempted distinction
            between abstract and representational data again). But with the
            colonial context of its creation layered in, we can now not only
            recognize the "what" and "how" of the map's innovation, but also
            begin to see the "why": for Halley himself, most likely, the reason
            was the expansion of science; but for King Charles II of England who
            sponsored the mission—and later personally appealed to the
            University of Oxford to grant Halley his degree on the basis of
            these contributions in lieu of returning for his junior year—it was
            the expansion of his empire.
            <InlineFootnote index={30} /> Always seeking new opportunities to
            acquire land and resources so as to extract additional profit for
            the English Crown, the King saw very clearly how this goal would
            first require detailed and accurate knowledge about how those
            resources could be found.
            <InlineFootnote index={31} />
          </p>
          <Figure figure={figures.placeholder6} />
          <p>
            This practical dependency on data and mapping, and the tools and
            methods of measurement that were required to produce them, would
            become a hallmark of the European colonial project. In point of
            fact, very often, this process of quantifying local knowledge as
            data, and collating it into tables and charts, was an early step in
            a longer process of dispossession and, ultimately, death. I have
            already alluded to the devastating effects of this process, but
            before moving forward, it is important to more explicitly mark: of
            the estimated fifty to one hundred million people who inhabited the
            lands we now call the Americas before the time of first contact,
            only one-fifth to one-tenth of that number remained by the end of
            the seventeenth century, when Halley created his trade-wind map.
            <InlineFootnote index={32} />
          </p>
          <p>
            We will explore the ongoing effects of this foundation of "conquest
            and genocide," as Indigenous science and technology studies scholar
            Max Liboiron (Métis/Mechif) describes it, in Chapter Three.
            <InlineFootnote index={33} /> But we must first travel back to the
            seat of Spanish colonial power, in Madrid, to tease out a final
            point. This has to do with the conceptual convergence between this
            furthering of European empire and the rise of empiricism; in other
            words, between our expanded origin story and the standard account of
            visualization's rise. For the request that resulted in the "Mapa de
            Teozacoalco" was, as it turns out, one of many. In the absence of
            the King's ability to directly observe the geography of the colonies
            he sought to govern, his cosmographer had not only requested this
            particular map; he had issued a large-scale survey to every single
            locality claimed by the Spanish Crown—over 200 of them, stretching
            as far south as modern-day Peru.
            <InlineFootnote index={34} /> He asked questions about terrain,
            natural resources, and demographics; and he elicited quantitative as
            well as qualitative responses. As a result, the Relaciones
            Geográficas, as the survey would come to be known, has earned the
            distinction of being the first (known) statistical study of the
            Americas.
          </p>
          <p>
            While the public had yet to experience the "avalanche of printed
            numbers" that, as historian of science Ian Hacking has famously
            described, heralded the start of the modern statistical age, the
            efforts of the Spanish King were of a piece with other colonial
            rulers who sought to gain knowledge about their territorial
            holdings, and the people who lived there, by collecting data.
            <InlineFootnote index={35} /> The story of how these early data
            collection efforts were consolidated into national statistics
            bureaus and, from there, prompted the development of new methods of
            statistical analysis hand-in-hand with the most reprehensible of
            eugenicist worldviews, is another dark path that leads from this
            same welter of ideas and influences, one which we will also explore
            in the chapters to come.
            <InlineFootnote index={36} /> But in the context of our present
            discussion, the key point is this: how King Phillip II approached
            the task of gaining knowledge about his colonies in a method very
            similar to how Galileo approached the sky, or Boyle the
            air-pump—that is to say, through empirical evidence. His motivation
            for the Relaciones reflected his belief that data derived from
            direct observation, enhanced by visual representations of same,
            would lead to more complete knowledge of—and therefore more
            effective rule over—his domain.
          </p>
          <p>
            At this juncture, I can imagine some objections. Certainly, not all
            visualizations are colonial. And what of all of the scientific
            knowledge that empiricism helped to usher in? Should we throw away
            our knowledge of the seas and stars and planets and plants in one
            fell swoop? The answers to these questions are easy: correct and no.
            The takeaway from this expanded origin story is, once again, a
            lesson about the importance of considering context. More
            specifically, it is a lesson about the implications of the specific
            historical context that gave rise to our current default palette of
            data visualization techniques. This context is both epistemological
            and political —because, at the risk of getting to heady, the
            epistemological is political.
            <InlineFootnote index={37} /> And what this historical context
            offers us, in the present, is evidence of how the practice of data
            visualization has always involved significant ethical stakes.
          </p>
          <p>
            The methodological similarity between how King Phillip II approached
            the task of gaining knowledge about his colonies and how Galileo
            approached the sky, or Boyle the air- pump, should heighten our
            awareness of how much it matters to ask—and, crucially, answer—
            questions about the purposes of any particular visualization project
            we might view or undertake: what is the nature of the knowledge that
            it has been designed to surface? To whom does that knowledge belong?
            For what purposes will it be put to use, guided by whose values, and
            for whose goals? While we cannot change the fact that the roots of
            modern data visualization are intertwined with the European colonial
            project, we can move forward confident in our future charge: to view
            any visualization that we encounter, and to approach any we may
            design, with intention and care—asking what knowledge it is intended
            to help to prompt, and what additional context might be required to
            bring an even more complete picture of this knowledge to light.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[3]} />
        <CenteredLayout>
          <p>
            The "Mapa de Teozacoalco" is not, of course, the earliest instance
            of data visualization that we know. We have already discussed a
            contemporary example of quipu—a system that derives from the Inkan
            empire, or Tawantinsuyu, which employs knots on colored strings to
            track data about people, land, and resources; archaeologists have
            found examples of khipu (the spelling that refers to Inkan quipu in
            particular) that date to as early as 2600 BCE.
            <InlineFootnote index={38} /> Earlier still, in Mesopotamia,
            archaeologists there have uncovered clay tablets, dating from
            between 3100 to 2900 BCE, that employed proto-cuneiform combined
            with numerical symbols to record information about the distribution
            of grain. And a recent project out of Peking University employed
            state-of-the-art image detection techniques to identify around
            180,000 examples of historical visualizations from China, the
            earliest dating to 550 BCE—a project explicitly intended as a
            corrective to the dominant "Eurocentric view".
            <InlineFootnote index={40} /> These images join earlier examples
            from that region, such as the set of ivory counting rods (ca.
            475-221 BCE) found in Changsha, Hunan Provence, that enabled
            groupings of numbers to assist in complex math. As these examples
            collectively attest, societies from all over the world have long
            recognized the generative potential unleashed by translating
            quantitative information into visual form.
          </p>
          <Figure
            figures={[
              figures.placeholder4,
              figures.placeholder2,
              figures.placeholder3,
            ]}
            className="grid grid-cols-2 md:grid-cols-3 gap-2 md:ml-12"
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
            This global history, even in abridged form, prompts a key question:
            what do I mean by the phrase "modern data visualization"? The term
            "modern" here, as the kids say, seems to be doing a lot of work. One
            response to this question would be to wave it away; a quick survey
            of the term's usage in extant histories of the field seems to
            suggest that it is employed simply as shorthand, a way of loosely
            delineating the lower bound of the era that contains the earliest
            examples of charts that look like those we still encounter today.
            This usage tracks with a definition of "modernity" in its most
            general sense: the period of time ushered in during the sixteenth
            century, corresponding with major transformations in science,
            philosophy, and governance, among others, many of which have been
            already discussed here. But even as this shorthand is broadly
            legible, it has also been broadly critiqued. Its reference-points
            imply a European focus. What of the scientific, philosophical, and
            political transformations that took place in other parts of the
            world, many along earlier timeframes? Were these societies not also
            modern?
            <InlineFootnote index={41} /> Or, to take another common tack, even
            if "modernity" is accepted as geographically constrained, as a way
            of describing how Europe understood its own developments during this
            time, which developments should be included as among its signal
            features? How were these contributions assessed? According to what
            criteria—and, crucially, by whom?
          </p>
          <p>
            It is here that my own expertise in Enlightenment philosophy returns
            to the fore, because it has long been recognized that the same
            features that announced the arrival of this modern way of
            thinking—the celebration of human reason, the articulation of
            individual rights and political liberties, and the development of
            the modern nation-state, among others—were, paradoxically,
            accompanied by a narrowing of which types of humans were capable of
            exercising reason, or enjoying rights and liberties, or other
            protections of the modern state. As decades of scholarship has
            shown—and, for that matter, many philosophers' actual writing on
            these subjects—it is not a coincidence that today's racial and
            gender hierarchies also solidified during that time.
            <InlineFootnote index={41} /> To shift from a worldview in which
            both knowledge and governance were divinely received, to one in
            which humans made their own decisions about what to believe and how
            to rule (or be ruled) was scary! It then followed, psychologically
            as much as philosophically, that many of the same thinkers who first
            worked to valorize human reason and the virtues of self-governance
            would move on to consider questions about which humans they thought,
            more precisely, exemplified these ideals. Very depressingly, but
            perhaps not surprisingly, those they identified as best exemplifying
            these ideals were people just like themselves: European, white, and
            male.
          </p>
          <p>
            This is the reason why we must remain open to critiques of histories
            of data visualization —including the one you are reading right
            now—that locate its starting point in modern Europe. It is not
            without hesitation that I have chosen to start my own account at
            that exact place and time. But one of the major methodological
            contributions of scholarship on the Enlightenment and its
            reverberations across the Atlantic, and throughout the world, has
            been to show how there are always counterhistories that can be
            surfaced. These are histories that run alongside the dominant
            account, with each actor and example called in to challenge or
            otherwise destabilize the story that is generally told.
            <InlineFootnote index={42} /> The history of modern data
            visualization (always, as you can now understand, with scare quotes
            implied) has not yet received this counterhistorical treatment, and
            while it is not the only intervention into the history of the field
            that is required, it is one that, because of my own disciplinary
            background, I am well-equipped to tell.
          </p>
          <p>
            Indeed, we have already begun to recognize the tremendous power in
            choosing how to visualize data, but there is also tremendous power
            in choosing how to tell a story. For there are many paths that take
            us from any starting point to any finish. These paths are rarely
            linear, and— as we have already begun to see with the history
            narrated here—they are very often traveled at the same time. Some of
            these paths, like the dominant story of visualization's rise, are
            well-worn and familiar; while others, like the Ñudzahui mapmaker's,
            are far less trafficked; and others still not yet begun to be
            explored. These less-trodden paths are powerful because they lead us
            not to worlds not yet or not yet fully realized—worlds that might be
            preferable to the present one, but that require us, in the words of
            sociologist Ruha Benjamin, to "push us beyond the constraints of
            what we think, and are told, is politically possible" in order to be
            achieved.
            <InlineFootnote index={43} /> These are the worlds I hope to open up
            with this project: worlds of possibility for the practice of data
            visualization, for our future knowledge, and for more liberatory
            future for us all.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[4]} />
        <CenteredLayout>
          <p>
            Our story follows a chronological arc from the final years of the
            eighteenth century, where—as we have learned—the starting point of
            modern data visualization is generally placed, up to the turn of the
            twentieth century, when this first modern age of data visualization
            begins to crest. Along the way, we pass through many more of the
            major developments that defined this era: the emergence and
            entrenchment of the slave trade—itself an outgrowth of the economic
            ambition of the European colonial class; the resistance movements in
            both England and the Americas that led to its abolition; the Age of
            Revolutions, which saw the establishment of democratic governments
            in the United States, France, and Haiti; the continued dispossession
            of Native lands across the Americas, which was brought about by the
            territorial expansion of the United States; the nation's subsequent
            fracturing over the issues of slavery and sovereignty alike, which
            culminated in the US Civil War; and the attempts at Reconstruction
            that followed up until the century's close.
          </p>
          <p>
            This chronology is paralleled by a methodological progression: as
            the chapters advance, each also considers an additional aspect of
            the practice of data visualization: data, image, people, process (as
            in the process of knowledge production), power (as in the power of
            data visualization to effect change), and work (as in the work that
            went into the making of this book). In this way, each chapter layers
            in additional complexity, building upon the ideas and examples
            discussed to that point. Indeed, in many ways, this conceptual
            structure is the dominant structure of the book. The history that
            has been recounted in this Introduction is, in fact, more detailed
            than any you will encounter in the chapters to come. It is intended
            to set the stage for charts at the center of each chapter, and the
            stories that they themselves disclose.
          </p>
          <p>
            Along these lines, Chapter 1 begins with the indelible image,
            Description of a Slave Ship (ca. 1789), which visualizes the data of
            the slave trade by depicting each anguished body that the numbers
            represent. Here we learn how racial capitalism was (and remains)
            what authorizes colonial powers to continue to accumulate wealth and
            resources, and in the process, enforce a view of objects, actions,
            and even people as "goods" that can be converted into data, reduced
            to a price.
            <InlineFootnote index={44} /> By beginning with this visualization,
            and not any of the more canonical examples often shown, I seek to
            set the story of modern data visualization from its start onto a
            more ethical path. This path demands that those who design
            visualizations, and those who view them, consistently consider what
            is made visible in relation to what is not. In this particular case,
            what is made visible is horror at scale. What remains unseen is the
            full humanity of the lives that the data represents. Here we also
            probe a conceptual tension at visualization's core: its remarkable
            capacity, on the one side, to distill complex information into clear
            and efficient insight; and its potential for harm, on the other, in
            how the abstraction required to distill this insight often comes at
            the expense of the details of the data and the context in which it
            was produced.
          </p>
          <p>
            With this key tension of data visualization firmly in place, the
            clean data-lines of William Playfair's time-series charts—the
            subject of Chapter 2—look quite different than they ever have
            before. Analyzing these and other visual components of his charts
            alongside the text that introduces the third (and most widely
            circulated) edition of his Commercial and Political Atlas (1801)
            confirms how the political instability brought about by the Age of
            Revolutions, as much as an adherence to Enlightenment empiricism,
            inspired his influential visualization techniques. By recreating
            Playfair's charts with a contemporary visualization library, D3, we
            further show how the data-lines of his charts—so often upheld for
            their accuracy and objectivity—in fact embellish the story told by
            the data alone. But far from delegitimizing the value of his charts,
            this finding serves to advance one of this project's core claims:
            about how an attention to context— historical, political, and in
            this case, material—allows us to learn more and not less about the
            nature of the insights, and the knowledge, that any particular chart
            seeks to prompt.
          </p>
          <p>
            Chapter 3 moves from England and Scotland, where the Description and
            Playfair's time- series charts were created, to North America, where
            the central examples of all subsequent chapters are placed. This
            chapter is where Shanawdithit's narrative maps (ca. 1829) take
            center stage. The argument I make here is both more subdued than the
            previous chapters and more profound: that all visualizations that we
            create—and not just those explicitly enlisted in the service of
            empire—can be refracted through a colonial frame. As in the previous
            chapters, we ask the same questions of the field of data
            visualization as we do of our own project team. Here, we consider
            our own visualization work, as exemplified by the charts and
            diagrams we've designed for this book, in the context of
            colonialism's present-day effects. As in the previous chapters, we
            continue to probe the uses and limits of data visualization, but
            here we expand our frame to consider the people whom any particular
            visualization serves. In the end, the lessons of this chapter tilt
            more towards limits than uses, but they are no less important to
            behold—for they teach us about our obligations to our work and to
            the people who enable it, as well as about what visualization
            cannot—or should not—help us to understand.
          </p>
          <p>
            If the emphasis of Chapter 3 is the limits of current visualization
            practices, Chapter 4 opens the door to its future possibilities. Its
            focus is on the chronological grids of educator and editor Elizabeth
            Palmer Peabody, which employed color and position in order to
            represent historical events in time. Peabody's charts, as described
            her Polish-American System of Cartography (1850) and documented in
            her Chronological History of the United States (1856), were designed
            to be abstract rather than intuitive; to promote sustained
            reflection rather than immediate insight; and to provoke a unique
            imaginative response in each viewer. These are epistemological
            principles that diverge sharply from the positivism that has shaped
            visualization best practices to this point.
            <InlineFootnote index={45} /> We use the example of Peabody's
            alternative viewpoint to consider more broadly what additional
            strategies we might envision—and what additional insights we might
            prompt—if we open ourselves up to a wider range of processes by
            which knowledge can be produced. We introduce our own data
            physicalization project, as well as several digital recreations of
            Peabody's original charts, to show how visualization can be enlisted
            in the service of multiple ways of making knowledge, ultimately
            contributing to more complete knowledge overall.
          </p>
          <p>
            Chapter 5 takes us to the century's close, considering the charts
            designed by the esteemed sociologist W.E.B. Du Bois and his team of
            students from Atlanta University for the 1900 Paris Exposition.
            Recently reclaimed by many historians of data visualization as a
            corrective to otherwise white and Eurocentric accounts, Du Bois's
            charts in fact tell a more complex story— one that acknowledges the
            power of visualization at the same time as its admits its limits. By
            exploring Du Bois's charts in the context of his writing on race and
            racism and his sociological theory, and by recreating them in ways
            that account for the students whose knowledge and labor helped to
            shape them, we close with a reassertion—through both text and
            image—of how data visualization, the conceptual conditions of its
            emergence, and its political consequences, are fundamentally
            intertwined. Drawing a discussion of race, data, and political
            agency into the present, the chapter concludes with an optimistic
            consideration of what data visualizations can accomplish once we
            learn to recognize—and account for—both its uses and its limits.
            Indeed, visualization can do more than reveal the significance of
            data; it can bear witness to instances of oppression, it can render
            visible more just futures; and it can—if intentionally designed—hold
            space for what cannot be conveyed through data alone.
          </p>
          <p>
            A concluding chapter hones in on the issue of labor, a through-line
            of the project overall. It takes as its focus not the history of
            visualization but its practice in the present, in the form of the
            making of the book you are reading now. While the words on this page
            are written by one person, as the Preface explains, the
            visualizations and other interactions that are documented here have
            been designed collaboratively, and implemented by an intentionally
            interdisciplinary research team. Our expertise that spans the fields
            of art and design, computer science, and literary, cultural, and
            media studies. And as this project has evolved, and as the team has
            undergone multiple iterations, we have come to see ourselves and our
            own process as illustrative of the ideas animated by the historical
            examples in this book. The final chapter thus represents our attempt
            to document our work and credit all contributors, while providing
            the first extended example (for there are indeed smaller examples
            sprinkled throughout the book) of how the lessons of Data by Design
            can find form in contemporary visualization work.
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[5]} />
        <CenteredLayout>
          <p>
            We are a team of visualization designers, software engineers, and
            humanities researchers. As such, we have always intended for the
            ideas of this project to be put into use. We envision Data by Design
            as both a model for how to analyze the visualizations that we
            encounter in our everyday lives with more intention, and as a guide
            for how to design more ethical visualizations themselves. In this
            way, we see our project as liberatory: as advancing a practice of
            intentional, ethical, and contextual visualization design that takes
            as its goal the transformation of not merely "best practice," but of
            the baseline conditions of our unequal world. By framing this book
            with the story of the "Mapa de Teozacoalco"—its intrinsic power as a
            visualization, as well as the power wielded by its maker and the
            power it would accord to the Spanish King—we hope to show how data
            visualization has a clear role to play in this transformative
            project, and even more, how this project has already begun. Put more
            directly: it is not a coincidence that, as we move through the major
            examples that structure this book, we will also move through some of
            the major struggles for social justice that define this era: the
            British abolitionist movement, the US Civil War, and Black
            Reconstruction, among several others. For just as data, its
            collection, and its visual display, have long been wielded as
            weapons by powerful actors, they have just as often been wielded to
            push back. What we will say in writing, and what we will show
            through our own visualization design, is how a more liberatory
            approach to data visualization is possible when intention and ethics
            come together with contextual awareness and responsible design.
          </p>

          <p>
            More concretely, we believe we can achieve this liberatory practice
            of data visualization when we open ourselves up to historical
            contextualization, conceptual theorization, and detailed
            analysis—that is to say, to a humanistic approach to visualization
            design. We see this approach as essential for how it allows us to
            identify our existing assumptions, and understand how these
            assumptions serve to narrow rather than expand what is possible for
            the future. As difficult as it may be to accept as a ground truth
            that data is not always beautiful, and visualization is not always
            (or ever) a neutral art, the dangers of dismissing this knowledge
            are far more vast. Without this more contextualized understanding of
            the emergence of modern data visualization techniques, we run the
            risk of believing that our work can only ever contribute to new
            knowledge—and not itself narrow what is possible to know. Indeed,
            when we presume that our charts and interfaces will point our
            viewers to what is most important, we run the risk of reinforcing
            the empiricist view that what can be seen represents the full extent
            of what can be known. As we will be demonstrated throughout this
            book, there is no single dataset, nor is there any single visual or
            interactive form, that can give us the full picture of the
            phenomenon we seek to explore. But this realization is not a reason
            to reject visualization wholesale. On the contrary, it is through
            the continued pursuit of learning more—a pursuit that, very
            crucially, involves the identification of both new sources of
            knowledge and additional and perhaps unfillable gaps—that we arrive
            at the most complete understanding of the topic at hand.{" "}
          </p>

          <p>
            What you will encounter in the chapters to come are, at their core,
            stories. These are stories told through visualization and told
            through words. Taken together, these stories seek to expand our
            understanding of the history of data visualization so that we can
            shape its future with more intention and care. From our increased
            knowledge of the history of the field, of its range of innovations
            and its limits, we will gain a more complete—and therefore more
            accurate—picture of what visualization can do. My strongest hope,
            shared by the project team, is that you come away from this project
            with new ideas about how to design visualizations, new ways for how
            to structure design processes, and new contexts for how to put both
            visualization and process to use. For while we will learn that
            visualization on its own is rarely enough to achieve the goal we
            share—of more complete knowledge, enlisted in the service of a more
            just and equal world—we will also learn how additional
            knowledge-making practices, and processes, can amplify each other,
            working together to achieve the goals we all share. The practice of
            data visualization that is modeled here begins not with data, or
            even with design, but with the recognition that data visualization
            is only as powerful as the purposes for which it is put to use.{" "}
          </p>

          <p>
            Indeed, the arguments made in this book are often serious. We have
            already begun to learn how the history of data visualization is
            intertwined with the histories of slavery, capitalism, and
            colonialism. But in surfacing this history, our goal is not to
            suppress the use of visualization or to limit its future growth. On
            the contrary, we seek a more informed and more intentional, and
            because of this, a more precise and effective practice of data
            visualization, both in our own work and in that of our readers. This
            practice is one that prioritizes the particularities of each
            dataset, that considers its social, political, and historical
            context, that attends to the people who made it possible, and that
            continually recalls the power—and, therefore, the
            responsibility—that we hold as designers of visualizations
            ourselves.{" "}
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
