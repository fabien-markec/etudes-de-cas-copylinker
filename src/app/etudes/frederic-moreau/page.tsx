import type { Metadata } from "next";
import FredericMoreauPage from "@/case-studies/frederic-moreau/page";

export const metadata: Metadata = {
  title: "Étude de cas Frédéric Moreau · ImmoPourExpat × CopyLinker",
  description: "Comment Frédéric Moreau (ImmoPourExpat) est passé de 2 000 à plus de 9 000 abonnés LinkedIn en 18 mois, avec des passages sur M6, La Martingale, Le Monde et plusieurs JT à la clé.",
  openGraph: {
    title: "De 2k à 9k abonnés LinkedIn en 18 mois, Frédéric Moreau (ImmoPourExpat)",
    description: "Étude de cas CopyLinker × Frédéric Moreau · ImmoPourExpat",
  },
};

export default function Page() {
  return <FredericMoreauPage />;
}
