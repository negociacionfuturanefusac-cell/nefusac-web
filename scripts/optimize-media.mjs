// Procesa FOTOS WEB -> public/ (imágenes WebP optimizadas, fichas PDF, videos livianos)
// Genera data/media-manifest.json con el mapeo origen -> destino.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'C:/Users/USER/CLAUDE CODE/NEFUSAC WEB/FOTOS WEB';
const OUT_IMG = path.resolve('public/images');
const OUT_PDF = path.resolve('public/fichas');
const OUT_VID = path.resolve('public/videos');
const MANIFEST = path.resolve('data/media-manifest.json');

const IMG_EXT = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp']);
const MAX_W = 1600;
const QUALITY = 78;
const MAX_VIDEO_MB = 15;

function slugify(s) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[ºª°]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9/._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else yield full;
  }
}

for (const d of [OUT_IMG, OUT_PDF, OUT_VID, path.dirname(MANIFEST)]) {
  fs.mkdirSync(d, { recursive: true });
}

const manifest = { images: [], fichas: [], videos: [], skipped: [] };
let done = 0, errors = 0;

const files = [...walk(SRC)];
console.log(`Archivos origen: ${files.length}`);

for (const file of files) {
  const rel = path.relative(SRC, file).replace(/\\/g, '/');
  const ext = path.extname(file).toLowerCase();
  const sizeMB = fs.statSync(file).size / 1048576;

  try {
    if (IMG_EXT.has(ext)) {
      const relSlug = slugify(rel.slice(0, -ext.length)) + '.webp';
      const dest = path.join(OUT_IMG, relSlug);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      const img = sharp(file, { failOn: 'none' }).rotate();
      const meta = await img.metadata();
      await img
        .resize({ width: MAX_W, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(dest);
      const outMeta = await sharp(dest).metadata();
      manifest.images.push({
        src: rel,
        out: '/images/' + relSlug,
        w: outMeta.width,
        h: outMeta.height,
        kb: Math.round(fs.statSync(dest).size / 1024),
      });
      done++;
    } else if (ext === '.pdf') {
      const base = slugify(path.basename(file, ext)) + '.pdf';
      const dest = path.join(OUT_PDF, base);
      fs.copyFileSync(file, dest);
      manifest.fichas.push({ src: rel, out: '/fichas/' + base, mb: +sizeMB.toFixed(1) });
      done++;
    } else if (ext === '.mp4') {
      if (sizeMB <= MAX_VIDEO_MB) {
        const base = slugify(path.basename(file, ext)) + '.mp4';
        const dest = path.join(OUT_VID, base);
        fs.copyFileSync(file, dest);
        manifest.videos.push({ src: rel, out: '/videos/' + base, mb: +sizeMB.toFixed(1) });
      } else {
        manifest.skipped.push({ src: rel, reason: `video ${sizeMB.toFixed(0)}MB > ${MAX_VIDEO_MB}MB` });
      }
      done++;
    } else {
      manifest.skipped.push({ src: rel, reason: 'extensión ' + ext });
    }
  } catch (e) {
    errors++;
    manifest.skipped.push({ src: rel, reason: 'ERROR: ' + e.message });
  }
}

fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1));
const totalKB = manifest.images.reduce((a, i) => a + i.kb, 0);
console.log(`OK: ${done} | errores: ${errors}`);
console.log(`Imágenes: ${manifest.images.length} (${(totalKB / 1024).toFixed(0)} MB total optimizado)`);
console.log(`Fichas PDF: ${manifest.fichas.length} | Videos: ${manifest.videos.length} | Omitidos: ${manifest.skipped.length}`);
