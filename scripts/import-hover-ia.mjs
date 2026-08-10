// Descarga las 11 imágenes IA de ambientación, las optimiza a WebP
// y las asigna como hoverImage a los productos que faltaban.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3GKnN40YcWqVvo0ogOpQERuB9py/';
const MAP = [
  ['antideslizantes', 'antideslizante-cinta', 'hf_20260810_215050_a300f6f4-b3a0-4d81-a34d-91ab40e4334e.png', 'amb-antideslizante-cinta'],
  ['crucetas-y-niveladores', 'crucetas-para-separador-de-vidrio', 'hf_20260810_215050_e0e90941-2b78-4ffe-b434-b22204d97ae2.png', 'amb-bloques-vidrio'],
  ['crucetas-y-niveladores', 'nivelador-cuna-clip', 'hf_20260810_215050_53a6544e-753f-4fe9-95da-5fff4e4199cc.png', 'amb-nivelador-cuna-clip'],
  ['crucetas-y-niveladores', 'nivelador-espiral', 'hf_20260810_215050_fff1d5d1-99e2-436f-bd6e-2c9b3cf72fc3.png', 'amb-nivelador-espiral'],
  ['crucetas-y-niveladores', 'nivelador-porcelanato-ceramica', 'hf_20260810_215050_848511b8-e461-4eed-b499-04ca76d825d0.png', 'amb-piso-nivelado'],
  ['zocalos', 'contrazocalo', 'hf_20260810_215050_f2e452a5-34bb-4283-8858-9ad43f0c0505.png', 'amb-contrazocalo-j'],
  ['zocalos', 'zocalo-tipo-j-aluminio', 'hf_20260810_215050_ce607cc1-9ab0-4f88-93e7-591589dd3247.png', 'amb-zocalo-aluminio'],
  ['paneles-de-pvc', 'accesorios-para-panel', 'hf_20260810_215050_9a6da3cd-9019-49a3-acad-1493d53dc8f2.png', 'amb-cielorraso-panel'],
  ['perfiles-para-acabados', 'rodoplast-pvc-tipo-aluminio', 'hf_20260810_215050_88fc3c1b-caae-45f9-8e19-e6d6af2f7877.png', 'amb-perfil-dorado'],
  ['perfiles-para-acabados', 'perfil-de-aluminio', 'hf_20260810_215050_60fb5dd6-5472-457f-804e-67234df7ed60.png', 'amb-perfil-aluminio'],
  ['otros-productos', 'perfil-tubo-triangular', 'hf_20260810_215050_e1d41ba8-9460-40b4-9b7a-dc295205e74e.png', 'amb-tubo-triangular'],
];

const OUT = 'public/images/ia';
fs.mkdirSync(OUT, { recursive: true });
const data = JSON.parse(fs.readFileSync('data/products.json', 'utf8'));

for (const [cat, slug, file, name] of MAP) {
  const res = await fetch(CDN + file);
  if (!res.ok) { console.log(`ERROR descarga ${name}: ${res.status}`); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  const dest = path.join(OUT, name + '.webp');
  const webp = await sharp(buf)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();
  fs.writeFileSync(dest, webp);
  const meta = await sharp(webp).metadata();

  const p = data.products.find((x) => x.category === cat && x.slug === slug);
  if (!p) { console.log(`NO ENCONTRADO: ${cat}/${slug}`); continue; }
  const src = '/images/ia/' + name + '.webp';
  p.hoverImage = src;
  if (!p.cardImage) p.cardImage = p.images[0]?.src;
  // añadir también a la galería del producto (al final, es ambientación referencial)
  if (!p.images.some((i) => i.src === src)) {
    p.images.push({ src, w: meta.width, h: meta.height, alt: `Ambiente referencial: ${p.name} instalado` });
  }
  console.log(`OK ${cat}/${slug} -> ${src} (${Math.round(webp.length / 1024)}KB)`);
}

fs.writeFileSync('data/products.json', JSON.stringify(data, null, 1));
const conHover = data.products.filter((p) => p.hoverImage).length;
console.log(`\nProductos con hover: ${conHover}/${data.products.length}`);
