// Agrega name y sub orientado a uso en los TILES de app/page.tsx
import fs from 'node:fs';

let src = fs.readFileSync('app/page.tsx', 'utf8');

const names = {
  'molduras-decorativas': ['Molduras decorativas', 'Decoran la unión techo-pared. Modelos E2, E5, E6, E7, E11, E40 y Titan.'],
  'antideslizantes': ['Antideslizantes', 'Evitan resbalones en escaleras y rampas: adhesivo, cinta, base + tapa o paso completo.'],
  'crucetas-y-niveladores': ['Crucetas y niveladores', 'Para instalar cerámicos y porcelanatos parejos, con juntas uniformes.'],
  'juntas': ['Juntas', 'Unen pisos y absorben la dilatación: sin fisuras en concreto, porcelanato y cerámica.'],
  'zocalos': ['Zócalos', 'Rematan la unión piso-pared: sanitarios, decorativos y contrazócalos tipo J.'],
  'paneles-de-pvc': ['Paneles de PVC', 'Revisten paredes y techos (cielorraso) con instalación rápida y fácil limpieza.'],
  'perfiles-para-acabados': ['Perfiles para acabados', 'Protegen y decoran los bordes del cerámico: Rodoplast en PVC y aluminio.'],
  'listelos-para-pared': ['Listelos para pared', 'Franjas decorativas de acero o aluminio que combinan con tu cerámico.'],
};

for (const [slug, [name, sub]] of Object.entries(names)) {
  // insertar name después del slug (si no existe ya)
  if (!src.includes(`name: "${name}"`)) {
    src = src.replace(`slug: "${slug}",`, `slug: "${slug}",\n    name: "${name}",`);
  }
  // reemplazar el sub dentro del bloque de ese slug
  const start = src.indexOf(`slug: "${slug}"`);
  const subStart = src.indexOf('sub: "', start);
  const subEnd = src.indexOf('",', subStart);
  src = src.slice(0, subStart) + `sub: "${sub}` + src.slice(subEnd);
}

fs.writeFileSync('app/page.tsx', src);
console.log('Tiles con name:', (src.match(/name: "/g) || []).length);
