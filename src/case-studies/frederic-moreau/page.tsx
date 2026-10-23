"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Eye, Users, Sparkles, CheckCircle2, Quote, Tv, Mic, Newspaper } from "lucide-react";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { Reveal } from "./components/Reveal";
import { FredericGrowthChart } from "./components/FredericGrowthChart";
import { PostCard } from "./components/PostCard";
const fredericPhoto = "/etudes/frederic-moreau/frederic.webp";
const copylinkerLogo = "/etudes/frederic-moreau/copylinker.webp";
const fabienPhoto = "/etudes/frederic-moreau/fabien.webp";
const immoLogo = "/etudes/frederic-moreau/immopourexpat-logo.webp";
const post1 = "/etudes/frederic-moreau/frederic-post-1.webp";
const post2 = "/etudes/frederic-moreau/frederic-post-2.webp";
const post3 = "/etudes/frederic-moreau/frederic-post-3.webp";
const post4 = "/etudes/frederic-moreau/frederic-post-4.webp";
const post5 = "/etudes/frederic-moreau/frederic-post-5.webp";
const post6 = "/etudes/frederic-moreau/frederic-post-6.webp";
const logoM6 = "/etudes/frederic-moreau/media-m6.webp";
const logoMartingale = "/etudes/frederic-moreau/media-la-martingale.webp";
const logoLeMonde = "/etudes/frederic-moreau/media-le-monde.webp";

const POST_IMAGES = [post1, post2, post3, post4, post5, post6];


const CTA = "https://taap.it/lguFZ0Q";
const AUTHOR_NAME = "Frédéric Moreau";
const AUTHOR_ROLE =
  "Fondateur ImmoPourExpat · Ex-Avocat · Chroniqueur 100% Immo sur M6";

export default function FredericMoreauPage() {
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
      <section className="px-6 pt-16 pb-0 md:pt-24">
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border bg-surface px-3 py-1 text-xs text-muted-foreground">
            <img src={immoLogo} alt="ImmoPourExpat" className="h-4 w-4 rounded-sm object-cover" />
            Étude de cas · ImmoPourExpat · 18 mois d'accompagnement (mi-2024 → nov. 2025)
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Comment Frédéric Moreau est passé de{" "}
            <span className="text-muted-foreground">2 487</span> à{" "}
            <span className="text-linkedin">9 006 abonnés</span> LinkedIn en{" "}
            <span className="text-linkedin">1 an et demi</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Instagram était son plus gros canal d'acquisition mais il avait besoin de
            développer sa notoriété. Et en 18 mois, LinkedIn est devenu un vrai
            amplificateur de notoriété : 2 à 5 signatures par mois, et surtout des
            opportunités médias comme M6 (100% Immo) et La Martingale.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex items-center gap-3 rounded-full border bg-card pl-2 pr-5 py-2 shadow-[var(--shadow-soft)]">
              <img src={fredericPhoto} alt={AUTHOR_NAME} className="h-10 w-10 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm font-semibold">{AUTHOR_NAME}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <img src={immoLogo} alt="" className="h-3.5 w-3.5 rounded-sm object-cover" />
                  Fondateur ImmoPourExpat
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

      {/* GALERIE POSTS */}
      <section className="pt-[1cm] pb-12 overflow-hidden">
        <div className="relative">
          <div className="flex gap-5 animate-marquee w-max">
            {[...POST_IMAGES, ...POST_IMAGES].map((src, i) => (
              <div
                key={i}
                className="h-[420px] w-[336px] flex-shrink-0 overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-soft)]"
              >
                <img src={src} alt="Post LinkedIn Frédéric Moreau" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </section>

      {/* CONTEXTE */}
      <section className="px-6 py-16 border-t bg-surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Contexte</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Une expertise unique, mais une voix encore confidentielle
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-muted-foreground">
            <Reveal delay={50}>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Ce que fait ImmoPourExpat</p>
                <p className="mt-3 text-foreground">
                  ImmoPourExpat aide les expatriés français à investir dans l'immobilier en France,
                  sans y mettre les pieds, sans se faire avoir, et sans que la distance devienne un frein.
                  De la recherche du bien au financement non-résident, en passant par la fiscalité et
                  le pilotage des travaux à distance, l'équipe accompagne chaque investisseur de bout en bout.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p>
                Avant de travailler avec CopyLinker, Frédéric Moreau avait déjà tout :
                un parcours d'ex-avocat, un patrimoine immobilier personnel de plus de 6 M€
                construit depuis l'étranger, et ImmoPourExpat, un programme qui accompagne
                aujourd'hui plus de 1 000 expatriés français.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Mais sur LinkedIn, sa voix restait sous-exploitée. 2 487 abonnés, des prises
                de parole irrégulières, pas de ligne éditoriale claire pour adresser sa cible :
                les expatriés et non-résidents français qui veulent investir en France sans
                tomber dans les pièges bancaires et fiscaux.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p>
                Le défi : transformer une expertise très technique (financement non-résident,
                fiscalité internationale, pilotage de travaux à distance) en contenus simples,
                actionnables, et capables de convaincre une audience exigeante d'expatriés
                souvent ultra-sollicitée par d'autres acteurs du secteur.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KPI */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Résultats · 18 mois</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Mi-2024 → Novembre 2025
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, label: "Abonnés LinkedIn (nov. 2025)", value: 9006 },
              { icon: TrendingUp, label: "Nouveaux abonnés en 18 mois", value: 6519, prefix: "+" },
              { icon: Sparkles, label: "Signatures / mois via LinkedIn", value: 5, prefix: "2–" },
              { icon: Eye, label: "Mois d'accompagnement", value: 18 },
            ].map((k, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] h-full">
                  <k.icon className="h-5 w-5 text-linkedin" />
                  <p className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">
                    <AnimatedCounter value={k.value} prefix={k.prefix} />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{k.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHART */}
      <section className="px-6 py-20 border-t bg-surface">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Évolution</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Une croissance linéaire, mois après mois
            </h2>
            <p className="mt-3 text-muted-foreground">
              Mi-2024 → Novembre 2025 · +6 519 abonnés LinkedIn qualifiés
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)]">
              <FredericGrowthChart />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MEDIAS */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Retombées médias</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              LinkedIn a ouvert les portes des plus grands médias français
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Pendant la collaboration, Frédéric est devenu chroniqueur récurrent sur M6 et a
              enchaîné les apparitions dans des médias business et finance de premier plan.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Tv,
                tag: "Télévision",
                title: "100% Immo sur M6",
                desc: "Chroniqueur récurrent de l'émission immobilier de M6 depuis 2025.",
                logo: logoM6,
                logoAlt: "Logo M6",
              },
              {
                icon: Mic,
                tag: "Podcast",
                title: "La Martingale",
                desc: "Passage sur l'un des podcasts finance & investissement les plus écoutés en France.",
                logo: logoMartingale,
                logoAlt: "Logo La Martingale",
              },
              {
                icon: Newspaper,
                tag: "Presse",
                title: "Le Monde · Le Point · Challenges · SeLoger",
                desc: "Cité comme expert immobilier dans plusieurs grands titres de la presse française.",
                logo: logoLeMonde,
                logoAlt: "Logo Le Monde",
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
                  <div className="mt-5 h-16 flex items-center justify-center">
                    <img src={m.logo} alt={m.logoAlt} className="max-h-16 max-w-[180px] object-contain" loading="lazy" />
                  </div>
                  <p className="mt-5 text-xl font-semibold tracking-tight">{m.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AUTRES RETOMBEES */}
      <section className="px-6 py-20 border-t bg-surface">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Les autres retombées</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Un seul post = 50 candidatures pour un poste de responsable marketing
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Au-delà des médias, LinkedIn est aussi devenu un canal de recrutement.
              Un seul post publié a généré plus de 50 candidatures qualifiées.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 items-start">
            {/* WhatsApp */}
            <Reveal>
              <div className="rounded-2xl border bg-[#ECE5DD] p-6 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <p className="text-xs font-semibold text-gray-700">WhatsApp · Frédéric</p>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-4 py-3 shadow-sm">
                    <p className="text-sm text-gray-900 leading-relaxed whitespace-pre-line">
                      Fabien c'est dingue 🤯{"\n"}
                      Le post pour le responsable marketing est parti hier soir et j'ai déjà
                      plus de 50 candidatures qui sont tombées.{"\n\n"}
                      Que des profils sérieux en plus.{"\n"}
                      Faut que je trie tout ça 😅
                    </p>
                    <p className="mt-1 text-[10px] text-gray-500 text-right">09:42 ✓✓</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* LinkedIn comment */}
            <Reveal delay={100}>
              <div className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 rounded-full bg-linkedin" />
                  <p className="text-xs font-semibold text-muted-foreground">Post LinkedIn · Frédéric Moreau</p>
                </div>
                <div className="flex items-start gap-3">
                  <img src={fredericPhoto} alt={AUTHOR_NAME} className="h-10 w-10 rounded-full object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground">{AUTHOR_NAME}</p>
                    <p className="text-xs text-muted-foreground">Fondateur ImmoPourExpat</p>
                    <p className="mt-3 text-sm text-foreground leading-relaxed">
                      On recrute ! ImmoPourExpat cherche son/sa <strong>Responsable Marketing</strong>{" "}
                      pour structurer l'acquisition et accompagner notre croissance.{" "}
                      Si tu veux rejoindre une équipe qui accompagne +1 000 expatriés sur leur
                      projet immobilier, envoie-moi un message 👇
                    </p>
                    <div className="mt-4 pt-3 border-t flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="font-semibold text-linkedin">+50 candidatures reçues</span>
                      <span className="ml-auto">en 24h</span>
                    </div>
                  </div>
                </div>
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
                badge: "Viral",
                title: "« Il faut 50% d'apport quand on est non-résident. » Faux.",
                excerpt:
                  "En 2017, toutes les banques françaises m'ont dit non. Aujourd'hui, mes clients financent leurs projets avec 0 à 10% d'apport depuis Dubaï, Londres, New York ou Singapour. Voici la méthode que j'ai construite…",
                impressions: 64200,
                reactions: 980,
                comments: 142,
              },
              {
                badge: "Pédagogie",
                title: "Comment transformer 10 000 € en 300 000 € grâce à l'effet de levier",
                excerpt:
                  "Maurena (Suisse) a acheté à 400 000 € avec 6 000 € d'apport. La banque finance, le locataire rembourse. Ton salaire est limité. L'immobilier, non.",
                impressions: 38400,
                reactions: 612,
                comments: 78,
              },
              {
                title: "Pourquoi je suis passé sur La Martingale",
                excerpt:
                  "Retour sur l'épisode enregistré la semaine dernière. On a parlé investissement immobilier depuis l'étranger, financement non-résident, et de l'anomalie française que personne n'exploite…",
                impressions: 24800,
                reactions: 430,
                comments: 56,
              },
              {
                badge: "M6",
                title: "Ce que j'ai dit hier sur M6 (et ce que je n'ai pas eu le temps de dire)",
                excerpt:
                  "Le format télé impose 3 minutes. Voici la version longue de ma chronique 100% Immo sur l'investissement immobilier des Français de l'étranger…",
                impressions: 41200,
                reactions: 740,
                comments: 96,
              },
              {
                badge: "Opinion",
                title: "« Investir en France, c'est se faire squatter. » Ce que les médias NE te montrent PAS",
                excerpt:
                  "Les chiffres racontent une toute autre histoire que les gros titres. Voici la vraie réalité du marché locatif français, données à l'appui…",
                impressions: 52700,
                reactions: 894,
                comments: 168,
              },
              {
                badge: "Milestone",
                title: "9 000 abonnés. 1 000 expats accompagnés. Merci.",
                excerpt:
                  "Il y a 18 mois, on était 2 000 sur LinkedIn. Aujourd'hui 9 000, et surtout plus de 1 000 expatriés français accompagnés sur leur projet immobilier en France. Petit bilan…",
                impressions: 47600,
                reactions: 1080,
                comments: 156,
              },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 50}>
                <PostCard
                  {...p}
                  authorPhoto={fredericPhoto}
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
              Les nouveaux abonnés correspondent exactement au cœur de cible d'ImmoPourExpat :
              des expatriés français à fort pouvoir d'achat, répartis sur les grands hubs internationaux.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "62%", l: "Français de l'étranger" },
              { v: "38%", l: "Dubaï · Londres · Singapour" },
              { v: "44%", l: "Cadres & dirigeants" },
              { v: "4,8/5", l: "Note Trustpilot · +250 avis" },
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
                t: "Capitaliser sur une histoire forte",
                d: "Frédéric a vécu lui-même le problème qu'il résout : non-résident depuis 2012, refus de toutes les banques françaises en 2017, puis construction d'un patrimoine de 6 M€ depuis l'étranger. On a mis cette histoire au cœur de la ligne éditoriale.",
              },
              {
                t: "Démonter les mythes du non-résident",
                d: "« Il faut 50% d'apport », « C'est impossible depuis l'étranger », « La fiscalité est un piège »… Chaque post casse une croyance limitante avec des cas clients concrets et des chiffres vérifiables.",
              },
              {
                t: "Storytelling client systématique",
                d: "Blandine (USA), Laura (Londres), Shakir (Dubaï), Maurena (Suisse), Olivia (Thaïlande)… Chaque résultat client devient un post. C'est ce qui transforme l'audience en pipeline de séminaires gratuits.",
              },
              {
                t: "Activation média et social warming",
                d: "On travaille les interactions avec les journalistes, producteurs et profils influents du secteur immobilier et finance, c'est cette préparation qui a contribué aux passages sur M6, La Martingale, Le Monde et Challenges.",
              },
              {
                t: "Cadence soutenue sur 18 mois",
                d: "Une cadence régulière, sans baisse de qualité, pendant 18 mois. C'est cette discipline éditoriale qui fait passer un compte de 2k à +9k abonnés ultra-qualifiés.",
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
                « Fabien est ultra pro. Je le recommande à chaque fois que j'en ai
                l'occasion. On a arrêté la collaboration parce que j'ai recruté quelqu'un
                en interne à temps plein pour gérer toute cette partie contenu, et c'est
                Fabien lui-même qui me l'a placé, pour la petite anecdote. »
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <img src={fredericPhoto} alt={AUTHOR_NAME} className="h-12 w-12 rounded-full object-cover" />
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
              de LinkedIn un vrai levier business et média.
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
