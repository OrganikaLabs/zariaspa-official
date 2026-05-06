import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Monitor, Activity, Boxes, Database, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { TrustMarquee } from "@/components/TrustMarquee";
import { useHtmlLangDir } from "@/i18n/useHtmlLangDir";
import img1 from "@/assets/pages/healthtech-1.jpg";

export const Route = createFileRoute("/solutions/healthtech")({
  head: () => ({
    meta: [
      { title: "HealthTech — Zariaspa" },
      {
        name: "description",
        content:
          "Turnkey provisioning of capital diagnostic equipment and integrated POCT ecosystems.",
      },
    ],
  }),
  component: HealthTech,
});

function HealthTech() {
  useHtmlLangDir();
  const { t } = useTranslation();

  const modalities = [
    { key: "imaging", icon: <Monitor className="h-6 w-6" /> },
    { key: "ivd", icon: <Activity className="h-6 w-6" /> },
    { key: "surgical", icon: <Boxes className="h-6 w-6" /> },
    { key: "his", icon: <Database className="h-6 w-6" /> },
  ];

  return (
    <main className="min-h-screen bg-parchment text-ink">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src={img1}
          alt="Modern HealthTech"
          className="h-full w-full object-cover brightness-[0.4] grayscale"
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
                {t("nav.healthtech")}
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
                  {t("pages.healthtech.headline")}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-8 text-lg leading-relaxed text-ink-soft md:text-xl">
                  {t("pages.healthtech.body")}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Marquee */}
      <TrustMarquee title={t("pages.healthtech.marquee")} />

      {/* Modalities Grid */}
      <section className="bg-ink py-24 text-parchment md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {modalities.map((mod, i) => (
              <Reveal key={mod.key} delay={i * 100}>
                <div className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white/5 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-saffron/50 hover:shadow-[0_20px_50px_-20px_rgba(234,179,8,0.2)] md:p-10">
                  <div
                    className="pointer-events-none absolute inset-0 map-grid opacity-20"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 animate-grid-beams opacity-30"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-parchment/10 text-saffron shadow-sm transition-transform duration-500 group-hover:scale-110">
                    {mod.icon}
                  </div>
                  <h3 className="relative z-10 font-serif-display text-2xl font-medium text-parchment">
                    {t(`pages.healthtech.modalities.${mod.key}.title`)}
                  </h3>
                  <p className="relative z-10 mt-4 text-base leading-relaxed text-parchment/60">
                    {t(`pages.healthtech.modalities.${mod.key}.body`)}
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
