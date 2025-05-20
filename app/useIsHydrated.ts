import { useSyncExternalStore } from "react";

const subscribe = () => {
  return () => {};
};

export const useIsHydrated = () => {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
};
