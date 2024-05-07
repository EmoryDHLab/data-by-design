import { useEffect, useRef, useState } from "react";
import { useLocation } from "@remix-run/react";

const Analytics = () => {
  const location = useLocation();
  const trackerRef = useRef<HTMLImageElement>(null);
  const [key, setKey] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    setKey(location.key);
    trackerRef.current?.setAttribute(
      "src",
      "https://matomo.ecdsdev.org/matomo.php?idsite=83&rec=1"
    );
  }, [location]);

  if (process.env.NODE_ENV == "production") {
    return (
      <img
        ref={trackerRef}
        alt=""
        src=""
        className="border-0 height-0"
        id={key}
      />
    );
  }
  return null;
};

export default Analytics;
