import type { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
  className?: string;
}

// Implements a full bleed grid: https://www.joshwcomeau.com/css/full-bleed/
export default function CenteredLayout({
  children,
  className,
  ...props
}: Props) {
  return (
    <div
      className={`flex-none md:flex md:flex-col justify-between mx-12 md:mx-24 lg:mx-48 xl:mx-96 2xl:mx-80 ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
