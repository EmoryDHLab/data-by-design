import { filterOptions } from "./data";
import type { TFilterOption } from "./data";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  activeFilter: TFilterOption | undefined;
  setSelectedFilter: Dispatch<SetStateAction<TFilterOption | undefined>>;
  filterOption?: TFilterOption;
}

const FilterGroups = ({ activeFilter, setSelectedFilter }: Props) => {
  const handleSelect = (selectedFilter: TFilterOption) => {
    if (selectedFilter.id === activeFilter?.id) {
      setSelectedFilter(undefined);
    } else {
      setSelectedFilter(selectedFilter);
    }
  };

  return (
    <ul>
      {filterOptions.map((option) => {
        return (
          <li key={option.id}>
            <button
              onClick={() => handleSelect(option)}
              onMouseLeave={({ target }) =>
                (target as HTMLButtonElement).blur()
              }
              className={`p-1 m-1 hover:opacity-100 focus:opacity-100 ${
                option.id === activeFilter?.id
                  ? "underline underline-offset-8"
                  : "opacity-60"
              }`}
            >
              {option.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterGroups;
