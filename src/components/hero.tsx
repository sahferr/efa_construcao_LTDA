import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">Construção de Alto Padrão</p>
        <h1 className="hero-title">
          Sua visão,
          <br />
          nossa execução.
        </h1>
        <p className="hero-subtitle">
          Obras residenciais e empreendimentos com qualidade, organização e
          prazo cumprido.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="hero-btn-primary">
            Solicitar Orçamento
          </a>
          <a href="#portfolio" className="hero-btn-secondary">
            Ver Obras
          </a>
        </div>
      </div>
    </section>
  );
}
