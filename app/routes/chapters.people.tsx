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
import HoverText from "~/components/HoverText";
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
import { missing } from "~/data/figures/missing";

export const meta: MetaFunction = () => {
  return chapterMetaTags("people");
};

const sections = [
  {
    title: "Visualization as Knowledge Extraction",
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
    title: "The Birch-Bark Map and the Lookout Tree",
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
            One morning in March 1819, at the first break of dawn, a small group
            of Beothuk people—the Indigenous inhabitants of the island now more
            commonly known as Newfoundland—were awakened by the sound of
            intruders. <InlineFootnote index={0} /> The group had been asleep at
            their winter camp on the north side of Beothuk Lake, a long and
            narrow body of water at the island’s center, when a half dozen or so
            British settlers had surrounded them. <InlineFootnote index={1} />
            While the settlers’ intentions were not yet known, the Beothuk had
            cause for alarm. Every previous encounter with the British had ended
            in destruction and death. This encounter would soon result in the
            same.
          </p>
          <p>
            The Beothuk had been navigating European incursions for centuries.
            Some speculate that the mention of “scraelings” in the Norse Sagas
            refers to ancestors of the Beothuk, which would date a first
            encounter to the eleventh century.
            <InlineFootnote index={2} /> A second phase of more sustained
            contact began shortly after the Italian explorer John Cabot’s
            initial visit to the island, in 1497, and persisted for the next two
            hundred years.
            <InlineFootnote index={3} /> During this time, says environmental
            humanities scholar Fiona Polack, “fishing crews from Spain,
            Portugal, France, and Britain would spend the summer months catching
            and processing cod before returning home for the winter.”
            <InlineFootnote index={4} /> The seasonal nature of these stays
            granted the Beothuk “periods of unimpeded access to valuable
            materials, such as metal objects left in unattended fishing
            stations, and reduced the need for them to interact directly with
            the invaders.”
            <InlineFootnote index={5} /> Polack also documents how this
            arrangement—to which, of course, the Beothuk had no choice but to
            consent—began to strain as “increasing numbers of people from the
            British isles began to settle permanently on the island and compete
            directly with the Beothuk for resources.”{" "}
            <InlineFootnote index={6} /> It was this competition for resources,
            compounded over centuries, that in no small part led the British to
            Beothuk Lake that day.
          </p>
          <p>
            But there were other, more direct reasons: several months earlier,
            on September 18, 1818, it was a group of Beothuk who had surprised
            the same British settlers as they were preparing for a trip to
            market. Hidden in a canoe under a wharf at Lower Sandy Point, in the
            Bay of Exploits—north and east of Beothuk Lake, where its waters met
            up with the sea—the Beothuk waited for the “dense darkness” of night
            and then absconded with a boat carrying the season’s catch of
            salmon, and possibly some furs.
            <InlineFootnote index={7} /> This “theft and act of destruction”
            provided the rationale for John Peyton Jr., the owner of the boat
            (whose personal narrative serves as the source of the direct
            quotations here) to request formal authorization from the governor
            of colonial Newfoundland to “search for his stolen property and, if
            possible, try and capture one of the Indians alive.”
            <InlineFootnote index={8} />
          </p>
          <p>
            Those at the winter camp did not know about the kidnapping
            authorization when they awoke that morning in March. But within
            minutes, the settlers’ goal became clear. When the Beothuk fled to
            the woods, one woman, Demasduit, fell behind and was immediately set
            upon by the British. She “pointed out to the white men her full
            breasts to show that she had a child, and pointed up to the heavens
            to implore them, in God’s mercy, to allow her to return to her
            child,” but they “took hold of her,” recalled John Paul, a
            Mi’kmaq-Innu man whose grandfather had been alive (but not present)
            at the time of the original events.
            <InlineFootnote index={9} /> Demasduit’s partner, a man named
            Nonosabasut, “came to her aid,” but Peyton shot and killed him. Two
            days later, the child of Demasduit and Nonosabasut died as
            well—likely the result of starvation. One other young woman,
            Shanawdithit, who was then around seventeen, bore witness to it all.
            <InlineFootnote index={10} />{" "}
          </p>
          <p>
            Shanawdithit’s hand-drawn maps, which constitute the core of this
            chapter, offer documentation of these events in visual form. But in
            exploring the maps here, our goal is not to argue for the utility of
            Beothuk cartographic techniques for the field of data visualization,
            nor is it to analyze the broader theories of knowledge production
            that they reflect.
            <InlineFootnote index={11} /> Rather, the argument we present in
            this chapter is about the colonial context that gave rise to the
            maps’ creation, and about how that context—what we call here the{" "}
            <em>colonial frame</em>—must be considered alongside any knowledge
            that the maps themselves bring to light.
          </p>
          <div id="source map">
            <MapsExploration></MapsExploration>
          </div>
          <Legend></Legend>
          <p>
            This is the reason we are breaking the mold of the previous chapters
            by presenting you with this diagram before we present the original
            maps. This diagram was designed by Tanvi, with input from Lauren, as
            a way to give this colonial frame visual presence. The years lead
            out from the center, beginning with the first documented encounter
            between the Beothuk and British groups. But the time scale we employ
            is not linear; instead, the layers mark the major events that
            culminated in the creation of the three primary sources that we rely
            upon here. The shaded section at the top right of the diagram
            displays the series of events that culminated in Shanawdithit’s maps
            entering the colonial archive; the section in the middle indicates
            those of John Peyton Jr.’s narrative; and the section at the bottom
            indicates those of John Paul’s oral history. Around them is open
            space. While additional areas will be filled in as this chapter
            unfolds, some areas will remain open. The unfilled space is there to
            remind us of our distancefrom the past, and of what we—the project
            team, and therefore you our readers—cannot and can never know.
          </p>
          <p>
            Our focus on our team’s perspective is intentional. At various
            points in this project—in the Preface, for example, and in our
            visualization of the Trans-Atlantic Slave Trade database that
            appears in Chapter 1—we have been explicit about acknowledging the
            positions from which our work takes place. Here is another place
            where these positions matter, since research involving sources that
            document Indigenous cultures should be guided by the relationships
            among those sources, the people who steward their legacy, and the
            research team.
            <InlineFootnote index={12} /> Our project does not contain any
            Indigenous team members, and while Tanvi is from India, which has
            its own colonial history, and other team members call other
            countries home, our team is firmly based in the United States—on
            Mvskoke, Lenape, Tongva land. <InlineFootnote index={13} />
            As such, our work cannot by definition be decolonial, as it is not
            led by Indigenous people nor does not involve the repatriation of
            Indigenous culture or land.
            <InlineFootnote index={14} />
            Instead, we aspire to an anticolonial stance.{" "}
            <InlineFootnote index={15} />
            Having reflected on our team’s shared position over the course of
            creating this chapter, we have come to see our role—indeed, our
            responsibility—as not to argue for the utility of Shanawdithit’s
            mapping techniques for data visualization, but rather, to illuminate
            their place in the long history of extracting Indigenous knowledge
            for colonial gain.
          </p>
          <p>
            This history is a violent one, as the Introduction has sought to
            establish (and you no doubt already know). The additional details
            about Shanawdithit and her maps that follow, which involve yet more
            instances of violence and harm, underscore how the maps at the
            center of this chapter cannot be separated from the inherent
            violence of colonialism. <InlineFootnote index={16} />
            While the history of visualization often elides such violence—think
            back to Playfair’s “simple” view of British trade data, which hides
            the human sources of its profits and losses—this chapter asks what
            it would mean to acknowledge this violence as a substrate of so many
            of our current visualization techniques. We do this not to dismiss
            all visualization as colonial. Rather, we do so to underscore a
            broader claim. This has to do with how the dominant view of the
            value of visualization—that is, following Playfair, its ability to
            distill insight from complex data such that knowledge can easily and
            efficiently emerge—sits uneasily close to the colonial practice of
            extracting knowledge from its source.
          </p>
          <p>
            As at previous moments in this project that have brought us to
            uncomfortable points, the response to this assertion is, we (all our
            team members) hope, not to close this book and walk away. Rather, we
            hope it will serve as an invitation to consider how we all might
            design future data visualizations, as well as reposition ourselves
            with respect to existing ones, in ways that enable the creation of
            knowledge without the extraction of knowledge. This consideration
            entails an attention to the lives behind the data, as we have
            explored in Chapter 1, as well as to the forms of insight that
            visualizations are most often designed to promote (or not promote,
            as the case may be), as explored in Chapter 2. As we will see in
            this chapter, the colonial frame that surrounds Shanawdithit’s maps
            prompts us to consider yet more: our relationships with the people
            who provide us with data and with those represented in it, and our
            responsibilities towards the knowledge that we, together, create.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[0]} />

        <CenteredLayout className="pb-20">
          <p className="first-paragraph">
            With the importance of relationships and responsibilities in mind,
            we now return to the story of Shanawdithit and her maps as it
            emerges from the colonial archive. As it turns out, this story
            passes directly through Demasduit, the young mother, and her own
            eventual fate. Demasduit was taken first to the fishing village of
            Twillingate and then in the spring, after the ice had cleared, to
            the colony of St. John's. She made several attempts to escape her
            captors.
            <InlineFootnote index={17} />
            At some point during this time, she contracted tuberculosis. She
            succumbed to the disease less than a year later, while aboard a boat
            that was intended to return her to her family, the British
            ultimately achieving a deadly version of their goal of retribution.{" "}
            <InlineFootnote index={18} />
          </p>
          <p>
            Shanawdithit was present the day that Demasduit’s body was returned
            to Beothuk Lake, and she participated in Demasduit’s burial
            ceremony, held over the course of several months the next spring.
            But the British would not learn of Shanawdithit until four years
            later, in April 1823, when Shanawdithit was herself captured, along
            with her mother and her sister. The three women had been heading “to
            the seacoast in search of mussels to subsist on,” following another
            winter in which food had been scarce and illness had been plentiful.
            A different group of British settlers—furriers, this time—came
            across them.
            <InlineFootnote index={19} /> Concluding that it had become too
            difficult to continue to keep themselves alive, according to another
            British account, Shanawdithit and her kin “allowed themselves in
            despair to be quietly captured.” <InlineFootnote index={20} />
          </p>
          <p>
            Like Demsaduit before them, the three women were taken to
            Twillingate, where they were held captive in the home of none other
            than John Peyton Jr., whose “stolen” goods had been the impetus for
            this all. Shanawdithit’s mother and sister soon died, also of
            tuberculosis. But Shanawdithit persevered. For five years, she was
            forced to work for Peyton as a domestic servant, before she too fell
            ill. Following Demasduit’s final path, Shanawdithit was then brought
            to St. John’s, where she spent six of the final weeks of her life in
            the home of William Epps Cormack.
            <InlineFootnote index={21} /> Cormack, the Newfoundland-born son of
            Scottish settlers who’d earned early fame as for his natural history
            of the island’s interior, was the one to supply Shanawdithit with
            “paper and pencils of various colours,” and who through some
            combination of enticement or coercion—we can never know—prompted her
            to create her maps.
          </p>
        </CenteredLayout>

        <SketchScrollytell
          figure={figures["0302-DRW-II"]}
          triggers={[
            <p key={"e39ab69e6343"}></p>,

            <Fragment key={"64563aa58b66"}>
              <p className="pl-4 md:pl0 w-9/12">
                In the final weeks of her life, Shanawdithit drew five maps,
                each documenting a different area of Beothuk Lake and the events
                connected to it. She also created five additional drawings that
                documented additional aspects of Beothuk tradition, culture, and
                daily life. This map is the second in a roughly chronological
                sequence, spanning several decades.
                <InlineFootnote index={22} /> It presents a composite picture of
                the series of encounters between the Beothuk and the British
                that culminated in Demasduit’s capture and eventual death. In
                this and all of the maps, time is anchored by place.
              </p>
              <p className="pl-4 md:pl0 w-9/12">
                The lower half of the map depicts an earlier encounter between
                the two groups, which took place on the south side of the lake
                in the winter of 1810-11. Twenty or so figures appear along the
                bank of the river. The figures drawn in red are Beothuk. Those
                in black are the members of the British party, led by a Scottish
                naval officer named David Buchan. They are pictured after their
                initial meeting, which was enabled by Mi’kmaq and Innu guides
                <InlineFootnote index={23} />
              </p>
              <p className="pl-4 md:pl0 w-9/12">
                The group of figures set to the right of the larger group—two
                black figures and four red ones—likely stand for two marines and
                four Beothuk whose distrust of the settlers (the result of
                several prior instances of kidnapping and murder) would result
                in the preemptive killing of the two marines the next day.
                <InlineFootnote index={24} /> The two red figures oriented in
                the opposite direction may be the two Beothuk who briefly
                traveled with the British back to their camp before they were
                “told by signals to give chase,” as John Paul reports. The two
                red figures oriented in the opposite direction may be the two
                Beothuk who briefly traveled with the British back to their camp
                before they were "told by signals to give chase," as John Paul
                reports.
              </p>
              <p className="h-[50vh]" />
            </Fragment>,

            <Fragment key={"169abcf87bbd"}>
              <p className="pl-4 md:pl0 w-9/12">
                Off to the east—the right side of the page—is the Beothuk winter
                camp. Three triangles stand for the three dwellings, called
                mamateeks, which housed the group. Thirty-seven marks stand for
                each of the 37 inhabitants in the winter camp that year. The
                dotted lines on the map correspond to paths taken across the
                frozen lake. A convention employed by many Indigenous cultures
                across Turtle Island, these paths would seem to represent both
                established foot-trails and the actual trajectories that
                culminated in the events depicted. <InlineFootnote index={25} />{" "}
                Notably, the lines serve a narrative purpose as well as a
                geographical one; they connect the series of events depicted as
                well as the two sides of the lake.
              </p>
            </Fragment>,

            <Fragment key={"7916e5d0e5a8"}>
              <p className="pl-4 md:pl0 mb-0 pb-2 md:pb-0 w-9/12">
                On the north side we also see several mamateeks—two drawn in red
                at the center of the shoreline, and a third drawn in black just
                off to the east. The black color and rectangular shape indicates
                that it is covered in the sail that was stolen from Peyton’s
                boat, in the episode described at the outset of this chapter. A
                second set of mamateeks are positioned to the west of the winter
                camp; these may be the two mamateeks to which the Beothuk fled
                after the deadly encounter with Buchan’s men, but this is not
                certain.
                <InlineFootnote index={26} />
              </p>
            </Fragment>,

            <Fragment key={"9c9c69b1e9f8"}>
              <p className="pl-4 md:pl0 mb-0 w-9/12">
                As for Demasduit’s capture, we see several phases of the events
                superimposed. Viewed chronologically, we first see several
                settlers to the east, drawn in black, whom we can infer from
                Peyton’s narrative, and which Shanawdithit confirms, are some of
                Peyton’s men who have hidden themselves in order to surveil the
                Beothuk camp before their morning attack.
                <InlineFootnote index={27} /> In the center of the map we see
                several groups of red figures pictured along various footpaths;
                these, we might conclude, are the inhabitants of the winter camp
                who sought safety in the woods upon being attacked.
              </p>
            </Fragment>,

            <Fragment key={"ae10d2dc17b5"}>
              <p className="pl-4 pb-4lmd:p-0 mb-0 w-9/12">
                On the frozen lake is another group of figures. The main cluster
                is composed of six figures in black and one in red, presumably
                Demasduit in the initial moment of capture. To the left of that
                group is a large red figure, likely Nonosabasut depicted in the
                act of defending his wife. Just south of the group is another
                red figure on the ground. While Cormack claims that this figure
                represents Nonosabasut after being shot and killed, Shanawdithit
                insists that <em>two</em> men were killed that day—the second
                being Nonosabasut’s brother, who also came to Demasduit’s aid.
                <InlineFootnote index={28} />
              </p>
            </Fragment>,

            <Fragment key={"a2f2fd540d3e"}>
              <p className="pl-4 md:pl-0 mb-0 pb-2 md:pb-4 w-9/12">
                Positioned between this tragic scene and the initial
                surveillance of the Beothuk camp is a pair of figures, one red
                and one black, which has been interpreted as Demasduit and one
                of her captors—perhaps Peyton himself.{" "}
                <InlineFootnote index={29} /> The man is leading her away from
                the home that she would never again visit alive. .
              </p>
            </Fragment>,

            <Fragment key={"c1d17c771fb8"}>
              <p className="pl-4 md:pl-0 mb-0 pb-2 md:pb-4 w-9/12">
                Already, the inextricability of the maps’ creation from the
                larger colonial project should be quite clear. But Cormack’s own
                words lay the extractive nature of this project bare: “I keep
                her pretty busily employed in drawing historical representations
                of everything that suggests itself relating to her tribe, which
                I find is the best and readiest way of gathering information
                from her,” as he wrote in a letter to the Bishop of Nova Scotia
                in January 1829. <InlineFootnote index={30} /> Cormack’s sense
                of entitlement to Shanawdihit’s knowledge is here apparent.
              </p>
            </Fragment>,

            <Fragment key={"6c38a5c0e417"}>
              <p className="pl-4 md:pl-0 md:py-2 my-0 w-9/12">
                Cormack’s entitlement is also documented on the map itself, in
                the form of the textual annotations, which were penned not by
                Shanawdithit but by Cormack, likely at the same time that
                Shanawdithit set her own lines to the page. Cormack's
                handwriting encircles Shanawdithit’s image, registering not just
                the “information” he sought to extract from her but, more
                profoundly, the power that he held over her as her captor, power
                that also colors the information presented on the map.
              </p>
            </Fragment>,

            <p key={"fe50d3cdad8d"} className="h-screen md:h-auto"></p>,
          ]}
        />

        <CenteredLayout className="py-20">
          <p>
            But Cormack’s direct extraction of Shanawdithit’s knowledge was only
            the first layer of how her knowledge has been mined.
            <InlineFootnote index={31} /> In the early twentieth century, a
            British government official and geographer named James P. Howley
            redrew Shanawdithit’s maps for inclusion in his own book,
            <cite>The Beothucks or Red Indians</cite> , which is also the first
            place that Peyton’s narrative appears. In addition to certain
            aesthetic decisions, such as smoothing out Shanawdithit’s shading of
            the riverbanks, which had the effect of erasing the individual
            pencil strokes that more directly link Shanawdithit to the creation
            of her map, Howley also edited and re-wrote Cormack’s annotations,
            removing the erroneous words that Cormack first recorded and then
            crossed out.
          </p>

          <p>
            This editorial decision underscores Howley’s own sense of
            entitlement to Shanawdithit’s knowledge, and his view of it as
            ethnographic information that could be easily severed from its
            source. This observation mirrors the broader critique of early
            ethnography as it emerged as an academic practice in the late
            nineteenth and early twentieth centuries in Europe and the United
            States. <InlineFootnote index={32} />
            But we might push this further still, observing that the act of
            converting information into data—a required step in the
            visualization process—shares uncomfortable similarities with this
            extractive process, in that the act of datafication very often also
            becomes one of severing information from its source.
          </p>

          <p>
            With this in mind, our project team made the decision not to follow
            down Howley’s path. While we could have easily converted
            Shanawdithit’s information into GIS data and plotted it on a new
            map, we did not want to further the extractive process that was set
            in motion with Cormack—and, arguably, centuries before.
            Nevertheless, we are still implicated in this process. While we
            consciously prioritized Indigenous sources in constructing our
            account of the original map, just as we sought to use contemporary
            Indigenous scholarship to guide our interpretation, our model of
            interactive explanation—the same we use to structure the start of
            each chapter of this book—is still not dissimilar from the approach
            that Cormack and Howley both employed: of atomizing the map and
            clarifying the significance of its various parts.
          </p>
          <p>
            This observation leads to a more general claim. Today, we still
            presume that the goal of visualization should be to clarify, and to
            enable deeper exploration only if required. The well-known “Visual
            Information-Seeking Mantra,” also discussed in Chapter 2,
            exemplifies this approach.
            <InlineFootnote index={33} /> But this approach leaves no room to
            consider how the process of clarifying the significance of the data
            runs the risk of further distancing the data from those who created
            it, or how enabling deeper exploration very often involves the
            transfer of explanatory power from those who created (or are
            represented in) the original data—or in this case, the original
            image—to ourselves. The point here, again, is not that we should
            never seek to visualize data. Rather, it is to ask how we might
            undertake this work more responsibly—that is, with more attention
            to, respect for, and engagement with, the people whose knowledge
            enables it.
          </p>
          <p>
            We are by no means the first visualization researchers to ask these
            questions, nor are we the first to explore possible answers.
            Centuries of experiencing the effects of knowledge extraction, as
            well as a blatant disregard for responsibility, have motivated a
            range of Indigenous scholars to develop principles for maintaining
            Indigenous data sovereignty and governance.
            <InlineFootnote index={34} /> In the past several years, several
            teams of students and scholars, as well as members of nonprofit
            groups, have sought to develop a parallel set of Indigenous
            visualization practices, those that similarly elevate questions of
            relationality and responsibility, as well as access and control.
            <InlineFootnote index={35} />
            Inspired by these efforts, and seeking to align them with our
            project team’s anticolonial aims, we revised our diagram with a goal
            of clarifying our own position with respect to the colonial frame.
          </p>
        </CenteredLayout>

        <div id="source map-2">
          <MapsExploration2></MapsExploration2>
        </div>

        <CenteredLayout>
          <Legend></Legend>
          <p>
            In this version of the diagram, we add Cormack and Howley, along
            with ourselves, to our diagram of sources accentuates the layers of
            mediation that separate us from Shanawdithit’s first-hand knowledge
            of the original events. Here we are guided by Seneca literary
            scholar Mishuana Goeman, who emphasizes the importance of resisting
            the “utopian” yet ultimately impossible goal of recovery.
            <InlineFootnote index={36} />
            No magnitude of desire or strength of effort, Goeman explains, can
            gain us access to “an original and pure point in history” before
            which all can be known, and therefore historical erasures can be
            remedied and injustices rectified. <InlineFootnote index={37} />
            Shanawdithit’s maps encapsulate this claim; her direct knowledge is
            irrecoverable, and even if we could approximate it, the principles
            of Indigenous data sovereignty tell us that it is not ours to own.
          </p>
          <p>
            As visualization designers, we cannot change our reliance on data;
            it remains the substrate of all that we do. But what we can change
            is our awareness of our position with respect to the data we use and
            the visualizations we create. This, according to Goeman, is the most
            generative form of knowledge that we can pursue: a better
            understanding of “the relationships set forth during colonialism
            that continue to mark us today.” <InlineFootnote index={38} />
            Indeed, when we think of data only through the (literal) marks and
            channels that represent them, we lose sight of how—and by whom—that
            data came to be.
            <InlineFootnote index={39} /> When we enter into a visualization
            project without sufficient regard for the data’s provenance, we
            often fail to recognize what knowledge may have already been lost in
            the process of separating that data from its source.
            <InlineFootnote index={40} /> It also becomes all the more difficult
            to consider any responsibility we might have to the people who
            created the data, the people whose data our visualizations
            represent, and the people who interact with our visualizations in
            their final form.{" "}
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[1]} />
        <CenteredLayout>
          <p className="first-paragraph">
            The circumstances that surround the creation of Shanawdithit’s maps
            make it clear that we cannot view them as unmediated expressions of
            her worldview. And yet, it is also clear that, despite
            Shanawdithit’s captivity, and Cormack’s role in prompting the
            creation of the maps, Shanawdithit was able to incorporate many of
            her own ideas into the maps’ design. This is evident in the fact
            that many of Shanawdithit’s design decisions were aligned with
            mapping practices then were then common among a number of Indigenous
            cultures across Turtle Island, as the North American continent is
            often called by Indigenous groups today. These practices, and the
            elements of the map of Beothuk Lake that illustrate them, are useful
            to unpack for how they help to attune us—if not to grant full
            access—to ways of knowing outside of the colonial frame.
          </p>
          <p>
            Before moving forward, it is important to make clear that there is
            no single or exhaustive set of such practices. As Indigenous
            cartographers Margaret Wickens Pearce (Potawatomi) and Renee Pualani
            Louis explain, Indigenous mapping practices span cultures,
            continents, and genres, ranging from “Hawaiian performative
            cartographies to Navajo verbal maps and sand paintings and the
            Nuwuvi Salt Song Trail.” They also span form, and “may be gestural,
            chanted, or inscribed in stone, wood, wall, tattoo, leaf, or paper.”
            Such “maps,” a term Pearce and Louis use as shorthand and we borrow
            here, are equally varied in the ends they are enlisted for: “to
            assess taxes, guide a pilgrim, connect the realms of the sacred and
            profane, or navigate beyond the horizon.”
            <InlineFootnote index={41} />
            What binds these examples together, for Pearce and Lewis, as for
            other scholars of Indigenous cartography, is how they are understood
            as part of a larger process of knowledge-making, rather than as a
            definitive source of what is there. This process is premised on
            relationships among people as well as places, relationships that
            continue to acquire meaning as they unfold.
          </p>
          <p>
            The relational basis of Indigenous cartography is perhaps most
            visible in how, across this range of genre and form, many maps
            express temporal rather than spatial points of view. We see this
            foregrounding of a temporal perspective emerge in Shanawdithit’s
            decision to depict a series of events, which transpired over
            decades, in the single place of Beothuk Lake. Cormack’s difficulty
            in determining what it was, precisely, that Shanawdithit had
            pictured on the page, underscores its divergence from the spatial
            perspective that was (and remains) characteristic of colonial maps.
            Cormack crosses out one of his earlier incorrect labels, “The Taking
            of Mary March,” which he had first positioned on the south side of
            the lake, and rewrites in a more accurate location on the north
            side.
            <InlineFootnote index={43} />
            He also adds in a clarifying note at the top left of the map, just
            below the reference number he has provided: “2 different Scenes &
            times.” The note is underlined for emphasis. It appears that Cormack
            himself required this note in order to remind himself of what was
            depicted, even as the link between the two scenes was (presumably)
            self-evident in Shanawdithit’s mind.
          </p>
          <p>
            Another indicator of how Shanawdithit understood her map as only one
            piece of a larger system can be seen in her decision to include
            human figures on her map. This exemplifies what Pearce characterizes
            as an emphasis on place <em>as it is experienced,</em>“as opposed to
            the Western convention of depicting space as universal, homogenized,
            and devoid of human experience.”
            <InlineFootnote index={44} /> Along similar lines, geographer Laura
            Harjo (Mvskoke) theorizes the Mvskoke conception of the world as a
            “kin-space-time constellation,” which she contrasts with Cartesian
            mapping—and we might further connect to Edward Tufte’s famed
            formulation, with respect to Charles Minard, of the
            “space-time-story graphic.”
            <InlineFootnote index={45} /> Viewing Minard’s flow-map alongside
            Shanawdithit’s is indeed revealing, as her map is both more closely
            connected to Minard’s, and more distinct, than might initially
            appear. Most notably, representational imagery is wholly absent from
            Minard’s work. It follows, then, that Tufte’s formulation of the
            “space-time-story graphic” does not include kin.
          </p>

          <Figure
            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 items-baseline"
            figures={[
              missing("0313-howley-sketch2"),
              { ...missing("0314-minard"), fileName: "missing2" },
            ]}
          />

          <p>
            {" "}
            In his analysis of Shanawdithit’s maps, geographer Matthew Sparke
            probes the significance of their human dimensions, albeit not
            through the lens of the “kin-space-time constellation” that Harjo
            names. Sparke notes how even the symbolic components of the map,
            such as the paths across the lake, push back against Western
            orthodoxies of space and scale. By depicting “the uneven
            possibilities of travel by foot across uneven landscape,” Sparke
            suggests, Shanawdithit incorporates an embodied dimension into the
            elements of the map that would otherwise be interpreted only for
            their geographical information. <InlineFootnote index={46} /> More
            pointedly, Shanawdithit’s maps make it impossible for their viewers
            to conceive of the land without the people—the Beothuk—who had first
            inhabited it. <InlineFootnote index={47} />
          </p>
          <p>
            Before moving forward, there are several additional features of the
            maps that are important to underscore. First, they are incredibly
            spatially precise; Howley is among several settlers who comment on
            the maps’ “extraordinary minuteness of topographical detail.”
            <InlineFootnote index={48} /> Second, Shanawdithit was not simply
            drawing her land and her people; she was actually drawing herself.
            In the map at the center of this chapter, Shanawdithit appears on it
            in multiple places and in multiple forms: in the form of data as one
            of the thirty-seven tick marks on the south side of the lake, and
            again on the north side as one of the figures in red that sought
            shelter in the woods. While she may have been recording
            “information” about her people for Cormack, to return to his words,
            she was also testifying to the events of her own life. It follows,
            then, that this map is also a document of Shanawdithit’s
            “survivance,” to enlist a term coined by Chippewa scholar Gerald
            Vizenor; in continued unfolding of colonial violence, he argues,
            survival constitutes an act of resistance in and of itself.{" "}
            <InlineFootnote index={49} />
          </p>
          <p>
            With that said, the violence that surrounds—and is recorded in—this
            map’s creation ensures that it can never be upheld as a triumph
            alone. For even if it epitomizes a “kin-space-time constellation,”
            it also vivifies the violence that is the reason it was even set to
            the page. An additional biographical detail underscores this point.
            The art historian Nicholas Chare, who has written on Shanawdithit’s
            maps through the lens of trauma studies, locates in a note written
            by Cormack the otherwise unremarked upon fact that Shanawdithit
            “received two gunshot wounds at two different times, from shots
            fired at the band she was with by the English people at Exploits,”
            and that “one wound was that [of] a slug or buck shot thro[ugh] the
            palm of her hand.”
            <InlineFootnote index={50} /> While it is unknown which hand
            Shanawdithit employed to create her drawings, “it may well have been
            the hand she sketched with,” Chare suggests.
            <InlineFootnote index={51} /> Regardless, the wound and the scar it
            left on her skin—one which Cormack reports that he saw—serves as a
            visceral reminder of how Shanawdithit’s maps were a direct output of
            colonial violence, the very same that led to the destruction of her
            culture and the death of her kin.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[2]} />

        <CenteredLayout>
          <p className="first-paragraph">
            Maps can literally create nations and dismantle others—a lesson that
            most Indigenous inhabitants of Turtle Island had learned well before
            the encounter between the Beothuk and Peyton and his men.
            <InlineFootnote index={52} />A resonant example is the so-called
            “Walking Purchase,” which dates to 1737, nearly a century before
            Shanawdithit set her maps to paper, when the Lenape leader
            Teedyuscung agreed to sell a parcel of land to the Penn family (of
            the then-colony of Pennsylvania) that was bounded by the distance
            that a man could walk in a day and a half. After the treaty was
            signed, the Penns’ agent cleared a trail through the land and hired
            three of the fastest runners he knew to run along it, resulting in
            the Lenape ceding a swath of land twice as long as was initially
            envisioned. In response to the “fraud”—Teedyuscung’s own
            characterization in his report to colonial officials—he subsequently
            “insisted on drawing his own map to delineate [the Lenape] territory
            and solidify their rights.”
            <InlineFootnote index={53} />
          </p>
          <p>
            Or, consider the end result of a seemingly innocuous encounter
            between Ac ko mok ki, a Siksika leader, and a surveyor for the
            Hudson Bay Company named Peter Fidler, which took place at an
            outpost just east of what is more commonly known today as Alberta in
            February 1801. At the time, the outpost represented the frontier of
            colonial knowledge as well as settlement. When asked by Fidler about
            what lay further north and west, Ac ko mok ki traced in the
            snow—from memory—a map of more than 200,000 square miles of the
            continent, narrating the features of the map as he drew. Fidler then
            copied the map onto paper “reduced ¼ from the original,” annotated
            it with the information he’d heard Ac ko mok ki speak aloud, and
            then sent the map back to the headquarters of the Hudson Bay Company
            in London. Ac ko mok ki’s knowledge was then incorporated into the
            map of the continent that the Hudson Bay Company had been preparing,
            and which three years later would be used by Meriwether Lewis and
            William Clark to determine the route for their expedition to the
            west coast.
            <InlineFootnote index={54} />
            Their mission is widely recognized as authorizing the United States’
            future claims to the full width of the continent, and seeding the
            idea of “manifest destiny” that would validate US territorial
            expansion into the next century and beyond.
          </p>
          <p>
            For the Indigenous knowledge that they consistently capture, and the
            dispossession they continually leave in their wake, such maps might
            be understood as weapons—weapons of map destruction, to adapt a
            phrase from Cathy O’Neil. They become tools to dismantle Indigenous
            sovereignty just as effectively as they consolidate the knowledge on
            which colonial power depends.
            <InlineFootnote index={55} />
          </p>
        </CenteredLayout>
        <CenteredLayout>
          <Figure figure={figures["0313-fidler-large-HBCA-E3-2-225"]} />
        </CenteredLayout>
        <TwoColumnLayout>
          <Column>
            <p>
              A key example of how colonial maps consolidate knowledge, and
              further shape it, comes to us from a Connecticut-born woman by the
              name of Emma Hart Willard. An educator and activist—and student of
              data visualization, which will be further explored in Chapter
              4—Willard created nine maps to serve as the structuring images of
              her US history textbook. Willard’s
              <cite>
                History of the United States, or The Republic of America
              </cite>
              was first published in 1828, the very same year that Shanawdithit
              began her captivity. Unlike Shanawdithit’s maps, however, which
              have never seen widespread circulation, Willard’s textbook would
              go on to be reprinted every year until the 1860s, when the US
              Civil War would require wholesale revision to the nation’s origin
              story.
            </p>
            <p>
              We have previously seen how the “simple and complete” picture
              staged by William Playfair in import-export charts allowed his
              viewers to reject complexity and overlook potential harm. In
              Willard’s maps, we find a similar simplification, here enlisted in
              the service of a story of nation formation. From the
              <HoverText hoverState="0315-willard1">
                "First Map or Map of 1578"
              </HoverText>{" "}
              which depicts the routes taken by European explorers—including
              John Cabot to Newfoundland—to the
              <HoverText hoverState="0316-willard2">
                "Second Map or Map of 1620
              </HoverText>
              which depicts the colony of Virginia (along with an inset
              documenting the Pilgrims’ landing at Plymouth Rock), and onto the
              final
              <HoverText hoverState="0317-willard3">
                "Ninth Map or Map of 1826"
              </HoverText>
              which depicts the then-present day, Willard presents a “cumulative
              statement of nationhood,” as historian Susan Schulten explains,
              one which enlists the consolidating power of the map in the
              service of a story of America’s national emergence.
              <InlineFootnote index={56} /> As Willard herself explains, her
              maps connect otherwise isolated historical “facts” in history and
              as a result, “contribute much… to the growth of wholesome national
              feeling.”
              <InlineFootnote index={57} />
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
        <p>
          This “wholesome national feeling” for the United States was premised,
          not surprisingly, on the removal of all existing (Indigenous)
          nations—from its own national origin story as from the land itself.
          This removal was required to remove any competing claims to its
          narrative of divinely ordained flourishing and growth. It is notable
          that the only map in the textbook that features Indigenous peoples or
          nations in a place of prominence is the “Introductory Map” that
          appears before the map labeled “First.”
        </p>
        <WillardScrollytell
          figure={figures["0314-Willard0"]}
          triggers={[
            <p key={"7bd3ce1c5c9e"} className="h-[50vh]"></p>,

            <Fragment key={"794f9397eb50"}>
              <p className="pl-4 md:pl0 w-9/12">
                The map is subtitled “Locations and Wanderings of the Aboriginal
                Tribes,” a title which rejects the possibility of Indigenous
                agency through its description of what was, in truth, a
                combination of seasonal and forced migration, instead, as
                “wanderings.” <InlineFootnote index={58} />
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
                She also circles each of the tribe’s names, with the size of the
                circle indicating its “size and relative influence.”
              </p>
            </Fragment>,

            <Fragment key={"9b7e0221a7b7"}>
              <p className="pl-4 md:pl0 mb-0 pb-2 md:pb-0 w-9/12">
                The color of the circles and the lines connecting them indicate
                affiliation and “migration,” in Willard’s terms, although a more
                accurate word would be displacement.
              </p>
            </Fragment>,

            <Fragment key={"81d65ca3c699"}>
              <p className="pl-4 md:pl0 mb-0 w-9/12">
                Yet the perspective inhabited by the map is contradictory. She
                makes the clear choice to label certain geographic features with
                names intended to evoke an Indigenous worldview, such as “Salt
                water Lake or Great Water,” which she explains in the
                accompanying chapter are two names given by the Delaware people
                to the Atlantic Ocean at various times.
              </p>
            </Fragment>,

            <p key={"16404594c86e"} className="h-[50vh] md:h-auto"></p>,
          ]}
        />

        <CenteredLayout className="pt-20">
          <p>
            Yet Willard also chooses to present this map as “introductory,”
            rather than accord it the position of “First Map.” That is reserved
            for the map depicting the voyages of the European explorers, as
            previously discussed. More pointedly, Willard never again employs
            the same color and label combination to designate Indigenous
            sovereignty; after the first map, color is reserved only for British
            and other European voyages, then settlements, then colonies, and
            eventually US states. This design choice “reinforced the
            contemporary assumption that Native Americans existed in a timeless
            space prior to human history,” Schulten explains.
            <InlineFootnote index={59} /> Nations such as the Beothuk are not
            granted a place in the future of North America, only its past.
            <InlineFootnote index={60} />
          </p>
          <p>
            This view is confirmed when considering Willard’s work as an example
            of the “thematic map” genre. Such maps can be analyzed in terms of
            the layers of data that they visualize, and the designer’s choices
            about how to order them.
            <InlineFootnote index={61} /> Generally, whatever data is plotted as
            the bottom layer of the map is presumed to be stable and true—the
            “base data” over which new layers can be added, and through which
            new insight can emerge. Thus, as historian and cartographer Bill
            Rankin has observed, it accords whatever dataset is placed at the
            bottom the status of incontrovertible fact.{" "}
            <InlineFootnote index={62} />
            In the case of “Locations and Wanderings of the Aboriginal Tribes,”
            Willard places the state borders of the not-yet-actually-extant
            United States in the background of the map, presenting them as the
            literal ground truth on which Native peoples are only temporarily
            superimposed.
          </p>
          <p>
            With our eyes attuned to the layers of Willard’s map and the claims
            implied by each, it is worth returning to Shanawdithit’s maps once
            more to consider the parallel claims implied by its "kin-space-time
            constellation.” In rejecting the distinction between foreground and
            background, and by presenting people, place, and time in a single
            visual plane, Shanawdithit insists on her cultural as well as
            geographic authority. By contrast to Willard, who strategically
            deploys temporal data in order to impose her own story onto the
            land, Shanawdithit employs time to unify the many stories that
            connect people to the land, across past, present, and future.
            Viewing her map from a settler perspective, and more than two
            centuries removed, we—the contributors to this chapter—cannot know
            the exact stories that order those relations. But we can recognize
            the additional stories that have shaped our relationship to the map
            ever since (and, in truth, even before) it was set to the page.
            These are signaled by Cormack’s annotations, and point to the
            relations between colonizer and colonized, and between knowledge and
            knower. These are not “good relations,” but they are necessary to
            acknowledge and to understand, because these relations—to recall the
            words of Mishauna Goeman quoted in this chapter’s introduction—are
            what that “continue to mark us today.”
          </p>
        </CenteredLayout>
        <ChapterSectionTitle section={sections[3]} />
        <CenteredLayout>
          <p className="first-paragraph">
            About a decade after Shanawdithit set her maps to paper, just over a
            thousand miles to the west, two men, likely Ojibwe, stood atop a
            ridge between Lake Huron and the Ottawa River. They were a day ahead
            of the rest of their group, and wanted to inform those behind them
            of the progress of their trip thus far, and their future route. One
            or both of the men etched a kikaigon, or directional map, into a
            piece of birch bark and attached it to a tree. The map depicts their
            path across Lake Huron, including the location of the campsite where
            they had spent the night, as well as the canoe they were using to
            travel. Two vertical lines drawn inside the canoe, each attached to
            an oar, represent the men themselves. The map suggests that they
            planned to continue up the Ottawa River, perhaps all the way to
            Montreal, another 400 miles away.
            <InlineFootnote index={63} />
          </p>
        </CenteredLayout>

        <Figure
          figure={missing("0325-birch-bark-1841")}
          className="mx-2 md:mx-12 text-sm md:text-base"
          captionClassName="text-center"
        />

        <CenteredLayout className="pb-20">
          <p>
            We do not know whether the other members of the group ever saw the
            map. We do know, however, that it was seen by one Captain
            Bainbrigge, of the Royal Engineers. We know this because Bainbrigge
            took the map off the tree and affixed it to a larger sheet of rag
            paper. Below the original, he drew his own copy of the map,
            replacing the vertical hash marks used to indicate the men’s route
            with more constrained dotted lines, but keeping the icons used to
            indicate the camp, the canoe, and the men. He added in an indication
            of direction of the river and several other annotations, as well as
            a pejorative note.
            <InlineFootnote index={64} />
            He then sent the map back to England, where it eventually arrived at
            the British Library. As a result, it has earned distinction as the
            oldest known example of a birch bark map to have been preserved.{" "}
            <InlineFootnote index={65} />
          </p>

          <p>
            Yet Bainbrigge’s preservation of the map flattens it—and not only in
            a literal sense. By removing it from the time, place, and people for
            whom its insights were intended, Bainbrigge removes much of its
            meaning. His annotations, even more than Cormack’s, impose his own
            assessment of its value. And because the original map and
            Banbrigge’s copy are literally on the same page, this assessment is
            impossible for contemporary viewers to ignore. We can no longer
            employ the map to produce the full range of insights for which it
            was initially designed. But these limitations offer a new set of
            insights for us today: Banbrigge’s colonialist arrogance—his
            presumption that he could and should use the map for his own
            purposes—reminds us of the necessary limits of our own efforts to
            seek knowledge with visualization, which are often (but not always)
            the result of the colonial frame.
          </p>
          <p>
            But contemporary artist, Sarah Sense (Chitimacha/Choctaw),
            demonstrates how such presumption can still be contested and further
            transformed. In her digital artwork, “Birch Bark,” she employs her
            own ancestral basket-weaving techniques as a way to interrupt the
            unidirectional process of knowledge extraction that the Banbrigge
            map records. Her own process “re-Indigenizes” the map, as she
            explains in the accompanying artist’s statement, redirecting some of
            the map’s meaning-making force. <InlineFootnote index={66} /> Here,
            the “warp” of the image—what in basket-weaving practice is viewed as
            the more passive layer, since it serves as the basket’s base—is a
            reproduction of the Banbrigge map. Woven through the map, in
            patterns derived from Sense’s own Chitimacha and Choctaw heritage,
            is a photograph of the land. Considered as a thematic map, Sense’s
            choice to make the land the more active “weft,” the layer
            controlling the pattern that is produced, contests the authority of
            the map that serves as its base.
          </p>
        </CenteredLayout>

        <Figure
          figure={figures["0325-BirchBark"]}
          captionClassName="text-center	md:mx-8"
        />

        <CenteredLayout>
          <p>
            Our project team returned to Sense’s image multiple times when
            considering how we might similarly infuse Shanawdithit’s map with
            new meaning. But ultimately, we recalled the lessons of this
            chapter, reminding ourselves that Shanawdithit’s map and the
            knowledge it encodes was not ours to further dissect. With this in
            mind, we turned away from the map and back towards the archive that
            set the story we tell here in motion. We asked ourselves how we
            might employ our team’s perspective, and our skills, to contest the
            authority of the colonial archive from within.
          </p>
          <p>
            One particular passage seemed to hold the key to this effort. It is
            a lengthy footnote that appears in Peyton’s narrative (here
            reproduced in its entirety):
          </p>

          <Quotation
            quote={
              <>
                Mr. Peyton afterwards learned from the woman Shanawdithit, the
                full particulars of the manner in which his boat was stolen. She
                was present all the time and knew every incident connected with
                this event. As Mr. P. rightly conjectured, it appears the
                Indians were watching all his movements very closely. There was
                a high wooded ridge behind his house, which from its peculiar
                outline had been named Canoe Hill. It bore some resemblance to a
                canoe turned bottom up. One tall birch tree on the summit of
                this ridge, (still standing at the time of my first visit in
                1871), was pointed out by Shanawdithit as the lookout from
                whence the Indians observed Peyton's movements, during several
                days preceding the depredation. She also informed him, that when
                he paid his last visit of inspection to the long wharf before
                the taking of the boat, that the Indians were actually hidden in
                their canoe beneath the wharf, but kept so perfectly motionless,
                that in the dense darkness he did not observe their presence.
                <InlineFootnote index={67} />
              </>
            }
            byline="Howley 96"
          ></Quotation>

          <p>
            Here in this footnote, perhaps even deliberately relegated to the
            bottom of the page, is the suggestion of a version of the events
            that contests the authority of Peyton’s account. In this version,
            Shanawdithit serves as the authoritative source of knowledge, since
            she “was present all the time and knew every incident connected with
            this event.” Peyton, meanwhile, only learns “the full particulars”
            from Shanawdithit after that fact. With this evidence of an earlier
            phase of surveillance, one far more sustained, in which the Beothuk
            “observed Peyton's movements” for “several days preceding the
            depredation” from the tree. In this version of events, it is the
            Beothuk—and not the British—who are in control.{" "}
            <InlineFootnote index={68} />
          </p>

          <p>
            The footnote also draws out a second theme. I have previously
            discussed how Shanawdithit’s maps are mediated documents,
            inseparable from the colonial violence that produced them. But so
            too is Peyton’s narrative. It was filtered not only through his eyes
            but through his memory, recorded late in his life, in 1871—nearly a
            half-century after the original events transpired—by none other than
            James Howley. It was then rewritten by Howley for the publication of
            his own book,<cite>The Beothucks or Red Indians,</cite>which was
            published by Cambridge University Press in 1915. Howley was likely
            the author of the footnote, and any additional edits he might have
            made to Peyton’s version of the events—as he did to
            Shanawdithit’s—will remain forever unknown.
          </p>

          <p>
            But his is not the only narrative that has been filtered through
            memory (or power or time). John Paul’s account, which we last
            considered in our analysis of the events depicted in Shanawdithit’s
            map, was also recorded in the twentieth century, by an American
            anthropologist named Frank Speck, who published it in his own book
            on the Beothuk and Mi’kmaq in 1922. <InlineFootnote index={69} />
            Speck’s book, interestingly, also contains a series of photographs,
            which he took during his own visit to Newfoundland in the summer of
            1914. One of these photographs is of a lookout tree.
          </p>

          <Figure figure={figures["0327-speck-tree-p13"]} />

          <p>
            This lookout tree is not the same as the “tall birch tree” that
            Shanawdithit told Peyton about, as Speck labels it as being located
            at Red Indian Point, and identifies it not as a birch but a “large
            white spruce.” <InlineFootnote index={70} />
            But it remains resonant nonetheless, especially since he provides a
            second photo: a view from the top. For Speck, the view from the top
            of the tree suggests a window in an unmediated past, a sense of what
            the Beothuk themselves might have seen.
            <InlineFootnote index={71} /> “I climbed [the tree] to experience
            the sensation of observing these wastes”—an archaic term for
            uncultivated land—"from the vantage point of the ancients,” he
            explains. Needless to say, his presumption that he could “experience
            the sensation” of Shanawdithit and her people by, one hundred years
            later, climbing the same tree, is just that—a presumption. But what
            if we understood Speck’s view from the lookout tree differently? In
            terms of his own “vantage point,” and ours?
          </p>

          <Figure figure={figures["0326-speck-tree-p14"]} />

          <p>
            When I first encountered this photo, in a low-res scan of Speck’s
            book made available online via the Internet Archive, I will openly
            admit that wasn’t entirely sure what it showed. The emphasis on view
            across the lake and the land in the distance had resulted in the
            foreground becoming out of focus. I presumed, but was not certain,
            that at the bottom of the photo were the lower branches of the
            spruce. Even the center of the image seemed blurry in contrast to
            the crispness of the ripples of the water that appear, in focus, on
            the lower right. It was not until I myself traveled to St. John’s to
            view Shanawdithit’s maps where they are currently housed, in the
            cartographic archives of The Rooms, the provincial museum of
            Newfoundland and Labrador, that I realized what Speck’s photo had
            captured: a covering of low, dense clouds.{" "}
            <InlineFootnote index={72} />
            These clouds may well have been the “vantage point of the ancients”
            that Speck thought he could experience by climbing the tree. But I
            believe that Speck captured even more: a metaphor for the mediated
            nature of his own vantage point; and, in turn, of ours today.{" "}
            <InlineFootnote index={73} />
          </p>

          <p>
            Over one hundred years after Speck’s visit to the Beothuk winter
            camp, and another hundred years after the British attack and the
            devastation that ensued, it would seem that we have an unprecedented
            ability to capture the conditions of the present, just as we do to
            understand the complexities of the past. From the ever-increasing
            array of sophisticated mapping and visualization tools, to the
            always expanding capabilities of digital photography, now coupled
            with AI, it is tempting to assume that our potential insights are
            limited only by our ability to imagine how we might fill in missing
            data, leading to knowledge previously cloaked by metaphorical (or
            actual) clouds. But as this chapter has sought to show, we can learn
            as much from the clouds themselves as we can from the knowledge they
            hide. Once we learn to see what separates us from the sources of
            information that we rely upon in our work, we can begin the work of
            repair: of identifying the additional people whose perspectives
            might completement our own; the relationships we might begin to (or
            better) cultivate in order to ensure true collective benefit; and
            the responsibilities we carry—to the people who will seek insight
            from our work in the future, to those we work with in the present,
            and to those who created our sources of data in the past.
          </p>

          <p>
            {" "}
            We thus close with a final diagram of the sources of this chapter
            recentered around the lookout tree. <InlineFootnote index={74} /> It
            remains an incomplete picture, but its incompleteness—like Speck’s
            clouds over Beothuk Lake—is intended as a guide: of how we can
            pursue more complete knowledge just as we recognize what we must
            leave for others to explore.
          </p>
        </CenteredLayout>
        <div id="maps-exploration-3">
          <MapsExploration3></MapsExploration3>
        </div>

        <CenteredLayout>
          <div className="mx-auto place-content-center">
            <Legend></Legend>
          </div>
          <p>
            This book will soon move on to consider alternative visual forms and
            epistemological frameworks, those that reject the unidirectional
            path of knowledge production in favor of a more balanced exchange of
            ideas (Chapter 4). We will also consider examples of how more
            conventional visual forms can push back against extractive aims by
            centering otherwise overlooked perspectives, and by including
            methods that might otherwise be set to the side (Chapter 5). In
            short, we will move from lessons of limits to those of possibility.
            But the colonial context that explicitly frames Shanawdithit’s work,
            and implicitly frames so much more, should remain the context for
            these chapters as well. And along with this context, we hope, is a
            lesson of intention and care—care for how we choose to frame future
            knowledge, as well as care for our relationships with the people,
            past and present, who have enabled our work and whose knowledge we
            seek to steward and share.
          </p>
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
              Hold space for the possibility of not visualizing at all
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
              Honor the people who provide us with knowledge
            </span>,
            <span key="2f317174">
              Recognize when knowledge is not yours to own
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
