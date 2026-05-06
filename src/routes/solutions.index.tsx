import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Activity, Truck, Package, ShieldCheck, Thermometer, ArrowUpRight, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { useHtmlLangDir } from "@/i18n/useHtmlLangDir";
import "@/i18n";
import tankerShip from "@/assets/pages/tanker-ship.jpg";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions — Zariaspa Trading" },
      {
        name: "description",
        content:
          "Five pillars of healthcare logistics: medical equipment, pharmaceutical supply chain, healthtech, regulatory compliance, and cold-chain infrastructure.",
      },
    ],
  }),
  component: SolutionsIndex,
});

function SolutionsIndex() {
  useHtmlLangDir();
  const { t } = useTranslation();

  const items = [
    { to: "/solutions/imaging", icon: Activity, key: "imaging" },
    { to: "/solutions/pharma", icon: Truck, key: "pharma" },
    { to: "/solutions/healthtech", icon: Package, key: "healthtech" },
    { to: "/solutions/compliance", icon: ShieldCheck, key: "compliance" },
    { to: "/solutions/infrastructure", icon: Thermometer, key: "infra" },
  ] as const;

  return (
    <main className="min-h-screen bg-parchment text-ink">
      <Navbar />
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src={tankerShip}
          alt="Solutions Overview"
          className="h-full w-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-parchment via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <Reveal>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-parchment/80 transition-colors hover:text-saffron"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                {t("common.back")} · Zariaspa
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-10 flex items-center gap-3 text-[11px] font-medium tracking-[0.28em] text-saffron">
                <span className="route-dash h-px w-10 bg-saffron" />
                {t("bento.eyebrow")}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <h1 className="font-serif-display tracking-display mt-5 text-balance text-5xl font-medium leading-[1.02] text-parchment md:text-7xl lg:text-[88px]">
                {t("bento.headline1")}{" "}
                <span className="italic text-saffron">{t("bento.headline2")}</span>
              </h1>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-parchment/80 md:text-lg">
                {t("bento.intro")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative bg-parchment pb-28">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 md:grid-cols-2 md:px-10 lg:grid-cols-3">
          {items.map(({ to, icon: Icon, key }, i) => (
            <Reveal key={to} delay={i * 80}>
              <Link
                to={to}
                className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-terracotta/50 hover:shadow-[0_20px_50px_-20px_oklch(0.58_0.16_35/0.35)]"
              >
                <div className="pointer-events-none absolute inset-0 map-grid opacity-30" />
                <div className="pointer-events-none absolute inset-0 animate-grid-beams opacity-50" />
                <div className="pointer-events-none absolute -end-10 -top-10 h-40 w-40 rounded-full bg-terracotta/10 blur-2xl" />
                <div className="relative z-10 flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] text-terracotta">
                  <Icon className="h-3.5 w-3.5" />
                  {t(`bento.tiles.${key}.eyebrow`)}
                </div>
                <h2 className="font-serif-display relative z-10 mt-4 text-3xl font-medium leading-[1.1] tracking-tight text-ink">
                  {t(`bento.tiles.${key}.title`)}
                </h2>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-ink-soft">
                  {t(`bento.tiles.${key}.desc`)}
                </p>
                <div className="relative z-10 mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-ink/70 transition-colors group-hover:text-terracotta">
                  {t("bento.explore")}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
