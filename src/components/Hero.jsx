export default function Hero() {
  return (
    <section className="hero section-shell" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Disponível para aprender e colaborar
        </p>
        <h1 id="hero-title">
          Olá, eu sou
          <br />
          <span>Kauan Vitor.</span>
        </h1>
        <p className="hero-description">
          Graduado em Análise e Desenvolvimento de Sistemas pela Uniube, em busca de oportunidades como Desenvolvedor Web Full Stack. Possuo experiência prática em projetos acadêmicos e pessoais utilizando HTML, CSS e JavaScript no Front-end e PHP/Python no Back-end, além de sólido conhecimento no padrão arquitetural MVC, funcionalidades CRUD e manipulação de bancos de dados. Inglês fluente e grande paixão por resolução de problemas e aprendizado contínuo.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Conheça meu trabalho <span aria-hidden="true">↘</span>
          </a>
          <a className="text-link" href="#contato">
            Vamos conversar
          </a>
        </div>
      </div>
      <div className="hero-note" aria-label="Uma nota pessoal">
        <span className="note-symbol" aria-hidden="true">
          ✳
        </span>
        <p>
          Feito com curiosidade,
          <br />
          café e muito código.
        </p>
        <span className="note-caption">EM CONSTRUÇÃO, COMO EU.</span>
      </div>
    </section>
  );
}
