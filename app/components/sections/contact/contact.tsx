import { Mail } from "lucide-react";
import GithubLogo from "../../icons/GithubIcon";
import LinkedinLogo from "../../icons/Linkedin";
import style from "./contact.module.css";

function Contact() {
  return (
    <section aria-labelledby="contact" className="background">
      <div className={`container ${style.section}`}>
        <h2 id="contact" className="subtitle">
          Contacte
        </h2>
        <p className={style["contact-desctipt"]}>
          Je suis actuellement à la recherche d’opportunités en alternance.
          N’hésitez pas à me contacter pour échanger ou discuter de
          collaborations potentielles.
        </p>
        <div className={style.links}>
          <a
            href="mailto:solokalandadze@gmail.com"
            className={style["link-container"]}
          >
            <div className={style["lk-box"]}>
              {<Mail size={20} className={style["gh-icon"]} />}
            </div>
            solokalandadze@gmail.com
          </a>
          <a
            href="https://github.com/SolomonKa"
            className={style["link-container"]}
          >
            <div className={style["lk-box"]}>
              <GithubLogo size={20} className={style["gh-icon"]} />
            </div>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/solomon-kalandadze-95899092/"
            target="blank"
            className={style["link-container"]}
          >
            <div className={style["lk-box"]}>
              <LinkedinLogo size={20} className={style["gh-icon"]} />
            </div>
            Linkedin
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
