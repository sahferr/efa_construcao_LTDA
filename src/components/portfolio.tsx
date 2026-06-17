import "../styles/portfolio.css";

const works = [
  { title: "Residência Alto da Lapa", type: "Obra Residencial", year: "2023" },
  { title: "Condomínio Vila Madalena", type: "Empreendimento", year: "2022" },
  { title: "Reforma Comercial Centro", type: "Reforma", year: "2023" },
  { title: "Fachada Pedra Miracema", type: "Acabamento Externo", year: "2022" },
  { title: "Residência Alphaville", type: "Obra Residencial", year: "2021" },
  { title: "Escritório Pinheiros", type: "Reforma Comercial", year: "2023" },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <p className="portfolio-eyebrow">Obras Realizadas</p>
        <h2 className="portfolio-title">Nosso Portfólio</h2>
      </div>
      <div className="portfolio-grid">
        {works.map((w) => (
          <div key={w.title} className="portfolio-card">
            <div className="portfolio-img-placeholder" />
            <div className="portfolio-info">
              <span className="portfolio-type">{w.type}</span>
              <h3 className="portfolio-name">{w.title}</h3>
              <span className="portfolio-year">{w.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
