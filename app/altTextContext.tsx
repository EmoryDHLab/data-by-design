import { createContext, useEffect, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

const STORAGE_KEY = "preferShortAltText";

interface IAltTextContext {
  preferShortAltText: boolean;
  setPreferShortAltText: Dispatch<SetStateAction<boolean>>;
}

const AltTextContext = createContext<IAltTextContext>({
  preferShortAltText: false,
  setPreferShortAltText: () => {
    console.error(
      "setPreferShortAltText not implemented. Did you pass it to context?",
    );
  },
});

AltTextContext.displayName = "AltTextContext";

// Defaults to the long description everywhere (server and initial client
// render agree on `false`, so there's no hydration mismatch); once mounted,
// reads any saved preference from localStorage and keeps it in sync from
// then on. Wrapped in try/catch since localStorage can throw (private
// browsing, disabled storage) - falls back to the in-memory default.
function AltTextProvider({ children }: { children: ReactNode }) {
  const [preferShortAltText, setPreferShortAltText] = useState(false);
  // The read-from-storage effect below and this "may we persist yet" flag
  // both fire on the same first commit, before that effect's setState has
  // actually applied - without this guard, the write effect (right after)
  // would run on that same first commit too and clobber a real stored value
  // with the still-stale `false` default before the read ever takes effect.
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      setPreferShortAltText(localStorage.getItem(STORAGE_KEY) === "true");
    } catch {
      // ignore - keep the default
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, String(preferShortAltText));
    } catch {
      // ignore - preference just won't persist this session
    }
  }, [preferShortAltText, hydrated]);

  return (
    <AltTextContext.Provider
      value={{ preferShortAltText, setPreferShortAltText }}
    >
      {children}
    </AltTextContext.Provider>
  );
}

export { AltTextContext, AltTextProvider };
