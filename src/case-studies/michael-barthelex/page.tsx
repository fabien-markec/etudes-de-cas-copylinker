"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Users, CheckCircle2, Quote, BarChart3, Target, Megaphone, Filter, Repeat, Video, Mail, MousePointerClick } from "lucide-react";
import { Reveal } from "./components/Reveal";
import { MichaelGrowthChart } from "./components/MichaelGrowthChart";

import { MichaelPostsMarquee } from "./components/MichaelPostsMarquee";
const copylinkerLogo = "/etudes/michael-barthelex/copylinker.webp";
const logoLinkedIn = "/etudes/michael-barthelex/logo-linkedin.webp";
const michaelPhoto = "/etudes/michael-barthelex/michael.webp";
const fabienPhoto = "/etudes/michael-barthelex/fabien-peduzzi.webp";
const michaelSms = "/etudes/michael-barthelex/michael-sms.webp";


const CTA = "https://taap.it/lguFZ0Q";
const AUTHOR_NAME = "Michaël Barthelex";
const AUTHOR_ROLE = "DAF indépendant · Le Cost Killer";

export default function MichaelBarthelexPage() {
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
            <span className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-2 py-0.5 text-[11px] font-semibold tracking-tight text-background">
              <img src={logoLinkedIn} alt="LinkedIn" className="h-3.5 w-3.5 rounded-sm object-cover" />
              LinkedIn
            </span>
            Étude de cas · Accompagnement complet (Contenu + Acquisition + Conversion)
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Comment Michaël Barthelex a fait de LinkedIn son{" "}
            <span className="text-linkedin">premier canal d'acquisition</span> et signe entre 5 et 10 dirigeants par mois
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            À son arrivée chez CopyLinker, Michaël publiait sur LinkedIn sans ligne directrice et générait
            <strong> 10 000 impressions par mois</strong>. Son acquisition reposait exclusivement sur le BNI.
            En douze mois, ses abonnés ont été <strong>multipliés par 8</strong>, ses impressions
            <strong> multipliées par 7</strong>, et nous avons déployé un dispositif full-funnel (LinkedIn,
            webinaire mensuel, setting) qui génère entre 5 et 10 nouveaux clients dirigeants par mois.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <img src={logoLinkedIn} alt="LinkedIn" className="h-12 w-12 object-contain" />
              <p className="mt-3 text-2xl font-semibold tracking-tight">
                500 <span className="text-muted-foreground">→</span> 4 000
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Abonnés</p>
            </div>
            <div className="flex flex-col items-center">
              <BarChart3 className="h-12 w-12 text-linkedin" />
              <p className="mt-3 text-2xl font-semibold tracking-tight">
                10k <span className="text-muted-foreground">→</span> 70k
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Impressions / mois</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-12 w-12 text-linkedin" />
              <p className="mt-3 text-2xl font-semibold tracking-tight">870 000</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Impressions / 12 mois</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="h-12 w-12 text-linkedin" />
              <p className="mt-3 text-2xl font-semibold tracking-tight">5 à 10</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Dirigeants / mois</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border bg-card pl-2 pr-5 py-2 shadow-[var(--shadow-card)]">
              <img
                src={michaelPhoto}
                alt="Michaël Barthelex"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Michaël Barthelex</span>
                <span className="rounded-full bg-foreground px-2.5 py-0.5 text-xs font-medium text-background">
                  Le Cost Killer
                </span>
                <span className="text-muted-foreground hidden sm:inline">DAF indépendant · jusqu'à 30 000 €/an d'économies</span>
              </div>
            </div>
          </div>

          <MichaelPostsMarquee />

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

      {/* CONTEXTE */}
      <section className="px-6 py-16 border-t bg-surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Contexte</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Un canal d'acquisition unique, dépendant du BNI
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-muted-foreground">
            <Reveal delay={50}>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Le point de départ</p>
                <p className="mt-3 text-foreground">
                  Michaël comptait <strong>500 abonnés</strong> sur LinkedIn et publiait sans plan éditorial.
                  Résultat : <strong>10 000 impressions par mois</strong>, aucun client identifié sur ce canal,
                  et un pipeline <strong>entièrement dépendant du BNI</strong>. Pour un DAF indépendant souhaitant
                  développer son cabinet, cette dépendance représentait à la fois un risque et un plafond de croissance.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p>
                L'objectif ne se limitait pas à développer un compte LinkedIn. Il s'agissait de bâtir un
                <strong> système d'acquisition reproductible</strong>, capable de convertir la visibilité en
                rendez-vous qualifiés, puis en contrats signés.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">La nouvelle ligne éditoriale</p>
                <ul className="mt-3 space-y-3 text-foreground">
                  <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-linkedin flex-shrink-0 mt-0.5" /> Positionner Michaël comme « Le Cost Killer », l'expert qui permet aux entrepreneurs d'économiser jusqu'à 30 000 € par an sur l'URSSAF, les impôts et les charges fixes</li>
                  <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-linkedin flex-shrink-0 mt-0.5" /> Construire une identité de marque cohérente (positionnement, charte graphique, univers visuel) immédiatement identifiable</li>
                  <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-linkedin flex-shrink-0 mt-0.5" /> Documenter ses résultats clients avec des chiffres concrets plutôt que des conseils théoriques</li>
                  <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-linkedin flex-shrink-0 mt-0.5" /> Maintenir une cadence éditoriale régulière pour installer l'autorité dans la durée</li>
                  <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-linkedin flex-shrink-0 mt-0.5" /> Qualifier strictement les nouvelles connexions afin de préserver un réseau aligné avec la cible</li>
                  <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-linkedin flex-shrink-0 mt-0.5" /> Articuler le contenu avec un système d'acquisition aval : webinaire mensuel, newsletter de nurturing et setting LinkedIn</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KPI */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Résultats</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Les résultats obtenus
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: Users, label: "Abonnés LinkedIn qualifiés", value: "4 000" },
              { icon: TrendingUp, label: "Nouveaux abonnés en 12 mois", value: "+3 500" },
              { icon: BarChart3, label: "Impressions cumulées / an", value: "870 000" },
              { icon: BarChart3, label: "Impressions / mois (x7)", value: "70 000" },
              { icon: CheckCircle2, label: "Dirigeants signés / mois", value: "5 à 10" },
              { icon: Video, label: "Inscrits / présents en live", value: "~100 / ~30" },
            ].map((k, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] h-full">
                  <k.icon className="h-5 w-5 text-linkedin" />
                  <p className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">
                    {k.value}
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
              Une croissance maîtrisée sur 12 mois
            </h2>
            <p className="mt-3 text-muted-foreground">
              De 500 à 4 000 abonnés en douze mois, avec une qualification rigoureuse de la cible pour
              préserver la valeur commerciale du réseau.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)]">
              <MichaelGrowthChart />
            </div>
          </Reveal>
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
                t: "Construire un positionnement qui se reconnaît au premier scroll",
                d: "Nous avons clarifié le positionnement « Le Cost Killer » : un angle distinctif, un bénéfice chiffré (jusqu'à 30 000 € / an) et un univers visuel cohérent. Michaël ne se présente plus comme un consultant en optimisation parmi d'autres, il est identifié comme l'expert de référence sur sa cible.",
              },
              {
                t: "Documenter les résultats clients plutôt que théoriser",
                d: "Chaque publication s'appuie sur un cas client concret : Alice qui passe de 90 k€ à +50 % de net, Fabrice qui récupère 7 000 € via une redevance de marque, Valérie qui économise 13 300 € par an. Les chiffres remplacent les opinions, la preuve remplace la promesse.",
              },
              {
                t: "Filtrer le réseau pour préserver le pipeline",
                d: "Seuls les profils correspondant à la cible sont acceptés : dirigeants de TPE / PME, indépendants et partenaires prescripteurs. Le réseau est plus restreint que la moyenne, mais sensiblement plus qualifié sur le plan commercial.",
              },
              {
                t: "Brancher le contenu sur un funnel d'acquisition",
                d: "LinkedIn n'est pas exploité comme un canal isolé. Il alimente un webinaire mensuel (≈100 inscrits, ≈30 participants en direct, 3 à 5 conversions), une newsletter qui réactive les inscrits non convertis, et un dispositif de setting LinkedIn qui transforme commentaires et vues en rendez-vous qualifiés.",
              },
              {
                t: "Itérer sur ce qui convertit, couper ce qui ne convertit pas",
                d: "Chaque publication est évaluée non sur le seul engagement, mais sur sa contribution réelle au pipeline (inscriptions webinaire, demandes de rendez-vous, prises de contact). Les formats qui génèrent des clients dirigeants sont reconduits, les autres sont arbitrés.",
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

      {/* DISPOSITIF FULL-FUNNEL */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Dispositif full-funnel</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              LinkedIn → Webinaire → Setting → Signature
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Le contenu LinkedIn ne se limite pas à développer un compte. Il alimente un dispositif
              d'acquisition complet, opéré de bout en bout par CopyLinker.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              { icon: Megaphone, t: "Contenu LinkedIn", d: "Positionnement « Le Cost Killer », cadence éditoriale régulière, ligne orientée preuve client." },
              { icon: Video, t: "Webinaire mensuel", d: "Une session par mois, ≈100 inscrits, ≈30 participants en direct, 3 à 5 dirigeants signés par session." },
              { icon: MousePointerClick, t: "Setting LinkedIn", d: "Prospection sortante et qualification des prospects opérées par l'équipe CopyLinker." },
              { icon: Mail, t: "Newsletter de suivi", d: "Nurturing des inscrits non convertis afin de les réengager dans la durée." },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] h-full">
                  <div className="absolute -top-3 left-6 inline-flex h-6 w-6 items-center justify-center rounded-full bg-linkedin text-[11px] font-semibold text-linkedin-foreground">
                    {i + 1}
                  </div>
                  <s.icon className="h-6 w-6 text-linkedin" />
                  <h3 className="mt-4 font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="mt-12 flex justify-center">
              <img
                src={michaelSms}
                alt="Message de Michaël Barthelex : 6 prises de rendez-vous suite au webinaire"
                className="max-w-xs md:max-w-sm rounded-2xl border shadow-[var(--shadow-card)]"
              />
            </div>
            <p className="mt-10 text-center text-muted-foreground max-w-2xl mx-auto">
              L'ensemble fonctionne comme un cycle continu :
              <strong className="text-foreground"> le contenu attire</strong>,
              <strong className="text-foreground"> le webinaire convertit</strong>,
              <strong className="text-foreground"> la newsletter réengage</strong>,
              <strong className="text-foreground"> le setting accélère</strong>.
            </p>
          </Reveal>
        </div>
      </section>


      {/* TÉMOIGNAGE */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Témoignage</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Ce que Michaël en dit
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 rounded-2xl border bg-card p-8 md:p-10 shadow-[var(--shadow-card)]">
              <Quote className="h-8 w-8 text-linkedin mb-4" />
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground">
                Ça fait un an que je travaille avec Fabien et Gaëlle. Ils font du super boulot et n'hésitent
                pas à aller bien au-delà de la prestation initiale pour obtenir toujours plus de résultats.
                Je les recommande à 100%.
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={michaelPhoto}
                  alt="Michaël Barthelex, Le Cost Killer"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{AUTHOR_NAME}</p>
                  <p className="text-sm text-muted-foreground">{AUTHOR_ROLE}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-[#0b1325] text-white">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Vous souhaitez obtenir des résultats similaires pour votre entreprise ?
            </h2>
            <p className="mt-6 text-lg text-white/70">
              CopyLinker accompagne les dirigeants qui souhaitent faire de LinkedIn un véritable levier
              de croissance : contenu, acquisition et conversion.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex justify-center">
              <a
                href={CTA}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-[#0b1325] shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Réserver mon créneau <ArrowRight className="h-4 w-4" />
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