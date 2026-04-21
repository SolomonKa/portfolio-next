"use client";
import { useState } from "react";
import Hamburger from "hamburger-react";
import ThemeToggleBtn from "../ui/ThemeToggleBtn";
import useResize from "../hooks/isMobile";
import style from "./header.module.css";

const NAV_ITEMS = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useResize();

  if (!isMobile) return null;

  return (
    <>
      <ThemeToggleBtn />
      <nav aria-label="Mobile navigation" aria-hidden={!isOpen}>
        <Hamburger
          size={24}
          toggled={isOpen}
          toggle={setIsOpen}
          label={isOpen ? "Close menu" : "Open menu"}
        />
        <ul className={`${style["offscreen-menu"]} ${isOpen && style.active}`}>
          {NAV_ITEMS.map((n) => (
            <li key={n.label} className={style["nav-link"]}>
              <a href={n.href} onClick={() => setIsOpen(false)}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
