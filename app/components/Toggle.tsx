import { useContext, useState } from "react";
import { ChapterContext } from "~/chapterContext";
import type { Dispatch, SetStateAction } from "react";
import { Switch } from "@headlessui/react";
import type { ReactNodeLike } from "prop-types";

interface Props {
  checked: boolean;
  children: ReactNodeLike;
  onChange: Dispatch<SetStateAction<boolean>>;
  accentColor?: string;
  backgroundColor?: string;
  screenReaderMsg?: string;
  className?: string;
}

export default function Toggle({
  checked,
  children,
  onChange,
  screenReaderMsg,
  className,
}: Props) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { backgroundColor, accentColor } = useContext(ChapterContext);

  return (
    <Switch.Group>
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
          className={`bg-${isFocused ? backgroundColor : "white"}
            ${
              checked
                ? `translate-x-[16px] md:translate-x-[24px] bg-white`
                : `translate-x-[2px] md:translate-x-[4px]`
            }
            pointer-events-none inline-block h-3 w-3 md:h-4 md:w-4 transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <Switch.Label>{children}</Switch.Label>
    </Switch.Group>
  );
}
