// Las fotos ambientadas genéricas de molduras (asignadas a la E2) sirven
// como hover para las demás molduras: son escenas genéricas de molduras instaladas.
import fs from 'node:fs';

const DATA = 'data/products.json';
const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));

const e2 = data.products.find(
  (p) => p.category === 'molduras-decorativas' && p.slug === 'moldura-decorativa-e2'
);
const pool = e2.images
  .map((i) => i.src)
  .filter((s) => s.includes('fotos-ambientadas'));

const targets = [
  'moldura-decorativa-e5',
  'moldura-decorativa-e6',
  'moldura-decorativa-e7',
  'moldura-decorativa-e11',
  'moldura-decorativa-e40',
  'moldura-titan-premium',
];

// La E2 se queda con la primera; las demás toman las siguientes del pool
let idx = 1;
for (const slug of targets) {
  const p = data.products.find(
    (x) => x.category === 'molduras-decorativas' && x.slug === slug
  );
  if (!p || p.hoverImage) continue;
  if (idx >= pool.length) break;
  p.hoverImage = pool[idx++];
  if (!p.cardImage) p.cardImage = p.images[0]?.src;
  console.log(`${slug} -> hover ${p.hoverImage}`);
}

fs.writeFileSync(DATA, JSON.stringify(data, null, 1));
const conHover = data.products.filter((p) => p.hoverImage).length;
console.log(`\nProductos con hover: ${conHover}/${data.products.length}`);
console.log('Faltan:');
data.products
  .filter((p) => !p.hoverImage)
  .forEach((p) => console.log(`  - ${p.category}/${p.slug}`));
