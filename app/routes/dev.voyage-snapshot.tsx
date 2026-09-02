import { Suspense, lazy } from "react";
import { useSearchParams } from "react-router";
import ClientOnly from "~/components/ClientOnly";

const VoyagesVis = lazy(
  () => import("~/components/data/voyages/VoyagesVis.client"),
);

// Dev-only page for generating the static screenshots that replace the two
// fixed VoyagesVis instances in VoyageScrollytell.tsx (see that file - the
// "not-full-color" and "full-color" resistance-voyage visualizations at
// year range 1708-1719, showSlider=false). Not linked from anywhere in the
// site; visit directly at /dev/voyage-snapshot.
//
// The background is a color that never appears in the voyage data's actual
// palette (bright magenta), specifically so any screenshot of this page -
// whether captured precisely via a script, or just a plain OS/browser
// screenshot with window chrome around it - can be reliably auto-cropped
// with `magick input.png -fuzz 5% -trim +repage`, no pixel math required.
//
// Pass ?only=not-full-color or ?only=full-color to show just one instance
// full-bleed (ideal for cropping one at a time). With no query param, both
// show stacked, for browsing.
const VARIANTS = [
  { name: "not-full-color", fullColor: false },
  { name: "full-color", fullColor: true },
] as const;

export default function VoyageSnapshot() {
  const [searchParams] = useSearchParams();
  const only = searchParams.get("only");
  const variants = only ? VARIANTS.filter((v) => v.name === only) : VARIANTS;

  return (
    <div
      style={{ background: "#FF00FF" }}
      className="min-h-screen w-full mt-96"
    >
      <ClientOnly>
        <Suspense fallback={null}>
          <div className="flex flex-col gap-24 py-24">
            {variants.map((variant) => (
              <div
                key={variant.name}
                data-snapshot-variant={variant.name}
                className="bg-[#FDF9F6] mx-auto"
              >
                <VoyagesVis
                  id={`snapshot-${variant.name}`}
                  allVoyages={true}
                  fullColor={variant.fullColor}
                  startYear={1708}
                  endYear={1719}
                  showSlider={false}
                  className="opacity-100"
                  showAxis={false}
                />
              </div>
            ))}
          </div>
        </Suspense>
      </ClientOnly>
    </div>
  );
}
