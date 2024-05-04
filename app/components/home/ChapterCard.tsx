import { Link } from "@remix-run/react";
import type { ReactNodeLike } from "prop-types";

interface Props {
  to: string;
  status?: string;
  title: string;
  subtitle: string;
  className: string;
  children: ReactNodeLike;
}

export default function ChapterCard({
  to,
  title,
  status,
  subtitle,
  children,
  className,
}: Props) {
  return (
    <Link
      to={to}
      className={"text-white font-dubois px-6 my-4 md:px-28 " + className}
    >
      <div className="text-sm my-12 md:mt-10 mb-2 tracking-wider text-duboisSecondary ">
        {status}
      </div>
      <div className="text-2xl md:text-3xl mb-3 font-bold">{title}</div>
      <div className="text-xl mb-2">{subtitle}</div>
      <div className=" mb-4 md:mb-10 font-neueMontrealLight">{children}</div>
    </Link>
  );
}
