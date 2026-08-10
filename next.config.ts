import type { NextConfig } from "next";

/**
 * Redirecciones 301 desde las URLs del WordPress antiguo (nefusac.com)
 * hacia la nueva estructura. Así no se pierde el posicionamiento en Google
 * ni los enlaces guardados por los clientes.
 */
const OLD_CATEGORY_MAP: Record<string, string> = {
  molduras: "molduras-decorativas",
  antideslizantes: "antideslizantes",
  "crucetas-y-niveladores": "crucetas-y-niveladores",
  juntas: "juntas",
  zocalos: "zocalos",
  "paneles-de-pvc": "paneles-de-pvc",
  "perfiles-para-acabados": "perfiles-para-acabados",
  "listelos-para-pared": "listelos-para-pared",
  "otros-productos": "otros-productos",
};

/** URL vieja de producto/subcategoría → nueva ruta */
const OLD_PRODUCT_MAP: Record<string, string> = {
  // Molduras
  "molduras/moldura-decorativa-e2": "molduras-decorativas/moldura-decorativa-e2",
  "molduras/moldura-decorativa-e5": "molduras-decorativas/moldura-decorativa-e5",
  "molduras/moldura-decorativa-e7": "molduras-decorativas/moldura-decorativa-e7",
  "molduras/moldura-decorativa-e11": "molduras-decorativas/moldura-decorativa-e11",
  "molduras/moldura-decorativa-e40": "molduras-decorativas/moldura-decorativa-e40",
  // Antideslizantes
  "antideslizantes/antideslizante-pvc": "antideslizantes/antideslizante-pvc",
  "antideslizantes/antideslizante-senalizador":
    "antideslizantes/antideslizante-senalizador",
  "antideslizantes/antideslizante-base-tapa":
    "antideslizantes/antideslizante-base-tapa",
  "antideslizantes/antideslizante-cinta": "antideslizantes/antideslizante-cinta",
  "antideslizantes/antideslizante-paso-completo":
    "antideslizantes/antideslizante-paso-completo",
  // Crucetas
  "crucetas-y-niveladores/crucetas-para-ceramicos-y-o-porcelanatos":
    "crucetas-y-niveladores/crucetas-para-ceramicos-y-o-porcelanatos",
  "crucetas-y-niveladores/crucetas-para-separador-de-vidrio":
    "crucetas-y-niveladores/crucetas-para-separador-de-vidrio",
  // Juntas
  "juntas/juntas-para-pisos-de-distinto-nivel":
    "juntas/juntas-para-pisos-de-distinto-nivel",
  "juntas/juntas-para-pisos-iguales": "juntas/juntas-para-pisos-iguales",
  "juntas/juntas-para-porcelanato-y-ceramicas":
    "juntas/juntas-para-porcelanato-y-ceramicas",
  "juntas/juntas-para-concreto": "juntas/juntas-para-concreto",
  "juntas/junta-para-cubrepisos": "juntas",
  // Zócalos
  "zocalos/contrazocalo": "zocalos/contrazocalo",
  "zocalos/zocalo-decorativo": "zocalos/zocalo-decorativo",
  "zocalos/zocalo-sanitario": "zocalos/zocalo-sanitario",
  // Paneles
  "paneles-de-pvc/panel-de-pvc": "paneles-de-pvc/panel-de-pvc",
  // Perfiles
  "perfiles-para-acabados/rodoplast-evo": "perfiles-para-acabados/rodoplast-evo",
  "perfiles-para-acabados/rodoplast": "perfiles-para-acabados/rodoplast",
  "perfiles-para-acabados/perfil-de-aluminio":
    "perfiles-para-acabados/perfil-de-aluminio",
  // Listelos
  "listelos-para-pared/listelos-de-aluminio":
    "listelos-para-pared/listelos-de-aluminio",
  "listelos-para-pared/listelos-de-acero-inoxidable":
    "listelos-para-pared/listelos-de-acero-inoxidable",
  // Otros
  "otros-productos/borde-de-jardin": "otros-productos/borde-de-jardin",
  "otros-productos/protector-de-esquina": "otros-productos",
  "otros-productos/retenedor-de-agua": "otros-productos",
  "otros-productos/perfil-tipo-persiana": "otros-productos",
  "otros-productos/protector-de-lluvia": "otros-productos/protector-de-lluvia",
};

/** Páginas sueltas del WordPress viejo (/producto/<slug>) */
const OLD_SINGLE_PRODUCTS: Record<string, string> = {
  "moldura-decorativa-e2": "molduras-decorativas/moldura-decorativa-e2",
  "moldura-decorativa-e5": "molduras-decorativas/moldura-decorativa-e5",
  "moldura-decorativa-e6": "molduras-decorativas/moldura-decorativa-e6",
  "moldura-decorativa-e7": "molduras-decorativas/moldura-decorativa-e7",
  "moldura-decorativa-e11": "molduras-decorativas/moldura-decorativa-e11",
  "moldura-decorativa-e40": "molduras-decorativas/moldura-decorativa-e40",
  "zocalo-sanitario-de-53-5mm": "zocalos/zocalo-sanitario",
  "juntas-para-concreto": "juntas/juntas-para-concreto",
};

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Páginas principales del sitio viejo
      { source: "/somos", destination: "/nosotros", permanent: true },
      { source: "/somos/", destination: "/nosotros", permanent: true },
      { source: "/ventana-de-pvc", destination: "/ventanas-de-pvc", permanent: true },
      { source: "/contacto/", destination: "/contacto", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:slug*", destination: "/", permanent: true },
      { source: "/proyecto/:slug*", destination: "/proyectos", permanent: true },
      {
        source: "/terminos-y-condiciones/",
        destination: "/terminos-y-condiciones",
        permanent: true,
      },
      // Artículos viejos del blog
      {
        source: "/recomendaciones-para-trabajar-con-antideslizantes",
        destination: "/productos/antideslizantes",
        permanent: true,
      },
      {
        source:
          "/una-alternativa-sanitaria-para-la-reactivacion-de-negocios-en-esta-pandemia",
        destination: "/productos/zocalos",
        permanent: true,
      },
      {
        source: "/cuestionario-revista-constructivo",
        destination: "/nosotros",
        permanent: true,
      },
      // Catálogo viejo
      {
        source: "/wp-content/uploads/2024/03/CATALOGO-PRODUCTOS-NEFUSAC-2024.pdf",
        destination: "/fichas/catalogo-nefusac.pdf",
        permanent: true,
      },
      // Productos sueltos del WooCommerce viejo
      ...Object.entries(OLD_SINGLE_PRODUCTS).map(([slug, dest]) => ({
        source: `/producto/${slug}`,
        destination: `/productos/${dest}`,
        permanent: true,
      })),
      // Subcategorías/productos viejos
      ...Object.entries(OLD_PRODUCT_MAP).map(([oldPath, dest]) => ({
        source: `/categoria-producto/${oldPath}`,
        destination: `/productos/${dest}`,
        permanent: true,
      })),
      // Categorías viejas (después de las rutas específicas)
      ...Object.entries(OLD_CATEGORY_MAP).map(([oldSlug, dest]) => ({
        source: `/categoria-producto/${oldSlug}`,
        destination: `/productos/${dest}`,
        permanent: true,
      })),
      // Cualquier otra ruta vieja de categoría-producto
      {
        source: "/categoria-producto/:slug*",
        destination: "/productos",
        permanent: true,
      },
      { source: "/producto/:slug*", destination: "/productos", permanent: true },
    ];
  },
};

export default nextConfig;
