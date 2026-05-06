import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";
import mapTexture from "@/assets/silkroad-map.png";

export function MapSection() {
  const { t } = useTranslation();
  return (
    <section className="relative isolate overflow-hidden bg-parchment py-24 md:py-32">
      <div className="absolute inset-0 paper-texture opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 map-grid opacity-20" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-xl">
              <p className="mb-4 flex items-center gap-3 text-[11px] font-medium tracking-[0.28em] text-terracotta">
                <span className="route-dash h-px w-10 bg-terracotta" />
                {t("home.map.headline")}
              </p>
              <h2 className="font-serif-display tracking-display text-balance text-4xl font-medium leading-[1.1] text-ink md:text-6xl">
                {t("home.map.headline")}
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-ink-soft">{t("home.map.body")}</p>
            </div>
          </Reveal>

          <Reveal
            delay={200}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-hairline shadow-2xl"
          >
            <img
              src={mapTexture}
              alt="Silk Road Map"
              className="h-full w-full object-cover grayscale opacity-80 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-terracotta/5 mix-blend-overlay" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
