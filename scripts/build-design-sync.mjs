// Genera el bundle de vistas previas para Claude Design (design-sync/)
import fs from 'node:fs';
import path from 'node:path';

const OUT = 'design-sync';
fs.rmSync(OUT, { recursive: true, force: true });
for (const d of ['brand', 'components', 'secciones', 'assets']) {
  fs.mkdirSync(path.join(OUT, d), { recursive: true });
}

// Copiar assets necesarios
const ASSETS = [
  ['public/brand/mark-dark.png', 'assets/mark-dark.png'],
  ['public/brand/mark-white.png', 'assets/mark-white.png'],
  ['public/images/ia/hero-perfiles-pvc-aluminio.webp', 'assets/hero-perfiles.webp'],
  ['public/images/ventanas-sitio/sala-jardin-sin-texto.webp', 'assets/ventana-jardin.webp'],
  ['public/images/juntas/junta_transicion_p-iguales/junta-para-pisos-iguales-grupal.webp', 'assets/producto-junta.webp'],
  ['public/images/juntas/junta_transicion_p-iguales/foto-ambientada.webp', 'assets/producto-junta-instalada.webp'],
  ['public/images/antideslizantes/grupal-antideslizantes.webp', 'assets/cat-antideslizantes.webp'],
  ['public/images/tiles/molduras-decorativas.webp', 'assets/tile-molduras.webp'],
];
for (const [src, dst] of ASSETS) fs.copyFileSync(src, path.join(OUT, dst));

const CSS = `
  :root{--brand:#80bc00;--brand-dark:#669600;--brand-light:#eef7d8;--navy:#061325;--navy-soft:#0d2036;--ink:#101828;--steel:#475467;--mist:#f4f6f0;--line:#e5e8e0;--wsp:#25d366}
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;color:var(--ink);background:#fff;padding:24px}
  .display{font-family:'Barlow',system-ui,sans-serif}
  h1,h2,h3{font-family:'Barlow',system-ui,sans-serif}
`;
const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">`;

function page(card, title, extraCss, body) {
  return `<!-- @dsCard ${card} -->
<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>${FONTS}<style>${CSS}${extraCss}</style></head><body>${body}</body></html>`;
}

const files = {};

// ── MARCA ──────────────────────────────────────────────
files['brand/colores.html'] = page(
  'group="Marca" name="Paleta de colores"',
  'Colores NEFUSAC',
  `.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;max-width:760px}
   .sw{border-radius:12px;border:1px solid var(--line);overflow:hidden}
   .chip{height:84px}.meta{padding:10px 12px;font-size:12px}.meta b{display:block;font-size:13px}`,
  `<div class="grid">
    ${[
      ['Verde NEFUSAC', '#80BC00', 'Acciones y acentos'],
      ['Verde oscuro', '#669600', 'Hover de botones'],
      ['Verde claro', '#EEF7D8', 'Fondos suaves'],
      ['Navy', '#061325', 'Header/footer y texto fuerte'],
      ['Navy suave', '#0D2036', 'Hover navy'],
      ['Tinta', '#101828', 'Texto principal'],
      ['Acero', '#475467', 'Texto secundario'],
      ['Niebla', '#F4F6F0', 'Fondos de sección'],
    ]
      .map(
        ([n, c, u]) =>
          `<div class="sw"><div class="chip" style="background:${c}"></div><div class="meta"><b>${n}</b>${c} · ${u}</div></div>`
      )
      .join('')}
  </div>`
);

files['brand/tipografia.html'] = page(
  'group="Marca" name="Tipografía"',
  'Tipografía NEFUSAC',
  `.spec{color:var(--steel);font-size:12px;text-transform:uppercase;letter-spacing:.1em;margin:20px 0 6px}
   .h1{font-weight:800;font-size:44px;letter-spacing:-.02em;line-height:1.05}
   .h2{font-weight:800;font-size:28px}.body{font-size:16px;color:var(--steel);max-width:560px;line-height:1.6}`,
  `<p class="spec">Display — Barlow ExtraBold</p>
   <p class="h1 display">Soluciones para los acabados de tu construcción</p>
   <p class="spec">Título de sección — Barlow Bold</p>
   <p class="h2 display">Nuestras categorías de productos</p>
   <p class="spec">Cuerpo — Inter Regular</p>
   <p class="body">Fabricamos productos de PVC e importamos perfiles decorativos en aluminio y acero inoxidable. Además, fabricamos e instalamos ventanas de PVC de alta prestación.</p>`
);

files['brand/logo.html'] = page(
  'group="Marca" name="Logo"',
  'Logo NEFUSAC',
  `.row{display:flex;gap:16px;flex-wrap:wrap}
   .tile{border-radius:14px;padding:26px 34px;display:flex;align-items:center;gap:14px;border:1px solid var(--line)}
   .word{font-family:'Barlow';font-weight:800;font-size:26px;letter-spacing:-.01em}
   .tag{font-size:8.5px;letter-spacing:.14em;text-transform:uppercase;display:block}
   img{height:40px;width:40px}`,
  `<div class="row">
    <div class="tile" style="background:#fff"><span style="background:var(--brand);border-radius:10px;padding:7px;display:flex"><img src="../assets/mark-dark.png" alt=""></span><span><span class="word" style="color:var(--ink)">NEFUSAC</span><span class="tag" style="color:var(--steel)">Soluciones para la construcción</span></span></div>
    <div class="tile" style="background:var(--navy)"><img src="../assets/mark-white.png" alt=""><span><span class="word" style="color:#fff">NEFUSAC</span><span class="tag" style="color:#ffffff99">Soluciones para la construcción</span></span></div>
    <div class="tile" style="background:var(--brand)"><img src="../assets/mark-dark.png" alt=""><span><span class="word" style="color:var(--navy)">NEFUSAC</span><span class="tag" style="color:#06132599">Soluciones para la construcción</span></span></div>
  </div>`
);

// ── COMPONENTES ────────────────────────────────────────
files['components/botones.html'] = page(
  'group="Componentes" name="Botones"',
  'Botones',
  `.row{display:flex;gap:14px;flex-wrap:wrap;align-items:center;margin-bottom:18px}
   .btn{font-weight:700;font-size:14px;border-radius:10px;padding:13px 24px;text-decoration:none;display:inline-block;font-family:'Inter'}
   .p{background:var(--brand);color:#fff}.p:hover{background:var(--brand-dark)}
   .n{background:var(--navy);color:#fff}
   .o{border:2px solid var(--navy);color:var(--navy);padding:11px 24px}
   .g{border:1px solid #ffffff4d;color:#fff;background:var(--navy)}
   .w{background:var(--wsp);color:#fff;border-radius:999px;display:inline-flex;gap:8px;align-items:center}`,
  `<div class="row"><a class="btn p" href="#">Cotizar ahora</a><a class="btn n" href="#">Conocer las ventanas →</a><a class="btn o" href="#">Ficha técnica (PDF) ↓</a></div>
   <div class="row" style="background:var(--navy);padding:16px;border-radius:12px"><a class="btn g" href="#">Cotizar por WhatsApp</a></div>
   <div class="row"><a class="btn w" href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z"/></svg>¿Cotizamos?</a></div>`
);

files['components/tarjeta-producto.html'] = page(
  'group="Componentes" name="Tarjeta de producto" subtitle="Con efecto hover: producto → instalado"',
  'Tarjeta de producto',
  `.card{width:280px;border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff;transition:.2s;display:block;text-decoration:none;color:inherit}
   .card:hover{box-shadow:0 12px 28px #06132522;border-color:var(--brand)}
   .ph{position:relative;aspect-ratio:1;background:var(--mist);overflow:hidden}
   .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:.3s}
   .ph .hover{opacity:0;transform:scale(1.05)}
   .card:hover .ph .base{opacity:0}.card:hover .ph .hover{opacity:1;transform:scale(1)}
   .badge{position:absolute;bottom:8px;right:8px;background:#ffffffdd;font-size:10px;font-weight:600;padding:4px 8px;border-radius:6px;opacity:0;transition:.3s;z-index:2}
   .card:hover .badge{opacity:1}
   .body{padding:16px}.body h3{font-size:16px;font-weight:700}
   .body p{font-size:13px;color:var(--steel);margin-top:4px;line-height:1.45}
   .colors{font-size:11px;color:var(--steel);margin-top:8px}
   .hint{font-size:12px;color:var(--steel);margin-bottom:12px}`,
  `<p class="hint">Pasa el mouse por la tarjeta: cambia de producto → instalado</p>
   <a class="card" href="#"><div class="ph"><img class="base" src="../assets/producto-junta.webp" alt=""><img class="hover" src="../assets/producto-junta-instalada.webp" alt=""><span class="badge">Así se ve instalado</span></div><div class="body"><h3 class="display">Junta de transición para pisos iguales</h3><p>Une pisos de similar altura creando transiciones seguras que previenen accidentes.</p><p class="colors">3 colores</p></div></a>`
);

files['components/tarjeta-categoria.html'] = page(
  'group="Componentes" name="Tarjeta de categoría"',
  'Tarjeta de categoría',
  `.cat{width:300px;aspect-ratio:4/3;border-radius:14px;overflow:hidden;position:relative;display:block;text-decoration:none}
   .cat img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:.3s}
   .cat:hover img{transform:scale(1.05)}
   .grad{position:absolute;inset:0;background:linear-gradient(to top,#061325d9,#06132533 55%,transparent)}
   .txt{position:absolute;bottom:0;left:0;right:0;padding:16px;color:#fff}
   .txt h3{font-size:18px;font-weight:700}.txt p{font-size:12px;color:#ffffffbf;margin-top:2px}
   .txt span{color:var(--brand);font-size:13px;font-weight:600;opacity:0;transition:.3s;display:inline-block;margin-top:8px}
   .cat:hover .txt span{opacity:1}`,
  `<a class="cat" href="#"><img src="../assets/cat-antideslizantes.webp" alt=""><div class="grad"></div><div class="txt"><h3 class="display">Antideslizantes</h3><p>Seguridad en escaleras y rampas</p><span>Ver productos →</span></div></a>`
);

files['components/header.html'] = page(
  'group="Componentes" name="Header" subtitle="Barra superior + navegación"',
  'Header',
  `body{padding:0}
   .top{background:var(--navy);color:#fff;font-size:12px;display:flex;justify-content:space-between;padding:9px 24px}
   .top span{opacity:.85}
   .main{display:flex;align-items:center;justify-content:space-between;padding:14px 24px;box-shadow:0 1px 3px #0000000f}
   .lg{display:flex;align-items:center;gap:10px}.lg img{height:30px}
   .lg .box{background:var(--brand);border-radius:9px;padding:6px;display:flex}
   .word{font-family:'Barlow';font-weight:800;font-size:20px}
   .tag{font-size:7.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--steel);display:block}
   nav{display:flex;gap:4px}nav a{font-size:14px;font-weight:600;color:var(--ink);text-decoration:none;padding:8px 12px;border-radius:8px}
   nav a:hover{color:var(--brand-dark)}nav a.act{color:var(--brand-dark)}
   .cta{background:var(--brand);color:#fff;font-weight:700;font-size:14px;padding:10px 16px;border-radius:10px;text-decoration:none}`,
  `<div class="top"><span>☎ (01) 326 4240 · 981 124 794 · cotiza@nefusac.com.pe</span><span>38 años creando soluciones · Distribución en todo el Perú</span></div>
   <div class="main"><div class="lg"><span class="box"><img src="../assets/mark-dark.png" alt=""></span><span><span class="word">NEFUSAC</span><span class="tag">Soluciones para la construcción</span></span></div>
   <nav><a href="#" class="act">Inicio</a><a href="#">Productos ▾</a><a href="#">Ventanas de PVC</a><a href="#">Nosotros</a><a href="#">Proyectos</a><a href="#">Contacto</a></nav>
   <a class="cta" href="#">Cotizar ahora</a></div>`
);

files['components/footer.html'] = page(
  'group="Componentes" name="Footer"',
  'Footer',
  `body{padding:0}
   footer{background:var(--navy);color:#fff;padding:40px 32px 0}
   .cols{display:grid;grid-template-columns:1.3fr 1fr 1fr 1.2fr;gap:32px;max-width:1100px;margin:0 auto}
   h3{color:var(--brand);font-size:12px;text-transform:uppercase;letter-spacing:.1em;margin-bottom:14px}
   ul{list-style:none;font-size:13px;line-height:2.1;color:#ffffffcc}
   .about{font-size:13px;color:#ffffffb3;line-height:1.6;margin-top:12px}
   .lg{display:flex;gap:10px;align-items:center}.lg img{height:34px}
   .word{font-family:'Barlow';font-weight:800;font-size:19px}
   .bar{border-top:1px solid #ffffff1a;margin-top:32px;padding:16px;text-align:center;font-size:11px;color:#ffffff80}`,
  `<footer><div class="cols">
    <div><div class="lg"><img src="../assets/mark-white.png" alt=""><span class="word">NEFUSAC</span></div><p class="about">38 años fabricando soluciones en PVC e importando perfiles decorativos. Presentes en los 24 departamentos del Perú.</p></div>
    <div><h3>Productos</h3><ul><li>Molduras decorativas</li><li>Antideslizantes</li><li>Juntas</li><li>Zócalos</li><li>Perfiles</li></ul></div>
    <div><h3>Empresa</h3><ul><li>Nosotros</li><li>Ventanas de PVC</li><li>Proyectos</li><li>Catálogo 2025 (PDF)</li></ul></div>
    <div><h3>Contáctanos</h3><ul><li>Jr. Mariscal Agustín Gamarra 132, San Luis</li><li>(01) 326 4240 · 981 124 794</li><li>cotiza@nefusac.com.pe</li></ul></div>
   </div><div class="bar">© 2026 NEGOCIACIÓN FUTURA S.A.C. (NEFUSAC) · RUC 20100876788</div></footer>`
);

// ── SECCIONES ──────────────────────────────────────────
files['secciones/hero.html'] = page(
  'group="Secciones" name="Hero de portada" subtitle="Pantalla completa con foto de perfiles"',
  'Hero',
  `body{padding:0}
   .hero{position:relative;min-height:620px;background:var(--navy);color:#fff;display:flex;flex-direction:column;justify-content:center;overflow:hidden}
   .hero>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
   .g1{position:absolute;inset:0;background:linear-gradient(to right,#061325f2,#061325b3 45%,#0613254d)}
   .g2{position:absolute;left:0;right:0;bottom:0;height:220px;background:linear-gradient(to top,#061325d9,transparent)}
   .inner{position:relative;max-width:1150px;margin:0 auto;width:100%;padding:80px 40px 150px}
   .k{display:flex;align-items:center;gap:12px;color:var(--brand);font-family:'Barlow';font-weight:700;text-transform:uppercase;letter-spacing:.18em;font-size:13px}
   .k::before{content:'';display:inline-block;height:2px;width:36px;background:var(--brand)}
   h1{font-size:62px;font-weight:800;line-height:1.05;letter-spacing:-.02em;margin-top:14px;max-width:720px}
   .sub{color:#ffffffd9;font-size:17px;line-height:1.6;margin-top:20px;max-width:520px}
   .btns{display:flex;gap:14px;margin-top:32px}
   .b1{background:var(--brand);color:#fff;font-weight:700;padding:16px 30px;border-radius:12px;text-decoration:none;font-size:15px;box-shadow:0 8px 24px #80bc0059}
   .b2{border:1px solid #ffffff59;background:#ffffff1a;color:#fff;font-weight:700;padding:16px 30px;border-radius:12px;text-decoration:none;font-size:15px}
   .bar{position:absolute;left:0;right:0;bottom:0;border-top:1px solid #ffffff26;background:#0613256b;backdrop-filter:blur(8px)}
   .bar-in{max-width:1150px;margin:0 auto;padding:14px 40px;display:flex;justify-content:space-between;align-items:center}
   .stats{display:flex;gap:48px}
   .stats b{font-family:'Barlow';font-weight:800;font-size:28px;color:var(--brand);display:block}
   .stats span{font-size:11px;color:#ffffffbf}
   .cert{font-size:13px;font-weight:600;color:#ffffffd9;display:flex;align-items:center;gap:10px}
   .cert::before{content:'';height:8px;width:8px;border-radius:99px;background:var(--brand)}`,
  `<div class="hero"><img src="../assets/hero-perfiles.webp" alt=""><div class="g1"></div><div class="g2"></div>
   <div class="inner">
    <p class="k">38 años construyendo calidad</p>
    <h1>Soluciones para los acabados de tu construcción</h1>
    <p class="sub">Fabricamos productos de PVC e importamos perfiles decorativos en aluminio y acero inoxidable.</p>
    <div class="btns"><a class="b1" href="#">Ver productos</a><a class="b2" href="#">Cotizar por WhatsApp</a></div>
   </div>
   <div class="bar"><div class="bar-in"><div class="stats"><div><b>38</b><span>años de experiencia</span></div><div><b>24</b><span>departamentos del Perú</span></div><div><b>3</b><span>certificaciones ISO</span></div></div><p class="cert">Procesos certificados TRINORMA · ISO 9001 · 14001 · 45001</p></div></div>
  </div>`
);

files['components/tile-categoria.html'] = page(
  'group="Componentes" name="Tarjeta-menú de categoría" subtitle="Foto + frase de beneficio + Ver productos"',
  'Tarjeta-menú de categoría',
  `.tile{position:relative;display:block;width:360px;aspect-ratio:16/10;overflow:hidden;text-decoration:none;background:var(--navy)}
   .tile img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:.5s}
   .tile:hover img{transform:scale(1.05)}
   .grad{position:absolute;inset:0;background:linear-gradient(to top,#000000bf,#00000040 55%,#0000001a)}
   .txt{position:absolute;inset:0;padding:22px;display:flex;flex-direction:column;justify-content:flex-end}
   .txt h3{font-size:22px;font-weight:800;color:#fff;line-height:1.15}
   .txt p{margin-top:6px;color:#ffffffd9;font-size:13px;line-height:1.4;max-width:34ch}
   .txt span{margin-top:12px;color:#fff;font-weight:700;font-size:13.5px;text-decoration:underline;text-underline-offset:4px;text-decoration-thickness:2px}
   .tile:hover .txt span{color:var(--brand)}`,
  `<a class="tile" href="#"><img src="../assets/cat-antideslizantes.webp" alt=""><div class="grad"></div><div class="txt"><h3 class="display">Cada paso, seguro</h3><p>Escaleras y rampas sin resbalones, en interiores y exteriores.</p><span>Ver productos →</span></div></a>`
);

files['secciones/ventanas.html'] = page(
  'group="Secciones" name="Promo Ventanas de PVC"',
  'Sección ventanas',
  `body{padding:0}
   .sec{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;padding:48px 40px;max-width:1150px;margin:0 auto}
   .img{border-radius:18px;overflow:hidden;aspect-ratio:4/3}.img img{width:100%;height:100%;object-fit:cover}
   .k{color:var(--brand-dark);font-family:'Barlow';font-weight:700;text-transform:uppercase;letter-spacing:.16em;font-size:13px}
   h2{font-size:30px;font-weight:800;margin-top:8px}
   p{color:var(--steel);line-height:1.65;margin-top:14px;font-size:15px}
   ul{list-style:none;margin-top:16px;font-size:14px;line-height:2}
   ul span{color:var(--brand);font-weight:700;margin-right:8px}
   .b{display:inline-block;background:var(--navy);color:#fff;font-weight:700;padding:13px 22px;border-radius:10px;text-decoration:none;margin-top:22px;font-size:14px}`,
  `<div class="sec"><div class="img"><img src="../assets/ventana-jardin.webp" alt=""></div><div>
    <p class="k">Fabricación e instalación</p>
    <h2>Ventanas de PVC de alta prestación</h2>
    <p>Cierre hermético superior que reduce significativamente el ruido exterior. Resistentes a ambientes salinos, rayos UV e intemperie.</p>
    <ul><li><span>✓</span>Reducción de ruido y cierre hermético</li><li><span>✓</span>Serie 50NF doble corrediza · Serie 52NF fija + corrediza</li><li><span>✓</span>Fabricación a medida e instalación profesional</li></ul>
    <a class="b" href="#">Conocer las ventanas →</a>
   </div></div>`
);

files['secciones/certificaciones.html'] = page(
  'group="Secciones" name="Banda de certificaciones"',
  'Certificaciones',
  `body{padding:0}
   .sec{background:var(--navy);color:#fff;padding:44px 40px;text-align:center}
   h2{font-size:24px;font-weight:800}h2 span{color:var(--brand)}
   .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;max-width:1000px;margin:28px auto 0}
   .c{background:#ffffff0d;border:1px solid #ffffff1a;border-radius:14px;padding:20px}
   .c b{font-family:'Barlow';font-weight:800;font-size:20px;color:var(--brand);display:block}
   .c p{font-size:13px;font-weight:600;margin-top:4px}.c small{font-size:10px;color:#ffffff80}`,
  `<div class="sec"><h2>Procesos certificados <span>TRINORMA</span></h2><div class="grid">
    <div class="c"><b>ISO 9001</b><p>Gestión de calidad</p><small>SC-CER901829</small></div>
    <div class="c"><b>ISO 14001</b><p>Gestión ambiental</p><small>SA-CER901830</small></div>
    <div class="c"><b>ISO 45001</b><p>Seguridad y salud</p><small>ST-CER901818</small></div>
    <div class="c"><b>CO₂</b><p>Huella de carbono</p><small>Medición verificada</small></div>
   </div></div>`
);

files['secciones/testimonios.html'] = page(
  'group="Secciones" name="Testimonios"',
  'Testimonios',
  `.wrap{max-width:1100px;margin:0 auto;text-align:center}
   h2{font-size:28px;font-weight:800}.sub{color:var(--steel);margin-top:6px;font-size:15px}
   .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:28px;text-align:left}
   figure{background:var(--mist);border-radius:14px;padding:18px;display:flex;flex-direction:column;justify-content:space-between}
   blockquote{font-size:13px;line-height:1.55}
   figcaption{margin-top:14px;font-family:'Barlow';font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:var(--brand-dark)}`,
  `<div class="wrap"><h2 class="display">Confían en nuestro trabajo</h2><p class="sub">Formamos sólidos lazos con nuestros clientes.</p><div class="grid">
    <figure><blockquote>“La atención que recibimos es rápida, el trato súper bueno y siempre dispuestos a ayudar.”</blockquote><figcaption>DECORCENTER</figcaption></figure>
    <figure><blockquote>“La atención brindada por la empresa es profesional y se da en un plazo satisfactorio.”</blockquote><figcaption>PROMART</figcaption></figure>
    <figure><blockquote>“El personal tiene buen trato y posee gran variedad de productos.”</blockquote><figcaption>ARENERA JAÉN SAC</figcaption></figure>
    <figure><blockquote>“El servicio prestado es bueno, cumple con los estándares.”</blockquote><figcaption>INVERSIONES ARAKAKI SAC</figcaption></figure>
   </div></div>`
);

for (const [p, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(OUT, p), content, 'utf8');
}
console.log('Archivos generados:');
for (const p of Object.keys(files)) console.log('  ' + p);
console.log('Assets copiados: ' + ASSETS.length);
