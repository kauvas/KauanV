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
          <span>[Seu nome].</span>
        </h1>
        <p className="hero-description">
          Estudante de desenvolvimento web, explorando ideias e transformando-as
          em experiências digitais simples e úteis.
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
      <span className="hero-index" aria-hidden="true">
        01 / 04
      </span>
    </section>
  );
}
