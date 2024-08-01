import { ClientOnly } from "remix-utils/client-only";
import IIIFViewer from "~/components/IIIFViewer.client";

const IIIF = () => {
  return (
    <div className="bg-offwhite h-screen">
      <ClientOnly>
        {() => <IIIFViewer figure="DRW-II" osdOptions={{}} />}
      </ClientOnly>
    </div>
  );
};

export default IIIF;
