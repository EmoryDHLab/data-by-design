import Carousel from "nuka-carousel";
import { leftControls, rightControls } from "../layout/SlideShow";
import figures from "~/data/figures/dubois.json";
import FigureModal from "../layout/FigureModal";

const figureGroups = [
  {
    figures: [figures["service-pnp-cph-3"], figures["925"]],
    caption: "group one"
  },
  {
    figures: [figures["service-pnp-cph-4"], figures["ch5-05d-newspapers"]],
    caption: "group two"
  },
  {
    figures: [figures["service-pnp-cph-1"], figures["888"]],
    caption: "group three"
  },
  {
    figures: [figures["service-pnp-cph-2"], figures["879"]],
    caption: "group four"
  }
]

function DoubleSlideShow() {
  return (
    <Carousel
      renderCenterLeftControls={<></>}
      renderCenterRightControls={<></>}
      renderBottomCenterControls={<></>}
      renderBottomLeftControls={leftControls}
      renderBottomRightControls={rightControls}
      wrapAround
    >
      {figureGroups?.map((group) => {
        return (
          <figure key={`double-group-${group.figures[0].fileName}`} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mx-24 md:mx-44 lg:mx-80 items-center">
            {group.figures.map((figure) => {
              return (
                <FigureModal key={`double-fig-${figure.fileName}`} figure={figure}>
                  <picture>
                    <source srcSet={`/images/${figure.chapter}/${figure.fileName}.webp`} />
                    <source srcSet={`/images/${figure.chapter}/${figure.fileName}.jpg`} />
                    <img
                      className="mx-auto"
                      src={`/images/${figure.chapter}/${figure.fileName}.jpg`}
                      alt={figure.altText}
                      title={figure.title}
                    />
                  </picture>
                </FigureModal>
              )
            })}
            <figcaption className="font-dubois mt-3 w-1/2 mx-auto md:col-span-2"
              dangerouslySetInnerHTML={{
                __html: group.caption,
              }}
            />
          </figure>
        )
      })}
    </Carousel>
  );
}

export default DoubleSlideShow;