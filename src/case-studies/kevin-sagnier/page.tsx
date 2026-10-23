"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Sparkles, CheckCircle2, Quote, Network, BarChart3 } from "lucide-react";
import { Reveal } from "./components/Reveal";
import { KevinGrowthChart as GrowthChart } from "./components/KevinGrowthChart";
import { PostCard } from "./components/PostCard";
const copylinkerLogo = "/etudes/kevin-sagnier/copylinker.webp";
const logoLinkedIn = "/etudes/kevin-sagnier/logo-linkedin.webp";
const kevinPhoto = "/etudes/kevin-sagnier/kevin-sagnier.webp";
const fabienPhoto = "/etudes/kevin-sagnier/fabien-peduzzi.webp";
const topVoiceBadge = "/etudes/kevin-sagnier/top-voice.webp";
const kev1 = "/etudes/kevin-sagnier/kev-1.webp";
const kev2 = "/etudes/kevin-sagnier/kev-2.webp";
const kev3 = "/etudes/kevin-sagnier/kev-3.webp";
const kev4 = "/etudes/kevin-sagnier/kev-4.webp";
const kev5 = "/etudes/kevin-sagnier/kev-5.webp";
const kev6 = "/etudes/kevin-sagnier/kev-6.webp";
const kev7 = "/etudes/kevin-sagnier/kev-7.webp";
const kev8 = "/etudes/kevin-sagnier/kev-8.webp";

const MARQUEE_IMAGES = [kev1, kev2, kev3, kev4, kev5, kev6, kev7, kev8];


const CTA = "https://taap.it/lguFZ0Q";
const AUTHOR_NAME = "Kevin Sagnier";
const AUTHOR_ROLE = "Entrepreneur & Créateur de contenu";

export default function KevinSagnierPage() {
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
            Étude de cas · Accompagnement continu
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Comment Kevin Sagnier est passé de{" "}
            <span className="text-linkedin">2 500 à 12 000 abonnés</span> et a fait de LinkedIn un vrai canal de visibilité
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Quand Kevin nous a contactés, il plafonnait à <strong>5 000 impressions par semaine</strong> sur LinkedIn,
            sans ligne éditoriale claire. En quelques mois, nous avons construit une stratégie de personal branding
            qui l'a positionné comme une voix business de référence dans le monde de l'expertise comptable :
            <strong> 150 000 impressions par mois</strong>, 12 000 abonnés, et un statut Top Voice LinkedIn.
          </p>

          <div className="mt-10 flex flex-wrap items-start justify-center gap-10 sm:gap-16">
            <div className="flex flex-col items-center">
              <img src={logoLinkedIn} alt="LinkedIn" className="h-14 w-14 object-contain" />
              <p className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                2 500 <span className="text-muted-foreground">→</span> 12 000
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Abonnés LinkedIn</p>
            </div>
            <div className="flex flex-col items-center">
              <BarChart3 className="h-14 w-14 text-linkedin" />
              <p className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                5 000<span className="text-sm text-muted-foreground"> /sem</span>
                <span className="text-muted-foreground"> → </span>
                150 000<span className="text-sm text-muted-foreground"> /mois</span>
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Impressions</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={topVoiceBadge} alt="LinkedIn Top Voice" className="h-14 w-auto object-contain rounded-md" />
              <p className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">Top Voice</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Business · 2024-2025</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border bg-card pl-2 pr-5 py-2 shadow-[var(--shadow-card)]">
              <img
                src={kevinPhoto}
                alt="Kevin Sagnier"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Kevin Sagnier</span>
                <span className="rounded-full bg-foreground px-2.5 py-0.5 text-xs font-medium text-background">
                  Eurofiscalis
                </span>
                <span className="text-muted-foreground">Fondateur d'Eurofiscalis</span>
              </div>
            </div>
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

      {/* MARQUEE PHOTOS */}
      <section className="border-t bg-surface py-12 overflow-hidden">
        <div className="group relative">
          <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
            {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                className="h-64 w-auto flex-shrink-0 rounded-xl object-cover shadow-[var(--shadow-card)]"
              />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface to-transparent" />
        </div>
      </section>

      {/* CONTEXTE */}
      <section className="px-6 py-16 border-t bg-surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Contexte</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Un compte LinkedIn sous-exploité, malgré un bon potentiel
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-muted-foreground">
            <Reveal delay={50}>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Le point de départ</p>
                <p className="mt-3 text-foreground">
                  Kevin avait <strong>2 500 abonnés</strong> sur LinkedIn et publiait occasionnellement,
                  sans stratégie claire. Résultat : <strong>5 000 impressions par semaine</strong>, une
                  visibilité très limitée pour quelqu'un avec une vraie histoire à raconter. L'accompagnement
                  ne visait pas Eurofiscalis directement, mais le <strong>personal branding de Kevin</strong>.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p>
                Kevin a une anecdote forte : il est <strong>gérant d'un cabinet d'expertise comptable
                sans être lui-même expert-comptable</strong>. Son associé l'est, lui apporte le regard
                business, marketing et acquisition. L'objectif était de transformer LinkedIn en vrai canal
                de visibilité pour le positionner comme <strong>expert business et marketing du monde
                de l'expertise comptable</strong>.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-2xl border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">La nouvelle ligne éditoriale</p>
                <ul className="mt-3 space-y-2 text-foreground">
                  <li className="flex gap-2"><span className="text-linkedin">·</span> Axer sur ce que Kevin a mis en place dans son cabinet, pas sur la technique comptable</li>
                  <li className="flex gap-2"><span className="text-linkedin">·</span> Le positionner comme expert business & marketing dans le secteur</li>
                  <li className="flex gap-2"><span className="text-linkedin">·</span> Activer ses leviers personnels, notamment son frère jumeau, mis en avant dans le récit</li>
                  <li className="flex gap-2"><span className="text-linkedin">·</span> Une cadence régulière pour installer l'autorité dans la durée</li>
                  <li className="flex gap-2"><span className="text-linkedin">·</span> Une newsletter hebdomadaire dédiée aux professionnels du chiffre</li>
                  <li className="flex gap-2"><span className="text-linkedin">·</span> Une méthode documentée pour que Kevin puisse répliquer en interne ensuite</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Au bout d'un an, la méthode était installée et les chiffres avaient explosé. C'est à ce
                moment-là que <strong>le frère jumeau de Kevin a été embauché par le cabinet</strong> pour
                reprendre la création de contenu en interne, une transmission propre, sur des rails déjà
                tracés.
              </p>
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
              Des chiffres qui parlent
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: Users, label: "Abonnés LinkedIn", value: "12 000" },
              { icon: TrendingUp, label: "Nouveaux abonnés", value: "+9 500" },
              { icon: BarChart3, label: "Impressions / mois", value: "150 000" },
              { icon: Sparkles, label: "Distinction LinkedIn", value: "Top Voice" },
              { icon: Network, label: "Positionnement", value: "Expert business" },
              { icon: CheckCircle2, label: "Transmission interne", value: "Méthode répliquée" },
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
              Une croissance progressive et maîtrisée
            </h2>
            <p className="mt-3 text-muted-foreground">
              +9 500 abonnés LinkedIn en quelques mois, passant d'un compte quasi invisible à
              une audience engagée et qualifiée.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)]">
              <GrowthChart />
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
                t: "Structurer chaque post pour capter l'attention",
                d: "Sur LinkedIn, la bataille se joue en 2 secondes. Chaque post est construit avec un hook fort, une structure claire, et une fin qui invite à l'engagement. Résultat : le lecteur reste, lit, réagit.",
              },
              {
                t: "Trouver une voix authentique et identifiable",
                d: "On a travaillé à faire ressortir la personnalité de Kevin dans chaque publication. Pas de contenu générique, pas de copy-paste : une voix qui lui ressemble et qui crée de la reconnaissance.",
              },
              {
                t: "Choisir les angles qui font réagir",
                d: "Le contenu tiède ne sort plus. On sélectionne chaque sujet en fonction de sa capacité à déclencher de l'engagement : opinions, décryptages, expériences personnelles, questions qui divisent.",
              },
              {
                t: "Tenir une cadence régulière",
                d: "La visibilité sur LinkedIn est une question de régularité. En maintenant une cadence de publication soutenue et qualitative, on a transformé un compte fantôme en un compte incontournable.",
              },
              {
                t: "Mesurer et ajuster en continu",
                d: "Chaque publication est une occasion d'apprendre. On analyse les performances, on identifie ce qui fonctionne, et on ajuste la stratégie pour optimiser la portée et l'engagement.",
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

      {/* EXEMPLES DE POSTS */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Exemples</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Quelques posts produits pour Kevin
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Un aperçu de la ligne éditoriale mise en place : storytelling business, décryptages d'entrepreneurs et partages d'outils concrets.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal delay={0}>
              <PostCard
                authorPhoto={kevinPhoto}
                authorName="Kevin Sagnier"
                authorRole="Fondateur d'Eurofiscalis"
                badge="Top Voice business"
                title="On glorifie Elon Musk… mais Jeff Bezos a bâti le business le plus solide du siècle."
                excerpt="Ce week-end, je suis tombé sur un livre fascinant : « Les lettres de Jeff Bezos », un condensé de ses 14 lettres aux actionnaires de 1997 à aujourd'hui. Voici 11 principes à appliquer à ton business."
                impressions={458000}
                reactions={80}
                comments={40}
              />
            </Reveal>
            <Reveal delay={80}>
              <PostCard
                authorPhoto={kevinPhoto}
                authorName="Kevin Sagnier"
                authorRole="Fondateur d'Eurofiscalis"
                badge="Top Voice business"
                title="Jack Ma n'a que 4,8 % d'Alibaba. Elon Musk n'a que 20 % de Tesla. Et pourtant, ils sont tous milliardaires."
                excerpt="La richesse ne vient pas de ce que tu possèdes. Elle vient de l'écosystème que tu construis. Plus tu fais d'argent pour les autres, plus tu en fais pour toi."
                impressions={72000}
                reactions={948}
                comments={221}
              />
            </Reveal>
            <Reveal delay={160}>
              <PostCard
                authorPhoto={kevinPhoto}
                authorName="Kevin Sagnier"
                authorRole="Fondateur d'Eurofiscalis"
                badge="Top Voice business"
                title="Je te donne la liste des 25 outils que nous utilisons chez Eurofiscalis pour maximiser notre productivité."
                excerpt="Aujourd'hui, la compta, c'est bien plus que des chiffres. Création visuelle, communication, CRM, automatisation, organisation… voici notre stack complète."
                impressions={36000}
                reactions={487}
                comments={156}
              />
            </Reveal>
            <Reveal delay={240}>
              <PostCard
                authorPhoto={kevinPhoto}
                authorName="Kevin Sagnier"
                authorRole="Fondateur d'Eurofiscalis"
                badge="Top Voice business"
                title="Les cabinets d'expertise comptable qui réussissent n'ont qu'un secret → du boulot, des stratégies, et ces 4 piliers :"
                excerpt="On ne va pas se mentir : monter un cabinet d'expertise comptable rentable, ça demande du temps, des efforts et de la stratégie. Voici les 4 piliers indispensables que nous avons mis en place chez Eurofiscalis pour faire décoller notre CA."
                impressions={85000}
                reactions={60}
                comments={30}
              />
            </Reveal>
            <Reveal delay={320}>
              <PostCard
                authorPhoto={kevinPhoto}
                authorName="Kevin Sagnier"
                authorRole="Fondateur d'Eurofiscalis"
                badge="Top Voice business"
                title="On me demande souvent : “Kévin, comment tu fais pour n'accepter que des clients premiums” ?"
                excerpt="C'est simple, je mets de dessin à l'entrée. Les prospects comprennent tout seul. Bon week-end à tous."
                impressions={500156}
                reactions={1533}
                comments={62}
              />
            </Reveal>
            <Reveal delay={400}>
              <PostCard
                authorPhoto={kevinPhoto}
                authorName="Kevin Sagnier"
                authorRole="Fondateur d'Eurofiscalis"
                badge="Top Voice business"
                title="On m'a dit que créer un cabinet d'expertise comptable ex nihilo en misant sur le digital était une folie. 3 ans plus tard, notre cabinet affiche un CA de plus de 600K€."
                excerpt="Il y a environ trois ans, j'ai eu une discussion qui m'a profondément marqué avec mon ami expert-comptable, Denis Salomon. À l'époque, j'avais une idée en tête : créer un cabinet d'expertise comptable totalement ex nihilo, en misant sur la stratégie digitale."
                impressions={35000}
                reactions={78}
                comments={31}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* RETOMBÉES MÉDIATIQUES */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Retombées médiatiques</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Invité du podcast n°1 des pros du chiffre
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Kevin a été invité sur « Les Geek des Chiffres », le podcast n°1 en France pour
              les professionnels du chiffre.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <a
              href="https://www.youtube.com/watch?v=Rh-IabkxZF8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 block group relative overflow-hidden rounded-2xl border shadow-[var(--shadow-card)]"
            >
              <img
                src="https://img.youtube.com/vi/Rh-IabkxZF8/maxresdefault.jpg"
                alt="Kevin Sagnier invité du podcast Les Geek des Chiffres"
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform group-hover:scale-110">
                  <div className="ml-1 h-0 w-0 border-y-[14px] border-y-transparent border-l-[22px] border-l-[#0b1325]" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-semibold text-lg">Les Geek des Chiffres</p>
                <p className="text-white/80 text-sm">Podcast n°1 en France pour les pros du chiffre</p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>


      {/* TÉMOIGNAGE */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Témoignage</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Ce que Kevin en dit
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 rounded-2xl border bg-card p-8 md:p-10 shadow-[var(--shadow-card)]">
              <Quote className="h-8 w-8 text-linkedin mb-4" />
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground">
                J'ai décidé de travailler avec Fabien sur ma stratégie de création de contenu sur LinkedIn
                car j'aimais beaucoup ses posts. Je l'ai contacté, le feeling est très vite bien passé, puis
                on a directement avancé ensemble pour qu'il rédige mes posts LinkedIn. Il a une vraie patte,
                il sait de quoi il parle, le gars est bon. Je le recommande et je suis ravi de continuer à
                bosser avec lui. Merci pour ton travail et ton sérieux.
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={kevinPhoto}
                  alt="Kevin Sagnier, fondateur d'Eurofiscalis"
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
              Vous voulez le même type de résultats pour votre marque personnelle ?
            </h2>
            <p className="mt-6 text-lg text-white/70">
              CopyLinker accompagne les pros de la finance et de l'immobilier qui veulent faire
              de LinkedIn un vrai levier business.
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
