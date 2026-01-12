import { useContext, useEffect, useRef, useState } from "react";
import scrollama from "scrollama";
import { ChapterContext } from "~/chapterContext";
import { Paths } from "./scrollytellElements/Paths";
import FigureModal from "../figures/FigureModal";
import figures from "~/data/figures/image.json";
import type { ReactNode } from "react";
import { Caption } from "../figures/Figure";

const Error = ({ children }: { children: ReactNode }) => {
  const { hoverState } = useContext(ChapterContext);
  const [imageOpacity, setImageOpacity] = useState<string>("opacity-100");
  const [showError, setShowError] = useState<boolean>(false);
  const [drawError, setDrawError] = useState<boolean>(false);
  const [zoom, setZoom] = useState<boolean>(false);
  const [strokeDashoffset, setStrokeDashoffset] = useState<number>(0);
  const showErrorRef = useRef<boolean>(false);

  useEffect(() => {
    const scroller = scrollama();
    scroller
      .setup({
        step: ".error-trigger",
      })
      .onStepEnter(() => setShowError(true))
      .onStepExit(() => setShowError(false));

    return () => {
      scroller.destroy();
    };
  }, []);

  useEffect(() => {
    setShowError(hoverState === "showError");
  }, [hoverState]);

  useEffect(() => {
    if (showError) {
      setImageOpacity("opacity-20");
      setTimeout(() => {
        setStrokeDashoffset(8.2);
      }, 700);
      setTimeout(() => {
        setZoom(true);
      }, 1500);
      setTimeout(() => {
        setDrawError(true);
      }, 2500);
      setTimeout(() => {
        setStrokeDashoffset(0);
      }, 3000);
      showErrorRef.current = true;
    } else if (showErrorRef.current) {
      setStrokeDashoffset(8.2);
      setTimeout(() => {
        setDrawError(false);
      }, 1000);
      setTimeout(() => {
        setZoom(false);
        setStrokeDashoffset(112.31173706054688);
      }, 2000);
      setTimeout(() => {
        setImageOpacity("opacity-100");
      }, 3000);
      showErrorRef.current = false;
    }
  }, [showError]);

  return (
    <FigureModal
      className="error-trigger"
      figure={figures["0201-playfair-northam"]}
      id={figures["0201-playfair-northam"].fileName}
    >
      <svg viewBox="0 0 105 55">
        <g
          className="transition-all duration-[2000ms] origin-bottom-right will-change-transform"
          transform={
            zoom ? "scale(5) translate(7.5, 20)" : "scale(1) translate(0)"
          }
        >
          <image
            className={`transition-all duration-[2000ms] origin-bottom-right will-change-transform ${imageOpacity}`}
            href="/images/image/extras/0201-playfair-northam-cropped.jpg"
            width={105}
            height={55}
          />
          <path
            d={Paths.import3rdEd}
            stroke="#F4B20C"
            strokeWidth={0.2}
            fill="none"
            className="transition-all duration-[2000ms] origin-bottom-right will-change-transform"
            transform="scale(0.91, 1) translate(-4.2, 0.5)"
            strokeDasharray={112.31173706054688}
            strokeDashoffset={strokeDashoffset}
          />
          <path
            d={"M85.65,32.65 C86.4,32.3 87.2,32.2 88.35,32.1"}
            stroke="red"
            fill="none"
            strokeWidth={0.2}
            strokeDasharray={2.770343780517578}
            strokeDashoffset={drawError ? 0 : 2.770343780517578}
            className={`transition-all duration-1000 origin-left`}
          />
        </g>
      </svg>
      <Caption figure={figures["0201-playfair-northam"]} />
      {children}
    </FigureModal>
  );
};

export default Error;
