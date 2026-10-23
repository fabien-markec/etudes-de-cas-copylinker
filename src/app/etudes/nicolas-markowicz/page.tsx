import type { Metadata } from "next";
import NicolasMarkowiczPage from "@/case-studies/nicolas-markowicz/page";

export const metadata: Metadata = {
  title: "Étude de cas Nicolas Markowicz · LGM Immobilier × CopyLinker",
  description: "Comment Nicolas Markowicz (fondateur LGM Immobilier) a relancé LinkedIn comme canal de recrutement de mandataires, en passant de 5 000 à 13 000 abonnés en 12 mois grâce à une stratégie de notoriété.",
  openGraph: {
    title: "De 5 000 à 13 000 abonnés LinkedIn en 12 mois, Nicolas Markowicz (LGM Immobilier)",
    description: "Étude de cas CopyLinker × Nicolas Markowicz · LGM Immobilier",
  },
};

export default function Page() {
  return <NicolasMarkowiczPage />;
}
