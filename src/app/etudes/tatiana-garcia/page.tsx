import type { Metadata } from "next";
import TatianaGarciaPage from "@/case-studies/tatiana-garcia/page";

export const metadata: Metadata = {
  title: "Étude de cas Tatiana Garcia · Link Invests × CopyLinker",
  description: "Comment Tatiana Garcia (Link Invests) est passée de 1 200 à 8 700 abonnés LinkedIn en 10 mois, avec un flux régulier de marchands de biens entrants sur le Mastermind et la Franchise.",
  openGraph: {
    title: "De 1 200 à 8 700 abonnés LinkedIn en 10 mois, Tatiana Garcia (Link Invests)",
    description: "Étude de cas CopyLinker × Tatiana Garcia · Link Invests",
  },
};

export default function Page() {
  return <TatianaGarciaPage />;
}
