"use client";
import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <p className="contact-eyebrow">Fale Conosco</p>
        <h2 className="contact-title">Solicite um Orçamento</h2>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <p className="contact-info-text">
            Entre em contato e nossa equipe retornará em até 24 horas com uma
            proposta personalizada para o seu projeto.
          </p>
          <div className="contact-channels">
            <a href="https://wa.me/5511999999999" className="contact-channel">
              <span className="contact-channel-label">WhatsApp</span>
              <span className="contact-channel-value">(11) 99999-9999</span>
            </a>
            <a
              href="mailto:contato@efaconstrucao.com.br"
              className="contact-channel"
            >
              <span className="contact-channel-label">E-mail</span>
              <span className="contact-channel-value">
                contato@efaconstrucao.com.br
              </span>
            </a>
          </div>
        </div>

        {!sent ? (
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nome</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="form-group">
                <label className="form-label">WhatsApp</label>
                <input
                  className="form-input"
                  type="tel"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Tipo de serviço</label>
              <select className="form-input">
                <option value="">Selecione...</option>
                <option>Alvenaria</option>
                <option>Acabamentos</option>
                <option>Carpintaria</option>
                <option>Reformas</option>
                <option>Pedra Miracema</option>
                <option>Suporte à Obra</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Mensagem</label>
              <textarea
                className="form-input form-textarea"
                placeholder="Descreva seu projeto..."
              />
            </div>
            <button className="form-submit" onClick={() => setSent(true)}>
              Enviar Solicitação
            </button>
          </div>
        ) : (
          <div className="contact-success">
            <p className="contact-success-title">Mensagem enviada!</p>
            <p className="contact-success-text">
              Retornaremos em até 24 horas.
            </p>
          </div>
        )}
      </div>

      <div className="contact-footer">
        <p className="contact-footer-text">
          © 2024 EFA Construção LTDA — Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}
