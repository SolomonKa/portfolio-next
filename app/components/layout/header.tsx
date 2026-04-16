// "use client";
// import { useState } from "react";
// import style from "./header.module.css";
// import ThemeToggleBtn from "../ui/ThemeToggleBtn";
// import useResize from "../hooks/isMobile";
// import { useScroll } from "../providers/scrollProvider";
// import Hamburger from "hamburger-react";

// const NAV_ITEMS = [
//   { label: "À propos", href: "#about" },
//   { label: "Compétences", href: "#skills" },
//   { label: "Projets", href: "#projects" },
//   { label: "CV", href: "#cv" },
//   { label: "Contact", href: "#contact" },
// ];

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const isMobile = useResize();
//   const isScrolled = useScroll();

//   return (
//     <header>
//       <div
//         className={`${style["header-container"]} ${isScrolled && style["nav-scrolled"]}`}
//       >
//         {isMobile ? (
//           <>
//             <ThemeToggleBtn />
//             <nav aria-label="Main Navigation">
//               <div className={style.hamburger}>
//                 <Hamburger
//                   size={24}
//                   toggled={isOpen}
//                   toggle={setIsOpen}
//                   label={isOpen ? "Close menu" : "Open menu"}
//                 />
//               </div>
//               <ul
//                 className={`${style["offscreen-menu"]} ${isOpen && style.active}`}
//                 aria-hidden={!isOpen}
//               >
//                 {NAV_ITEMS.map((n) => {
//                   return (
//                     <li key={n.label} className={style["nav-link"]}>
//                       <a href={n.href}>{n.label}</a>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </nav>
//           </>
//         ) : (
//           <>
//             <span className={style.logo}>SK</span>
//             <nav aria-label="Main Navigation">
//               <ul className={style["nav-container"]}>
//                 {NAV_ITEMS.map((n) => {
//                   return (
//                     <li key={n.label} className={style["nav-link"]}>
//                       <a href={n.href}>{n.label}</a>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </nav>
//             <ThemeToggleBtn />
//           </>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import style from "./header.module.css";
import MobileMenu from "./mobileMenu";
import ScrollWatcher from "./scrollWatcher";
import ThemeToggleBtn from "../ui/ThemeToggleBtn";

const NAV_ITEMS = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header>
      <div className={style["header-container"]}>
        <ScrollWatcher />

        {/* Desktop — hidden on mobile via CSS */}
        <div className={style["desktop-layout"]}>
          <a href="/" className={style.logo} aria-label="Home">
            SK
          </a>
          <nav aria-label="Main navigation">
            <ul className={style["nav-container"]}>
              {NAV_ITEMS.map((n) => (
                <li key={n.label} className={style["nav-link"]}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggleBtn />
        </div>

        {/* Mobile — hidden on desktop via CSS */}
        <div className={style["mobile-layout"]}>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
