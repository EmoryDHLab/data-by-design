import { ChapterContext } from "~/chapterContext";
import ChapterTitle from "~/components/ChapterTitle";
import { chapterMeta } from "~/utils";
import type { MetaFunction } from "@remix-run/node";
import { laborFootnotes } from "~/footnotes";
import CenteredLayout from "~/components/layout/CenteredLayout";
import PeopleVersions from "~/components/labor/peopleVersions/PeopleVersions.client";
import Footer from "~/components/Footer";
import { ClientOnly } from "remix-utils/client-only";
import Treemap from "~/components/labor/treemap/Treemap.client";
import Quotation from "~/components/Quotation";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import ChapterBody from "~/components/layout/ChapterBody";
import type { TVizAnchors } from "~/chapterContext";

export const meta: MetaFunction = () => {
  return chapterMeta("labor");
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
    title: "How Did We Get Here?",
    id: "how-did-we-get-here",
  },
  {
    title: "Stacking Tech",
    id: "stacking-tech",
  },
  {
    title: "Accounting and Accountability",
    id: "accounting-and-accountability",
  },

  { title: "Reader as Participant", id: "reader-as-participant" },
];

export default function LabourPage() {
  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "laborPrimary",
        accentColor: "laborPrimary",
        footnoteTextColor: "laborPrimary",
        footnotes: laborFootnotes,
        sections,
        visualizations,
      }}
    >
      <ChapterTitle
        title="From Idea to Insight"
        subtitle="The Making of Data by Design"
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
          <p className="first-paragraph py-10">
            In nearly every meeting, as different specialists moved in and out
            of the project, or between different facets of it, someone uttered
            the name of an absent presence. Over time, it seemed like an
            ephemeral citation, a calling-back-to. Some names were colleagues,
            friends, or even Tanvi and Nick's pet kitten, Tibia; others were
            scholars or artists no one had ever met who left an impression on
            one of the team members, like when Margy finished Hanya
            Yanaghihara's <em>A Little Life</em> in the early hours of the
            morning before a meeting the following afternoon. Though we did not
            explicitly consider the prospect earlier on, the echo of those who
            were not present week by week drove us to reflect on ways we could
            acknowledge how this project grew and grew out of a multitude of
            voices, hands, disciplines, technologies, and communities. Even
            while we were unsure of how to record it, how to account for all of
            those who touched it and us (as well as how they did so), we knew
            some sort of memory of the expanse that a project like this
            takes-one so concerned with data, memory, and embodiment-had to be
            recorded somehow.
          </p>
          <p>
            And that is how you find yourself here, glimpsing a bit more
            in-depth at how Data by Design came to be. Your authors here are two
            of the lead contributors to this project: Margy Adams, a PhD
            Candidate in English at Emory, and Tanvi Sharma, currently a
            Research Fellow with the Atlanta Interdisciplinary Network and a
            recent graduate of NYU's Masters' program in Integrated Design &
            Media. While we cannot speak for all of the other contributors, who
            span multiple institutions over multiple years, we hope our words
            can stand for the additional perspectives behind the chapters that
            you see.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[0]} />

        <CenteredLayout>
          <p className="first-paragraph py-10">
            Any digital project is the work of many hands, eyes, ears, and, of
            course, the various technologies we employ to make it. When viewing
            a complicated website such as this one, with multiple interactions,
            toggles, and animations featured across each chapter, a question you
            might (understandably) have is: how did they make that? Here is an
            answer:
          </p>

          <p>[ VISUALIZATION OF TECH STACK HERE ]</p>

          <p>
            Pictured above is the technology “stack,” the various platforms and
            software tools we used to develop this website, and that it rests
            upon. We counted on different operating systems, libraries, servers,
            databases, browsers, and hosting platforms to bring this project to
            fruition. More specifically, this project was created with HTML,
            JavaScript, and CSS, using the React.js and Tailwind frameworks. We
            used a combination of D3, P5, and raw SVG to create the
            visualizations that appear on the site. It is hosted on a server
            maintained by Emory's Center for Digital Scholarship Center, using
            content delivered by AWS. You can find the entire project code on
            GitHub. So that is one answer to the question. But, as you well know
            by now after encountering the previous chapters, the work of these
            tools relies on how they are applied.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[1]} />

        <CenteredLayout>
          <p className="first-paragraph py-10">
            Beyond the official “tech stack,” there are more tools we used on a
            daily basis to help us build our work up to the implementation
            stage. Cumulatively, all team members used a number of various
            applications to produce ideas across (and beyond) the website_and
            also, crucially, among ourselves.
          </p>

          <p>
            For example, Github proved crucial for us not only in the final
            deployment, but as we engineered the site, as it enabled us to
            implement our various ideas, play with various ways of refactoring
            pages and components, and generally collaborate on writing code.
          </p>

          <p>
            But before any implementation was design, which we (and largely
            Tanvi) conducted using Figma. When designing the final visualization
            of the Trans-Atlantic Slave Trade database in the first chapter, for
            example, our weekly meetings often included a segment when Tanvi or
            our visualization prototyper, Shiyao, would share their screen to
            walk the remaining team members through new designs they had come up
            with. It was in these feedback sessions where we discussed how to
            complicate notions of time and linearity, the pros and cons of
            adapting a water metaphor, given the violence associated with it in
            the context of the Middle Passage , and the linguistic tension of
            orienting a map horizontally, from left to right, rather than
            vertically, so as to resist the user imposing a coordinate system
            upon what we intended as an abstract display. In this regard, Figma
            was a necessary tool, even if it is not granted entry into the
            official tech stack of the site.
          </p>

          <p>
            Zotero was another necessary tool, both as the platform which
            preserved the notes, data, and images from Lauren's original
            archival research, and later, as she needed to share this
            information with the rest of the project team. In researching
            Shanawdithit's maps for the third chapter, for example, only Lauren
            went to the archive in St. John's, so Zotero became the platform
            that enabled the rest of the project team to collect and share
            information that could inform our own work as we developed the
            interactive components for the chapter.
          </p>

          <p>
            Google Drive was also crucial in many ways throughout the project's
            development. In fact at first, Dan wrote a plugin that would enable
            us to author the chapters in Google Docs, with updating in real
            time. For me, Margy, Google sheets played a huge role. I wrote over
            20 pages of alt-text for the images included in the site, which
            enriched our collective understandings of the images themselves.
          </p>

          <p>
            And of course, iCalendar and Zoom were essential for the team to
            meet frequently and keep each other up to date with our individual
            and collective progress. These tools all bear the traces of our
            labor, which the visualization below brings to light.
          </p>
        </CenteredLayout>

        <ClientOnly>{() => <Treemap />}</ClientOnly>

        <ChapterSectionTitle section={sections[2]} />

        <CenteredLayout>
          <p className="first-paragraph py-10">
            Of course, a large part of how this website came together is still
            missing from this account: the people who employed these tools,
            guided by their decisions and their expertise. Both in terms of
            specific features, and in terms of the people involved, there is far
            more that we could say. Taking a page from Du Bois, who credited his
            students' labor in the “data portraits” featured in Chapter Five,
            here we visualize the people of this project itself.
          </p>
        </CenteredLayout>

        <ClientOnly>{() => <PeopleVersions />}</ClientOnly>

        <CenteredLayout>
          <p className="first-paragraph py-10">
            This visualization shows that it is not just the aforementioned
            platforms that connect people, though that is of course a part of
            it; people's own networks connect us. And, while we cannot name
            every individual who may be connected to this project, for that
            constellation is too vast to visualize, we can give you an idea of
            its expanse.
          </p>
          <p>[ EXTENDED TESTIMONTY TK ] ]</p>
          <p>
            And now, you, too, are a part of our constellation. We are happy you
            are here!
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[3]} />

        <CenteredLayout>
          <p className="first-paragraph py-10">
            A very particular postlude from Margy: Though I in no way can assume
            a neutral role in observing the final numerous (potentially
            uncountable) pushes of this project over the last year and a half, I
            am compelled by the ways composing this conclusion itself coincides
            with the idea that visualizations are not simply something we see.
            As a sound studies scholar, Tina Campt's Listening to Images for
            years has served as a guide for me, and it especially came into
            focus as I began working on this project. Operating from a Black
            feminist standpoint, she says that the future real conditional-the
            grammatical “what will have had to happen”-is “an existential
            grammatical practice of grappling with precarity, while maintaining
            an active commitment to the every labor of creating an alternative
            future. Indeed, it is this grammatical practice of futurity that
            constitutes my definition of freedom” (116, emphasis in original).
            It seems to me, upon reflection, that this chapter is an attempt to
            attend to the precarity of the “every labor,” that which is
            quotidian, taken for granted, or quiet, to invoke Kevin Quashie's
            book The Sovereignty of Quiet. Further, the very argument of this
            project, that data visualizations have points of view, seems to
            itself create the possibility for an alternative future-one where
            visualization can act as a language that propels us towards freedom.
          </p>

          <p>
            Campt sets up a practice of “listening to images” as an encounter
            that emphasizes “looking beyond what we see and attuning our senses
            to the other affective frequencies…of images and how they move,
            touch, and connect us to the event of the photo” (9). While we need
            to be careful of how we apply this framework to images that are not
            identification photos, the primary subcategory which Campt studies,
            the ethic of looking “beyond” is crucial to disrupting alleged
            objectivity in all visualizations of data, especially those that
            pertain to marginalized populations and the production of histories.
            Listening to images allows us to understand visualizations not as
            neutral presentations, but instead as representations of a
            particular position through which the data came to be collected. To
            reiterate the foremost point of this project: data visualizations
            inevitably fall short of presenting a totalizing picture of the
            visualized content because that task in itself, completely capturing
            data, is vacuous.
          </p>

          <p>
            However, instead of viewing this as a problem to solve, other
            possibilities for visualization emerge when we focus on why we know
            that prospect is impossible: we are able to read data visualizations
            in multiple, sometimes contradictory, even infinite ways.
            Reading-or, as Campt and I prefer, listening-to the visual, a mode
            assumed to be beyond linguistic and sonic capture, drives how we
            help make the visual produce meaning. To combine Campt's ideas with
            literary and cultural scholar Hortense Spillers', visualization
            becomes a grammar-a language, a form of expression-that does not end
            once the image is created; in fact, it keeps living through our
            interpretations of and interactions with it. Campt's project
            “question[s] the grammar of the camera (as both an event of
            photography and a photographed event) as well as the haptic
            temporalities of photographic capture as pernicious instruments of
            knowledge production” (8-9). Simply, she does not only consider what
            the photograph is of, but also the contexts in which the photograph
            was taken and the “pernicious” device-the camera-that took the photo
            in order to glean what the act of the recording itself might tell
            us. Likewise, with data visualization we must be thoughtful of the
            contexts in which the data was recorded and, similarly, the
            “pernicious” device-the strategies and traditions of data
            visualization-to ultimately reflect on the systems in place that
            allowed one hand to document and another to be (un)documented. How
            does the image speak? What is it saying, what is it hiding? And why
            might it be hiding certain things?
          </p>

          <p>
            Thinking of visualization as a grammar enables creators of data
            visualizations to convey rather than overdetermine, to gesture
            towards rather than eclipse. It also allows witnesses to actively
            build up worlds of meaning with creators rather than receive
            information through a hierarchical, passive structure. Reconstruing
            visualization as a grammar means that the unknown becomes central,
            but instead of fearing it, we might instead expose the contours
            around it that made it so and what we can do to produce knowledge
            anew. Just as a Danish-language novel transforms into another novel
            altogether when translated into English, which loses some meaning
            but gains others in the process, we can conceive of data
            visualization as a grammar that itself exceeds capture, a linguistic
            exercise in translation, an acknowledgement of the expanse-the
            lives, the land, the lessons-beyond what is pictured.
          </p>
        </CenteredLayout>
      </ChapterBody>
      <Footer />
    </ChapterContext.Provider>
  );
}
