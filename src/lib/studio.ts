export const WHATSAPP_NUMBER = "5511987267087";
export const WHATSAPP_DISPLAY = "+55 11 98726-7087";
export const INBARBER_URL = "https://inbarber.com.br/";
export const INSTAGRAM_BARBER = "https://instagram.com/barber_black7_";
export const INSTAGRAM_RAY = "https://instagram.com/rayblakc7";
export const ADDRESS = "Tv. União, 4 — Jardim Paulistano, Zona Norte, São Paulo/SP";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Travessa+Uni%C3%A3o+4+Jardim+Paulistano+S%C3%A3o+Paulo";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Travessa+Uni%C3%A3o,+4+-+Jardim+Paulistano,+S%C3%A3o+Paulo&output=embed";

/**
 * Placeholder para automação futura (n8n / Make / WhatsApp Business API).
 * Quando definido, o clique em "Agendar" também dispara um evento para o
 * webhook antes de abrir o WhatsApp — permitindo que um bot consulte a agenda
 * e responda com os horários livres.
 */
export const BOOKING_WEBHOOK_URL: string | null = null;

export function bookingMessage(service?: { name: string; price: number }) {
  if (service) {
    return `Olá! Vim pelo site e quero agendar: ${service.name} (R$ ${service.price},00). Quais horários vocês têm disponíveis?`;
  }
  return "Olá! Vim pelo site da Studio Black7 e gostaria de saber os horários disponíveis para agendar um corte. Pode me ajudar?";
}

export function whatsappLink(service?: { name: string; price: number }) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookingMessage(service))}`;
}

export function notifyBookingIntent(service?: { name: string; price: number }) {
  if (!BOOKING_WEBHOOK_URL) return;
  try {
    void fetch(BOOKING_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "site",
        service: service?.name ?? null,
        price: service?.price ?? null,
        at: new Date().toISOString(),
      }),
    });
  } catch {
    /* noop */
  }
}

export type Service = { name: string; price: number };
export type ServiceCategory = { id: string; label: string; icon: string; items: Service[] };

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "cortes",
    label: "Cortes",
    icon: "scissors",
    items: [
      { name: "Corte", price: 30 },
      { name: "Corte + Sobrancelha", price: 35 },
      { name: "Corte + Penteado", price: 40 },
      { name: "Corte + Pigmentação", price: 45 },
      { name: "Corte + Relaxamento", price: 45 },
      { name: "Corte + Barba", price: 50 },
      { name: "Corte + Barba + Penteado", price: 60 },
      { name: "Corte + Progressiva", price: 95 },
    ],
  },
  {
    id: "barba",
    label: "Barba",
    icon: "razor",
    items: [
      { name: "Barba", price: 25 },
      { name: "Barba + Penteado + Pezinho", price: 45 },
    ],
  },
  {
    id: "acabamento",
    label: "Penteado / Acabamento",
    icon: "sparkles",
    items: [
      { name: "Penteado + Pezinho", price: 25 },
      { name: "Dedo Liso", price: 15 },
    ],
  },
  {
    id: "quimica",
    label: "Química / Alisamento",
    icon: "droplet",
    items: [
      { name: "Relaxamento", price: 20 },
      { name: "Progressiva", price: 80 },
    ],
  },
  {
    id: "coloracao",
    label: "Coloração",
    icon: "palette",
    items: [
      { name: "Luzes", price: 90 },
      { name: "Nevou", price: 130 },
    ],
  },
];

export const HOURS = [
  { day: "Segunda a Sexta", time: "09h–12h / 13h30–21h" },
  { day: "Sábado", time: "09h–12h / 13h30–21h" },
  { day: "Domingo", time: "Fechado" },
];
