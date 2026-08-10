// Convierte las imágenes IA descargadas a WebP optimizado en public/images/ia/
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'C:/Users/USER/AppData/Local/Temp/claude/C--Users-USER-CLAUDE-CODE-NEFUSAC-WEB/cc0c31de-fbdb-4ad3-aeb9-5a7400af3967/scratchpad';
const OUT = 'public/images/ia';
fs.mkdirSync(OUT, { recursive: true });

const files = [
  'hero-1-sala-molduras',
  'hero-2-ventana-negra',
  'hero-3-bano-listelos',
  'hero-4-escalera',
];

for (const f of files) {
  const dest = path.join(OUT, f + '.webp');
  await sharp(path.join(SRC, f + '.png'))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dest);
  const m = await sharp(dest).metadata();
  console.log(`${f}.webp ${m.width}x${m.height} ${Math.round(fs.statSync(dest).size / 1024)}KB`);
}
