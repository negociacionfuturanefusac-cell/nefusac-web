// Convierte las fotos del sitio de ventanas a WebP en public/images/ventanas-sitio/
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'C:/Users/USER/AppData/Local/Temp/claude/C--Users-USER-CLAUDE-CODE-NEFUSAC-WEB/cc0c31de-fbdb-4ad3-aeb9-5a7400af3967/scratchpad/vnt';
const OUT = 'public/images/ventanas-sitio';
fs.mkdirSync(OUT, { recursive: true });

for (const f of fs.readdirSync(SRC)) {
  const name = path.basename(f, path.extname(f)) + '.webp';
  const dest = path.join(OUT, name);
  await sharp(path.join(SRC, f)).webp({ quality: 84 }).toFile(dest);
  const m = await sharp(dest).metadata();
  console.log(`${name} ${m.width}x${m.height} ${Math.round(fs.statSync(dest).size / 1024)}KB`);
}
