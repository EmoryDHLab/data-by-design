import ChapterTitle from "~/components/ChapterTitle";
import { ChapterContext } from "~/chapterContext";
import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";

import CenteredLayout from "~/components/layout/CenteredLayout";

import Footer from "~/components/Footer";
import { playfairFootnotes } from "~/footnotes";
import FootnotesList from "~/components/FootnotesList";
import playfairFigures from "~/data/figures/playfair.json";
import figures from "~/data/figures/shanawdithit.json";
import FigureObj from "~/components/layout/FigureObj";
import ChapterBody from "~/components/layout/ChapterBody";
import IntroScrollytell from "~/components/intro/IntroScrollytell.client";
import { ClientOnly } from "remix-utils";

const sections = [{ title: "", id: "" }];

export default function IntroPage() {
  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "brooksSecondary",
        primaryTextColor: "black",
        accentColor: "playfairPrimary",
        accentTextColor: "white",
        footnoteTextColor: "playfairPrimary",
        footnotes: playfairFootnotes,
        sections,
      }}
    >
      <ChapterTitle
        title="Introduction"
        subtitle="A Counterhistory of Data Visualization"
      />
      <ChapterBody>
        <TwoColumnLayout>
          <Column shouldPin={true}>
            <p className="first-paragraph py-10">
              It is often said that “the purpose of data visualization is
              insight”: to produce the kind of “ah ha moment” in the mind of the
              viewer when something snaps into focus that was previously too
              difficult, too distributed, or too complex to otherwise see. For
              those who design data visualizations, however, insight comes about
              through a process that is far longer and more hard-won.
            </p>
            <p>
              This lesson came home to our project team in the waning days of
              summer 2021 as we iterated on the design for the front page of
              this site. Ever since the first prototype of Data by Design, there
              had always been a prominently-positioned timeline to welcome
              visitors to the site—first an actual line, then illustrated with
              images, and then a more designerly version that arranged each
              year’s images into artfully arranged stacks. It all made sense:
              this project has a distinct chronological arc. It looks at how
              ideas from the seventeenth and eighteenth centuries, when the
              concept of data had just begun to crystalize, inform today’s world
              in which we generate data with our every waking moment (and
              sometimes even with our sleeping ones). And it explores examples
              from the eighteenth and nineteenth centuries, when the idea of
              visualizing data was itself an innovation, connecting them to the
              present moment in which anyone with an internet connection and an
              account on any number of software platforms can go from data to
              chart in a series of clicks.
            </p>
            <p>
              But the timeline wasn’t sitting right. For one, there was the
              issue of which years to use as its start and end points. Even as
              this account begins at the dawn of what’s been called the “first
              golden age” of data visualization, we remained aware that there
              were earlier instances of data visualization than those we’d
              chosen to explore. The Incan practice of quipu, for example—a
              technique of recording quantitative information as knots on
              strings—has been recorded as early as 250 B.C.E. Even limiting
              ourselves to North America, where the majority of our team members
              are based, there exist an abundance of examples of wampum belts
              being employed by Indigenous nations to encode political
              relations—most famously, by the Haudenosaunee—and those date to at
              least a century before the beginning of the story that we tell
              here. Should those earlier examples be included on the timeline,
              even if they were not directly engaged? And what of the years
              inside the span of the timeline that lacked examples? While others
              have attempted to provide comprehensive accounts of the
              “milestones” of data visualization, and even of the evolution of
              the timeline itself, the goal of Data by Design has always been to
              contribute depth rather than breadth, complexity rather than
              comprehensiveness. As visitors to this site will soon learn, a
              guiding principle of this project is that history is always—and,
              crucially, constitutively—incomplete. But when looking at a
              timeline, empty space is empty space, and it’s very difficult for
              gaps in the data to be interpreted as anything but that,
              especially upon initial view.
            </p>
            <p>
              “What if we foregrounded the images?” proposed Tanvi, who was then
              a graduate student at NYU, and who had come onto the team earlier
              that year as the project’s lead designer. She shared her screen,
              walking us through a possible layout in which the images were
              arranged according to their year of creation, with the year—and
              not an actual line—serving as a visual anchor. We all appreciated
              how Tanvi’s design preserved the overall chronology but eliminated
              the empty space. It seemed like we were getting closer.
            </p>
            <p>
              “We could make the timeline scrubbable,” Dan added—Dan was then an
              undergraduate at Georgia Tech and had been working as the
              project’s lead developer for the past several years. His
              suggestion, to display only a few images on the screen at a time
              and allow the user to control the movement of the timeline with
              their finger or mouse, would address the issue of where to start
              and end. It would also send a strong opening message about each
              user being able to shape their own experience of the site, which
              would align with one of the project’s main conceptual
              contributions, about how telling a story necessarily involves
              choices, and invites questions of power as well: who is enabled to
              tell the story, and to what ends?
            </p>
            <p>
              The scrubbable timeline seemed promising too. And it would also
              involve some technical challenges, which was a bonus for Jianing,
              who’d recently graduated from Georgia Tech and had just started a
              masters’ program at Berkeley. She’d been a developer on the
              project since its very first iteration, and had always owned the
              implementation of any features on the front page.
            </p>
            <p>
              But for reasons that none of us could fully articulate, the design
              still somehow felt unsatisfying. There was something deeper that
              we wanted to convey…
            </p>
            <p>
              And that’s when it came to us. It was during one of our weekly
              full-team meetings—virtual, of course, since college campuses had
              only just returned to in-person instruction, and almost everything
              else remained online. No one can remember who said it first. But
              whoever had the idea, we all recognized it as our own “ah ha
              moment.” Starting with a shuffle.
            </p>
          </Column>
          <Column>
            {" "}
            {/* These images need to be replaced */}
            <FigureObj figure={figures["Demasduit"]} />
            <FigureObj figure={figures["Demasduit"]} />
            <FigureObj figure={figures["Demasduit"]} />
            <FigureObj figure={figures["Demasduit"]} />
          </Column>
        </TwoColumnLayout>

        <ClientOnly>{() => <IntroScrollytell />}</ClientOnly>

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
              For the story we tell is not simply about data visualization. It’s
              a story that places the emergence of data visualization in the
              context of the European Enlightenment, and in particular, in the
              context of Enlightenment theories about the value of visual and
              statistical knowledge. As such, it also, necessarily, places data
              visualization in the context of global capitalism, which was of
              course racial capitalism–a fact that continues to carry
              consequences for us today. And while it might be surprising to
              some readers to learn that seemingly “neutral” or “objective”
              methods of visualizing data are embedded in this specific
              sociopolitical context, it was not actually news to those in the
              eighteenth and nineteenth centuries who were developing these
              early visualization techniques that their work had social and
              political stakes. Consider William Playfair, the man often
              described as the “father” of modern data visualization, and who is
              credited with inventing the pie chart. On the first page of the
              preface to the third edition of his Commercial and Political Atlas
              (1801), Playfair explains how “the minds of men, the boundaries of
              nations, their laws and relations to each other, are all in a
              state of change,” and for that reason, he has “chosen the present
              moment” to republish his charts.
            </p>
            <p>
              Admittedly, Playfair was also motivated by personal reasons. Very
              few people had purchased the first edition of his book, and he was
              “long anxious” to be acknowledged as an innovator. And while it
              would have given him great pleasure to know that he is hailed
              today as the father of data visualization, there are many other
              visualization innovators who have yet to receive their due. These
              include activists and educators, sociologists and statisticians,
              as well as regular folks recording information about their lives
              in the ways that rang most true. And as we follow their paths from
              their own times up into the present, we begin to see the multiple
              ways in which data might be given visual form, and the multiple
              paths to knowledge that those visualizations enable.
            </p>
            <p>
              To do this, we interweave detailed analyses of historical
              visualization examples–some well-known and some more obscure–with
              interactive reimaginings of those same images. Each of the
              interactions that you will encounter has been intentionally
              designed in order to convey an argument. For example, on the
              project front page, you’ve already encountered the first of
              these–a representation of all of the archival images that appear
              throughout the site. We decided to present these images to you in
              a way that might appear at first glance as a hodge-podge, or even
              a mess. The images are scattered as if on a floor, many
              overlapping with each other. But this layout has an underlying
              rationale: the paths through the images that we offer in this
              project, in the form of the chapters that can be navigated up
              above, are only some of many. And while we’ve made it possible to
              sort the shuffled images into a timeline, as you may have
              discovered by clicking the “timeline” button on the previous page,
              we did not want to imply–either through our writing, or through
              our design–that there is one single path through.
            </p>
            <p>
              While it is possible to read the chapters in any order, they are
              arranged in somewhat of a chronological arc, moving from England
              to Scotland, sites of some of the earliest instances of so-called
              modern data visualization, and then on to the Americas, in order
              to emphasize the influence of colonial expansion on the
              development of modern data visualization. To this point, we begin
              the project not with Playfair but, instead, with the indelible
              Diagram of a Slave Ship, which dramatizes the data of the slave
              trade by depicting each anguished body that the numbers represent.
              This image, also known as the Brooks, for the name of the ship
              that the diagram was based upon, was created in 1788, within a
              year of the first versions of Playfair’s canonical charts.
              Considered instead of Playfair as the starting point for the story
              we tell, it establishes the importance of considering data
              visualization in relation to the lives the data seeks to
              represent.
            </p>
            While the Diagram of a Slave Ship was designed to produce an
            “instantaneous impression” in all those who saw it, we decided to
            present this image to contemporary readers more carefully than it
            was in its own time. In that first chapter, you will notice an
            option to read the chapter with images or without, so as to give you
            the choice as to whether you wish to engage with this visual record
            of violence. More broadly, the Diagram of a Slave Ship and its data
            of human suffering sets in motion one of the main arguments of this
            project: the idea of data visualization as a double-edged sword.
            This consists, on the one side, of the power to distill complex
            information such that insight can easily and efficiently emerge; and
            on the other, of its potential for harm, brought about by how the
            abstraction required to distill this insight comes at the expense of
            the details of the data and the context in which it was produced.
            <p>
              With this key tension of data visualization firmly in place, we
              return you to the time-series charts of William Playfair,
              presenting an analysis of his charts alongside the text of his
              Commercial and Political Atlas. Through this exercise, we confirm
              how the uncertainty brought about by the Age of Revolutions, as
              much as an adherence to Enlightenment empiricism, inspired his
              influential visualization techniques.
            </p>
            <p>
              We carry forward a discussion of democracy and nation-formation
              into the next chapter, which considers two contrasting approaches
              to visualizing geographical data: the historical atlas created by
              Emma Willard, the activist and educator, to accompany her US
              history textbook (1828); and the impressionistic maps sketched by
              Shanawdithit (Beothuk) at the urging of a Scottish-Canadian
              anthropologist (ca. 1829). Engaging questions of colonial
              expansion alongside concerns about Indigenous sovereignty, we
              continue to probe how data visualization enables new modes of
              understanding, across both languages and cultures, at the same
              time that it also often requires a severing of both data and
              knowledge from its source.
            </p>
            <p>
              We continue to track the development of data visualization into
              the nineteenth century, and across the United States, through the
              railroad journey of educator and editor Elizabeth Palmer Peabody.
              Peabody undertook her travels in order to promote a new method of
              visual pedagogy, which employed color and position in order to
              represent historical events in time. Peabody’s charts, as
              described in The Polish-American System of Cartography (1850) and
              documented in A Chronological History of the United States (1856),
              were designed to be abstract rather than intuitive; to promote
              sustained reflection rather than immediate insight. In doing so,
              she was guided by a clear goal: to provoke a unique imaginative
              response in each viewer.
            </p>
            <p>
              But if Peabody placed unyielding faith in the generative potential
              of data visualization, the esteemed sociologist W.E.B. Du Bois,
              the subject of the project’s final chapter, acknowledged both its
              uses and limits. By exploring the charts that he designed for the
              1900 Paris Exposition, in the context of his writing on race and
              racism and his sociological theory, we reassert how data
              visualization, the conceptual conditions of its emergence, and its
              political consequences, are fundamentally intertwined. Drawing a
              discussion of race, data, and political agency into the present,
              we conclude with a consideration of the ethics of visualization,
              illustrating how data visualization can bear witness to instances
              of oppression at the same time that it can—if intentionally
              designed—hold space for what cannot be conveyed through data
              alone.
            </p>
            <p>
              A final chapter, on the making of this project, elevates another
              theme that courses throughout the work. This theme is labor, and
              indeed, this project has been the work of many hands. Over six
              years, two continents, four states, and four institutions, a
              highly-skilled team of students, staff, and professionals, united
              under the auspices of the Georgia Tech and now Emory Digital
              Humanities Lab, have designed and implemented this platform and
              interactive features you encounter throughout the site. The story
              of this collaboration serves as a coda to this project, reminding
              us–once again–that before there are data there are people, and
              that in order to comprehend the full significance of any
              particular data visualization, one must trace the data being
              visualized back to its human source.
            </p>
          </Column>
        </TwoColumnLayout>
      </ChapterBody>
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
