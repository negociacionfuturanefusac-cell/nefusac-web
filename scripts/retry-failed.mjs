import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'C:/Users/USER/CLAUDE CODE/NEFUSAC WEB/FOTOS WEB';
const pairs = [
  ['ANTIDESLIZANTES/ANTIDESLIZANTE-PASO_COMPLETO/Paso completo 1.jpg', 'public/images/antideslizantes/antideslizante-paso_completo/paso-completo-1.webp'],
  ['ANTIDESLIZANTES/ANTIDESLIZANTE-PASO_COMPLETO/Paso completo 2.jpg', 'public/images/antideslizantes/antideslizante-paso_completo/paso-completo-2.webp'],
  ['JUNTAS/JUNTA_DILATACION_CONCRETO/LLENADO 3.jpg', 'public/images/juntas/junta_dilatacion_concreto/llenado-3.webp'],
  ['MOLDURAS DECORATIVAS DE POLIESTIRENO/FOTOS/TITAN PREMIUM/TITAM PREMIUM 2.png', 'public/images/molduras-decorativas-de-poliestireno/fotos/titan-premium/titam-premium-2.webp'],
  ['MOLDURAS DECORATIVAS DE POLIESTIRENO/FOTOS/TITAN PREMIUM/TITAM PREMIUM 4.png', 'public/images/molduras-decorativas-de-poliestireno/fotos/titan-premium/titam-premium-4.webp'],
];

const manifest = JSON.parse(fs.readFileSync('data/media-manifest.json', 'utf8'));
for (const [src, out] of pairs) {
  const buf = fs.readFileSync(path.join(SRC, src));
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const data = await sharp(buf, { failOn: 'none' }).rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toBuffer();
  fs.writeFileSync(out, data);
  const meta = await sharp(data).metadata();
  manifest.images.push({ src, out: '/' + out.replace(/^public\//, '').replace(/\\/g, '/'), w: meta.width, h: meta.height, kb: Math.round(data.length / 1024) });
  manifest.skipped = manifest.skipped.filter((s) => s.src !== src);
  console.log('OK', out);
}
fs.writeFileSync('data/media-manifest.json', JSON.stringify(manifest, null, 1));
console.log('Total imágenes:', manifest.images.length);
