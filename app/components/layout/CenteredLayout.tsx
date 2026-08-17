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
      className={`flex-none md:flex md:flex-col  justify-between  mx-6 md:mx-24 lg:mx-auto max-w-[70ch] ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
