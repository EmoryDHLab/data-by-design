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
        backgroundColor: "offwhite",
        primaryTextColor: "black",
        accentColor: "imagePrimary",
        accentTextColor: "white",
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
          <p className="first-paragraph">
            It might come as a surprise to learn that the idea for this project
            was prompted not by any particular image, or even by a dataset, but
            instead by a paragraph of dense historical prose. It was the Fall of
            2012, and I had just started my second year an assistant professor
            at Georgia Tech. I'd been hired to teach courses in early American
            literature and culture (and in a humanities context, "early" means
            very early—like, the eighteenth and nineteenth centuries) but I
            couldn't keep myself away from writing code. I'd always been
            interested in computers, and before going to graduate school, I'd
            worked as a software developer. So when I learned about a growing
            field called digital humanities, which involved the use of
            computational methods to explore humanities research questions, I
            knew it was an area that I wanted to explore. I had the data
            analysis part down, but I didn't have much experience in
            visualization. And so, like the literature professor I'd recently
            become, I started to read.
          </p>
          <p>
            I began with the one book on data visualization that I knew from my
            time in the tech world, Edward Tufte's Visual Display of
            Quantitative Information. First published in 1982 and revised and
            expanded in 2001, Tufte's book was for decades the definitive guide
            to visualizing data. But soon I was down a rabbit hole of new (to
            me) research. I followed Tufte's discussion of the "remarkable"
            William Playfair (1759-1823), the Scottish political economist whom
            Tufte credits with improving upon the line and bar chart forms, and
            inventing the pie chart outright, to a modern edition of Playfair's
            Commercial and Political Atlas. First published in 1786 and, like
            the Visual Display, revised and expanded several years later, the
            Atlas contained many of the earliest instances of Playfair's
            field-defining charts. I started with the editors' introduction,
            pencil in hand. But only a few pages in—the bottom of page three, to
            be precise—I read the lines that caused my initially emphatic
            underlining to become lighter and lighter until all that was left
            was a thin graphite whisp. The proverbial mental gears—in my case,
            deeply nerdy ones—had begun to turn.
          </p>

          <p>
            The lines appeared in a discussion of Playfair's early education,
            and made mention of his childhood tutor, a man by the name of
            William Small. I felt a nagging sensation—something sounded
            familiar—but I kept on reading. "In 1758 he joined the faculty of
            William and Mary College in Williamsburg, Virginia," the next
            sentence began.
            <InlineFootnote index={0} /> I now knew I'd seen this name before.
            Sure enough, as the introduction's authors, Howard Wainer and Ian
            Spence, went on to explain, Small had been a professor at William
            and Mary for six years, where he had taught none other than Thomas
            Jefferson. But I knew this fact already. I'd been researching Thomas
            Jefferson for years.
          </p>

          <p>
            For those not immersed in the eighteenth century—which is to say,
            just about everyone—the link between these men might seem like an
            interesting coincidence. But to me, their connection made perfect
            sense. William Small was Scottish, and the other thinkers associated
            with his intellectual milieu, known as the Scottish Enlightenment,
            have long been credited with providing the philosophical foundation
            for the establishment of the United States. Some of the more famous
            men (and yes, they were all men) included Adam Smith, David Hume,
            and Henry Home, Lord Kames. But Jefferson credited none other than
            Small for seeding his own philosophical thinking. "From his
            conversation," Jefferson wrote in his autobiography, "I got my first
            views of the expansion of science and of the system of things in
            which we are all placed."
            <InlineFootnote index={1} />
          </p>

          <p>
            In my dissertation, I'd analyzed this line as evidence of
            Jefferson's emerging empiricism: the belief that a universal "system
            of things" could be determined by sensory experience and direct
            observations about the world.
            <InlineFootnote index={2} /> I'd connected this way of thinking to
            Jefferson's meticulous record-keeping, which included
            spreadsheet-like tables that he used to document and draw
            conclusions about not only plants and animals, but also
            people—including the people he enslaved. Among the most difficult
            truths of this early form of empiricism—as demonstrated in this
            particular case by Jefferson, but as practiced by many more—is that
            the "big picture" conclusions drawn from direct observation often
            reflected the observers' own limited worldviews just as much as they
            generated knowledge that had not been known before. Upon my
            realization that the very same man had taught both Thomas Jefferson
            and William Playfair, and that both had been inculcated in
            empiricism and Scottish Enlightenment thought, I knew there was more
            to the story of modern data visualization than had been told up to
            that point.
            <InlineFootnote index={3} /> I also realized something else: this
            expanded story was one that I wanted to be the one to tell.
          </p>

          <p>
            The Introduction that you are about to read explores this
            historical, philosophical, and political context in more detail. But
            I begin with an account of origins of this project in order to
            answer the question of why Data by Design begins when it does, in
            the late eighteenth century, and why it begins where it does, in
            Europe under the influence of Scottish Enlightenment thought. (Full
            disclosure: the Introduction does begin a little earlier, just to
            set the proverbial stage). While there exist a vast array of
            examples of earlier data visualization—many of which date back far
            longer than the colonial era, and which emanate from all over the
            world—my interest in this particular time and place is a direct
            result of the realization that I had while reading about Playfair:
            that there is a more complicated story about the emergence of this
            particular strain of data visualization—mostly European and North
            American, and mostly undertaken by white professional men—that still
            needed to be told.
          </p>

          <p>
            A decade-plus later, that story is the book you are holding in your
            hands. But for most of that time, it was far from certain that this
            project would result in anything that took physical form. I've
            already mentioned that this project first took shape at the time
            that the field of digital humanities was beginning to coalesce.
            This, too, was more than mere coincidence: the same dot com boom and
            then bust that had sent me to grad school had also resulted in a
            host of Web 1.0 technologies entering academic research. Of course,
            the 2010s were not the first time that humanities scholars had
            thought to use computers for their research—that tradition dates
            back to the 1940s, if not before.
            <InlineFootnote index={4} /> But the early 2010s were the years that
            more and more scholars from humanities fields—students, professors,
            and library and research staff alike—were turning to the web as a
            platform for creating "born digital" work.
            <InlineFootnote index={5} />
          </p>

          <p>
            Just as it sounds, this term describes work that is fully conceived
            in digital form, rather than first envisioned as a book and later
            adapted for the web. In the humanities, what this turn to born-
            digital scholarship set in motion was the use of interaction,
            animation, and all of the other things that the web can do, in
            support of the kinds of arguments that humanities scholars
            previously made purely with words. For example, the Flash-based
            digital essay, The Knotted Line (2014), linked together a conceptual
            argument about the destabilizing experience of incarceration with
            creative interaction, supporting its claim with a scrolling
            interface that advanced only in fits and starts.
            <InlineFootnote index={6} /> Or, for another example, the digital
            storytelling tool Neatline (2012-present) was designed to enable
            users to overlay annotations and analysis on top of historical maps,
            guided by a belief that these analyses are most productively viewed
            in direct relation to the images of the artifacts they engage,
            rather than separated by the page.
            <InlineFootnote index={7} /> It was in the context of these
            boundary-pushing projects—and of course many more—that I also began
            to ask myself: what if my history of data visualization also
            included data visualization? Would it be possible to tell the story
            of the emergence of modern data visualization using data
            visualization itself?
          </p>

          <p>
            My time in the tech industry had left me with decent web skills, and
            I'd also been exploring a then new-ish software library for data
            visualization, called D3.js, that promised a way to create
            customized visualizations for the web. But working in the
            collaborative environment of an engineering school, I knew from the
            start that the project wasn't one I'd need to pursue alone. When I
            arrived at Georgia Tech, I'd followed my colleagues in the bench
            sciences in establishing my own research group, which I'd called the
            Digital Humanities Lab. My lab wasn't filled with test tubes or mass
            spectrometers, of course, but what I did have was a fantastic group
            of computer science and interaction design students eager to put
            their classroom skills to use. In three cohorts of students, first
            at Georgia Tech and then at Emory, where I moved in 2019, we
            together designed the custom visualizations, page-level
            interactions, and underlying platform that constitute the web
            version of this book. Along the way, we were joined by members of
            Emory's Center for Digital Scholarship as well as of the graphic
            design firm Polymode, each of whom brought additional expertise in
            software engineering, data visualization, art, and design. When the
            MIT Press later presented us with the opportunity to publish a book
            alongside the digital project, we then redesigned each of the web
            components for the book you are reading now.
          </p>

          <p>
            This discussion brings me to a very important point: while I write
            as an "I" throughout this book, because I am the author of these
            actual words, there are ten additional authors—Tanvi Sharma, Jay
            Varner, Shiyao Li, Margy Adams, Nicholas Yang, Dan Jutan, Jianing
            Fu, Anna Mola, Zhou Fang, Yang Li, and Silas Munro-who have each
            also contributed their own unique perspectives and their own unique
            forms of expertise. As the project unfolds, you will learn more
            about some team members' individual identities, both personal and
            academic, as you will about how we have come together to forge our
            collective visual voice. For now, though, I will simply state that
            Data by Design could not have reached its final form without any
            single member of the project team. This is both a practical
            observation and an implicit argument of the book: that the most
            generative digital humanities scholarship leverages not only the
            skillsets, but also the meaning-making capacities, of each of its
            allied fields. This is a lesson that also applies to the
            meaning-making capacities of data visualization, as the rest of this
            book will explore. For readers with specific questions about our
            design and development process, or about the contributions of
            individual members of the project team, we direct you to the book's
            final chapter, which contains an extended discussion—and, of course,
            also visualizations—of the collaborative work that has led to the
            book you are reading now.
          </p>

          <p>
            This takes me to my final note, which has to do with the "you" I've
            just addressed. Data by Design is written for several sets of
            readers, each of which are likely coming to the book with different
            expertise and expectations. To readers from the humanities: you will
            likely find the book's historical and theoretical frameworks quite
            familiar; my hope is that you will be energized by seeing how these
            frameworks can be applied to the history and practice of
            visualization design. For readers coming from the digital humanities
            in particular: my hope is that this book will provide a model of a
            critical-creative practice that aligns with the ethos of your work.
            For readers coming from the fields of visualization researcher and
            visualization design: you will likely recognize some of the
            historical examples and technical reference points, but you may find
            the humanities writing style wholly new. For this reason, it's worth
            being explicit about the fact that the history that is offered here
            is not intended as one that's different in content; rather, it's one
            that's different in approach. By this I mean that, in the
            humanities—and in particular, in the field of literary and cultural
            studies in which I was trained—our primary evidence comes from
            detailed analysis: in this case, of a set of core examples of early
            data visualization, the processes that led to their creation, and
            the writing that accompanies them in their finished form. Interwoven
            with this analysis is relevant historical, philosophical, political,
            and cultural context, and it is included with an unstated goal: of
            telling a story about each chart that is so seamless, and therefore
            so convincing, that you cannot help but see even the most familiar
            chart in ways you never have before.
          </p>

          <p>
            This kind of story is what, in the humanities, we call an
            "argument." But just to be clear on this point: it's not the same
            kind of argument as the one you might have with your kid about
            bedtime, or the one that you have in your head when you yell at a
            politician through a screen. Rather, an argument in the humanities
            is intended to be absorbed—and, crucially, further questioned—so
            that additional insight can emerge. While the gist of the argument
            presented in this book is that the history of data visualization is
            a great deal darker, and more complex, than has been acknowledged to
            this point, there is a second core tenet of current humanities
            scholarship that this project mobilizes, which is also worth stating
            in words. This is the belief that generative new paths forward can
            be revealed through a better understanding of the complexities of
            the past.
          </p>

          <p>
            A refrain of this project, which will hopefully soon become a
            familiar tune, is that we, the authors of this project, fully intend
            the ideas we express to be able to be put to use. Consistent across
            our project team is a belief in the power of data visualization to
            contribute to new knowledge, and at times and when intended, to
            wield a uniquely transformative political force. In the chapters
            that follow—in fact, beginning on the very next page—you will be
            introduced to some difficult historical truths. For this reason, we
            ask that as you read this story, you also hold in mind a goal that
            we believe we all share: of a more informed and intentional approach
            to data visualization. This is a goal that exceeds any particular
            design choices, or even sets of guidelines (although we do provide
            some of those), because its stakes are nothing less than the shape
            of our collective knowledge—of both history and the future to come.
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
