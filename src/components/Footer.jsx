export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-content">
        <p>© {new Date().getFullYear()} [Seu nome]</p>
        <a href="#inicio">Voltar ao topo ↑</a>
        <p>Feito com React e vontade de aprender.</p>
      </div>
    </footer>
  );
}
