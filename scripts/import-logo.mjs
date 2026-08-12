// Procesa el logo oficial (LOGO-NEGRO.png) en variantes para el sitio
import sharp from 'sharp';

const SRC = '../LOGO-NEGRO.png';

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;

const negro = Buffer.alloc(width * height * 4);
const blanco = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  const o = i * 4;
  const r = data[o], g = data[o + 1], b = data[o + 2], a = data[o + 3];
  const esBlanco = r > 240 && g > 240 && b > 240;
  if (a < 10 || esBlanco) {
    negro[o + 3] = 0;
    blanco[o + 3] = 0;
  } else {
    // negro: conservar tal cual
    negro[o] = r; negro[o + 1] = g; negro[o + 2] = b; negro[o + 3] = a;
    // blanco: mismo trazo en blanco
    blanco[o] = 255; blanco[o + 1] = 255; blanco[o + 2] = 255; blanco[o + 3] = a;
  }
}

await sharp(negro, { raw: { width, height, channels: 4 } }).trim().png().toFile('public/brand/logo-negro.png');
await sharp(blanco, { raw: { width, height, channels: 4 } }).trim().png().toFile('public/brand/logo-blanco.png');

for (const f of ['public/brand/logo-negro.png', 'public/brand/logo-blanco.png']) {
  const m = await sharp(f).metadata();
  console.log(f, m.width + 'x' + m.height);
}
