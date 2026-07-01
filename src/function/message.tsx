export async function handleSubmit({
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
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(`${apiUrl}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, service, message }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(
        (data as { message?: string }).message ?? "Erro ao enviar",
      );
    }
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      throw new Error(
        "O servidor demorou muito. Tente novamente ou entre em contato via WhatsApp.",
      );
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}
