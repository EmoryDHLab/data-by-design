import type { ReactNodeLike } from "prop-types";

interface Props {
  footnotes: ReactNodeLike[];
}

export default function FootnotesList({ footnotes }: Props) {
  return (
    <ol className="space-y-5 text-xs">
      {footnotes.map((footnote) => (
        <li>{footnote}</li>
      ))}
    </ol>
  );
}