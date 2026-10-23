// Porte les études de cas Lovable (TanStack Start) vers des pages Next.js.
// Usage : node scripts/port-lovable.mjs <dossier du repo lovable>
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = path.resolve(process.argv[2]);
const ROOT = path.resolve(import.meta.dirname, "..");

const STUDIES = {
  fredericmoreau: "frederic-moreau",
  kevinsagnier: "kevin-sagnier",
  mehdisaoud: "mehdi-saoud",
  michaelbarthelex: "michael-barthelex",
  nicolasmarkowicz: "nicolas-markowicz",
  quentinstguilhem: "quentin-st-guilhem",
  tatianagarcia: "tatiana-garcia",
  etudevictorlaschon: "victor-laschon",
};

const pascal = (s) => s.split("-").map((p) => p[0].toUpperCase() + p.slice(1)).join("");

// Convertit une image en WebP (largeur max 1600 px) et renvoie son URL publique.
async function portAsset(dir, slug, rel, cache) {
  if (cache.has(rel)) return cache.get(rel);
  const from = path.join(SRC, dir, "src/assets", rel);
  const ext = path.extname(rel).toLowerCase();
  let outRel = rel;
  const outDir = path.join(ROOT, "public/etudes", slug);
  if ([".png", ".jpg", ".jpeg"].includes(ext)) {
    outRel = rel.slice(0, -ext.length) + ".webp";
    const out = path.join(outDir, outRel);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await sharp(from).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 85 }).toFile(out);
  } else {
    const out = path.join(outDir, outRel);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.copyFileSync(from, out);
  }
  const url = `/etudes/${slug}/${outRel}`;
  cache.set(rel, url);
  return url;
}

// Remplace `import x from "@/assets/..."` par `const x = "/etudes/..."`.
async function rewriteAssets(code, dir, slug, cache) {
  const re = /import\s+(\w+)\s+from\s+"@\/assets\/([^"]+)";?/g;
  const matches = [...code.matchAll(re)];
  for (const m of matches) {
    const url = await portAsset(dir, slug, m[2], cache);
    code = code.replace(m[0], `const ${m[1]} = ${JSON.stringify(url)};`);
  }
  return code;
}

const addUseClient = (code) => `"use client";\n\n${code.replace(/^\s*["']use client["'];?\s*/, "")}`;

function extractMeta(code) {
  const pick = (re) => (code.match(re) || [])[1];
  return {
    title: pick(/\{\s*title:\s*"([^"]+)"/),
    description: pick(/name:\s*"description",\s*content:\s*"([^"]+)"/s),
    ogTitle: pick(/property:\s*"og:title",\s*content:\s*"([^"]+)"/),
    ogDescription: pick(/property:\s*"og:description",\s*content:\s*"([^"]+)"/),
  };
}

const index = [];

for (const [dir, slug] of Object.entries(STUDIES)) {
  const name = pascal(slug);
  const outDir = path.join(ROOT, "src/case-studies", slug);
  fs.mkdirSync(path.join(outDir, "components"), { recursive: true });
  const cache = new Map();

  // Composants propres à l'étude
  const compDir = path.join(SRC, dir, "src/components/case-study");
  for (const f of fs.readdirSync(compDir)) {
    let code = fs.readFileSync(path.join(compDir, f), "utf8");
    code = await rewriteAssets(code, dir, slug, cache);
    code = code.replace(/@\/components\/case-study\//g, "./");
    fs.writeFileSync(path.join(outDir, "components", f), addUseClient(code));
  }

  // Page
  let code = fs.readFileSync(path.join(SRC, dir, "src/routes/index.tsx"), "utf8");
  const meta = extractMeta(code);
  code = await rewriteAssets(code, dir, slug, cache);
  code = code.replace(/@\/components\/case-study\//g, "./components/");
  code = code.replace(/import\s*\{([^}]*)\}\s*from\s*"@tanstack\/react-router";?/, (_, names) =>
    names.includes("Link") ? `import Link from "next/link";` : "",
  );
  code = code.replace(/<Link\s+to=/g, "<Link href=");
  // Supprime la déclaration de route TanStack et exporte le composant
  code = code.replace(/export const Route = createFileRoute\([\s\S]*?\r?\n\}\);\r?\n/, "");
  const comp = (code.match(/function (\w+)\(\)\s*\{/) || [])[1];
  code = code.replace(`function ${comp}()`, `export default function ${name}Page()`);
  fs.writeFileSync(path.join(outDir, "page.tsx"), addUseClient(code));

  // Route Next.js
  const routeDir = path.join(ROOT, "src/app/etudes", slug);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(
    path.join(routeDir, "page.tsx"),
    `import type { Metadata } from "next";
import ${name}Page from "@/case-studies/${slug}/page";

export const metadata: Metadata = {
  title: ${JSON.stringify(meta.title)},
  description: ${JSON.stringify(meta.description)},
  openGraph: {
    title: ${JSON.stringify(meta.ogTitle ?? meta.title)},
    description: ${JSON.stringify(meta.ogDescription ?? meta.description)},
  },
};

export default function Page() {
  return <${name}Page />;
}
`,
  );

  index.push({ slug, dir, ...meta });
  console.log(`ok ${slug} (${cache.size} images, composant ${comp})`);
}

fs.writeFileSync(path.join(ROOT, "scripts/port-index.json"), JSON.stringify(index, null, 2));
