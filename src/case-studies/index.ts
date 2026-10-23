export interface CaseStudySummary {
  slug: string;
  client: string;
  company: string;
  photo: string;
  headline: string;
  excerpt: string;
}

export const caseStudies: CaseStudySummary[] = [
  {
    slug: "frederic-moreau",
    client: "Frédéric Moreau",
    company: "ImmoPourExpat",
    photo: "/etudes/frederic-moreau/frederic.webp",
    headline: "De 2 487 à 9 006 abonnés LinkedIn en 18 mois",
    excerpt: "LinkedIn devenu amplificateur de notoriété : 2 à 5 signatures par mois, M6, La Martingale et Le Monde.",
  },
  {
    slug: "kevin-sagnier",
    client: "Kevin Sagnier",
    company: "Entrepreneur & créateur de contenu",
    photo: "/etudes/kevin-sagnier/kevin-sagnier.webp",
    headline: "De 2 500 à 12 000 abonnés LinkedIn",
    excerpt: "Et de 5 000 à 150 000 impressions mensuelles grâce à une stratégie de contenu.",
  },
  {
    slug: "mehdi-saoud",
    client: "Mehdi Saoud",
    company: "LiveMentor · startDAF",
    photo: "/etudes/mehdi-saoud/mehdi-saoud.webp",
    headline: "Une stratégie LinkedIn différenciante pour un DAF",
    excerpt: "Des concepts récurrents et une direction artistique signature.",
  },
  {
    slug: "michael-barthelex",
    client: "Michaël Barthelex",
    company: "Le Cost Killer",
    photo: "/etudes/michael-barthelex/michael.webp",
    headline: "De 500 à 4 000 abonnés, 5 à 10 dirigeants signés par mois",
    excerpt: "Un dispositif full-funnel : contenu, webinaire et setting.",
  },
  {
    slug: "nicolas-markowicz",
    client: "Nicolas Markowicz",
    company: "LGM Immobilier",
    photo: "/etudes/nicolas-markowicz/nicolas.webp",
    headline: "De 5 000 à 13 000 abonnés LinkedIn en 12 mois",
    excerpt: "LinkedIn relancé comme canal de recrutement de mandataires.",
  },
  {
    slug: "quentin-st-guilhem",
    client: "Quentin Saint Guilhem",
    company: "Squarimo",
    photo: "/etudes/quentin-st-guilhem/quentin.webp",
    headline: "LinkedIn, premier canal d'acquisition de Squarimo",
    excerpt: "D'expert discret à autorité de la vente interactive immobilière auprès des directeurs d'agence.",
  },
  {
    slug: "tatiana-garcia",
    client: "Tatiana Garcia",
    company: "Link Invests",
    photo: "/etudes/tatiana-garcia/tatiana.webp",
    headline: "De 1 200 à 8 700 abonnés LinkedIn en 10 mois",
    excerpt: "Un flux régulier de marchands de biens entrants sur le Mastermind et la Franchise.",
  },
  {
    slug: "victor-laschon",
    client: "Victor Laschon",
    company: "Datayoyo",
    photo: "/etudes/victor-laschon/victor.webp",
    headline: "De 0 à 2 à 5 RDV qualifiés par semaine",
    excerpt: "Avec seulement 2 posts LinkedIn par semaine.",
  },
];
