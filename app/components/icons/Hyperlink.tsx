import type { SVGProps } from "react";

export default function Hyperlink(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={35}
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        stroke="#fff"
        strokeWidth={2}
        d="m8 15.5-7 7v4l6 7h4.5l13-11L25 19l-4.5-7H17m10.5 7 7-7V8l-6-7H24L11 12l-.5 3.5 4.5 7h3.5"
      />
    </svg>
  );
}
