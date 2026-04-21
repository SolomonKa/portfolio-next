import style from "./header.module.css";
import MobileMenu from "./mobileMenu";
import ThemeToggleBtn from "../ui/ThemeToggleBtn";
import ScrollWatcher from "../ui/scrollWatcher";

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

        {/* Desctop */}
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

        {/* Mobile */}
        <div className={style["mobile-layout"]}>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
