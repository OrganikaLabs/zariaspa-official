import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Pill, Thermometer, ShieldCheck, HeartPulse } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { useHtmlLangDir } from "@/i18n/useHtmlLangDir";
import img1 from "@/assets/pages/pharma-1.jpg";

export const Route = createFileRoute("/solutions/pharma")({
  head: () => ({
    meta: [
      { title: "Pharmaceuticals — Zariaspa" },
      {
        name: "description",
        content:
          "Direct-to-manufacturer procurement of essential medicines and critical care therapeutics.",
      },
    ],
  }),
  component: Pharmaceuticals,
});

function Pharmaceuticals() {
  useHtmlLangDir();
  const { t } = useTranslation();

  const areas = [
    { key: "essential", icon: <Pill className="h-6 w-6" /> },
    { key: "biologics", icon: <Thermometer className="h-6 w-6" /> },
    { key: "specialty", icon: <ShieldCheck className="h-6 w-6" /> },
    { key: "maternal", icon: <HeartPulse className="h-6 w-6" /> },
  ];

  return (
    <main className="min-h-screen bg-parchment text-ink">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src={img1}
          alt="Pharmaceutical Production"
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
                Back · Zariaspa
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-serif-display tracking-display mt-8 text-5xl font-medium text-parchment md:text-7xl lg:text-8xl">
                {t("nav.pharma")}
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <h2 className="font-serif-display text-4xl font-medium leading-tight text-ink md:text-5xl lg:text-6xl">
                  {t("pages.pharma.headline")}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-8 text-lg leading-relaxed text-ink-soft md:text-xl">
                  {t("pages.pharma.body")}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-ink py-12 text-parchment">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-[11px] font-bold tracking-[0.3em] text-saffron">
              {t("pages.pharma.badge")}
            </p>
            <div className="h-px flex-1 bg-parchment/10 hidden md:block mx-8" />
            <div className="flex gap-8">
              <ShieldCheck className="h-8 w-8 text-saffron opacity-50" />
              <Pill className="h-8 w-8 text-saffron opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {areas.map((area, i) => (
              <Reveal key={area.key} delay={i * 100}>
                <div className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-card p-10 transition-all duration-500 hover:-translate-y-1 hover:border-terracotta/50 hover:shadow-[0_20px_50px_-20px_oklch(0.58_0.16_35/0.35)] md:p-12">
                  <div
                    className="pointer-events-none absolute inset-0 map-grid opacity-40"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 animate-grid-beams opacity-60"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-terracotta shadow-sm transition-transform duration-500 group-hover:scale-110">
                    {area.icon}
                  </div>
                  <h3 className="relative z-10 font-serif-display text-3xl font-medium text-ink md:text-4xl">
                    {t(`pages.pharma.areas.${area.key}.title`)}
                  </h3>
                  <p className="relative z-10 mt-6 text-lg leading-relaxed text-ink-soft">
                    {t(`pages.pharma.areas.${area.key}.body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
