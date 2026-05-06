import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Compass, Target, Eye } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { useHtmlLangDir } from "@/i18n/useHtmlLangDir";
import img1 from "@/assets/pages/about-1.jpg";
import heritageFortress from "@/assets/heritage-fortress.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Zariaspa" },
      {
        name: "description",
        content:
          "A legacy of global connection. Carrying the Silk Road heritage into modern healthcare.",
      },
    ],
  }),
  component: About,
});

function About() {
  useHtmlLangDir();
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-parchment text-ink">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <img
          src={img1}
          alt="Silk Road Heritage"
          className="h-full w-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-parchment via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <Reveal>
              <h1 className="font-serif-display tracking-display text-5xl font-medium text-ink md:text-7xl lg:text-9xl">
                {t("pages.about.headline")}
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Heritage Narrative Split-Screen */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-terracotta" />
                  <span className="text-xs font-bold tracking-[0.3em] text-terracotta">
                    {t("pages.about.heritage.title")}
                  </span>
                </div>
                <div className="prose prose-lg prose-ink-soft">
                  <p className="text-2xl leading-relaxed text-ink font-serif-display italic">
                    {t("pages.about.heritage.body")}
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="order-1 lg:order-2 lg:sticky lg:top-32 lg:h-fit">
              <Reveal delay={200}>
                <div className="group relative isolate aspect-square overflow-hidden rounded-2xl bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_oklch(0.58_0.16_35/0.35)]">
                  <div
                    className="pointer-events-none absolute inset-0 map-grid opacity-40"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 animate-grid-beams opacity-60"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                    <img
                      src={heritageFortress}
                      alt="Historic Bala Hissar Fortress"
                      className="h-full w-full object-cover opacity-50 transition-opacity duration-500 group-hover:opacity-75"
                      style={{ objectPosition: "center 60%" }}
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Compass className="h-20 w-20 text-terracotta/10 animate-spin-slow transition-opacity duration-500 group-hover:opacity-5" />
                  </div>

                  <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-terracotta/5 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-ink py-24 text-parchment md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <Reveal>
              <div className="flex flex-col gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-saffron text-ink">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="font-serif-display text-4xl font-medium text-parchment">
                  {t("pages.about.mission.title")}
                </h2>
                <p className="text-lg leading-relaxed text-parchment/70">
                  {t("pages.about.mission.body")}
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-col gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-saffron text-ink">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="font-serif-display text-4xl font-medium text-parchment">
                  {t("pages.about.vision.title")}
                </h2>
                <p className="text-lg leading-relaxed text-parchment/70">
                  {t("pages.about.vision.body")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
