import Carousel from "nuka-carousel";
import FigureObj from './FigureObj';
import CenteredLayout from "./CenteredLayout";

const renderBottomLeftControls = ({
  previousDisabled,
  previousSlide,
}) => {
  return (
    <div className="ml-16">
      <button
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

const renderBottomRightControls = ({
  nextDisabled,
  nextSlide,
}) => {
  return (
    <div className="mr-16">
      <button
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
  return (
    <section className={`mx-auto ${className ?? ""}`}>
      <Carousel
        renderCenterLeftControls={<></>}
        renderCenterRightControls={<></>}
        renderBottomCenterControls={<></>}
        renderBottomLeftControls={renderBottomLeftControls}
        renderBottomRightControls={renderBottomRightControls}
        wrapAround
      >
        {figures?.map((figure) => {
          return (
            <figure key={figure.fileName} className="w-full text-center">
              <picture>
                <source srcSet={`/images/${figure.chapter}/${figure.fileName}.webp`} />
                <source srcSet={`/images/${figure.chapter}/${figure.fileName}.jpg`} />
                <img
                  className="max-h-96 mx-auto"
                  src={`/images/${figure.chapter}/${figure.fileName}.jpg`}
                  alt={figure.altText}
                  title={figure.title}
                />
              </picture>
              <figcaption className="font-dubois mt-3 w-1/2 mx-auto">
                {figure.caption}
              </figcaption>
            </figure>
          )
        })}
        {children}
      </Carousel>
    </section>
  )
}

export default SlideShow;
