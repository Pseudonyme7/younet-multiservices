import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Younet Multiservices | Accueil",
  description: "Services de rénovation intérieure, plomberie, électricité, maçonnerie, peinture et nettoyage industriel à Marseille.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="accueil" className="section" style={{ backgroundColor: "#224F70", color: "white" }}>
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h1 className="mb-6 font-heading">
              Younet Multiservices
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Services de rénovation intérieure, plomberie, électricité, maçonnerie, peinture et nettoyage industriel à Marseille et ses environs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-accent">Obtenir un devis gratuit</button>
              <button className="btn-outline" style={{ borderColor: "white", color: "white" }}>
                Découvrir nos services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="a-propos" className="section" style={{ backgroundColor: "#F9F5ED" }}>
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-primary mb-6 font-heading">
              Qui sommes-nous
            </h2>
            <p className="mb-8 max-w-3xl mx-auto">
              Younet Multiservices est votre partenaire de confiance pour tous vos projets de rénovation et dépannage à Marseille et ses environs. Avec une équipe expérimentée et passionnée, nous vous offrons des services de qualité adaptés à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Additional sections will be implemented in Phase 3 */}
      <section id="services" className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-primary mb-6 font-heading">
              Nos Services
            </h2>
            <p className="mb-8 max-w-3xl mx-auto">
              Nous proposons une large gamme de services pour répondre à tous vos besoins de rénovation et dépannage.
            </p>
          </div>
        </div>
      </section>

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
