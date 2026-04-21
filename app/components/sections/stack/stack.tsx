import skills from "../../lib/stackData";
import style from "./stack.module.css";

const Stack = () => {
  return (
    <section aria-labelledby="stacks" className="background-2" id="skills">
      <div className={`container ${style.section}`}>
        <h2 id="stack" className="subtitle">
          Compétences & Technologies
        </h2>

        <div className={style["skills-grid"]}>
          {skills.map((stack) => (
            <div key={stack.category}>
              <h3 className={style["tech-heading"]}>{stack.category}</h3>
              {stack.technologies.map((techno) => (
                <span key={techno} className={style["tech-box"]}>
                  {techno}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
