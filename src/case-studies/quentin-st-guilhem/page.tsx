"use client";


import { ArrowRight, TrendingUp, Eye, Users, Sparkles, CheckCircle2, Quote, BarChart3 } from "lucide-react";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { Reveal } from "./components/Reveal";
import { GrowthChart } from "./components/GrowthChart";
import { PostCard } from "./components/PostCard";
const quentinPhoto = "/etudes/quentin-st-guilhem/quentin.webp";
const squarimoLogo = "/etudes/quentin-st-guilhem/squarimo.webp";
const fonciaLogo = "/etudes/quentin-st-guilhem/foncia.webp";
const megagenceLogo = "/etudes/quentin-st-guilhem/megagence.webp";
const mediaDansLoeil = "/etudes/quentin-st-guilhem/media-dans-loeil.webp";
const media6ter = "/etudes/quentin-st-guilhem/media-6ter.webp";
const mediaSudRadio = "/etudes/quentin-st-guilhem/media-sud-radio.webp";
const proofWhatsapp1 = "/etudes/quentin-st-guilhem/proof-whatsapp-1.webp";
const proofWhatsapp2 = "/etudes/quentin-st-guilhem/proof-whatsapp-2.webp";

const copylinkerLogo = "/etudes/quentin-st-guilhem/copylinker.webp";
const fabienPhoto = "/etudes/quentin-st-guilhem/fabien.webp";
import { PostsMarquee } from "./components/PostsMarquee";



const CTA = "https://taap.it/lguFZ0Q";

export default function QuentinStGuilhemPage() {
  return (
    <main className="bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <img src={copylinkerLogo} alt="CopyLinker" className="h-7 w-7 rounded-md object-cover" />
            <span className="font-semibold tracking-tight">CopyLinker</span>
            <span className="ml-2 text-xs text-muted-foreground hidden sm:inline">· Étude de cas</span>
          </div>
          <a
            href={CTA}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
          >
            Échanger <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pt-16 pb-4 md:pt-24 md:pb-6">
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border bg-surface px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-linkedin" />
            Étude de cas · Squarimo · La vente interactive immobilière inspirée des enchères
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Comment Quentin Saint Guilhem est devenu, avec Squarimo, le{" "}
            <span className="text-linkedin">n°1 de la vente interactive immobilière</span> sur LinkedIn
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Retour sur l'accompagnement de Quentin, co-fondateur de Squarimo, qui a transformé LinkedIn en
            canal d'acquisition direct auprès des directeurs d'agence immobilière, sans y passer ses journées.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex items-center gap-3 rounded-full border bg-card pl-2 pr-5 py-2 shadow-[var(--shadow-soft)]">
              <img src={quentinPhoto} alt="Quentin Saint Guilhem" className="h-10 w-10 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm font-semibold">Quentin Saint Guilhem</p>
                <p className="text-xs text-muted-foreground">Co-fondateur & CEO Squarimo</p>
              </div>
            </div>
            <span className="text-muted-foreground hidden sm:inline">×</span>
            <div className="hidden sm:flex items-center gap-2 rounded-full border bg-card pl-2 pr-4 py-2 shadow-[var(--shadow-soft)]">
              <img src={squarimoLogo} alt="Squarimo" className="h-7 w-7 rounded object-cover" />
              <span className="font-semibold text-sm">Squarimo</span>
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

      <PostsMarquee />

      {/* CONTEXTE */}
      <section className="px-6 py-16 border-t bg-surface">

        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Contexte</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Beaucoup de prospection, beaucoup d'efforts… et un contenu qui plafonnait
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-muted-foreground">
            <Reveal delay={100}>
              <p>
                Avant de collaborer avec CopyLinker, Quentin faisait déjà énormément de prospection sur
                LinkedIn. Le problème n'était pas l'engagement : c'était le contenu. Ses posts n'arrivaient
                plus à dépasser les 500 impressions. Plafond bas, traction nulle, aucun retour business.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                On est repartis de zéro. Tout a été restructuré : positionnement, lignes éditoriales,
                formats, cadence, ciblage. Aujourd'hui, ses posts tournent en moyenne entre 4 000 et 5 000
                impressions, et Squarimo s'est imposé comme le leader de la vente interactive en ligne.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p>
                Le défi : convaincre une profession attachée à ses méthodes que la vente interactive n'est
                pas une enchère brutale, mais un outil de transparence pour signer des mandats au prix juste
                sans braquer les vendeurs.
              </p>
            </Reveal>
          </div>
        </div>
      </section>


      {/* KPI */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Résultats · 1 an</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Des chiffres vérifiés sur LinkedIn Analytics</h2>
          </Reveal>
        </div>
        <div
          className="mt-12 relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="animate-marquee flex w-max gap-4">
            {[
              ...[
                { icon: TrendingUp, label: "Posts publiés en 1 an", value: 119 },
                { icon: Eye, label: "Impressions cumulées", value: 928150 },
                { icon: BarChart3, label: "Impressions / post en moyenne", value: 7800 },
                { icon: Users, label: "Membres uniques touchés", value: 652674 },
                { icon: Sparkles, label: "Engagements générés", value: 11212 },
              ],
              ...[
                { icon: TrendingUp, label: "Posts publiés en 1 an", value: 119 },
                { icon: Eye, label: "Impressions cumulées", value: 928150 },
                { icon: BarChart3, label: "Impressions / post en moyenne", value: 7800 },
                { icon: Users, label: "Membres uniques touchés", value: 652674 },
                { icon: Sparkles, label: "Engagements générés", value: 11212 },
              ],
            ].map((k, i) => (
              <div
                key={i}
                className="w-[260px] shrink-0 rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <k.icon className="h-5 w-5 text-linkedin" />
                <p className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">
                  <AnimatedCounter value={k.value} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{k.label}</p>
              </div>
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
              Une portée qui s'installe, mois après mois
            </h2>
            <p className="mt-3 text-muted-foreground">Sur 1 an d'accompagnement · 928 150 impressions cumulées sur 119 posts</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)]">
              <GrowthChart />
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 rounded-2xl border bg-card p-6 md:p-8 shadow-[var(--shadow-soft)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Anecdote</p>
              <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
                Quentin a un jour envisagé de supprimer une partie de ses dizaines de milliers de
                connexions LinkedIn, persuadé que les contacts inactifs (ceux qui ne voyaient jamais
                ses posts) plombaient sa portée. On l'en a dissuadé : on n'a touché à aucune
                connexion, on a juste retravaillé le contenu. Résultat, ce sont ces mêmes stats que
                vous voyez plus haut.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* POSTS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Top contenus</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Les posts qui ont fait la différence</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={50}>
              <PostCard
                badge="Top viral"
                title="Agent immobilier = Ouvrir des portes ?"
                excerpt="On va mettre les choses au clair dans ce post. Ça fait plus de 20 ans que je travaille dans le secteur de l'immobilier, que je côtoie et travaille régulièrement avec des agents immobiliers…"
                impressions={119985}
                reactions={1531}
                comments={146}
              />
            </Reveal>
            <Reveal delay={100}>
              <PostCard
                title="Mon voisin a vendu son bien 420 000 € alors que son terrain est plus petit que le mien"
                excerpt="« Je veux 420 000 € minimum, sinon je ne vends pas. » C'est ce que m'a dit un vendeur pour m'expliquer pourquoi son bien devait valoir 420 000 €. Comme celui de son voisin, vendu en 2022…"
                impressions={89640}
                reactions={318}
                comments={47}
              />
            </Reveal>
            <Reveal delay={150}>
              <PostCard
                badge="Référence"
                title="En 20 ans d'immobilier, j'ai tout vu : des crises, des booms, des taux à 1 % comme à 5 %"
                excerpt="Mais il y a une chose qui n'a jamais bougé. 70 % des transactions immobilières en France passent par un agent, et ce chiffre reste inchangé depuis mes débuts…"
                impressions={81229}
                reactions={453}
                comments={57}
              />
            </Reveal>
            <Reveal delay={200}>
              <PostCard
                badge="Storytelling"
                title="3 agents immobiliers en 11 mois. 1 offre. Le vendeur m'a dit : « Ils étaient tous nuls »"
                excerpt="J'ai regardé le prix qu'il voulait, et j'ai malheureusement compris. Cette histoire, c'est l'un de nos partenaires qui me l'a racontée il y a quelques semaines. Elle illustre tellement bien ce que vivent en silence beaucoup d'agents immobiliers…"
                impressions={67307}
                reactions={536}
                comments={134}
              />
            </Reveal>
            <Reveal delay={250}>
              <PostCard
                title="Vendeur : « Si ça ne part pas à mon prix, j'attendrai »"
                excerpt="Agent : [silence gêné, car il sait déjà ce qui va se passer]. Si vous êtes agent immobilier, vous avez déjà vécu cette scène des dizaines de fois…"
                impressions={50415}
                reactions={123}
                comments={70}
              />
            </Reveal>
            <Reveal delay={300}>
              <PostCard
                badge="Prise de position"
                title="Quelques pros de l'immobilier sont venus réagir à mes contenus, parfois de manière vive"
                excerpt="…pensant que je dénigre l'ensemble de leur profession. Si c'est ce que vous avez ressenti, je le regrette sincèrement. Mais soyons lucides…"
                impressions={43384}
                reactions={78}
                comments={28}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="px-6 py-20 border-t bg-surface">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Audience</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Une croissance qualifiée
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Les nouveaux abonnés correspondent exactement au profil cible de Squarimo : des décideurs en
              agence immobilière, expérimentés, capables de signer un partenariat.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "54%", l: "Directeurs & dirigeants d'agence" },
              { v: "62%", l: "Secteur Immobilier" },
              { v: "38%", l: "Île-de-France & grandes métropoles" },
              { v: "22%", l: "Réseaux 50+ agences" },
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

      {/* RETOMBÉES BUSINESS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Retombées business</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Deux contrats majeurs signés avec les leaders du marché
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
              Sur la partie agence immobilière, Quentin a signé deux contrats majeurs avec{" "}
              <span className="font-semibold text-foreground">Foncia</span> et{" "}
              <span className="font-semibold text-foreground">Megagence</span>. Deux références
              qui valident la traction de Squarimo auprès des plus grands réseaux français.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
              <div className="flex flex-col items-center gap-3">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full bg-card border shadow-[var(--shadow-soft)] flex items-center justify-center overflow-hidden">
                  <img src={fonciaLogo} alt="Foncia" className="h-16 md:h-20 w-auto object-contain" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Foncia</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full bg-card border shadow-[var(--shadow-soft)] flex items-center justify-center overflow-hidden">
                  <img src={megagenceLogo} alt="Megagence" className="h-14 md:h-16 w-auto object-contain" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Megagence</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RETOMBÉES MÉDIATIQUES */}
      <section className="px-6 py-20 border-t bg-surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Retombées médiatiques</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Une voix qui compte dans l'écosystème immobilier
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
              La traction LinkedIn a ouvert la porte aux médias spécialisés. Quentin est désormais
              invité régulièrement sur des podcasts et webinaires de référence pour les agences
              immobilières, parmi lesquels{" "}
              <span className="font-semibold text-foreground">Parlons Immo</span> et{" "}
              <span className="font-semibold text-foreground">6ster</span>.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-12 gap-4 md:gap-5">
            <Reveal delay={100} className="col-span-12 md:col-span-7">
              <figure className="group relative overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-card)] aspect-[16/10]">
                <img
                  src={mediaDansLoeil}
                  alt="Quentin Saint Guilhem invité du podcast Dans l'œil de l'immobilier par Aurélie Vadella"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/80">Podcast</p>
                  <p className="mt-1 text-base md:text-lg font-semibold text-white">Dans l'œil de l'immobilier · Aurélie Vadella</p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={200} className="col-span-12 md:col-span-5">
              <figure className="group relative overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-card)] h-full min-h-[220px]">
                <img
                  src={media6ter}
                  alt="Quentin Saint Guilhem dans l'émission Proprio à tout prix sur 6ter"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/80">TV · 6ter</p>
                  <p className="mt-1 text-base md:text-lg font-semibold text-white">Proprio à tout prix</p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={300} className="col-span-12">
              <figure className="group relative overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-card)] aspect-[21/9]">
                <img
                  src={mediaSudRadio}
                  alt="Quentin Saint Guilhem invité sur Sud Radio"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/80">Radio</p>
                  <p className="mt-1 text-base md:text-lg font-semibold text-white">Sud Radio</p>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="mt-12">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-linkedin text-center">Preuves terrain</p>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-center">
                Les retours qu'on reçoit en direct
              </h3>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Reveal delay={100}>
                <div className="overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-card)]">
                  <img
                    src={proofWhatsapp1}
                    alt="Échange WhatsApp : 140 000 impressions hier et ça va continuer de grimper"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-card)]">
                  <img
                    src={proofWhatsapp2}
                    alt="Statistiques LinkedIn : 5000 impressions en moyenne sur des posts techniques"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>




      {/* MÉTHODE */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Méthode</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Notre approche CopyLinker</h2>
          </Reveal>
          <div className="mt-12 space-y-8">
            {[
              {
                t: "Personal branding fondé sur 20 ans de terrain",
                d: "Quentin est un opérationnel : transaction, investissement, promotion. C'est sa légitimité. On ne joue pas le rôle du gourou marketing, on capitalise sur l'expertise réelle, les cas clients, les chiffres.",
              },
              {
                t: "Évangélisation de la vente interactive",
                d: "Prix libre, progressif, dégressif, FNTC, tiers de confiance numérique : on rend ces concepts limpides pour un directeur d'agence pressé, sans jamais perdre en précision juridique.",
              },
              {
                t: "Storytelling business intégré",
                d: "Chaque milestone Squarimo (1 400 pros formés, partenariats réseau, ventes signées) devient un post. Pas une annonce promotionnelle : un récit. C'est ce qui transforme l'audience en pipeline.",
              },
              {
                t: "Cadence soutenue, qualité constante",
                d: "Une cadence régulière maintenue sur 1 an, sans baisse de qualité. C'est cette discipline éditoriale qui fait passer un compte expert en référence du secteur.",
              },
              {
                t: "Écriture de scripts vidéo",
                d: "On accompagne aussi Quentin sur le format vidéo : rédaction complète des scripts, structure narrative, accroches et call-to-action. Résultat : 54 vidéos publiées en 1 an, qui amplifient la portée des posts texte et installent son visage comme référence du marché.",
              },
              {
                t: "Campagne de social warming LinkedIn",
                d: "On utilise nos outils pour liker et visiter les profils des avatars cibles (directeurs d'agence, têtes de réseau) afin de générer un maximum d'interactions et préparer le terrain avant toute prise de contact.",
              },
              {
                t: "Emailing hebdomadaire orienté conversion",
                d: "En complément du social, on active l'emailing de manière hebdomadaire, ajustée aux besoins du moment. Un levier qu'on a joué sur la partie conversion : transformer l'audience chauffée sur LinkedIn en rendez-vous et en ventes signées.",
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
      <section className="px-6 py-20 border-t bg-surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-3xl border bg-card p-10 md:p-14 shadow-[var(--shadow-card)] relative">
              <Quote className="h-10 w-10 text-linkedin/20 absolute top-8 left-8" />
              <blockquote className="text-xl md:text-2xl leading-relaxed font-medium tracking-tight">
                « Merci à Fabien et Emersson pour leur accompagnement. Je publiais déjà sur LinkedIn de
                mon côté, mais je n'arrivais plus à rien et mentalement c'était compliqué de gérer
                mon activité <em>et</em> LinkedIn, qui prend du temps. Finalement, dès la
                troisième semaine, on a fait un post à plus de 100 000 impressions. Chose que je
                pensais impossible avant de travailler avec eux. »
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <img src={quentinPhoto} alt="Quentin Saint Guilhem" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Quentin Saint Guilhem</p>
                  <p className="text-sm text-muted-foreground">Co-fondateur & CEO Squarimo</p>
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
              Vous voulez le même type de résultats pour votre réseau&nbsp;?
            </h2>
            <p className="mt-5 text-lg text-brand-foreground/70 max-w-xl mx-auto">
              CopyLinker accompagne les pros de l'immobilier et de la finance qui veulent faire de LinkedIn un
              vrai levier business.
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
                <p className="text-xs text-brand-foreground/60">Dirigeant CopyLinker</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
