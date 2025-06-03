import { useContext, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import { Field, Label, Switch } from "@headlessui/react";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  accentColor?: string;
  backgroundColor?: string;
  checked: boolean;
  className?: string;
  label: string;
  onChange: Dispatch<SetStateAction<boolean>>;
  screenReaderMsg?: string;
}

export default function Toggle({
  checked,
  label,
  onChange,
  screenReaderMsg,
  className,
}: Props) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { backgroundColor, accentColor } = useContext(ChapterContext);

  return (
    <Field>
      <Switch
        checked={checked}
        onChange={() => onChange(!checked)}
        onKeyDown={({ key }) => {
          if (key === "Enter") onChange(!checked);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`bg-${checked ? backgroundColor : accentColor}
          outline-${isFocused ? backgroundColor : accentColor}
          relative inline-flex h-4 md:h-6 w-7 md:w-11 items-center rounded-full outline outline-2 ${
            className ?? ""
          }`}
      >
        <span className="sr-only">{screenReaderMsg}</span>
        <span
          aria-hidden="true"
          className={`bg-${backgroundColor}
            ${
              checked
                ? `translate-x-[16px] md:translate-x-[24px] bg-white`
                : `translate-x-[2px] md:translate-x-[4px]`
            }
              pointer-events-none inline-block h-3 w-3 md:h-4 md:w-4 transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <Label className="block w-min ps-1 text-xs lg:text-sm lg:w-auto cursor-pointer">
        {label}
      </Label>
    </Field>
  );
}
