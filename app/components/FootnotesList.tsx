import type { ReactNodeLike } from "prop-types";

interface Props {
  footnotes: ReactNodeLike[];
}

export default function FootnotesList({ footnotes }: Props) {
  return (
    <div>
      <h3 className="text-black font-duboisWide tracking-wider text-center text-xl mb-10 pt-5">
        FOOTNOTES
      </h3>
      <ol className="space-y-5 text-xs list-decimal">
        {footnotes.map((footnote, index) => (
          <li key={index}>{footnote}</li>
        ))}
      </ol>
    </div>
  );
}
