// Barrido final de URLs clave en producción
const B = 'https://nefusac-web.vercel.app';
const urls = [
  '/', '/productos', '/productos/molduras-decorativas', '/productos/antideslizantes',
  '/productos/crucetas-y-niveladores', '/productos/juntas', '/productos/zocalos',
  '/productos/paneles-de-pvc', '/productos/perfiles-para-acabados',
  '/productos/listelos-para-pared', '/productos/otros-productos',
  '/productos/juntas/juntas-para-concreto', '/productos/zocalos/zocalo-sanitario',
  '/ventanas-de-pvc', '/nosotros', '/proyectos', '/contacto',
  '/terminos-y-condiciones', '/sitemap.xml', '/robots.txt',
  '/fichas/catalogo-nefusac.pdf',
];
let bad = 0;
for (const u of urls) {
  const r = await fetch(B + u, { redirect: 'follow' });
  if (r.status !== 200) { bad++; console.log('FALLO', r.status, u); }
}
console.log(bad === 0 ? `TODAS OK (${urls.length} URLs)` : `${bad} fallos`);
