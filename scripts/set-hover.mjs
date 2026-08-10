// Asigna a cada producto: cardImage (foto de producto) + hoverImage (foto ambientada/instalada)
// usando heurísticas sobre los nombres de archivo.
import fs from 'node:fs';

const DATA = 'data/products.json';
const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));

const AMBIENT = /ambient|en-obra|obra|bano-con|instalacion|llenado|cables|escalera|edificio|amplio|paso-completo-[12]|dsc0|venta_|post-2/i;
const PRODUCT = /grupal|individual|isometrico|presentacion|3d|colores|-solo|familia|kit|perfil-|bolsa|caja|producto/i;

let conPar = 0;
const sinAmbientada = [];
const sinProducto = [];

for (const p of data.products) {
  const imgs = p.images;
  const ambient = imgs.find((i) => AMBIENT.test(i.src) && !/3d|plano/i.test(i.src));
  // foto "de producto": primero una que parezca de estudio, si no, la primera que NO sea ambientada
  const prod =
    imgs.find((i) => PRODUCT.test(i.src) && !AMBIENT.test(i.src)) ??
    imgs.find((i) => !AMBIENT.test(i.src));

  if (prod && ambient && prod.src !== ambient.src) {
    p.cardImage = prod.src;
    p.hoverImage = ambient.src;
    conPar++;
  } else if (prod && !ambient) {
    p.cardImage = prod.src;
    delete p.hoverImage;
    sinAmbientada.push(`${p.category}/${p.slug}`);
  } else if (!prod && ambient) {
    p.cardImage = ambient.src;
    delete p.hoverImage;
    sinProducto.push(`${p.category}/${p.slug}`);
  }
}

fs.writeFileSync(DATA, JSON.stringify(data, null, 1));
console.log(`Con par producto+ambientada (hover listo): ${conPar}/${data.products.length}`);
console.log(`\nSin foto ambientada (${sinAmbientada.length}):`);
sinAmbientada.forEach((s) => console.log('  - ' + s));
console.log(`\nSolo tienen ambientada (${sinProducto.length}):`);
sinProducto.forEach((s) => console.log('  - ' + s));
