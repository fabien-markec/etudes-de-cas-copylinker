"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Sparkles, CheckCircle2, Quote, Building2, GraduationCap, Network, Bot, BookOpen, UserPlus, Instagram } from "lucide-react";
import { Reveal } from "./components/Reveal";
import { TatianaGrowthChart as GrowthChart } from "./components/TatianaGrowthChart";
import { PostCard } from "./components/PostCard";
const nicolasPhoto = "/etudes/nicolas-markowicz/nicolas.webp";
const whatsapp1 = "/etudes/nicolas-markowicz/nicolas-whatsapp-1.webp";
const whatsapp2 = "/etudes/nicolas-markowicz/nicolas-whatsapp-2.webp";
const copylinkerLogo = "/etudes/nicolas-markowicz/copylinker.webp";
const fabienPhoto = "/etudes/nicolas-markowicz/fabien.webp";
const logoLinkedIn = "/etudes/nicolas-markowicz/logo-linkedin.webp";
const logoInstagram = "/etudes/nicolas-markowicz/logo-instagram.webp";
const lgmLogo = "/etudes/nicolas-markowicz/lgm-logo.webp";
const post1 = "/etudes/nicolas-markowicz/nicolas-post-1.webp";
const post2 = "/etudes/nicolas-markowicz/nicolas-post-2.webp";
const post3 = "/etudes/nicolas-markowicz/nicolas-post-3.webp";
const post4 = "/etudes/nicolas-markowicz/nicolas-post-4.webp";
const post5 = "/etudes/nicolas-markowicz/nicolas-post-5.webp";
const post6 = "/etudes/nicolas-markowicz/nicolas-post-6.webp";
const post7 = "/etudes/nicolas-markowicz/nicolas-post-7.webp";
const post8 = "/etudes/nicolas-markowicz/nicolas-post-8.webp";
const post9 = "/etudes/nicolas-markowicz/nicolas-post-9.webp";


const CTA = "https://taap.it/lguFZ0Q";
const AUTHOR_NAME = "Nicolas Markowicz";
const AUTHOR_ROLE =
  "Fondateur LGM Immobilier · Réseau national de mandataires · 20 ans d'expérience";

function BrandBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md bg-foreground px-2 py-0.5 text-[11px] font-semibold tracking-tight text-background ${className}`}>
      <img src={lgmLogo} alt="LGM Immobilier" className="h-3.5 w-3.5 rounded-sm object-cover" />
      LGM Immobilier
    </span>
  );
}

export default function NicolasMarkowiczPage() {
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
            Étude de cas · 12 mois d'accompagnement LinkedIn
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Comment Nicolas Markowicz a relancé LinkedIn pour en faire un{" "}
            <span className="text-linkedin">canal de recrutement de mandataires</span> chez{" "}
            <span className="text-muted-foreground">LGM Immobilier</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Quand Nicolas est venu nous voir, il avait totalement abandonné LinkedIn :
            plus aucune visibilité, malgré ses 5 000 abonnés déjà acquis. Sa ligne était
            trop axée « vente », ce qui ne convertissait pas. En 12 mois (octobre 2024 →
            octobre 2025), nous avons construit une stratégie de notoriété, actualité
            immobilière, politique, économie, finance, pour transformer sa parole en
            levier de recrutement de mandataires.
          </p>

          <div className="mt-10 flex flex-wrap items-start justify-center gap-10 sm:gap-16">
            <div className="flex flex-col items-center">
              <img src={logoLinkedIn} alt="LinkedIn" className="h-14 w-14 object-contain" />
              <p className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                5 000 <span className="text-muted-foreground">→</span> 13 000
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Abonnés LinkedIn</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={logoInstagram} alt="Instagram" className="h-14 w-14 object-contain" />
              <p className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                8 000 <span className="text-muted-foreground">→</span> 25 000
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Abonnés Instagram</p>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex items-center gap-3 rounded-full border bg-card pl-2 pr-5 py-2 shadow-[var(--shadow-soft)]">
              <img src={nicolasPhoto} alt={AUTHOR_NAME} className="h-10 w-10 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm font-semibold">{AUTHOR_NAME}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <BrandBadge />
                  Fondateur LGM Immobilier
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
      <section className="py-[1cm] border-t bg-surface overflow-hidden">
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max gap-5 animate-marquee">
            {[
              ...[post1, post2, post3, post4, post5, post6, post7, post8, post9],
              ...[post1, post2, post3, post4, post5, post6, post7, post8, post9],
            ].map((src, i) => (
              <div
                key={i}
                className="w-[240px] shrink-0 overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-soft)]"
              >
                <img
                  src={src}
                  alt={`Post LinkedIn de Nicolas Markowicz ${(i % 9) + 1}`}
                  loading="lazy"
                  className="h-[300px] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CONTEXTE */}
      <section className="px-6 py-16 border-t bg-surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Contexte focus LinkedIn</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Un fondateur qui avait abandonné LinkedIn, faute de visibilité
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-muted-foreground">
            <Reveal delay={50}>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Le point de départ</p>
                <p className="mt-3 text-foreground">
                  Nicolas dirige <strong>LGM Immobilier</strong> depuis 2017 : un réseau
                  national de mandataires immobiliers en forte croissance. Quand il nous
                  contacte en octobre 2024, il a <strong>5 000 abonnés LinkedIn</strong>, donc
                  une base déjà construite, mais il a totalement arrêté de publier : plus aucune
                  visibilité, des contenus trop centrés « vente » qui ne déclenchaient ni
                  engagement ni candidatures.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p>
                L'objectif n'était pas de « vendre LGM » sur LinkedIn, mais de{" "}
                <strong>développer sa notoriété personnelle</strong> pour en faire
                indirectement un canal d'attraction de mandataires. Pour ça, on a
                changé l'angle de tir : moins de pitch commercial, beaucoup plus
                d'opinion et d'actualité.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">La nouvelle ligne éditoriale</p>
                <ul className="mt-3 space-y-2 text-foreground">
                  <li className="flex gap-2"><span className="text-linkedin">·</span> Actualité immobilière (marché, taux, transactions)</li>
                  <li className="flex gap-2"><span className="text-linkedin">·</span> Politique du logement et réglementation</li>
                  <li className="flex gap-2"><span className="text-linkedin">·</span> Métier de mandataire et transformation du secteur</li>
                  <li className="flex gap-2"><span className="text-linkedin">·</span> Finances personnelles et patrimoine</li>
                  <li className="flex gap-2"><span className="text-linkedin">·</span> Économie française et pouvoir d'achat</li>
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">
                  Des angles qui font réagir un maximum de gens, qui donnent à Nicolas
                  son utilité de prise de parole, et qui servent en bout de chaîne son
                  vrai objectif : <strong>recruter de nouveaux mandataires</strong>.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* YOUTUBE MARQUEE */}
      <section className="px-6 py-16 border-t bg-surface">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Format vidéo</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
              Quelques prises de parole vidéo de Nicolas
            </h2>
          </Reveal>
          <div className="mt-10 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max gap-5 animate-marquee">
              {[
                ...["CZTBejkIuAc", "oHjxQEAEOqA", "DDZFDwTTj9s"],
                ...["CZTBejkIuAc", "oHjxQEAEOqA", "DDZFDwTTj9s"],
              ].map((id, i) => (
                <a
                  key={i}
                  href={`https://www.youtube.com/watch?v=${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-[360px] shrink-0 overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                      alt="Vidéo YouTube de Nicolas Markowicz"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-red-600 ml-1">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* KPI */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Résultats · 12 mois</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Octobre 2024 → Octobre 2025
            </h2>
          </Reveal>
          <div className="mt-12 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-4 animate-marquee">
              {[
                ...[
                  { icon: Users, label: "Abonnés LinkedIn", value: "13 000" },
                  { icon: TrendingUp, label: "LinkedIn en 12 mois", value: "+8 000" },
                  { icon: Instagram, label: "Abonnés Instagram", value: "25 000" },
                  { icon: TrendingUp, label: "Instagram en 12 mois", value: "+17 000" },
                  { icon: Sparkles, label: "Croissance Instagram", value: "×3,1" },
                  { icon: UserPlus, label: "Canal de recrutement", value: "Réactivé" },
                  { icon: Building2, label: "Stratégie", value: "Notoriété" },
                ],
                ...[
                  { icon: Users, label: "Abonnés LinkedIn", value: "13 000" },
                  { icon: TrendingUp, label: "LinkedIn en 12 mois", value: "+8 000" },
                  { icon: Instagram, label: "Abonnés Instagram", value: "25 000" },
                  { icon: TrendingUp, label: "Instagram en 12 mois", value: "+17 000" },
                  { icon: Sparkles, label: "Croissance Instagram", value: "×3,1" },
                  { icon: UserPlus, label: "Canal de recrutement", value: "Réactivé" },
                  { icon: Building2, label: "Stratégie", value: "Notoriété" },
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
              Une courbe qui repart, et qui ne s'arrête plus
            </h2>
            <p className="mt-3 text-muted-foreground">
              +8 000 abonnés LinkedIn en 12 mois (×2,6), après une période d'arrêt total.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)]">
              <GrowthChart />
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin inline-flex items-center gap-2">
              <Instagram className="h-3.5 w-3.5" /> Instagram
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Et en parallèle : 8 000 → 25 000 abonnés Instagram en 12 mois
            </h2>
            <p className="mt-3 text-muted-foreground">
              On a dupliqué la logique éditoriale de LinkedIn sur Instagram, actualité
              immobilière, opinions de marché, décryptages, pour toucher une audience
              plus grand public et alimenter le même objectif : faire de Nicolas une
              voix incontournable du secteur, et générer des candidatures de mandataires.
            </p>
            <p className="mt-4 text-muted-foreground">
              Le canal vidéo est aujourd'hui un vrai sujet de notoriété qu'on pousse
              de plus en plus chez nos clients. C'est le format qui crée le plus
              d'attachement à une personne, qui installe l'autorité le plus vite, et
              qui se recycle aussi bien sur LinkedIn que sur Instagram : un même
              tournage alimente les deux plateformes, avec à chaque fois le bon
              format natif (post vidéo LinkedIn, reels Instagram).
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { value: "25 000", label: "Abonnés Instagram", icon: Users },
              { value: "+17 000", label: "Nouveaux abonnés en 12 mois", icon: TrendingUp },
              { value: "×3,1", label: "Croissance de l'audience", icon: Sparkles },
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
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Retombées</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              LinkedIn redevient un vrai actif pour le recrutement de mandataires
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Une parole qui reprend sa place dans l'écosystème immobilier, une marque
              employeur qui réémerge, et un canal qui se remet à servir l'objectif
              recrutement de LGM.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: UserPlus,
                tag: "Recrutement",
                title: "Un canal réactivé pour attirer des mandataires",
                desc: "En sortant du discours de vente pur et en s'appuyant sur l'actualité immobilière, politique et économique, Nicolas est redevenu visible auprès des profils qui s'intéressent vraiment au métier, ceux qui veulent comprendre le marché avant de s'engager.",
              },
              {
                icon: Network,
                tag: "Notoriété",
                title: "Une voix qui pèse dans la conversation immo",
                desc: "Les posts d'opinion sur le marché, les taux, la réglementation et l'économie ont positionné Nicolas comme l'une des voix LinkedIn qui font réagir le secteur, et qui apportent une utilité concrète à leurs lecteurs.",
              },
              {
                icon: Sparkles,
                tag: "Retombées médiatiques",
                title: "Un canal qui ouvre les portes des podcasts",
                desc: "La vraie retombée média, ça a surtout été LinkedIn comme porte d'entrée vers les podcasts du secteur. La visibilité créée par les prises de parole a directement servi à décrocher des invitations sur des émissions où Nicolas peut développer son discours en long format, et asseoir encore plus sa position d'expert.",
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

          <Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border bg-card p-4 shadow-[var(--shadow-soft)] flex items-center justify-center">
                <img
                  src={whatsapp1}
                  alt="Conversation WhatsApp : demande de rendez-vous d'un agent immobilier intéressé par le statut de mandataire LGM"
                  className="w-full max-w-sm rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl border bg-card p-4 shadow-[var(--shadow-soft)] flex items-center justify-center">
                <img
                  src={whatsapp2}
                  alt="Conversation WhatsApp avec Nicolas Markowicz : 8 RDV au total sur le mois pour en savoir plus sur le réseau LGM"
                  className="w-full max-w-sm rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ECOSYSTEME LGM */}
      <section className="px-6 py-20 border-t bg-surface">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Écosystème activé</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              LinkedIn nourrit aussi GrowUp Academy, Antoine et le livre
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Au-delà du recrutement, la traction LinkedIn alimente toute la galaxie LGM :
              l'académie de formation, l'agent IA interne, et le livre publié par Nicolas
              chez Amazon.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                tag: "GrowUp Academy",
                title: "Un flux entrant pour la formation",
                desc: "L'organisme de formation certifié de LGM bénéficie directement des contenus pédagogiques publiés par Nicolas : reconvertis, professionnels en montée en compétences et mandataires confirmés découvrent l'écosystème par LinkedIn.",
              },
              {
                icon: Bot,
                tag: "Antoine, Agent IA",
                title: "Une vitrine pour l'innovation LGM",
                desc: "Le lancement d'Antoine, IA conçue à partir de 8 ans de formations internes et 20 ans de terrain, a généré une vague de visibilité sur LinkedIn et positionne LGM comme le réseau le plus innovant du marché.",
              },
              {
                icon: BookOpen,
                tag: "Livre",
                title: "« 1098 euros et 30 centimes »",
                desc: "Le livre de Nicolas, publié sur Amazon, a été lancé directement auprès d'une audience LinkedIn déjà engagée. Une rampe de lancement organique qu'aucune campagne payante n'aurait permis de répliquer.",
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
                badge: "Opinion",
                title: "Non, le métier de mandataire n'est pas un « plan B »",
                excerpt:
                  "Pour ceux qui pensent que l'immobilier est un refuge pour les indécis : ce métier demande discipline, encaissement des refus, vision claire. Lancez-vous à 100 %, ou lâchez l'affaire.",
                impressions: 88200,
                reactions: 108,
                comments: 96,
              },
              {
                badge: "Storytelling",
                title: "À 21 ans, je gagnais 1098 euros et 30 centimes par mois",
                excerpt:
                  "20 ans plus tard, je dirige un réseau immobilier qui a généré +5 M€ de CA. J'ai mis tout ce que j'aurais voulu qu'on me dise dans un livre, sortie aujourd'hui sur Amazon.",
                impressions: 92400,
                reactions: 122,
                comments: 124,
              },
              {
                badge: "Pédagogie",
                title: "3 phrases qui vous coûtent un mandat en RDV",
                excerpt:
                  "« On verra plus tard pour le prix », « Je peux tout vous vendre », « Je m'occupe de tout »… Ce ne sont pas des gros arguments qui font la différence : ce sont les 3 mots de trop.",
                impressions: 84600,
                reactions: 96,
                comments: 88,
              },
              {
                badge: "Résultat",
                title: "+42 % de CA en 2025 pour les conseillers LGM",
                excerpt:
                  "Restructuration de la formation, incubateur interne, intelligence relationnelle, lancement de notre Agent IA Antoine, lives du mardi : voici le système qui a fait la différence.",
                impressions: 91000,
                reactions: 112,
                comments: 110,
              },
              {
                badge: "Innovation",
                title: "LGM lance Antoine, son propre Agent IA",
                excerpt:
                  "Antoine n'est pas un ChatGPT rebaptisé : c'est 8 ans de formations internes + 20 ans de terrain + toute la pédagogie LGM, intégrés dans un seul outil. Disponible 24h/24 pour nos conseillers.",
                impressions: 98300,
                reactions: 138,
                comments: 142,
              },
              {
                badge: "Storytelling",
                title: "Elle a tellement inspiré son mari qu'il a rejoint LGM",
                excerpt:
                  "Audrey arrive sur un dossier, écoute, identifie les objectifs, garde le cap quand c'est tendu. Son mari l'a observée travailler et a décidé de faire pareil. C'est l'esprit LGM.",
                impressions: 81800,
                reactions: 106,
                comments: 94,
              },
              {
                badge: "Carrousel",
                title: "5 signes que votre environnement de travail est toxique",
                excerpt:
                  "Boule au ventre le matin, remarques avalées, décisions injustes encaissées. Aucun salarié ne peut s'épanouir dans un cadre qui détruit sa confiance. Voici les 5 signes à identifier.",
                impressions: 86500,
                reactions: 116,
                comments: 102,
              },
              {
                badge: "Opinion",
                title: "En France, on adore détester ceux qui réussissent",
                excerpt:
                  "Les riches coupables par défaut, les ambitieux suspects. Pendant ce temps, on encense les retraites à 2 000 € grignotées par l'inflation. Vouloir gagner plus n'est pas un crime.",
                impressions: 79200,
                reactions: 92,
                comments: 138,
              },
              {
                badge: "Pédagogie",
                title: "Il m'a fallu 10 000 heures pour devenir un expert",
                excerpt:
                  "Et s'il y avait un raccourci, je ne l'aurais pas pris. Parce que sans ces 10 000 heures à galérer, je n'aurais pas mon plus gros avantage aujourd'hui : l'expérience.",
                impressions: 82700,
                reactions: 104,
                comments: 132,
              },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 50}>
                <PostCard
                  {...p}
                  authorPhoto={nicolasPhoto}
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
              Une croissance utile pour le recrutement de mandataires
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Une audience qui réagit aux sujets d'actualité du secteur immobilier,
              et qui rassemble exactement les profils que LGM cherche à attirer.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "5 000", l: "Abonnés au départ (oct. 2024)" },
              { v: "13 000", l: "Abonnés en fin de collab. (oct. 2025)" },
              { v: "+8 000", l: "Nouveaux abonnés en 12 mois" },
              { v: "×2,6", l: "Audience LinkedIn en 12 mois" },
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
                t: "Sortir du discours de vente, entrer dans la notoriété",
                d: "Le compte de Nicolas était trop axé sur la vente, et paradoxalement ne générait aucune vente ni candidature. On a renversé la logique : développer d'abord la notoriété, l'utilité et l'autorité, et laisser le recrutement venir comme une conséquence naturelle.",
              },
              {
                t: "Construire une ligne éditoriale autour de l'actualité du secteur",
                d: "Actualité immobilière, politique du logement, marché, taux, finances personnelles, économie française : des angles qui font réagir un maximum de gens et qui donnent à Nicolas une vraie utilité de prise de parole, au-delà du simple pitch LGM.",
              },
              {
                t: "Choisir les enjeux qui font réagir, pas ceux qui rassurent",
                d: "Sur LinkedIn, le contenu tiède ne sort plus. On a sélectionné chaque sujet en fonction de sa capacité à déclencher de l'engagement : réformes, fiscalité, pratiques du marché, transformations du métier. C'est ce qui a relancé la portée du compte.",
              },
              {
                t: "Garder le recrutement comme objectif final, jamais comme angle d'attaque",
                d: "Le recrutement de mandataires n'est jamais le sujet principal d'un post : c'est la destination naturelle pour le lecteur qui s'est reconnu dans la vision de Nicolas. La parole reste utile, le recrutement reste un effet de bord.",
              },
              {
                t: "Tenir la cadence sur 12 mois pleins",
                d: "D'octobre 2024 à octobre 2025, sans rupture, sans baisse de qualité. C'est ce qui fait passer un compte abandonné de 5 000 à 13 000 abonnés, et qui réinstalle Nicolas dans la conversation immobilière française.",
              },
              {
                t: "Une fin de mission honnête, et une suite",
                d: "Nicolas a souhaité mettre en pause cette ligne très personnelle dans le cadre d'un projet de valorisation de son entreprise, contexte dans lequel un branding personnel fort peut être perçu comme un point d'attention. Nous repartons aujourd'hui sur d'autres sujets ensemble, dans une logique différente.",
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


      {/* TESTIMONIAL FINAL */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-3xl border bg-card p-10 md:p-14 shadow-[var(--shadow-card)] relative">
              <Quote className="h-10 w-10 text-linkedin/20 absolute top-8 left-8" />
              <blockquote className="text-xl md:text-2xl leading-relaxed font-medium tracking-tight">
                « Excellent travail au quotidien. Fabien est un partenaire de choix,
                prêt à être absolument à vos côtés. Je le recommande vivement. »
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <img src={nicolasPhoto} alt={AUTHOR_NAME} className="h-12 w-12 rounded-full object-cover" />
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
