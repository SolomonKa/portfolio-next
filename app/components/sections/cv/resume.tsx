import { Download, FileUser } from "lucide-react";
import style from "./resume.module.css";

function Resume() {
  return (
    <section aria-labelledby="resume" className="background-2" id="cv">
      <div className={`container ${style.section}`}>
        <h3 className="subtitle">Curriculum Vitae</h3>
        <div className={style["cs-wrapper"]}>
          <div className={style["cv-icon-cont"]}>
            <FileUser className={style["cv-img"]} />
          </div>
          <div className="cv-description">
            <h3 className={style["cv-subtitle"]}>Télécharger mon CV</h3>
            <p className={style["cv-desctipt"]}>
              Obtenez un aperçu détaillé de mon expérience, formation et
              compétences techniques dans un document PDF professionnel.
            </p>
          </div>
        </div>
        <a
          href="/Resume_Solomon-KALANDADZE.pdf"
          download
          rel="noopener noreferrer"
          className={`btn-primary btn-primary-color ${style["primary-btn-mobile"]}`}
          style={{ border: "none" }}
        >
          {<Download />}Télécharger le CV (PDF)
        </a>
      </div>
    </section>
  );
}

export default Resume;
