interface Props {
  title: string;
  subtitle: string;
}

export default function ChapterTitle({ title, subtitle }: Props) {
  return (
    <div className="root bg-black md:h-80 flex flex-col justify-center items-center w-screen">
      <div className="text text-white text-center my-5">
        <h1 className="font-duboisWide my-10 text-5xl">{title}</h1>
        <h2 className="font-dubois font-light my-10 text-3xl">{subtitle}</h2>
      </div>
    </div>
  );
}
