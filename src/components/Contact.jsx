const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/kauvas",
    detail: "github.com/kauvas",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kauan-vitor-argente-dos-santos-6b18b4181",
    detail: "https://www.linkedin.com/in/kauan-vitor-argente-dos-santos-6b18b4181",
  },
  {
    label: "E-mail",
    href: "mailto:kvargente@gmail.com",
    detail: "kvargente@gmail.com",
  },
];

export default function Contact() {
  return (
    <section
      className="section-shell contact-section"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="contact-copy">
        <p className="eyebrow">TEM UMA IDEIA?</p>
        <h2 id="contact-title">
          Vamos criar
          <br />
          algo <span>legal.</span>
        </h2>
        <p>
          Estou no começo da minha jornada — e aberto a conversas, colaborações
          e boas dicas.
        </p>
      </div>
      <div className="contact-links">
        {contactLinks.map((link) => (
          <a
            className="contact-link"
            href={link.href}
            key={link.label}
            target={link.label === "E-mail" ? undefined : "_blank"}
            rel={link.label === "E-mail" ? undefined : "noreferrer"}
          >
            <span className="contact-label">{link.label}</span>
            <span className="contact-detail">{link.detail}</span>
            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
