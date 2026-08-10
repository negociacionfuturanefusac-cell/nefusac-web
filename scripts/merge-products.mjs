// Fusiona los resultados del workflow (journal.jsonl) en data/products.json
// Valida que cada imagen exista en public/ y que las fichas existan.
import fs from 'node:fs';
import path from 'node:path';

const OUTPUT = 'C:/Users/USER/AppData/Local/Temp/claude/C--Users-USER-CLAUDE-CODE-NEFUSAC-WEB/cc0c31de-fbdb-4ad3-aeb9-5a7400af3967/tasks/wx2lexfmg.output';
const DATA = 'data/products.json';

const results = JSON.parse(fs.readFileSync(OUTPUT, 'utf8')).result.categories;

const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));
const catSlugs = new Set(data.categories.map((c) => c.slug));

const FEATURED = new Set([
  'molduras-decorativas/moldura-decorativa-e5',
  'antideslizantes/antideslizante-pvc',
  'juntas/juntas-para-concreto',
  'zocalos/zocalo-sanitario',
  'paneles-de-pvc/panel-de-pvc',
  'perfiles-para-acabados/rodoplast',
  'listelos-para-pared/listelos-de-acero-inoxidable',
  'otros-productos/borde-de-jardin',
]);

let products = [];
const problems = [];

for (const r of results) {
  if (!r || !r.slug || !Array.isArray(r.products)) {
    problems.push('Resultado inválido: ' + JSON.stringify(r).slice(0, 120));
    continue;
  }
  if (!catSlugs.has(r.slug)) {
    problems.push('Categoría desconocida: ' + r.slug);
    continue;
  }
  for (const p of r.products) {
    // validar imágenes
    const validImages = [];
    for (const img of p.images ?? []) {
      const local = path.join('public', img.src.replace(/^\//, ''));
      if (fs.existsSync(local)) validImages.push(img);
      else problems.push(`[${r.slug}/${p.slug}] imagen inexistente: ${img.src}`);
    }
    if (validImages.length === 0) {
      problems.push(`[${r.slug}/${p.slug}] SIN imágenes válidas — omitido`);
      continue;
    }
    // validar ficha
    let ficha = p.ficha;
    if (ficha) {
      const localF = path.join('public', ficha.replace(/^\//, ''));
      if (!fs.existsSync(localF)) {
        problems.push(`[${r.slug}/${p.slug}] ficha inexistente: ${ficha}`);
        ficha = undefined;
      }
    }
    products.push({
      ...p,
      ficha,
      images: validImages,
      category: r.slug,
      featured: FEATURED.has(`${r.slug}/${p.slug}`),
    });
  }
}

// dedupe por categoría+slug
const seen = new Set();
products = products.filter((p) => {
  const key = `${p.category}/${p.slug}`;
  if (seen.has(key)) {
    problems.push('Duplicado eliminado: ' + key);
    return false;
  }
  seen.add(key);
  return true;
});

data.products = products;
fs.writeFileSync(DATA, JSON.stringify(data, null, 1));

console.log(`Productos totales: ${products.length}`);
for (const c of data.categories) {
  const n = products.filter((p) => p.category === c.slug).length;
  console.log(`  ${c.slug}: ${n}`);
}
if (problems.length) {
  console.log('\nPROBLEMAS:');
  problems.forEach((p) => console.log('  - ' + p));
} else {
  console.log('\nSin problemas de validación.');
}
