import type { Dispatch, SetStateAction } from "react";
import { Switch } from "@headlessui/react";
import type { ReactNodeLike } from "prop-types";

interface Props {
  checked: boolean;
  children: ReactNodeLike;
  colorOff: string;
  colorOn: string;
  onChange: Dispatch<SetStateAction<boolean>>;
  screenReaderMsg: string
}

export default function Toggle({
  checked,
  children,
  onChange,
  colorOn,
  colorOff,
  screenReaderMsg,
  className,
}: Props) {
  return (
    <Switch.Group>
      <Switch
        checked={checked}
        onChange={onChange}
        onKeyDown={({ key }) => { if (key === "Enter") onChange() }}
        tabIndex={0}
        className={`bg-${
          checked ? colorOn : colorOff
        } relative inline-flex h-6 w-11 items-center rounded-full outline outline-2 outline-white ${className ?? ""}`}
      >
        <span className="sr-only">{screenReaderMsg}</span>
        <span
          aria-hidden="true"
          className={`${
            checked ? `translate-x-[24px] bg-white` : `translate-x-[4px] bg-${colorOn}`
          } pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <Switch.Label className="ml-4">
        {children}
      </Switch.Label>
    </Switch.Group>
  );
}

