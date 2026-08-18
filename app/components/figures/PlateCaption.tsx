import type { TFigure } from "~/types/figureType";

// Matches a trailing Library of Congress call number, e.g. "LC-DIG-ppmsca-33863."
const LC_CALL_NUMBER = /^(.*\S)\s+(LC-[A-Za-z]+-[A-Za-z0-9-]+\.?)\s*$/;

function CreditLine({ text }: { text: string }) {
  const match = text.match(LC_CALL_NUMBER);
  if (!match) return <>{text}</>;
  const [, lead, callNumber] = match;
  return (
    <>
      {lead} <span className="md:block">{callNumber}</span>
    </>
  );
}

/**
 * The centered, two-tier caption used by the document viewers: the plate title
 * set in the display face, with its credit line smaller and dimmed beneath.
 * Shared so the Willard and Paris Exposition viewers stay in step.
 */
export default function PlateCaption({ figure }: { figure: TFigure }) {
  return (
    <figcaption className="mt-4 px-6 mx-auto max-w-md text-center">
      {figure.title && (
        <span className="block font-power text-base leading-snug text-offwhite">
          {figure.title}
        </span>
      )}
      {figure.creditLine && (
        <span className="block font-sans text-xs leading-relaxed text-neutral-400 mt-2">
          <CreditLine text={figure.creditLine} />
        </span>
      )}
    </figcaption>
  );
}
