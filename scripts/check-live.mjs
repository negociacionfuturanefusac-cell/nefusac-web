// Verifica que la página en vivo tenga los textos nuevos
const B = 'https://nefusac-web.vercel.app';
const home = await (await fetch(B + '/', { headers: { 'cache-control': 'no-cache' } })).text();
const prods = await (await fetch(B + '/productos', { headers: { 'cache-control': 'no-cache' } })).text();
console.log('home: nombre en tile:', home.includes('Molduras decorativas') && home.includes('Techos que enamoran'));
console.log('home: modelos pedibles:', home.includes('E11, E40 y Titan'));
console.log('catalogo: texto de uso:', prods.includes('Evitan resbalones en escaleras y rampas'));
console.log('catalogo: complementos:', prods.includes('Borde para jardín, burlete para puertas'));
