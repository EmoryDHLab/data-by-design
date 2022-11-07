interface Props {
  title: string;
  subtitle: string;
}

export default function ChapterTitle({ title, subtitle }: Props) {
  return (
    <div className="root bg-black md:h-80 flex flex-col justify-center items-center">
      <div className="text text-white text-center my-3">
        <h1 className="font-william font-bold font-duboisWide text-3xl md:text-5xl mb-5 md:mb-10">
          {title}
        </h1>{" "}
        <h2 className="font-william text-2xl md:text-3xl ">
          {subtitle}
          </h2>
      </div>
    </div>
  );
}
