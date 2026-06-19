"use client";
import { useState } from "react";
import "../styles/navbar.css";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre Nós", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#hero" className="navbar-logo">
        EFA Construção
      </a>

      <ul className="navbar-links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="navbar-link">
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="navbar-cta">
            Orçamento
          </a>
        </li>
      </ul>

      <button
        className={`navbar-burger${open ? " is-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
      >
        <span />
        <span />
      </button>

      {open && (
        <div className="navbar-mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="navbar-mobile-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="navbar-cta"
            onClick={() => setOpen(false)}
          >
            Orçamento
          </a>
        </div>
      )}
    </nav>
  );
}
