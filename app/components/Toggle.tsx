import type { Dispatch, SetStateAction } from "react";
import { Switch } from "@headlessui/react";

interface Props {
  checked: boolean;
  colorOff: string;
  colorOn: string;
  onChange: Dispatch<SetStateAction<boolean>>;
  screenReaderMsg: string
}

export default function Toggle({
  checked,
  onChange,
  colorOn,
  colorOff,
  screenReaderMsg,
}: Props) {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={`bg-${
        checked ? colorOn : colorOff
      } relative inline-flex h-6 w-11 items-center rounded-full outline outline-2 outline-white`}
    >
      <span className="sr-only">{screenReaderMsg}</span>
      <span
        className={`${
          checked ? `translate-x-6 bg-white` : `translate-x-1 bg-${colorOn}`
        } inline-block h-4 w-4 transform rounded-full transition`}
      />
    </Switch>
  );
}

