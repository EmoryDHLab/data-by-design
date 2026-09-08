import { useState } from "react";
import ChapterTitle from "~/components/ChapterTitle";
import { ChapterContext } from "~/chapterContext";
import { chapterMetaTags } from "~/utils";

import CenteredLayout from "~/components/layout/CenteredLayout";
import InlineFootnote from "~/components/InlineFootnote";
import Footer from "~/components/Footer";
import { prefaceFootnotes } from "~/footnotes";
import FootnotesList from "~/components/FootnotesList";
import ChapterBody from "~/components/layout/ChapterBody";
import type { TVizAnchors } from "~/chapterContext";
import type { MetaFunction } from "react-router";
import { chapterMeta } from "~/data/chapterMeta";

export const meta: MetaFunction = () => {
  return chapterMetaTags("intro");
};

const visualizations: TVizAnchors[] = [];

export default function IntroPage() {
  const [showFootnotes, setShowFootnotes] = useState<boolean>(false);
  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "changePrimary",
        primaryTextColor: "black",
        accentColor: "changeSecondary",
        accentTextColor: "peopleSecondary",
        footnoteTextColor: "imagePrimary",
        footnotes: prefaceFootnotes,
        showFootnotes,
        setShowFootnotes,
        visualizations,
      }}
    >
      <ChapterTitle
        title={chapterMeta.preface.title}
        subtitle={chapterMeta.preface.subtitle}
      />
      <ChapterBody>
        <CenteredLayout>
          <p>
            <span className="drop-cap">I</span>’ve always loved charts. I love
            their endless variety. I love
            their combination of logic and creativity. I love the feeling—you’ve
            likely had it too—when a vague inclination, a hunch you have about
            the data, is suddenly{" "}
            <em>right there in front of your eyes</em>. Which is
            why, when thinking back to the origins of this project, it was
            surprising—to no one more than myself—to realize that the idea to
            write a new history of data visualization was prompted not by any
            particular chart, or even by a dataset, but instead by a paragraph
            of dense historical prose.
          </p>
          <p>
            It was the fall of 2012, and I had been teaching at Georgia Tech for
            just over a year. I had arrived in Atlanta with a newly minted PhD
            in early American literature. But even in my interdisciplinary
            humanities department, my students were mostly aspiring engineers.
            Their goals were actually quite familiar to me. Before going to
            graduate school, I’d worked as a software developer. After eight
            years of research and writing, however, I thought I’d left that
            life of code sprints and client demos far behind. But there I was
            in my Georgia Tech classroom, looking out from my podium into the
            faces of 35 students who wanted nothing more than a chance at a job
            like the one I’d once had. I decided to honor that. I’d teach a
            course on data visualization. After all, I still loved charts.
          </p>

          <p>
            I had a fair amount of experience with visualization design from my
            time in the tech world. But creating charts for websites hadn’t
            taught me quite as much about visualization’s history. In the
            industry, Edward Tufte’s{" "}
            <em>The Visual Display of Quantitative Information</em> had been
            our definitive guide. The book included a
            short history, centered on a man named William Playfair. He was the
            “remarkable” Scotsman, born in 1759, whom Tufte credits with
            improving upon the then-emergent line and bar chart forms, and with
            inventing the pie chart outright. In Tufte’s telling, Playfair’s
            contributions seemed nothing short of revolutionary. So I figured I
            should start my own research there.
          </p>

          <p>
            I tracked down a facsimile edition of Playfair’s{" "}
            <em>Commercial and Political Atlas</em>, first published in 1786
            and revised and expanded
            in 1801.
            <InlineFootnote index={0} />It was a surprisingly hefty
            hundred-page tome that contained many of the earliest instances of
            Playfair’s field-defining charts. From Tufte, I knew the visual
            beauty that awaited me inside the book—vivid red and yellow data
            lines, delicate hand-tinted shading, all set against a stark black
            grid. But I decided to begin with the editors’ introduction, pencil
            in hand, like the literature professor I’d recently become.
          </p>

          <p>
            Only a few pages in, however—the bottom of page 3, to be
            precise—my pencil slowed. There was that paragraph, the one that
            would alter the shape of my academic career. It started with a
            mention of Playfair’s childhood tutor, a man by the name of William
            Small. I felt a nagging sensation. I circled the name and jotted a
            question mark in the margin. But I still couldn’t place it, so I
            kept on reading. “In 1758 he [Small] joined the faculty of William
            and Mary College in Williamsburg, Virginia,” the next sentence
            began.
            <InlineFootnote index={1} />Now I knew I’d seen this name before.
            Sure enough, as the edition’s editors, Howard Wainer and Ian
            Spence, went on to explain, Small had been a professor at William
            and Mary for six years, where he had taught none other than Thomas
            Jefferson. Hence that nagging feeling. I’d been researching Thomas
            Jefferson for years.
          </p>

          <p>
            William Small—Jefferson’s professor and Playfair’s tutor—was
            Scottish, and the other thinkers associated with his intellectual
            milieu, known as the Scottish Enlightenment, have long been
            credited with providing the philosophical foundation for the
            establishment of the United States. The more famous men in this
            group included Adam Smith, David Hume, and Henry Home, Lord Kames.
            But Jefferson credited Small, in particular, for seeding his own
            philosophical thinking. “From his conversation,” Jefferson wrote in
            his autobiography, “I got my first views of the expansion of
            science and of the system of things in which we are all placed.”
            <InlineFootnote index={2} />
          </p>

          <p>
            In one of my earliest published essays, I’d analyzed this line as
            evidence of Jefferson’s emerging empiricism: his belief that a
            universal “system of things” could be determined through sensory
            experience and direct observation of the world.
            <InlineFootnote index={3} />I’d connected this belief to
            Jefferson’s meticulous record-keeping, which included
            spreadsheet-like tables that he used to document and draw
            conclusions about not only plants and animals but also
            people—including the people he enslaved. Among the most difficult
            truths of this early form of empiricism—demonstrated here by
            Jefferson, but practiced by many more—is that the big-picture
            conclusions of these men, drawn from their own firsthand
            observations, produced seemingly generalizable knowledge that was,
            in reality, deeply limited by the exclusionary worldview that so
            many of them shared.
            <InlineFootnote index={4} />
          </p>

          <p>
            When I realized that the very same man had taught both Thomas
            Jefferson and William Playfair, and that both had been inculcated
            in the empiricism—and the exclusions—of the Scottish Enlightenment,
            I knew there was more to the story of data visualization than had
            been told to that point. There was more, even, to the story of
            William Playfair. Tufte, after all, had focused only on Playfair’s
            charts. Wainer and Spence had focused only on Playfair the person.
            But the expanded story—the one that would place Playfair alongside
            figures like Thomas Jefferson in their full historical,
            philosophical, and political complexity—had yet to be told. And at
            that moment, I also realized something else: that I wanted to be
            the one to tell it.
          </p>

          <p className="text-center font-power text-xl">***</p>

          <p>
            Fifteen years later, you are reading the end result of that
            realization. But I begin with its origins to answer two important
            questions: why does <em>Data by Design</em> begin when it does, and why does
            it begin where it does? There are, after all, a vast array of
            examples of historical data visualization—many of which date back
            far more than the European colonial era, and which emanate from
            all over the world. But my interest in this particular time and
            place is a direct consequence of what I realized while reading
            about Playfair: that there is a more complicated story about this
            particular strain of data visualization that has gone untold up to
            this point. We need additional stories, of course. But we also
            still need to understand how the standard story of modern data
            visualization—mostly European and North American, and mostly
            undertaken by white professional men—is entirely inseparable from
            the histories of colonialism, capitalism, and slavery that produced
            it.
            <InlineFootnote index={5} />
          </p>

          <p className="text-center font-power text-xl">***</p>

          <p>
            I know from personal experience how tempting it can be to want to
            celebrate “founders” and “fathers.” I study the founding era of the
            United States. But if I’ve learned anything at all from my time
            with Thomas Jefferson, it’s that we must also look at the shadows
            that he and those like him cast. Because in those shadows are often
            unseen people and untold stories, stories that help to bring a more
            complete picture to light. Who were the people standing in the
            shadows of William Playfair? What stories about the emergence of
            modern data visualization could they tell?
          </p>

          <p>
            Of course the path from initial idea to completed project is never
            a straight line, and <em>Data by Design</em> is no exception. I set it aside
            to write two other books.
            <InlineFootnote index={6} />I birthed two children. I moved from
            Georgia Tech down the road to Emory, where, since 2019, I’ve worked
            to build programs and curricula at the intersection of the
            humanities and data science writ large. But just as important, the
            kind of stories I sought to tell, and the ways I sought to tell
            them, continued to evolve.
          </p>

          <p>
            The same dot-com boom and then bust that had sent me to grad school
            had also resulted in a host of early web technologies entering
            academic research. These projects coalesced into a field called
            digital humanities, defined by the use of computational methods
            (and related digital technologies) to explore questions about
            literature, culture, and other areas of humanistic concern.
            <InlineFootnote index={7} />At Georgia Tech, I’d followed my
            colleagues in the bench sciences and established my own research
            group, which I’d called—after the field—the Digital Humanities (DH)
            Lab. But my lab wasn’t filled with test tubes or mass spectrometers;
            it was filled with people: a fantastic group of computer science
            and interaction design students eager to put their classroom skills
            to use.
          </p>

          <p>
            My DH Lab students were this project’s first interlocutors.
            Together, we explored its central question: could a history of
            data visualization also <em>include</em> data visualization? The answer
            turned out to be self-evident, even if it took an incredible amount
            of time to build out. Across three cohorts of students, first at
            Georgia Tech and then at Emory, we together designed the custom
            visualizations, page-level interactions, and underlying platform
            that you are exploring right now.
            <InlineFootnote index={8} />Along the way, we were joined by
            members of Emory’s Center for Digital Scholarship as well as of the
            graphic design firm Polymode, each of whom brought additional
            expertise in software engineering, data visualization, art, and
            design.
          </p>

          <p>
            While I am the author of these actual words, there are eleven
            additional authors of <em>Data by Design</em>: Tanvi Sharma, Jay Varner,
            Margy Adams, Shiyao Li, Nicholas Yang, Dan Jutan, Jianing Fu, Anna
            Mola, Zhou Fang, Yang Li, and Silas Munro. Each of them has worked
            with in (or with) the DH Lab at some point over the past ten-plus
            years. Each has also contributed their own unique perspective and
            forms of expertise. Several are visualization designers, others are
            visualization researchers, yet others are humanities researchers,
            and still others are software engineers. As you explore this site,
            you will see how we have come together to forge our collective
            authorial voice. You will also see how this project has been
            directly shaped by each and every member of this capacious project
            team. I say this both as a practical observation and as an
            implicit claim of the book: for visualization to be its most
            impactful, it must leverage not only the skill sets but also the
            meaning-making capacities of each of its allied fields.
          </p>

          <p>
            This is the reason that I tend to write as a collective “we.” At
            times, when discussing specific design decisions, this “we” is a
            strict one; it includes only the members of the project team. I
            have attempted to make these instances explicit. But more often
            than not, this “we” also includes you, the visitors to this site.
            It does so not because I assume that we share all aspects of our
            identities, or our disciplinary and professional perspectives. I
            certainly do not intend to erase our differences, many of which may
            be quite profound. Rather, I write as a “we” to invite you into
            this project: to join us in working toward a more informed and
            more intentional practice of visualization viewing and design.
          </p>

          <p className="text-center font-power text-xl">***</p>

          <p>
            With that said, different perspectives—especially disciplinary
            ones—do carry different expectations, and for this reason it seems
            worth addressing them head on. To viewers from the humanities: you
            will likely find the project’s historical and theoretical
            frameworks quite familiar; my hope is that you will be energized by
            seeing how these frameworks can be applied to the history and
            practice of visualization design. For viewers coming from the
            digital humanities in particular: my hope is that this project will
            provide you with a model of a critical-creative practice that
            expands the ethos of your work. For those in the fields of
            visualization research and visualization design: you will likely
            recognize some of the historical examples and technical reference
            points, but you may find the way I’ve chosen to tell this story a
            bit unfamiliar—or even opaque.
          </p>

          <p>
            For this reason and more, it’s worth being explicit about the form
            of the history offered here. This history is not intended as
            different in content; rather, it’s different in approach. By this
            I mean that, in the humanities—and in particular, in the mode of
            literary-historical scholarship in which I was trained—our primary
            evidence comes from detailed analysis. In this case, it consists of
            a set of core examples of early data visualization, the processes
            that led to their creation, and the writing that accompanies them
            in their finished form. Interwoven with this analysis is relevant
            historical, philosophical, political, and cultural context. This
            context is included with a calculated goal: to tell a story about
            each chart that is so seamless, and therefore so convincing, that
            you cannot help but see even the most familiar chart in ways you
            never have before.
          </p>

          <p>
            This kind of story is what, in the humanities, we call an
            “argument.” But to be clear on this point as well: it’s not the
            same kind of argument as the one you might have with your kid about
            bedtime, or the one that you have in your head when you yell at a
            politician through a screen. Rather, an argument in the humanities
            is intended to be absorbed—and, crucially, further questioned—so
            that additional insight can emerge. The gist of the argument
            presented in this project is that the history of data
            visualization is a great deal darker, and more complex, than has
            been acknowledged to this point. But there is a second core tenet
            of current humanities scholarship that this project rests upon,
            which is also worth stating out loud. This is the belief that
            generative new paths forward can be revealed through a better
            understanding of the complexities of the past.
          </p>

          <p>
            A refrain of this project, which will hopefully soon become a
            familiar tune, is that we, the authors of this project, want the
            ideas we express on this website to become action in the world.
            Consistent across our project team is a belief in the power of
            data visualization. We believe that if used intentionally, data
            visualization can help to create new knowledge. In the right
            circumstances, visualization can wield a uniquely transformative
            force. With that said, this project will also introduce you to
            some difficult historical truths: modern data visualization has
            always been entangled with capitalism and colonialism; seemingly
            neutral visual forms have always been shaped by politics and
            ideology; visualization has been wielded consistently, over
            centuries, to consolidate power and control. But this same history
            also offers counterexamples—of how visualization has also been
            used, over centuries, to reveal the workings of oppressive power
            and bring about enduring change. These counterexamples are what
            inspire our work in <em>Data by Design</em>.
          </p>

          <p>
            In this project we argue, in both charts and words, that data can
            be visualized with intention, with ethical clarity, and for the
            purpose of uplifting us all. To achieve this goal, it will require
            far more than revising our best practices (although, as you will
            see in the “takeaways” that conclude each chapter, we do provide
            our own version of those). It will require a commitment to
            acknowledging the power of visualization as well as its perils—to
            admitting how visualization can prompt the insights that lead to
            new knowledge just as easily as it can encourage viewers not to
            further question what they see.
          </p>

          <p>
            At a time when our collective knowledge, and our common humanity,
            are both under attack, the stakes of this endeavor could not be
            higher. We are constantly being told to distrust—to distrust each
            other, to distrust our institutions, to distrust the very
            foundations of democracy that Thomas Jefferson, for all of his
            flaws, helped to create. Against these forces of algorithmic
            preferences and authoritarian agendas, and the rapacious
            capitalism that underlies both, we must insist upon the value of
            greater knowledge and understanding. What <em>Data by Design</em> seeks to
            contribute to this larger project, then, is increased clarity
            about how we have arrived at the present moment, a sharper sense
            of the shape of our current knowledge, and inspiration for how we
            can envision a better future to come.
          </p>
        </CenteredLayout>
      </ChapterBody>
      <CenteredLayout>
        <FootnotesList footnotes={prefaceFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
