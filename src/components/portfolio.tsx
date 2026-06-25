"use client";

import { useRef, useState } from "react";
import alphaville from "../assets/alphaville.png";
import altoLapa from "../assets/alto-lapa.png";
import paulista from "../assets/paulista.png";
import pinheiros from "../assets/pinheiros.png";

import "../styles/portfolio.css";

const works = [
  {
    title: "Residência Paulista",
    type: "Obra Residencial",
    year: "2026",
    image: paulista.src,
    size: "card-1",
  },
  {
    title: "Escritório Pinheiros",
    type: "Reforma Comercial",
    year: "2025",
    image: pinheiros.src,
    size: "card-2",
  },
  {
    title: "Residência Alto da Lapa",
    type: "Obra Residencial",
    year: "2025",
    image: altoLapa.src,
    size: "card-3",
  },
  {
    title: "Residência Alphaville",
    type: "Obra Residencial",
    year: "2024",
    image: alphaville.src,
    size: "card-4",
  },
];

function PortfolioCard({
  work,
  useGridPosition = false,
}: {
  work: (typeof works)[number];
  useGridPosition?: boolean;
}) {
  return (
    <div
      className={`portfolio-card ${useGridPosition ? work.size : ""}`}
      style={{ backgroundImage: `url(${work.image})` }}
    >
      <div className="portfolio-info">
        <span className="portfolio-type">{work.type}</span>
        <h3 className="portfolio-name">{work.title}</h3>
        <span className="portfolio-year">{work.year}</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);

  const startDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    startX.current = e.pageX;

    if (trackRef.current) {
      const style = window.getComputedStyle(trackRef.current);
      const matrix = new DOMMatrix(style.transform);
      prevTranslate.current = matrix.m41;
    }
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !trackRef.current) return;

    e.preventDefault();

    const currentX = e.pageX - startX.current;
    const nextTranslate = prevTranslate.current + currentX;

    currentTranslate.current = nextTranslate;

    trackRef.current.style.animation = "none";
    trackRef.current.style.transform = `translateX(${nextTranslate}px)`;
  };

  const stopDrag = () => {
    setIsDragging(false);

    prevTranslate.current = currentTranslate.current;
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <p className="portfolio-eyebrow">Obras Realizadas</p>
        <h2 className="portfolio-title">Nosso Portfólio</h2>
      </div>

      {/* Mobile */}
      <div className="portfolio-mobile">
        <div
          className="track"
          ref={trackRef}
          onMouseDown={startDrag}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          {[...works, ...works].map((work, index) => (
            <PortfolioCard key={`${work.title}-${index}`} work={work} />
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="portfolio-desktop">
        {works.map((work) => (
          <PortfolioCard key={work.title} work={work} useGridPosition />
        ))}
      </div>
    </section>
  );
}
