import { Fragment, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ChapterTitle from "~/components/ChapterTitle";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import Quotation from "~/components/Quotation";
import Footer from "~/components/Footer";
import CenteredLayout from "~/components/layout/CenteredLayout";
import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";
import { peopleFootnotes } from "~/footnotes";
import { chapterMetaTags } from "~/utils";
import figures from "~/data/figures/people.json";
import Figure from "~/components/figures/Figure";
import ColonialMaps from "~/components/people/ColonialMaps.client";
import DocumentViewer from "~/components/people/DocumentViewer";
import SketchScrollytell from "~/components/people/drawingScrollytell/DrawingScrollytell";
import InlineFootnote from "~/components/InlineFootnote";
import WillardScrollytell from "~/components/people/WillardScrollytell";
import ChapterBody from "~/components/layout/ChapterBody";
import FootnotesList from "~/components/FootnotesList";
import Takeaways from "~/components/layout/Takeaways";
import ClientOnly from "~/components/ClientOnly";
import { chapterMeta } from "~/data/chapterMeta";
import MapsExploration from "~/components/people/MapsExploration.tsx";
import MapsExploration2 from "~/components/people/MapsExploration2";
import MapsExploration3 from "~/components/people/MapsExploration3";
import type { MetaFunction } from "react-router";
import type { HoverState, TVizAnchors } from "~/chapterContext";
import Legend from "~/components/people/Legend.tsx";

export const meta: MetaFunction = () => {
  return chapterMetaTags("people");
};

const sections = [
  {
    title: "Visualization as Extraction",
    id: "visualization-as-knowledge-extraction",
  },
  {
    title: "Indigenous Cartography within the Colonial Frame",
    id: "indigenous-cartography-within-the-colonial-frame",
  },
  {
    title: "Maps and the Production of Colonial Power",
    id: "maps-and-the-production-of-colonial-power",
  },
  {
    title: "The Birch Bark Map and the Lookout Tree",
    id: "the-birch-bark-map-and-the-lookout-tree",
  },
];

const chapterFigures = Object.values(figures);

const visualizations: TVizAnchors[] = [
  {
    type: "visualization",
    id: "source map",
    title: "Sources Diagram",
  },
  {
    type: "scrollytell",
    id: "scrollytell-one",
    title: "Shanawdithit's Maps",
  },
  {
    type: "visualization",
    id: "source map-2",
    title: "Sources with Mediation",
  },
  {
    type: "visualization",
    id: "colonial-maps",
    title: "Colonial Maps",
  },
  {
    type: "visualization",
    id: "willard-maps",
    title: "Willard Maps",
  },
  {
    type: "scrollytell",
    id: "scrollytell-two",
    title: "Willard Scrollytell",
  },
  {
    type: "visualization",
    id: "maps-exploration-3",
    title: "Complete Diagram",
  },
];

export default function ShanawdithitPage() {
  const [hoverState, setHoverState] = useState<HoverState>(undefined);
  const [showFootnotes, setShowFootnotes] = useState<boolean>(false);

  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "peoplePrimary",
        primaryTextColor: "black",
        accentColor: "peopleSecondary",
        footnoteTextColor: "peopleSecondary",
        footnotes: peopleFootnotes,
        hoverState,
        setHoverState,
        visualizations,
        chapterFigures,
        sections,
        showFootnotes,
        setShowFootnotes,
      }}
    >
      <ChapterTitle
        title={chapterMeta.people.title}
        subtitle={chapterMeta.people.subtitle}
      />
      <ChapterBody>
        <CenteredLayout>
          <Quotation
            quote={
              <>
                Maps can represent reality and can contest it. How can we learn
                to see the lines of power that they encode?
              </>
            }
          />
          <p className="first-paragraph py-10">
            One morning in March 1819, at the first break of dawn, a small
            group of Beothuk people—the Indigenous inhabitants of the island
            now more commonly known as Newfoundland—were awakened by the
            sound of intruders.
            <InlineFootnote index={0} /> The group had been asleep at their
            winter camp on the north side of Beothuk Lake, a long and narrow
            body of water at the island’s center, when a half dozen or so
            British settlers surrounded them.
            <InlineFootnote index={1} /> While the settlers’ intentions were
            not yet known, the Beothuk had cause for alarm. Every previous
            encounter with the British had ended in destruction and death.
            This encounter would soon result in the same.
          </p>
          <p>
            The Beothuk had been navigating European incursions for
            centuries. Some speculate that the mention of “scraelings” in the
            Norse sagas refers to ancestors of the Beothuk, which would date a
            first encounter to the eleventh century.
            <InlineFootnote index={2} /> A second phase of more sustained
            contact began shortly after the Italian explorer John Cabot’s
            initial visit to the island, in 1497, and persisted for the next
            two hundred years.
            <InlineFootnote index={3} /> During this time, says environmental
            humanities scholar Fiona Polack, “fishing crews from Spain,
            Portugal, France, and Britain would spend the summer months
            catching and processing cod before returning home for the
            winter.”
            <InlineFootnote index={4} /> Polack documents how this
            arrangement—to which, of course, the Beothuk had no choice but to
            consent—began to strain as “increasing numbers of people from the
            British isles began to settle permanently on the island and
            compete directly with the Beothuk for resources.”
            <InlineFootnote index={5} /> It was this competition for
            resources, compounded over centuries, that in no small part led
            the British to Beothuk Lake that day.
          </p>
          <p>
            But there were other, more direct explanations: several months
            earlier, on September 18, 1818, a group of Beothuk had surprised
            the same British settlers as they were preparing for a trip to
            market. Hidden in a canoe under a wharf at Lower Sandy Point, in
            the Bay of Exploits—north and east of Beothuk Lake, where its
            waters met the sea—the Beothuk waited for the “dense darkness” of
            night and then absconded with a boat carrying the season’s catch
            of salmon, and possibly some furs.
            <InlineFootnote index={6} /> This “theft and act of destruction”
            provided the rationale for John Peyton Jr., the owner of the boat
            (whose personal narrative serves as the source of the direct
            quotations in this paragraph) to request formal authorization
            from the governor of colonial Newfoundland to “search for his
            stolen property and, if possible, try and capture one of the
            Indians alive.”
            <InlineFootnote index={7} />
          </p>
          <p>
            Those at the winter camp did not know about the kidnapping
            authorization when they awoke that morning in March. But within
            minutes, the settlers’ goal became clear. When the Beothuk fled
            to the woods, one woman, Demasduit, fell behind and was
            immediately set upon by the British. She “pointed out to the
            white men her full breasts to show that she had a child, and
            pointed up to the heavens to implore them, in God’s mercy, to
            allow her to return to her child,” but they “took hold of her,”
            recalled John Paul, a Mi’kmaq-Innu man whose grandfather had been
            alive (but not present) at the time of the original events.
            <InlineFootnote index={8} /> Demasduit’s partner, a man named
            Nonosabasut, “came to her aid,” but Peyton shot and killed him.
            Two days later, the child of Demasduit and Nonosabasut died as
            well—likely the result of starvation. One other young woman,
            Shanawdithit, who was then around 17, bore witness to it all.
            <InlineFootnote index={9} />
          </p>
          <p>
            Shanawdithit’s hand-drawn maps, which constitute the core of this
            chapter, offer documentation of these events in visual form. But
            in exploring her maps, our goal is not to argue for the utility
            of Beothuk cartographic techniques for the field of data
            visualization.
            <InlineFootnote index={10} /> Rather, we seek to surface the
            colonial context that gave rise to the maps’ creation, and make
            the case for how that context—what we call here the{" "}
            <em>colonial frame</em>—must be considered alongside any new
            knowledge that the maps bring to light.
          </p>
          <div id="source map">
            <MapsExploration></MapsExploration>
          </div>
          <Legend></Legend>
          <p>
            This is the reason we are breaking the mold of the previous
            chapters by presenting you with a diagram before we present the
            original maps. This diagram was designed by Tanvi, with input
            from Lauren, as a way to give the maps’ colonial frame visual
            presence. The years lead out from the center, beginning with the
            first documented encounter between the Beothuk and British
            groups. But the time scale we employ is not linear; instead, the
            layers mark the major events that culminated in the creation of
            the three primary sources that we rely upon in this chapter. The
            shaded section at the top of the diagram displays the series of
            events that culminated in Shanawdithit’s maps entering the
            colonial archive; the section in the middle right indicates
            those of John Peyton Jr.’s narrative; and the section at the
            bottom right indicates those of John Paul’s oral history. Around
            them is open space. This space is there to remind us of our
            distance from the past, and of what we—the project team, and
            therefore you our readers—can never know.
          </p>
          <p>
            Our focus on our own perspective is intentional. At various
            points in this project—in the preface, for example, and in our
            visualization of the Voyages Database that appears in chapter
            1—we have been explicit about acknowledging the positions from
            which our work takes place. Here is another place where these
            positions matter.
            <InlineFootnote index={11} /> Our project does not contain any
            Indigenous team members, and while Tanvi is from India, which has
            its own colonial history, and other team members call other
            countries home, our team is firmly based in the United
            States—on Mvskoke, Lenape, Tongva land.
            <InlineFootnote index={12} /> As such, our work cannot by
            definition be decolonial, as it is not led by Indigenous people
            and does not involve the repatriation of Indigenous culture or
            land.
            <InlineFootnote index={13} /> Instead, we have adopted an
            anticolonial approach.
            <InlineFootnote index={14} /> Having reflected on our team’s
            collective position over the course of creating this chapter, we
            have come to see our role—indeed, our responsibility—as
            illuminating the place of Shanawdithit and her maps in the long
            history of extracting Indigenous knowledge for colonial gain.
          </p>
          <p>
            This history is a violent one, as you no doubt already know. The
            additional details about Shanawdithit and her maps that follow,
            which involve yet more instances of violence and harm, underscore
            how the maps at the center of this chapter cannot be separated
            from the inherent violence of colonialism.
            <InlineFootnote index={15} /> While the history of visualization
            often elides such violence—think back to Playfair’s “simple”
            view of British trade data, which hides the human sources of its
            profits and losses—this chapter asks what it would mean to
            acknowledge this violence as a substrate of so many of our
            current visualization techniques. We do this not to dismiss all
            visualization as colonial. Rather, we do so to underscore a
            broader claim. This has to do with how the dominant view of the
            value of visualization—that is, following Playfair, its ability
            to distill insight from complex data such that knowledge can
            easily and efficiently emerge—sits uneasily close to the colonial
            practice of extracting knowledge from its source.
          </p>
          <p>
            As at previous moments in this project that have brought us to
            uncomfortable points, the response to this assertion is, we
            hope, not to close this browser tab and walk away. Rather, we
            hope it will serve as an invitation to consider how we all might
            design future visualizations, as well as reposition ourselves
            with respect to existing ones, in ways that enable the{" "}
            <em>creation</em> of knowledge without the <em>extraction</em> of
            knowledge. This consideration entails an attention to the lives
            behind the data, as we have explored in chapter 1, as well as to
            the forms of insight that visualizations are most often designed
            to promote (or not promote, as the case may be), as explored in
            chapter 2. As we will soon see in this chapter, the colonial
            frame that surrounds Shanawdithit’s maps prompts us to consider
            yet more: our relationships with the people who provide us with
            data and with those represented in it, and our responsibilities
            toward the knowledge that we, all together, create.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[0]} />

        <CenteredLayout className="pb-20">
          <p className="first-paragraph">
            We will now return to the story of Shanawdithit and her maps as
            it emerges from the colonial archive. As it turns out, this
            story passes directly through Demasduit, the young mother, and
            her own eventual fate. Demasduit was taken first to the fishing
            village of Twillingate and then in the spring, after the ice had
            cleared, to the colony of St. John’s. She made several attempts
            to escape her captors.
            <InlineFootnote index={16} /> At some point during this time, she
            contracted tuberculosis. She succumbed to the disease less than a
            year later, while aboard a boat that was intended to return her
            to her family, the British ultimately achieving a deadly version
            of their goal of retribution.
            <InlineFootnote index={17} />
          </p>
          <p>
            Shanawdithit was present the day that Demasduit’s body was
            returned to Beothuk Lake, and she participated in Demasduit’s
            burial ceremony, held over the course of several months the next
            spring. But the British would not learn of Shanawdithit until
            April 1823, when Shanawdithit was herself captured, along with
            her mother and her sister.
            <InlineFootnote index={18} />
          </p>
          <p>
            Like Demsaduit before them, the three women were taken to
            Twillingate, where they were held captive in the home of none
            other than John Peyton Jr., whose “stolen” goods had been the
            impetus for it all. Shanawdithit’s mother and sister soon died,
            also of tuberculosis. But Shanawdithit persevered. For five
            years, she was forced to work for Peyton as a domestic servant,
            before she too fell ill. Following Demasduit’s final path,
            Shanawdithit was then brought to St. John’s, where she spent six
            of the final weeks of her life in the home of William Epps
            Cormack.
            <InlineFootnote index={19} /> Cormack, the Newfoundland-born son
            of Scottish settlers who had earned early fame for his natural
            history of the island’s interior, was the one to supply
            Shanawdithit with “paper and pencils of various colours,” and
            who through some combination of enticement or coercion—we can
            never know—prompted her to create her maps.
          </p>
          <p>
            In the final weeks of her life, Shanawdithit drew five maps, each
            documenting a different area of Beothuk Lake and the events
            connected to it. The map that anchors this chapter is the second
            in the roughly chronological sequence.
            <InlineFootnote index={20} /> It presents a composite picture of
            the series of encounters between the Beothuk and the British that
            culminated in Demasduit’s capture and eventual death. In this and
            all of the maps, time is anchored by place.
          </p>
        </CenteredLayout>

        <SketchScrollytell
          figure={figures["0302-DRW-II"]}
          triggers={[
            <p key={"e39ab69e6343"}></p>,

            <Fragment key={"64563aa58b66"}>
              <p className="pl-4 md:pl0 w-9/12">
                The lower half of the map depicts an earlier encounter
                between the two groups, which took place on the south side of
                the lake in the winter of 1810–1811.
              </p>
              <p className="pl-4 md:pl0 w-9/12">
                Thirty or so figures appear along the bank of the river. The
                figures drawn in red are Beothuk. Those in black are the
                members of the British party, led by a Scottish naval officer
                named David Buchan. They are pictured after their initial
                meeting, which was enabled by Mi’kmaq and Innu guides.
                <InlineFootnote index={21} />
              </p>
            </Fragment>,

            <Fragment key={"169abcf87bbd"}>
              <p className="pl-4 md:pl0 w-9/12">
                The figures on the right side of the group—two black figures
                and four red ones—likely stand for two marines and four
                Beothuk whose distrust of the British (the result of several
                prior instances of kidnapping and murder) would result in the
                preemptive killing of the two marines the next day.
                <InlineFootnote index={22} />
              </p>
              <p className="pl-4 md:pl0 w-9/12">
                The two red figures oriented in the opposite direction may be
                the two Beothuk who briefly traveled with the British back to
                their camp before they were “told by signals to give chase,”
                as John Paul reports.
              </p>
            </Fragment>,

            <Fragment key={"7916e5d0e5a8"}>
              <p className="pl-4 md:pl0 w-9/12">
                Off to the east—the right side of the original map—is the
                Beothuk winter camp. Three triangles stand for the three
                dwellings, called mamateeks, which housed the group.
              </p>
              <p className="pl-4 md:pl0 w-9/12">
                Thirty-seven marks stand for each of the 37 inhabitants in
                the winter camp that year.
              </p>
            </Fragment>,

            <Fragment key={"9c9c69b1e9f8"}>
              <p className="pl-4 md:pl0 mb-0 w-9/12">
                The dotted lines on the map correspond to paths taken across
                the frozen lake. A convention employed by many Indigenous
                cultures across Turtle Island (as the North American
                continent is often called by Indigenous groups today), these
                paths would seem to represent both established foot trails
                and the actual trajectories that culminated in the events
                depicted.
                <InlineFootnote index={23} /> The lines also serve a
                narrative purpose; they connect the series of events depicted
                as well as the two sides of the lake.
              </p>
            </Fragment>,

            <Fragment key={"ae10d2dc17b5"}>
              <p className="pl-4 md:pl0 mb-0 w-9/12">
                On the north side, at the center of the shoreline, we also
                see several mamateeks—two drawn in black and a third in red.
                The red color and additional detail may indicate that this
                mamateek is the one covered in the sail that was stolen from
                Peyton’s boat.
              </p>
              <p className="pl-4 md:pl0 mb-0 w-9/12">
                A second set of mamateeks are positioned to the west of the
                winter camp. These may be the two mamateeks to which the
                Beothuk fled after the deadly encounter with Buchan’s men,
                but this is not certain.
                <InlineFootnote index={24} />
              </p>
            </Fragment>,

            <Fragment key={"a2f2fd540d3e"}>
              <p className="pl-4 md:pl-0 mb-0 w-9/12">
                As for Demasduit’s capture, we see several phases of the
                events superimposed. Viewed chronologically, we first see
                several settlers to the east, drawn in black, whom we can
                infer from Peyton’s narrative—and which Shanawdithit
                confirms—are some of Peyton’s men who have hidden themselves
                in order to surveil the Beothuk camp before their morning
                attack.
                <InlineFootnote index={25} />
              </p>
              <p className="pl-4 md:pl-0 mb-0 w-9/12">
                In the center of the map, we see several groups of red
                figures pictured along various footpaths; these, we might
                conclude, are the inhabitants of the winter camp who sought
                safety in the woods upon being attacked.
              </p>
            </Fragment>,

            <Fragment key={"c1d17c771fb8"}>
              <p className="pl-4 md:pl-0 mb-0 pb-2 md:pb-4 w-9/12">
                On the frozen lake is another group of figures. This cluster
                is composed of six figures in black and one in red,
                presumably Demasduit in the initial moment of her capture. To
                the left of that group is a large red figure, likely
                Nonosabasut depicted in the act of defending his wife. Just
                below the group is another red figure on the ground. Cormack
                claims that this figure represents Nonosabasut after being
                shot and killed. But Shanawdithit insists that <em>two</em>{" "}
                men were killed that day—the second being Nonosabasut’s
                brother, who also came to Demasduit’s aid.
                <InlineFootnote index={26} />
              </p>
            </Fragment>,

            <Fragment key={"6c38a5c0e417"}>
              <p className="pl-4 md:pl-0 md:py-2 my-0 w-9/12">
                Positioned between this tragic scene and the initial
                surveillance of the Beothuk camp is a pair of figures, one
                red and one black, which has been interpreted as Demasduit
                and one of her captors—perhaps Peyton himself.
                <InlineFootnote index={27} /> The man is leading her away
                from the home that she would never again visit alive.
              </p>
            </Fragment>,

            <p key={"fe50d3cdad8d"} className="h-screen md:h-auto"></p>,
          ]}
        />

        <CenteredLayout className="py-20">
          <p className="text-center font-power text-xl">***</p>
          <p>
            Already, the inextricability of the maps’ creation from the larger
            colonial project should be quite clear. But Cormack’s words lay
            the extractive nature of this project bare: “I keep her pretty
            busily employed in drawing historical representations of
            everything that suggests itself relating to her tribe, which I
            find is the best and readiest way of gathering information from
            her,” as he wrote in a letter in January 1829.
            <InlineFootnote index={28} /> Cormack’s sense of entitlement to
            Shanawdihit’s knowledge is here apparent.
          </p>
          <p>
            But Cormack’s entitlement is also documented on the map itself, in
            the form of the textual annotations, which were penned not by
            Shanawdithit but by Cormack. His handwriting encircles
            Shanawdithit’s image, registering not just the “information” he
            sought to extract from her but, more profoundly, the power that he
            held over her as her captor.
          </p>
          <p>
            And yet, this was only the first layer of how Shanawdithit’s
            knowledge would continue to be mined.
            <InlineFootnote index={29} /> In the early twentieth century, a
            British government official and geographer named James P. Howley
            redrew Shanawdithit’s maps for inclusion in his own book,{" "}
            <cite>
              The Beothucks or Red Indians: The Aboriginal Inhabitants of
              Newfoundland
            </cite>
            . Howley’s book is also the first place that Peyton’s narrative
            appears. In addition to certain aesthetic decisions, such as
            smoothing out Shanawdithit’s shading of the riverbanks, Howley
            also edited and rewrote Cormack’s annotations, removing the
            erroneous words that Cormack first recorded and then crossed
            out.
          </p>
          <p>
            This editorial decision underscores Howley’s sense of
            entitlement to Shanawdithit’s knowledge—his view of it as
            ethnographic information that could be easily severed from its
            source. This observation mirrors the broader critique of early
            ethnography as it emerged as an academic practice in the late
            nineteenth and early twentieth centuries.
            <InlineFootnote index={30} /> But we might push this claim
            further still, observing that the act of converting information
            into data—a required step in the visualization process—shares
            uncomfortable similarities with the processes in which Cormack
            and Howley both engaged.
          </p>
          <p>
            Our project team tried our hardest not to continue down this
            path. We chose not to convert Shanawdithit’s information into
            GIS data and plot it on a new map, for example. Even still, our
            model of slow and detailed explanation that you have just
            experienced is not dissimilar to the approach that Cormack and
            Howley both employed: of atomizing the map and clarifying the
            significance of its parts.
          </p>
          <p>
            Today, we still presume that the goal of visualization should be
            to clarify, and to enable deeper exploration only if required.
            <InlineFootnote index={31} /> But this approach leaves no room to
            consider how the process of clarifying the significance of the
            data runs the risk of further distancing the data from those who
            created it; or how enabling deeper exploration very often
            involves the transfer of explanatory power from those who
            created (or are represented in) the original data to ourselves.
            The point here, again, is not that we should never seek to
            visualize data. Rather, it is to underscore the importance of
            asking how we might undertake our visualization work more
            responsibly—that is, with more attention to, respect for, and
            engagement with, the people whose knowledge enables it.
          </p>
          <p>
            As a part of our team’s pursuit of our own answers to this
            question, we revised our initial diagram. In doing so, our goal
            was to clarify our own position with respect to the colonial
            frame.
          </p>
        </CenteredLayout>

        <div id="source map-2">
          <MapsExploration2></MapsExploration2>
        </div>

        <CenteredLayout>
          <Legend></Legend>
          <p>
            In this version, we add Cormack and Howley, along with
            ourselves, accentuating the layers of mediation that separate us
            from Shanawdithit’s firsthand knowledge of the original events.
            Here we are guided by Seneca literary scholar Mishuana Goeman,
            who emphasizes the importance of resisting the “utopian” yet
            ultimately impossible goal of recovery.
            <InlineFootnote index={32} /> No magnitude of desire or strength
            of effort, Goeman explains, can gain us access to “an original
            and pure point in history” before which all can be known.
            <InlineFootnote index={33} /> Shanawdithit’s maps exemplify this
            claim. Her direct knowledge is irrecoverable, and even if we
            could approximate it, the principles of Indigenous data
            sovereignty tell us that it is not ours to own.
          </p>
          <p>
            As visualization designers, we cannot change our reliance on
            data; it remains the substrate of all that we do. But what we
            can change is our awareness of our position with respect to the
            data we use and the visualizations we create. Put another way:
            when we think of data only through the (literal) marks and
            channels that represent it, we lose sight of how—and by
            whom—that data came to be.
            <InlineFootnote index={34} /> When we enter into a visualization
            project without sufficient regard for the data’s provenance, we
            often fail to recognize what knowledge may have already been
            lost in the process of separating that data from its source.
            <InlineFootnote index={35} /> It also becomes all the more
            difficult to consider any responsibility we might have to the
            people who created the data, the people whose data our
            visualizations represent, and the people who interact with our
            visualizations in their final form.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[1]} />
        <CenteredLayout>
          <p className="first-paragraph">
            The circumstances that surround the creation of Shanawdithit’s
            maps make it clear that we cannot view them as unmediated
            expressions of her worldview. Yet it is also clear that, despite
            Shanawdithit’s captivity and Cormack’s role in prompting the
            creation of the maps, Shanawdithit was able to incorporate many
            of her own ideas into the maps’ designs. This is evident in the
            fact that many of her design decisions were aligned with mapping
            practices then common among a number of Indigenous cultures
            across Turtle Island.
          </p>
          <p>
            As Indigenous cartographers Margaret Wickens Pearce (Potawatomi)
            and Renee Pualani Louis (Kanaka ʻŌiwi) explain, Indigenous
            mapping practices span cultures, continents, and genres, ranging
            from “Hawaiian performative cartographies to Navajo verbal maps
            and sand paintings and the Nuwuvi Salt Song Trail.” They also
            span multiple forms and “may be gestural, chanted, or inscribed
            in stone, wood, wall, tattoo, leaf, or paper.”
            <InlineFootnote index={36} /> What binds these examples together,
            for Pearce and Louis, as for other scholars of Indigenous
            cartography, is how they are understood as part of a larger{" "}
            <em>process</em> of knowledge-making, rather than as a
            definitive source of what is <em>there</em>.
            <InlineFootnote index={37} /> This process is premised on
            relationships among people as well as places, relationships
            that continue to acquire meaning as they unfold.
          </p>
          <p>
            The relational basis of Indigenous cartography is perhaps most
            visible in how, across this range of genres and forms, many maps
            express temporal rather than spatial points of view. We see this
            foregrounding of a temporal perspective emerge in Shanawdithit’s
            decision to depict a series of events, which transpired over
            decades, in the single place of Beothuk Lake. Cormack’s
            difficulty in determining what it was, precisely, that
            Shanawdithit had pictured on the page underscores its divergence
            from the spatial perspective that was (and remains)
            characteristic of colonial maps.
          </p>
          <p>
            By contrast, Shanawdithit very clearly saw her map as only one
            piece of a larger system. This is also indicated by her decision
            to include human figures on the map. The figures exemplify what
            Pearce characterizes as an emphasis on place{" "}
            <em>as it is experienced</em>, “as opposed to the Western
            convention of depicting space as universal, homogenized, and
            devoid of human experience.”
            <InlineFootnote index={38} />
          </p>
          <p>
            Along similar lines, geographer Laura Harjo (Mvskoke) theorizes
            the Mvskoke conception of the world as a “kin-space-time
            constellation,” which she explicitly contrasts with Cartesian
            mapping. We might further connect this idea to Edward Tufte’s
            famed formulation, with respect to Charles Minard, of the
            “space-time-story graphic.”
            <InlineFootnote index={39} /> Viewing Minard’s flow map alongside
            Howley’s recreation of Shanawdithit’s map is startlingly
            revealing, as the map is both more closely connected to
            Minard’s and more distinct than might initially appear.
          </p>

          <Figure
            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 items-baseline"
            figures={[figures["0313-howley-sketch2"], figures["0314-minard"]]}
          />

          <p>
            While the two maps appear to visually rhyme, human figures are
            wholly absent from Minard’s work. It follows, then, that Tufte’s
            formulation of the “space-time-story graphic” does not include
            kin. Shanawdithit’s maps, by contrast, make it impossible for
            their viewers to conceive of the land without people—more
            precisely, the people who first inhabited it.
            <InlineFootnote index={40} />
          </p>
          <p>
            Shanawdithit was not merely drawing her people, however; she was
            actually drawing herself. In the map at the center of this
            chapter, Shanawdithit appears in multiple places and in multiple
            forms: in the form of data as one of the 37 tick marks on the
            south side of the lake, and again on the north side as one of
            the figures in red that sought shelter in the woods. While she
            may have been recording “information” about her people for
            Cormack, to return to his words, she was also testifying to the
            events of her own life. It follows, then, that this map is also
            a document of Shanawdithit’s “survivance,” to enlist a term
            coined by Chippewa scholar Gerald Vizenor; in continued
            unfolding of colonial violence, he argues, survival constitutes
            an act of resistance in and of itself.
            <InlineFootnote index={41} />
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[2]} />

        <CenteredLayout>
          <p className="first-paragraph">
            Maps can literally create nations and dismantle others—a lesson
            that most Indigenous inhabitants of Turtle Island had learned
            well before the encounter between the Beothuk and Peyton and his
            men.
            <InlineFootnote index={42} /> Consider the end result of a
            seemingly innocuous encounter between Ac ko mok ki, a Siksika
            leader, and a surveyor for the Hudson’s Bay Company named Peter
            Fidler, which took place at an outpost just east of what is more
            commonly known today as Alberta in February 1801. When asked by
            Fidler about what lay further north and west, Ac ko mok ki
            traced in the snow—from memory—a map of more than 200,000 square
            miles of the continent. Fidler then copied the map onto paper
            “reduced ¼ from the original,” annotated it with the information
            he’d heard Ac ko mok ki speak aloud, and then sent the map back
            to the headquarters of the Hudson’s Bay Company in London.
          </p>
          <p>
            Ac ko mok ki’s knowledge was then incorporated into the map of
            the continent that the Hudson’s Bay Company had been preparing,
            and which three years later would be used by Meriwether Lewis
            and William Clark to determine the route for their expedition
            to the west coast.
            <InlineFootnote index={43} /> Their mission is widely recognized
            as authorizing the United States’ future claims to the full
            width of the continent, and seeding the idea of “manifest
            destiny” that would validate US territorial expansion into the
            next century and beyond. For the Indigenous knowledge that they
            consistently capture, and the dispossession they continually
            leave in their wake, such maps might be understood as
            weapons—weapons of map destruction, to adapt a phrase from Cathy
            O’Neil. They become tools to dismantle Indigenous sovereignty
            just as effectively as they consolidate the knowledge on which
            colonial power depends.
            <InlineFootnote index={44} />
          </p>
        </CenteredLayout>
        <CenteredLayout>
          <Figure figure={figures["0315-fidler-large-HBCA-E3-2-225"]} />
        </CenteredLayout>
        <TwoColumnLayout>
          <Column>
            <p>
              Another key example of how colonial maps consolidate
              knowledge, and further shape it, comes to us from a
              Connecticut-born woman by the name of Emma Hart Willard. An
              educator and activist—and student of data visualization, as
              will be further explored in chapter 4—Willard created nine
              maps to serve as the structuring images of her US history
              textbook.
            </p>
          </Column>
          <Column shouldPin>
            <ClientOnly>
              <div id="colonial-maps">
                <ColonialMaps />
              </div>
            </ClientOnly>
          </Column>
        </TwoColumnLayout>

        <DocumentViewer />

        <WillardScrollytell
          figure={figures["0326-Willard0"]}
          triggers={[
            <Fragment key={"7bd3ce1c5c9e"}>
              <p className="pl-4 md:pl0 w-9/12">
                Willard’s{" "}
                <cite>
                  History of the United States, or The Republic of America
                </cite>{" "}
                was first published in 1828, the same year that Shanawdithit
                created her maps. And yet, there is only one map in Willard’s
                set that features Indigenous peoples or nations: the map
                entitled “Introductory Map,” which appears before the “First
                Map” in the book.
              </p>
            </Fragment>,

            <Fragment key={"794f9397eb50"}>
              <p className="pl-4 md:pl0 w-9/12">
                The introductory map is subtitled “Locations and Wanderings
                of the Aboriginal Tribes,” a phrase that rejects the
                possibility of Indigenous agency through its description as
                “wanderings” of what was, in truth, a combination of
                seasonal and forced migration.
                <InlineFootnote index={45} />
              </p>
            </Fragment>,

            <Fragment key="98f807329ff5">
              <p className="pl-4 md:pl0 w-9/12">
                Willard places labels in the approximate locations of each
                Indigenous nation or tribe that she knew.
              </p>
            </Fragment>,

            <Fragment key={"849298f5b0bd"}>
              <p className="pl-4 md:pl0 w-9/12">
                She also circles each of the tribe’s names, with the size of
                the circle indicating its “size and relative influence.”
              </p>
            </Fragment>,

            <Fragment key={"9b7e0221a7b7"}>
              <p className="pl-4 md:pl0 mb-0 pb-2 md:pb-0 w-9/12">
                The color of the circles and the lines connecting them
                indicate affiliation and “migration,” in Willard’s terms,
                although a more accurate word would be displacement.
              </p>
            </Fragment>,

            <Fragment key={"81d65ca3c699"}>
              <p className="pl-4 md:pl0 mb-0 w-9/12">
                The perspective inhabited by the map is contradictory.
                Willard makes the clear choice to label certain geographic
                features with names intended to evoke an Indigenous
                worldview, such as “Salt water Lake or Great Water,” which
                she explains in the accompanying chapter are two names given
                by the Delaware people to the Atlantic Ocean at various
                times.
              </p>
            </Fragment>,

            <Fragment key={"5c1e0a77b3d2"}>
              <p className="pl-4 md:pl0 mb-0 w-9/12">
                Yet Willard also chooses to present this map as
                “introductory,” rather than accord it the position of “First
                Map.” That title is reserved for the map depicting the
                voyages of the European explorers, as previously discussed.
              </p>
            </Fragment>,

            <Fragment key={"b93f4c2ae815"}>
              <p className="pl-4 md:pl0 mb-0 w-9/12">
                More pointedly, Willard never again employs the same color and
                label combination to designate Indigenous sovereignty. Peoples
                such as the Beothuk are not granted a place in the future of
                North America, only its past.
                <InlineFootnote index={46} />
              </p>
            </Fragment>,

            <p key={"16404594c86e"} className="h-[50vh] md:h-auto"></p>,
          ]}
        />

        <CenteredLayout className="pt-20">
          <p>
            This view is confirmed when considering Willard’s work as an
            example of the “thematic map” genre. Such maps can be analyzed
            in terms of the layers of data that they visualize, and the
            designer’s choices about how to order them.
            <InlineFootnote index={47} /> Generally, whatever data is
            plotted as the bottom layer of the map is presumed to be stable
            and true. In this way, as historian and cartographer Bill
            Rankin has observed, it accords whatever dataset is placed at
            the bottom the status of incontrovertible fact. In the case of
            Willard’s map, we might observe how she places the borders of
            the not yet extant United States as its base layer, presenting
            them as the literal ground truth on which Native peoples are
            only temporarily superimposed.
          </p>
          <p>
            Returning to Shanawdithit’s map, we can consider the parallel
            claims implied by its “kin-space-time constellation.” In
            rejecting the distinctions among layers, and by presenting
            people, place, and time in a single visual plane, Shanawdithit
            insists on her cultural as well as geographic authority. She
            seeks to unify the many stories that connect people to the
            land, across past, present, and future. While we cannot know
            the exact stories that order those relations, we can recognize
            the additional stories that have shaped our relationship to the
            map ever since (and, in truth, even before) it was set to the
            page.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[3]} />
        <CenteredLayout>
          <p className="first-paragraph">
            About a decade after Shanawdithit set her maps to paper, just
            over a thousand miles to the west, two men—likely Ojibwe—stood
            atop a ridge between Lake Huron and the Ottawa River. They were
            a day ahead of the rest of their group, and wanted to inform
            those behind them of the progress and future itinerary of their
            trip. So one or both of the men did something they had done
            countless times before. They etched a kikaigon, or directional
            map, into a piece of birch bark and attached it to a tree. The
            map depicts the men’s path across Lake Huron, including the
            location of the campsite where they had spent the night, as
            well as the canoe they were using to travel. Two vertical lines
            drawn inside the canoe, each attached to an oar, represent the
            men themselves. The map suggests that they planned to continue
            down the Ottawa River, perhaps all the way to Montreal, another
            400 miles away.
            <InlineFootnote index={48} />
          </p>
        </CenteredLayout>

        <Figure
          figure={figures["0327-birch-bark-1841"]}
          className="mx-2 md:mx-12 text-sm md:text-base"
          captionClassName="text-center"
        />

        <CenteredLayout className="pb-20">
          <p>
            We do not know whether the other members of the group ever saw
            the map. We do know, however, that it was seen by one Captain
            Bainbrigge, of the Royal Engineers. We know this because
            Bainbrigge took the map off the tree and affixed it to a larger
            sheet of rag paper. Below the original, he drew his own copy of
            the map, replacing the vertical hash marks used to indicate the
            men’s route with more constrained dotted lines, but keeping the
            icons used to indicate the camp, the canoe, and the men. He
            added an indication of the direction of the river and several
            other annotations, as well as a pejorative note.
            <InlineFootnote index={49} /> He then sent the map back to
            England, where it eventually arrived at the British Library. As
            a result, it has earned distinction as the oldest known example
            of a birch bark map to have been preserved.
            <InlineFootnote index={50} />
          </p>

          <p>
            Yet Bainbrigge’s preservation of the map flattens it—and not
            only in a literal sense. By removing it from the time, place,
            and people for whom its insights were intended, Bainbrigge
            removes much of its meaning. His annotations, even more than
            Cormack’s, impose his own negative assessment of its value. And
            because the original map and Bainbrigge’s copy are literally on
            the same page, this assessment is impossible for contemporary
            viewers to ignore. But these limitations offer a different kind
            of insight to us today—of the necessary limits of our own
            efforts to seek knowledge with visualization, which are often
            (but not always) the result of the colonial frame.
          </p>
          <p>
            This form of insight can be generative indeed. Here we might
            consider <cite>Birch Bark</cite>, a digital artwork by the
            contemporary artist Sarah Sense (Chitimacha/Choctaw). In{" "}
            <cite>Birch Bark</cite>, Sense employs her own ancestral
            basket-weaving techniques as a way to interrupt the
            unidirectional process of knowledge extraction that the
            Bainbrigge map records. Her process “re-Indigenizes” the map, as
            she explains in the accompanying artist’s statement, redirecting
            some of the map’s meaning-making force.
            <InlineFootnote index={51} />
          </p>
          <p>
            In <cite>Birch Bark</cite>, the “warp” of the image—what in
            basket-weaving practice is viewed as the more passive layer,
            since it serves as the basket’s base—is a reproduction of the
            Bainbrigge map. Woven through the map, in patterns derived from
            Sense’s own Chitimacha and Choctaw heritage, is a photograph of
            the land. Considered as a thematic map, Sense’s choice to make
            the land the more active “weft,” the layer controlling the
            pattern that is produced, contests the authority of the map
            that serves as its base.
          </p>
        </CenteredLayout>

        <Figure
          figure={figures["0328-BirchBark"]}
          captionClassName="text-center	md:mx-8"
        />

        <CenteredLayout>
          <p>
            Our project team returned to Sense’s image multiple times when
            considering how we might similarly infuse Shanawdithit’s map
            with new meaning. But ultimately, we recalled the lessons of
            this chapter, reminding ourselves that Shanawdithit’s map was
            not ours to further mine. We thus turned back toward the
            archive that set our story in motion, and asked ourselves how
            we might employ our own perspectives, and our skills, to
            contest the authority of the colonial archive from within.
          </p>
          <p>
            One particular passage seemed to hold the key to this effort. It
            is a lengthy footnote that appears in Peyton’s narrative:
          </p>

          <Quotation
            quote={
              <>
                Mr. Peyton afterwards learned from the woman Shanawdithit,
                the full particulars of the manner in which his boat was
                stolen. She was present all the time and knew every incident
                connected with this event. As Mr. P. rightly conjectured, it
                appears the Indians were watching all his movements very
                closely. There was a high wooded ridge behind his house,
                which from its peculiar outline had been named Canoe Hill.
                It bore some resemblance to a canoe turned bottom up. One
                tall birch tree on the summit of this ridge, (still standing
                at the time of my first visit in 1871), was pointed out by
                Shanawdithit as the lookout from whence the Indians observed
                Peyton’s movements, during several days preceding the
                depredation. She also informed him, that when he paid his
                last visit of inspection to the long wharf before the
                taking of the boat, that the Indians were actually hidden in
                their canoe beneath the wharf, but kept so perfectly
                motionless, that in the dense darkness he did not observe
                their presence.
                <InlineFootnote index={52} />
              </>
            }
            byline="John Peyton, as related to James P. Howley and recorded in The Beothucks, 96"
          ></Quotation>

          <p>
            Here in this footnote, perhaps deliberately relegated to the
            bottom of the page, is the suggestion of a version of the events
            that contests the authority of Peyton’s account. In this
            version, Shanawdithit serves as the authoritative source of
            knowledge, since she “was present all the time and knew every
            incident connected with this event.” Peyton, meanwhile, only
            learns “the full particulars” from Shanawdithit after the fact.
            With this evidence of an earlier phase of surveillance, one far
            more sustained, in which the Beothuk “observed Peyton’s
            movements” for “several days preceding the depredation” from
            the tree, it is the Beothuk—and not the British—who are in
            control.
            <InlineFootnote index={53} />
          </p>

          <p>
            The footnote also helps us to draw out a second theme. We have
            already discussed how Shanawdithit’s maps are mediated
            documents. But this footnote shows how Peyton’s narrative is
            mediated as well. It was filtered not only through his eyes but
            through his memory, recorded late in his life, in 1871—nearly a
            half-century after the original events transpired—by none other
            than James Howley. It was then rewritten by Howley for the
            publication of his book.
          </p>

          <p>
            But Peyton’s is not the only account that has been filtered
            through memory (or power or time). John Paul’s account was also
            recorded in the twentieth century, by an American anthropologist
            named Frank Speck, who published it in his own book on the
            Beothuk and Mi’kmaq in 1922.
            <InlineFootnote index={54} /> Speck’s book, interestingly, also
            contains a series of photographs, which he took during his own
            visit to Newfoundland in the summer of 1914. One of these
            photographs is of a lookout tree.
          </p>

          <Figure figure={figures["0329-speck-tree-p13"]} />

          <p>
            This lookout tree is not the same as the “tall birch tree” that
            Shanawdithit told Peyton about, as Speck labels it as being
            located at Red Indian (now Beothuk) Point and identifies it as a
            “large white spruce.”
            <InlineFootnote index={55} /> But it remains resonant
            nonetheless, especially since he provides a second photo: a view
            from the top.
          </p>

          <Figure figure={figures["0330-speck-tree-p14"]} />

          <p>
            For Speck, the view from the top of the tree suggests a window
            in an unmediated past, a sense of what the Beothuk themselves
            might have seen.
            <InlineFootnote index={55} /> “I climbed [the tree] to
            experience the sensation of observing these wastes”—an archaic
            term for uncultivated land—“from the vantage point of the
            ancients,” he explains. Needless to say, his presumption that he
            could “experience the sensation” of Shanawdithit and her people
            by, one hundred years later, climbing the same tree, is just
            that—a presumption. But what if we understood Speck’s view from
            the lookout tree differently? In terms of his own “vantage
            point,” and ours?
          </p>

          <p>
            When I first encountered this photo, in a low-res scan of
            Speck’s book made available online via the Internet Archive, I
            wasn’t entirely sure what it showed. Speck’s focus on the view
            across the lake meant that the foreground was quite blurry. It
            wasn’t until I traveled to St. John’s myself that I realized
            what was at the center of the image: a covering of low, dense
            clouds. Clouds are everywhere in St. John’s.
            <InlineFootnote index={56} /> Evidently, they were in Speck’s
            time as well. In the end, his clouded view may well have been
            similar to the “vantage point of the ancients” that he thought
            he could capture by his photo from the top of the tree. But I
            believe that Speck captured even more: a metaphor for the
            mediated nature of his own vantage point, and, in turn, of ours
            today.
            <InlineFootnote index={57} />
          </p>

          <p>
            Over one hundred years after Speck’s visit to the Beothuk winter
            camp, and another hundred years after the British attack and
            the devastation that ensued, we would seem to have an
            unprecedented ability to capture conditions past and present.
            From the ever-increasing array of sophisticated mapping and
            visualization tools, to the always expanding capabilities of
            digital photography, now coupled with AI, it is tempting to
            assume that our potential insights are limited only by our
            ability to imagine how we might clarify what is currently
            clouding our metaphorical (or actual) view. But as this chapter
            has sought to show, we can learn as much from the clouds we
            encounter as we can from what they conceal.
          </p>

          <p>
            Once we learn to see what separates us from the sources of
            information that we rely upon in our work, we can, furthermore,
            begin the work of repair. We can work to identify the additional
            people whose perspectives might complement our own. We can
            identify the relationships we might begin to (or better)
            cultivate in order to ensure true collective benefit. And we can
            identify the responsibilities we carry—to the people who will
            seek insight from our work in the future, to those we work with
            in the present, and to those who created our sources of data in
            the past.
          </p>

          <p>
            We thus close with a final diagram of the sources of this
            chapter, recentered around the lookout tree.
            <InlineFootnote index={58} /> It remains an incomplete picture,
            but its incompleteness—like Speck’s clouds over Beothuk
            Lake—is intended as a guide: of how we can pursue more complete
            knowledge in our design and viewing practices, just as we
            recognize what we must leave for others to explore.
          </p>
        </CenteredLayout>
        <div id="maps-exploration-3">
          <MapsExploration3></MapsExploration3>
        </div>

        <CenteredLayout>
          <div className="mx-auto place-content-center">
            <Legend></Legend>
          </div>
        </CenteredLayout>

        <Takeaways
          forDesigners={[
            <span key="df782d45">
              Examine your responsibility to your data and its stewards
            </span>,
            <span key="6440631a">
              Aim to keep your data more connected to its source
            </span>,
            <span key="2f317172">
              Balance clarity with context and connection
            </span>,
            <span key="2f317173">
              Allow for the possibility of not visualizing at all
            </span>,
          ]}
          forViewers={[
            <span key="75cf526a">
              Resist the extraction of knowledge from its source
            </span>,
            <span key="6d2691fc">
              Consider your relation to the colonial frame
            </span>,
            <span key="9650286d">
              Recognize the people who enable your knowledge
            </span>,
            <span key="2f317174">
              Accept when that knowledge is not yours to own
            </span>,
          ]}
        />
      </ChapterBody>
      <CenteredLayout>
        <FootnotesList footnotes={peopleFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
