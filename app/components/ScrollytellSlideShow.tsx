import Carousel from "nuka-carousel";
import type { ReactElement } from "react";

interface Props {
  className?: string;
  children?: ReactElement | Array<ReactElement>;
  slideIndex: number;
}

const ScrollytellSlideShow = ({
  className,
  children,
  slideIndex = 0,
}: Props) => {
  return (
    <div className={`w-full mx-auto pointer-events-none ${className ?? ""}`}>
      <Carousel
        wrapAround={false}
        swiping={false}
        withoutControls={true}
        slideIndex={slideIndex}
        animation="fade"
        // animation="zoom"
        speed={1000}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default ScrollytellSlideShow;
