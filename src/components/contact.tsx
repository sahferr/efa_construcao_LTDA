"use client";
import { useState } from "react";
import { formatName } from "../function/formatName";
import { formatPhone } from "../function/formatPhone";
import { handleSubmit } from "../function/message";

import "../styles/contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

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
            <a href="https://wa.me/5511965787716" className="contact-channel">
              <span className="contact-channel-label">WhatsApp</span>
              <span className="contact-channel-value">(11) 96578-7716</span>
            </a>
            <a
              href="mailto:raquel.efaconstrucao@gmail.com"
              className="contact-channel"
            >
              <span className="contact-channel-label">E-mail</span>
              <span className="contact-channel-value">Raquel Ferreira</span>
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
                  value={name}
                  onChange={(e) => setName(formatName(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">WhatsApp</label>
                <input
                  className="form-input"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
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
            <button
              className="form-submit"
              onClick={() => {
                setSent(true);
                handleSubmit({ name, phone, service, message });
              }}
            >
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
