import { useState } from "react";
import ChapterTitle from "~/components/ChapterTitle";
import { ChapterContext } from "~/chapterContext";
import { chapterMetaTags } from "~/utils";

import CenteredLayout from "~/components/layout/CenteredLayout";
// import InlineFootnote from "~/components/InlineFootnote";
import Footer from "~/components/Footer";
import { epilogueFootnotes } from "~/footnotes";
import ChapterBody from "~/components/layout/ChapterBody";
import { chapterMeta } from "~/data/chapterMeta";
import type { TVizAnchors } from "~/chapterContext";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return chapterMetaTags("epilogue");
};

const visualizations: TVizAnchors[] = [];

export default function EpiloguePage() {
  const [showFootnotes, setShowFootnotes] = useState<boolean>(false);
  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "changePrimary",
        primaryTextColor: "black",
        accentColor: "imagePrimary",
        accentTextColor: "peopleSecondary",
        footnoteTextColor: "imagePrimary",
        footnotes: epilogueFootnotes,
        showFootnotes,
        setShowFootnotes,
        visualizations,
      }}
    >
      <ChapterTitle
        title={chapterMeta.epilogue.title}
        subtitle={chapterMeta.epilogue.subtitle}
      />
      <ChapterBody>
        <CenteredLayout className="pb-24 md:pb-32">
          <p className="first-paragraph">
            The story of visualization that we have told through this project
            is intended to be a hopeful one. While we have learned how
            colonialism, capitalism, and the institution of slavery all
            intertwine with the roots of modern data visualization, an
            acknowledgment of these roots does not foreclose future
            possibility. On the contrary, when we are honest about these
            origins, we are able to better identify—and more fully
            celebrate—the contributions of those who, in spite of the
            oppression or outright violence they faced, or to which they bore
            witness, continued to believe that a better world was on the way.
            Their contributions, in turn, affirm the role that visualization
            has and can continue to play in charting a course to a more
            liberatory future.
          </p>

          <p>
            But I am under no illusions: to believe in this future now, in the
            current technopolitical moment, presents a challenge. We are
            living through a time in which it increasingly feels like the
            future has been ceded to Big Tech. Already decisions about the
            development, distribution, and use of new technologies are made
            by a handful of absurdly rich Silicon Valley CEOs. These so-called
            “broligarchs” seem to want nothing more than to consolidate power
            and maximize profit. They are actively undermining the value of
            education and the dignity of creative work. Even as journalists
            (another of their targets) continue to surface damning direct
            quotations and incriminating internal reports, it remains truly
            difficult to know whether they are making their decisions because
            they have never personally experienced the full richness of the
            human experience, or because the five or so of them in fact see
            very clearly how much they stand to benefit—both financially and
            epistemologically—from a society of “users” who can no longer tell
            what is real.
          </p>

          <p>
            What is certain is that, with every new data center constructed or
            chatbot released, and every safeguard against potential (or
            actual) harm rejected, this dystopian tech future is getting
            closer. In truth, it might already be here, with these men and
            those who enable them now fully invested in the fascist regime
            being advanced by the current Trump administration. This regime
            is one that places the interests of the corporate over that of
            the community, that chooses to persecute rather than provide
            support, and that actively seeks to destroy institutions that
            serve the public—including but not limited to universities like
            the ones that made this project possible.
          </p>

          <p>
            The increasing coziness between Big Tech and MAGA, while deeply
            distressing, is also clarifying. We can now plainly see why
            universities and their students were among the first targets of
            this hate-fueled regime: our collective knowledge—about how we
            have arrived at this moment, about what we stand (and in fact
            have already begun) to lose, and about why we must continue to
            fight—is one of our most powerful tools of resistance. Because
            what we learn in universities, what we <em>teach</em> in
            universities, and <em>especially</em> what we teach in humanities
            departments, equip us to imagine alternative worlds.
          </p>

          <p className="text-center font-power text-xl">***</p>

          <p>
            When I set out on this project over a decade ago, I knew that I
            wanted to model the value of history and context, of complexity
            and critique. But I did not anticipate just how much, in the end,
            I would want this project to stand for the value of the
            humanities writ large. This value manifests in the deep thinking
            born of disciplinary training and domain expertise; the fresh
            ideas that are sparked when disciplines and domains come
            together; and the time and labor—<em>so much time and labor</em>
            —that are required for the cultivation of any truly transformative
            idea. Now, looking back, I can very clearly see how this project
            only exists because of my PhD in English—because of what I would
            learn about visualization, its uses, and its possibilities, only{" "}
            <em>after</em> leaving the tech job that paid me (in part) to
            design actual charts.
          </p>

          <p>
            The possibilities that emerge from this type of humanities
            research are precisely those that the current administration has
            sought to foreclose. One of the very first acts of Trump 2.0—after
            freezing over $400 billion in active research grants and
            arresting student activists simply for speaking (or writing)
            their mind—was to repurpose the National Endowment for the
            Humanities (NEH) as an ideological enterprise and to dismantle its
            Office of Digital Humanities (ODH) altogether. Not coincidentally,
            the NEH ODH funded this project not once but twice.{" "}
            <em>Data by Design</em> may in fact be one of the last projects—at
            least for the moment—to reap the benefits of what ODH grants
            enabled: dedicated time for experimentation and iteration,
            increased visibility and potential for impact, and cold hard cash
            (OK, direct deposit) to provide students with real research
            experience. In the case of my Digital Humanities Lab students,
            they would take this experience on to graduate school and
            professorships, to nonprofit and community work, and to jobs at
            Microsoft, Meta, and the NSA, to name just some of the places
            where my formerly NEH-funded students are now employed.
          </p>

          <p>
            In this context, I’ve been thinking back to W.E.B. Du Bois and the
            students he taught at Atlanta University, which is located just a
            few miles from Emory, where I teach today. Du Bois also sent his
            students into an actively disillusioning world—one in which they
            nevertheless went on to pursue graduate study, careers as teachers
            at all levels, roles in government and as entrepreneurs, as well
            as homemakers, members of the clergy, and more. As our project
            team learned from reading these students’ words, what they
            achieved—in the face of deeply entrenched racism and hostility—was
            in large part due to the strength of their kinship networks,
            their communities, and their convictions. But a small part of the
            reason for their flourishing, or so I like to think, was that in
            college, they had been immersed in a sustained collaborative
            research project. They had been guided through difficult
            questions about data collection. They had been pushed to consider
            what the data could and could not represent. Most crucially, they
            had each personally experienced the enhanced perspective that
            always comes with accumulated knowledge and additional research.
          </p>

          <p>
            To be clear: Du Bois and his students faced a very different set
            of conditions than my students and I do today. Speaking now just
            for myself, as a person with tenure, white skin, and—in the
            context of the present moment—a birth certificate from New York
            State, I am infinitely more protected. But the frequencies of Du
            Bois’s project that resonate with the one that I have envisioned
            and sustained over the past twelve years are real, and they are
            affirming. They attest to the value of the work that takes place
            in universities: work that is slow, work that students must learn
            from their professors how to do, and work that we as their
            professors hope they will carry with them wherever they go.
          </p>

          <p>
            In today’s world, this work matters precisely because it is{" "}
            <em>not</em> fast or trending, because it is <em>not</em>{" "}
            profitable or “scalable,” because it is <em>not</em> attractive to
            fascist governments. Why this work matters is because it{" "}
            <em>is</em> so full of possibility, it <em>is</em> so full of
            community, and at times (my personal writing process
            notwithstanding) so full of joy. This is the kind of work we need
            more of right now. It’s the kind of work we need our institutions
            to actively support. Indeed, it’s the kind of work that we need
            more people—more students, more tech workers, and more students
            who will become tech workers—to learn to recognize, to value, and
            perhaps even themselves to learn how to do.
          </p>

          <p className="text-center font-power text-xl">***</p>

          <p>
            A funny thing happened on our team as we attempted to finish, once
            and for all, the final visualization for this website. It was the
            “quilt chart” that appears in chapter 6, which aggregates all of
            the data produced by all of the platforms we used to make{" "}
            <em>Data by Design</em>—our attempt to visualize all of the work
            on the project, over all of its years, by all of the people
            involved. We needed a complete dataset of this work in order to
            create the final version of the visualization, and in order to do
            that, we had to decide on a specific date to stop our data
            collection. But we realized that, in the act of creating the
            final visualization, we would do more work, and thus produce more
            data. It was a classic case of chicken-or-egg: if we wanted to
            document all of our work, we would be caught in an endless cycle
            of ensuring that the chart reflected the most up-to-date data of
            our work, and that the data reflected the most up-to-date work on
            our chart.
          </p>

          <p>
            We were stymied by the question of the stop date for at least
            several weeks. But then I realized that I was looking at the
            problem in the wrong way. Its recursiveness was a metaphor. We are
            of course always working, just as we are of course always
            learning. The more important question to ask—and the more
            important question to answer—is what all of this work, and all of
            this learning, is actually <em>for</em>. Eventually, we figured
            out the answer, which in the end is the gambit of this project
            overall: we do this work in order to design a better future, to
            design the future we need.
          </p>

          <p className="text-center font-power text-xl">***</p>

          <p>
            So how do we actually do this? How do we design, together, for
            this future we need? For the future we need now, more than ever?
          </p>

          <p>
            For our quilt chart, the answer was easy. We just chose a date and
            stopped collecting the data. Time is an arbitrary construction
            anyway, we told ourselves. We then turned our energies to
            acknowledging the enormity and expanse of the efforts that were
            recorded (and unrecorded) on the quilt, as the “Labor” chapter
            explains in detail.
          </p>

          <p>
            For our world as a whole, the answer is far more difficult to
            fully realize. But in the end, it is just as easy to state. We
            must begin by recognizing the goals we all share: of working
            toward greater knowledge, and from there enlisting this knowledge
            in the service of creating a more liberatory world. Across
            disciplines and institutions, both within academia and beyond, we
            are partners in these goals. We will achieve more together.
          </p>

          <p>
            At the same time, we must recognize that our partnerships are
            rarely founded on equal ground. Speaking from the place of my own
            work—higher education—we might observe that technical researchers
            are only now facing the prospect of vanishing funding streams,
            reduced student cohorts, detrimental government restrictions, and
            questions about the utility of their work. But these have been
            the baseline conditions of humanities research for decades. I say
            this not to draw battle lines. On the contrary, it is to show how
            our struggle as seekers and creators of knowledge has become a
            common one, and how we must insist on solidarity—intellectual as
            much as political—even when (and in fact precisely because) our
            work has become more precarious and our resources more scarce.
            Or, to put it in feminist terms, our differences of discipline
            and method, of (perceived) relevance and prestige, can no longer
            divide us; we must bring the perspectives born of these
            differences together to forge a composite whole. This is how (in
            addition to organizing) we build collective strength.
          </p>

          <p>
            If there is a vision in this project that extends beyond the ivory
            tower, one that can help us design not merely images or
            interactions but the very future we seek to inhabit, it is this:
            in spite of everything, even still, we hold the power to shape
            the stories we tell. And by actively shaping the story about how
            we have arrived at this point, we can also shape our sense of the
            possibilities for the future.
          </p>

          <p>
            From the first lines of this project, I have sought to emphasize
            what can be gained from greater attention to context, and from
            pursuing answers to questions about who is doing the work, for
            whose purposes, and to what ends. To do so, I have selected a set
            of figures who each, through their charts and the context that
            gave rise to them, surface aspects of the history of visualization
            that have not yet been considered in standard accounts of the
            field. I have labored (in the full meaning of that term) to show
            how these historical figures and their stories—sometimes
            inspiring and sometimes deeply depressing—push us in new and
            unexpected directions. This is the transformative force of new
            knowledge, which we now must all defend. Across academia and
            industry, in our roles as researchers and designers and people in
            the world, we must continue to seek out stories that offer new
            possibilities for the future. We must resist the future that is
            being forced upon us, and we must envision—and then work to
            enact—the future we need.
          </p>
        </CenteredLayout>
      </ChapterBody>
      <Footer />
    </ChapterContext.Provider>
  );
}
