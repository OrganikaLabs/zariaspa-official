import { ArrowRight, Pill, Microscope, ShieldCheck, Thermometer } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function ValuePropGrid() {
  const { t } = useTranslation();

  const PROPS = [
    {
      key: "pharma",
      icon: <Pill className="h-6 w-6" />,
      to: "/solutions/pharma",
    },
    {
      key: "healthtech",
      icon: <Microscope className="h-6 w-6" />,
      to: "/solutions/healthtech",
    },
    {
      key: "compliance",
      icon: <ShieldCheck className="h-6 w-6" />,
      to: "/quality",
    },
    {
      key: "standards",
      icon: <Thermometer className="h-6 w-6" />,
      to: "/quality",
    },
  ];

  return (
    <section className="bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROPS.map((p, i) => (
            <Reveal key={p.key} delay={i * 200}>
              <Link
                to={p.to}
                className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-terracotta/50 hover:shadow-[0_20px_50px_-20px_oklch(0.58_0.16_35/0.35)] md:p-12"
              >
                <div
                  className="pointer-events-none absolute inset-0 map-grid opacity-40"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 animate-grid-beams opacity-60"
                  aria-hidden="true"
                />

                <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-terracotta shadow-sm transition-transform duration-500 group-hover:scale-110">
                  {p.icon}
                </div>

                <p className="relative z-10 mb-4 text-[11px] font-bold tracking-[0.25em] text-terracotta">
                  {t(`home.valueProps.${p.key}.title`)}
                </p>

                <h3 className="relative z-10 font-serif-display text-4xl font-medium leading-tight text-ink md:text-5xl">
                  {t(`home.valueProps.${p.key}.headline`)}
                </h3>

                <p className="relative z-10 mt-6 text-lg leading-relaxed text-ink-soft">
                  {t(`home.valueProps.${p.key}.body`)}
                </p>

                <div className="relative z-10 mt-auto pt-10">
                  <div className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-ink transition-all group-hover:gap-5 group-hover:text-terracotta">
                    {t(`home.valueProps.${p.key}.cta`)}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-terracotta/5 blur-3xl" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
