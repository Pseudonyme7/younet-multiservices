import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopWrapper from "../components/ScrollToTopWrapper";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Younet Multiservices | Services de rénovation et dépannage à Marseille",
  description: "Younet Multiservices propose des services de rénovation intérieure, plomberie, électricité, maçonnerie, peinture et nettoyage industriel à Marseille et ses environs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body
        style={{
          fontFamily: inter.style.fontFamily,
          backgroundColor: "#F9F5ED",
          color: "#4A4A4A",
          margin: 0
        } as React.CSSProperties}
      >
        <ScrollToTopWrapper>
          <Navbar />
          {children}
          <Footer />
        </ScrollToTopWrapper>
      </body>
    </html>
  );
}
