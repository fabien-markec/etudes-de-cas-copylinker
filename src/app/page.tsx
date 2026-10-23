import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/case-studies";

const CTA = "https://taap.it/lguFZ0Q";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/copylinker.webp" alt="CopyLinker" className="h-7 w-7 rounded-md object-cover" />
            <span className="font-semibold tracking-tight">CopyLinker</span>
            <span className="ml-2 hidden text-xs text-muted-foreground sm:inline">· Études de cas</span>
          </Link>
          <a
            href={CTA}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
          >
            Échanger <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <section className="px-6 pt-16 pb-12 md:pt-24">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Études de cas</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Ce que LinkedIn a changé pour <span className="text-linkedin">nos clients</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Abonnés, impressions, rendez-vous, signatures : 8 accompagnements CopyLinker racontés chiffres à l'appui.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((s) => (
            <Link
              key={s.slug}
              href={`/etudes/${s.slug}`}
              className="group flex flex-col rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <img src={s.photo} alt={s.client} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold">{s.client}</p>
                  <p className="text-xs text-muted-foreground">{s.company}</p>
                </div>
              </div>
              <h2 className="mt-6 text-xl font-semibold leading-snug tracking-tight">{s.headline}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-linkedin">
                Lire l'étude
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
