"use client";

const post1 = "/etudes/quentin-st-guilhem/squarimo-post-1.webp";
const post2 = "/etudes/quentin-st-guilhem/squarimo-post-2.webp";
const post3 = "/etudes/quentin-st-guilhem/squarimo-post-3.webp";
const post4 = "/etudes/quentin-st-guilhem/squarimo-post-4.webp";
const post5 = "/etudes/quentin-st-guilhem/squarimo-post-5.webp";
const post6 = "/etudes/quentin-st-guilhem/squarimo-post-6.webp";
const post7 = "/etudes/quentin-st-guilhem/squarimo-post-7.webp";
const post8 = "/etudes/quentin-st-guilhem/squarimo-post-8.webp";
const post9 = "/etudes/quentin-st-guilhem/squarimo-post-9.webp";
const post10 = "/etudes/quentin-st-guilhem/squarimo-post-10.webp";
const post11 = "/etudes/quentin-st-guilhem/squarimo-post-11.webp";
const post12 = "/etudes/quentin-st-guilhem/squarimo-post-12.webp";

const images = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11, post12];

export function PostsMarquee() {
  const loop = [...images, ...images];

  return (
    <section className="border-y bg-surface py-6" aria-label="Visuels de posts LinkedIn">
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex w-max gap-2 px-3">
          {loop.map((src, index) => (
            <figure
              key={`${src}-${index}`}
              className="w-[220px] flex-shrink-0 overflow-hidden rounded-lg border bg-card shadow-[var(--shadow-soft)] md:w-[260px]"
            >
              <img
                src={src}
                alt={`Visuel de post LinkedIn Squarimo ${index % images.length + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
      </div>
    </section>
  );
}
