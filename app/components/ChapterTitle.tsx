interface Props {
  title: string;
  subtitle: string;
}

export default function ChapterTitle({ title, subtitle }: Props) {
  return (
    <div className="root bg-black md:h-96 flex flex-col justify-center items-center">
      <div className="text text-white text-center my-5">
        <h1 className="font-william text-4xl md:text-7xl mb-5 md:mb-10">
          {title}
        </h1>{" "}
        <h2 className="font-william text-2xl md:text-4xl">{subtitle}</h2>
      </div>
    </div>
  );
}
