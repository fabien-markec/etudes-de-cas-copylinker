"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Sparkles, CheckCircle2, Palette, BarChart3, Mic, Newspaper, Briefcase } from "lucide-react";
import { Reveal } from "./components/Reveal";
import { MehdiGrowthChart as GrowthChart } from "./components/MehdiGrowthChart";
const copylinkerLogo = "/etudes/mehdi-saoud/copylinker.webp";
const logoLinkedIn = "/etudes/mehdi-saoud/logo-linkedin.webp";
const mehdiPhoto = "/etudes/mehdi-saoud/mehdi-saoud.webp";
const fabienPhoto = "/etudes/mehdi-saoud/fabien-peduzzi.webp";
const gallery1 = "/etudes/mehdi-saoud/mehdi-gallery-1.webp";
const gallery2 = "/etudes/mehdi-saoud/mehdi-gallery-2.webp";
const gallery3 = "/etudes/mehdi-saoud/mehdi-gallery-3.webp";
const gallery4 = "/etudes/mehdi-saoud/mehdi-gallery-4.webp";
const gallery5 = "/etudes/mehdi-saoud/mehdi-gallery-5.webp";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];


const CTA = "https://taap.it/lguFZ0Q";
const LINKEDIN_URL = "https://www.linkedin.com/in/mehdi-saoud/";

export default function MehdiSaoudPage() {
  return (
    <main className="bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src={copylinkerLogo} alt="CopyLinker" className="h-7 w-7 rounded-md object-cover" />
            <span className="font-semibold tracking-tight">CopyLinker</span>
            <span className="ml-2 text-xs text-muted-foreground hidden sm:inline">· Étude de cas Mehdi Saoud</span>
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
            <span className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-2 py-0.5 text-[11px] font-semibold tracking-tight text-background">
              <img src={logoLinkedIn} alt="LinkedIn" className="h-3.5 w-3.5 rounded-sm object-cover" />
              LinkedIn
            </span>
            Étude de cas · Accompagnement stratégique
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Mehdi Saoud - <span className="text-linkedin">le DAF qui casse les codes</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comment on a aidé Mehdi à transformer LinkedIn en levier business pour ses deux casquettes :
            <strong> DAF chez LiveMentor</strong> et <strong>cofondateur de startDAF</strong>.
          </p>

          <div className="mt-10 flex flex-wrap items-start justify-center gap-10 sm:gap-16">
            <div className="flex flex-col items-center">
              <img src={logoLinkedIn} alt="LinkedIn" className="h-14 w-14 object-contain" />
              <p className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">25 594</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Abonnés LinkedIn</p>
            </div>
            <div className="flex flex-col items-center">
              <BarChart3 className="h-14 w-14 text-linkedin" />
              <p className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                50 000<span className="text-sm text-muted-foreground"> /sem</span>
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Impressions</p>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="h-14 w-14 text-linkedin" />
              <p className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">3</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Rubriques signature</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border bg-card pl-2 pr-5 py-2 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
            >
              <img src={mehdiPhoto} alt="Mehdi Saoud" className="h-10 w-10 rounded-full object-cover" />
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Mehdi Saoud</span>
                <span className="rounded-full bg-foreground px-2.5 py-0.5 text-xs font-medium text-background">
                  LiveMentor · startDAF
                </span>
                <span className="text-muted-foreground hidden sm:inline">HEC Paris · Paris</span>
              </div>
            </a>
          </div>

          <div className="mt-6">
            <a
              href={CTA}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-brand-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
            >
              Échanger sur votre projet <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY MARQUEE */}
      <section className="border-t bg-background py-2 overflow-hidden">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max gap-5 animate-marquee">
            {[...galleryImages, ...galleryImages].map((src, i) => (
              <div
                key={i}
                className="h-52 w-40 md:h-64 md:w-48 flex-shrink-0 overflow-hidden rounded-lg bg-card ring-1 ring-border shadow-[var(--shadow-soft)]"
              >
                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
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
              Le point de départ : début 2025
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-muted-foreground">
            <Reveal delay={50}>
              <p>
                Mehdi n'est pas parti de zéro. Il publiait déjà sur LinkedIn et performait
                historiquement bien. Mais il avait <strong>deux problèmes concrets</strong>.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Problème n°1</p>
                <p className="mt-3 text-foreground">
                  <strong>Une perte de visibilité</strong> avec ses nouveaux concepts. Ses posts ne sortaient
                  plus, son audience décrochait.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Problème n°2</p>
                <p className="mt-3 text-foreground">
                  Une vraie difficulté à <strong>jongler entre ses deux casquettes</strong> : DAF en interne
                  chez LiveMentor (école pour entrepreneurs n°1 en France, +30 000 projets accompagnés) ET
                  cofondateur de startDAF (cabinet de DAF à temps partagé, une dizaine de collaborateurs).
                  Deux entreprises, deux enjeux, deux cibles.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Il avait aussi une volonté forte : <strong>casser les codes du DAF "un peu chiant"</strong>,
                qui colle parfaitement avec l'esprit LiveMentor.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ACCOMPAGNEMENT vs GHOSTWRITING */}
      <section className="px-6 py-16 border-t">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Notre rôle</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Un accompagnement, pas du ghostwriting
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Mehdi voulait <strong className="text-foreground">garder la plume</strong>. Sa voix, son
              style, son humour piquant - c'est ce qui le rend reconnaissable. L'objectif :
              <strong className="text-foreground"> structurer la stratégie sans toucher à l'écriture</strong>.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border bg-card p-5">
                <p className="text-sm font-semibold text-linkedin">Ce qu'on fait</p>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  <li>· Stratégie LinkedIn</li>
                  <li>· Brainstorm de concepts</li>
                  <li>· Idées de contenu et de hooks</li>
                  <li>· Direction artistique</li>
                </ul>
              </div>
              <div className="rounded-2xl border bg-surface p-5">
                <p className="text-sm font-semibold text-muted-foreground">Ce qu'on ne fait pas</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>· Rédaction des posts</li>
                  <li>· Production à sa place</li>
                  <li>· Imposer un style</li>
                  <li>· Cadence forcée</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LIGNE EDITORIALE */}
      <section className="px-6 py-20 border-t bg-surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">La stratégie construite ensemble</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              La nouvelle ligne éditoriale
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-10 space-y-4">
              {[
                "Casser les codes du DAF en interne, jouer la posture « pas prise de tête »",
                "Articuler la double casquette LiveMentor (interne) + startDAF (externe) sans les opposer",
                "Construire des concepts reconnaissables, propriétaires, qui reviennent en rendez-vous chaque semaine",
                "Une direction artistique forte, inspirée du style GTA (cartouches, couleurs vives, typo affirmée)",
                "Une présence multi-canal : LinkedIn comme base, Instagram et YouTube comme prolongements",
                "Un accompagnement à la demande : pas de cadence imposée, ultra-personnalisé selon les besoins du moment",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 rounded-xl border bg-card p-4">
                  <CheckCircle2 className="h-5 w-5 text-linkedin flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CONCEPTS */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Le cœur du travail</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Des concepts qui reviennent, qui marquent, qu'on reconnaît
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Le gros sujet de l'accompagnement, ça a été le <strong>brainstorming de concepts</strong>. Des
              formats récurrents, identifiables, que l'audience attend. Plutôt que des posts isolés qui
              s'oublient, on a construit avec Mehdi <strong>trois rubriques signature</strong> qui
              structurent désormais sa présence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3 RUBRIQUES SIGNATURE */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-linkedin">
              Les 3 rubriques structurées ensemble
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* TALK SHOW */}
            <Reveal delay={0}>
              <div className="rounded-2xl border bg-card overflow-hidden shadow-[var(--shadow-card)] h-full flex flex-col">
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[#1a1033] via-[#2d0b4e] to-[#ff1e8e] p-5 flex flex-col justify-between text-white overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255,255,255,0.08) 12px, rgba(255,255,255,0.08) 13px)" }} />
                  <div className="relative">
                    <span className="inline-block bg-[#ffd400] text-black text-[10px] font-black px-2 py-1 tracking-widest">EP. 05</span>
                    <h3 className="mt-4 text-3xl font-black italic leading-none drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]">
                      TALK SHOW
                    </h3>
                    <p className="text-2xl font-black italic leading-none text-[#ffd400] drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]">
                      QUI COMPTE
                    </p>
                  </div>
                  <div className="relative">
                    <Mic className="h-10 w-10 mb-2" />
                    <p className="text-xs font-bold uppercase tracking-wider">Live LinkedIn · 45 min</p>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Lives LinkedIn avec invités</p>
                  <h4 className="mt-2 font-bold text-lg">Le Talk Show qui Compte</h4>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Format long de 30–45 min où Mehdi reçoit un invité expert pour décortiquer un sujet
                    finance (cession d'entreprise, valorisation, levée de fonds…). <strong>Cinq épisodes
                    diffusés à date.</strong>
                  </p>
                </div>
              </div>
            </Reveal>

            {/* MERCATO */}
            <Reveal delay={120}>
              <div className="rounded-2xl border bg-card overflow-hidden shadow-[var(--shadow-card)] h-full flex flex-col">
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[#00b66e] via-[#007a4d] to-[#003d27] p-5 flex flex-col justify-between text-white overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(255,255,255,0.08) 12px, rgba(255,255,255,0.08) 13px)" }} />
                  <div className="relative">
                    <span className="inline-block bg-white text-[#00b66e] text-[10px] font-black px-2 py-1 tracking-widest">TOP 5</span>
                    <h3 className="mt-4 text-3xl font-black italic leading-none drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]">
                      LE MERCATO
                    </h3>
                    <p className="text-2xl font-black italic leading-none text-[#ffd400] drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]">
                      QUI COMPTE
                    </p>
                  </div>
                  <div className="relative space-y-1.5 text-xs font-bold">
                    <p>① DAF - Licorne Society</p>
                    <p>② RAF - Les Arts Décoratifs</p>
                    <p>③ Controlling - So Villas</p>
                    <p>④ FP&A - Withings</p>
                    <p>⑤ Treasury - Carrefour</p>
                  </div>
                  <div className="relative">
                    <Briefcase className="h-9 w-9" />
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Top 5 des jobs Finance, chaque semaine</p>
                  <h4 className="mt-2 font-bold text-lg">Le Mercato qui Compte</h4>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Carrousel hebdo <em>« 1 semaine, 5 jobs, 1 opportunité pour toi »</em>. Format
                    reconnaissable, chiffres numérotés, visuels GTA. Devenu un <strong>rendez-vous
                    attendu</strong> pour les pros de la Finance qui cherchent à bouger.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* ACTU */}
            <Reveal delay={240}>
              <div className="rounded-2xl border bg-card overflow-hidden shadow-[var(--shadow-card)] h-full flex flex-col">
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[#ff5a1f] via-[#c8102e] to-[#5a0517] p-5 flex flex-col justify-between text-white overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255,255,255,0.08) 12px, rgba(255,255,255,0.08) 13px)" }} />
                  <div className="relative">
                    <span className="inline-block bg-black text-white text-[10px] font-black px-2 py-1 tracking-widest">S. 21 · 2026</span>
                    <h3 className="mt-4 text-3xl font-black italic leading-none drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]">
                      L'ACTU
                    </h3>
                    <p className="text-2xl font-black italic leading-none text-[#ffd400] drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]">
                      QUI COMPTE
                    </p>
                  </div>
                  <div className="relative space-y-1.5 text-xs font-bold uppercase">
                    <p>① Hausse des taux BCE</p>
                    <p>② M&A : record 2026</p>
                    <p>③ IFRS : nouveau standard</p>
                  </div>
                  <div className="relative">
                    <Newspaper className="h-9 w-9" />
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Récap actu finance, format court</p>
                  <h4 className="mt-2 font-bold text-lg">L'Actu qui Compte</h4>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    <em>« 1 semaine, 1 résumé, 1 vision claire. »</em> Top 3 des actus financières
                    marquantes, vulgarisées. Pour ceux qui veulent suivre l'actu finance
                    <strong> sans y passer leur dimanche</strong>.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHART */}
      <section className="px-6 py-20 border-t bg-surface">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Évolution</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Une remontée rapide après une période de perte de visibilité
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)]">
              <GrowthChart />
            </div>
          </Reveal>
        </div>
      </section>

      {/* RÉSULTATS */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Résultats</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Les résultats</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: TrendingUp, value: "Remontée rapide", label: "Après une période de perte de visibilité" },
              { icon: BarChart3, value: "50 000+", label: "Impressions par semaine" },
              { icon: Users, value: "25 594", label: "Abonnés LinkedIn" },
              { icon: Sparkles, value: "Instagram + YouTube", label: "Présence prolongée avec les mêmes codes" },
              { icon: Palette, value: "Marqueurs identitaires", label: "Mercato, Talk Show, Actu - reconnaissables sans le nom" },
              { icon: CheckCircle2, value: "Double casquette", label: "LiveMentor + startDAF articulés" },
            ].map((k, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] h-full">
                  <k.icon className="h-5 w-5 text-linkedin" />
                  <p className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight">{k.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{k.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS LINKEDIN */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Posts LinkedIn</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Des hooks qui accrochent
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={0}>
              <div className="rounded-2xl border bg-card p-5 shadow-[var(--shadow-card)] h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <img src={mehdiPhoto} alt="Mehdi Saoud" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Mehdi Saoud</p>
                    <p className="text-[11px] text-muted-foreground">DAF @ LiveMentor · Cofondateur startDAF</p>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-[1.6] text-foreground font-medium">
                  "Les DAF ont en moyenne 2 ans avant d'être remplacés. Et beaucoup ne savent pas que le chrono a déjà démarré."
                </p>
                <div className="mt-auto pt-5 flex items-center gap-4 text-sm text-muted-foreground border-t">
                  <span className="font-medium text-foreground">82 likes</span>
                  <span>15 000 impressions</span>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-linkedin hover:underline font-medium text-xs"
                  >
                    Voir →
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-2xl border bg-card p-5 shadow-[var(--shadow-card)] h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <img src={mehdiPhoto} alt="Mehdi Saoud" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Mehdi Saoud</p>
                    <p className="text-[11px] text-muted-foreground">DAF @ LiveMentor · Cofondateur startDAF</p>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-[1.6] text-foreground font-medium">
                  "Aujourd'hui j'ai 38 ans. Et plutôt que de te faire un post inspirationnel sur 38 leçons de vie, j'ai décidé de t'embarquer dans les profondeurs de la Finance."
                </p>
                <div className="mt-auto pt-5 flex items-center gap-4 text-sm text-muted-foreground border-t">
                  <span className="font-medium text-foreground">47 likes</span>
                  <span>10 000 impressions</span>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-linkedin hover:underline font-medium text-xs"
                  >
                    Voir →
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-2xl border bg-card p-5 shadow-[var(--shadow-card)] h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <img src={mehdiPhoto} alt="Mehdi Saoud" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Mehdi Saoud</p>
                    <p className="text-[11px] text-muted-foreground">DAF @ LiveMentor · Cofondateur startDAF</p>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-[1.6] text-foreground font-medium">
                  "J'ai passé 10 ans à croire que la Finance était un monde de chiffres froids. J'avais tort."
                </p>
                <div className="mt-auto pt-5 flex items-center gap-4 text-sm text-muted-foreground border-t">
                  <span className="font-medium text-foreground">63 likes</span>
                  <span>12 000 impressions</span>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-linkedin hover:underline font-medium text-xs"
                  >
                    Voir →
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="rounded-2xl border bg-card p-5 shadow-[var(--shadow-card)] h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <img src={mehdiPhoto} alt="Mehdi Saoud" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Mehdi Saoud</p>
                    <p className="text-[11px] text-muted-foreground">DAF @ LiveMentor · Cofondateur startDAF</p>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-[1.6] text-foreground font-medium">
                  "On m'a demandé mon salaire en entretien. J'ai répondu une question à la place. J'ai eu le post."
                </p>
                <div className="mt-auto pt-5 flex items-center gap-4 text-sm text-muted-foreground border-t">
                  <span className="font-medium text-foreground">156 likes</span>
                  <span>32 000 impressions</span>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-linkedin hover:underline font-medium text-xs"
                  >
                    Voir →
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="rounded-2xl border-2 border-linkedin/40 bg-card p-5 shadow-[var(--shadow-card)] h-full flex flex-col relative">
                <span className="absolute -top-2.5 right-4 rounded-full bg-linkedin px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Viral</span>
                <div className="flex items-center gap-3">
                  <img src={mehdiPhoto} alt="Mehdi Saoud" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Mehdi Saoud</p>
                    <p className="text-[11px] text-muted-foreground">DAF @ LiveMentor · Cofondateur startDAF</p>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-[1.6] text-foreground font-medium">
                  "Un DAF coûte 120k€/an. Un cabinet à temps partagé : 3 fois moins. Voici pourquoi 80% des startups se trompent encore."
                </p>
                <div className="mt-auto pt-5 flex items-center gap-4 text-sm text-muted-foreground border-t">
                  <span className="font-medium text-foreground">312 likes</span>
                  <span>68 000 impressions</span>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-linkedin hover:underline font-medium text-xs"
                  >
                    Voir →
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="rounded-2xl border-2 border-linkedin/40 bg-card p-5 shadow-[var(--shadow-card)] h-full flex flex-col relative">
                <span className="absolute -top-2.5 right-4 rounded-full bg-linkedin px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Viral</span>
                <div className="flex items-center gap-3">
                  <img src={mehdiPhoto} alt="Mehdi Saoud" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Mehdi Saoud</p>
                    <p className="text-[11px] text-muted-foreground">DAF @ LiveMentor · Cofondateur startDAF</p>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-[1.6] text-foreground font-medium">
                  "J'ai refusé une levée de 5M€. Mon board m'a pris pour un fou. 18 mois plus tard, ils me remerciaient."
                </p>
                <div className="mt-auto pt-5 flex items-center gap-4 text-sm text-muted-foreground border-t">
                  <span className="font-medium text-foreground">487 likes</span>
                  <span>92 000 impressions</span>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-linkedin hover:underline font-medium text-xs"
                  >
                    Voir →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MODALITÉS */}
      <section className="px-6 py-20 border-t bg-surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Modalités</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Comment on l'accompagne
            </h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {[
              { t: "Call hebdo / mensuel sur demande", d: "En fonction des besoins du moment, pas de cadence imposée." },
              { t: "Ultra-personnalisé", d: "On ne plaque pas une méthode, on s'adapte au rythme et aux priorités de Mehdi." },
              { t: "Brainstorming continu", d: "Sur les concepts récurrents et les nouvelles rubriques à tester." },
              { t: "Idées de contenu et de hooks", d: "Des angles, des accroches, des sujets - Mehdi garde la plume." },
              { t: "Direction artistique", d: "Visuels signature style GTA construits sur mesure pour chaque rubrique." },
            ].map((m, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex gap-4 rounded-xl border bg-card p-5">
                  <CheckCircle2 className="h-5 w-5 text-linkedin flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{m.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.d}</p>
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
            <div className="rounded-2xl border bg-card p-8 md:p-10 relative">
              <div className="absolute -top-4 left-8 text-6xl text-linkedin/20 font-serif leading-none">"</div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={mehdiPhoto}
                  alt="Mehdi Saoud"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-linkedin/20"
                />
                <div>
                  <p className="font-semibold">Mehdi Saoud</p>
                  <p className="text-sm text-muted-foreground">DAF LiveMentor · Cofondateur startDAF</p>
                </div>
              </div>
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed relative z-10">
                Merci à Fabien Peduzzi pour son accompagnement !
                En quelques échanges, il a su clarifier ma stratégie et me donner des conseils actionnables qui font vraiment la différence.
                Clair, concret, efficace, tout ce que j'aime donc je recommande à 200 %.
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-[#0b1325] text-white">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Vous voulez ce type de stratégie pour votre marque personnelle ?
            </h2>
            <p className="mt-6 text-lg text-white/70">
              CopyLinker accompagne les pros qui veulent faire de LinkedIn un vrai levier business -
              en gardant leur plume.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex justify-center">
              <a
                href={CTA}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-[#0b1325] shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Échanger <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-12 flex items-center justify-center gap-4">
              <img
                src={fabienPhoto}
                alt="Fabien Peduzzi, dirigeant CopyLinker"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20"
              />
              <div className="text-left">
                <p className="font-semibold text-white">Fabien Peduzzi</p>
                <p className="text-sm text-white/60">Dirigeant CopyLinker</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
