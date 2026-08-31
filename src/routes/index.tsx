import { createFileRoute } from "@tanstack/react-router";
import {
  Scissors,
  Sparkles,
  Droplet,
  Palette,
  MapPin,
  Clock,
  Instagram,
  Star,
  CalendarCheck,
  ExternalLink,
  Quote,
} from "lucide-react";
import { useState } from "react";

import img1 from "@/assets/1.png.asset.json";
import img2 from "@/assets/2.png.asset.json";
import img3 from "@/assets/3.png.asset.json";
import img4 from "@/assets/4.png.asset.json";
import img5 from "@/assets/5.png.asset.json";
import rayImg from "@/assets/Ray.png.asset.json";
import heroImg from "@/assets/hero.jpg";
import { BookButton, Footer, Navbar, WhatsAppFloat, WhatsAppIcon } from "@/components/site/Chrome";
import { Counter, Reveal } from "@/components/site/Reveal";
import {
  ADDRESS,
  HOURS,
  INBARBER_URL,
  INSTAGRAM_BARBER,
  INSTAGRAM_RAY,
  MAPS_EMBED,
  MAPS_URL,
  SERVICE_CATEGORIES,
  WHATSAPP_DISPLAY,
} from "@/lib/studio";

const TITLE = "Studio Black7 — Barbearia Premium na Zona Norte de SP";
const DESCRIPTION =
  "Barbearia premium na Zona Norte de São Paulo. Cortes, barba, pigmentação e coloração com Rayblack7. Agende pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Studio Black7",
          description: DESCRIPTION,
          telephone: "+5511987267087",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Tv. União, 4",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          openingHours: ["Mo-Sa 09:00-12:00", "Mo-Sa 13:30-21:00"],
        }),
      },
    ],
  }),
  component: Home,
});

const ICONS = { scissors: Scissors, razor: Sparkles, sparkles: Sparkles, droplet: Droplet, palette: Palette };

const GALLERY = [
  { src: img1.url, alt: "Corte social com degradê e topete finalizado" },
  { src: img2.url, alt: "Degradê lateral com acabamento preciso" },
  { src: img3.url, alt: "Corte afro com pigmentação e contorno alinhado" },
  { src: img4.url, alt: "Fade baixo com acabamento na nuca" },
  { src: img5.url, alt: "Corte clássico com risco e degradê médio" },
  { src: rayImg.url, alt: "Ray Black7 em evento de barbearia e cosmética" },
];

function Home() {
  const [tab, setTab] = useState(SERVICE_CATEGORIES[0]!.id);
  const active = SERVICE_CATEGORIES.find((c) => c.id === tab) ?? SERVICE_CATEGORIES[0]!;

  return (
    <>
      <Navbar />
      <WhatsAppFloat />

      <main>
        {/* HERO */}
        <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
          <img
            src={heroImg}
            alt="Interior da barbearia Studio Black7 com iluminação âmbar"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background" />

          <div className="relative mx-auto w-full max-w-6xl px-5 pt-28">
            <Reveal>
              <p className="eyebrow">Zona Norte · São Paulo</p>
              <h1 className="mt-5 text-6xl leading-[0.95] sm:text-8xl">Studio Black7</h1>
              <p className="mt-3 font-display text-2xl text-gold sm:text-3xl">Rayblack7</p>
              <div className="gold-rule mt-7" />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                Barbearia premium na Zona Norte de São Paulo. Estilo, elegância e precisão em cada
                corte.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <BookButton>
                  <WhatsAppIcon className="h-4 w-4" /> Agendar horário
                </BookButton>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-sm border border-border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  Ver serviços
                </a>
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                Clique para consultar o horário disponível no WhatsApp e confirmar seu agendamento.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <img
                src={rayImg.url}
                alt="Ray Black7, fundador da Studio Black7"
                loading="lazy"
                className="w-full rounded-sm border border-border object-cover"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">Sobre</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Precisão que vira identidade</h2>
              <div className="gold-rule mt-6" />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                A Studio Black7 nasceu das mãos de Ray Black7 (Ray Silva), especialista em
                pigmentação capilar, com 4 anos de profissão dedicados a desenhar cortes que
                combinam com a rotina e a personalidade de cada cliente.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Na cadeira, um barbeiro executor com 5 anos de experiência garante acabamento
                milimétrico — do degradê ao contorno da barba. Aqui você não sai só com o cabelo
                pronto: sai com confiança.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
            {[
              { value: 4, suffix: "+", label: "Anos de fundador" },
              { value: 5, suffix: "+", label: "Anos do barbeiro" },
              { value: 1, prefix: "#", label: "Especialista em pigmentação" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="bg-card">
                <div className="px-6 py-10 text-center">
                  <p className="font-display text-5xl text-gold">
                    {s.prefix}
                    <Counter to={s.value} suffix={s.suffix ?? ""} />
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="border-y border-border bg-card/30 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <p className="eyebrow">Serviços</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Tabela de preços</h2>
              <div className="gold-rule mt-6" />
            </Reveal>

            <div className="mt-10 flex flex-wrap gap-2">
              {SERVICE_CATEGORIES.map((c) => {
                const Icon = ICONS[c.icon as keyof typeof ICONS] ?? Scissors;
                const isActive = c.id === tab;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setTab(c.id)}
                    className={`inline-flex items-center gap-2 rounded-sm border px-4 py-2.5 text-xs uppercase tracking-[0.16em] transition-colors ${
                      isActive
                        ? "border-gold bg-gold text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold"
                    }`}
                  >
                    <Icon size={15} strokeWidth={1.5} />
                    {c.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {active.items.map((s, i) => (
                <Reveal key={s.name} delay={i * 50}>
                  <div className="group flex items-center justify-between gap-4 rounded-sm border border-border bg-card px-5 py-4 transition-colors hover:border-gold/60">
                    <span className="text-sm">{s.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="font-display text-xl text-gold">R$ {s.price}</span>
                      <BookButton service={s} variant="ghost" className="px-0 py-0 text-[0.65rem]">
                        Agendar
                      </BookButton>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start gap-3">
              <BookButton>
                <WhatsAppIcon className="h-4 w-4" /> Agendar pelo WhatsApp
              </BookButton>
              <p className="text-xs text-muted-foreground">
                Consulte primeiro o horário disponível no WhatsApp — a confirmação é feita pela
                equipe, sem reserva automática.
              </p>
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <p className="eyebrow">Galeria</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Trabalhos recentes</h2>
            <div className="gold-rule mt-6" />
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {GALLERY.map((g, i) => (
              <Reveal key={g.src} delay={i * 70}>
                <div className="group overflow-hidden rounded-sm border border-border">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
            {[
              { icon: Instagram, value: "~6 mil", label: "seguidores @rayblakc7" },
              { icon: Instagram, value: "197+", label: "seguidores da barbearia" },
              { icon: Star, value: "5★", label: "atendimento premium" },
            ].map((s) => (
              <div key={s.label} className="bg-card px-6 py-8 text-center">
                <s.icon size={18} strokeWidth={1.5} className="mx-auto text-gold" />
                <p className="mt-3 font-display text-3xl">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <Reveal>
            <blockquote className="mt-12 border-l-2 border-gold pl-6">
              <Quote size={20} strokeWidth={1.5} className="text-gold" />
              <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">
                “Mais do que um corte, entregamos confiança, estilo e motivação para o cliente
                encarar a semana com outra postura.”
              </p>
              <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Ray Black7 — fundador
              </footer>
            </blockquote>
          </Reveal>
        </section>

        {/* DEPOIMENTOS */}
        <section className="border-y border-border bg-card/30 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <p className="eyebrow">Depoimentos</p>
              <h2 className="mt-4 text-4xl">O que dizem os clientes</h2>
              <div className="gold-rule mt-6" />
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                "Acabamento impecável e atendimento de primeira. Saí com outra cara.",
                "A pigmentação ficou natural demais. Virou meu barbeiro fixo.",
                "Ambiente premium, horário respeitado e corte sempre no ponto.",
              ].map((t, i) => (
                <Reveal key={t} delay={i * 100}>
                  <figure className="h-full rounded-sm border border-border bg-card p-6">
                    <div className="flex gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} size={13} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      “{t}”
                    </blockquote>
                    <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Cliente Studio Black7
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Localização</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Onde nos encontrar</h2>
              <div className="gold-rule mt-6" />
              <p className="mt-6 flex gap-3 text-sm text-muted-foreground">
                <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                {ADDRESS}
              </p>
              <div className="mt-6 space-y-2">
                {HOURS.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between border-b border-border pb-2 text-sm"
                  >
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Clock size={15} strokeWidth={1.5} className="text-gold" />
                      {h.day}
                    </span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-sm border border-gold/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
              >
                Abrir no Google Maps <ExternalLink size={14} strokeWidth={1.5} />
              </a>
            </Reveal>

            <Reveal delay={120}>
              <iframe
                title="Mapa da Studio Black7"
                src={MAPS_EMBED}
                loading="lazy"
                className="h-80 w-full rounded-sm border border-border grayscale md:h-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="border-t border-border bg-card/30 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <p className="eyebrow">Contato & Agendamento</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Dois caminhos para agendar</h2>
              <div className="gold-rule mt-6" />
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <Reveal>
                <div className="flex h-full flex-col rounded-sm border border-gold/50 bg-card p-7">
                  <WhatsAppIcon className="h-7 w-7 text-gold" />
                  <h3 className="mt-4 text-2xl">WhatsApp</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">
                    Fluxo recomendado
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Consulte os horários livres direto com a equipe e confirme seu agendamento na
                    conversa. Sem reserva automática — a confirmação é humana.
                  </p>
                  <p className="mt-4 font-display text-xl">{WHATSAPP_DISPLAY}</p>
                  <BookButton className="mt-6 w-full">
                    <WhatsAppIcon className="h-4 w-4" /> Chamar no WhatsApp
                  </BookButton>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="flex h-full flex-col rounded-sm border border-border bg-card p-7">
                  <CalendarCheck size={26} strokeWidth={1.5} className="text-gold" />
                  <h3 className="mt-4 text-2xl">InBarber App</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Para quem já sabe o horário
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Agendamento online rápido para formalizar o horário já combinado — ou marcar
                    direto, se você já conhece a agenda da casa.
                  </p>
                  <a
                    href={INBARBER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-sm border border-gold/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                  >
                    Agendar pelo app <ExternalLink size={14} strokeWidth={1.5} />
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={INSTAGRAM_BARBER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                <Instagram size={16} strokeWidth={1.5} /> @barber_black7_
              </a>
              <a
                href={INSTAGRAM_RAY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                <Instagram size={16} strokeWidth={1.5} /> @rayblakc7
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
