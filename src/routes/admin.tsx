import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { SERVICE_CATEGORIES, type ServiceCategory } from "@/lib/studio";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel Admin — Studio Black7" },
      {
        name: "description",
        content: "Painel interno da Studio Black7 para editar serviços e preços da barbearia.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Painel Admin — Studio Black7" },
      { property: "og:description", content: "Painel interno de gestão de serviços e preços." },
      { property: "og:url", content: "/admin" },
    ],
    links: [{ rel: "canonical", href: "/admin" }],
  }),
  component: Admin,
});

const STORAGE_KEY = "black7-servicos";

function Admin() {
  const [cats, setCats] = useState<ServiceCategory[]>(SERVICE_CATEGORIES);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setCats(JSON.parse(raw) as ServiceCategory[]);
      } catch {
        /* ignore */
      }
    }
  }, []);

  const update = (ci: number, si: number, patch: Partial<{ name: string; price: number }>) => {
    setCats((prev) =>
      prev.map((c, i) =>
        i === ci
          ? { ...c, items: c.items.map((s, j) => (j === si ? { ...s, ...patch } : s)) }
          : c,
      ),
    );
    setSaved(false);
  };

  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <Link
        to="/"
        className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-gold"
      >
        ← Voltar ao site
      </Link>
      <h1 className="mt-6 text-4xl">Painel Studio Black7</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Edite nomes e preços dos serviços. As alterações ficam salvas neste navegador — pronto para
        conectar a um banco de dados futuramente.
      </p>

      <div className="mt-10 space-y-8">
        {cats.map((cat, ci) => (
          <section key={cat.id} className="rounded-sm border border-border bg-card p-5">
            <h2 className="text-xs uppercase tracking-[0.24em] text-gold">{cat.label}</h2>
            <div className="mt-4 space-y-3">
              {cat.items.map((s, si) => (
                <div key={s.name + si} className="flex gap-3">
                  <input
                    aria-label="Nome do serviço"
                    value={s.name}
                    onChange={(e) => update(ci, si, { name: e.target.value })}
                    className="flex-1 rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-gold"
                  />
                  <input
                    aria-label="Preço"
                    type="number"
                    value={s.price}
                    onChange={(e) => update(ci, si, { price: Number(e.target.value) })}
                    className="w-24 rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-gold"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={() => {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(cats));
            setSaved(true);
          }}
          className="rounded-sm bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-gold-soft"
        >
          Salvar alterações
        </button>
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem(STORAGE_KEY);
            setCats(SERVICE_CATEGORIES);
            setSaved(false);
          }}
          className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-gold"
        >
          Restaurar padrão
        </button>
        {saved && <span className="text-xs text-gold">Salvo</span>}
      </div>
    </main>
  );
}
