import { useEffect, useState } from "react";
import { isClient } from "../lib/etc";
import { getIsMobile } from "../lib/style";

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    if (!isClient()) return;
    const listen = () => setIsMobile(getIsMobile());

    window.addEventListener("resize", listen);

    return () => {
      window.removeEventListener("resize", getIsMobile);
    };
  }, []);

  return {
    isMobile,
  };
};
