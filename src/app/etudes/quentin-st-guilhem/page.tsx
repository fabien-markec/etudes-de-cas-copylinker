import type { Metadata } from "next";
import QuentinStGuilhemPage from "@/case-studies/quentin-st-guilhem/page";

export const metadata: Metadata = {
  title: "Étude de cas Quentin Saint Guilhem · CopyLinker",
  description: "Comment Quentin Saint Guilhem (Squarimo) a fait de LinkedIn son premier canal d'acquisition auprès des directeurs d'agence immobilière, avec CopyLinker.",
  openGraph: {
    title: "De expert discret à autorité LinkedIn de la vente interactive immobilière",
    description: "Étude de cas CopyLinker × Quentin Saint Guilhem (Squarimo)",
  },
};

export default function Page() {
  return <QuentinStGuilhemPage />;
}
