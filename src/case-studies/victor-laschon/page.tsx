"use client";


import { ArrowRight, TrendingUp, Eye, Users, Sparkles, CheckCircle2, Quote, Mic } from "lucide-react";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { Reveal } from "./components/Reveal";
import { GrowthChart } from "./components/GrowthChart";
import { PostCard } from "./components/PostCard";
const victorPhoto = "/etudes/victor-laschon/victor.webp";
const datayoyoLogo = "/etudes/victor-laschon/datayoyo.webp";
const copylinkerLogo = "/etudes/victor-laschon/copylinker.webp";
const fabienPhoto = "/etudes/victor-laschon/fabien.webp";
const whatsappVictor = "/etudes/victor-laschon/whatsapp-victor.webp";
const geeksDesChiffres = "/etudes/victor-laschon/geeks-des-chiffres.webp";
const post1 = "/etudes/victor-laschon/post-1.webp";
const post2 = "/etudes/victor-laschon/post-2.webp";
const post3 = "/etudes/victor-laschon/post-3.webp";
const post4 = "/etudes/victor-laschon/post-4.webp";
const post5 = "/etudes/victor-laschon/post-5.webp";


const CTA = "https://taap.it/lguFZ0Q";

export default function VictorLaschonPage() {
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
      <section className="px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border bg-surface px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-linkedin" />
            Étude de cas · Datayoyo Saas dédié aux commissaires aux comptes et experts comptables
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Comment Victor Laschon est passé de{" "}
            <span className="text-muted-foreground">0</span> à{" "}
            <span className="text-linkedin">entre 2 et 5 RDV qualifiés</span> par semaine avec seulement{" "}
            <span className="text-linkedin">2 posts LinkedIn</span> hebdo
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Retour sur l'accompagnement de Victor, ancien commissaire aux comptes qui a
            transformé LinkedIn en véritable canal d'acquisition pour Datayoyo sans y passer ses journées.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex items-center gap-3 rounded-full border bg-card pl-2 pr-5 py-2 shadow-[var(--shadow-soft)]">
              <img src={victorPhoto} alt="Victor Laschon" className="h-10 w-10 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm font-semibold">Victor Laschon</p>
                <p className="text-xs text-muted-foreground">Co-fondateur Datayoyo</p>
              </div>
            </div>
            <span className="text-muted-foreground hidden sm:inline">×</span>
            <div className="hidden sm:flex items-center gap-2 rounded-full border bg-card px-4 py-2 shadow-[var(--shadow-soft)]">
              <img src={datayoyoLogo} alt="Datayoyo" className="h-6 w-6 rounded object-cover" />
              <span className="font-semibold text-sm">Datayoyo</span>
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
      <section className="pt-4 pb-12 overflow-hidden bg-surface">

        <div className="relative">
          <div className="flex gap-6 animate-marquee w-max">
            {[post1, post2, post3, post4, post5, post1, post2, post3, post4, post5].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Post LinkedIn Datayoyo ${(i % 5) + 1}`}
                className="h-80 md:h-96 w-auto rounded-2xl shadow-[var(--shadow-card)] object-cover"
              />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
        </div>
      </section>

      {/* CONTEXTE */}
      <section className="px-6 py-16 border-t bg-surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Contexte</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Un expert technique face à une audience exigeante</h2>
          </Reveal>
          <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-muted-foreground">
            <Reveal delay={100}>
              <p>
                Avant de travailler avec CopyLinker, Victor Laschon était un commissaire aux comptes reconnu mais
                discret sur LinkedIn. Co-fondateur de Datayoyo une solution d'audit du chiffre d'affaires assistée
                par IA il avait besoin d'un canal pour faire connaître son outil auprès de ses pairs.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                LinkedIn s'est imposé comme l'évidence : c'est là que se trouvent les associés de cabinets, les CAC,
                les directions financières. Encore fallait-il y prendre la parole avec justesse.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p>
                Le défi : vulgariser des sujets ultra-techniques (FEC, audit du CA, IA appliquée à la révision)
                auprès d'une audience par nature sceptique celle des commissaires aux comptes sans tomber dans
                la facilité ni perdre en crédibilité.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KPI */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Résultats · 6 mois</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Des chiffres vérifiés sur LinkedIn Analytics</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: TrendingUp, label: "Croissance d'abonnés", value: 145, prefix: "+", suffix: "%" },
              { icon: Eye, label: "Impressions cumulées", value: 428252 },
              { icon: Users, label: "Membres uniques touchés", value: 146426 },
              { icon: Sparkles, label: "Engagements générés", value: 5360 },
            ].map((k, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] h-full">
                  <k.icon className="h-5 w-5 text-linkedin" />
                  <p className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">
                    <AnimatedCounter value={k.value} prefix={k.prefix} suffix={k.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{k.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EARLY RESULTS */}
      <section className="px-6 py-20 border-t bg-surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Premiers signaux</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Des résultats dès le début de notre collaboration
            </h2>
            <p className="mt-3 text-muted-foreground">
              Deux semaines après le lancement, les premiers RDV tombaient déjà et les posts dépassaient
              les 10 000 impressions. Voici un extrait de notre conversation avec Victor.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex justify-center">
              <img
                src={whatsappVictor}
                alt="Conversation WhatsApp avec Victor : 3 RDV clients en 2 semaines, 10 000 impressions sur les premiers posts"
                className="max-w-md w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-12 rounded-2xl border bg-card p-8 md:p-10 shadow-[var(--shadow-soft)]">
              <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
                <img
                  src={geeksDesChiffres}
                  alt="Podcast Les Geeks des Chiffres"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover mx-auto md:mx-0"
                />
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linkedin/10">
                      <Mic className="h-5 w-5 text-linkedin" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Retombées média</p>
                  </div>
                  <h3 className="mt-4 text-xl md:text-2xl font-semibold tracking-tight">
                    Invité dans le podcast « Les Geeks des Chiffres »
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Grâce à ses publications sur LinkedIn, Victor a été invité dans <strong>« Les Geeks des Chiffres »</strong>,
                    le plus gros podcast de France dédié aux experts-comptables et commissaires aux comptes.
                    Une visibilité supplémentaire qui renforce son autorité dans la profession.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHART */}
      <section className="px-6 py-20 border-t">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Évolution</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Une croissance régulière, mois après mois
            </h2>
            <p className="mt-3 text-muted-foreground">Novembre 2025 → Mai 2026 · +2 776 abonnés LinkedIn</p>
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
                Résultat : LinkedIn a été mis en pause pendant deux mois, de janvier à mars 2026, le temps de reprendre la main.
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
                badge="Milestone"
                title="1 million de chiffre d'affaires Datayoyo"
                excerpt="Il y a 18 mois, Datayoyo n'existait pas. Aujourd'hui, on franchit la barre du million de CA. Retour sur ce qu'on a appris en construisant un outil d'audit assisté par IA pour les CAC…"
                impressions={18296}
                reactions={379}
                comments={32}
              />
            </Reveal>
            <Reveal delay={100}>
              <PostCard
                badge="Viral"
                title="Le cycle immo ? Donne-le au junior."
                excerpt="Combien de fois j'ai entendu ça en cabinet. Sauf que le cycle immo, c'est tout sauf simple. Et le confier au junior, c'est exactement ce qui crée les zones de risque que personne ne veut voir…"
                impressions={69000}
                reactions={812}
                comments={94}
              />
            </Reveal>
            <Reveal delay={150}>
              <PostCard
                title="Datayoyo retenu par l'INNEST, l'accélérateur de l'Ordre des Experts-Comptables"
                excerpt="C'est officiel : Datayoyo intègre la promotion 2025 de l'INNEST. Une reconnaissance forte de la profession pour un outil pensé par et pour les CAC…"
                impressions={7920}
                reactions={140}
                comments={18}
              />
            </Reveal>
            <Reveal delay={200}>
              <PostCard
                title="L'audit du chiffre d'affaires : pourquoi tout le monde s'y casse les dents"
                excerpt="Le CA, c'est le poste le plus regardé du compte de résultat. Et c'est aussi celui sur lequel les CAC passent le plus de temps à reconstituer manuellement les données…"
                impressions={8060}
                reactions={167}
                comments={24}
              />
            </Reveal>
            <Reveal delay={250}>
              <PostCard
                badge="Pédagogie"
                title="FEC : ce que 90% des CAC ne vérifient jamais (et qui devrait)"
                excerpt="Le Fichier des Écritures Comptables, on le télécharge, on le passe dans l'outil, on coche la case. Sauf qu'il y a 4 contrôles que la majorité des cabinets zappent encore aujourd'hui…"
                impressions={12450}
                reactions={241}
                comments={37}
              />
            </Reveal>
            <Reveal delay={300}>
              <PostCard
                badge="Opinion"
                title="L'IA ne va pas remplacer les CAC. Mais les CAC qui utilisent l'IA, oui."
                excerpt="On me pose la question toutes les semaines. Voici ma vraie réponse, après 6 mois à construire un outil d'IA pour la profession et à l'avoir mis entre les mains de dizaines de cabinets…"
                impressions={24180}
                reactions={467}
                comments={58}
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
              Les nouveaux abonnés correspondent exactement au profil cible de Datayoyo : des décideurs en cabinet
              parisien, expérimentés, dans la comptabilité.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "50%", l: "Profils Expérimentés" },
              { v: "48%", l: "Basés à Paris" },
              { v: "42%", l: "Secteur Comptabilité" },
              { v: "18%", l: "Cabinets 11–50 employés" },
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
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Méthode</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Notre approche CopyLinker</h2>
          </Reveal>
          <div className="mt-12 space-y-8">
            {[
              {
                t: "Personal branding fondé sur l'autorité métier",
                d: "Victor est CAC. C'est sa légitimité. On ne joue pas le rôle du gourou marketing : on capitalise sur l'expertise réelle, le terrain, les retours clients.",
              },
              {
                t: "Vulgarisation des sujets ultra-pointus",
                d: "FEC, audit du CA, IA appliquée à la révision : on rend ces sujets lisibles sans jamais perdre en précision. C'est ce qui crée la crédibilité auprès des pairs.",
              },
              {
                t: "Storytelling business intégré",
                d: "Chaque milestone Datayoyo (1M de CA, INNEST, signatures clients) devient un post pas une annonce promotionnelle, un récit. C'est ce qui transforme l'audience en pipeline.",
              },
              {
                t: "Cadence soutenue, qualité constante",
                d: "Une cadence régulière sur 6 mois sans baisse de qualité. C'est cette discipline éditoriale qui fait passer un compte de 2k à 4,7k abonnés qualifiés.",
              },
              {
                t: "Campagne de social warming LinkedIn",
                d: "On utilise nos outils pour liker et visiter le profil de l'avatar client cible afin de générer un maximum d'interactions avec eux et préparer le terrain avant toute prise de contact.",
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
                « En 6 mois, LinkedIn est devenu un vrai canal d'acquisition pour Datayoyo. Les chiffres sont là,
                mais surtout, les bonnes personnes me suivent celles à qui s'adresse notre outil. »
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <img src={victorPhoto} alt="Victor Laschon" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Victor Laschon</p>
                  <p className="text-sm text-muted-foreground">Co-fondateur Datayoyo · Commissaire aux comptes</p>
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
              Vous voulez le même type de résultats pour votre cabinet&nbsp;?
            </h2>
            <p className="mt-5 text-lg text-brand-foreground/70 max-w-xl mx-auto">
              CopyLinker accompagne les pros de la finance qui veulent faire de LinkedIn un vrai levier business.
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

      <footer className="px-6 py-10 text-center text-sm text-muted-foreground border-t" />
    </main>
  );
}
