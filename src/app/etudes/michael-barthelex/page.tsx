import type { Metadata } from "next";
import MichaelBarthelexPage from "@/case-studies/michael-barthelex/page";

export const metadata: Metadata = {
  title: "Étude de cas Michaël Barthelex · CopyLinker",
  description: "Comment Michaël Barthelex est passé de 500 à 4 000 abonnés et signe 5 à 10 dirigeants par mois grâce au dispositif full-funnel CopyLinker (contenu + webinaire + setting).",
  openGraph: {
    title: "De 500 à 4 000 abonnés — Michaël Barthelex, Cost Killer",
    description: "Étude de cas CopyLinker × Michaël Barthelex",
  },
};

export default function Page() {
  return <MichaelBarthelexPage />;
}
