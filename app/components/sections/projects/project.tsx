import style from "./project.module.css";

const Project = () => {
  return (
    <section aria-labelledby="Projects" className="background">
      <div className={`container ${style.section}`}>
        <h2 id="Project" className="subtitle">
          Projets en Vedette
        </h2>
        <div className={style["pj-grid"]}>
          {/* Cinemood */}
          <div className={style["pj-content"]}>
            <h3 className={style["pj-title"]}>Cinemood</h3>
            <p className={style["pj-desctipt"]}>
              Une application qui aide à choisir un film selon l’humeur, avec
              des options de filtrage pour affiner la sélection. Développé dans
              le cadre de l'étude WCS
            </p>
            <div className={style["tech-wraper"]}>
              <span className={style["tech-pj-box"]}>React</span>
              <span className={style["tech-pj-box"]}>CSS / Responsive</span>
              <span className={style["tech-pj-box"]}>API</span>
            </div>
            <div>
              <a
                href="https://cinemood-ebon.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary btn-primary-color ${style["btn-margin"]}`}
              >
                Live Demo
              </a>
              <a
                href="https://github.com/SolomonKa/Cinemood"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary btn-outline-color ${style["btn-margin"]}`}
              >
                Source Code
              </a>
            </div>
          </div>

          {/* TeamUp */}

          <div className={style["pj-content"]}>
            <h3 className={style["pj-title"]}>Team Up</h3>
            <p className={style["pj-desctipt"]}>
              Application sportive pour publier des activités et trouver des
              coéquipiers. Projet final dans le cadre des études à WCS,
              actuellement en développement.
            </p>
            <div className={style["tech-wraper"]}>
              <span className={style["tech-pj-box"]}>React</span>
              <span className={style["tech-pj-box"]}>CSS / HTML</span>
              <span className={style["tech-pj-box"]}>Exspress</span>
              <span className={style["tech-pj-box"]}>SQL</span>
            </div>
            <div>
              {/* <a
                href="https://cinemood-ebon.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary btn-primary-color ${style["btn-margin"]}`}
              >
                Live Demo
              </a> */}
              <a
                href="https://github.com/SolomonKa/Cinemood"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary btn-outline-color ${style["btn-margin"]}`}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
