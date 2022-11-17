import { classNames } from "~/utils";

const tourLocations = {
  Rochester: {
    mapStyles: "scale-[2.56] -translate-x-[22rem] translate-y-[17.9rem]",
  },
  Louisville: {
    mapStyles: "scale-[3] translate-x-[4rem] -translate-y-[3rem]",
  },
  Richmond: {
    mapStyles: "scale-[3.3] -translate-x-[14rem] -translate-y-[2rem]",
  },
};

interface Props {
  tourLocation: "Rochester" | "Louisville" | "Richmond";
}

export default function PromotionalTourMap({ tourLocation }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="border-peabodyPrimaryHalfOpacity border-[50px] p-1 max-w-xl overflow-hidden">
        <img
          src="/images/peabody/railroadscaled.webp"
          alt=""
          className={classNames(
            "transition-transform",
            tourLocation && tourLocations[tourLocation].mapStyles
          )}
        />
      </div>
      <div className="text-lg text-center mt-10 w-2/3 font-dubois max-w-[318px]">
        The range of Peabody's promotional tour, as plotted on an 1850 rail map
        of the United States. Image courtesy of the Library of Congress,
        Geography and Map Division.
      </div>
    </div>
  );
}
