import { useContext, useEffect, useRef, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { ClientOnly } from "remix-utils";
import Variables from "~/components/brooks/voyageScrollytell/Variables";
import InlineFootnote from "~/components/InlineFootnote";
import Picture from "~/components/layout/Picture";
import PullQuote from "~/components/PullQuote";
import ScrollytellSlideShow from "~/components/ScrollytellSlideShow";
import ScrollytellWrapper from "~/components/ScrollytellWrapper";
import figures from "~/data/figures/brooks.json";
import FiskColors from "./FiskColors";
import VoyageExample from "../voyages/VoyageExample";
import VoyagesVis from "../voyages/VoyagesVis.client";

const minScrollProgress = 16;
const BACKGROUND = [224, 220, 242];
const initialStartYear = 1565;
const initialEndYear = 1865;

const triggers = [
  <span key="490b6e1c">
    One variable included in the dataset, labeled “Resistance,” seemed to hold
    the key to this work.
  </span>,
  <span key="38d0f8a6">
    It contained seven categories for indicating the form of resistance that
    took place on any particular trip. Could we use the “Resistance” variable to
    create a visualization that, to recall Browne's phrase, “looked back at the
    gaze from nowhere”? We began by pulling out the voyages that had any form of
    “resistance” associated with them, as well as six of the more basic
    variables that were associated with each trip.
  </span>,
  <span key="8e1ece04">
    The additional variables we selected, the voyage's start date, its end date,
    the total number of individuals who “embarked” on the voyage, and the total
    number of the individuals who disembarked, would allow us to provide a basic
    picture of each of the 572 voyages that contained a documented act of
    resistance.
    <InlineFootnote index={41} />
  </span>,
  <span key="442c2e00">
    Because our initial motivation was to visualize the dataset from the
    perspective of the enslaved, our design departed from a frequent observation
    made about the experience of the Middle Passage: that the captives did not
    experience time as linear while in the hold of the ship.
    <InlineFootnote index={42} />
  </span>,
  <span key="cd4ac8ca">
    Drawing visual inspiration from Harold Fisk's alluvial diagram of the
    Mississippi River, which, as artist and scholar Romi Morrison explains,
    “deemphasizes the linearity of the river” in favor of showing a comparative
    view of its various paths over time, we arrived at an idea to use bends and
    turns to represent the non-linearity of the Middle Passage.
    <InlineFootnote index={43} />
  </span>,
  <span key="156434b0">
    We also kept the vertical orientation of the visualization so as to ensure
    that the viewer could not interpret the paths of the voyages as
    corresponding to any actual location on a map.
  </span>,
  <span key="963d2d76">
    Borrowing the color palette from the Fisk diagram, but muting the colors so
    as to ensure that this visualization of an experience of trauma would not
    inadvertently become beautiful to perceive, we represented each voyage as a
    snaking line determined by the number of captives held on each ship.
  </span>,
  <span key="a2565c78">
    In the final visualization, the width at the top of each “bind,” as we came
    to call them, corresponds to the number of captives who departed from Africa
    on each ship. The width at the bottom corresponds to the number who arrived
    in the Americas having survived. The duration of each voyage is conveyed
    through the amplitude of each bind, but plotted from the side. In other
    words, longer voyages have wider curves, and shorter voyages narrower ones.
  </span>,
  <span key="d4c5b977">
    While Fisk's original design superimposes the floodplains of the Mississippi
    from all points in time on a single image, we chose to retain the start date
    of each voyage, since the rise and fall of the slave trade—and the
    resistance that met it throughout—remained important for us to convey. Here
    the binds are arranged chronologically, from the first recorded act of
    resistance aboard a slave ship in 1565, through the last in 1865.
  </span>,
  <span key="2356b657">
    Since the majority of the voyages lacked data on the month or day of
    departure, we grouped the voyages by year. While the visual effect of this
    decision is not visible when viewing the voyages as a whole, zooming in on a
    particular time span exposes these clusters for closer inspection.
  </span>,
  <span key="90c3c7eb">
    As an example, we might consider the time-span between 1756 and 1766, the
    decade during which Olaudah Equiano was enslaved. Within each year, we can
    also see that the binds themselves overlap—what is called “occlusion” in
    visualization design. While generally viewed as a design problem, and
    something to avoid, we made the decision not to further space out the
    voyages because of viewing them together communicates the collective force
    of these acts of resistance, as well as the additional nuance that a single
    inclusion criterion—resistance or not—cannot convey.
  </span>,
  <span key="cf140bd8">
    The voyage that took Equiano from Benin to Barbados and on to Virginia is
    not pictured in this chart, however, for it did not include a form of
    resistance that was documented in the database. But it might have been
    included among the 35,504 additional voyages that the database currently
    contains.
  </span>,
  <span key="2deac1f9">
    With the additional voyages also plotted, the binds transform into
    life-affirming arteries within the sinews of human flesh.
    <InlineFootnote index={44} /> But as evocative as this visual representation
    may be, there are many other forms of resistance, large and small, that this
    visualization does not convey.
  </span>,
  <span key="7ed03972">
    In his autobiography, for example, Equiano recalls observing acts of
    resistance aboard the ship that were set in motion, but ultimately
    “prevented by the ship's crew.” These acts of resistance likely had concrete
    effects, both for the crew which—in their need to suppress them—perhaps also
    attuned them to the odious nature of the acts in which they were engaged;
    and for the captives, who perhaps might have taken heart—or inspiration—in
    the possibilities to push back against their likely fate. But as unfinished
    acts of resistance, they would have gone unrecorded in the dataset
  </span>,
  <span key="8562b8b3">
    We might also consider the myriad number of smaller acts of resistance,
    including those in which Equiano himself engaged. Upon first being captured,
    for example, Equiano described how he refused to eat; and when his captor
    attempted to give him a new name, depriving him of his identity and his Ibo
    roots, “I refused to answer to my new name,” Equiano explains.
    <InlineFootnote index={45} /> Equiano's more “quiet” forms of resistance, as
    Kevin Quashie might term them, were also real, and also meaningful, even as
    they remain difficult to represent as data ever at all.
  </span>,
  <span key="f754f6ea">
    It was here, again, that we turned to the power of data visualization to
    bring these quiet acts of resistance to light. In the final view, we display
    all 36,079 voyages with a color fill, implying that every single journey
    involved acts of resistance—some that are recorded in the dataset, some that
    took place but went unrecorded, and some that defied recording at all. What
    we were visualizing, our process allowed us to see, was not actually the
    slave trade, but the data it had left in its wake.
  </span>,
  <span key="c7a66f59">
    In order to underscore this point, we drew from a palette of common
    visualization techniques. But we did not use them in the way that they are
    commonly employed. For example, instead of providing an overview first, and
    then “details on demand,” our visualization begins with the details of the
    resistance voyages. But as the additional voyages are layered into the
    frame, the viewer can no longer see clearly enough to deduce anything about
    a specific voyage. This is intentional, because the insight that we seek to
    prompt exceeds the data on display: that there are certain phenomena, such
    as the slave trade itself, which we can never fully understand.
  </span>,
];

const VoyageScrollytell = () => {
  const { accentTextColor } = useContext(ChapterContext);
  const [scrollProgress, setScrollProgress] = useState<number>(0.0);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const steps = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollProgress > minScrollProgress && scrollProgress % 1 > 0.25) {
      setSlideIndex(Math.ceil(scrollProgress) - minScrollProgress);
    } else if (scrollProgress <= minScrollProgress + 0.25) {
      setSlideIndex(0);
    }
  }, [scrollProgress]);

  return (
    <ScrollytellWrapper
      setScrollProgress={setScrollProgress}
      steps={steps}
      bgColor="brooksSecondary"
      triggers={triggers}
      id="voyage-scrollytell"
      className="w-screen"
    >
      <div className="sticky pt-8 md:pt-0 top-20 h-screen grid grid-cols-2 md:content-end order-first">
        <div></div>
        <ScrollytellSlideShow
          className="max-h-[95vh] max-w-[90%] md:my-16 mx-auto"
          slideIndex={slideIndex}
        >
          {/* 0 */}
          <Picture
            figure={figures["query"]}
            className="drop-shadow-none md:mt-[25%]"
          />
          {/* 1 */}
          <div className="h-2/5 grid content-center">
            <Picture
              figure={figures["query2"]}
              className="drop-shadow-none md:mt-[25%]"
            />
          </div>
          {/* 2 */}
          <div className="md:mt-[25%] w-[95%]">
            <Variables />
          </div>
          {/* 3 */}
          <Picture
            figure={figures["image23"]}
            className="h-4/6 text-center md:mt-[25%]"
          />
          {/* 4 */}
          <div className="p-8 h-2/5 grid content-center md:mt-56">
            <PullQuote
              title={
                'Fisk\'s "representation [of the river] is one of unbridled tangles, and recursively looped waterways that flow, spread, and interrupt each other, a cacophony of effusion, a watery din."'
              }
              subtitle={
                '— Romi Morrison, "Gaps between the digits: On the fleshy unknowns of  the HUMAN" (2019)'
              }
            />
          </div>
          {/* 5 */}
          <div className="">
            <FiskColors />
          </div>
          {/* 6 */}
          <ClientOnly>
            {() => (
              <VoyagesVis
                id="sample-voyages"
                startYear={1586}
                endYear={1588}
                showSlider={false}
                allVoyages={false}
                background={BACKGROUND}
                fullColor={true}
                heightAdjust={1}
                widthAdjust={0.2}
                isSample={true}
              />
            )}
          </ClientOnly>
          {/* 7 */}
          <div>
            <div className="p-6 md:mt-56">
              <VoyageExample />
            </div>
          </div>
          {/* 8 */}
          <div></div>
          {/* 9 */}
          <div></div>
          {/* 10 */}
          <div></div>
          {/* 11 */}
          <div></div>
          {/* 12 */}
          <div></div>
          {/* 13 */}
          <Picture
            figure={figures["autobiographyPLACEHOLDER"]}
            className="md:mt-56"
          />
          {/* 14 */}
          <div className="p-8 h-2/5 grid content-center md:mt-56">
            <PullQuote
              title="This argument for quiet aims to give up resistance as a framework in search of what is lost in its all-encompassing reach."
              subtitle='— Kevin Quashie, "The Sovereignty of Quiet: Beyond Resistance in Black Culture" p5. (2012)'
            />
          </div>
          {/* 15 */}
          <div></div>
          {/* 16 */}
          <div></div>
          {/* 17 */}
          <div></div>
        </ScrollytellSlideShow>
        <div className={`${slideIndex > 4 ? "absolute" : "hidden"}`}>
          <div
            className={`fixed bottom-0 transition-opacity duration-1000 opacity-${
              slideIndex >= 8 && slideIndex <= 9 ? 100 : 0
            }`}
          >
            <ClientOnly>
              {() => (
                <VoyagesVis
                  startYear={initialStartYear}
                  endYear={initialEndYear}
                  background={BACKGROUND}
                  showSlider={false}
                  showAxis={slideIndex === 9}
                  allVoyages={false}
                  id="resistance-only"
                />
              )}
            </ClientOnly>
          </div>

          <div
            className={`fixed bottom-0 transition-opacity duration-1000 opacity-${
              slideIndex === 10 ? 100 : 0
            }`}
          >
            <ClientOnly>
              {() => (
                <VoyagesVis
                  id="resistance-only-1756"
                  startYear={1756}
                  endYear={1766}
                  showSlider={false}
                  allVoyages={false}
                  background={BACKGROUND}
                />
              )}
            </ClientOnly>
          </div>
          <div
            className={`fixed bottom-0 transition-opacity duration-1000 opacity-${
              slideIndex === 11 ? 100 : 0
            }`}
          >
            <ClientOnly>
              {() => (
                <VoyagesVis
                  id="all-1756"
                  startYear={1756}
                  endYear={1766}
                  showSlider={false}
                  allVoyages={true}
                  background={BACKGROUND}
                  fullColor={false}
                />
              )}
            </ClientOnly>
          </div>

          <div
            className={`fixed bottom-0 transition-opacity duration-1000 opacity-${
              slideIndex === 12 ? 100 : 0
            }`}
          >
            <ClientOnly>
              {() => (
                <VoyagesVis
                  id="all-full-color-1756"
                  startYear={1756}
                  endYear={1766}
                  showSlider={false}
                  allVoyages={true}
                  fullColor={true}
                  background={BACKGROUND}
                />
              )}
            </ClientOnly>
          </div>

          <div
            className={`fixed bottom-0 transition-opacity duration-1000 opacity-${
              slideIndex >= 15 && slideIndex < 17 ? 100 : 0
            }`}
          >
            <ClientOnly>
              {() => (
                <VoyagesVis
                  startYear={1776}
                  endYear={1786}
                  background={[224, 220, 242]}
                  showSlider={false}
                  showAxis={true}
                  id="scrollytell-allVoyageContainer"
                />
              )}
            </ClientOnly>
          </div>
        </div>
      </div>
      <div
        ref={steps}
        className="relative translate-y-[calc(-100vh+120px)] pointer-events-none md:mt-96 md:w-full"
      >
        {triggers.map((trigger, index) => {
          return (
            <div
              key={`voyageScrollytell-${trigger.key}`}
              data-step={index}
              className={`pointer-events-none step text-xl p-5 md:px-20 relative ${
                index + 1 === triggers.length ? "h-[50vh]" : "h-screen"
              } ${
                (index >= 8 && index <= 12) || index >= 15 ? "w-auto" : "w-1/2"
              } text-${accentTextColor}`}
            >
              <p className="bg-brooksSecondary-translucent p-3 md:p-12">
                {trigger}
              </p>
            </div>
          );
        })}
      </div>
    </ScrollytellWrapper>
  );
};

export default VoyageScrollytell;
