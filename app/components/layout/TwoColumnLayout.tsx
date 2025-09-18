import type { ReactNodeLike } from "prop-types";

interface Props {
  children: ReactNodeLike;
  className?: string;
}

export default function TwoColumnLayout({ children, className }: Props) {
  return (
    <div
      className={`flex-none md:flex justify-between mx-6 md:mx-24 lg:mx-48 xl:mx-64 2xl:mx-80`}
    >
      {children}
    </div>
  );
}
