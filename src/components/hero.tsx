import Image from "next/image";
import houseFour from "../assets/hero/housefour.png";
import houseOne from "../assets/hero/houseone.png";
import houseThree from "../assets/hero/housethree.png";
import houseTwo from "../assets/hero/housetwo.png";
import "../styles/hero.css";

const heroSlides = [
  { src: houseTwo, alt: "Casa moderna de alto padrão com piscina" },
  { src: houseThree, alt: "Casa residencial com telhado colonial" },
  { src: houseOne, alt: "Fachada moderna com varanda envidraçada" },
  { src: houseFour, alt: "Residência contemporânea com área externa" },
];

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Construção de alto padrão">
      <div className="hero-slideshow" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div className="hero-slide-frame" key={slide.alt}>
            <Image
              src={slide.src}
              alt=""
              className="hero-slide"
              fill
              priority={index === 0}
              sizes="(min-width: 1200px) 28vw, 100vw"
            />
          </div>
        ))}
      </div>
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
