"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Scroll = boolean;

const scrollContext = createContext<Scroll>(false);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState<Scroll>(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(scrollY > 20);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setIsScrolled(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <scrollContext.Provider value={isScrolled}>
      {children}
    </scrollContext.Provider>
  );
}

export function useScroll() {
  const cntx = useContext(scrollContext);
  if (cntx === null) {
    throw new Error("useScroll should be used within ScrollProvider!");
  }
  return cntx;
}
