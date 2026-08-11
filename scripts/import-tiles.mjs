// Descarga las fotos de ambiente 16:9 y las optimiza en public/images/tiles/
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3GKnN40YcWqVvo0ogOpQERuB9py/';
const MAP = [
  ['molduras-decorativas', 'hf_20260811_011152_1cad7817-fe1e-4ac7-8880-20c7a763ef2a.png'],
  ['antideslizantes', 'hf_20260811_011152_5e66c84c-c1d8-4b8b-bd37-92087465a13c.png'],
  ['crucetas-y-niveladores', 'hf_20260811_011152_4c9a6491-b7d6-4326-9998-351e195c4a8d.png'],
  ['juntas', 'hf_20260811_011152_5027fd19-1fdc-44b2-9d7c-88bb6d6d0da0.png'],
  ['zocalos', 'hf_20260811_011152_13fc0691-a656-41ba-bc7f-4a0b2c7b7e54.png'],
  ['paneles-de-pvc', 'hf_20260811_011152_d3b5a066-d858-4739-a9b3-121634ef9f37.png'],
  ['perfiles-para-acabados', 'hf_20260811_011152_e00dc202-c62e-42b0-8e12-f2e4beb44e50.png'],
  ['listelos-para-pared', 'hf_20260811_011153_aaf6a830-30c7-471e-9131-806d8d8ae6a1.png'],
  ['otros-productos', 'hf_20260811_011152_08f3a0b1-f93a-44c0-b107-8687c75a2383.png'],
];

const OUT = 'public/images/tiles';
fs.mkdirSync(OUT, { recursive: true });

for (const [name, file] of MAP) {
  const res = await fetch(CDN + file);
  if (!res.ok) { console.log('ERROR', name, res.status); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  const dest = path.join(OUT, name + '.webp');
  const webp = await sharp(buf)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();
  fs.writeFileSync(dest, webp);
  console.log(`OK ${name}.webp ${Math.round(webp.length / 1024)}KB`);
}
