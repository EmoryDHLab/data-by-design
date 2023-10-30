import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { filterOptions } from "./data";
import type { TFilterOption } from "./data";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  selectedFilter: TFilterOption;
  setSelectedFilter?: Dispatch<SetStateAction<TFilterOption>>;
  filterOption?: TFilterOption;
}

const OptionLabel = ({ filterOption, selectedFilter }: Props) => {
  if (filterOption && filterOption.id === 1 && filterOption !== selectedFilter) {
    return (
      <>Clear filters</>
    )
  }

  return <>{filterOption?.label ?? "no label"}</>
}

const FilterGroups = ({ selectedFilter, setSelectedFilter }: Props) => {
  return (
    <Listbox
      as="div"
      className="relative inline-block text-left bg-offwhite text-black p-2 min-w-[50%]"
      value={selectedFilter}
      onChange={setSelectedFilter}
    >
      <Listbox.Button className="">{selectedFilter?.label ?? "Filter by..."}</Listbox.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Listbox.Options className="absolute left-0 mt-2 origin-top-right text-lg divide-gray-100  p-2 shadow-md shadow-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none bg-offwhite text-black w-full">
          {filterOptions.map((filter) => (
            <Listbox.Option key={filter.label} value={filter} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={`bg-offwhite text-black hover:bg-black hover:text-white cursor-pointer p-4 ${selected ? "hidden" : "block"}`}
                >
                  <OptionLabel filterOption={filter} selectedFilter={selectedFilter} />
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default FilterGroups;
