import { Link } from "@remix-run/react";
import type { ReactNodeLike } from "prop-types";

interface Props {
  to: string;
  title: string;
  subtitle: string;
  className: string;
  children: ReactNodeLike;
}

export default function ChapterCard({
  to,
  title,
  subtitle,
  children,
  className,
}: Props) {
  return (
    <Link to={to} className={"text-black font-william " + className}>
      <div className="text-3xl mt-16 mb-3 px-28 font-bold">{title}</div>
      <div className="text-2xl mb-2 px-28">{subtitle}</div>
      <div className="px-28 mb-10">{children}</div>
    </Link>
  );
}
