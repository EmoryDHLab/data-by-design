import Carousel from "nuka-carousel";
import { useDeviceContext } from "~/hooks";
import type { ControlProps } from "nuka-carousel";
import type { ReactElement } from "react";
import type { TFigure } from "~/types/figureType";

interface Props {
  figures?: Array<TFigure>;
  className: string;
  children?: ReactElement | Array<ReactElement>;
}

export const leftControls = ({
  previousDisabled,
  previousSlide,
}: ControlProps) => {
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
}: ControlProps) => {
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

export const noControl = () => {
  return (
    <></>
  )
}


const SlideShow = ({ figures, className, children }: Props) => {
  const { isMobile, isDesktop } = useDeviceContext();

  return (
    <section className={`mx-auto ${className ?? ""}`}>
      <Carousel
        renderCenterLeftControls={isDesktop ? leftControls : noControl}
        renderCenterRightControls={isDesktop ? rightControls : noControl}
        renderBottomCenterControls={noControl}
        renderBottomLeftControls={isMobile ? leftControls : noControl}
        renderBottomRightControls={isMobile ? rightControls : noControl}
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
                  alt={figure.altText ?? ""}
                  title={figure.title ?? ""}
                />
              </picture>
              <figcaption className="font-dubois mt-3 w-1/2 mx-auto"
                dangerouslySetInnerHTML={{
                  __html: figure.caption ?? "",
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
