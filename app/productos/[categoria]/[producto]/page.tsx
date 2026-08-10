import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Gallery from "@/components/Gallery";
import ProductCard from "@/components/ProductCard";
import {
  getCategory,
  getProduct,
  getRelatedProducts,
  products,
} from "@/lib/products";
import { SITE, waLink } from "@/lib/site";

type Props = { params: Promise<{ categoria: string; producto: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ categoria: p.category, producto: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria, producto } = await params;
  const p = getProduct(categoria, producto);
  if (!p) return {};
  return {
    title: p.name,
    description: p.shortDescription,
    openGraph: p.images[0]
      ? { images: [{ url: p.images[0].src }] }
      : undefined,
  };
}

export default async function ProductoPage({ params }: Props) {
  const { categoria, producto } = await params;
  const product = getProduct(categoria, producto);
  if (!product) notFound();
  const cat = getCategory(product.category);
  const related = getRelatedProducts(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((i) => SITE.url + i.src),
    brand: { "@type": "Brand", name: "NEFUSAC" },
    ...(product.code ? { sku: product.code } : {}),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { href: "/productos", label: "Productos" },
          ...(cat
            ? [{ href: `/productos/${cat.slug}`, label: cat.name }]
            : []),
          { label: product.name },
        ]}
      />

      <div className="mt-6 grid lg:grid-cols-2 gap-10">
        <Gallery images={product.images} name={product.name} />

        <div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink leading-tight">
            {product.name}
          </h1>
          {product.code && (
            <p className="mt-1 text-sm text-steel">Cód. {product.code}</p>
          )}
          <p className="mt-4 text-lg text-steel leading-relaxed">
            {product.shortDescription}
          </p>

          {product.colors && product.colors.length > 0 && (
            <div className="mt-6">
              <h2 className="font-display font-bold text-sm uppercase tracking-wider text-ink">
                Colores disponibles
              </h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <span
                    key={c}
                    className="bg-mist border border-line rounded-full px-3 py-1 text-sm text-ink"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.specs && product.specs.length > 0 && (
            <div className="mt-6">
              <h2 className="font-display font-bold text-sm uppercase tracking-wider text-ink">
                Especificaciones
              </h2>
              <dl className="mt-2 border border-line rounded-xl overflow-hidden">
                {product.specs.map((s, i) => (
                  <div
                    key={s.label + i}
                    className={`grid grid-cols-[40%_60%] text-sm ${
                      i % 2 === 0 ? "bg-mist/60" : "bg-white"
                    }`}
                  >
                    <dt className="px-4 py-2.5 font-semibold text-ink">
                      {s.label}
                    </dt>
                    <dd className="px-4 py-2.5 text-steel">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {product.aPedido && (
            <p className="mt-4 inline-block bg-navy text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded">
              Producto a pedido
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(
                `Hola NEFUSAC, quiero cotizar: ${product.name}${
                  product.code ? ` (Cód. ${product.code})` : ""
                }.`
              )}
              target="_blank"
              rel="noopener"
              className="bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3.5 rounded-lg transition-colors"
            >
              Cotizar por WhatsApp
            </a>
            {product.ficha && (
              <a
                href={product.ficha}
                target="_blank"
                rel="noopener"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Ficha técnica (PDF) ↓
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Descripción larga */}
      <section className="mt-12 max-w-3xl">
        <h2 className="font-display font-extrabold text-2xl text-ink">
          Descripción
        </h2>
        <div className="mt-4 space-y-4 text-steel leading-relaxed">
          {product.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {product.usos && product.usos.length > 0 && (
          <>
            <h3 className="mt-8 font-display font-bold text-lg text-ink">
              Usos y aplicaciones
            </h3>
            <ul className="mt-3 space-y-2 text-steel">
              {product.usos.map((u) => (
                <li key={u} className="flex gap-2">
                  <span className="text-brand font-bold">✓</span> {u}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display font-extrabold text-2xl text-ink">
            También te puede interesar
          </h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={`${p.category}-${p.slug}`} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
