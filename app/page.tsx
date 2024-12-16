import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description: "Découvrez comment Clicketpaf révolutionne le paiement en ligne",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"></div>
  );
}
