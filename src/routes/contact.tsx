import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { useHtmlLangDir } from "@/i18n/useHtmlLangDir";
import { useTranslation } from "react-i18next";
import "@/i18n";
import img1 from "@/assets/pages/contact-1.jpg";

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
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src={img1}
          alt="Contact Zariaspa"
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
            <Reveal delay={100}>
              <h1 className="font-serif-display tracking-display mt-8 text-5xl font-medium text-parchment md:text-7xl lg:text-8xl">
                {t("pages.contact.headline")}
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative bg-parchment pb-24 md:pb-32">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pt-10 pb-0 md:px-10 lg:grid-cols-12">
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
              <div className="flex-1 overflow-hidden rounded-3xl border border-hairline relative">
                <img
                  src="/src/assets/kabul-map.png"
                  alt="Map of Kabul"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 pointer-events-none bg-ink/10 mix-blend-multiply" />
                <div className="absolute bottom-6 left-6 flex flex-col items-start">
                  <div className="glass-dark rounded-full px-4 py-2 text-[10px] font-bold tracking-widest text-parchment uppercase">
                    Wazir Akbar Khan, Kabul
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
