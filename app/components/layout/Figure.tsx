import type { ReactNodeLike } from "prop-types";
import ImageModal from "~/components/layout/ImageModal";

interface Props {
  children: ReactNodeLike;
  alt: string;
  src: string;
  className?: string;
}

export default function Figure({ alt, children, src, className }: Props) {
  return (
    <div className={`flex justify-center ${className ?? ""}`}>
      <figure>
        <ImageModal src={src} alt={alt} />
        <figcaption className="font-dubois md:text-center text-left mt-6 mb-12">
          {children}
        </figcaption>
      </figure>
    </div>
  );
}
