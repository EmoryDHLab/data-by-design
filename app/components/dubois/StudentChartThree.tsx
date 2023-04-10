import React, { useState } from "react";
import Draggable from "react-draggable";
import { useWindowSize } from "~/hooks";
import { classNames } from "~/utils";

const stories = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis tellus sed suscipit consectetur.",
  "Morbi maximus venenatis lacus, vitae sodales diam blandit id. Vestibulum in orci sit amet purus eleifend bibendum.",
  "Cras in pharetra arcu. Sed lectus ligula, mattis gravida vehicula eget, vestibulum ut mauris. Ut placerat ut magna ac blandit.",
  "Suspendisse ut egestas orci, ut viverra justo. Donec sem dolor, facilisis eget euismod at, rhoncus sit amet nisi.",
  "Duis sodales nibh sed mi varius hendrerit. Nunc tempus varius enim at finibus.",
  "Vivamus leo sem, pellentesque nec malesuada interdum, consequat semper dolor.",
  "Nulla sed eros et turpis sodales tempus eget vitae urna. Quisque scelerisque non ante id luctus.",
  "Cras neque orci, mattis id tincidunt pharetra, porttitor vel libero.",
  "Nullam sem urna, faucibus vel ultrices vitae, dapibus vitae urna. Vivamus feugiat vulputate mauris.",
  "Vestibulum sodales elementum ipsum vel mattis. Aliquam a tellus neque. In accumsan tristique lectus quis mattis.",
  "Phasellus magna lorem, porta id blandit vel, posuere porta ipsum. Cras vitae eros ultrices, congue nisi sed, fringilla nisl.",
  "Vestibulum ipsum lorem, tincidunt at enim id, condimentum pharetra urna. Morbi sagittis ante sit amet auctor venenatis.",
  "Cras nisi enim, tincidunt a nunc id, efficitur pellentesque felis. Fusce vitae augue tortor.",
  "Cras leo nunc, viverra a turpis in, egestas interdum elit. Donec ultricies, justo id consequat maximus, mi leo malesuada urna, non fringilla sapien lectus sed erat.",
  "In imperdiet massa sed nisi eleifend, nec congue justo vehicula. Fusce eu quam tempor justo eleifend dapibus id mattis tellus.",
  "Suspendisse velit sem, tempor id scelerisque ac, sagittis id libero.",
  "Duis ligula purus, molestie consequat porta at, mattis ut dui. Pellentesque aliquam commodo libero vel pulvinar.",
  "Duis non convallis turpis. Nullam ut nulla risus. Morbi et urna finibus mi facilisis interdum et vel turpis.",
  "Duis varius at enim at posuere. Fusce nibh metus, fringilla facilisis turpis eget, porta ultrices ante.",
  "In et sapien in arcu fermentum euismod. Proin dictum sem at erat maximus lobortis.",
  "Quisque lacinia posuere libero. Donec lorem neque, mollis sit amet diam ac, tristique auctor nibh.",
  "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  "Fusce vel nibh molestie, dignissim magna ut, ultricies erat. Integer venenatis diam nulla, egestas porta lacus interdum et.",
  "Pellentesque fringilla tellus ac orci imperdiet, id vehicula risus pulvinar.",
  "Praesent gravida nibh nec libero eleifend, sit amet feugiat magna commodo. Ut libero ante, tempus a diam in, rhoncus luctus lorem.",
  "Cras dictum nisi vitae mauris dictum commodo.",
];

const DEFAULT_WIDTH = 400;

function DraggableNote({
  top,
  left,
  className,
  style: { transform, ...style },
  story,
  rotation,
  ...props
}) {
  return (
    <div
      style={{
        top: `${top}px`,
        left: `${left}px`,
        transform: `${transform} rotate(${rotation})`,
        ...style,
      }}
      className={classNames(
        className,
        "z-10 bg-white rounded border border-slate-500 w-64 h-32 truncate whitespace-normal absolute p-5"
      )}
      {...props}
    >
      {story}
    </div>
  );
}
export default function StudentChartThree() {
  const size = useWindowSize();
  const chartWidth = (size.width ?? DEFAULT_WIDTH) * 0.8;
  const chartHeight = chartWidth;
  const [r0, setR0] = useState(() => (Math.random() * chartWidth) / 2);
  const [q, setQ] = useState(() => Math.random() * Math.PI * 2);
  const [r1, setR1] = useState(() => 100 + Math.random() * 500);
  const [t, setT] = useState(() => Math.random() * Math.PI * 2);
  return (
    <div className="z-20">
      <button
        onClick={() => {
          setR0(() => Math.random() * 500);
          setQ(() => Math.random() * Math.PI * 2);
          setR1(Math.random() * 500);
          setT(Math.random() * Math.PI * 2);
        }}
      >
        Shuffle
      </button>
      <div
        className="relative bg-slate-800 m-10"
        style={{ width: `${chartWidth}px`, height: `${chartHeight}px` }}
      >
        {stories.map((story) => {
          const top = Math.random() * chartHeight * 0.6;
          const left = Math.random() * chartWidth * 0.6;

          return (
            <Draggable bounds="parent">
              <DraggableNote
                top={top}
                left={left}
                story={story}
                rotation="45deg"
              />
            </Draggable>
          );
        })}
      </div>
    </div>
  );
}
