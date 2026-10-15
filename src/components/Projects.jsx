import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section className="section-shell section-block" id="projetos" aria-labelledby="projects-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">UM POUCO DO QUE TENHO FEITO</p>
          <h2 id="projects-title">
            Projetos<span className="heading-period">.</span>
          </h2>
        </div>
        <p className="section-intro">
          Cada projeto é uma oportunidade de aprender algo novo e construir
          melhor na próxima vez.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card-top">
              <span className="project-number">{project.number}</span>
              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="tag-list" aria-label="Tecnologias utilizadas">
              {project.technologies.map((technology) => (
                <li className="tag" key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
            <a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.linkLabel}: ${project.title} (abre em nova aba)`}
            >
              {project.linkLabel} <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
