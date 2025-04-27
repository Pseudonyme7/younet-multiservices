import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Younet Multiservices | Accueil",
  description: "Services de rénovation intérieure, plomberie, électricité, maçonnerie, peinture et nettoyage industriel à Marseille.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="section" style={{ backgroundColor: "#224F70", color: "white" }}>
        <div className="container-custom">
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "5rem 0",
            textAlign: "center"
          }}>
            <h1 style={{
              marginBottom: "1.5rem",
              fontFamily: "var(--poppins-font)"
            }}>
              Younet Multiservices
            </h1>
            <p style={{
              fontSize: "1.25rem",
              marginBottom: "2rem",
              maxWidth: "48rem",
              marginLeft: "auto",
              marginRight: "auto"
            }}>
              Services de rénovation intérieure, plomberie, électricité, maçonnerie, peinture et nettoyage industriel à Marseille et ses environs.
            </p>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              <button className="btn-accent">Obtenir un devis gratuit</button>
              <button className="btn-outline" style={{ borderColor: "white", color: "white" }}>
                Découvrir nos services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "#F9F5ED" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center" }}>
            <h2 style={{
              color: "#224F70",
              marginBottom: "1.5rem",
              fontFamily: "var(--poppins-font)"
            }}>
              Qui sommes-nous
            </h2>
            <p style={{
              marginBottom: "2rem",
              maxWidth: "48rem",
              marginLeft: "auto",
              marginRight: "auto"
            }}>
              Younet Multiservices est votre partenaire de confiance pour tous vos projets de rénovation et dépannage à Marseille et ses environs. Avec une équipe expérimentée et passionnée, nous vous offrons des services de qualité adaptés à vos besoins.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
