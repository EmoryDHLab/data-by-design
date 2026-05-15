import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const VoyageVisContainer = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col md:h-screen md:grid md:grid-cols-2 bg-black text-left gap-x-0 md:gap-x-32 md:gap-y-2 text-white w-full relative z-10 pt-0 pb-6 md:py-12">
        {children}

        <div className="hidden md:grid px-32 grid-cols-2 md:col-span-3 ">
          {/* full-width rule across both cols */}
          <hr className=" mt-5 mb-6 col-span-2" />

          <div>
            <h3 className="mb-4 font-power text-xl  md:text-3xl">
              Resistance Voyages
            </h3>
            <h4 className="mb-6 font-power font-light text-base md:text-xl">
              Subtitle
            </h4>
          </div>
          <div>
            <h4 className="font-power text-base italic font-bold small-caps">
              How to use this chart
            </h4>
            <p className="font-power text-xl">
              Set the time period to view voyages with resistance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoyageVisContainer;
