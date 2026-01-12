import type { TGroupingNode, TPerson } from "../data/types";

interface Props {
  person: TPerson | TGroupingNode;
  grouping: string;
}

const PersonGroupingList = ({ person, grouping }: Props) => {
  return (
    <div>
      <span className="uppercase font-power font-bold tracking-wide">{grouping}</span>
      <ul>
        {/* @ts-ignore */}
        {person[`${grouping}s`].map((group) => {
          return (
            <li
              key={`${person.id}-${grouping}-${group.id}`}
              className="my-2 leading-6 font-sans"
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
