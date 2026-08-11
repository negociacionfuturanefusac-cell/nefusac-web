import raw from "@/data/products.json";

export type ProductImage = {
  src: string;
  w: number;
  h: number;
  alt?: string;
};

export type Spec = { label: string; value: string };

export type Product = {
  /** Slug único dentro de su categoría (URL: /productos/[categoria]/[slug]) */
  slug: string;
  name: string;
  category: string;
  /** Resumen de 1-2 frases para tarjetas y metadescription */
  shortDescription: string;
  /** Párrafos de descripción larga */
  description: string[];
  /** Colores disponibles */
  colors?: string[];
  /** Medidas / presentaciones como pares etiqueta-valor */
  specs?: Spec[];
  /** Código interno NEFUSAC */
  code?: string;
  /** Ruta a la ficha técnica PDF en /public */
  ficha?: string;
  images: ProductImage[];
  /** Foto de producto para la tarjeta (por defecto images[0]) */
  cardImage?: string;
  /** Foto ambientada/instalada que se muestra al pasar el mouse */
  hoverImage?: string;
  /** Producto solo a pedido */
  aPedido?: boolean;
  /** Destacado en home / categoría */
  featured?: boolean;
  /** Usos y aplicaciones típicas */
  usos?: string[];
};

export type Category = {
  slug: string;
  name: string;
  /** Frase corta para tarjetas */
  tagline: string;
  /** Para qué sirve y qué se puede pedir (texto de venta en tarjetas) */
  uso?: string;
  description: string;
  image: string;
  order: number;
};

type Data = { categories: Category[]; products: Product[] };

const data = raw as unknown as Data;

export const categories: Category[] = [...data.categories].sort(
  (a, b) => a.order - b.order
);

export const products: Product[] = data.products;

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProduct(
  categorySlug: string,
  productSlug: string
): Product | undefined {
  return products.find(
    (p) => p.category === categorySlug && p.slug === productSlug
  );
}

export function getFeaturedProducts(limit = 8): Product[] {
  const featured = products.filter((p) => p.featured);
  return (featured.length >= limit ? featured : products).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameCat = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );
  if (sameCat.length >= limit) return sameCat.slice(0, limit);
  const others = products.filter(
    (p) => p.category !== product.category
  );
  return [...sameCat, ...others].slice(0, limit);
}
