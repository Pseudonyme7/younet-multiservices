import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
    <html lang="fr">
      <body
        style={{
          fontFamily: inter.style.fontFamily,
          '--poppins-font': poppins.style.fontFamily,
          backgroundColor: "#F9F5ED",
          color: "#4A4A4A",
          margin: 0
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
