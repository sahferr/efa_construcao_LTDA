export function handleSubmit({
  name,
  phone,
  service,
  message,
}: {
  name: string;
  phone: string;
  service: string;
  message: string;
}) {
  const text = `Olá! Gostaria de solicitar um orçamento.

    *Nome:* ${name}
    *WhatsApp:* ${phone}
    *Serviço:* ${service}
    *Mensagem:* ${message}`;

  const url = `https://wa.me/5511965787716?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
