import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { Switch } from "@headlessui/react";
import type { ReactNodeLike } from "prop-types";

interface Props {
  checked: boolean;
  children: ReactNodeLike;
  onChange: Dispatch<SetStateAction<undefined>>;
  colorOff?: string;
  colorOn?: string;
  screenReaderMsg?: string;
  className?: string;
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
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <Switch.Group>
      <Switch
        checked={checked}
        onChange={() => onChange(undefined)}
        onKeyDown={({ key }) => {
          if (key === "Enter") onChange(undefined);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`bg-${checked ? colorOn : colorOff}
          outline-${isFocused ? colorOn : "white"}
          relative inline-flex h-4 md:h-6 w-7 md:w-11 items-center rounded-full outline outline-2 ${
            className ?? ""
          }`}
      >
        <span className="sr-only">{screenReaderMsg}</span>
        <span
          aria-hidden="true"
          className={`bg-${isFocused ? colorOn : "white"}
            ${
              checked
                ? `translate-x-[16px] md:translate-x-[24px] bg-white`
                : `translate-x-[2px] md:translate-x-[4px]`
            }
            pointer-events-none inline-block h-3 w-3 md:h-4 md:w-4 transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <Switch.Label className="ml-4">{children}</Switch.Label>
    </Switch.Group>
  );
}
