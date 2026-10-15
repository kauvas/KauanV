const navigation = [
  { href: "#projetos", label: "Projetos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label="Ir para o início">
        <span className="wordmark-mark" aria-hidden="true">
          K.
        </span>
        <span>Portfólio</span>
      </a>
      <nav aria-label="Navegação principal">
        <ul className="navigation">
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
