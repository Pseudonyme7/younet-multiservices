import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Younet Multiservices | Accueil",
  description: "Services de rénovation intérieure, plomberie, électricité, maçonnerie, peinture et nettoyage industriel à Marseille.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Features />

      {/* Placeholder sections - will be replaced in future phases */}
      <section id="realisations" className="section" style={{ backgroundColor: "#F9F5ED" }}>
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-primary mb-6 font-heading">
              Nos Réalisations
            </h2>
            <p className="mb-8 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos récentes réalisations.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-primary mb-6 font-heading">
              Contactez-nous
            </h2>
            <p className="mb-8 max-w-3xl mx-auto">
              Vous avez un projet ou une question ? N'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
