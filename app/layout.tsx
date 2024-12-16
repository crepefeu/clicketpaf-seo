import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://clicketpaf.fr"),
  title: {
    default: "Clicketpaf - Paiement Simplifié",
    template: "%s | Clicketpaf",
  },
  description:
    "Clicketpaf le paiement simplifié. Chaque transaction devient une formalité : vous cliquez, et… PAF, tout est réglé.",
  openGraph: {
    title: "Clicketpaf - Paiement Simplifié",
    description: "Clicketpaf le paiement simplifié",
    type: "website",
    locale: "fr_FR",
    siteName: "Clicketpaf",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Header />
        <div className="py-16 px-32 min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
