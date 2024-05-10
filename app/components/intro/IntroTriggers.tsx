import PullQuote from "~/components/PullQuote";
import RandomImagesIntoGrid from "~/components/intro/RandomImagesIntoGrid";
import ShanawdithitAndMinard from "~/components/intro/ShanawdithitAndMinard";
import InlineFootnote from "../InlineFootnote";

const IntroTriggers = [
  <p key="2c8354f7"></p>,
  <p key="6f989444">
    The appeal of a timeline is easy to understand. For one, a clear trajectory
    that connects past to present is satisfying; it’s easy to reconcile with how
    we experience the world today. But more subtly, it also authorizes our
    experience of the world. A line is teleological—it implies that our arrival
    in the present moment has been inexorable—this world is the only world in
    which we could be, and that there are no other possible paths we could have
    taken to get here.
  </p>,
  <p key="4653b4af">
    But the reality is that there are many paths that take us from past to
    present. This is reason for the tremendous power of being able to choose how
    to tell a story. For these paths are rarely linear, and are often traveled
    at the same time. Some of these paths are well-worn and familiar, while
    others are far less trafficked, or never trodden in the first place. Some
    paths lead us not to this world, but to worlds never realized—worlds that
    don’t actually exist but are still worth our consideration, worlds that
    require us, in the words of sociologist Ruha Benjamin, to “push us beyond
    the constraints of what we think, and are told, is politically possible.”
    <InlineFootnote index={6} /> These imagined futures are worlds still waiting
    to come to be.
  </p>,
  <p key="0733c36">
    A timeline cannot convey this range of possibilities, but a shuffle
    can—images scattered across a canvas, rather than ordered into a line.
  </p>,
  <PullQuote
    key="f7b3b4ef"
    title="Whereas a timeline says “this, then that,” a shuffle indicates “this and that”"
    subtitle="—a deemphasis on “firsts,” and an emphasis on the many ways these possibilities exist in relation to each other."
  />,
  <div key="542d9b4b">
    <p>
      An acknowledgement that there are always multiple paths forward was what
      we wanted to convey to the viewer: that each of us makes choices about
      which path to take, and therefore each of us is responsible for our
      choices.
      <InlineFootnote index={7} /> The shuffle would help get us there.
    </p>
    <p>
      Accordingly, each time a person visits the site, they see a different set
      of images displayed on the screen. The images are randomly selected from
      the nearly two hundred charts, graphs, and other visualizations that we’ve
      included in the project. Some of the images go on to serve as centerpieces
      of the chapters in which they appear, their history and significance
      elaborated in extensive detail. Others are referenced only in passing,
      their deeper significance left for other scholars to explore. But by
      starting with a shuffle, all of the images are rendered on an even plane.
      It’s then up to the user to select an image, and on the basis of that
      choice, a timeline then snaps into view. The user can then “scrub” from
      left to right, as Dan suggested early on, to see the images that come
      before and after, allowing the narrative that connects them to begin to
      take shape. Or they can shuffle again, opening up an entirely new set of
      possible paths.
    </p>
  </div>,
  <p className="z-30" key="217dc82d">
    The images are randomly selected from the nearly two hundred charts, graphs,
    and other visualizations that we’ve included in the project.
  </p>,
  <RandomImagesIntoGrid key="2db87637" />,
  <div
    key="a609783e"
    className="flex flex-col md:flex-row justify-between items-center w-screen"
  >
    <div className="w-4/5 md:w-1/2">
      <p className="md:mr-8">
        Some of the images go on to serve as centerpieces of the chapters in
        which they appear, their history and significance elaborated in
        extensive detail.
      </p>
    </div>
    <div className="md:w-1/2">
      <img
        className="max-w-xs md:max-w-lg"
        src="/images/peabody/1500s.webp"
        alt=""
      />
    </div>
  </div>,
  <p key="1d5bc9f0">
    Shuffle once and a familiar sight may appear: the faded orange flow-line,
    for example, that anchors Charles Minard’s famed chart of Napoleon’s failed
    Russian campaign (1869).
  </p>,
  <p key="81249094">
    The flow-line decreases in volume as it moves from left to right across the
    page, a visual representation of the decreasing size of the{" "}
    <em>Grande Armée</em> as the campaign wore on.
  </p>,
  <p key="2b28a517">
    A thinner flow-line below, in inky black, travels back from right to left,
    indicating the far fewer number of troops that ultimately survived.
  </p>,
  <p key="8a91676d">
    Counts placed along the lines provide more precise estimates of the army’s
    size at crucial junctures. Also included are the names of key geographic
    features—primarily cities and rivers.
  </p>,
  <p key="aa79dccb">
    Fine vertical guides connect the lower flow-line a time-series chart below,
    which plots the freezing temperatures that contributed to the army’s
    staggering death-count and, as the chart conveys, its ultimate defeat.
  </p>,
  <div key="4621797e4">
    <p>
      If you click on this image, then, one possible timeline for the history of
      data visualization snaps into view. It is constituted by great men and
      iconic images, and it has Minard’s chart at its very center. For if the
      story told in the chart is one of hubris and of the horrors of war, the
      story told about the chart is nothing short of heroic. It’s been upheld as
      the epitome of the “golden age of graphics.” It’s been acclaimed for its
      “singular rhetorical power,” and for how it communicates its own “epic
      story” in ways that “had never been done before.”{" "}
      <InlineFootnote index={8} /> Edward Tufte, the best-known contemporary
      scholar of data visualization, has gone so far as to claim that Minard’s
      chart “may well be the best statistical graphic ever drawn.”{" "}
      <InlineFootnote index={9} />
    </p>
    <div>
      <img src="/images/intro/tufte-quote.png" alt="" />
      <img src="/images/intro/tufte-quote-2.png" alt="" />
    </div>
  </div>,
  <div key="6eebc10a" className="z-20 bg-offwhite p-5">
    <p>
      For Tufte, Minard’s chart epitomizes the “graphical excellence” that he
      has devoted his own life’s work to promoting: characterized by the
      qualities of “clarity, precision, and efficiency”; conveyed through a
      sparse, minimal aesthetic and an intentional absence of “chart junk.”
      (“Chart junk” is just what is sounds like—unnecessary visual embellishment
      that clutters the visual field.)
    </p>
    <p>
      In support of this ideal, Tufte constructs his own timeline for the
      history of the field, one that borrows from nineteenth and
      twentieth-century histories, and that has been carried into the
      twenty-first century largely unchanged. <InlineFootnote index={10} /> This
      chronology looks back to the late eighteenth-century time-series charts of
      the Swiss-German mathematician Johann Heinrich Lambert and the Scottish
      political economist William Playfair—the subject of the second chapter of
      this book—who, together, Tufte dubs “the two great inventors of modern
      graphical designs.”
    </p>
  </div>,
  <p key="637c78f4" className="z-30 bg-offwhite p-5">
    It passes through the “most worthy” epidemiological maps of the British
    physician John Snow, created in the 1850s, and continues on through Minard
    into the late nineteenth century with the proto-modernist train schedule
    diagrams of French scientist Étienne-Jules Marey, himself also a historian
    of the field. Throughout, this timeline of “founders” and “fathers” enforces
    the narrative of singular innovation and heroic achievement that Minard’s
    chart exemplifies. Furthermore, it looks to the formal qualities of the
    charts in order to confirm their admission into this visualization pantheon.
    Indeed, a defining feature of Tufte’s “graphical excellence” is that it
    enables the viewer to focus on “the substance of the findings rather than
    the methodology, the graphical design, or other aspects” of the chart’s
    creation. This definition leaves no room for additional context—historical
    or otherwise—that might help to expand a chart’s significance, or tell us
    more about the data on display.
  </p>,
  <p key="2e3444df" className="z-20 bg-offwhite p-5">
    But every chart—just like every other work of knowledge—is created within a
    particular context, of course. We believe that an attention to these
    contexts—historical as well as social and political—can tell us far more
    about the meaning of any and every chart than what is depicted on its
    surface.
  </p>,
  <p key="c7a54e7e">
    So what happens if we shuffle again? Other images will appear. Perhaps one
    catches your eye—one you’ve never seen before.
  </p>,
  <p key="aa6abe95" className="z-20 bg-offwhite p-5">
    This chart is absent from Tufte’s account, as it is from most other
    histories of the field. Upon first glance, its exclusion would seem
    warranted, as its style diverges sharply from Tufte’s modernistic mien. Its
    visual field is defined not—pace Minard—by bold shapes and sharp angles, but
    instead by a pair of meandering lines. It is composed in humble pen and ink,
    rather than a lithographer’s practiced hand.
  </p>,
  <div key="679ce11d" className="z-20 bg-offwhite p-5">
    <p>
      While it does contain some statistical information—the tick marks in the
      chart’s lower right quadrant, for example—the image is dominated by
      clusters of what appear to be small figures, penned in black and in a
      rusty shade of red. (Representational imagery is adamantly absent from
      Minard’s work.)
    </p>
    <p>
      And yet this chart is both more closely connected to Minard’s, and even
      more distinct, than might initially appear. Acknowledging these
      similarities and differences requires an attention to context—a commitment
      to looking beyond the borders of the chart itself, and even to the
      possibility that the full significance of the chart, and the story that it
      tells, may forever remain out of reach.
    </p>
  </div>,
  <div key="8a8745b3" className="z-20 bg-offwhite p-5">
    <p>
      Click on this chart, then, and see a new timeline snap into view. This
      timeline sets us on a path that travels back to the winter of 1829, when a
      Beothuk woman, Shanawdithit, created the original drawing—on which the
      image we are looking at, a 1915 reproduction, is based. It passes through
      the dark and often deadly history of colonial knowledge extraction—the
      innumerable ways that European explorers, and later settlers, gathered
      information from those they colonized in order to bolster their own
      economic, political, or territorial power. It leads into the archive,
      where I encountered the original image and the others presented throughout
      this site.
    </p>
    <p>
      And it culminates in a lesson: that the depth of our knowledge about the
      history of data visualization, and our sense of the possibilities for its
      future, depends on how the story of the emergence of data visualization is
      told. Indeed, if the initial argument of Data by Design is of the
      importance of starting with a shuffle, so as to consider the multiplicity
      of possible paths, then this argument expands into an even more powerful
      claim: that the history of data visualization is itself comprised of a
      near-infinite number of stories, and that by looking at any two together,
      we arrive at a more complete picture of all.
    </p>
  </div>,
  <ShanawdithitAndMinard key="4dea932a" />,
];

export default IntroTriggers;
