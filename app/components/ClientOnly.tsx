/*
This was adapted from the ClientOnly component form remix-utils
https://github.com/sergiodxa/remix-utils/blob/e5795afaf918fb996870a55bbe888bcbc60a4d01/src/react/client-only.tsx
*/
import { useIsHydrated } from "~/useIsHydrated";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

const ClientOnly = ({ children, fallback = null }: Props) => {
  const isHydrated = useIsHydrated;

  return isHydrated() ? <>{children}</> : <>{fallback}</>;
};

export default ClientOnly;
