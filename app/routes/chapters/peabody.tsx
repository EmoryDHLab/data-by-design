import { useState } from "react";
import ChapterTitle from "~/components/ChapterTitle";
import type { HoverState } from "~/chapterContext";
import { ChapterContext } from "~/chapterContext";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import PullQuote from "~/components/PullQuote";
import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";
import CenteredLayout from "~/components/layout/CenteredLayout";
import FullBleed from "~/components/layout/FullBleed";
import Figure from "~/components/layout/Figure";
import Footer from "~/components/Footer";
import PromotionalTourMap from "~/components/peabody/PromotionalTourMap";
import HoverText from "~/components/HoverText";
import HoverZoomPeabodySquare from "~/components/peabody/HoverZoomPeabodySquare";
import InlineFootnote from "~/components/InlineFootnote";
import { peabodyFootnotes } from "~/footnotes";
import PeabodySandbox from "~/components/peabody/PeabodySandbox";
import FootnotesList from "~/components/FootnotesList";
import Scrollytell from "~/components/peabody/PeabodyScrollytell";
import Quotation from "~/components/Quotation";
import PeabodyQuiz from "~/components/peabody/PeabodyQuiz";
import PeabodyBarGraph from "~/components/peabody/PeabodyBarGraph";
import LEDChart from "~/components/peabody/LEDChart";

export default function PeabodyPage() {
  const [hoverState, setHoverState] = useState<HoverState>(undefined);
  const [docHeightState, setDocHeightState] = useState<number>(0);

  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "peabodyPrimary",
        accentColor: "peabodyPrimary",
        footnoteTextColor: "playfairPrimary",
        primaryTextColor: "black",
        footnotes: peabodyFootnotes,
        hoverState,
        setHoverState,
        docHeightState,
        setDocHeightState,
      }}
    >
      <ChapterTitle
        title="The Work of Knowledge"
        subtitle="Elizabeth Palmer Peabody's Chronological Grids"
      />
      <TwoColumnLayout>
        <Column shouldPin={true} className="first-paragraph leading-7">
          Elizabeth Palmer Peabody was born in Massachusetts in 1804. Today, she
          is most widely recognized for her proximity to more famous men—in
          particular, to the writers of the American Renaissance, such as Ralph
          Waldo Emerson and Nathaniel Hawthorne, and to early champions of
          educational reform, such as Bronson Alcott and Horace Mann. (One of
          her sisters, Sophia Amelia Peabody, was married to Hawthorne; and the
          other, Mary Tyler Peabody, was married to Mann). But Elizabeth Palmer
          Peabody had intellectual impact in her own right: the bookstore that
          she ran out of her home, at 13 West Street, in Boston, functioned as
          the <i>de facto</i> salon for the transcendentalist movement. She
          edited and published the first version of Henry David Thoreau's essay
          on civil disobedience. And she is credited with starting the first
          kindergarten in the United States.
          <InlineFootnote index={0} />
          <p>
            Indeed, Peabody was an educator to her core. She came from a family
            of teachers. Her mother and two sisters all taught grade-school at
            various times. And in the 1850s, when she set out from her home in
            Boston to ride the rails, it was with an explicitly educational aim:
            to promote the pair of history textbooks she had recently written,
            <cite>The Polish-American System of Chronology</cite>(1850) and
            <cite>A Chronological History of the United States</cite> (1856).
            She traveled as far north as{" "}
            <HoverText hoverState="Rochester">Rochester, NY</HoverText>; as far
            west as{" "}
            <HoverText hoverState="Louisville">Louisville, KY</HoverText>; and
            as far south as{" "}
            <HoverText hoverState="Richmond">Richmond, VA</HoverText>, in order
            to evangelize about her new pedagogical method. The Polish-American
            System, she came to call it, was a method with data visualization at
            its center.
          </p>
          <FullBleed>
            <PullQuote
              title="Peabody designed her charts to be abstract rather than intuitive;"
              subtitle="to promote sustained reflection rather than immediate insight. "
            />
          </FullBleed>
          <p>
            Along with boxes of her textbooks, Peabody traveled with a fabric
            roll the size of a living room rug, which contained a floor-sized
            version of one of the chronological charts described in the book.
            Peabody identified the charts—in their vibrant, full-color detail—as
            key components of her visual pedagogy. As she describes in the
            "Advertisement" that begins the <cite>Polish-American System</cite>
            the charts were "intended to do for the science of history what maps
            do for that of geography; and they will make [it] easy to lay the
            foundations of historical knowledge in the minds of the young."
            <InlineFootnote index={1}></InlineFootnote>
            Like Playfair, Willard, and other early proponents of data
            visualization, Peabody understood the value of visual communication.
            But she did not intend, as did Playfair, to produce a clarifying
            "picture of the past."
            <InlineFootnote index={2}></InlineFootnote>
            Rather, Peabody designed her charts to be abstract rather than
            intuitive; to promote sustained reflection rather than immediate
            insight. And she did so with a clear goal in mind: to provoke a
            unique imaginative response in each viewer. Aligning the
            insight-prompting power of inductive reasoning with her own ideas
            about the generative potential of aesthetic judgment, Peabody placed
            her charts within a proto-participatory learning environment that
            was intended both to produce new knowledge about the past and to
            help envision new pathways for the future.
          </p>
        </Column>
        <Column className="md:ml-12">
          <PromotionalTourMap />
          <Figure
            images={[
              {
                src: "/images/peabody/1500s.jpg",
                alt: "",
              },
              {
                src: "/images/peabody/1600s.jpg",
                alt: "",
              },
              {
                src: "/images/peabody/1700s.jpg",
                alt: "",
              },
              {
                src: "/images/peabody/1800s.jpg",
                alt: "",
              },
            ]}
          >
            The four chronological charts included in Elizabeth Palmer Peabody's
            Chronological History of the United States (1865), which display the
            significant events of the 1500s, 1600s, 1700s, and 1800s. Images
            courtesy of the Internet Archive. Digitized by the Library of
            Congress.
          </Figure>
        </Column>
      </TwoColumnLayout>
      {/* <LEDChart /> */}
      <ChapterSectionTitle title="A Visual Method of Making History" />
      <CenteredLayout>
        <p>
          Peabody's method of visualizing events of historical significance was
          inspired by a system developed in Poland in the 1820s, and popularized
          in subsequent decades by the military general (and erstwhile math
          teacher) Jósef Bem.
          <InlineFootnote index={3}></InlineFootnote>
          Bem's system employed a grid overlaid with shapes and colors to
          visually represent events in time. In{" "}
          <cite>Cartographies of Time: A History of the Timeline</cite>, Daniel
          Rosenberg and Anthony Grafton describe how the system "swept across
          Europe and North America" in the middle decades of the nineteenth
          century.
          <InlineFootnote index={4}></InlineFootnote>
          But Peabody first encountered the system by chance: through a
          traveling lecturer who briefly boarded with her family on West Street.
          The boarder, a man named Joseph Podbielski, had come from Poland with
          copies of Bem's charts, which he intended to promote on a lecture tour
          of the United States. While he soon departed the family's residence,
          Peabody remained "captivated" by the charts, according to one of her
          biographers, Bruce Ronda.
          <InlineFootnote index={5}></InlineFootnote>
          She went on to devote several years to a study of the Polish System,
          culminating with the development of her own modified version: the{" "}
          <cite> Polish-American System </cite>
          that prompted her own national tour.
        </p>
        <p>
          On this point, Peabody makes special note that she employs "a somewhat
          different, and, as it seems to me, a more expressive distribution of
          colors."
          <InlineFootnote index={6}></InlineFootnote>
        </p>
      </CenteredLayout>

      <Scrollytell />

      <TwoColumnLayout>
        <Column>
          <p>
            In <cite>The Polish-American System of Chronology</cite>, Peabody
            covers a tremendous expanse of time: the period between 2500 BCE and
            1849 CE (what was then the present). But Peabody also saw the need
            for a textbook that focused exclusively on the United States, and
            that went into more detail than she could cover in a textbook on
            world history. And so, shortly after the release of the
            <cite>Polish-American System</cite>, she began working on the book
            that would be published, in 1856, as
            <cite>A Chronological History of the United States</cite>. This
            textbook contained the four full-color plates displayed above; one
            for each of the centuries since the first European colonizers set
            foot on Native American land. As Peabody envisioned it, the basic
            exercise was to read a chapter of the textbook, which contained a
            narrative account of the events of a single century, and then match
            each item in the list of events that concluded the chapter with its
            visual representation on the corresponding chart.
          </p>
          <p>
            For example, by cross-referencing the table of events of the
            seventeenth century, pictured just below, to its corresponding
            chart, it is possible to identify, for example, the
            <HoverText className="font-semibold" hoverState="Jamestown">
              founding of Jamestown in 1607;
            </HoverText>
            that is the large red square in the first row on the right—red to
            signal England's involvement, and its full-square shading to
            indicate its heightened significance. One can also identify, in the
            last square on the right, one row from the top,
            <HoverText className="font-semibold" hoverState="Plymouth">
              the settlement of Plymouth in 1620.
            </HoverText>
            The square is nearly entirely red—again, because of England's
            involvement and because of its heightened significance—save for a
            small teal square in the middle-right position. Teal corresponds to
            action by the Dutch; indeed, this registers the
            <HoverText
              className="font-semibold"
              hoverState="FirstEnslavedAfricans"
            >
              first enslaved Africans arriving in Virginia in that same year.
            </HoverText>
            On the side of abolition but by no means its most radical proponent,
            the square's ratio of red to teal reflects Peabody's awareness of—if
            not an urgency about—the need to end slavery in the United States.
            <InlineFootnote index={8}></InlineFootnote>
          </p>
          <p>
            Chronology—or, the study of events in time—is not, of course, the
            same as historiography—the study of how history is written. But in
            Peabody's mind, the one led to the other: "If you have the dates
            here [on the charts] represented perfectly by heart," as she
            explains in the introduction to students included in the
            <cite>Chronological History</cite>, "events are so connected in the
            narrative of history."
            <InlineFootnote index={9}></InlineFootnote>
            In keeping with the leading pedagogical theories of the day, which
            emphasized mental recall, students were expected to commit the
            charts to memory.
            <InlineFootnote index={10}></InlineFootnote>
            But Peabody's approach diverged from the rote memorization that
            characterized most mid-nineteenth-century classrooms in that her
            ultimate aim was for each student's mental picture of past events to
            prompt a richer--and, crucially, and
            individually-constructed--narrative of history. For Peabody, the
            power of this personal narrative of history was immense: it could
            show "the origin and consequences of national action"; and for the
            US in particular—the world's first representative democracy—it could
            instruct "every one what to do and what to leave undone, in his own
            inevitable action," as a necessary participant in their own
            governance.
            <InlineFootnote index={11}></InlineFootnote>
          </p>
          <p>
            Far from an antiquated line of thinking, Peabody's belief in the
            catalyzing effects of chronology remains deeply embedded in US
            culture today. As a prominent example, one might consider the
            efforts of <cite>New York Times</cite> journalist Nikole
            Hannah-Jones to replace 1776 with 1619—<i>contra</i>&nbsp; Peabody,
            the year the first enslaved Africans actually arrived in Virginia—as
            the starting point for the history of the United States. The goal of
            this revised origin point, as Hannah-Jones explains in the visual
            feature that introduces the 1619 Project, is to "reframe the
            country's history by placing the consequences of slavery and the
            contributions of black Americans at the very center of our national
            narrative."
            <InlineFootnote index={12}></InlineFootnote>
            This recentered narrative would ideally, in turn—in a view endorsed
            by the <cite>Times</cite> editorial board—prepare US citizens of all
            races "for a more just future."
            <InlineFootnote index={13}></InlineFootnote>
          </p>
          <p>
            But it is not only the narrative of the nation's founding that can
            benefit from a recentering of the enduring costs of its legacy of
            slavery, or of the contributions made by its Black citizens. In her
            acclaimed recent book, <cite>Dear Science and Other Stories</cite>,
            Black studies scholar Katherine McKittrick takes on the project not
            of history but of science, explaining how an account that centers
            Black people, Black life, and Blackness more broadly can reveal the
            "asymmetrically connected knowledge systems" that structure modern
            scientific inquiry.
            <InlineFootnote index={14}></InlineFootnote>
            For McKittrick, an awareness of the range of related yet unequally
            weighted knowledge-making systems is what enables her own vision of
            a liberatory Black science to unfold. In addition, it also offers
            lessons to scholars outside the field of Black studies—including
            white scholars, such as myself, who cannot claim to know Blackness
            firsthand—about the "asymmetrically connected knowledge systems"
            that structure all of our work.
          </p>
        </Column>
        <Column className="md:ml-12" shouldPin={true}>
          <HoverZoomPeabodySquare />
        </Column>
      </TwoColumnLayout>

      <CenteredLayout>
        <FullBleed>
          <PullQuote
            title="Our ways of knowing—about science, about history,
                              or about any other phenomena in the world—"
            subtitle="are overdetermined by the asymmetrically connected
                              (and constructed) systems that shape them."
          />
        </FullBleed>
        <p>
          Indeed, our ways of knowing—about science, about history, or about any
          other phenomena in the world—are overdetermined by the asymmetrically
          connected (and constructed) systems that shape them. Data
          visualization is no exception. This latter point has been made by
          science and technology studies scholars for decades—perhaps most
          famously by feminist philosopher Donna Haraway, who uses the example
          of data visualization in order to formulate her own influential theory
          of <em>situated knowledges</em>—put plainly, the view that all
          knowledge is rooted in a particular perspective, and thereby informed
          by the social, cultural, and political as well as scientific contexts
          that surround it.
          <InlineFootnote index={15}></InlineFootnote>
          Crucially for Haraway, as for McKittrick, our awareness of how
          knowledge is <em>situated</em>, as Haraway would say; or how knowledge
          is
          <em>relational</em>, as perhaps would McKittrick, does not diminish
          the validity of what we presently know, nor does it foreclose any
          future knowledge-making. On the contrary, these more nuanced
          understandings of the perspectives and places from which knowledge is
          made are precisely those on which, to quote Haraway, "the possibility
          of sustained, rational, objective inquiry rests."
          <InlineFootnote index={16}></InlineFootnote>
        </p>
        <p>
          With a renewed sense of the stakes of acknowledging the perspectives
          and places that shape what we know, we might return to Peabody's
          chronological charts with the observation that few
          twenty-first-century viewers—or, for that matter, nineteenth-century
          ones—could have intuited the significance of the events encoded in the
          charts without first taking the time to learn how the system worked.
          <InlineFootnote index={17}></InlineFootnote>
          This lengthy and difficult learning process might be viewed as a
          liability by visualization researchers and designers who continue to
          champion the ease and efficiency of visualization; or those who
          maintain that data visualization is best deployed to amplify already
          existing thought processes. In support of these arguments, consider
          the representation of the events encoded in Peabody's chart of the
          seventeenth century as a timeline, rather than a grid, shown just
          below. The progression of events over the course of the century,
          culminating in a series of wars and rebellions in the late 1680s and
          early 1690s, becomes much more immediately legible.
        </p>
        <p>
          But for Peabody, her charts' near-total abstraction was precisely the
          point. She designed her charts to appeal to the senses directly, to
          provide what she called "outlines to the eye."
          <InlineFootnote index={18}></InlineFootnote>
          Her hope was that, by providing the outline of history—and, crucially,
          only the outline—each viewer could fill in the missing parts of the
          story themselves.
          <InlineFootnote index={19}></InlineFootnote>
          The result would be a proliferation of historical narratives, one
          originating in the mind of each viewer, and reflecting their own
          interpretation of the chart. Anticipating claims about both the
          situated and relational nature of knowledge production, Peabody's
          visualization system reconfigures the otherwise unidirectional
          transfer of knowledge between image and viewer. What's more, it
          affirms each interpretation of each image as knowledge, and therefore,
          each viewer as that knowledge's source.
        </p>
      </CenteredLayout>

      <PeabodyBarGraph />

      <ChapterSectionTitle title="The Politics of Visual Knowledge Production" />
      <TwoColumnLayout>
        <Column>
          <p>
            Peabody was a lifelong proponent of what might be described today as
            participatory learning. In the early 1860s, as the nation became
            increasingly consumed by the Civil War, Peabody found purchase in a
            personal recommitment to early childhood education. Her
            kindergarten—the first of its kind in the United States—which she
            opened with her sister (and Horace Mann's widow), Mary Tyler Mann,
            served as a proving ground for her innovative pedagogical ideas.
            With her sister, she also published a series of texts that
            documented the theories they enacted in the classroom: that physical
            play mattered as much as formal instruction, and that knowledge was
            derived not from any external authority but rather, from a focused
            and sustained analysis of "the self-activity of the mind."
            <InlineFootnote index={20}></InlineFootnote>
          </p>
          <p>
            In addition, on her own, Peabody continued to iterate on the
            teaching and learning materials associated with the
            <cite>Polish-American System</cite>. In 1870, she began printing
            workbooks with sheets of blank charts—"blank centuries," as she
            called them--so that students could themselves create the
            visualizations that they would then study.
          </p>
        </Column>
        <Column className="md:ml-12">
          <Figure src="/images/ch4-blank-chart.webp" alt="">
            A blank chart from{" "}
            <cite>Blank Centuries for Monographs of History</cite>
            (1870), the workbook that Peabody printed to accompany her history
            textbooks. Courtesy of the American Antiquarian Society. Photo by
            Lauren Klein.
          </Figure>
        </Column>
      </TwoColumnLayout>

      <PeabodyQuiz />

      <TwoColumnLayout className="pt-20">
        <Column>
          <p>
            But the exercise of creating a chronological chart from scratch is
            quite hard, as you--the reader--might have discovered from the
            interaction above. Not to worry, however! The difficulty level was
            high for students of the nineteenth century as well. Peabody's
            nephew, Julian Hawthorne, who served as her first test subject,
            recalled that she "labored during some years to teach me all the
            leading dates of human history," but that he nevertheless remained
            "most inapt and grievous" throughout the process.
            <InlineFootnote index={21}></InlineFootnote>
            The evidence in the archive confirms this first-hand account. At the
            American Antiquarian Society, the Library Company of Philadelphia,
            Yale's Beinecke Library, and Princeton's Special Collections can be
            found multiple copies of Peabody's workbooks, many of which I've
            personally paged through over the course of conducting research for
            this project. The workbooks all tend to follow a similar pattern: a
            page or two of grids filled out in earnest; then a series of
            attempts abandoned halfway; and then a shift in purpose, the grid
            becoming a canvas for pattern and unbridled play.
          </p>
          <p>
            It's worth repeating that the difficulty of the Polish-American
            system is both a liability of the form and also the point. Peabody
            first developed her method at a time when the nation's future seemed
            to hang in balance. The second half of the 1840s had brought an
            increased awareness of the nation's growing sectarianism, as well as
            its range of social ills--albeit with a (mostly) optimistic view
            about the potential of its governing structures to address these
            challenges. But as the 1850s unfolded, the magnitude of these
            challenges became increasingly more pronounced. Even as her
            privilege protected her from having to enter the political fray,
            Peabody recognized that the task of resolving the underlying issue
            of sectarianism, not to mention the moral obligation of ending
            slavery, posed a degree of difficulty of the highest order. Peabody
            understood, moreover, that any successful resolution would require
            sustained effort and thought.
          </p>
          <PullQuote
            title="By prompting her students to create new narratives of the past, "
            subtitle="they would also imagine alternative possible futures. "
          />
          <p>
            Her goal with the <cite>Polish-American System</cite>
            was thus to create a framework, equal parts intellectual and
            immersive, through which this difficult thinking could take place.
            "The old world is covered with bad institutions which men have
            created, very often with positively good intentions, but on false
            notions, or, at least, without large and profound ideas," she
            explains in the preface to the
            <cite>Chronological History</cite>. "Whether the new world shall
            estimate and sift out these evils, or repeat these mistakes, depends
            on young Americans, who are now sitting in schoolrooms all over the
            country, unconscious of their powers and consequent
            responsibilities," she further explains.
            <InlineFootnote index={22}></InlineFootnote>
            Her hope was that the act of creating the chronological charts,
            rather than simply studying them, would prompt both self-reflection
            and new ideas. Put another way: Peabody hoped that by prompting her
            students to create new narratives of the past, they would also
            imagine alternative possible futures.
          </p>
          <p>
            The political context that provided Peabody with the motivation to
            publish her history textbooks is crucial for understanding both her
            ideas about the uses of visualization, and the form that her
            visualizations take. But this context is not easily discerned from
            the visualizations themselves. Without the knowledge of how to
            decode the charts, let alone a sense of their political stakes, the
            charts' geometric abstraction prompts a purely aesthetic response.
          </p>
          <p>
            Other charts from the same era make their politics more explicit,
            however—for example, Emma Willard's 1846
            <cite>Temple of Time</cite>, which depicts past centuries as the
            pillars that support the titular temple. In the chart, the
            nineteenth century—then the present—is represented as an unfinished
            column, not yet stable enough to support the weight of the past. On
            the ceiling of the temple, Willard catalogues key figures from each
            prior century, including statesmen, philosophers, discoverers, and
            poets. On the floor of the temple, she lays out the developments of
            major nation-states, their paths drawn as rivers subjected—like
            water levels—to the expansions and contractions of state power over
            time. Significantly, Willard places the path of the United States
            front and center. From the perspective of the viewer, this river
            flows directly towards them, enfolding them in the expanding
            influence of the United States: the future to come.
            <InlineFootnote index={23}></InlineFootnote>
          </p>
        </Column>
        <Column className="md:ml-12" shouldPin={true}>
          <Figure
            className="grid grid-cols-2 md:grid-cols-4 gap-2"
            images={[
              {
                src: "/images/ch4-5.webp",
                alt: "",
              },
              {
                src: "/images/ch4-6.webp",
                alt: "",
              },
              {
                src: "/images/ch4-7.webp",
                alt: "",
              },
              {
                src: "/images/ch4-8.webp",
                alt: "",
              },
              {
                src: "/images/ch4-9.webp",
                alt: "",
              },
              {
                src: "/images/ch4-10.webp",
                alt: "",
              },
              {
                src: "/images/ch4-11.webp",
                alt: "",
              },
              {
                src: "/images/ch4-12.webp",
                alt: "",
              },
            ]}
          >
            Images of student-created charts from a copy of
            <cite>The Polish-American System</cite> housed at the American
            Antiquarian Society. Courtesy of the American Antiquarian Society.
            Photos by Lauren Klein.
          </Figure>
        </Column>
      </TwoColumnLayout>
      <CenteredLayout>
        <Figure className="full-bleed" src="/images/ch4-13-willard.jpg" alt="">
          Emma Willard's perspectival <cite>Temple of Time</cite> (1846). Image
          courtesy of the David Rumsey Map Collection, Cartography Associates.
        </Figure>
        <p>
          While sharply divergent from Peabody's charts in terms of aesthetics,
          Peabody nevertheless identified Willard as a major source of
          inspiration, crediting Willard with creating "the most ingenious chart
          ever besides [her own] invented."
          <InlineFootnote index={24}></InlineFootnote>
          In Chapter 3, I discuss Willard's influences, which included Joseph
          Priestley's <cite>New Chart of History</cite>, from 1796, among the
          most circulated charts of its time; and Playfair's
          <cite>Commercial and Political Atlas</cite>, the subject of Chapter 1.
          According to historian Susan Schulten, Willard appreciated the
          efficiency of these charts, but felt that they gave "little sense of
          the
          <em>dimension,</em> such as the relative importance of periods or the
          subjective experience of time."
          <InlineFootnote index={25}></InlineFootnote>
          Sure enough, while neither Preistley's timeline nor Playfair's
          import-export charts provide a sense of the subjective experience of
          time, they do offer images that are just as interpretable today as
          they were at the time of their making.
        </p>
        <p>
          By contrast, the more abstract impression first conveyed by Peabody's
          chronological grids immediately invites—indeed, requires—additional
          interpretation. Her configuration of her data not, <cite>pace</cite>
          Playfair, according to the cartesian grid but instead as a visual
          text, designed to be read from left to right, top to bottom,
          underscores her interpretive intent. (What might seem to be x-y axes
          that divide each image into quadrants are instead, as Peabody
          explains, only intended to serve as visual anchor points in an
          otherwise unstructured field.) Like the process of interpreting a
          text, Peabody's charts encourage further contemplation. The charts may
          serve as the basis for future knowledge, but they do not serve as that
          knowledge's definitive source. This view of how knowledge should be
          constructed is conveyed not only in the accompanying textbooks, but
          through the visually-compelling yet nonetheless unintuitive design of
          the charts themselves.
        </p>
        <p>
          With the addition of the workbooks, which enabled the students to
          create their own charts, Peabody further underscores her belief in a
          more participatory form of knowledge production. This form of
          knowledge-making challenges the hierarchy that most commonly
          structures the relationship between the designer of a visualization
          and those who view (or interact) with it. According to Peabody's
          participatory process, it is the student who is authorized to both
          create and interpret the image, rather than the designer—in this case,
          Peabody herself—who originally developed its designs. If there is a
          single message communicated by Peabody's chronological charts, it is
          that their meaning is not fixed. Rather, they impress upon the viewer
          a sense of responsibility--first for developing informed
          interpretations of the images they perceive, and then for designing a
          course of future action.
        </p>
      </CenteredLayout>
      <ChapterSectionTitle title="The Gendered Archive of Data Visualization" />
      <TwoColumnLayout className="pt-20">
        <Column>
          <p>
            There is a final lesson to be learned from Elizabeth Palmer Peabody
            and her charts, which has to do with the labor—physical as much as
            intellectual—that is involved in the production of knowledge. An
            additional aspect of Peabody's pedagogy were the "mural charts" that
            she created in order to center classroom discussion. These were the
            charts she traveled with on her national promotional tour, as
            mentioned at the outset of this chapter, and by all accounts they
            were dazzling: triangles and squares of crimson, ochre, and forest
            green, set against a sharp black grid. In her version of a sales
            pitch, Peabody would "lay [a] chart down on the floor" and invite
            her would-be textbook adopters to sit around it and contemplate the
            colors and patterns they perceived.
            <InlineFootnote index={26}></InlineFootnote>
          </p>
          <p>
            The pedagogical impact of this embodied interaction was nothing
            short of transformative. "I have never known a system which placed
            the events of the history of all nations before the mind with such
            clearness, so little confusion, and so much permanency," wrote
            Eliphalet Nott, then president of Union College, who participated in
            one of Peabody's teaching demonstrations.
            <InlineFootnote index={27}></InlineFootnote>
            Anticipating a decidedly twenty-first-century view of the value of
            immersive education, Peabody staged an encounter with the data that
            involved the whole body. This was an interaction that, she hoped,
            would in turn stimulate the imagination to new heights. Indeed, if
            visualization is to offer "richer understandings [of data] that
            enable researchers to ask bolder questions," as esteemed
            visualization researcher Ben Shneiderman believes, then the mural
            chart seems to represent an early apotheosis.
            <InlineFootnote index={28}></InlineFootnote>
          </p>
          <p>
            And yet, because the mural charts were not valued as objects of
            knowledge in their own time, not a single one has been preserved.
            Scholars even remain uncertain as to many of their basic features.
            Peabody's biographer, Bruce Ronda, speculates that they "must have
            been much larger than even folio size."
            <InlineFootnote index={29}></InlineFootnote>
            And while he does not provide any more specificity, Peabody's nephew
            Julian's recollection of the "huge, colored charts" which "hung on
            the walls of our sitting room" offers first-hand account of the
            impression they made.
            <InlineFootnote index={30}></InlineFootnote>
            As an additional datapoint, one might consider the "poster-sized
            timelines" created by Peabody's contemporary, Anne Laura Clarke, who
            created her timelines with the help of her sister, also named
            Elizabeth, to accompany a series of lectures on history which she
            delivered across the country. Clarke's charts were not acquired by
            an archive but instead kept in her sister's attic, where they remain
            today.
            <InlineFootnote index={31}></InlineFootnote>
          </p>
        </Column>
        <Column className="md:ml-12" shouldPin={true}>
          <Figure
            className="grid grid-cols-2 items-center middle-full gap-x-4"
            images={[
              {
                src: "/images/ch4-clarke1.webp",
                alt: "",
              },
              {
                src: "/images/ch4-clarke2.webp",
                alt: "",
              },
            ]}
          >
            <p>
              <strong>Left:</strong> One of the timelines created by Anne Laura
              Clarke, as explored by Granville Ganter in his essay on Clarke's
              traveling lectures.
            </p>
            <p>
              <strong>Right:</strong> Another timeline as it was first
              encountered by Ganter. Photos by Granville Ganter. Courtesy of
              Granville Ganter.
            </p>
          </Figure>
        </Column>
      </TwoColumnLayout>
      <TwoColumnLayout>
        <Column shouldPin={true}>
          <p>
            The absence of Peabody's mural charts from the archive has prompted
            me to undertake a project to reimagine and restage Peabody's
            immersive learning experience for the present.
            <InlineFootnote index={32}></InlineFootnote>
            Working with my research group, in a team that has involved multiple
            cohorts of students over multiple years, we first created a touch
            matrix made of strips of copper tape.
            <InlineFootnote index={33}></InlineFootnote>
            The matrix works like a computer keyboard, with columns and rows of
            conductive material--in this case, the copper tape--separated by
            foam spacer. When a person presses on a square of the grid, the two
            layers of copper tape touch each other, creating a connection. Above
            the touch matrix sits a cloth topper, also fabricated by members of
            the lab, that approximates the visual features of Peabody's original
            charts.
            <InlineFootnote index={34}></InlineFootnote>
            The topper holds in place a series of strips of individually
            addressable LEDs, resulting in a 30 x 30 grid that can be programmed
            to display Peabody's "painted centuries," as she sometimes described
            them.
            <InlineFootnote index={35}></InlineFootnote>
            While Peabody used a stick to point to specific events on the grid,
            the Floor Chart responds to touch; users can press on individual
            squares in order to cycle through the possible colors of each chart,
            allowing them to engage their whole bodies in the creation of
            chronological charts of their own.
          </p>
          <p>
            The project has required a range of domain expertise, from
            electronics prototyping to signal processing to circuit board
            design. It has also required a truly tremendous amount of labor.
            Each yard-long strip of copper tape needed to be perfectly aligned,
            lest a small misalignment at one end result in a significant gap at
            the other. Each of the nine-hundred square-shaped holes of the
            membrane layer of the touch matrix was required to be cut out by
            hand, as laser-cutting the holes would have released harmful toxins.
            Each electrical connection was required to be soldered, tested, and
            then—in almost all cases—soldered again, so as to ensure that the
            circuit remained intact. As much as an exercise in physical
            fabrication, the project has become an exercise in the physicality
            of work itself—of the focus that is required, and the resultant
            fatigue, of any large-scale project that is made by human hands.
          </p>
        </Column>
        <Column className="md:ml-12">
          <Figure
            className="grid grid-cols-2 items-center middle-full gap-x-4"
            images={[
              {
                src: "/images/ch4-15a-fc-left.png",
                alt: "",
              },
              {
                src: "/images/ch4-15b-fc-right.png",
                alt: "",
              },
            ]}
          ></Figure>
          <Figure src="/images/ch4-17-leds.webp" alt="" />
          <Figure src="/images/ch4-18-rendering.webp" alt="">
            The layers of the touch interface, built with copper tape and a foam
            spacer; the assembled touch interface; a view of the modular circuit
            boards for communicating with the LEDs; a rendering of the completed
            Floor Chart; the LEDs displayed on top of the quilted chart. Photos
            by Lauren Klein.
          </Figure>
        </Column>
      </TwoColumnLayout>

      <CenteredLayout>
        <FullBleed>
          <PullQuote
            title="Who else are we missing"
            subtitle="when we fail to include examples like these in the stories we tell about the emergence of data visualization? "
          />
        </FullBleed>
      </CenteredLayout>

      <TwoColumnLayout>
        <Column>
          <p>
            The tedious, time-intensive nature of the Floor Chart project
            provides another path of connection back to the original mural
            charts. For Peabody did not only demonstrate the charts as part of
            her sales pitch; as an additional incentive, she also promised an
            original mural chart to any teacher who purchased copies of one of
            her textbooks for their entire class. Writing to a friend in 1850,
            Peabody revealed that she was "aching from the fatigue of making
            Charts for the Schools who will take the book." The letter
            continues:
          </p>

          <Quotation
            quote={
              <>
                Every school must have a mural chart—&amp; there is but one way
                of making them (until they can be made by ten thousands) &amp;
                that is by stenciling [<em>sic</em>]... I can do one a day. But
                I must sell them cheap… To day I worked 15 hours—only sitting
                down to take my meals—&amp; so I have done all week—so much
                fatigue stupefies one—but as soon as it is adopted in a few
                towns I shall be able to hire someone to do this drudgery for
                me.
              </>
            }
            byline="Elizabeth Peabody,Letter to Samuel Gray Ward, September 1850"
          ></Quotation>

          <p>
            While we cannot change the fact that we no longer have access to the
            original mural charts, letters like these help to attest to the
            physical labor that was required to produce them. With its reference
            to the "stencilling" through which Peabody created her colorful
            symbols, as well as to its characterization of the tasks involved in
            making the charts as "drudgery," the letter also underscores the
            gendered dimensions of Peabody's knowledge work.
          </p>
          <p>
            It's not a coincidence that Peabody understood the labor of making
            her mural charts as women's work, and that these same charts were
            not preserved. Then as now, there exists a hierarchy of work that
            aligns with the hierarchy of gender that governs the Anglo-Western
            world. Work that is performed outside the home is valued, both
            culturally and monetarily, over work that is performed within it.
            Work that is perceived as more rigorous, or more professional—like,
            for instance, the political economy that functioned as Playfair's
            primary trade—is valued, again, both culturally and monetarily, over
            work that is perceived as more intuitive, or more domestic—like, for
            instance, the teaching that functioned as Peabody's main employ.
            Even—or, more precisely, especially—within the art world, creative
            work that is perceived as high art is valued above work perceived as
            craft.
            <InlineFootnote index={36}></InlineFootnote>
            These gendered divisions of labor are among primary reasons that
            Peabody's mural charts never entered the archive. And they are the
            same reasons that her charts have not (yet) been centered in the
            account of the rise of modern data visualization that is most
            commonly told. But who else are we missing when we fail to include
            examples like these in the stories we tell about the emergence of
            data visualization? And what possible future visualization designs
            are we foreclosing, either intentionally or inadvertently, when we
            do?
          </p>
          <p>
            Women's work of various forms has much to contribute to larger
            narratives about the development of most scholarly disciplines and
            professional fields. A final example helps to underscore this point:
            most contemporary viewers, when seeing Peabody's charts for the
            first time, observe that they look like paintings by Piet Mondrian,
            the famous Dutch modernist.
            <InlineFootnote index={37}></InlineFootnote>
            To be sure, Peabody's charts strongly resemble Mondrian's own bold,
            colorful, geometric grid. But Peabody's self-account of the work
            involved in making the mural charts brings to mind a second point of
            reference, which is not painting but quilting: an artform
            traditionally practiced by women, and that has long been relegated
            to the world of "folk art" and craft.
            <InlineFootnote index={38}></InlineFootnote>
          </p>
        </Column>
        <Column shouldPin={true}>
          <LEDChart />
        </Column>
      </TwoColumnLayout>

      <CenteredLayout>
        <Figure
          className="grid grid-cols-2 items-center middle-full gap-x-4"
          images={[
            {
              src: "/images/ch4-19-rachel-carey-george.webp",
              alt: "",
            },
            {
              src: "/images/ch4-20-gbq-q030-06.webp",
              alt: "",
            },
          ]}
        >
          <p>
            <strong>Left:</strong> "Housetop," by Rachel Carey George, ca. 1935.
          </p>
          <p>
            <strong>Right:</strong> "Housetop" variation, design by Mary Lee
            Bendolph. 1998, quilted by Essie Bendolph Pettaway, 2001. Photos
            courtesy of Tinwood Media.
          </p>
          <p>
            <em>Permissions pending.</em>
          </p>
        </Figure>
        <p>
          Pictured above are two quilts from the area of Alabama known as Gee's
          Bend, a small, rural Black community, 35 miles south of Selma, that
          can trace its roots to a cotton plantation that was established there
          in the early nineteenth century. While valued by the residents of
          Gee's Bend for centuries, both for their aesthetics and for the family
          histories that they encode, the quilts have only recently begun to be
          recognized by art historians as key contributors to the development of
          modernist art.
          <InlineFootnote index={39}></InlineFootnote>
          Exhibitions at the Whitney Museum in New York, in 2002; the Turner
          Contemporary in London, in 2019; and others, have confirmed how the
          quilts "predate like-minded works by their more famous abstract art
          cousins."
          <InlineFootnote index={40}></InlineFootnote>
        </p>
        <p>
          As Black women who pursued their art while enslaved, and have
          continued to persist through slavery's perpetual wake, the life
          experiences of the Gee's Bend quilters could not be farther removed
          from those of Elizabeth Palmer Peabody, a white woman protected by her
          family's membership in the Boston elite. But the creative work of the
          Gee's Bend quilters, as distinguished historian Elsa Barkley Brown has
          shown, offers a model that can help structure a range of complex
          questions about epistemology, historiography, and pedagogy—indeed, the
          same questions in which Peabody's work was engaged. Drawing
          inspiration from the "polyrhythmic, 'nonsymmetrical,' and nonlinear"
          patterns of the Gee's Bend—among the Black women's quilts that she
          studies—Brown advocates for a pivoting of the center of the history
          classroom—that is, not decentering one perspective in favor of another
          but instead intentionally and continually shifting the focus from one
          perspective to the next.
          <InlineFootnote index={41}></InlineFootnote>
          The result of this pedagogical strategy is capacious and multifold: it
          allows the artifacts and experiences under analysis to be understood
          in the context of their own creation, and it allows the students
          performing this interpretive work to "become the voices of authority
          in their own education."
          <InlineFootnote index={42}></InlineFootnote>
          Ultimately, Brown concludes, "the class is a quilt. It is precisely
          the contrast which organizes the whole and holds it together."
          <InlineFootnote index={43}></InlineFootnote>
        </p>
        <p>
          We might similarly come to understand history as a quilt—as Brown
          strongly implies and as our project team has literally fabricated. But
          our work—and now I speak as a "we" in the general sense, on behalf of
          scholars of data visualization and those who design them—is far from
          complete. Consider the surprise that greeted me—along with no small
          degree of pleasure—upon discovering that a quilt created by Loretta
          Pettway, one of the Gee's Bend quilters, graces the cover of Edward
          Tufte's most recent book,
          <cite>Seeing with Fresh Eyes</cite>
          (2020). More than merely a compelling image—"unorthodox, fresh,
          amazing" is the extent of how Tufte describes it in the text—we must
          learn to see Pettaway's quilt, like Peabody's chart, as a system of
          knowledge making.
          <InlineFootnote index={44}></InlineFootnote>
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
          object seeks to commemorate, on the one hand; or on the other, convey.
        </p>
        <p>
          As Brown reminds us with respect to the quilts, these artifacts are
          "illustrative of a particular way of seeing, of ordering the world."
          <InlineFootnote index={45}></InlineFootnote>
          We might extend this assertion to data visualization. Indeed, the
          images and interactions that we create reflect our own ways of seeing
          and ordering the world. This fact does not invalidate the insights
          that they prompt, or the knowledge that they help us to acquire. On
          the contrary, it informs the knowledge that any particular
          visualization helps bring to light. With a wider awareness of the
          multiple ways of seeing the world, and a wider range of methods for
          ordering its data, we can enrich the basis of what we presently know,
          and—as Peabody envisioned—open up new possibilities for future
          knowledge.
        </p>
      </CenteredLayout>
      <ChapterSectionTitle title="The Visualization Work To Come" />
      <CenteredLayout>
        <p>
          Throughout this project, I argue for the knowledge that can be gained
          by expanding the history of data visualization to include a wider
          range of forms and figures. To be sure, additional examples of early
          attempts at visualizing data help inspire us, in the present, to
          imagine new visual and interactive forms. But there is a deeper lesson
          that I have also sought to convey, which has to do with how
          visualization "produces the knowledge it draws," as Johanna Drucker
          explains.
          <InlineFootnote index={46}></InlineFootnote>
          Elizabeth Palmer Peabody's method of making history, premised on
          visual abstraction and designed for prolonged engagement, encourages
          multiple individual interpretations of the data on display. In so
          doing, it advances a pluralistic and non-hierarchical view of how
          knowledge is produced.
        </p>
        <p>
          In addition to advancing a belief in <em>how</em> knowledge is
          produced, Peabody's method advances a belief in <em>who</em>
          is authorized to produce knowledge. Peabody believed that her students
          were each capable of producing historical knowledge, and that
          together, they might arrive at a solution to the nation's most
          pressing political concerns. We might further expand Peabody's view of
          the value of bringing together multiple perspectives, enhanced by the
          example of the Gee's Bend quilts, into a broader claim about the need
          to expand the range of sources—and the range of people—who we enable,
          as visualization designers, to make knowledge claims. Following the
          theories and approaches of the scholars introduced in this essay,
          including Donna Haraway, Katherine McKittrick, and Elsa Barkley Brown,
          we might therefore employ Peabody's pedagogy as a path to
          understanding the situated and relational nature of all that we know.
          Moving forward, more specifically, we might better attempt to design
          visualizations that value the interpretations prompted by each viewer
          as they encounter (or interact with) the data on display.
        </p>
        <p>
          Finally, we might employ Peabody's data creations—both the textbooks
          and workbooks that are preserved in the archive, and the mural charts
          that are not—in order to reflect upon the range of labor that is
          involved in knowledge work, and the range of people who perform it.
          How might we value the full range of labor that contributes to the
          creation of any particular visualization? How might we honor all of
          those we rely upon to perform this work? And how might we ensure that
          their contributions are no longer erased from history? Here, once
          again, Peabody's visual method becomes valuable. Because it authorizes
          us as viewers, as students, and as scholars, to fill in the details of
          the stories that we can only perceive in the abstract. Peabody's hope,
          which we might carry forward, is that when presented with the outlines
          of history, we might take it upon ourselves to color them in.
        </p>
      </CenteredLayout>
      <PeabodySandbox />
      <CenteredLayout>
        <FootnotesList footnotes={peabodyFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
