// Genera variantes del logomark NEFUSAC desde favicon-original.jpg (negro sobre verde)
import sharp from 'sharp';
import fs from 'node:fs';

const SRC = 'public/brand/favicon-original.jpg';
const { data, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

function makeVariant(rgb) {
  const out = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels], g = data[i * channels + 1], b = data[i * channels + 2];
    const isGreen = g > 90 && g > r + 20 && g > b + 40;
    const o = i * 4;
    if (isGreen) {
      out[o + 3] = 0; // transparente
    } else {
      out[o] = rgb[0]; out[o + 1] = rgb[1]; out[o + 2] = rgb[2]; out[o + 3] = 255;
    }
  }
  return sharp(out, { raw: { width, height, channels: 4 } });
}

// Marca negra (header claro) y blanca (footer oscuro), recortadas al contenido
await makeVariant([11, 18, 32]).trim().png().toFile('public/brand/mark-dark.png');
await makeVariant([255, 255, 255]).trim().png().toFile('public/brand/mark-white.png');
// Marca verde para detalles
await makeVariant([128, 188, 0]).trim().png().toFile('public/brand/mark-green.png');
// Ícono de app: original verde con marca negra
await sharp(SRC).resize(512, 512).png().toFile('app/icon.png');
console.log('OK marcas generadas');
