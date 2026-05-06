import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValuePropGrid } from "@/components/ValuePropGrid";
import { TrustMarquee } from "@/components/TrustMarquee";
import { Footer } from "@/components/Footer";
import "@/i18n";
import { useHtmlLangDir } from "@/i18n/useHtmlLangDir";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zariaspa — Advancing Innovative Healthcare" },
      {
        name: "description",
        content:
          "Zariaspa Limited traverses the Modern Silk Road to supply the region with Tier-1 pharmaceuticals, in-vitro diagnostics, and cutting-edge healthtech.",
      },
      { property: "og:title", content: "Zariaspa — Advancing Innovative Healthcare" },
      {
        property: "og:description",
        content:
          "Delivered via the Modern Silk Road. Tier-1 Global OEMs, GDP-Compliant Custody, and End-to-End Pharmacovigilance.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useHtmlLangDir();
  return (
    <main className="min-h-screen bg-parchment text-ink">
      <Navbar />
      <Hero />
      <ValuePropGrid />
      <TrustMarquee />
      <Footer />
    </main>
  );
}
