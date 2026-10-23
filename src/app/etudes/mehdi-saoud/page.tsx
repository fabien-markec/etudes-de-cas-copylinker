import type { Metadata } from "next";
import MehdiSaoudPage from "@/case-studies/mehdi-saoud/page";

export const metadata: Metadata = {
  title: "Étude de cas - Mehdi Saoud × CopyLinker",
  description: "Comment CopyLinker a accompagné Mehdi Saoud (DAF LiveMentor, cofondateur startDAF) à structurer une stratégie LinkedIn différenciante avec des concepts récurrents et une direction artistique signature.",
  openGraph: {
    title: "Étude de cas - Mehdi Saoud × CopyLinker",
    description: "Accompagnement stratégique LinkedIn : concepts récurrents, direction artistique style GTA, double casquette LiveMentor + startDAF.",
  },
};

export default function Page() {
  return <MehdiSaoudPage />;
}
