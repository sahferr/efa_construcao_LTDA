import gestion from "../assets/gestion.png";
import masonry from "../assets/masonry.png";
import miracema from "../assets/miracema.jpg";
import wood from "../assets/wood.png";
import "../styles/service.css";
const services = [
  {
    title: "Alvenaria",
    desc: "Execução de alvenaria e revestimentos, abrangendo chapisco, emboço e reboco, com técnicas que asseguram solidez.",
    image: masonry.src,
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
    image: wood.src,
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
    image: miracema.src,
  },
  {
    title: "Suporte à Obra",
    desc: "Acompanhamento técnico, gestão de equipe e apoio operacional durante toda a obra.",
    image: gestion.src,
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
