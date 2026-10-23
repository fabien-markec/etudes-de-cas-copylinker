import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Études de cas · CopyLinker",
  description:
    "Les résultats LinkedIn de nos clients : abonnés, impressions, rendez-vous et signatures, étude par étude.",
  icons: { icon: "/copylinker.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
