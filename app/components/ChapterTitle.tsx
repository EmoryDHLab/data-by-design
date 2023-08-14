import { spacesToHyphens } from "~/utils";

interface Props {
  title: string;
  subtitle: string;
}

export default function ChapterTitle({ title, subtitle }: Props) {
  return (
    <header
      id={spacesToHyphens(title)}
      className="root bg-black h-screen md:h-80 flex flex-col justify-center items-center w-full"
    >
      <section className="text text-white text-center my-5">
        <h1 className="font-duboisWide text-3xl  my-10 md:my-10 md:text-5xl">
          {title}
        </h1>
        <h2 className="font-dubois font-light my-3 md:my-10 text-2xl md:text-3xl">
          {subtitle}
        </h2>
      </section>
    </header>
  );
}
