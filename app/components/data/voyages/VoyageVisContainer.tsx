import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const VoyageVisContainer = ({ children }: Props) => {
  return (
    <div className="hidden h-screen md:grid grid-cols-1 md:grid-cols-2 bg-black text-left gap-x-0 md:gap-x-32 md:gap-y-2 text-white w-full p-6 relative z-10">
      {children}
      <div className="hidden md:grid px-32 grid-cols-2 border-t-2 md:col-span-3 p-4">
        <div>
          <h3 className="text-4xl font-powerWide">Resistance Voyages</h3>
          <h4 className="text-2xl mt-2 font-powerLightWide">Subtitle</h4>
        </div>
        <div>
          <h4 className="font-powerLightNarrow italic uppercase tracking-wider">
            How to use this chart
          </h4>
          <p className="font-powerLightWide text-xl">
            Set the time period to view voyages with resistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VoyageVisContainer;
