import { ReactNodeLike } from "prop-types";

interface Props {
  color: string;
  children: ReactNodeLike;
}

export default function ChapterSectionTitle({ color, children }: Props) {
  return (
    <div className="relative my-10">
      <div className={`opacity-50 ${color} w-full h-full absolute`} />
      <div className="p-4 relative font-william text-2xl lg:text-3xl flex justify-center items-center">
        <span>{children}</span>
      </div>
    </div>
  );
}
