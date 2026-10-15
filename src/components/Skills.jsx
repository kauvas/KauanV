import { skills } from "../data/skills.js";

export default function Skills() {
  return (
    <section
      className="skills-section"
      id="habilidades"
      aria-labelledby="skills-title"
    >
      <div className="section-shell skills-layout">
        <div>
          <p className="eyebrow">FERRAMENTAS QUE ESTOU EXPLORANDO</p>
          <h2 id="skills-title">
            Habilidades<span className="heading-period">.</span>
          </h2>
        </div>
        <div>
          <p className="skills-intro">
            Estou sempre aprendendo. Estas são algumas das tecnologias com que
            estudo e construo projetos:
          </p>
          <ul className="skill-list">
            {skills.map((skill) => (
              <li key={skill}>
                <span className="skill-check" aria-hidden="true">
                  +
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
