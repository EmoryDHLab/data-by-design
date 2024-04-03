import type { TPerson } from "./data/types";

interface Props {
  person: TPerson;
  grouping: string;
}
const PersonGroupingList = ({ person, grouping }: Props) => {
  return (
    <div>
      <span className="uppercase">{grouping}</span>
      <ul className="ml-4">
        {person[`${grouping}s`].map((group) => {
          return (
            <li
              key={`${person.id}-${grouping}-${group.id}`}
              className="my-2 leading-6 font-neueMontrealLight tracking-wider"
            >
              {group.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PersonGroupingList;
