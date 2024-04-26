import { useState } from "react";
import { ChapterContext } from "~/chapterContext";
import ChapterTitle from "~/components/ChapterTitle";
import ChapterSectionTitle from "~/components/ChapterSectionTitle";
import Quotation from "~/components/Quotation";
import Footer from "~/components/Footer";
import CenteredLayout from "~/components/layout/CenteredLayout";
import TwoColumnLayout from "~/components/layout/TwoColumnLayout";
import Column from "~/components/layout/Column";
import { shanawdithitFootnotes } from "~/footnotes";
import { chapterMeta } from "~/utils";
import figures from "~/data/figures/shanawdithit.json";
import FigureObj from "~/components/layout/FigureObj";
import HoverText from "~/components/HoverText";
import ColonialMaps from "~/components/shanawdithit/ColonialMaps";
import DocumentViewer from "~/components/shanawdithit/DocumentViewer";
import SketchScrollytell from "~/components/shanawdithit/DrawingScrollytell";
import InlineFootnote from "~/components/InlineFootnote";
import WillardScrollytell from "~/components/shanawdithit/WillardScrollytell";
import ChapterBody from "~/components/layout/ChapterBody";
import FootnotesList from "~/components/FootnotesList";
import type { MetaFunction } from "@remix-run/node";
import type { HoverState, TVizAnchors } from "~/chapterContext";
import Takeaways from "~/components/layout/Takeaways";

export const meta: MetaFunction = () => {
  return chapterMeta("shanawdithit");
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
    type: "scrollytell",
    id: "scrollytell-one",
    title: "Scrollytell 1",
  },
  {
    type: "visualization",
    id: "willard-maps",
    title: "Willard Maps",
  },
  {
    type: "scrollytell",
    id: "scrollytell-two",
    title: "Scrollytell 2",
  },
];

export default function ShanawdithitPage() {
  const [hoverState, setHoverState] = useState<HoverState>(undefined);

  return (
    <ChapterContext.Provider
      value={{
        backgroundColor: "shanawdithitPrimary",
        primaryTextColor: "white",
        accentColor: "shanawdithitSecondary",
        footnoteTextColor: "shanawdithitPrimary",
        footnotes: shanawdithitFootnotes,
        hoverState,
        setHoverState,
        visualizations,
        chapterFigures,
        sections,
      }}
    >
      <ChapterTitle
        title="The Power in the Frame"
        subtitle="Shanawdithit's Thematic Maps"
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
            One early morning in March 1819, at the first break of dawn, a small
            group of Beothuk—the indigenous inhabitants of the island now more
            commonly known as Newfoundland—were at their winter camp on the
            north side of Beothuk Lake, a long and narrow body of water at the
            island's center, when they were awakened by the sound of intruders.
            A group of British settlers had surrounded their camp. While the
            settlers' intentions were not yet known, the Beothuk had cause for
            alarm. Every previous encounter with the British had ended in
            destruction and death. This encounter would soon result in the same.
          </p>
          <p>
            The Beothuk had been navigating their relationships with Europeans
            for centuries. Some speculate that the Icelandic Sagas' mention of
            “Skraelings” refers to ancestors of the Beothuk, which would date a
            first encounter to the eleventh century.{" "}
            <InlineFootnote index={0} /> A second phase of more sustained
            relation began shortly after the Italian explorer John Cabot's
            initial visit to the island, in 1497, and persisted for over two
            hundred years. During this time, “fishing crews from Spain,
            Portugal, France, and Britain would spend the summer months catching
            and processing cod before returning home for the winter,” as
            environmental humanities scholar Fiona Polack explains.
            <InlineFootnote index={1} /> These seasonal incursions granted the
            Beothuk “periods of unimpeded access to valuable materials, such as
            metal objects left in unattended fishing stations, and reduced the
            need for them to interact directly with the invaders.”{" "}
            <InlineFootnote index={2} /> Polack also documents how this
            arrangement—to which, of course, the Beothuk had no choice but to
            consent—began to strain as “increasing numbers of people from the
            British isles began to settle permanently on the island and compete
            directly with the Beothuk for resources.”{" "}
            <InlineFootnote index={3} /> It was this competition for resources,
            compounded over centuries, that in no small part led the British to
            Beothuk Lake that day.
          </p>
          <p>
            But there were other, more direct motivations: several months
            earlier, on September 18th, 1818, it was a group of Beothuk who had
            surprised the same British settlers as they were preparing for a
            trip to market. Hidden in a canoe under a wharf at Lower Sandy
            Point, in the Bay of Exploits—north and east of Beothuk Lake, where
            its waters met up with the sea—the Beothuk waited for the “dense
            darkness” of night and then absconded with a boat carrying the
            season's catch of salmon, and possibly some furs.
            <InlineFootnote index={4} /> This “theft and act of destruction”
            provided the rationale for John Peyton Jr., the owner of the boat,
            whose personal narrative serves as the source of the direct
            quotations here, to request formal authorization from the governor
            of colonial Newfoundland to “search for his stolen property and, if
            possible, try and capture one of the Indians alive.”
            <InlineFootnote index={5} />
          </p>
          <p>
            The Beothuk group did not know about the kidnapping authorization
            when they awoke that morning in March. But within minutes, the
            settlers' goal became clear. When the Beothuk fled to the woods, one
            woman, Demasduit, fell behind and was immediately set upon by the
            British. She “pointed out to the white men her full breasts to show
            that she had a child, and pointed up to the heavens to implore them,
            in God's mercy, to allow her to return to her child,” but they “took
            hold of her,” recalled John Paul, a Mi'kmaq-Innu man whose
            grandfather had been alive (but not present) at the time of the
            original events.
            <InlineFootnote index={6} /> Demasduit's partner, a man named
            Nonosabasut, “came to her aid,” but Peyton shot and killed him.{" "}
            <InlineFootnote index={7} /> Two days later, the child of Demasduit
            and Nonosabasut died as well—likely the result of starvation. One
            other young woman, Shanawdithit, who was then around seventeen, bore
            witness to it all.
            <InlineFootnote index={8} />{" "}
          </p>
          <p>
            Shanawdithit's hand-drawn maps, which we first encountered in this
            project's Introduction, as we will now learn document these events
            in visual form. But the story that we tell about them here is not
            offered in the service of an argument about the utility of Beothuk
            mapping techniques for the field of data visualization, or an
            analysis of the additional insight about the data that the maps
            prompt. Rather, the story we present in this chapter is about the
            colonial context that gave rise to their creation, and about how
            that context—what we call here the <em>colonial frame</em>—must be
            considered alongside any knowledge that the maps themselves bring to
            light.
          </p>
          {/* add in first source diagram here */}
          <p>
            The diagram above attempts to give this colonial frame visual
            presence, accentuating the three primary sources that allow us,
            today, to learn about the events that led to the maps' creation. Our
            choice of focus on the frame is intentional. At various points in
            this project—in the Introduction, for example, and in our
            visualization of the Trans-Atlantic Slave Trade data that appears in
            Chapter 1—we have been explicit about acknowledging the positions
            from which our work has taken place. Here is another moment where
            these positions matter, since research involving sources that
            document Indigenous cultures must always be informed by the
            relationships among those sources, the researchers, and the cultures
            they seek to study. As a group of (mostly) settler researchers, our
            relationships to the Beothuk and the sources that document their
            culture is itself a colonial one.
            <InlineFootnote index={9} /> As such, we see our role—indeed, our
            responsibility—as one of illuminating the role of Shanawdithit and
            the place of her maps in the long history of extracting Indigenous
            knowledge for colonial gain.
            <InlineFootnote index={10} />
          </p>
          <p>
            This history is a violent one, as you have already begun to learn.
            The additional details about Shanawdithit and her maps that follow,
            which involve yet more instances of violence and harm, underscore
            how the maps at the center of this chapter cannot be separated from
            the inherent violence of colonialism.
            <InlineFootnote index={11} /> This is an important lesson for
            readers who have not yet considered the colonial context that frames
            so much of the history of data visualization. But there is a second
            lesson of this chapter, one more conceptual but no less profound,
            about how our present view of the value of data visualization—that
            is, its ability to distill insight from complex data such that
            knowledge can easily and efficiently emerge—sits uneasily close to
            that constitutive practice of colonial power: of extracting
            knowledge from its source.
          </p>
          <p>
            As at previous moments in this project that have brought us to
            uncomfortable points, the response to this assertion is, we hope,
            not to close this browser tab and walk away. Rather, we hope it will
            serve as an invitation to consider how we might design future data
            visualizations, as well as reposition ourselves with respect to
            existing ones, in ways that enable the creation of knowledge in less
            extractive modes. This consideration entails an attention to the
            lives behind the data, as we have explored in Chapter 1, as well as
            to the forms of insight that visualizations are most often designed
            to promote, as Chapter 2 helps to explain. But the colonial frame
            that surrounds Shanawdithit's maps enables us to see yet more: our
            own relationships with the people who provide us with data, and
            those represented in it, as well as our responsibilities towards the
            knowledge that we together create.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[0]} />

        <CenteredLayout>
          <p>
            With the importance of relationships and responsibility in mind, we
            now return to the story of Shanawdithit's maps as it emerges from
            the colonial archive. As it turns out, this story passes directly
            through Demasduit and her own eventual fate. Demasduit was taken
            first to the fishing village of Twillingate and then in the spring,
            after the ice had cleared, to the colony of St. John's. She made
            several attempts to escape her captors.
            <InlineFootnote index={12} /> At some point during this time, she
            contracted tuberculosis. She succumbed to the disease less than a
            year later, while aboard a boat that was intended to return her to
            her family, the British having achieved a deadly version of their
            goal of retribution. <InlineFootnote index={13} />
          </p>
          <p>
            Shanawdithit was present the day that Demasduit's body was returned
            to Beothuk Lake, and she participated in Demasduit's burial
            ceremony, held over the course of several months the next spring.
            But the British would not learn of Shanawdithit until four years
            later, in April 1823, when Shanawdithit was herself captured, along
            with her mother and her sister. The three women had been heading “to
            the seacoast in search of mussels to subsist on,” following another
            winter in which food had been scarce and illness had been plentiful.
            A different group of British settlers—furriers, this time—came
            across them.
            <InlineFootnote index={14} /> Concluding that it had become too
            difficult to continue to keep themselves alive, according to another
            British account, Shanawdithit and her kin “allowed themselves in
            despair to be quietly captured.” <InlineFootnote index={15} />
          </p>
          <p>
            Like Demsaduit before them, the three women were taken to
            Twillingate, where they were held captive in the home of none other
            than John Peyton Jr. Shanawdithit's mother and sister soon died,
            also of tuberculosis. But Shanawdithit persevered. For five years,
            she was forced to work for Peyton as a domestic servant, before she
            too fell ill. Following Demasduit's final path, Shanawdithit was
            then brought to St. John's, where she spent six of the final weeks
            of her life in the home of William Epps Cormack.
            <InlineFootnote index={16} /> Cormack, the Newfoundland-born son of
            Scottish settlers who'd earned early fame as for his natural history
            of the island's interior, was the one to supply Shanawdithit with
            “paper and pencils of various colours,” and who through some
            combination of enticement or coercion—we can never know—prompted her
            to create her maps.
            <InlineFootnote index={17} />
          </p>
        </CenteredLayout>

        <SketchScrollytell figure={figures["howley-sketch2"]} />

        <CenteredLayout>
          <p>
            Already, the inextricability of the maps' creation from the larger
            colonial project should be quite clear. But Cormack's own words lay
            the extractive nature of this project bare: “I keep her pretty
            busily employed in drawing historical representations of everything
            that suggests itself relating to her tribe, which I find is the best
            and readiest way of gathering information from her,” as he wrote in
            a letter to the Bishop of Nova Scotia in January 1829.
            <InlineFootnote index={25} /> Cormack's sense of entitlement to
            Shanawdihit's knowledge is here apparent.
          </p>
          <p>
            Cormack's entitlement is also documented on the map in the form of
            the textual annotations, which were penned not by Shanawdithit but
            by Cormack himself, likely at the same time that Shanawdithit set
            her own lines to the page. Cormack's handwriting encircles
            Shanawdithit's image, registering the “information” he sought to
            extract from her and even more: the power that he held over her as
            her captor, power that also colors the information presented on the
            map.
          </p>
          <p>
            But Cormack's direct extraction of Shanawdithit's knowledge was only
            one layer of how her maps have been mined for information over time.
            <InlineFootnote index={26} /> In the early twentieth century, a
            British government official and geographer named James P. Howley
            redrew Shanawdithit's maps for inclusion his own book,{" "}
            <cite>The Beothucks or Red Indians</cite> , which is also the first
            place that Peyton's narrative appears.
            <InlineFootnote index={27} /> In addition to certain aesthetic
            decisions, such as smoothing out Shanawdithit's shading of the
            riverbanks, which had the effect of erasing the individual pencil
            strokes that more directly link Shanawdithit to the creation of her
            map, Howley also edited and re-wrote Cormack's annotations, removing
            the erroneous words that Cormack first recorded and then crossed
            out. This editorial decision underscores Howley's own sense of
            entitlement to Shanawdithit's knowledge, and his view of it as
            ethnographic information that could be easily severed from its
            source.
          </p>

          <FigureObj figure={figures["howley-sketch2"]} />

          <p>
            While we made the decision not to convert this information into GIS
            data and plot it on a map of our own, we are still also actors in
            this extractive process. For as much as we have sought to keep our
            emphasis on the map's colonial frame, rather than the “information”
            about the Beothuk that it contains, our model of interactive
            explanation—the same we use to structure the start of each chapter
            of this book—reflects an uncomfortably similar approach to the one
            that Cormack and Howley both employed: of atomizing the image and
            clarifying the significance of its various parts. In the present, we
            still presume that the goal of visualization should be to clarify,
            and to enable deeper exploration if required.
            <InlineFootnote index={28} /> We do not often consider how the
            process of clarifying the significance of the data runs the risk of
            further distancing the data from those who created it, or how
            enabling deeper exploration very often involves the transfer of
            explanatory power from those who created (or are represented in) the
            original data—or in this case, the original image—to ourselves.
          </p>
          <p>
            Centuries of experiencing the effects of knowledge extraction, as
            well as of the blatant disregard for responsibility or relation,
            have motivated Indigenous scholars to develop principles for
            maintaining Indigenous data sovereignty and governance.{" "}
            <InlineFootnote index={29} /> These principles elevate the goal of
            collective benefit, as well as considerations of responsibility and
            ethics, as well as access and control. Here we begin to see how
            similar principles might be applied to visualization, since the
            process of extracting knowledge from those who originally possess it
            is not limited to the collection phase of the data analysis
            “pipeline” alone.
            <InlineFootnote index={30} />
          </p>
          {/* <!-- insert second diagram of sources here --> */}
          <p>
            Adding Cormack and Howley, along with ourselves, to our diagram of
            sources accentuates the layers of mediation that separate us from
            the original image, as they do from Shanawdithit's first-hand
            knowledge of the original events. This direct knowledge is
            irrecoverable—and even if we could approximate it, the principles of
            Indigenous data sovereignty tell us that it is not ours to own. But
            the visual evidence of this irrecoverability can, we hope, also be a
            source of broader insight, as well as a guide for future
            visualization work. As visualization designers, we cannot change our
            reliance on data; it is the substrate of all the work that we do, as
            Chapter 2 has explored. But what we can change is our awareness of
            our position with respect to our data, and to the visualizations
            that we create. When we enter into a visualization project without
            sufficient regard for the data's provenance, we often fail to
            recognize what knowledge may have already been lost in the process
            of separating that data from its source. It also becomes all the
            more difficult to consider any responsibilities we might have to the
            people who created the data, the people whose data our
            visualizations represents, and the people who view or interact with
            our visualizations in their final form.
          </p>
        </CenteredLayout>

        <ChapterSectionTitle section={sections[1]} />
        <TwoColumnLayout>
          <Column>
            <p>
              As the previous discussion has (hopefully) shown, we cannot view
              Shanawdithit's map as an unmediated expression of her worldview.
              And yet, many of her design decisions are informed by elements of
              Indigenous mapmaking practice, which are helpful to unpack for how
              they help to attune us to ways of knowing outside of our own. The
              idea of "Indigenous mapmaking practice" is of course loose term,
              spanning cultures and continents, medium and genre, as critical
              cartographer Margaret Pearce (Potawatomi) explains. In her
              summation of these practices, Pearce invokes examples that range
              from "Hawaiian performative cartographies to Navajo verbal maps
              and sand paintings and the Nuwuvi Salt Song Trail," emphasizing
              how Indigenous maps may be "gestural, chanted, or inscribed in
              stone, wood, wall, tattoo, leaf, or paper," and may be enlisted to
              a variety of ends: "to assess taxes, guide a pilgrim, connect the
              realms of the sacred and profane, or navigate beyond the horizon,"
              she explains (110).
              <InlineFootnote index={23} /> What binds these examples together,
              for Pearce, as for other scholars of Indigenous cartography, is
              how they are understood as part of a larger process of
              knowledge-making, rather than as a definitive source of what
              exists, or what is true. This process is premised on relationships
              among people as well as places, relationships that continue to
              acquire meaning as they unfold.
            </p>
            <p>
              We see this temporal point of view emerge in Shanawdithit's
              decision to depict a series of events, transpiring over decades,
              in the single place of Red Indian Lake. We can also perceive its
              difference from the spatial perspective that was (and remains)
              characteristic of colonial mapping practices in Cormack's
              difficulty in determining what it is, precisely, that Shanawdithit
              has drawn. He crosses out an incorrect label, "The Taking of Mary
              March," which he first positions on the south side of the lake,
              and rewrites in its proper location on the north side. He also
              adds in a clarifying note at the top left of the map, just below
              the reference number he has provided: "2 different Scenes &
              times." The note is underlined for emphasis. It appears that
              Cormack requires this explanatory note in order to remind himself
              of what it is that is depicted, even as the two scenes are easily
              linked in Shanawdithit's mind. Another hallmark of Indigenous
              cartography emerges through Shanawdithit's decision to include
              both human figures and geographical features on her map. This is
              what Pearce characterizes as an emphasis on place as it is
              experienced "as opposed to the Western convention of depicting
              space as universal, homogenized, and devoid of human experience."
              Settler geographer Matthew Sparke, who has commented directly on
              Shanawdithit's maps as examples of Indigenous cartography,
              observes how even the symbolic components of the map, such as the
              paths across the lake, push back against Western orthodoxies of
              space and scale. By depicting "the uneven possibilities of travel
              by foot across uneven landscape," Sparke suggests, Shanawdithit
              incorporates an embodied dimension into the elements of the map
              that would otherwise be interpreted only for the geographical
              information that they convey (324).
            </p>
            <p>
              [[ CUT??? Extending Sparke's reading, Fiona Polack finds in the
              footpaths a direct challenge to the colonizing function of Western
              cartography—and in particular, to colonial maps made of the North
              American continent. Whereas those maps enforce "the myth of terra
              nullius" by plotting only geographic features, such as mountains
              or rivers, Shanawdithit's decision to also include human-made
              footpaths provides evidence of "repeated Indigenous journeys
              across [the] territory" (2013). In this way, Shanawdithit's maps
              make it impossible for their viewers to conceive of the land
              without the people—her people—who had first inhabited it. ]] But
              of course, Shanawdithit was not simply drawing her people; she was
              also drawing herself. The documents that attempt to preserve
              Shanawdithit's knowledge for the page, including narratives by
              both Cormack and John Peyton Jr., make repeated mention of how
              Shanawdithit "was present" during each of the encounters with the
              British. It follows, then, that Shanawdithit was herself
              represented by one of the thirty-seven tick marks on the south
              side of the lake, and again on the north side as one of the
              figures in red that sought shelter in the woods. She may have been
              recording "information" about her people, to return to Cormack's
              words, but she was also recording her own story—one that included
              certain triumphs, but was ultimately shaded by trauma and loss.
              One further detail underscores this point. The art historian
              Nicholas Chare, who has written on Shanawdithit's maps through the
              lens of trauma studies, locates in a note written by Cormack the
              otherwise unremarked upon fact that Shanawdithit "received two
              gunshot wounds at two different times, from shots fired at the
              band she was with by the English people at Exploits," and that
              "one wound was that [of] a slug or buck shot thro[ugh] the palm of
              her hand" (294). While it is unknown which hand Shanawdithit
              employed to draw her sketches, "it may well have been the hand she
              sketched with," Chare suggests. Regardless, the wound serves as a
              physical reminder of how the colonial violence that led to the
              capture of Shanawdithit—and, ultimately, the destruction of her
              culture and kin—was the very same that led to the creation of her
              maps. [IMAGE OF EARLY BIRCH BARK MAP AND/OR SARAH SENSE
              REENAGEMENT ]
            </p>
          </Column>
          <Column shouldPin>
            <FigureObj
              figure={figures["placeholder-sarah sense BirchBark 400px"]}
            />
            <FigureObj figure={figures["birch-bark-1841"]} />
          </Column>
        </TwoColumnLayout>
        <ChapterSectionTitle section={sections[2]} />

        <CenteredLayout>
          <p>
            By excavating the layers of colonial violence that surround
            Shanawdithit's creation of her map, we are further guided by the
            approach of literary scholar Mishuana Goeman (Seneca), who
            emphasizes the importance of "examining the theoretical dimensions
            of power" so as to resist the "utopian" yet ultimately impossible
            goal of recovery (4). No magnitude of desire or strength of effort,
            as Goeman explains, can gain us access to "an original and pure
            point in history," nor can we ever fully account for colonialism's
            ongoing effects (4). The most generative form of knowledge we might
            pursue, Goeman suggests, and which this chapter sets as its goal, is
            an understanding of "the relationships set forth during colonialism
            that continue to mark us today" (4).
          </p>
          <p>
            Goeman's point of departure, like ours, is the map because of how
            closely maps and mapping are tied to the production of colonial
            power. Maps can literally create nations and dismantle others— a
            lesson that most Indigenous inhabitants of Turtle Island had learned
            well before the encounter between the Beothuk and Peyton and his
            men. Consider the example of the so-called "Walking Purchase," which
            dates to 1737, nearly a century before Shanawdithit set her maps to
            paper, when the Lenape leader Teedyuscung agreed to sell a parcel of
            land to the Penn family (of the then-colony of Pennsylvania) that
            was bounded by the distance that a man could walk in a day and a
            half. After the treaty was signed, the Penns' agent cleared a trail
            through the land and hired three of the fastest runners he knew to
            run along it, resulting in the Lenape ceding a swath of land twice
            as long as was initially envisioned. In response to the "fraud," as
            Teedyuscung himself called it in his report to colonial officials,
            he subsequently "insisted on drawing his own map to delineate [the
            Lenape] territory and solidify their rights," as Lisa Brooks
            (Abenaki) explains.
            <InlineFootnote index={27} />
          </p>
          <p>
            Or, consider the end result of a seemingly innocuous encounter
            between Ac ko mok ki, a Siksika leader, and a surveyor for the
            Hudson Bay Company named Peter Fidler, which took place at an
            outpost at the juncture of RIVER and RIVER, just east of what is now
            known as Alberta. At the time, however, the outpost represented the
            frontier of colonial knowledge as well as settlement. When asked by
            Fidler about what lay further north and west, Ac ko mok ki traced in
            the snow— from memory—a map of more than 200,000 square miles of the
            continent, narrating the features of the map as he drew. Fidler then
            copied the map onto paper "reduced ¼ from the original," annotated
            it with the information he'd heard Ac ko mok ki speak aloud, and
            then sent the map back to the headquarters of the Hudson Bay Company
            in London. Ac ko mok ki's knowledge was then incorporated into the
            map of the continent that the Hudson Bay Company had been preparing,
            and which three years later would be used by Lewis and Clark to
            determine the route for their nation-marking mission.
            <InlineFootnote index={28} />
          </p>
        </CenteredLayout>
        <CenteredLayout>
          <FigureObj figure={figures["fidler-large-HBCA-E3-2-225"]} />
        </CenteredLayout>
        <TwoColumnLayout>
          <Column>
            <p>
              For the Indigenous knowledge that they consistently capture, and
              the dispossession continually they leave in their wake, maps like
              the Hudson Bay Company's might be understood as weapons -— weapons
              of map destruction, to adapt a phrase from Cathy O'Neil—producing
              colonial nations just as effectively as they reproduce the power
              on which colonialism depends.
              <InlineFootnote index={29} />
            </p>
            <p>
              Colonial maps do not only define the borders of new nations; they
              also define the stories those nations require to grow. At the very
              same time that Shanawdithit was committing the story of her people
              to paper, for example, a settler woman by the name of Emma Hart
              Willard was mapping a new narrative for the United States. The
              Connecticut-born Willard, an educator and activist, designed her
              maps to accompany her US history textbook,{" "}
              <cite>History of the United States</cite>, or The
              <cite>Republic of America</cite>, which was published in 1828.
              Whereas Shanawditith, at that time, was documenting the
              near-complete destruction of the her world, Willard was
              scaffolding a story of American national emergence.
            </p>
            <p>
              From the <HoverText hoverState="Willard1">"First Map"</HoverText>{" "}
              of 1578, which depicts the routes taken by European
              explorers—including John Cabot to Newfoundland, where he likely
              encountered the Beothuk—to the{" "}
              <HoverText hoverState="Willard2">"Second Map"</HoverText> of 1620,
              which depicts the colony of Virginia along with an inset
              documenting the Pilgrims' landing at Plymouth Rock, and on to the
              final <HoverText hoverState="Willard9">"Ninth Map"</HoverText> of
              1826, which are told represents the present day, Willard presents
              a "cumulative statement of nationhood," as historian Susan
              Schulten (settler) describes it, one which enlists the
              knowledge-producing power of the map in the service of a national
              origin story.
              <InlineFootnote index={30} /> This story, as Willard herself
              explained in the preface to her book, would connect otherwise
              isolated events in history "by some common tie," and as a result,
              "contribute much… to the growth of wholesome national feeling."
              <InlineFootnote index={31} />
            </p>
          </Column>
          <Column shouldPin>
            <ColonialMaps />
          </Column>
        </TwoColumnLayout>

        <DocumentViewer />

        <CenteredLayout>
          <p>
            One part of this "wholesome national feeling" was the new narrative
            that the maps provided about the emergence of the United States,
            which we will return to in Chapter 3. But this national feeling was
            premised on the removal of any Indigenous nations that might
            complicate its upward growth. In this context, it is notable that
            the only map to reference Indigenous people or nations is the
            textbook's "Introductory Map," which is subtitled "Locations and
            Wanderings of the Aboriginal Tribes." On this map, Willard places
            labels in the approximate locations of each Indigenous nation or
            tribe that she knew. She also circles each of the tribe's names,
            with the size of the circle indicating its "size and relative
            influence." The color of the circles and the lines connecting them
            indicate affiliation or "migration," in Willard's terms, although it
            is more accurately described as displacement.
          </p>
        </CenteredLayout>

        <WillardScrollytell figure={figures["Willard0"]} />

        <CenteredLayout>
          <p>
            The perspective inhabited by the map is peculiar. On the one hand,
            Willard chooses to label certain waterways with names that seem
            chosen to convey an Indigenous worldview. Instead of the Atlantic
            Ocean, for example—the label that appears on subsequent maps—that
            body of water is here labeled "Salt water Lake or Great Water." Yet
            her choice to present this map as an "Introductory Map," rather than
            incorporate Indigenous nations into a more complete (if not more
            "wholesome") story of the United States, as Schulten convincingly
            argues, "reinforced the contemporary assumption that Native
            Americans existed in a timeless space prior to human history" (25).
            Nations such as the Beothuk are not granted a place in the future of
            North America; only its past.
          </p>
          <p>
            In addition to how they provide evidence of how mapmaking functioned
            as a means of producing colonial knowledge, Willard's maps are also
            instructive for how they more closely connect the maps in this
            chapter to the project of data visualization. While this
            relationship is a complicated one, and often contested, it is
            generally agreed upon that certain maps, which translate data into
            image, can be considered under the rubric of data visualization. For
            Willard, the decision to translate data into image was
            pedagogical—indeed, epistemological—choice. She consistently railed
            against numbers alone for being "hard to acquire, difficult to
            remember, and, standing by themselves, of little value when
            remembered," as she wrote with respect to her "Temple of Time,"
            discussed later in this project.33 As an alternative pedagogical
            strategy, Willard seized upon the model of the "tableau physique,"
            as popularized by the German naturalist and explorer Alexander von
            Humboldt (with A.G. Bonpland), as an example of how to "stimulate
            memory by visualizing information."
            <InlineFootnote index={33} />
          </p>

          <FigureObj
            imageClassName="mx-auto"
            figure={figures["placeholder-humboldt-sketch"]}
          />
          <FigureObj
            imageClassName="mx-auto"
            figure={figures["Geographie_der_Pflanzen_in_den_Tropen-Ländern"]}
          />
          <FigureObj
            imageClassName="mx-auto"
            figure={figures["placeholder-phelps"]}
          />
          <p>
            Whether this information had to do with species of plants that grew
            at specific altitudes, as in the Humboldt visualization reproduced
            in the botany textbook created by Willard's sister, Almira Hart
            Lincoln Phelps, who lived with Willard at the time; or the dates of
            key developments in the development of Western empire, which Willard
            would go on to visualize in the style of Humboldt and his Colombian
            antecedent, Francisco José de Caldas, several years after the
            publication of her textbook, in 1836, Willard believed that "facts"
            (as she termed them) would be better recalled if connected,
            visually, "by some common tie" (Willard, "History," vii). Here
            Willard anticipates the function of visualization that is
            consistently extolled by today's visualization researchers as
            enhancing our ability to detect otherwise imperceptible patterns in
            our data.
          </p>
          <p>[ IMAGE OF CALDAS VIS, WILLARD PICTURE OF NATIONS ] </p>

          <FigureObj
            imageClassName="mx-auto"
            figure={figures["placeholder-caldas-1803-2"]}
          />
          <FigureObj
            imageClassName="mx-auto"
            figure={figures["placeholder-caldas-1803-1"]}
          />
          <FigureObj
            imageClassName="mx-auto"
            figure={figures["Willard-picture"]}
          />

          <p>
            While the images above are perhaps more legible as data
            visualization than Willard's maps, it is worth considering the maps
            for the patterns and other analytical components that they do
            contain. In this regard, Bill Rankin's conceptualization of the
            "analytical map" is helpful, as it helps to distill the components
            of the map that are intended to identify the patterns that prompt
            insight, and those that are intended to be taken as the ground
            truth.
            <InlineFootnote index={34} /> In Rankin's formulation, the map is
            divided into a foreground and a background, where the background is
            the "'base data" that provides the geographic context for the map,
            while in the foreground are plotted additional data sources that
            serve as the analytical contribution of the map. As Rankin also
            observes, the choice of which datasets are placed in the foreground
            and which are placed in the background are just that—choices—and
            those choices are both rhetorical and political. In the case of
            "Locations and Wanderings of the Aboriginal Tribes," Willard places
            US state borders in the background of the map, enhancing their
            authority by presenting them as the literal ground truth on which
            Native peoples, past and present, are superimposed.
          </p>
          <p>
            With an awareness of the foreground/background divide and the
            rhetorical significance of what information is placed where, it's
            worth returning to Shanawdithit's maps once again in order to
            contemplate an additional way in which they teach us about her
            worldview and its distance from our own. More specifically,
            Shanawdithit rejects the distinction between foreground and
            background, presenting people and place in a single visual plane. In
            doing so, she insists on her cultural as well as geographic
            authority. Her worldview is one that insists upon the connection of
            people to the land, and her map gives this relationality visual
            form.
            <InlineFootnote index={35} /> Viewing her map from a settler
            perspective, and at more than two centuries removed, we cannot know
            the exact stories that order these relations.37 But we can
            recognize—and respect—the visual evidence of an ordering practice
            outside of our own.
          </p>
          <p>
            The Colonial Archive and the Lookout Tree Indigenous Data
            Sovereignty, Indigenous Data Systems /// Shanawdithit's Maps as Data
            System/// The Colonial Archive and the Lookout Tree THIS SECTION IS
            ONE THAT POINTS TO LONG HISTORY OF INDIGEOUS DATA VISUALIZATION BUT
            RESISTS GOING THERE; ISNTEAD VISUALIZES COLONIAL ARCHIVE, SOURCES,
            ETC.
          </p>
          <p>
            Like Willard, Shanawdithit also produced multiple maps, although
            less is known about the intention—if any—behind their ordering. When
            reproducing them for his volume, Howley places them in chronological
            order (238), listing MENTION WHAT THE FIVE MAPS SHOW. but it is
            unclear as to whether they were drawn in that order or conceived in
            sequence. It is also worth noting that Shanawdithit accompanied her
            five maps with drawings of other aspects of Beothuk cultural life.
            With the sensitivity to colonial power that frames the maps, as
            Goeman would likely advice, their sequence—like Willard's—enforces a
            narrative of the extinction of the Beothuk people, as well as about
            the role that data played in that process.
          </p>
          <p> [ FIVE MAPS, HOVER TO SELECT LIKE DU BOIS ] </p>
          <p>
            As PERSON observes, QUOTE ABOUT COLONIAL DATA / NUMBERS /
            MEASUREMENT OF NATIVE PEOPLES. This knowledge-via-quantification is
            no clearer than the so-called Sketch IV, which depicts a significant
            swath of the Exploits River. Howley observes that it is drawn in
            black pencil only "because I presume as no whitemen figured in this
            one, there was no occasion to make a distinction by the use of the
            black and red lines" (243). And while there might not have been
            settlers pictured in Shanawdithit's rendering of the water and land,
            there is a clear presence of "whitemen" in the form of Cormack's
            annotations, which—also by Howelys' account, were "written all over
            it" (243). These notes are largely numerical, representing Cormack's
            attempt to enumerate the Beothuk population during the final years
            of its existence as an independent nation. (Note about merging into
            M'iqmaq, Innu). At the top of the page are two sets of enumerations
            of the Beothuk population—the first in March 1823, indicated by an
            "A," and the second in April 1823, indicated by a "C," between which
            the population had diminished from 27 to 19. Corrmack provides
            separate counts for men, women, children, and the dead, who are
            summed together through arithmetic notation. At various places on
            the map, Cormack transcribes what (presumably) Shanawdithit told him
            about the people who inhabited the land pictured. These appear to be
            written with ease. This stand in contrast to the large table of
            population statistics at the center of the chart, which while
            presented in clear tabulations in Howely's recreation, in the
            original contains more scribblings and crossings-out than numbers.
            Cormack clearly strained to arrive at precise population figures—his
            intended goal and the ultimate arbiter of colonial knowledge about
            the Beothuk—this in contrast to Shanawdithit's smooth lines that
            document the landscape's physical geography.
          </p>
          <p> [ SCROLLYTELL LIKE ABOVE ]</p>
        </CenteredLayout>
        <TwoColumnLayout>
          <Column shouldPin={true}>
            <p className="first-paragraph">
              This map vivifies the extractive statistical practices that have
              motivated deep suspicion of colonial data by Indigenous peoples,
              as well as the motivation for the development of Indigenous data
              practices—and Indigenous research protocols more generally—that
              can counter these extractive moves. Grouped together under the
              concept of Indigenous Data Soverignty, proposals such as the CARE
              principles for data sovereignty, or the ANOTHER EXAMPLE for
              Indigenous cultural heritage, show how the principles and
              practices of data collection, analysis, and—indeed,
              visualization—can be reconsidered through an Indigenous lens. As
              AUTHORS explain, "For Indigenous Peoples, the statistics and data
              themselves per se, are not the problem. From a policy perspective,
              the far more critical question is how are such numbers deployed
              and what and whose purposes do they, and their attendant
              narratives, serve" (2). As settler scholars without Beothuk
              partners in this project, we cannot fully realize these principles
              here. But we can keep them in mind as we continue to work towards
              methods that acknowledge and account for the colonial frame. As a
              first step we might reconsider the visualizations that structure
              our work as only one component of a broader data system, one which
              includes the people who created the data, the context, events, etc
              etc. Here an example of another Indigenous data visualization
              practice, the wampum belt, is instructive. Below is pictured the
              famed two-row wampum created by the Haudenosaunee, [ IMAGE OF
              TWO-ROW WAMPUM ]
            </p>
            <p>
              Kaswenta is symbolized by a wampum belt crafted from the white
              shells of the channelled whelk snail and the purple shells of the
              qualog clam. Across the belt flow 9 rows of white shells that
              represent the River of Life. There are 4 rows of purple shells
              forming two separate horizontal lines in the center of the belt.
              One purple row denotes the Haudenosaunee canoe, the other is the
              European tall ship. The three white shells separating them shows
              a respectful relationship based on peace, trust, and friendship -
              all values inherent in Kayanerenkó:wa also known as The Great Law
              of Peace.The strings flowing on each side of the belt show that
              more beads can be added and, therefore, the relationship is
              eternal. The two rows never intersect; they are parallel. This
              denotes a separate-but-equal relationship that respects each
              other's sovereignty. The Haudenosaunee never steer the Dutch ship,
              and the Dutch never steer the Haudenosaunee canoe as they both
              travel down the River of Life. Both parties respect each other's
              autonomy and interdependence. Haudenosaunee consider the Kaswenta
              as a valid and ongoing treaty. Some settlers refuse to acknowledge
              this because of a single forged document. These settlers claim
              that the Two Row Wampum is a modern construction used to satisfy
              contemporary political needs but those ignorant, and racist,
              claims misrepresent the actual data source. Wampum belts are not a
              replacement for paper, they embody a different way of thinking
              about data. These belts act as symbolic reminders and public
              demonstrations of active and ongoing relationships. Haudenosaunee
              use them as a guide to help narrate complex understandings of
              sacred promises made between both parties involved and the
              Creator. … Wampum belts are part of a complex data system that
              records, stores, analyzes and shares information for as long as is
              necessary. The belts themselves are just a part of the data
              system, that's why the Canadian government failed to destroy
              Haudenosaunee databases and explains why they are still such a
              potent symbol of Indigenous sovereignty and an excellent example
              of Indigenous Data Sovereignty in practice.  While labor
              intensive, the belts can be remade and many remain as part of a
              living treaty system still recognized hundreds of years after the
              treaties were first made. This is because the belts are part of an
              ongoing relationship between the treaty holders, the leaders
              involved, the people they serve, and the Creator. They don't
              depend on one way to store a record, they store it with multiple
              knowledge holders as well as the community at large. These records
              are refreshed by authorized leaders in diplomatic missions and
              internal community decision making. They are visible reminders of
              something that cannot be denied as long as the people remain --
              Kelsey, Reading the Wampum Idea of Iriquois "visual code, a set of
              mutually understood symbols and images that communicate
              culturally-embedded ideas to the viewer" xii Angela Haas, "In
              order to memorize the belt and its story, the trained individaul
              would impress in the mind the visual representaiotn of the belt
              and subsequently forge mnemonic associations between the visual
              representation of the belt and the accompnayin story. Thus the
              wampum "reader" or presenter can trace the nodes of information
              and can link their associated inherited knowledge by tracing the
              embedded stories "told" by wampum and sinew hypertext… xviii The
              Two Row Wampum depicts the Hodiohso:ni' in a canoe and the Dutch
              in a ship sailing down the river of life with each group retaining
              their own language, culture, spirituality, and ways of being and
              not forcing their beliefs on the other group. xi BROOKS, RELATION
              B/T MAP AND WAMPUM Whiel awikhjoganak were often temporary,
              characterized by their "portability," wampum symbolized
              permanence. When an agreemtn, an alliance, or an event was put in
              wampum, a transformation in Native space was solidified. 10
              Awikhjoganak and wampum were facets of an indigenous writing
              system that was based on ‘cartographic principles.' The graphic
              symbols used in both forms represented the relatinoships between
              people, between places, between humans and nonhumans, between the
              waterways that joined them. The communal stories recored on
              birchbark and in wampum would even connect people with relatinos
              across time, bringing the past, present, and future into the same
              space. 12 citing Malcolm Lewis MAP OF HAUDENOSAUNEE THAT LOOKS LIK
              NEW YORK:
              https://blogs.loc.gov/loc/2021/11/native-american-maps-and-ideas-that-shaped-the-nation/
            </p>
          </Column>
          <Column shouldPin>[IMAGES HERE]</Column>
        </TwoColumnLayout>
        <ChapterSectionTitle section={sections[3]} />
        <CenteredLayout>
          <p>
            What we learn from the map and the wampum is that TIME , LAND,
            ARCHIVE ALL RELATED. How might we visualize the data system that
            gave rise to Shanawdithit's maps and that has preserved them into
            the present? Below is pictured a diagram of the people, places,
            archives, sources, dates… [DO THIS VIS]
          </p>
        </CenteredLayout>
        <Takeaways
          forDesigners={[
            <span key="df782d45">
              Takeaway 1 Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </span>,
            <span key="6440631a">
              Takeaway 2 Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </span>,
            <span key="2f317172">
              Takeaway 3 Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </span>,
          ]}
          forViewers={[
            <span key="75cf526a">
              Takeaway 1 Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </span>,
            <span key="6d2691fc">
              Takeaway 2 Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </span>,
            <span key="9650286d">
              Takeaway 3 Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </span>,
          ]}
        />
      </ChapterBody>
      <CenteredLayout>
        <FootnotesList footnotes={shanawdithitFootnotes} />
      </CenteredLayout>
      <Footer />
    </ChapterContext.Provider>
  );
}
