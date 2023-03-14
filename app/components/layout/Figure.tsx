import type { ReactNodeLike } from "prop-types";
import ImageModal from "~/components/layout/ImageModal";

interface Props {
  children: ReactNodeLike;
  images?: Array;
  alt?: string;
  src?: string;
  className?: string;
}

export default function Figure({
  images,
  alt,
  children,
  src,
  className,
}: Props) {
  return (
    <div className={`flex justify-center `}>
      <figure className={`${className ?? ""}`}>
        {images ? (
          images.map((image, index) => (
            <ImageModal
              className="p-2"
              key={index}
              src={image.src}
              alt={image.alt}
            />
          ))
        ) : (
          <ImageModal src={src} alt={alt} />
        )}
        <figcaption className="font-dubois md:text-center text-left mt-3 md:mt-6 mb-6 md:mb-12 col-span-full">
          {children}
        </figcaption>
      </figure>
    </div>
  );
}
