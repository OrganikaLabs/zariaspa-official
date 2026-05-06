import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";
import silkroadMap from "@/assets/silkroad-map.png";
import { localizeDigits } from "@/i18n/digits";

export function Hero() {
  const { t, i18n } = useTranslation();
  const ld = (s: string) => localizeDigits(s, i18n.language);
  return (
    <section className="relative isolate overflow-hidden bg-parchment text-ink">
      <img
        src={silkroadMap}
        alt="Hand-illustrated map of the historic Silk Road trade routes from Persia through Kabul to Xi'an"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "45% 55%" }}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      {/* Readability overlay: warm parchment wash + bottom fade into page */}
      <div
        className="pointer-events-none absolute inset-0 bg-[var(--parchment)]/55 mix-blend-lighten"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--parchment)]/85 via-[var(--parchment)]/30 to-transparent rtl:bg-gradient-to-l"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[var(--parchment)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-20 pt-32 md:px-10 md:pt-40">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-3 self-start glass rounded-full px-3.5 py-1.5 text-[11px] font-medium tracking-[0.22em] text-ink">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-terracotta shadow-[0_0_8px_2px_hsl(var(--terracotta)/0.8)]" />
            </span>
            {t("hero.badge")}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-serif-display tracking-display text-balance text-[11vw] font-medium leading-[0.95] text-ink md:text-[80px] lg:text-[100px]">
            {t("hero.headline")}
            <span className="block italic text-terracotta" suppressHydrationWarning>
              {t("hero.badge")}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {t("hero.subheadline")}
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/solutions/pharma"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-saffron px-7 py-4 text-sm font-semibold tracking-wide text-ink transition-all terracotta-glow"
            >
              {t("hero.ctaPrimary")}
              <ArrowRight className="cta-arrow h-4 w-4" />
            </Link>
            <Link
              to="/solutions/healthtech"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-4 text-sm font-medium text-ink/85 transition-all hover:border-ink/50 hover:text-ink"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={560}>
          <dl className="mt-20 grid max-w-4xl grid-cols-2 gap-8 border-t border-ink/15 pt-8 md:grid-cols-4">
            {(t("hero.stats", { returnObjects: true }) as string[]).map((stat) => {
              const parts = stat.split(" ");
              const main = parts.slice(0, -2).join(" ") || parts[0];
              const rest = parts.slice(-2).join(" ") || "";
              return (
                <div key={stat} className="flex flex-col">
                  <dt className="font-serif-display text-4xl font-medium tracking-tight text-ink">
                    {main}
                  </dt>
                  <dd className="mt-1 text-[11px] font-bold tracking-[0.18em] text-ink-soft">
                    {rest}
                  </dd>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
