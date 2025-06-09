import type { ReactElement } from "react";

interface Props {
  forDesigners: ReactElement[];
  forViewers: ReactElement[];
}

const Takeaways = ({ forDesigners, forViewers }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-56 gap-8 md:gap-12 mt-12 md:mt-24 bg-[#2A2423] text-offwhite font-neueMontrealLight md:font-neueMontreal relative z-10">
      <div>
        <h3 className="text-xl font-bold font-power md:text-3xl mb-2 md:mb-0">
          Takeaways for designers
        </h3>
        <ul className="list-disc py-2 ">
          {forDesigners.map((takeaway) => {
            return (
              <li
                key={`takeaway-${takeaway.key}`}
                className="md: py-2 text-base md:text-xl leading-8"
              >
                {takeaway}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold md:text-3xl font-power  mb-2 md:mb-0">
          Takeaways for viewers
        </h3>
        <ul className="list-disc py-2 ">
          {forViewers.map((takeaway) => {
            return (
              <li
                key={`takeaway-${takeaway.key}`}
                className="md: py-2 text-base md:text-xl "
              >
                {takeaway}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Takeaways;
