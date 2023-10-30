import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import type { TFilterOption, TSelectedFilter } from "./data";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  selectedFilterGroup: TFilterOption;
  selectedOption: TSelectedFilter;
  setSelectedOption: Dispatch<SetStateAction<TSelectedFilter>>;
}

const Options = ({ selectedFilterGroup }: { selectedFilterGroup: TFilterOption | undefined}) => {
  if (selectedFilterGroup) {
    return (
      <>
        {selectedFilterGroup.options.map((filter) => (
          <Listbox.Option key={filter.label} value={filter} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={`bg-offwhite text-black hover:bg-black hover:text-white cursor-pointer p-4 ${selected ? "hidden" : "block"}`}
              >
                {filter.label}
              </li>
            )}
          </Listbox.Option>
        ))}
      </>
    )
  }

  return null;
}

const FilterOptions = ({ selectedOption, selectedFilterGroup, setSelectedOption }: Props) => {
  return (
    <Listbox
      as="div"
      className={`relative inline-block text-left bg-offwhite text-black p-2 min-w-[50%] ${selectedFilterGroup.id === 1 ? "opacity-60 cursor-not-allowed" : "opacity-100 cursor-pointer"}`}
      value={selectedOption}
      onChange={setSelectedOption}
      disabled={selectedFilterGroup.id === 1}
    >
      <Listbox.Button className="">{selectedOption?.label ?? "Select.."}</Listbox.Button>
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
          <Listbox.Option value="none" as={Fragment}>
             <Options selectedFilterGroup={selectedFilterGroup} />
          </Listbox.Option>
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default FilterOptions;
