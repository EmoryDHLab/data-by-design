import type { ReactNodeLike } from "prop-types";

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
        <img src={src} alt={alt} />
        <figcaption className="font-dubois text-center mt-6 mb-12">
          {children}
        </figcaption>
      </figure>
    </div>
  );
}
