import type { TFilterOption, TSelectedFilter } from "./data";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  activeFilterGroup: TFilterOption | undefined;
  activeOption: TSelectedFilter | undefined;
  setSelectedOption: Dispatch<SetStateAction<TSelectedFilter | undefined>>;
}

const FilterOptions = ({
  activeOption,
  activeFilterGroup,
  setSelectedOption,
}: Props) => {
  const handleSelect = (selectedOption: TSelectedFilter) => {
    if (selectedOption.id === activeOption?.id) {
      setSelectedOption(undefined);
    } else {
      setSelectedOption(selectedOption);
    }
  };

  if (activeFilterGroup) {
    return (
      <ul>
        {activeFilterGroup.options.map((option) => {
          return (
            <li key={option.id}>
              <button
                onClick={() => handleSelect(option)}
                onMouseLeave={({ target }) =>
                  (target as HTMLButtonElement).blur()
                }
                className={`p-1 m-1 hover:opacity-100 focus:opacity-100 ${
                  option === activeOption
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
  }

  return null;
};

export default FilterOptions;
