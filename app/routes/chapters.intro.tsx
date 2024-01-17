import { useState } from "react";
import ChapterTitle from "~/components/ChapterTitle";
import { ChapterContext } from "~/chapterContext";
import PullQuote from "~/components/PullQuote";
import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";

import CenteredLayout from "~/components/layout/CenteredLayout";

import Footer from "~/components/Footer";
import { playfairFootnotes } from "~/footnotes";
import FootnotesList from "~/components/FootnotesList";
import playfairFigures from "~/data/figures/playfair.json";
import FigureObj from "~/components/layout/FigureObj";

export default function IntroPage() {
  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "playfairPrimary",
        primaryTextColor: "white",
        accentColor: "playfairPrimary",
        accentTextColor: "white",
        footnoteTextColor: "playfairPrimary",
        footnotes: playfairFootnotes,
      }}
    >
      <ChapterTitle
        title="A Counterhistory "
        subtitle="of Data Visualization"
      />

      <CenteredLayout>
        <p className="first-paragraph py-10">
          From area charts that show the results of pivotal elections, to line
          graphs that document the effects of climate change, data visualization
          has become a central part of how we make sense of our complex lives.
          Yet when we encounter one of these charts or graphs, we tend to think
          of the role of visualization — if we think of it at all — as revealing
          the meaning of the data underneath. The reality, however, is that the
          act of visualizing data carries meaning in and of itself. Take the
          example of the electoral map. Should its shape be determined by
          geography or by population? What about the chart of climate change?
          Should the data line be smoothed so as to emphasize a general rising
          trend in temperature? Or should each data point be kept distinct, so
          as to emphasize increasing fluctuation? Choices like these–about which
          visual (or interactive) form to employ, which color palette to use,
          and which facets of the data to display, among many more–each tell us
          important things. They tell us about the designers’ sense of the
          significance of the data, their views of the people they are designing
          for, and their understanding of the value of visualization itself.
        </p>
        <p>
          How can we attune ourselves to these additional aspects of data
          visualization? The gambit of this project team is that these choices
          might be easier to perceive in the past than in the present, because
          of the relative unfamiliarity of historical visualization forms. For
          this reason, Data by Design takes you back in time about two hundred
          and fifty years, to the very end of the eighteenth century, which is
          often considered the dawn of modern data visualization. We will
          introduce you to some of the earliest known examples of bar charts and
          pie charts; to hand-drawn maps depicting multiple layers of time; to
          impressionistic grids that attempt to summarize a century of history
          in a single image; and to bespoke visualizations that have not been
          seen before or since.{" "}
        </p>
      </CenteredLayout>

      <PullQuote
        title="Playfair's goal was not accuracy but inspiration."
        subtitle="His intent was to produce a visual impression — one
                    inspired by the data, but not a direct
                    representation of it — that would, in turn, prompt
                    the insights that lead to new knowledge."
      />

      <TwoColumnLayout>
        <Column>
          <FigureObj figure={playfairFigures["1-northamerica"]} />
          <FigureObj figure={playfairFigures["2-wheat"]} />
          <FigureObj figure={playfairFigures["3-pie"]} />
        </Column>
        <Column className="ml-0 md:w-2/3 md:ml-10">
          <p>
            But before moving any further, it’s important to make clear that
            1788 — the date this project begins — was not the first time that
            anyone had ever had the idea to visualize data. The Incan practice
            of quipu, for example — a technique of recording quantitative
            information as knots on strings — has been traced as early as 250
            B.C.E. In the North American context—where the majority of the
            project team lives and works—there are an abundance of examples of
            wampum belts being employed by Indigenous nations to encode
            political relations — most famously, by the Haudenosaunee — and
            these date to at least a century before the beginning of the story
            that we tell on this site.
          </p>{" "}
          <p>
            For the story we tell is not simply about data visualization. It’s a
            story that places the emergence of data visualization in the context
            of the European Enlightenment, and in particular, in the context of
            Enlightenment theories about the value of visual and statistical
            knowledge. As such, it also, necessarily, places data visualization
            in the context of global capitalism, which was of course racial
            capitalism–a fact that continues to carry consequences for us today.
            And while it might be surprising to some readers to learn that
            seemingly “neutral” or “objective” methods of visualizing data are
            embedded in this specific sociopolitical context, it was not
            actually news to those in the eighteenth and nineteenth centuries
            who were developing these early visualization techniques that their
            work had social and political stakes. Consider William Playfair, the
            man often described as the “father” of modern data visualization,
            and who is credited with inventing the pie chart. On the first page
            of the preface to the third edition of his Commercial and Political
            Atlas (1801), Playfair explains how “the minds of men, the
            boundaries of nations, their laws and relations to each other, are
            all in a state of change,” and for that reason, he has “chosen the
            present moment” to republish his charts.
          </p>
          <p>
            Admittedly, Playfair was also motivated by personal reasons. Very
            few people had purchased the first edition of his book, and he was
            “long anxious” to be acknowledged as an innovator. And while it
            would have given him great pleasure to know that he is hailed today
            as the father of data visualization, there are many other
            visualization innovators who have yet to receive their due. These
            include activists and educators, sociologists and statisticians, as
            well as regular folks recording information about their lives in the
            ways that rang most true. And as we follow their paths from their
            own times up into the present, we begin to see the multiple ways in
            which data might be given visual form, and the multiple paths to
            knowledge that those visualizations enable.
          </p>
          <p>
            To do this, we interweave detailed analyses of historical
            visualization examples–some well-known and some more obscure–with
            interactive reimaginings of those same images. Each of the
            interactions that you will encounter has been intentionally designed
            in order to convey an argument. For example, on the project front
            page, you’ve already encountered the first of these–a representation
            of all of the archival images that appear throughout the site. We
            decided to present these images to you in a way that might appear at
            first glance as a hodge-podge, or even a mess. The images are
            scattered as if on a floor, many overlapping with each other. But
            this layout has an underlying rationale: the paths through the
            images that we offer in this project, in the form of the chapters
            that can be navigated up above, are only some of many. And while
            we’ve made it possible to sort the shuffled images into a timeline,
            as you may have discovered by clicking the “timeline” button on the
            previous page, we did not want to imply–either through our writing,
            or through our design–that there is one single path through.
          </p>
          <p>
            While it is possible to read the chapters in any order, they are
            arranged in somewhat of a chronological arc, moving from England to
            Scotland, sites of some of the earliest instances of so-called
            modern data visualization, and then on to the Americas, in order to
            emphasize the influence of colonial expansion on the development of
            modern data visualization. To this point, we begin the project not
            with Playfair but, instead, with the indelible Diagram of a Slave
            Ship, which dramatizes the data of the slave trade by depicting each
            anguished body that the numbers represent. This image, also known as
            the Brooks, for the name of the ship that the diagram was based
            upon, was created in 1788, within a year of the first versions of
            Playfair’s canonical charts. Considered instead of Playfair as the
            starting point for the story we tell, it establishes the importance
            of considering data visualization in relation to the lives the data
            seeks to represent.
          </p>
          While the Diagram of a Slave Ship was designed to produce an
          “instantaneous impression” in all those who saw it, we decided to
          present this image to contemporary readers more carefully than it was
          in its own time. In that first chapter, you will notice an option to
          read the chapter with images or without, so as to give you the choice
          as to whether you wish to engage with this visual record of violence.
          More broadly, the Diagram of a Slave Ship and its data of human
          suffering sets in motion one of the main arguments of this project:
          the idea of data visualization as a double-edged sword. This consists,
          on the one side, of the power to distill complex information such that
          insight can easily and efficiently emerge; and on the other, of its
          potential for harm, brought about by how the abstraction required to
          distill this insight comes at the expense of the details of the data
          and the context in which it was produced.
          <p>
            With this key tension of data visualization firmly in place, we
            return you to the time-series charts of William Playfair, presenting
            an analysis of his charts alongside the text of his Commercial and
            Political Atlas. Through this exercise, we confirm how the
            uncertainty brought about by the Age of Revolutions, as much as an
            adherence to Enlightenment empiricism, inspired his influential
            visualization techniques.
          </p>
          <p>
            We carry forward a discussion of democracy and nation-formation into
            the next chapter, which considers two contrasting approaches to
            visualizing geographical data: the historical atlas created by Emma
            Willard, the activist and educator, to accompany her US history
            textbook (1828); and the impressionistic maps sketched by
            Shanawdithit (Beothuk) at the urging of a Scottish-Canadian
            anthropologist (ca. 1829). Engaging questions of colonial expansion
            alongside concerns about Indigenous sovereignty, we continue to
            probe how data visualization enables new modes of understanding,
            across both languages and cultures, at the same time that it also
            often requires a severing of both data and knowledge from its
            source.
          </p>
          <p>
            We continue to track the development of data visualization into the
            nineteenth century, and across the United States, through the
            railroad journey of educator and editor Elizabeth Palmer Peabody.
            Peabody undertook her travels in order to promote a new method of
            visual pedagogy, which employed color and position in order to
            represent historical events in time. Peabody’s charts, as described
            in The Polish-American System of Cartography (1850) and documented
            in A Chronological History of the United States (1856), were
            designed to be abstract rather than intuitive; to promote sustained
            reflection rather than immediate insight. In doing so, she was
            guided by a clear goal: to provoke a unique imaginative response in
            each viewer.
          </p>
          <p>
            But if Peabody placed unyielding faith in the generative potential
            of data visualization, the esteemed sociologist W.E.B. Du Bois, the
            subject of the project’s final chapter, acknowledged both its uses
            and limits. By exploring the charts that he designed for the 1900
            Paris Exposition, in the context of his writing on race and racism
            and his sociological theory, we reassert how data visualization, the
            conceptual conditions of its emergence, and its political
            consequences, are fundamentally intertwined. Drawing a discussion of
            race, data, and political agency into the present, we conclude with
            a consideration of the ethics of visualization, illustrating how
            data visualization can bear witness to instances of oppression at
            the same time that it can—if intentionally designed—hold space for
            what cannot be conveyed through data alone.
          </p>
          <p>
            A final chapter, on the making of this project, elevates another
            theme that courses throughout the work. This theme is labor, and
            indeed, this project has been the work of many hands. Over six
            years, two continents, four states, and four institutions, a
            highly-skilled team of students, staff, and professionals, united
            under the auspices of the Georgia Tech and now Emory Digital
            Humanities Lab, have designed and implemented this platform and
            interactive features you encounter throughout the site. The story of
            this collaboration serves as a coda to this project, reminding
            us–once again–that before there are data there are people, and that
            in order to comprehend the full significance of any particular data
            visualization, one must trace the data being visualized back to its
            human source.
          </p>
        </Column>
      </TwoColumnLayout>

      {/* <TwoColumnLayout>
        <Column shouldPin={true}>
          <p>
            ​​Playfair clearly longed to be recognized for his graphical
            innovations. In 1787, one year after the initial publication of the
            <cite>Commercial and Political Atlas</cite>. he authored an account
            — almost certainly fictitious — of a dialogue between Benjamin
            Franklin and Joseph II, Holy Roman Emperor. The men's conversation
            was far-ranging, most likely conceived so as to ventriloquize
            support for Playfair's various but ultimately uniformly unsuccessful
            schemes. Published with the dialogue was a set of letters — their
            veracity similarly difficult to discern — one which included an
            endorsement, on the part of Franklin, of Playfair's visual method of
            display: "I have begun to practice the mode here," writes Playfair
            in the voice of Franklin, "and it throws light on the state of our
            accounts, as if by inspiration, one minute giving a much clearer
            idea of the matter, than whole days and weeks without this simple
            invention."
            <InlineFootnote index={31} />
          </p>

          <p>
            The reality, of course, was that Playfair's "simple invention" would
            go unrecognized for over a century — first eclipsed by another
            individual, William Stanley Jevons, who, in the 1860s, introduced a
            set of impeccable time-series charts that were almost certainly
            inspired by (but not credited to) Playfair; and then by invention
            itself, as the advent of digital computing (and the concomitant
            development of hardware and software for graphical display) allowed
            data visualization to become a field of study in its own right.
            <InlineFootnote index={32} />
          </p>
          <p>
            The fact that Playfair's charts now hold a highly visible position
            in the field of data visualization would have thus given him great
            pleasure. That his charts are not only widely recognized for their
            historical contributions to the development of the field, but also
            often recreated with contemporary technologies, attests to the
            enduring if uncertain "value" of the charts that he explicitly
            envisioned in his <cite>Atlas</cite>.
            <InlineFootnote index={33} />
            That his charts are so often recreated today also speaks to
            Playfair's status — now if not then — as a master of his craft, as
            the majority of those who seek to recreate Playfair online are
            evidently (if not explicitly) operating under the art world model of
            emulating masterworks, hoping to lend evidence to their own mastery
            of their chosen techniques and/or tools.
          </p>
          <div>
            <p>
              And yet errors like the one that Playfair inscribed into his chart
              of "Exports &amp; Imports to and from all of North America," which
              led us to arrive at this chapter's claims, are far more difficult
              to detect today. Common among the array of visualization tools
              currently in use is that each allows for easy revision. Errors in
              scale can be adjusted. Clashing colors can be swapped out. And
              data lines are generated automatically, interpolated from the data
              themselves. The finished product bears no trace of the process of
              its production — of the many revisions, the myriad design tweaks,
              and the edits to the code. We must therefore continue to attend to
              conditions of their making, and to the conceptual, political, and
              procedural arguments embedded in their design. For what is not
              revealed on the surface of any particular visualization is
              contained within its depths.
            </p>
          </div>
        </Column>
        <Column className="md:ml-12">
          <Figure src="/images/playfair/jevons.png" alt="">
            Jevons's illustration of the benefits of the "graphical method," in
            which{" "}
            <span>
              "it becomes possible to trace a line among the points which will
              approximate to the true law more nearly than the ponts
              themselves."
            </span>{" "}
            <br></br>
            Image Courtesy of Google Books. <br></br>Digitized by Harvard
            University.
          </Figure>
        </Column>
      </TwoColumnLayout> */}
      <CenteredLayout>
        <p>
          Finally, if you have read this far, thank you. But please also keep in
          mind that the version of the project that you are looking at is a
          working draft. We anticipate completing a full draft of the project,
          including revisions to all of the writing on the site–including this
          introduction — by the end of Summer 2023. At that point, we will begin
          a process of open community review. If you have comments or feedback
          to share before then, please email the project director, Lauren Klein,
          at lauren.klein@emory.edu, and she will share your message with the
          project team.
        </p>
        <FootnotesList footnotes={playfairFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
