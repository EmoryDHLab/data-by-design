import { useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ChapterTitle from "~/components/ChapterTitle";
import { chapterMetaTags } from "~/utils";
import { workFootnotes } from "~/footnotes";
import CenteredLayout from "~/components/layout/CenteredLayout";
import PeopleVersions from "~/components/labor/peopleVersions/PeopleVersions.client";
import Footer from "~/components/Footer";
import ClientOnly from "~/components/ClientOnly";
import Treemap from "~/components/labor/treemap/Treemap.client";
import Quotation from "~/components/Quotation";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import ChapterBody from "~/components/layout/ChapterBody";
import InlineFootnote from "~/components/InlineFootnote";
import FootnotesList from "~/components/FootnotesList";
import Figure from "~/components/figures/Figure";
import figures from "~/data/figures/labor.json";
import { chapterMeta } from "~/data/chapterMeta";
import type { MetaFunction } from "react-router";
import type { TVizAnchors } from "~/chapterContext";
import Takeaways from "~/components/layout/Takeaways";

export const meta: MetaFunction = () => {
  return chapterMetaTags("labor");
};

const visualizations: TVizAnchors[] = [
  {
    type: "visualization",
    id: "contribution-treemap",
    title: "Contribution Treemap",
  },
  {
    type: "visualization",
    id: "people-across-versions",
    title: "People Across Versions",
  },
];

const sections = [
  {
    title: "Toppling the Stack",
    id: "toppling-the-stack",
  },
  {
    title: "Process Is People",
    id: "process-is-people",
  },
  {
    title: "Reflections on our “Every Labor”",
    id: "reflections-on-our-every-labor",
  },
  {
    title: "Listening, Labor, and Liberation",
    id: "listening-labor-and-liberation",
  },
];

const chapterFigures = Object.values(figures);

export default function LabourPage() {
  const [showFootnotes, setShowFootnotes] = useState<boolean>(false);

  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "laborPrimary",
        accentColor: "laborSecondary",
        footnoteTextColor: "laborPrimary",
        footnotes: workFootnotes,
        sections,
        visualizations,
        chapterFigures,
        showFootnotes,
        setShowFootnotes,
      }}
    >
      <ChapterTitle
        title={chapterMeta.labor.title}
        subtitle={chapterMeta.labor.subtitle}
      />
      <ChapterBody className="bg-offblack text-offwhite">
        <CenteredLayout>
          <Quotation
            quote={
              <>
                Any digital project is the work of many hands. How can this
                labor be visualized? What remains out of sight?
              </>
            }
          />
          <p className="first-paragraph pt-10">
            At precisely 2:18 pm on Wednesday, August 13, 2025, Tanvi Sharma,
            the lead designer of this project and one of the authors of this
            chapter, posted a link to the <cite>Data by Design</cite> team
            Slack. Margy Adams, a PhD candidate in English and the lead
            accessibility researcher on the project, as well as the other author
            here, was the first to notice the link. She clicked.
          </p>
          <p>
            The link opened to an entry on <cite>Folklore</cite>, a website
            dedicated to compiling and preserving anecdotes by the people who
            created the original Apple Macintosh computer.
            <InlineFootnote index={0} /> The entry was written by Andy
            Hertzfeld, a software engineer who worked at Apple at the time, and
            was submitted to the archive in 1982. Hertzfeld recalls how Bill
            Atkinson, a fellow Apple engineer, was frustrated by a new
            management policy that required that he report the number of new
            lines of code he’d written each week. The intent was to track the
            productivity of each worker, but Atkinson knew that lines of code was
            a flawed measure. After a week spent optimizing a core graphics
            library called QuickDraw, the code was much more efficient. But the
            number of lines had decreased by 2,000. In frustration, Atkinson
            typed “-2000” into the reporting form. The reporting requirement
            persisted for only a few more weeks.
          </p>
          <p>
            The story made Margy chuckle, but it also struck a chord—not only in
            light of the similar reporting requirements we saw implemented in the
            US federal government under the auspices of DOGE, with serious
            repercussions that are still felt today, but also in light of
            conversations that our project team has had over the past several
            years. These conversations have been about how we work with numbers
            and data, and about the limits of each in capturing a full picture of
            what it is that we do. We especially liked that the Apple story gives
            center stage to work that is <em>undone</em>. In the absence of any
            new lines of code, what is left in that space is the person who did
            the undoing.
            <InlineFootnote index={1} /> Over the course of the five years that
            we—the authors of this chapter—have been involved in creating{" "}
            <cite>Data by Design</cite>, we’ve each done and undone significant
            amounts of work. No numbers or data or even the most well-designed
            visualization can capture the full extent of that labor … or can it?
          </p>
          <p>
            This is the central question this chapter takes up. But before we
            begin to answer it, we must acknowledge the reality of the present
            moment: data-veillance is everywhere. Data is used to determine what
            counts as “productive” and to measure worth, overriding our basic
            humanity in the process. Exposés of workplace surveillance in areas
            as far ranging as package delivery and keyboard monitoring have
            called attention to how the data we generate through our work, when
            placed in the hands of bosses and others in positions of power, leads
            down a very dark path.
            <InlineFootnote index={2} /> Even working on this project, we’ve long
            been aware of how putting our code on GitHub (an online collaborative
            code management system) creates a data trail of each contributor,
            from which (often faulty) conclusions about the significance of that
            person’s role in the project can be drawn.
          </p>
          <p>
            But as we have learned through the process of working on{" "}
            <cite>Data by Design</cite>, this same data can still tell us
            something—just not everything. The question of this chapter, then,
            restated more directly, is this: how far can we push the data
            associated with our work to tell us something meaningful? Something
            more than just about the number of lines of code written or removed?
            Can we use what we’ve learned about visualization—both how it helps
            to shape knowledge and what forms of knowledge it can help shape—to
            gain additional insight into the labor of this project and the people
            behind it? Can we use what we’ve learned about the importance of
            context to surface additional insight about our own processes, both
            for our edification and for yours? And finally, and most
            importantly, can we surface these insights with intention and care,
            and with an awareness of power, so that we can celebrate the wide
            range of work that went into this project, the emphatically human
            skills and strengths that work required, and the joy (and, at times,
            the frustration) that we found along the way?
          </p>
          <p>
            In answering these questions, our goal is not merely to resist
            technocapitalist definitions of what productivity entails and how it
            should be measured. Rather, as we have argued and illustrated
            throughout this site, we hope to reorient ourselves—and you, the
            visitors to <cite>Data by Design</cite>—away from the narrow and
            ultimately limiting goals of increased efficiency, immediate insight,
            and optimizing measurable tasks (even though, in some contexts, these
            are still germane) and toward a more capacious goal of working toward
            more complete knowledge.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[0]} />

        <CenteredLayout>
          <p className="first-paragraph pt-10">
            We will be up-front about the argument of this chapter: that too much
            focus on technical questions about how visualizations are made is
            detrimental to understanding the full scope and significance of the
            labor involved in making them. Because when most people ask technical
            questions, they generally only receive technical answers: information
            about the software libraries or other visualization tools used to
            implement it, and details about its data sources and how they were
            processed and analyzed. By the same token, when a visualization is
            integrated into a web platform, as are ours, people often ask
            additional questions about the “stack”: what libraries and frameworks
            were used to make the website, what platforms are used to store,
            optimize, or otherwise serve up the content, and what service
            provider is responsible for ensuring that the project remains
            consistently online. The answers to these questions can be
            illuminating, especially for people who want to create similar
            projects of their own, and before we get too deep into our critique
            of how the stack is structured, we are very glad to answer these
            questions here. Also, we are very big nerds and love talking about
            how we made our project all (mostly) work.
          </p>

          <Figure figure={figures["0601-PLACEHOLDER"]} />

          <p>
            As the list above makes clear, we relied upon a range of libraries,
            servers, databases, browsers, and hosting providers to bring this
            project to fruition. More specifically, the web platform for this
            project was created with HTML, JavaScript, and CSS, using the
            React.js and Tailwind frameworks. We used a combination of D3, p5,
            and raw SVG to create the visualizations that appear on this site.
            The project is hosted on a server maintained by Emory’s Center for
            Digital Scholarship, using content delivered by AWS. You can find the
            entire project codebase on GitHub.
          </p>
          <p>
            But this is not the entire stack that we relied upon to bring{" "}
            <cite>Data by Design</cite> to completion. Before the final
            implementation came the much longer and more iterative design phase,
            which we (and largely Tanvi) conducted using Figma. When designing
            the visualization of the Voyages Database in the first chapter, for
            example, our weekly meetings often included a segment when Tanvi or
            our visualization prototyper, Shiyao Li, or our lead developer Jay
            Varner, would walk the team through their new design ideas. It was
            during these feedback sessions that we would discuss heady questions
            about, for example, the relationship between time and linearity as it
            was experienced by the enslaved; or whether it was possible to employ
            a horizontal mapping of our data without it being interpreted
            spatially by the viewer; or the ethics of employing water as a visual
            metaphor given its associations with the Atlantic Ocean, the site of
            the Middle Passage.
            <InlineFootnote index={3} /> In each of these cases, Figma was a
            necessary tool, enabling Tanvi to create quick mockups in real time
            that focused our discussion around possible designs and their
            conceptual implications. But Figma is not usually viewed as a core
            component of a project’s tech stack.
          </p>
          <p>
            Neither does Google Docs, which we used for our meeting minutes, or
            Zotero, which Lauren used to compile all in one place the notes,
            images, and metadata from her visits to archives. There was iCal to
            schedule the meetings, and Zoom for the meetings themselves. These
            platforms are also part of our tech stack, as they are for many
            collaborative project teams. But they tend not to be included in
            responses to questions about how visualizations and web projects get
            made because they are not directly connected to the finished
            product—that is to say, the work that you can see.
          </p>
          <p>
            We could just expand the list of items in our tech stack to include
            these other platforms and tools, as we did up above. But the expanded
            list does not address the underlying reason why these tools and
            platforms are rarely viewed as part of the stack: the emphasis placed
            on web development (or “engineering”) as the sole process that is
            required to bring a visualization or website from idea to
            implementation. Our team has reflected on this throughout our work on{" "}
            <cite>Data by Design</cite>, particularly around the example of
            GitHub—both because of how central it has become in today’s
            engineering culture, and because of the visualizations that are built
            into the site itself.
          </p>

          <Figure
            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-baseline"
            figures={[figures["0602-contributors"], figures["0603-frequency"]]}
            groupCaption={
              <p>{figures["0602-contributors"].caption}</p>
            }
          />

          <p>
            On the one hand, we love them! The work of writing code takes so much
            time and thinking, but in the end, all the user sees is what is
            rendered in their web browser. GitHub’s “Code Frequency” layout, by
            contrast, shows exactly how many lines of code were added to and (per
            the anecdote that begins this chapter) subtracted from the codebase
            over time. The “Contributor” layout visualizes these contributions in
            small bar charts associated with every contributor to the project.
          </p>
          <p>
            But on the other hand, the GitHub visualizations fall far short. Key
            contributors to our project (such as Margy) are not included in these
            charts, since they do not use GitHub for their work, while others are
            not represented in proportion to their actual contributions, since
            GitHub is not the primary platform they employ. If we do not think to
            question the source of the data that is being visualized, and—per
            chapter 2, on William Playfair—what might be hidden from sight, we
            can easily fall prey to the belief that we are looking at a
            visualization of the entire project, and the entire project team.
          </p>
          <p>
            The problem with emphasizing engineering alone has increased with the
            advent of the “vibe coding” approach to web development, motivated by
            the belief that it’s possible for anyone to make anything using
            generative AI. Here we return to the problem with the stack: a
            presumption that what matters most are the tools themselves, and not
            the processes—or people—involved in using them.
          </p>
          <p>
            So we decided to topple the stack. Instead of visualizing the
            platforms we employed, we decided to visualize our process. We
            borrowed the idea from GitHub of visualizing contributions over time,
            but we included the data we generated from all of our platforms:
            GitHub, of course, but also Google Docs, iCal, Zotero, and Figma.
            After a significant ideation phase, involving everything from
            Playfair-esque time series charts to a data-driven music video, we
            arrived at a visualization strategy: treemaps, arranged in small
            multiples over time, with contributions from each platform encoded in
            colors reminiscent of the Gee’s Bend quilts discussed in chapter 4.
          </p>
        </CenteredLayout>

        <ClientOnly>
          <div className="py-20" id="contribution-treemap">
            <Treemap />
          </div>
        </ClientOnly>

        <CenteredLayout>
          <p>
            We liked the idea that our core visual form was the treemap, which
            originated with Ben Shneiderman: his argument—that visualization
            enhances human cognition—had set us (and the field of visualization)
            on our path. We also liked that our choices of color, and—without
            even realizing it—the rhythms of the entire project lifecycle,
            aligned with the “polyrhythmic, nonsymmetrical, and nonlinear”
            patterns that Elsa Barkley Brown had identified in the Gee’s Bend
            quilts and abstracted into her classroom pedagogy. Our project was
            pedagogical as well, and in the polyrhythms of our quilt chart we see
            our patterns of learning at multiple scales: the early phases of
            development, involving Georgia Tech students we’d never met; our own
            arrival on the project (2020 for Tanvi and 2023 for Margy) and with
            Tanvi, the introduction of Figma into our project workflow, which
            resulted in a new pattern of design followed by implementation, which
            would continue to the project’s end. This visualization gives a
            better sense of the range of processes that are involved in web
            development projects—processes that far exceed lines of code.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[1]} />

        <CenteredLayout>
          <p className="first-paragraph pt-10">
            Of course, a large part of how this project came together is still
            missing from this visualization: the people involved in these
            processes, who employed the tools that produced the data, guided by
            their own (and our collective) decisions and their own (and our
            collective) expertise. In nearly every team meeting—that ever-present
            mint-green slice in the visualization above—someone uttered the name
            of an absent presence: Adam, who had first prototyped the Peabody
            chapter; Qing and Morgan, who had envisioned the first site design;
            Dan and Jianing, who had carried the project from wireframe to its
            first full instantiation, allowing the rest of us to glimpse what this
            project could eventually be; Anna and Zhou, the first student workers
            from Emory, who prototyped elements of the chapters on Playfair and
            Du Bois; Nicholas, who joined from NYU; Yang, who joined from Emory’s
            Center for Digital Scholarship; Silas, who joined from Polymode. For
            us—Tanvi, Margy, Shiyao, and Jay, the team members who joined Lauren
            over the years and stayed until the final release—these ongoing
            utterances functioned like an ephemeral citation, a repeated
            calling-back-to. Some names were almost like beloved ancestors,
            others were familiar colleagues, while others were by that point the
            closest of friends. We wanted a way to account for all of those who
            touched the project—as well as how they did so—a way of visualizing
            the project’s expanse.
          </p>
          <p>
            The visualization below is structured by the three major versions of
            the project and the people who connect them. Clicking on “location”
            shows how our team members were connected across geography by
            “roles,” the positions we played on the project team (for example,
            writing and research in the case of Margy, design in the case of
            Tanvi); by “institutions” or academic affiliations (for example,
            Emory or Georgia Tech); and by “department,” a way of representing
            our various academic fields.
          </p>
        </CenteredLayout>

        <ClientOnly>
          <div className="py-20" id="people-across-versions">
            <PeopleVersions />
          </div>
        </ClientOnly>

        <CenteredLayout>
          <p>
            While the points and paths of connection change depending on the view
            that is selected, the people remain constant. A stack isn’t the right
            visual metaphor for these relations, since there’s no bottom or top.
            At every meeting we were discussing and designing and presenting new
            implementation work; it was never a linear path. Different
            specialists moved in and out of the project over time—because of
            their graduation, or because of changing institutional roles. There
            were also people such as Laura Wasowicz, Curator of Children’s
            Literature at the American Antiquarian Society, who first showed
            Lauren a Peabody chart; she is not recorded in this network diagram,
            although she made a crucial contribution to the project. There were
            also scholars or artists whom none of us had ever met who nevertheless
            left an impression on the project, like art historian Tina Campt,
            whose work Margy discusses in depth in the pages that follow. We
            cannot name every individual who is connected to this project, for
            that constellation is too vast to visualize, or likely too vast to
            even imagine. But we hope that our visualization, combined with this
            narrative, can give you an idea of its expanse. Now you, too, are
            part of our constellation—as is every visitor to this site. One of the
            pure delights of knowing that your eyes are reading these particular
            words is also knowing that you will expand this visualization further
            still.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[2]} />

        <CenteredLayout>
          <p className="first-paragraph pt-10">
            Every visualization has a point of view, as we’ve argued across this
            project. As we’ve also tried to surface, so too does every team
            member. While the visualizations that appear in this project reflect
            the composite perspective of the project team, the reason why this
            perspective is so generative is because of the individual vantage
            points it brings together. Here, the final cohort of team members
            each describe their own vantage point on the project.
          </p>

          <h3 className="text-lg font-powerWide uppercase pt-10">
            Tanvi Sharma, lead designer
          </h3>
          <p>
            I was asked by Silas Munro in 2020 to join this project. I had just
            graduated from my BFA program at MICA (Maryland Institute College of
            Art). It was the early days of the COVID pandemic, and the job market
            felt uncertain and fragile. At the time, I was working with Silas on{" "}
            <cite>BIPOC Design History: Black Design in America</cite>, and he
            told me that <cite>Data by Design</cite> would be “right up my
            alley.” I trusted his instinct. I was excited to spend more time
            learning from him and to explore what a design practice grounded in
            poetic research—a method of drawing inspiration from the sensory, the
            sacred, and the set-aside—could look like as a career. What I didn’t
            know then was how formative this invitation would be—not just for my
            design practice, but for my sense of what sustainable, care-driven
            collaboration could feel like.
          </p>
          <p>
            Formally, I’m the lead designer on the project, but my role has
            always been fluid. Lauren welcomed me to participate in whatever way
            I wanted to: as a researcher, a designer, an engineer, and a student.
            I was hungry to take on any task—from data entry to researching
            interaction patterns to chasing down every book and resource she
            shared in our Zoom meetings. That openness gave me the freedom to
            experiment and grow without restraint. It felt like entering into a
            reciprocal relationship with the project itself: it trusted that I
            would grow alongside it, and I trusted that it would hold space for me
            to evolve. That mutual care is at the heart of how I think about{" "}
            <cite>Data by Design</cite>.
          </p>
          <p>
            In the “Change” chapter, I transcribed the names and occupations of
            the Atlanta University graduates from successive editions of the
            annual course catalogue. These are the same students who are
            visualized in Du Bois’s “data portraits,” and their names became the
            data that I used for my own design work. I relied upon them (and my
            own transcription) when considering what a follow-up visualization
            would look like for students who graduated in the subsequent years. I
            did this in a tool that took me away from Figma, my primary design
            tool, but allowed me to explore more interactive approaches, pushing
            my ideas further toward a final prototype. When it came time to design
            the final visualizations that appear on the site, I’d not only
            participated in a set of steps very similar to those of Du Bois’s
            actual students—from creating data to designing visualizations to
            implementing them—but I felt an intimate connection to the students
            themselves. I’d tracked their lives through each year’s catalogue,
            then into a dataset, and finally into visual form. I saw them through
            marriages, name changes, change in jobs and relocating to different
            parts of the country. I’d come to care for their place in the project
            just as the project had, in a way, cared for me: expanding to allow
            my role to evolve.
          </p>
          <p>
            What’s incredible about a project like this, as opposed to the work
            that I’ve done for major tech companies and design firms, is that the
            needs of the people involved are prioritized before the needs of the
            project. Without the pressure of delivering within a specific
            quarter, or the often-toxic demands of design work in the service of
            capitalism, it shows what becomes possible when care is prioritized:
            creativity alongside curiosity and community. Through five cities, a
            breakup, two degrees, a marriage, and many jobs,{" "}
            <cite>Data by Design</cite> has always been a constant in my design
            career. I know I’ll feel a little lost when the project sunsets. The
            project has shaped me by the values it embodies, and is a testament
            that design can be sustained by care rather than extraction, and can
            create space for all of us to thrive.
          </p>

          <h3 className="text-lg font-powerWide uppercase pt-10">
            Jay Varner, lead software engineer
          </h3>
          <p>
            As a software engineer for the Emory Center for Digital Scholarship
            (ECDS), I lead the development work for the center’s bespoke projects
            and platforms. My role is to take the ideas from the Emory community
            and turn them into code. To put it another way: I develop new ways
            for people to interact with old shit. People think of this as a tech
            role, but creativity and problem-solving are at its core. My projects
            also need to work in the real world; for my master’s degree, I
            studied user experience, which helps make that happen.
          </p>
          <p>
            I joined the project in fall 2022 when Lauren reached out to ECDS for
            support. I made my first commit to the project’s GitHub repository in
            December of that year. (A “commit” is a way of contributing new or
            revised code to a project.) The thought was I would spend a few
            months helping get the site over the finish line. That’s not how it
            went. I think we were very fortunate to be able to take the time we
            did.
          </p>
          <p>
            In software development, process is paramount. There are steps we
            always go through and established ways to come up with an efficient
            result. In a for-profit setting, the timeline would be more strict
            and finite. In this case, because I’m on the staff of ECDS, we were
            able to stretch the timeline and truly experiment and iterate,
            adjusting to feedback and internal deliberation along the way. This
            was the necessary process. The time and collaboration created the
            confidence that we got it right, or as right as possible for this
            project in this moment.
          </p>
          <p>
            Challenges and hard choices were the norm. The re-creations of
            Elizabeth Palmer Peabody’s charts that appear in the “Knowledge”
            chapter were particularly tedious. There were 218 unique events
            across the four centuries that Dan Jutan, a student from Georgia Tech
            who worked on the first version of the website, had compiled from the
            text. When you read an explanation of Peabody’s process, it seems
            pretty straightforward to turn into code. But at times Peabody took
            some liberties and deviated from her own system. Improv is harder to
            translate into code. We had to strike a balance between writing
            efficient code that could be reused for all four centuries and three
            different visualizations, and code that was flexible enough to handle
            human mistakes. To stay true to Peabody’s original images, we would
            have to intentionally introduce an error into the underlying data. The
            other alternative was to create a visual discrepancy. We went with the
            latter.
          </p>
          <p>
            It’s unusual for me, as a developer, to see my name listed as an
            author. In the past, I probably wouldn’t have thought twice about
            being left off. It aligns with the spirit of the project to see it
            there now.
          </p>

          <h3 className="text-lg font-powerWide uppercase pt-10">
            Shiyao Li, visualization researcher
          </h3>
          <p>
            I joined this project as a junior visualization researcher in the
            second year of my PhD, carrying the mindset that visualization
            leverages the strengths of human perception to make information more
            discoverable through abstraction. With that perspective, I initially
            assumed my role would be straightforward: review the 293 variables of
            the dataset that the team was then attempting to visualize—from the
            Voyages Database—identify those we wanted to highlight, select the
            appropriate form of abstraction, produce clear, effective
            visualizations of the 36,079 voyages, and consider the project
            complete.
          </p>
          <p>
            My first attempt reflected that approach. I initially designed a
            stream chart to show the changes in the trend in the number of
            voyages from 1565 to 1858, expecting this historical trajectory to be
            the central focus. But that assumption was quickly challenged as the
            team was less interested in broad trends and more concerned with
            representing the lived realities behind each individual voyage. What
            followed was nearly two months of collaborative exploration, during
            which we experimented with different ways of representing each voyage
            and the resistance of the people on board, before arriving at the
            design that ultimately appears in the “Data” chapter.
          </p>
          <p>
            This process reshaped my understanding of visualization design. My
            own research focuses on confirmation bias in data visualization—how
            people interpret visualizations in ways that align with their prior
            beliefs. Much of my academic writing has emphasized abstraction: by
            reducing data points to patterns, visualizations make insights easier
            to see, and in turn make those that fit prior beliefs even more
            accessible. Working on this project, however, revealed a different
            side of abstraction—how it can also flatten and even erase the human
            realities behind each data point. In digital humanities projects,
            visualizations are not only about revealing patterns but also about
            inviting reflection and contemplation. Each data point carries weight
            and meaning, and abstraction can easily obscure those nuances. The
            most important lesson I took away from this collaboration is that
            sometimes the power of visualization lies not in simplifying
            complexity, but in holding on to it—encouraging audiences to reflect
            on both what is revealed and what is lost when we visually represent
            human lives.
          </p>

          <h3 className="text-lg font-powerWide uppercase pt-10">
            Margy Adams, lead accessibility and humanities researcher
          </h3>
          <p>
            I’ve been part of this project team for its final three years, and as
            such, I’ve been involved in its numerous pushes toward the finish
            line. Throughout this process, I’ve been intrigued, again and again,
            by the idea that visualizations are not simply something we see. I
            study Black sound. For years, Tina Campt’s{" "}
            <cite>Listening to Images</cite> has served as a methodological and
            even spiritual guide for me, and it especially came into focus as I
            began working on this project. Operating from a Black feminist
            standpoint, Campt sets up a practice of “listening to images” as a
            multisensory encounter that emphasizes “looking beyond what we see
            and attuning our senses to the other affective frequencies … of
            images and how they move, touch, and connect us to the event of the
            photo.”
            <InlineFootnote index={4} /> While we need to be careful of how we
            apply this framework to images beyond Campt’s primary corpus (Black
            vernacular photography), the ethic of looking “beyond” is crucial to
            disrupting the alleged objectivity of visualizations of data,
            especially those that pertain to marginalized populations and the
            production of histories. Listening to images allows us to understand
            visualizations not as neutral presentations of data, but instead as{" "}
            <em>re</em>presentations of a particular dataset, as well as how and
            why it was collected. To reiterate the foremost point of this
            project: data visualizations inevitably fall short of presenting a
            totalizing picture of the visualized content because that task in
            itself—completely <em>capturing</em> data—is vacuous.
          </p>
          <p>
            However, instead of viewing this as a problem to solve, as I’ve
            learned through my work on this project, we find other possibilities
            for visualization emerge when we focus on <em>why</em> we know that
            prospect is impossible: we are able to <em>read</em> data
            visualizations in multiple, sometimes contradictory, even infinite
            ways. Reading—or, as Campt and I prefer, <em>listening</em>—to the
            visual, a mode assumed to be beyond linguistic and sonic capture,
            drives how we help make the visual <em>produce meaning</em>. The
            practice of listening, in turn, informed my primary contribution to
            this project, the composition of the alternative text (or “alt text”)
            that is displayed in place of each image in the project for those
            using screen readers (or other adaptive technologies).
          </p>
          <p>
            Instead of following a set of universal standards for writing image
            descriptions, which can be appropriate for some projects, I composed
            the alt text with listening in mind. The visual content of{" "}
            <cite>Data by Design</cite> is not as straightforward as, for
            instance, a photograph of a bowl of fruit, which might be described
            as “a ceramic bowl on a wooden table that contains a banana, an
            apple, and a bunch of grapes.” Each of our chapters includes
            historical charts, vast datasets, and intricate symbolism that
            already challenge the process of meaning-making. But that is the
            beauty of this project: it elevates the responsibility we carry as
            interpreters—that is to say, as individual (and collective) producers
            of meaning. So I tasked myself with listening: with considering how my
            writing, like one track in a studio recording of a song, would
            accompany and harmonize with the main body of text; and with using
            words to retain the impression that the particular image left on me. I
            saw my task as describing how the image resonated with someone (me)
            whose primary job was to study the image and attune to it deeply. The
            impressions recorded in the alt text are necessarily my own, so it was
            important that I make my perspective known, too, without overriding
            the most important visual information.
          </p>
          <p>
            This hierarchy of visual significance changed with every chapter, and
            with every set of images, just as every visualization designer’s
            purpose (and our argument about it) changed too. The “Change” chapter,
            for example, which centers on the charts created by W. E. B. Du Bois
            and his students for the 1900 Paris Exposition, showcases their
            skillful use of color. Standards for alt text often suggest omitting
            details about color. But not mentioning these charts’ vibrant reds,
            yellows, blacks, and greens seemed to diminish the effects of what Du
            Bois and his students sought to convey through their color choices. So
            I decided to note the colors of the charts and my sense of their
            connotations, as well as the larger shapes that the charts, to me,
            seemed to form.
          </p>
          <p>
            With the “Data” chapter, however, the abstraction in the images posed
            a very different challenge. The text of the chapter discussed how the
            process of abstracting bodies into numbers contributed directly to the
            dehumanization of slavery. Simply describing the abstracted bodies in
            the images seemed like it would only reproduce that original violence.
            So for “Plan of an African Ship’s Lower Deck,” for instance, I decided
            to explain not only that the ship’s hold held people but also{" "}
            <em>how</em> it did so, both on the actual vessel and on the page. My
            alt text could work alongside the argument of the chapter, exposing
            abstraction as one of the insidious mechanisms that allowed slavery to
            persist.
          </p>
          <p>
            Listening proved to be such a powerful technique for writing the alt
            text for this project because it required me to interpret and
            translate each image’s form and content, as well as how that content
            was constructed. What I came to realize through my process of
            listening to images, especially as I listened to “Plan of an African
            Ship’s Lower Deck,” was what Campt meant when she described her own
            practice as, foundationally, <em>grammatical</em>.
            <InlineFootnote index={5} /> Following literary scholar Hortense
            Spillers’s landmark work on the linguistic enslavement of Black
            diasporic peoples since the Middle Passage, Campt’s discussion of
            grammar invites her readers to consider how our looking practices—our
            ways of engaging with visuals—have also been structured by a set of
            rules, by a system of <em>visual</em> syntax. She asks us to consider
            what has resulted from this regimented framework: reductive, abstract
            narratives about Black subjecthood. The grammatical practice that she
            is after here, then, is not so much about “correctness” or exactitude,
            but about contending with how these rules <em>govern us,</em> their
            users.
            <InlineFootnote index={6} />
          </p>
          <p>
            In Campt’s own words, her grammatical reframing is one that
            “grappl[es] with precarity, while maintaining an active commitment to
            the every labor of creating an alternative future. Indeed,” she
            continues, “it is this grammatical practice of futurity that
            constitutes my definition of <em>freedom</em>.”
            <InlineFootnote index={7} /> To Campt, listening to images is
            concerned with the future real conditional tense—the grammatical “what
            will have had to happen,” the enactment of a future that has not yet
            occurred but <em>must</em>, if we are to ever really be free.
            <InlineFootnote index={8} /> It seems to me that this chapter, maybe
            this entire project, is an attempt to attend to the precarity of the
            “every labor”—in other words, the quotidian yet necessary work that is
            required to achieve liberation. This “every labor” is precarious
            because it is very often taken for granted, or “quiet,” to invoke
            Kevin Quashie, whose book <cite>The Sovereignty of Quiet</cite> we
            discussed in chapter 1. It also reminds me of Toni Morrison’s famous
            words delivered at Barnard in 1979: “the function of freedom is to
            free somebody else.”
            <InlineFootnote index={9} /> The very argument of this project, that
            data visualizations have points of view, seems itself to create the
            possibility for an “alternative future,” to return to Campt’s
            words—one where visualization can act as a language that propels us
            toward freedom.
          </p>
          <p>
            To propose that visualization itself can function grammatically is to
            insist that meaning does not end once the image is created; in fact,
            it keeps living <em>through</em> our interpretations of and
            interactions <em>with</em> it. Campt’s project “question[s] the
            grammar of the camera (as both an event of photography and a
            photographed event) as well as the haptic temporalities of
            photographic capture as pernicious instruments of knowledge
            production.”
            <InlineFootnote index={10} /> Put more simply, she does not only
            consider what the photograph is of, but also the contexts in which the
            photograph was taken, and of the camera itself—the “pernicious
            instrument”—in order to glean what the very act of the recording
            itself might tell us. Likewise, with data visualization we must be
            thoughtful of the contexts in which the data was recorded and the
            “pernicious instruments” employed to visualize it—the strategies (or,
            one might say, <em>grammars</em>) and traditions of the field—to
            ultimately reflect on the systems that have allowed the subject to
            document and the other to be (un)documented. How does a visualization
            speak? What is it saying, what is it hiding? And why might it be
            hiding certain things?
          </p>
          <p>
            Thinking of visualization as a grammar in the sense that Spillers and
            Campt understand it enables creators of data visualizations to convey
            rather than overdetermine, to gesture toward rather than eclipse. It
            also allows witnesses to actively build up worlds of meaning with
            creators rather than receive information through a hierarchical,
            passive structure. Reconstruing visualization as a grammar means that
            the unknown becomes central. But instead of fearing it, we might
            instead expose the contours around it that made it so, and in turn see
            what we can do to produce knowledge anew.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[3]} />

        <CenteredLayout>
          <p className="first-paragraph pt-10">
            Like some of the best visualizations, which offer up new insights
            when we return to the original image (or repeated interactions with
            the interface) with additional questions, the best humanities
            scholarship—like Campt’s and Spillers’s—also rewards repeated
            engagement. As I see it (and it is now Lauren writing these final
            lines), there is a close kinship between the aim of humanities
            scholarship and the work that visualization seeks to do. When Margy
            brought <cite>Listening to Images</cite> to the project team, she
            explained (as she does in her reflection) how Campt allows us to see
            the “grammar” of visualization, like the construction of language
            itself, as an active practice rather than a rulebook to follow. This
            interpretation of visualization’s core components—its grammar in the
            sense that Leland Wilkinson used the term—is empowering, or should be,
            because it shifts the emphasis from the components themselves to the{" "}
            <em>people</em> who assemble and derive meaning from them.
            <InlineFootnote index={11} />
          </p>
          <p>
            Now, returning to <cite>Listening to Images</cite> as this project
            reaches its final phases, I see how Campt’s work can push us further
            still. Campt’s phrasing underscores how the “grammatical practice” of
            listening to images (or in our case, to visualizations) has
            “existential” stakes. The future we all hope to inhabit is, by
            definition, precarious; it is conditional—both grammatically and
            experientially—until we take active steps to make it real. Margy
            helped our team to see how the very argument of{" "}
            <cite>Data by Design</cite>, that visualizations have points of view,
            itself creates the possibility of alternative futures. I also now see
            our work in similarly existential terms: the power of visualization
            designers to shape what we see is the same power that can be harnessed
            by those doing the seeing—that is to say, by all of us. As viewers, we
            all have the ability to use the insights we gain in order to imagine
            alternate worlds. This, in the end, is how visualization can propel us
            toward freedom. But to do so, it requires an attention to the “every
            labor” (Campt’s words) of that imaginative work.
          </p>
          <p>
            This chapter represents a literal attempt to attend to our “every
            labor.” By insisting that our process is as important as our product,
            we have exposed deeper layers of the decision-making that has
            culminated in the project you are exploring now. By amplifying each of
            our individual perspectives, we have exposed the seams that bind these
            perspectives into a composite whole. By uplifting our collective
            contributions, we have shown—we hope—how multiple skillsets and
            multiple minds open up new possibilities for understanding
            visualization, both its history and its future.
          </p>
          <p>
            When we listen to labor, we can gain insight into the small
            decisions—and the larger ones—that result in the visualizations that
            we would otherwise perceive as objective or self-contained. Indeed,
            these decisions, the people who made them, and the perspectives they
            inhabit, are what help us to understand visualizations more fully: as
            representations of the process by which data is given new form,
            whether visual or interactive. In the end, this process is what
            determines the nature of the insights that we as designers are able to
            prompt in our viewers; and our viewers’ understanding of that process,
            in turn, enriches the knowledge they ultimately gain. We hope that
            this chapter has prompted new insights for you—both about the specific
            visualizations that you have encountered across this site, and about
            the possibilities of visualization as a practice, one that can
            directly contribute to a more informed, more equitable, and more
            liberatory world.
          </p>
        </CenteredLayout>

        <Takeaways
          forDesigners={[
            <span key="19a3d958">
              Name and celebrate all contributors to your project
            </span>,
            <span key="0cf952fd">
              Acknowledge the role of process is visualization work
            </span>,
            <span key="8374b19b">
              Recognize the many forms of labor that go into making
              visualization
            </span>,
            <span key="e02e42ad">
              Approach visualization as a practice of freedom
            </span>,
          ]}
          forViewers={[
            <span key="52f277e5">
              Reorient practical questions from tools to process
            </span>,
            <span key="dd8aa859">
              Probe for significance in any/all design decisions
            </span>,
            <span key="83c963d5">
              Ask who designed any visualization that you see
            </span>,
            <span key="10557805">
              Place yourself in the meaning-making process
            </span>,
          ]}
        />
      </ChapterBody>
      <CenteredLayout>
        <FootnotesList footnotes={workFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
