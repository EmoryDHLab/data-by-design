import type { ReactNodeLike } from "prop-types";
import ImageModal from "~/components/layout/ImageModal";
import { classNames } from "~/utils";

interface CoreProps {
  children?: ReactNodeLike;
  alt?: string;
  imageClassName?: string;
  className?: string;
}

type Props =
  | (CoreProps & {
      images?: { src: string; alt: string }[];
    })
  | (CoreProps & {
      src?: string;
    });

export default function Figure({
  images,
  alt,
  children,
  src,
  imageClassName,
  className,
}: Props) {
  return (
    <div className="flex justify-center">
      <figure className={`${className ?? ""}`}>
        {images ? (
          images.map((image, index) => (
            <ImageModal
              className={classNames("p-2", imageClassName)}
              key={`fig-${image.src}`}
              src={image.src}
              alt={image.alt}
            />
          ))
        ) : (
          <ImageModal src={src} alt={alt} className={imageClassName ?? ""} />
        )}
        <figcaption className="font-dubois md:text-center text-left mt-3 md:mt-6 mb-6 md:mb-12 col-span-full">
          {children}
        </figcaption>
      </figure>
    </div>
  );
}
