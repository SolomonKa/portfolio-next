"use client";
import style from "../layout/header.module.css";
import { useScroll } from "../providers/scrollProvider";

const ScrollWatcher = () => {
  const isScrolled = useScroll();

  return (
    <span
      data-scrolled={isScrolled}
      className={style["scroll-watcher"]}
      aria-hidden="true"
    />
  );
};

export default ScrollWatcher;
