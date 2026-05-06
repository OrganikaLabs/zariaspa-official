import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ShieldCheck, Thermometer, FileText, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { TrustMarquee } from "@/components/TrustMarquee";
import { useHtmlLangDir } from "@/i18n/useHtmlLangDir";
import img1 from "@/assets/pages/standards-1.jpg";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality — Zariaspa" },
      {
        name: "description",
        content:
          "Absolute Integrity. End-to-End Traceability. ISO 13485 and GDP compliant operations.",
      },
    ],
  }),
  component: Quality,
});

function Quality() {
  useHtmlLangDir();
  const { t } = useTranslation();

  const pillars = [
    { key: "audit", icon: <FileText className="h-6 w-6" /> },
    { key: "coldchain", icon: <Thermometer className="h-6 w-6" /> },
    { key: "regulatory", icon: <CheckCircle2 className="h-6 w-6" /> },
    { key: "pharmacovigilance", icon: <ShieldCheck className="h-6 w-6" /> },
  ];

  return (
    <main className="min-h-screen bg-parchment text-ink">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src={img1}
          alt="Quality Standards"
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
                {t("nav.quality")}
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
                  {t("pages.quality.headline")}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-8 text-lg leading-relaxed text-ink-soft md:text-xl">
                  {t("pages.quality.body")}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Marquee */}
      <TrustMarquee title="Compliance Framework · WHO · ISO 13485 · GDP · FDA · MoPH" />

      {/* Pillars Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.key} delay={i * 100}>
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
                    {pillar.icon}
                  </div>
                  <h3 className="relative z-10 font-serif-display text-3xl font-medium text-ink md:text-4xl">
                    {t(`pages.quality.pillars.${pillar.key}.title`)}
                  </h3>
                  <p className="relative z-10 mt-6 text-lg leading-relaxed text-ink-soft">
                    {t(`pages.quality.pillars.${pillar.key}.body`)}
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
