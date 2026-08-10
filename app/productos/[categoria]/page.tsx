import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { categories, getCategory, getProductsByCategory } from "@/lib/products";
import { waLink } from "@/lib/site";

type Props = { params: Promise<{ categoria: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const cat = getCategory(categoria);
  if (!cat) return {};
  return {
    title: cat.name,
    description: cat.description,
  };
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;
  const cat = getCategory(categoria);
  if (!cat) notFound();

  const prods = getProductsByCategory(cat.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumbs
        items={[{ href: "/productos", label: "Productos" }, { label: cat.name }]}
      />
      <div className="mt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-display font-extrabold text-4xl text-ink">
            {cat.name}
          </h1>
          <p className="mt-2 text-steel max-w-2xl">{cat.description}</p>
        </div>
        <a
          href={waLink(`Hola NEFUSAC, quiero cotizar productos de ${cat.name}.`)}
          target="_blank"
          rel="noopener"
          className="shrink-0 bg-brand hover:bg-brand-dark text-white font-bold px-5 py-3 rounded-lg transition-colors text-center"
        >
          Cotizar {cat.name.toLowerCase()}
        </a>
      </div>

      {prods.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {prods.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-steel">
          Pronto publicaremos los productos de esta categoría. Escríbenos por
          WhatsApp para recibir el catálogo completo.
        </p>
      )}
    </div>
  );
}
