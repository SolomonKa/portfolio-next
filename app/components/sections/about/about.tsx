import { FileText } from "lucide-react";
import GithubIcon from "../../icons/GithubIcon";
import LinkedinLogo from "../../icons/Linkedin";
import style from "./about.module.css";

function About() {
  return (
    <section
      aria-labelledby="hero-heading"
      className={`container background ${style.section}`}
      id="about"
    >
      <div className={style.sectionContent}>
        <p className="p1 text-primary-color">Bonjour, je suis</p>
        <h1 id="hero-heading" className={`title ${style.title}`}>
          Solomon Kalandadze
        </h1>
        <h2 className="secondary-title text-secondary-color">
          Développeur Fullstack Junior
        </h2>
        <p className="p1 text-secondary-color">
          Passionné par l’innovation et les technologies modernes, je conçois
          des solutions fullstack et explore activement l’IA agentique et les
          SDK d’IA pour repousser les limites.
        </p>
        <nav aria-label="Liens professionnels" className={style.links}>
          <a
            href="/cv.pdf"
            aria-label="Télécharger mon CV (PDF)"
            className="btn-primary btn-primary-color"
          >
            <FileText />
            CV
          </a>
          <a
            href="https://github.com/..."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub (nouvel onglet)"
            className="btn-primary btn-outline-color "
          >
            <GithubIcon />
            Github
          </a>
          <a
            href="https://linkedin.com/in/..."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn (nouvel onglet)"
            className="btn-primary btn-outline-color "
          >
            <LinkedinLogo />
            LinkedIn
          </a>
        </nav>
      </div>
    </section>
  );
}

export default About;
