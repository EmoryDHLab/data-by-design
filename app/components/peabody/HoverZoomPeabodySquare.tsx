import { useContext } from "react";
import { ChapterContext } from "~/theme";

export default function HoverZoomPeabodySquare() {
  const { hoverState } = useContext(ChapterContext);
  return (
    <div className="relative">
      <img
        className="border-peabodyPrimaryHalfOpacity border-[50px]"
        src="/images/peabody/1600s.jpg"
      />
      {hoverState === "Jamestown" && (
        <div className="absolute top-[65px] left-[230px] w-[32px] h-[32px] border-black border-2">
          <div className="border-white border-2 h-full w-full" />
        </div>
      )}
      {hoverState === "Plymouth" && (
        <div className="absolute top-[90px] left-[309px] w-[32px] h-[32px] border-black border-2">
          <div className="border-white border-2 h-full w-full" />
        </div>
      )}
      {hoverState === "FirstEnslavedAfricans" && (
        <div className="absolute top-[100px] left-[328px] w-[13px] h-[13px] border-black border">
          <div className="border-white border-t-[1.5px] border-b-[1.5px] border-l-[1.5px] border-r-[1.5px] h-full w-full" />
        </div>
      )}
    </div>
  );
}
