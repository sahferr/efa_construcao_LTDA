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
  await fetch(`${apiUrl}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, service, message }),
  });
}
