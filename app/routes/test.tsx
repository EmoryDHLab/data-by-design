import { useEffect, useState } from "react";
import { ClientOnly } from "remix-utils";
import VoyagesVis from "~/components/description/voyages-bk/VoyagesVis.client";
import ChartThreeScrollytell from "~/components/dubois/chartScrollytells/ChartThreeScrollytell";
import CenteredLayout from "~/components/layout/CenteredLayout";
import ChapterBody from "~/components/layout/ChapterBody";

const TestPage = () => {
  const [done, setDone] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (done) {
      setTimeout(() => {
        setShowAll(true);
      }, 1000);
    }
  }, [done]);

  return (
    <ChapterBody>
      <CenteredLayout>
        <p>
          Yet there are other truths we might gesture towards with our
          visualization work. In addition to the quantitative data presented in
          the 1910 Atlanta University Study, there was also data that was
          qualitative in form. The survey that Du Bois and the seniors in that
          year’s sociology course created, and sent out across the United
          States, in addition to soliciting information about their lives and
          accomplishments that could be compiled as statistics, also included
          four questions that encouraged long-form response.
        </p>
      </CenteredLayout>
      <ChartThreeScrollytell
        triggers={[
          <span key="579b6d28">
            These included their thoughts on their own “early life and
            training,” their plans to educate their children, the “chief
            hindrances” they had faced, and their “present practical philosophy
            in regard to the Negro race in America,” which was abbreviated in
            the published study as “philosophy of life.” About 800 responses to
            the survey were received, which were published in the 1910 study. We
            present these four sets of responses here
          </span>,
          <span key="7894b550">
            Each of the responses are represented as a dot, placed under the
            appropriate question. Clicking each dot displays a key phrase from
            the response it represents.{" "}
          </span>,
          <span key="2a1cdd63">
            Clicking on the phrase reveals the full response from which it is
            drawn, providing a window into that person’s thoughts even as they
            remain unnamed.
          </span>,
        ]}
      />
    </ChapterBody>
  );

  // return (
  //   <div className="bg-offwhite">
  //     <div className="mt-32">
  //       <div className="absolute">
  //         <ClientOnly>
  //           {() => (
  //             <VoyagesVis
  //               id="vis3"
  //               widthAdjust={0.901}
  //               allVoyages={true}
  //               startYear={1756}
  //               endYear={1766}
  //               fullColor={true}
  //             />
  //           )}
  //         </ClientOnly>
  //       </div>

  //       <div
  //         className={`absolute transition-opacity duration-1000 opacity-${
  //           showAll ? 0 : 100
  //         }`}
  //       >
  //         <ClientOnly>
  //           {() => (
  //             <VoyagesVis
  //               id="vis2"
  //               widthAdjust={0.901}
  //               allVoyages={true}
  //               startYear={1756}
  //               endYear={1766}
  //               fullColor={false}
  //             />
  //           )}
  //         </ClientOnly>
  //       </div>
  //       <div
  //         className={`absolute transition-opacity duration-1000 opacity-${
  //           done ? 0 : 100
  //         }`}
  //       >
  //         <ClientOnly>
  //           {() => (
  //             <VoyagesVis
  //               id="vis"
  //               widthAdjust={0.901}
  //               allVoyages={false}
  //               auto={true}
  //               setDone={setDone}
  //             />
  //           )}
  //         </ClientOnly>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default TestPage;
