import type { Metadata } from "next";
import KevinSagnierPage from "@/case-studies/kevin-sagnier/page";

export const metadata: Metadata = {
  title: "Étude de cas Kevin Sagnier · CopyLinker",
  description: "Comment Kevin Sagnier a transformé sa présence LinkedIn de 2 500 à 12 000 abonnés et de 5 000 à 150 000 impressions mensuelles grâce à une stratégie de contenu avec CopyLinker.",
  openGraph: {
    title: "De 2 500 à 12 000 abonnés LinkedIn, Kevin Sagnier",
    description: "Étude de cas CopyLinker × Kevin Sagnier",
  },
};

export default function Page() {
  return <KevinSagnierPage />;
}
