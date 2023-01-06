import { useContext } from "react";
import { ChapterContext } from "~/theme";

interface Props {
  title: string;
  subtitle: string;
}

export default function PullQuote({ title, subtitle }: Props) {
  const { backgroundColor, primaryTextColor } = useContext(ChapterContext);
  return (
    <div
      className={`bg-${backgroundColor} text-${primaryTextColor} p-10 font-william flex flex-col items-center my-8`}
    >
      <div className="max-w-[1000px]">
        <div className="text-xl lg:text-2xl xl:text-4xl ">
          <p>
            <span>{title}</span>
          </p>
        </div>
        <div className="text-base lg:text-xl xl:text-2xl py-4">
          <p>
            <span>{subtitle}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
