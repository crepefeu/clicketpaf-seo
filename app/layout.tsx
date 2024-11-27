import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import Footer from "./components/Footer";
import Header from "./components/Header";
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clicketpaf',
  description: 'Clicketpaf le paiement simplifié',
  openGraph: {
    title: 'Clicketpaf',
    description: 'Clicketpaf le paiement simplifié',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
