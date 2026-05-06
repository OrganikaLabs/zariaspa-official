import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { useHtmlLangDir } from "@/i18n/useHtmlLangDir";
import { useTranslation } from "react-i18next";
import "@/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Zariaspa" },
      {
        name: "description",
        content:
          "Partner with Zariaspa. Fully compliant, ISO-certified healthcare entry into the region.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useHtmlLangDir();
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-parchment text-ink">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32">
        <div className="absolute inset-0 paper-texture opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 text-center">
          <Reveal>
            <h1 className="font-serif-display tracking-display text-balance text-6xl font-medium leading-[1.02] md:text-8xl">
              {t("pages.contact.headline")}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              {t("pages.contact.body")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative bg-parchment pb-24 md:pb-32">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-3xl border border-hairline bg-white p-8 shadow-2xl md:p-12"
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold tracking-[0.2em] text-ink-soft">
                      {t("pages.contact.form.name")}
                    </label>
                    <input
                      required
                      type="text"
                      className="rounded-xl border border-hairline bg-parchment/50 px-4 py-3 text-base text-ink focus:border-terracotta focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold tracking-[0.2em] text-ink-soft">
                      {t("pages.contact.form.organization")}
                    </label>
                    <input
                      required
                      type="text"
                      className="rounded-xl border border-hairline bg-parchment/50 px-4 py-3 text-base text-ink focus:border-terracotta focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-[0.2em] text-ink-soft">
                    {t("pages.contact.form.inquiryType.label")}
                  </label>
                  <select
                    required
                    className="rounded-xl border border-hairline bg-parchment/50 px-4 py-3 text-base text-ink focus:border-terracotta focus:outline-none"
                  >
                    <option value="pharma">
                      {t("pages.contact.form.inquiryType.options.pharma")}
                    </option>
                    <option value="equipment">
                      {t("pages.contact.form.inquiryType.options.equipment")}
                    </option>
                    <option value="partnership">
                      {t("pages.contact.form.inquiryType.options.partnership")}
                    </option>
                    <option value="general">
                      {t("pages.contact.form.inquiryType.options.general")}
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-[0.2em] text-ink-soft">
                    {t("pages.contact.form.message")}
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="resize-none rounded-xl border border-hairline bg-parchment/50 px-4 py-3 text-base text-ink focus:border-terracotta focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group mt-10 w-full inline-flex items-center justify-center gap-3 rounded-full bg-saffron py-4 text-sm font-semibold text-ink transition-all terracotta-glow"
              >
                {submitted ? "Inquiry Sent" : t("pages.contact.form.submit")}
                <ArrowRight className="cta-arrow h-4 w-4" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="h-full flex flex-col gap-8">
              <div className="flex-1 overflow-hidden rounded-3xl border border-hairline bg-ink/5 relative grayscale-[0.5]">
                <div className="absolute inset-0 bg-map opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <MapPin className="h-10 w-10 text-terracotta animate-bounce" />
                    <div className="mt-2 glass-dark rounded-full px-4 py-2 text-xs font-bold text-parchment">
                      Wazir Akbar Khan, Kabul
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-hairline bg-white/50 p-8">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-terracotta/5 text-terracotta">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-ink-soft">
                        Location
                      </p>
                      <p className="mt-1 text-sm text-ink leading-relaxed">
                        Street 15, Wazir Akbar Khan
                        <br />
                        Kabul, Afghanistan
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-terracotta/5 text-terracotta">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-ink-soft">Email</p>
                      <p className="mt-1 text-sm text-ink">desk@zariaspa.com</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-terracotta/5 text-terracotta">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-ink-soft">Desk</p>
                      <p className="mt-1 text-sm text-ink">+93 (0) 79 123 4567</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
