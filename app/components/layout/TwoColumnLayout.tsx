import type { ReactNodeLike, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"section"> {
  children: ReactNodeLike;
  className?: string;
}

export default function TwoColumnLayout({
  children,
  className,
  ...props
}: Props) {
  return (
    <div
      className={`flex-none md:flex justify-between mx-6 md:mx-24 lg:mx-48 xl:mx-64 2xl:mx-80 ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
