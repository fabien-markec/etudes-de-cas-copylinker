import type { Metadata } from "next";
import VictorLaschonPage from "@/case-studies/victor-laschon/page";

export const metadata: Metadata = {
  title: "Étude de cas Victor Laschon · CopyLinker",
  description: "Comment Victor Laschon (Datayoyo) est passé de 0 à entre 2 et 5 RDV qualifiés par semaine avec seulement 2 posts LinkedIn hebdo, grâce à CopyLinker.",
  openGraph: {
    title: "De 0 à entre 2 et 5 RDV par semaine avec 2 posts LinkedIn",
    description: "Étude de cas CopyLinker × Victor Laschon (Datayoyo)",
  },
};

export default function Page() {
  return <VictorLaschonPage />;
}
