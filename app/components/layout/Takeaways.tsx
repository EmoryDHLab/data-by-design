import type { ReactElement } from "react";

interface Props {
  forDesigners: ReactElement[];
  forViewers: ReactElement[];
}

const Takeaways = ({ forDesigners, forViewers }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-56 gap-8 md:gap-12 mt-12 md:mt-24 bg-offblack text-offwhite font-neueMontrealLight md:font-neueMontreal">
      <div>
        <h3 className="text-xl md:text-3xl mb-2 md:mb-0">
          Conceptual takeaways
        </h3>
        <ul className="list-disc list-outside ml-4">
          {forDesigners.map((takeaway) => {
            return (
              <li
                key={`takeaway-${takeaway.key}`}
                className="md:py-6 text-base md:text-xl tracking-wider leading-8"
              >
                {takeaway}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3 className="text-xl md:text-3xl mb-2 md:mb-0">
          Practical takeaways
        </h3>
        <ul className="list-disc list-outside ml-4">
          {forViewers.map((takeaway) => {
            return (
              <li
                key={`takeaway-${takeaway.key}`}
                className="md:py-6 text-base md:text-xl tracking-wider"
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
