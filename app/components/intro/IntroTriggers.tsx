import PullQuote from "~/components/PullQuote";
import RandomImagesIntoGrid from "~/components/intro/RandomImagesIntoGrid";

const IntroTriggers = [
  <p key={"2c8354f7"}></p>,
  <p key={"6f989444"}>
    The appeal of a timeline is easy to understand. For one, a clear trajectory
    that connects past to present is satisfying; it’s easy to reconcile with how
    we experience the world today. But more subtly, it also authorizes our
    experience of the world. A line is teleological—it implies that we have
    inexorably arrived at this world and only this world, and that there are no
    other possible paths.
  </p>,
  <p key="4653b4af">
    But the reality is that there are many paths that take us from past to
    present. Some paths lead us not to this world, but to worlds never
    realized—or to worlds that require us to “push us beyond the constraints of
    what we think, and are told, is politically possible” in order to usher into
    existence, as sociologist Ruha Benjamin invites us to consider. These
    imagined futures are worlds still waiting to come to be.
  </p>,
  <p key="0733c36">
    A timeline cannot convey this range of possibilities, but a shuffle
    can—images scattered across a canvas, rather than ordered into a line.
  </p>,
  <PullQuote
    key="f7b3b4ef"
    title="Whereas a timeline says “this, then that,” a shuffle indicates “this and that”"
    subtitle="—a deemphasis on “firsts,” an opening up of multiple paths forward, and an easier way to see these possibilities in relation to each other"
  />,
  <div key="542d9b4b">
    <p>
      The impact—and, therefore, the responsibility—of the choice of which path
      to take was what we what we wanted to convey to the viewer. And the
      shuffle would help get us there.
    </p>
    <p>
      Accordingly, each time a person visits the site, they see a different set
      of images displayed on the screen. But by starting with a shuffle, all of
      the images are rendered on an even plane. It’s then up to the user to
      select an image, and on the basis of that choice, a timeline then snaps
      into view. The user can then “scrub” from left to right, as Dan suggested
      early on, to see the images that come before and after, and to allow the
      narrative that connects them to begin to take shape. Or they can shuffle
      again, opening up an entirely new set of possible paths.
    </p>
  </div>,
  <p className="z-30" key="217dc82d">
    The images are randomly selected from the nearly two hundred charts, graphs,
    and other visualizations that are included in the project.
  </p>,
  <RandomImagesIntoGrid />,
  <div key="a609783e" className="flex justify-between items-center w-screen">
    <div className="w-1/2">
      <p>
        Some of the images go on to serve as centerpieces of the chapters in
        which they appear, their history and significance elaborated in
        extensive detail.
      </p>
    </div>
    <div className="w-1/2">
      <img className="max-w-lg" src="/images/peabody/1500s.webp" alt="" />
    </div>
  </div>,
  <p key="1d5bc9f0">
    Shuffle once and a familiar sight may appear: the faded orange flow-line
    that anchors Charles Minard’s famed chart of Napoleon’s failed Russian
    campaign (1869).
  </p>,
  <p key="81249094">
    The flow-line decreases in volume as it moves from left to right across the
    page, corresponding to the decreasing size of the Grande Armée as the
    campaign wore on.
  </p>,
  <p key="2b28a517">
    A thinner flow-line below, in inky black, travels back from right to left,
    indicating the far fewer number of troops that ultimately survived.
  </p>,
  <p key="8a91676d">
    Counts placed along the lines provide more precise estimates of the army’s
    size at crucial junctures. Also included are the names of key geographic
    features—primarily cities and rivers—which can be cross-referenced with the
    more conventional map above.
  </p>,
];

export default IntroTriggers;
