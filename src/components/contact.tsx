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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <p className="contact-eyebrow">Fale Conosco</p>
        <h2 className="contact-title">Solicite um Orçamento</h2>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <p className="contact-info-text">
            Entre em contato e nossa equipe retornará em até 48 horas com uma
            proposta personalizada para o seu projeto.
          </p>
          <div className="contact-channels">
            <a href="https://wa.me/551143849101" className="contact-channel">
              <span className="contact-channel-label">WhatsApp</span>
              <span className="contact-channel-value">(11) 4384-9101</span>
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
          <form
            className="contact-form"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!service) {
                setError("Selecione o tipo de serviço");
                return;
              }
              setLoading(true);
              setError("");
              try {
                await handleSubmit({ name, phone, service, message });
                setName("");
                setPhone("");
                setService("");
                setMessage("");
                setSent(true);
              } catch (err) {
                if (err instanceof TypeError) {
                  setError("Erro de conexão. Tente novamente mais tarde.");
                } else if (err instanceof Error) {
                  setError(err.message);
                } else {
                  setError("Erro ao enviar. Tente novamente.");
                }
              } finally {
                setLoading(false);
              }
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nome</label>
                <input
                  required
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
                  required
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
              <select
                required
                className="form-input"
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                }}
              >
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
                required
                className="form-input form-textarea"
                placeholder="Descreva seu projeto..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            {error && <p className="form-error">{error}</p>}
            <button className="form-submit" type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar Solicitação"}
            </button>
          </form>
        ) : (
          <div className="contact-success">
            <p className="contact-success-title">Solicitação enviada com sucesso!</p>
            <p className="contact-success-text">
              Recebemos seu pedido de orçamento. Nossa equipe entrará em contato
              em até 48 horas.
            </p>
            <button
              className="form-submit"
              style={{ marginTop: "16px", alignSelf: "center" }}
              onClick={() => setSent(false)}
            >
              Enviar novo orçamento
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
