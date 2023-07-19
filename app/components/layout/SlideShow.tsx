import Carousel from "nuka-carousel";
import { useDeviceContext } from "~/hooks";

export const leftControls = ({
  previousDisabled,
  previousSlide,
}) => {
  return (
    <div className="ml-16 md:ml-32 lg:ml-64 text-2xl md:text-6xl">
      <button
        aria-label="Navigate to previous figure"
        type="button"
        disabled={previousDisabled}
        onClick={previousSlide}
        className="font-icons"
      >
        c
      </button>
    </div>
  );
};

export const rightControls = ({
  nextDisabled,
  nextSlide,
}) => {
  return (
    <div className="mr-16 md:mr-32 lg:mr-64 text-2xl md:text-6xl">
      <button
        aria-label="Navigate to next figure"
        type="button"
        disabled={nextDisabled}
        onClick={nextSlide}
        className="font-icons"
      >
        b
      </button>
    </div>
  )
}


const SlideShow = ({ figures, className, children }) => {
  const { isMobile, isDesktop } = useDeviceContext();

  return (
    <section className={`mx-auto ${className ?? ""}`}>
      <Carousel
        renderCenterLeftControls={isDesktop ? leftControls : ""}
        renderCenterRightControls={isDesktop ? rightControls : ""}
        renderBottomCenterControls={<></>}
        renderBottomLeftControls={isMobile ? leftControls : ""}
        renderBottomRightControls={isMobile ? rightControls : ""}
        wrapAround
      >
        {figures?.map((figure) => {
          return (
            <figure key={figure.fileName} className="text-center">
              <picture>
                <source srcSet={`/images/${figure.chapter}/${figure.fileName}.webp`} />
                <source srcSet={`/images/${figure.chapter}/${figure.fileName}.jpg`} />
                <img
                  className="max-h-96 md:max-h-max mx-auto max-w-xs md:max-w-none"
                  src={`/images/${figure.chapter}/${figure.fileName}.jpg`}
                  alt={figure.altText}
                  title={figure.title}
                />
              </picture>
              <figcaption className="font-dubois mt-3 w-1/2 mx-auto"
                dangerouslySetInnerHTML={{
                  __html: figure.caption,
                }}
              />
            </figure>
          )
        })}
        {children}
      </Carousel>
    </section>
  )
}

export default SlideShow;
