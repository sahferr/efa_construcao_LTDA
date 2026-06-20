import "../styles/service.css";

const services = [
  {
    title: "Alvenaria",
    desc: "Execução de estruturas em alvenaria com materiais de alta durabilidade e acabamento preciso.",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Acabamentos",
    desc: "Revestimentos, pisos, pintura e detalhes que entregam sofisticação ao ambiente.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Carpintaria",
    desc: "Trabalhos em madeira com precisão técnica, desde estruturas até elementos decorativos.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Reformas",
    desc: "Reformas completas ou parciais com planejamento, prazo e orçamento respeitados.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Pedra Miracema",
    desc: "Aplicação especializada em pedra miracema para fachadas, muros e pisos externos.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Suporte à Obra",
    desc: "Acompanhamento técnico, gestão de equipe e apoio operacional durante toda a obra.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <p className="services-eyebrow">O que fazemos</p>
        <h2 className="services-title">Nossos Serviços</h2>
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <div
            key={s.title}
            className="service-card"
            style={{ "--bg-image": `url(${s.image})` } as React.CSSProperties}
          >
            <div className="service-overlay" />
            <div className="service-content">
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
