import Carousel from "nuka-carousel";
import { useDeviceContext } from "~/hooks";
import { leftControls, rightControls, noControl } from "../layout/SlideShow";
import figures from "~/data/figures/dubois.json";
import FigureModal from "../layout/FigureModal";
import { ClientOnly } from "remix-utils/client-only";

const figureGroups = [
  {
    figures: [figures["service-pnp-cph-3"], figures["925"]],
    caption:
      "Side-by-side of photograph of African American men, women and children outside of church and chart of Statistics of Negro Church Organizations.",
  },
  {
    figures: [figures["service-pnp-cph-4"], figures["ch5-05d-newspapers"]],
    caption:
      "Side-by-side of photograph of Press room of the Planet newspaper, Richmond, Virginia and chart of American Negro newspapers and periodicals.",
  },
  {
    figures: [figures["service-pnp-cph-1"], figures["888"]],
    caption:
      "Side-by-side of photograph Portrait of African American Carpenters union, Jacksonville, Florida and chart of Occupations of Georgia Negroes.",
  },
  {
    figures: [figures["service-pnp-cph-2"], figures["879"]],
    caption:
      "Side-by-side of photograph Extempo club of Fisk University, Nashville, Tenn. and chart of Number of Negro students taking the various courses of study offered in Georgia schools.",
  },
];

function DoubleSlideShow() {
  const { isMobile, isDesktop } = useDeviceContext();

  return (
    <ClientOnly>
      {() => (
        <Carousel
          renderCenterLeftControls={isMobile ? leftControls : noControl}
          renderCenterRightControls={isMobile ? rightControls : noControl}
          renderBottomCenterControls={noControl}
          renderBottomLeftControls={isDesktop ? leftControls : noControl}
          renderBottomRightControls={isDesktop ? rightControls : noControl}
          wrapAround
        >
          {figureGroups?.map((group) => {
            return (
              <figure
                key={`double-group-${group.figures[0].fileName}`}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mx-24 md:mx-44 lg:mx-80 items-center"
              >
                {group.figures.map((figure) => {
                  return (
                    <FigureModal
                      key={`double-fig-${figure.fileName}`}
                      figure={figure}
                      id={`${figure.fileName}-double-slide`}
                    >
                      <picture>
                        <source
                          srcSet={`/images/${figure.chapter}/${figure.fileName}.webp`}
                        />
                        <source
                          srcSet={`/images/${figure.chapter}/${figure.fileName}.jpg`}
                        />
                        <img
                          className="mx-auto max-h-[66vh]"
                          src={`/images/${figure.chapter}/${figure.fileName}.jpg`}
                          alt={
                            figure.altText?.replace(/(<i>|<\/i>)/gi, '"') ??
                            figure.title?.replace(/(<i>|<\/i>)/gi, '"') ??
                            ""
                          }
                          title={
                            figure.title?.replace(/(<i>|<\/i>)/gi, '"') ?? ""
                          }
                        />
                      </picture>
                    </FigureModal>
                  );
                })}
                <figcaption
                  className="font-dubois mt-3 md:w-1/2 mx-auto md:col-span-2"
                  dangerouslySetInnerHTML={{
                    __html: group.caption,
                  }}
                />
              </figure>
            );
          })}
        </Carousel>
      )}
    </ClientOnly>
  );
}

export default DoubleSlideShow;
