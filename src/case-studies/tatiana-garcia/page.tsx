"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Sparkles, CheckCircle2, Quote, Building2, GraduationCap, Network, Instagram, Landmark, Handshake, BookOpen } from "lucide-react";
import { Reveal } from "./components/Reveal";
import { TatianaGrowthChart } from "./components/TatianaGrowthChart";
import { PostCard } from "./components/PostCard";
const tatianaPhoto = "/etudes/tatiana-garcia/tatiana.webp";
const copylinkerLogo = "/etudes/tatiana-garcia/copylinker.webp";
const fabienPhoto = "/etudes/tatiana-garcia/fabien.webp";
const temoignageRecrutement = "/etudes/tatiana-garcia/temoignage-recrutement.webp";
const temoignageFranchise = "/etudes/tatiana-garcia/temoignage-franchise.webp";
const postMdbVsLocatif = "/etudes/tatiana-garcia/post-mdb-vs-locatif.webp";
const post5Freins = "/etudes/tatiana-garcia/post-5-freins.webp";
const postReseau = "/etudes/tatiana-garcia/post-reseau.webp";
const postChantier = "/etudes/tatiana-garcia/post-chantier.webp";
const postRefuse = "/etudes/tatiana-garcia/post-refuse.webp";
const postSignaux = "/etudes/tatiana-garcia/post-signaux.webp";
const postReve = "/etudes/tatiana-garcia/post-reve.webp";
const postCompromis = "/etudes/tatiana-garcia/post-compromis.webp";
const postDivision = "/etudes/tatiana-garcia/post-division.webp";


const CTA = "https://taap.it/lguFZ0Q";
const AUTHOR_NAME = "Tatiana Garcia";
const AUTHOR_ROLE =
  "CEO & co-fondatrice Link Invests · +200 marchands de biens accompagnés";

const POSTS = [
  {
    badge: "Pédagogie",
    title: "Voici une stratégie immobilière que très peu de gens utilisent",
    excerpt:
      "Visuel avant/après d'une opération de marchand de biens : comment on transforme un bien décoté en une marge à 6 chiffres en quelques mois. Étape par étape.",
    impressions: 72400,
    reactions: 1180,
    comments: 174,
    url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_voici-une-strat%C3%A9gie-immobili%C3%A8re-que-tr%C3%A8s-activity-7337003090752991232-d1pt",
  },
  {
    badge: "Viral",
    title: "Selon toi, il est plus avantageux de se lancer comme médecin ou marchand de biens ?",
    excerpt:
      "Salaire médecin vs salaire marchand de biens : le calcul que personne n'ose poser publiquement. Et pourtant les chiffres parlent d'eux-mêmes.",
    impressions: 81500,
    reactions: 1320,
    comments: 218,
    url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_selon-toi-il-est-plus-avantageux-de-se-lancer-activity-7371792273958944769-knmA",
  },
  {
    badge: "Storytelling",
    title: "Lorsque j'étais infirmière, je travaillais 60 h par semaine",
    excerpt:
      "Gardes de nuit, week-ends, salaire plafonné. Voici comment je suis passée d'infirmière épuisée à marchande de biens à temps plein, et ce que ça a changé dans ma vie.",
    impressions: 77800,
    reactions: 1480,
    comments: 224,
    url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_lorsque-j%C3%A9tais-infirmi%C3%A8re-je-travaillais-activity-7362007819182645249-kJKy",
  },
  {
    badge: "Viral",
    title: "Le salaire médian en France est de 26 196 €. Une seule opération MDB peut faire +5×.",
    excerpt:
      "Comparer un CDI au métier de marchand de biens, ce n'est pas honnête : ce n'est pas le même risque. Mais quand on remet les chiffres à leur place, le débat n'existe plus.",
    impressions: 74200,
    reactions: 1280,
    comments: 208,
    url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_le-salaire-m%C3%A9dian-en-france-est-de-26-196-activity-7390327070704439296-_QHz",
  },
  {
    badge: "Opinion",
    title: "J'en ai marre de ceux qui se prennent pour des marchands de biens après 2 vidéos YouTube",
    excerpt:
      "Le métier est sérieux, réglementé, risqué. Ce n'est pas un side-project ni un truc à tester « pour voir ». Petit recadrage pour les débutants pressés.",
    impressions: 69300,
    reactions: 1160,
    comments: 248,
    url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_jen-ai-marre-de-ceux-qui-se-prennent-pour-activity-7343163700377206784-zUrg",
  },
  {
    badge: "Storytelling",
    title: "J'ai passé des nuits blanches, j'ai bossé les week-ends. Aujourd'hui on me dit : « tu as de la chance »",
    excerpt:
      "J'ai sacrifié ma vie sociale, mes vacances, mes soirées. Et maintenant on appelle ça de la chance. Petit rappel à toutes celles qui n'osent pas se lancer.",
    impressions: 68400,
    reactions: 1240,
    comments: 196,
    url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_jai-pass%C3%A9-des-nuits-blanches-jai-boss%C3%A9-activity-7390689351099187200-9x2b",
  },
  {
    badge: "Opinion",
    title: "Quand l'agent immobilier devient ton principal obstacle",
    excerpt:
      "On t'a vendu l'agent immo comme un partenaire. La réalité : pour un marchand de biens, c'est souvent le premier frein. Voici pourquoi, et comment je contourne le problème.",
    impressions: 58700,
    reactions: 920,
    comments: 142,
    url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_quand-lagent-immobilier-devient-ton-principal-activity-7332644202331201538-dRrK",
  },
  {
    badge: "Pédagogie",
    title: "Voici exactement ce qu'un marchand de biens débutant doit faire pour générer une marge à 6 chiffres",
    excerpt:
      "La méthode, étape par étape : sourcing, négociation, pré-commercialisation, montage bancaire. Sans apport, sans réseau, sans expérience préalable.",
    impressions: 65200,
    reactions: 1020,
    comments: 162,
    url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_voici-exactement-ce-quun-marchand-de-biens-activity-7368168376684138496-Vlmg",
  },
];

function BrandBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md bg-foreground px-2 py-0.5 text-[11px] font-semibold tracking-tight text-background ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-linkedin" />
      Link Invests
    </span>
  );
}

export default function TatianaGarciaPage() {
  return (
    <main className="bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src={copylinkerLogo} alt="CopyLinker" className="h-7 w-7 rounded-md object-cover" />
            <span className="font-semibold tracking-tight">CopyLinker</span>
            <span className="ml-2 text-xs text-muted-foreground hidden sm:inline">· Étude de cas</span>
          </Link>
          <a
            href={CTA}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
          >
            Échanger <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pt-16 pb-16 md:pt-24">
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border bg-surface px-3 py-1 text-xs text-muted-foreground">
            <BrandBadge />
            Étude de cas · 10 mois d'accompagnement LinkedIn
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Comment Tatiana Garcia est passée de{" "}
            <span className="text-muted-foreground">1 200</span> à{" "}
            <span className="text-linkedin">8 700 abonnés</span> LinkedIn en{" "}
            <span className="text-linkedin">10 mois</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tatiana avait déjà tout : un parcours de reconversion fort (infirmière → marchande
            de biens), une méthode éprouvée et une franchise en plein lancement. Il manquait un
            canal capable de convertir cette expertise en flux entrant de candidats Mastermind
            et Franchise. En 10 mois, LinkedIn est devenu ce canal. Et depuis 3 mois, on a
            également lancé Instagram pour étendre la portée de sa parole.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex items-center gap-3 rounded-full border bg-card pl-2 pr-5 py-2 shadow-[var(--shadow-soft)]">
              <img src={tatianaPhoto} alt={AUTHOR_NAME} className="h-10 w-10 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm font-semibold">{AUTHOR_NAME}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <BrandBadge />
                  CEO Link Invests
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a
              href={CTA}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-brand-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
            >
              Échanger sur votre projet <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* POSTS MARQUEE */}
      <section className="py-10 border-t bg-surface/40">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max gap-5 animate-marquee">
            {[
              ...[postMdbVsLocatif, post5Freins, postReseau, postChantier, postRefuse, postSignaux, postReve, postCompromis, postDivision],
              ...[postMdbVsLocatif, post5Freins, postReseau, postChantier, postRefuse, postSignaux, postReve, postCompromis, postDivision],
            ].map((src, i) => (
              <div key={i} className="w-[300px] shrink-0 rounded-2xl border bg-card p-2 shadow-[var(--shadow-soft)] overflow-hidden">
                <img src={src} alt="Post LinkedIn Tatiana Garcia" className="w-full h-auto rounded-xl" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEXTE */}
      <section className="px-6 py-16 border-t bg-surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Contexte</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Une méthode terrain, un réseau qui scale, mais une voix encore sous-exploitée
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-muted-foreground">
            <Reveal delay={50}>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Ce que fait Link Invests</p>
                <p className="mt-3 text-foreground">
                  Link Invests est le premier <strong>réseau de franchise</strong> dédié aux
                  Marchands de Biens en France, pas une formation. Cadre juridique clair,
                  process opérationnels validés, outils exclusifs (sourcing off-market,
                  faisabilité, estimation), solutions de financement adaptées au métier,
                  et un réseau national d'opérateurs, d'experts (notaires, fiscalistes,
                  urbanistes, artisans) et de franchisés actifs.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Chiffres officiels (01/01/2026) : <strong>+100 K€ de marge moyenne par
                  opération</strong>, <strong>+20% de rentabilité moyenne</strong>,{" "}
                  <strong>+350 marchands de biens & franchisés accompagnés</strong>.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p>
                Ancienne infirmière, Tatiana a quitté le salariat en 2019 pour vivre de ses
                opérations immobilières. Depuis, elle a accompagné plus de 350 marchands de biens
                & franchisés et structuré un réseau national exigeant. Sur LinkedIn pourtant, sa parole restait
                confidentielle : 1 200 abonnés, peu de contenus, aucun système éditorial.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Le défi : transformer une expertise très opérationnelle (montages sans apport,
                pré-commercialisation, négociation bancaire, PLU, fiscalité) en contenus simples
                et engageants, capables d'alimenter le pipeline de <strong>candidatures
                franchise</strong>, sachant que l'accès au réseau est volontairement sélectif
                (sur dossier, avec DIP réglementaire) et qu'il faut donc des candidats déjà
                qualifiés et alignés sur les valeurs Link Invests.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KPI */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Résultats · 10 mois</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              10 mois de collaboration
            </h2>
          </Reveal>
          <div className="mt-12 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-4 animate-marquee">
              {[
                ...[
                  { icon: Users, label: "Abonnés LinkedIn", value: "8 700" },
                  { icon: TrendingUp, label: "Nouveaux abonnés en 10 mois", value: "+7 500" },
                  { icon: Sparkles, label: "Candidatures Mastermind / mois", value: "+25" },
                  { icon: Building2, label: "MDB & franchisés accompagnés", value: "+350" },
                  { icon: Instagram, label: "Abonnés Instagram (3 mois)", value: "5 000" },
                ],
                ...[
                  { icon: Users, label: "Abonnés LinkedIn", value: "8 700" },
                  { icon: TrendingUp, label: "Nouveaux abonnés en 10 mois", value: "+7 500" },
                  { icon: Sparkles, label: "Candidatures Mastermind / mois", value: "+25" },
                  { icon: Building2, label: "MDB & franchisés accompagnés", value: "+350" },
                  { icon: Instagram, label: "Abonnés Instagram (3 mois)", value: "5 000" },
                ],
              ].map((k, i) => (
                <div key={i} className="w-[260px] shrink-0 rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                  <k.icon className="h-5 w-5 text-linkedin" />
                  <p className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">
                    {k.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{k.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHART */}
      <section className="px-6 py-20 border-t bg-surface">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Évolution</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Une courbe qui s'accélère mois après mois
            </h2>
            <p className="mt-3 text-muted-foreground">
              +7 500 abonnés LinkedIn qualifiés en 10 mois (×7,2)
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)]">
              <TatianaGrowthChart />
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Extension du canal</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Et depuis 3 mois, on a dupliqué la méthode sur Instagram
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Une fois la traction LinkedIn installée, on a réutilisé les meilleurs angles
              éditoriaux pour ouvrir un deuxième canal : Instagram. Même ligne, même voix,
              format adapté. Résultat en 90 jours.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: Instagram, value: "5 000", label: "Abonnés Instagram en 3 mois" },
              { icon: TrendingUp, value: "0 → 5 000", label: "Compte lancé from scratch" },
              { icon: Sparkles, value: "×2", label: "Surface éditoriale sans doubler la charge de travail" },
            ].map((k, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] h-full">
                  <k.icon className="h-5 w-5 text-linkedin" />
                  <p className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">{k.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{k.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RETOMBEES BUSINESS */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Retombées business</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              LinkedIn est devenu le 1er canal entrant de Link Invests
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Des candidats franchise qui arrivent déjà alignés sur la méthode, des opérateurs
              installés qui demandent à rejoindre le réseau, et une marque qui s'impose comme
              LA référence française sur le métier de Marchand de Biens.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                tag: "Candidatures",
                title: "+25 candidatures Mastermind / mois",
                desc: "Avant : flux irrégulier via Instagram et bouche-à-oreille. Aujourd'hui : un pipeline stable de candidats qualifiés qui arrivent en ayant déjà lu plusieurs dizaines de posts, ce qui rend la sélection Mastermind beaucoup plus efficace.",
              },
              {
                icon: Network,
                tag: "Franchise",
                title: "Marchands de biens déjà installés",
                desc: "Des opérateurs déjà en activité contactent directement Tatiana pour rejoindre le réseau, après avoir suivi sa ligne éditoriale pendant plusieurs mois. Ce profil était quasi impossible à attirer avant LinkedIn.",
              },
              {
                icon: Sparkles,
                tag: "Positionnement",
                title: "Référence FR sur le métier",
                desc: "Tatiana est devenue l'une des voix les plus citées sur LinkedIn quand on parle de marchand de biens : montages sans apport, pré-commercialisation, négociation bancaire.",
              },
            ].map((m, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] h-full flex flex-col">
                  <div className="flex items-center gap-2">
                    <m.icon className="h-5 w-5 text-linkedin" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-linkedin bg-linkedin/10 px-2 py-0.5 rounded-full">
                      {m.tag}
                    </span>
                  </div>
                  <p className="mt-5 text-xl font-semibold tracking-tight">{m.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESEAU & PARTENAIRES */}
      <section className="px-6 py-20 border-t bg-surface">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Réseau & partenaires</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              LinkedIn est aussi devenu le 1er canal partenaires de Link Invests
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Au-delà des candidatures Mastermind et Franchise, LinkedIn a permis à Tatiana de
              structurer un réseau de partenaires de premier plan : banques, investisseurs,
              marchands de biens installés. Au point d'en faire un module à part entière du
              Mastermind.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Landmark,
                tag: "Banques",
                title: "Des banquiers qui rappellent Tatiana en premier",
                desc: "Plusieurs partenariats bancaires ouverts via LinkedIn, avec des interlocuteurs qui financent désormais les opérations du réseau et de ses franchisés en direct.",
              },
              {
                icon: Handshake,
                tag: "Investisseurs",
                title: "Une base d'investisseurs privés activable",
                desc: "Des particuliers et family offices qui suivent Tatiana depuis des mois et participent désormais au financement d'opérations en co-investissement.",
              },
              {
                icon: Network,
                tag: "Marchands",
                title: "Des MDB installés qui rejoignent le réseau",
                desc: "Des opérateurs déjà en activité, identifiés via LinkedIn, qui apportent leurs deals, leurs équipes et leur expérience terrain au reste du réseau.",
              },
            ].map((m, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] h-full flex flex-col">
                  <div className="flex items-center gap-2">
                    <m.icon className="h-5 w-5 text-linkedin" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-linkedin bg-linkedin/10 px-2 py-0.5 rounded-full">
                      {m.tag}
                    </span>
                  </div>
                  <p className="mt-5 text-xl font-semibold tracking-tight">{m.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>


          <Reveal delay={200}>
            <div className="mt-10 rounded-2xl border bg-card p-6 md:p-8 shadow-[var(--shadow-soft)] flex flex-col md:flex-row gap-5 items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linkedin/10 text-linkedin">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-linkedin">
                  Intégré au Mastermind
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tight">
                  Un module dédié : « Trouver ses partenaires et ses financeurs via LinkedIn »
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Le canal a tellement bien fonctionné pour Link Invests que Tatiana en a fait
                  un module à part entière de la formation Mastermind : comment activer LinkedIn
                  pour aller chercher banques, investisseurs et apporteurs d'affaires, sans
                  jamais quémander.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border bg-card p-3 shadow-[var(--shadow-soft)] overflow-hidden">
                <img src={temoignageRecrutement} alt="Témoignage Tatiana : recrutement de plusieurs coachs et du head of sales via LinkedIn en organique" className="w-full h-auto rounded-xl" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border bg-card p-3 shadow-[var(--shadow-soft)] overflow-hidden">
                <img src={temoignageFranchise} alt="Témoignage Tatiana : le modèle LinkedIn marche, on l'a répliqué dans la franchise" className="w-full h-auto rounded-xl" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section className="px-6 py-20 border-t bg-surface">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Top contenus</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Les angles qui ont fait décoller l'audience
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                badge: "Pédagogie",
                title: "Voici une stratégie immobilière que très peu de gens utilisent",
                excerpt:
                  "Visuel avant/après d'une opération de marchand de biens : comment on transforme un bien décoté en une marge à 6 chiffres en quelques mois. Étape par étape.",
                impressions: 72400,
                reactions: 1180,
                comments: 174,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_voici-une-strat%C3%A9gie-immobili%C3%A8re-que-tr%C3%A8s-activity-7337003090752991232-d1pt",
              },
              {
                badge: "Opinion",
                title: "Quand l'agent immobilier devient ton principal obstacle",
                excerpt:
                  "On t'a vendu l'agent immo comme un partenaire. La réalité : pour un marchand de biens, c'est souvent le premier frein. Voici pourquoi, et comment je contourne le problème.",
                impressions: 58700,
                reactions: 920,
                comments: 142,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_quand-lagent-immobilier-devient-ton-principal-activity-7332644202331201538-dRrK",
              },
              {
                badge: "Viral",
                title: "Selon toi, il est plus avantageux de se lancer comme médecin ou marchand de biens ?",
                excerpt:
                  "Salaire médecin vs salaire marchand de biens : le calcul que personne n'ose poser publiquement. Et pourtant les chiffres parlent d'eux-mêmes.",
                impressions: 81500,
                reactions: 1320,
                comments: 218,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_selon-toi-il-est-plus-avantageux-de-se-lancer-activity-7371792273958944769-knmA",
              },
              {
                badge: "Storytelling",
                title: "Hier, je pousse la porte d'une agence immobilière",
                excerpt:
                  "« On ne travaille pas avec les marchands de biens. » Voilà ce qu'on m'a répondu. Petit récit d'un rendez-vous qui résume parfaitement le rapport agents / MDB en France.",
                impressions: 54300,
                reactions: 860,
                comments: 134,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_hier-je-pousse-la-porte-dune-agence-immobili%C3%A8re-activity-7323954095684206592-p0F3",
              },
              {
                badge: "Pédagogie",
                title: "Les 4 raisons pour lesquelles je ne signe jamais de compromis avec un agent immo",
                excerpt:
                  "Délais, conditions suspensives, clauses, frais : voici exactement ce qui se passe quand un MDB signe un compromis via agence, et pourquoi je préfère passer en direct.",
                impressions: 49800,
                reactions: 712,
                comments: 96,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_voici-les-4-raisons-pour-lesquelles-je-ne-activity-7394275417106436096-ApUY",
              },
              {
                badge: "Storytelling",
                title: "J'ai passé des nuits blanches, j'ai bossé les week-ends. Aujourd'hui on me dit : « tu as de la chance »",
                excerpt:
                  "J'ai sacrifié ma vie sociale, mes vacances, mes soirées. Et maintenant on appelle ça de la chance. Petit rappel à toutes celles qui n'osent pas se lancer.",
                impressions: 68400,
                reactions: 1240,
                comments: 196,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_jai-pass%C3%A9-des-nuits-blanches-jai-boss%C3%A9-activity-7390689351099187200-9x2b",
              },
              {
                badge: "Pédagogie",
                title: "Bien neuf pas rentable vs bien délabré rentable",
                excerpt:
                  "Le marché vous vend du neuf clé en main. Moi je préfère un bien délabré, bien acheté, bien revendu. Voici pourquoi la rentabilité est presque toujours dans le second.",
                impressions: 52100,
                reactions: 780,
                comments: 108,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_en-2025-il-y-a-encore-des-marchands-de-biens-activity-7386287838792937472-dEgz",
              },
              {
                badge: "Pédagogie",
                title: "Voici exactement ce qu'un marchand de biens débutant doit faire pour générer une marge à 6 chiffres",
                excerpt:
                  "La méthode, étape par étape : sourcing, négociation, pré-commercialisation, montage bancaire. Sans apport, sans réseau, sans expérience préalable.",
                impressions: 65200,
                reactions: 1020,
                comments: 162,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_voici-exactement-ce-quun-marchand-de-biens-activity-7368168376684138496-Vlmg",
              },
              {
                badge: "Storytelling",
                title: "Lorsque j'étais infirmière, je travaillais 60 h par semaine",
                excerpt:
                  "Gardes de nuit, week-ends, salaire plafonné. Voici comment je suis passée d'infirmière épuisée à marchande de biens à temps plein, et ce que ça a changé dans ma vie.",
                impressions: 77800,
                reactions: 1480,
                comments: 224,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_lorsque-j%C3%A9tais-infirmi%C3%A8re-je-travaillais-activity-7362007819182645249-kJKy",
              },
              {
                badge: "Opinion",
                title: "La technique des vendeurs malhonnêtes pour te forcer à monter ton offre",
                excerpt:
                  "Faux acquéreurs, fausses offres concurrentes, urgence fabriquée : décryptage des techniques utilisées contre les acheteurs, et comment ne plus jamais tomber dans le piège.",
                impressions: 56900,
                reactions: 880,
                comments: 132,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_la-technique-des-vendeurs-malhonn%C3%AAtes-pour-activity-7415293893069611008-rKiF",
              },
              {
                badge: "Pédagogie",
                title: "Négociation : le problème, ce n'est pas l'agent immobilier",
                excerpt:
                  "Si tu n'arrives pas à négocier, ce n'est pas la faute de l'agent. C'est ta préparation. Voici la grille de négociation que j'utilise sur chacune de mes opérations.",
                impressions: 47500,
                reactions: 690,
                comments: 88,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_n%C3%A9gociation-le-probl%C3%A8me-nest-pas-lagent-activity-7327215589574287360-Onxn",
              },
              {
                badge: "Opinion",
                title: "Grosse marge = gros bien ? C'est l'erreur n°1 des MDB en 2025",
                excerpt:
                  "Plus le ticket est gros, plus le risque est gros. Les meilleures marges, je les fais souvent sur des opérations à 200-300 K€. Voici pourquoi.",
                impressions: 51600,
                reactions: 760,
                comments: 104,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_en-2025-il-y-a-encore-des-marchands-de-biens-activity-7386287838792937472-dEgz",
              },
              {
                badge: "Pédagogie",
                title: "N'engage jamais un artisan si tu n'as pas fait ça avant",
                excerpt:
                  "Devis flous, retards, reprises à payer deux fois : la majorité des opérations MDB capotent à cause des artisans. Voici la checklist que j'applique avant chaque chantier.",
                impressions: 48900,
                reactions: 720,
                comments: 92,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_nengage-jamais-un-artisan-si-tu-nas-pas-activity-7421454480606531584-QPsX",
              },
              {
                badge: "Viral",
                title: "Le salaire médian en France est de 26 196 €. Une seule opération MDB peut faire +5×.",
                excerpt:
                  "Comparer un CDI au métier de marchand de biens, ce n'est pas honnête : ce n'est pas le même risque. Mais quand on remet les chiffres à leur place, le débat n'existe plus.",
                impressions: 74200,
                reactions: 1280,
                comments: 208,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_le-salaire-m%C3%A9dian-en-france-est-de-26-196-activity-7390327070704439296-_QHz",
              },
              {
                badge: "Opinion",
                title: "« Achetez une maison, vous la transmettrez à vos enfants. » En réalité, ils devront vendre pour payer le fisc.",
                excerpt:
                  "Succession, droits de mutation, démembrement : voici pourquoi la majorité des transmissions immobilières finissent en vente forcée, et comment l'éviter.",
                impressions: 63700,
                reactions: 980,
                comments: 156,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_le-salaire-m%C3%A9dian-en-france-est-de-26-196-activity-7390327070704439296-_QHz",
              },
              {
                badge: "Pédagogie",
                title: "La clé pour devenir bon en négociation : le volume",
                excerpt:
                  "Tu veux devenir bon en négo ? Fais 50 visites en 30 jours. C'est le seul vrai shortcut. Voici comment j'ai structuré mes premières semaines en tant que MDB.",
                impressions: 46800,
                reactions: 660,
                comments: 84,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_la-cl%C3%A9-le-volume-tu-veux-devenir-bon-en-activity-7327572421316665344-BVyz",
              },
              {
                badge: "Opinion",
                title: "J'en ai marre de ceux qui se prennent pour des marchands de biens après 2 vidéos YouTube",
                excerpt:
                  "Le métier est sérieux, réglementé, risqué. Ce n'est pas un side-project ni un truc à tester « pour voir ». Petit recadrage pour les débutants pressés.",
                impressions: 69300,
                reactions: 1160,
                comments: 248,
                url: "https://www.linkedin.com/posts/tatiana-garcia-marchand_jen-ai-marre-de-ceux-qui-se-prennent-pour-activity-7343163700377206784-zUrg",
              },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 50}>
                <PostCard
                  {...p}
                  authorPhoto={tatianaPhoto}
                  authorName={AUTHOR_NAME}
                  authorRole={AUTHOR_ROLE}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Audience</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Une croissance ultra-qualifiée
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Les nouveaux abonnés correspondent exactement aux deux cœurs de cible Link Invests :
              profils en reconversion sérieux et pros déjà installés sur l'immobilier.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "58%", l: "Profils en reconversion" },
              { v: "32%", l: "Investisseurs & pros immo" },
              { v: "+200", l: "MDB accompagnés au total" },
              { v: "×7,2", l: "Audience LinkedIn en 10 mois" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)]">
                  <p className="text-4xl font-semibold tracking-tight text-linkedin">{s.v}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="px-6 py-20 border-t bg-surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Méthode</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Notre approche CopyLinker</h2>
          </Reveal>
          <div className="mt-12 space-y-8">
            {[
              {
                t: "Mettre l'histoire de reconversion au cœur du contenu",
                d: "Infirmière → +40 biens en gestion → licenciement juste avant le Covid → vie de marchande de biens. Cette trajectoire parle directement aux profils en reconversion qui hésitent à sauter le pas. On l'a transformée en fil rouge éditorial.",
              },
              {
                t: "Démonter les croyances limitantes du métier",
                d: "« Il faut 300k d'apport », « Sans crédit c'est impossible », « Il faut être du métier »… Chaque post casse un mythe avec un cas concret, un montage, ou une erreur vécue. C'est ce qui crée la confiance avant même le premier appel.",
              },
              {
                t: "Transformer chaque opération en preuve sociale",
                d: "Montages sans apport, négociations bancaires, dossiers refusés puis débloqués, chantiers chiffrés… Chaque expérience devient un post pédagogique. C'est ce qui distingue Link Invests des coachs « théoriques » du marché.",
              },
              {
                t: "Adresser les deux cibles sans diluer le message",
                d: "Posts reconversion d'un côté (Mastermind), posts pro de l'autre (Franchise). On a structuré une ligne éditoriale claire qui parle aux deux profils sans perdre personne en route.",
              },
              {
                t: "Cadence soutenue sur 10 mois",
                d: "Une publication régulière, sans baisse de qualité, pendant 10 mois. C'est cette discipline qui fait passer un compte de 1 200 à 8 700 abonnés ultra-qualifiés et qui ouvre le flux entrant Mastermind + Franchise.",
              },
              {
                t: "Activer un système d'emailing pour nourrir l'audience",
                d: "En complément de LinkedIn, on a mis en place un système d'emailing intégré à l'approche CopyLinker : capture des contacts qualifiés, séquences automatiques pour nourrir les candidats Mastermind et Franchise entre deux posts, et relances ciblées sur les opportunités. L'audience LinkedIn ne reste plus captive de l'algorithme.",
              },
            ].map((m, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-linkedin flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">{m.t}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{m.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-3xl border bg-card p-10 md:p-14 shadow-[var(--shadow-card)] relative">
              <Quote className="h-10 w-10 text-linkedin/20 absolute top-8 left-8" />
              <blockquote className="text-xl md:text-2xl leading-relaxed font-medium tracking-tight">
                « Notre objectif principal, c'était de développer notre notoriété. On
                investissait beaucoup en publicité, mais les gens qui nous découvraient ne
                nous connaissaient pas vraiment. Les réseaux sociaux nous ont permis de
                 construire cet axe notoriété en complément de l'acquisition payante, un
                 travail que Fabien a remarquablement mené. »
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <img src={tatianaPhoto} alt={AUTHOR_NAME} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{AUTHOR_NAME}</p>
                  <p className="text-sm text-muted-foreground">{AUTHOR_ROLE}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24 bg-brand text-brand-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              Vous voulez le même type de résultats pour votre marque personnelle&nbsp;?
            </h2>
            <p className="mt-5 text-lg text-brand-foreground/70 max-w-xl mx-auto">
              CopyLinker accompagne les pros de la finance et de l'immobilier qui veulent faire
              de LinkedIn un vrai levier business.
            </p>
            <a
              href={CTA}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-foreground px-7 py-4 text-base font-medium text-brand transition-transform hover:-translate-y-0.5"
            >
              Réserver mon créneau <ArrowRight className="h-4 w-4" />
            </a>
            <div className="mt-12 flex items-center justify-center gap-3">
              <img src={fabienPhoto} alt="Fabien Peduzzi" className="h-12 w-12 rounded-full object-cover" />
              <div className="text-left">
                <p className="font-semibold text-sm">Fabien Peduzzi</p>
                <p className="text-xs text-brand-foreground/60">Ancien expert-comptable mémorialiste · Dirigeant CopyLinker</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
