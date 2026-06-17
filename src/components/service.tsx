import "../styles/service.css";

const services = [
  {
    title: "Alvenaria",
    desc: "Execução de estruturas em alvenaria com materiais de alta durabilidade e acabamento preciso.",
  },
  {
    title: "Acabamentos",
    desc: "Revestimentos, pisos, pintura e detalhes que entregam sofisticação ao ambiente.",
  },
  {
    title: "Carpintaria",
    desc: "Trabalhos em madeira com precisão técnica, desde estruturas até elementos decorativos.",
  },
  {
    title: "Reformas",
    desc: "Reformas completas ou parciais com planejamento, prazo e orçamento respeitados.",
  },
  {
    title: "Pedra Miracema",
    desc: "Aplicação especializada em pedra miracema para fachadas, muros e pisos externos.",
  },
  {
    title: "Suporte à Obra",
    desc: "Acompanhamento técnico, gestão de equipe e apoio operacional durante toda a obra.",
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
          <div key={s.title} className="service-card">
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
