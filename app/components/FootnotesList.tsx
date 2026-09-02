import type { ReactNodeLike } from "prop-types";

interface Props {
  footnotes: ReactNodeLike[];
}

export default function FootnotesList({ footnotes }: Props) {
  return (
    <div className="break-anywhere pb-12 pt-20 px-6 md:px-0">
      <h3 className="text-black font-powerWide tracking-wider text-center text-xl mb-10 pt-5">
        NOTES
      </h3>
      <ol className="space-y-5 text-xs list-decimal md:columns-2 md:gap-16">
        {footnotes.map((footnote) => (
          <li
            key={`fn-list-${footnotes.indexOf(footnote)}`}
            className="break-inside-avoid mb-5"
          >
            {footnote}
          </li>
        ))}
      </ol>
    </div>
  );
}
