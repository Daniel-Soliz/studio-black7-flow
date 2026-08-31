import { Link } from "@tanstack/react-router";
import { Menu, X, Instagram, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";

import {
  ADDRESS,
  INSTAGRAM_BARBER,
  INSTAGRAM_RAY,
  HOURS,
  whatsappLink,
  notifyBookingIntent,
  type Service,
} from "@/lib/studio";

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.18-1.36a9.94 9.94 0 0 0 4.86 1.25h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm0 18.16h-.01a8.26 8.26 0 0 1-4.21-1.15l-.3-.18-3.07.8.82-3-.2-.31a8.23 8.23 0 0 1-1.26-4.36c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.43a8.22 8.22 0 0 1 2.42 5.85c0 4.57-3.71 8.19-8.32 8.19Zm4.54-6.13c-.25-.13-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.56c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export function BookButton({
  service,
  children,
  variant = "solid",
  className = "",
}: {
  service?: Service;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
}) {
  const styles = {
    solid:
      "bg-gold text-primary-foreground hover:bg-gold-soft shadow-[var(--shadow-gold)] hover:shadow-none",
    outline: "border border-gold/60 text-gold hover:bg-gold hover:text-primary-foreground",
    ghost: "text-foreground/80 hover:text-gold",
  }[variant];

  return (
    <a
      href={whatsappLink(service)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => notifyBookingIntent(service)}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/50 font-display text-sm tracking-tight text-gold">
            RB
          </span>
          <span className="font-display text-lg tracking-wide">Studio Black7</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <BookButton className="hidden sm:inline-flex">Agendar</BookButton>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-sm border border-border p-2 text-foreground lg:hidden"
          >
            {open ? <Menu className="hidden" /> : null}
            {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/98 px-5 pb-6 pt-2 backdrop-blur lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/50 py-3 text-sm uppercase tracking-[0.18em] text-muted-foreground"
            >
              {item.label}
            </a>
          ))}
          <BookButton className="mt-5 w-full">Agendar horário</BookButton>
        </nav>
      )}
    </header>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => notifyBookingIntent()}
      aria-label="Agendar pelo WhatsApp"
      className="pulse-ring fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/50 font-display text-sm text-gold">
              RB
            </span>
            <span className="font-display text-lg">Studio Black7</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Barbearia premium na Zona Norte de São Paulo. Estilo, elegância e precisão em cada
            corte.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] text-gold">Navegação</h3>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] text-gold">Onde estamos</h3>
          <p className="mt-4 flex gap-2 text-sm text-muted-foreground">
            <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
            {ADDRESS}
          </p>
          <div className="mt-3 space-y-1 text-sm text-muted-foreground">
            {HOURS.map((h) => (
              <p key={h.day} className="flex gap-2">
                <Clock size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span>
                  {h.day}: {h.time}
                </span>
              </p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] text-gold">Redes</h3>
          <div className="mt-4 space-y-2">
            <a
              href={INSTAGRAM_BARBER}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <Instagram size={16} strokeWidth={1.5} /> @barber_black7_
            </a>
            <a
              href={INSTAGRAM_RAY}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <Instagram size={16} strokeWidth={1.5} /> @rayblakc7
            </a>
          </div>
          <BookButton variant="outline" className="mt-5 w-full">
            <WhatsAppIcon className="h-4 w-4" /> Agendar
          </BookButton>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">
        © 2026 Studio Black7 — Rayblack7. Todos os direitos reservados.{" "}
        <Link to="/admin" className="ml-2 transition-colors hover:text-gold">
          Admin
        </Link>
      </div>
    </footer>
  );
}
