"use client";
import { useEffect, useState } from "react";

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState(() => {
    if (typeof window === "undefined") return { isMobile: false };
    return { isMobile: window.innerWidth <= 768 };
  });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenSize({ isMobile: window.innerWidth <= 768 });
      }, 150);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize.isMobile;
}
