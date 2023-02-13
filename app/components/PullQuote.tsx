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
      className={`bg-${backgroundColor} text-${primaryTextColor} p-12 md:p-16 flex flex-col items-center my-6 md:my-20`}
    >
      <div className="max-w-[1000px]">
        <div className="font-duboisNarrow text-xl tracking-wide lg:text-xl xl:text-3xl ">
          <p>
            <span>{title}</span>
          </p>
        </div>
        <div className="font-dubois text-sm lg:text-l xl:text-lg py-4">
          <p>
            <span>{subtitle}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
