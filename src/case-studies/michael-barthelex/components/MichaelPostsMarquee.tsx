"use client";

const post1 = "/etudes/michael-barthelex/michael-posts/post-1.webp";
const post4 = "/etudes/michael-barthelex/michael-posts/post-4.webp";
const post5 = "/etudes/michael-barthelex/michael-posts/post-5.webp";
const post6 = "/etudes/michael-barthelex/michael-posts/post-6.webp";
const post7 = "/etudes/michael-barthelex/michael-posts/post-7.webp";
const post9 = "/etudes/michael-barthelex/michael-posts/post-9.webp";
const post10 = "/etudes/michael-barthelex/michael-posts/post-10.webp";

const posts = [post9, post1, post4, post5, post6, post7, post10];

export function MichaelPostsMarquee() {
  const loop = [...posts, ...posts];
  return (
    <section className="border-t bg-surface py-12 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-linkedin">Aperçu du contenu</p>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
          Quelques posts publiés sur LinkedIn
        </h2>
      </div>
      <div className="relative">
        <div className="flex gap-6 animate-marquee w-max">
          {loop.map((src, i) => (
            <div
              key={i}
              className="h-[380px] w-[304px] flex-shrink-0 overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-card)]"
            >
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
      </div>
    </section>
  );
}