import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className="background-2">
      <div className={`container ${style.footer}`}>
        <p className={style.desctipt}>
          © 2026 Solomon Kalandadze. Built with Next.Js
        </p>
        <nav>
          <a className={style["nav-link"]} href="#about">
            About
          </a>
          <a className={style["nav-link"]} href="#projects">
            Projects
          </a>
          <a className={style["nav-link"]} href="#cv">
            CV
          </a>
          <a className={style["nav-link"]} href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
