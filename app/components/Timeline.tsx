import { useEffect, useState } from "react";
import imageData from "~/timelineImages.json";
import { useWindowSize } from "~/hooks";

export default function Timeline() {
  return (
    <div>
      <svg
        width="100%"
        height={part1Height + "px"}
        onMouseUp={() => {
          currentIndex = null;
        }}
        onMouseMove={moveImage()}
      >
        {imageData
          .slice(imageSliceIndex, imageSliceIndex + imageLength)
          .map((img, index) => (
            <g>
              <image
                ref="timeline_img"
                src={generateImg(img)}
                width="150"
                transform={getTransform(index)}
                onClick={() => shiftTimeline(img)}
                onMouseDown={changeDisplay(index)}
                visibility={part1Vis}
              ></image>
            </g>
          ))}
        <g visibility={part2Vis}>
          {sortByYear(imageData).map((img, index) => (
            <image
              src={generateImg(img)}
              width="150"
              x={lineXPosition[index] + timelinePosition}
              y="150"
              onClick={() => shift(index)}
            ></image>
          ))}
          {getUniqYear(sortedImages).map((year, index) => (
            <text
              x={yearTimelinePosition[index] + timelinePosition}
              y="140"
              style="fill: white; font-size: 15px; font-family: VTC William, serif"
            >
              {{ year }}
            </text>
          ))}

          <image
            y={part1Height - 100}
            x="300"
            width={arrowSize}
            src="../../../assets/ui/homepage/left_arrow.png"
            onClick={(timelinePosition -= 80)}
          />
          <image
            src="../../../assets/ui/homepage/right_arrow.png"
            y={part1Height - 100}
            x={windowSize.width - 350}
            width={arrowSize}
            onClick={(timelinePosition += 80)}
          ></image>
        </g>

        <text
          y={part1Start + 10}
          x={windowSize.width / 2}
          textAnchor="middle"
          style={{
            fill: "white",
            fontSize: "35px",
            fontFamily: "VTC William, serif",
          }}
        >
          TIMELINE
        </text>

        <image
          y={part1Start + 20}
          x={windowSize.width / 2 - 20 - 35}
          width={arrowSize}
          src={
            shuffleIcon === "shuffleClick"
              ? `/ui/homepage/shuffle_click.png`
              : `/ui/homepage/shuffle_unclick.png`
          }
          onClick={viewShuffle}
          onMousedown={(shuffleIcon = "shuffle_click")}
          onMouseup={(shuffleIcon = "shuffle_unclick")}
        ></image>

        <image
          y={part1Start + 20}
          x={windowSize.width / 2 - 20 + 35}
          width={arrowSize}
          src={`/ui/homepage/${sortIcon}.png`}
          onClick={viewSort}
        ></image>
      </svg>

      <div className="bg-brooks_sec flex mb-20">
        <div className="w-2/5">
          <img
            className="p-20 w-full"
            src={generateImg(displayImage)}
            alt={displayImage.ALT - displayImage.TEXT}
          />
        </div>

        <div className="p-20 font-william w-3/5">
          <div className="text-4xl p-5">
            {displayImage.TITLE} by {displayImage.ARTIST}
            {displayImage.YEAR}
          </div>
          <div className="text-lg p-5">
            <span style={{ whitespace: pre }}>{displayImage.CREDIT} </span>
            <span style={{ whitespace: pre }}>{displayImage.DIGITIZED}</span>
          </div>
          <div className="text-lg p-5">{displayImage.CHAPTER} -&gt;</div>
        </div>
      </div>
    </div>
  );
}
